const MODEL = "@cf/google/gemma-4-26b-a4b-it";
const MAX_PROMPT_LENGTH = 1800;
const MAX_OUTPUT_TOKENS = 650;

// Small per-isolate safety throttle. This is a basic guard, not a global rate limiter.
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
      error: "لم يتم ربط Workers AI بالموقع بعد. أضف ربط Workers AI باسم AI من إعدادات Cloudflare ثم أعد النشر."
    }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "تعذر قراءة الطلب. حاول مرة أخرى." }, 400);
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  if (!prompt) return json({ error: "اكتب طلبك أولًا." }, 400);
  if (prompt.length > MAX_PROMPT_LENGTH) {
    return json({ error: "الطلب طويل جدًا. اختصره إلى 1800 حرف." }, 413);
  }

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const limit = 10;
  const timestamps = (recentRequests.get(ip) || []).filter(t => now - t < windowMs);
  if (timestamps.length >= limit) {
    return json({ error: "وصلت إلى حد الاستخدام المؤقت. انتظر قليلًا ثم حاول مجددًا." }, 429);
  }
  timestamps.push(now);
  recentRequests.set(ip, timestamps);
  if (recentRequests.size > 500) {
    for (const [key, values] of recentRequests) {
      if (!values.length || now - values[values.length - 1] >= windowMs) recentRequests.delete(key);
    }
  }

  try {
    const result = await env.AI.run(MODEL, {
      messages: [
        {
          role: "system",
          content: "أنت مساعد عربي داخل موقع نخبة NOKHBA المصري. أجب بالعربية الواضحة والعملية. ساعد في كتابة الأفكار والإعلانات وأوصاف المنتجات. لا تختلق أسعارًا أو تقييمات أو مواصفات أو روابط أو حقائق عن منتج لم يذكرها المستخدم. إذا نقصت البيانات فاذكر ذلك بوضوح. اجعل الإجابة موجزة ومنظمة، ولا تدّع أنك تحققت من معلومات مباشرة."
        },
        { role: "user", content: prompt }
      ],
      max_tokens: MAX_OUTPUT_TOKENS,
      temperature: 0.6
    });

    const answer = typeof result === "string"
      ? result
      : (result?.response || result?.output_text || result?.result || "");

    if (!answer || typeof answer !== "string") {
      return json({ error: "لم يصل رد واضح من النموذج. حاول مرة أخرى." }, 502);
    }

    return json({ answer });
  } catch (error) {
    return json({
      error: "تعذر تشغيل المساعد الآن. قد تكون الحصة المجانية انتهت أو توجد مشكلة مؤقتة في النموذج."
    }, 502);
  }
}

export async function onRequestGet() {
  return json({ status: "NOKHBA AI endpoint ready", model: MODEL }, 200);
}
