const MODEL = "@cf/black-forest-labs/flux-1-schnell";
const MAX_PROMPT_LENGTH = 1800;
const recentRequests = new Map();

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    return json({ error: "الطلب غير مسموح من هذا المصدر." }, 403);
  }

  if (!env.AI || typeof env.AI.run !== "function") {
    return json({
      error: "لم يتم ربط Workers AI. أضف AI binding باسم AI من إعدادات Cloudflare."
    }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "تعذر قراءة الطلب." }, 400);
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) return json({ error: "اكتب وصف الصورة أولًا." }, 400);
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return json({ error: "الوصف طويل جدًا. الحد الأقصى 1800 حرف." }, 413);
  }

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const limit = 3;
  const timestamps = (recentRequests.get(ip) || []).filter(t => now - t < windowMs);
  if (timestamps.length >= limit) {
    return json({ error: "وصلت إلى الحد المؤقت: 3 صور كل 10 دقائق. حاول لاحقًا." }, 429);
  }
  timestamps.push(now);
  recentRequests.set(ip, timestamps);

  try {
    const result = await env.AI.run(MODEL, {
      prompt,
      steps: 4,
      seed: Math.floor(Math.random() * 2147483647)
    });

    if (!result || typeof result.image !== "string" || !result.image) {
      return json({ error: "لم تصل صورة صالحة من النموذج. حاول مرة أخرى." }, 502);
    }

    return json({
      image: "data:image/jpeg;charset=utf-8;base64," + result.image,
      model: MODEL,
      note: "توليد الصورة يخضع للحصة المجانية اليومية المتاحة في Cloudflare Workers AI."
    });
  } catch (error) {
    return json({
      error: "تعذر توليد الصورة الآن. قد تكون الحصة المجانية اليومية قد نفدت أو توجد مشكلة مؤقتة."
    }, 502);
  }
}

export async function onRequestGet() {
  return json({ status: "NOKHBA image endpoint ready", model: MODEL });
}
