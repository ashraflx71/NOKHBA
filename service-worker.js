"use strict";

/* =========================================
   NOKHBA | نخبة
   SERVICE WORKER
   VERSION 5.4
   NETWORK FIRST + OFFLINE SUPPORT
   ========================================= */

const CACHE_NAME = "nokhba-v5.4";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./hero-nokhba.svg",

  "./app.js?v=20261116-5",
  "./products.js",
  "./products-multi.js?v=20261116-9",

  "./about.html",
  "./contact.html",
  "./privacy.html",
  "./disclosure.html",

  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

const INDEX_URL = new URL(
  "./index.html",
  self.registration.scope
);

const HOME_URL = new URL(
  "./",
  self.registration.scope
);

/* =========================================
   INSTALL
   ========================================= */

self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      await Promise.allSettled(
        APP_FILES.map(async file => {
          const url = new URL(
            file,
            self.registration.scope
          );

          try {
            const response = await fetch(url, {
              cache: "reload"
            });

            if (
              response.ok &&
              response.type === "basic"
            ) {
              await cache.put(
                url.href,
                response
              );
            }
          } catch (error) {
            console.warn(
              "NOKHBA cache install:",
              file
            );
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

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  /* =====================================
     NAVIGATION: NETWORK FIRST
     ===================================== */

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);

        try {
          const response = await fetch(request);

          if (response.ok) {
            await cache.put(
              request,
              response.clone()
            );
          }

          return response;

        } catch (error) {
          const cachedPage = await cache.match(
            request
          );

          if (cachedPage) {
            return cachedPage;
          }

          const cachedIndex = await cache.match(
            INDEX_URL.href
          );

          if (cachedIndex) {
            return cachedIndex;
          }

          const cachedHome = await cache.match(
            HOME_URL.href
          );

          if (cachedHome) {
            return cachedHome;
          }

          return new Response(
            `<!DOCTYPE html>
            <html lang="ar" dir="rtl">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport"
                    content="width=device-width, initial-scale=1">
              <meta name="theme-color" content="#15191e">
              <title>نخبة | NOKHBA</title>
            </head>
            <body style="
              background:#15191e;
              color:#d6b36a;
              text-align:center;
              padding:50px 20px;
              font-family:Arial,sans-serif;
              line-height:2;
            ">
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

  /* =====================================
     STATIC FILES: NETWORK FIRST
     ===================================== */

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      try {
        const response = await fetch(request);

        if (
          response.ok &&
          response.type === "basic"
        ) {
          await cache.put(
            request,
            response.clone()
          );
        }

        return response;

      } catch (error) {
        const cached = await cache.match(request);

        if (cached) {
          return cached;
        }

        return new Response("", {
          status: 503,
          statusText: "Offline"
        });
      }
    })()
  );
});
