"use strict";

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
});

function decodeBase64Url(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - normalized.length % 4) % 4);
  return Uint8Array.from(atob(padded), (c) => c.charCodeAt(0));
}

function decodeJwtPart(value) {
  return JSON.parse(new TextDecoder().decode(decodeBase64Url(value)));
}

async function verifyAccessJwt(token, env) {
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD ||
      env.ACCESS_TEAM_DOMAIN.includes("REPLACE_") ||
      env.ACCESS_AUD.includes("REPLACE_")) {
    throw new Error("ACCESS_NOT_CONFIGURED");
  }

  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("INVALID_TOKEN");

  const header = decodeJwtPart(parts[0]);
  const claims = decodeJwtPart(parts[1]);
  if (header.alg !== "RS256" || !header.kid) throw new Error("INVALID_ALGORITHM");

  const team = env.ACCESS_TEAM_DOMAIN.replace(/\/$/, "");
  const issuer = team.startsWith("https://") ? team : "https://" + team;
  if (claims.iss !== issuer) throw new Error("INVALID_ISSUER");

  const aud = Array.isArray(claims.aud) ? claims.aud : [claims.aud];
  if (!aud.includes(env.ACCESS_AUD)) throw new Error("INVALID_AUDIENCE");

  const now = Math.floor(Date.now() / 1000);
  if (typeof claims.exp !== "number" || claims.exp <= now) throw new Error("TOKEN_EXPIRED");
  if (typeof claims.nbf === "number" && claims.nbf > now + 60) throw new Error("TOKEN_NOT_ACTIVE");

  const certResponse = await fetch(issuer + "/cdn-cgi/access/certs", {
    headers: { "accept": "application/json" }
  });
  if (!certResponse.ok) throw new Error("CERTIFICATE_FETCH_FAILED");
  const certs = await certResponse.json();
  const jwk = (certs.keys || []).find((key) => key.kid === header.kid);
  if (!jwk) throw new Error("SIGNING_KEY_NOT_FOUND");

  const publicKey = await crypto.subtle.importKey(
    "jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]
  );
  const signingInput = new TextEncoder().encode(parts[0] + "." + parts[1]);
  const signature = decodeBase64Url(parts[2]);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", publicKey, signature, signingInput);
  if (!valid) throw new Error("INVALID_SIGNATURE");

  return claims;
}

async function requireAdmin(request, env) {
  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token) throw new Error("ACCESS_TOKEN_MISSING");
  return verifyAccessJwt(token, env);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return json({ error: "NOT_FOUND" }, 404);
    if (!env.DB) return json({ error: "DATABASE_NOT_CONFIGURED" }, 503);

    let claims;
    try {
      claims = await requireAdmin(request, env);
    } catch (error) {
      const message = error && error.message ? error.message : "UNAUTHORIZED";
      const status = message === "ACCESS_NOT_CONFIGURED" ? 503 : 401;
      return json({ error: message }, status);
    }

    try {
      if (request.method === "GET" && url.pathname === "/api/health") {
        const products = await env.DB.prepare("SELECT COUNT(*) AS count FROM products").first();
        const tasks = await env.DB.prepare("SELECT COUNT(*) AS count FROM ai_tasks").first();
        return json({
          status: "ok",
          products: products ? products.count : 0,
          tasks: tasks ? tasks.count : 0,
          admin: claims.email || claims.sub || "authenticated",
          ai: "not_configured"
        });
      }

      if (request.method === "GET" && url.pathname === "/api/products") {
        const result = await env.DB.prepare(
          "SELECT id, name, store, product_url, image_url, category, price_egp, currency, source_checked_at, status, created_at, updated_at FROM products ORDER BY updated_at DESC LIMIT 100"
        ).all();
        return json({ products: result.results || [] });
      }

      if (request.method === "GET" && url.pathname === "/api/tasks") {
        const result = await env.DB.prepare(
          "SELECT id, task_type, status, error_message, created_at, completed_at FROM ai_tasks ORDER BY id DESC LIMIT 50"
        ).all();
        return json({ tasks: result.results || [] });
      }

      if (request.method === "POST" && url.pathname === "/api/tasks") {
        const body = await request.json().catch(() => null);
        const allowed = new Set(["product_discovery", "price_check", "description_draft", "code_review"]);
        if (!body || !allowed.has(body.task_type)) {
          return json({ error: "INVALID_TASK_TYPE" }, 400);
        }
        const safeInput = JSON.stringify(body.input && typeof body.input === "object" ? body.input : {});
        const insert = await env.DB.prepare(
          "INSERT INTO ai_tasks (task_type, status, input_json) VALUES (?, 'queued', ?)"
        ).bind(body.task_type, safeInput).run();
        await env.DB.prepare(
          "INSERT INTO audit_logs (actor, action, target_type, target_id, details_json) VALUES (?, ?, ?, ?, ?)"
        ).bind(String(claims.email || claims.sub || "admin"), "task_queued", "ai_task", String(insert.meta.last_row_id), JSON.stringify({ task_type: body.task_type })).run();
        return json({ accepted: true, task_id: insert.meta.last_row_id, status: "queued", note: "Queue only; AI execution is not enabled yet." }, 202);
      }

      return json({ error: "NOT_FOUND" }, 404);
    } catch (error) {
      return json({ error: "INTERNAL_ERROR", detail: error && error.message ? error.message : "Unknown error" }, 500);
    }
  }
};
