
"use strict";

/* =========================================
   NOKHBA | نخبة
   SERVICE WORKER
   VERSION 4.3
   NETWORK FIRST + OFFLINE SUPPORT
   ========================================= */

const CACHE_NAME = "nokhba-v4.3";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./products.js",
  "./products-multi.js",
  "./about.html",
  "./contact.html",
  "./privacy.html",
  "./disclosure.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

const INDEX_URL = new URL("./index.html", self.registration.scope);

/* =========================================
   INSTALL
   ========================================= */

self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      await Promise.allSettled(
        APP_FILES.map(async file => {
          const url = new URL(file, self.registration.scope);

          try {
            const response = await fetch(url, {
              cache: "reload"
            });

            if (response.ok && response.type === "basic") {
              await cache.put(url, response);
            }
          } catch (error) {
            console.warn("NOKHBA install cache:", file);
          }
        })
      );

      await self.skipWaiting();
    })()
  );
});

/* =========================================
   ACTIVATE
   ========================================= */

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(key =>
            key.startsWith("nokhba-") &&
            key !== CACHE_NAME
          )
          .map(key => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

/* =========================================
   FETCH
   ========================================= */

self.addEventListener("fetch", event => {

  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  /* NAVIGATION */

  if (request.mode === "navigate") {

    event.respondWith(
      (async () => {

        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);

            // احفظ كل صفحة في عنوانها الصحيح حتى لا تستبدل
            // الصفحات الداخلية نسخة الصفحة الرئيسية.
            await cache.put(request, response.clone());
          }

          return response;

        } catch (error) {

          // اعرض الصفحة المطلوبة من التخزين أولاً.
          const cachedPage = await caches.match(request);

          if (cachedPage) return cachedPage;

          // الصفحة الرئيسية بديل أخير عند تعذر العثور على صفحة أخرى.
          const cachedIndex = await caches.match(INDEX_URL);

          if (cachedIndex) return cachedIndex;

          return new Response(
            `<!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>NOKHBA | نخبة</title>
            <body style="background:#15191e;color:#d6b36a;text-align:center;padding:50px;font-family:Arial">
            <h2>نخبة | NOKHBA</h2>
            <p>أنت غير متصل بالإنترنت حالياً.</p>
            <p>يرجى الاتصال بالإنترنت والمحاولة مرة أخرى.</p>
            </body>
            </html>`,
            {
              status: 503,
              headers: {
                "Content-Type": "text/html; charset=utf-8"
              }
            }
          );
        }

      })()
    );

    return;
  }

  /* STATIC FILES: NETWORK FIRST */

  event.respondWith(
    (async () => {

      const cache = await caches.open(CACHE_NAME);

      try {

        const response = await fetch(request);

        if (response.ok && response.type === "basic") {
          await cache.put(request, response.clone());
        }

        return response;

      } catch (error) {

        const cached = await cache.match(request);

        if (cached) return cached;

        return new Response("", {
          status: 503,
          statusText: "Offline"
        });

      }

    })()
  );

});
