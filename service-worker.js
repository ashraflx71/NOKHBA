"use strict";

/* =========================================
   NOKHBA | نخبة
   SERVICE WORKER
   VERSION 4.1
   ========================================= */

const CACHE_NAME = "nokhba-v4.1";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./products-multi.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

/* INSTALL */

self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      await Promise.all(
        APP_FILES.map(async file => {
          try {
            const response = await fetch(file);

            if (response.ok) {
              await cache.put(file, response);
            }
          } catch (error) {
            console.warn("NOKHBA cache error:", file);
          }
        })
      );

      await self.skipWaiting();
    })()
  );
});

/* ACTIVATE */

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

/* FETCH */

self.addEventListener("fetch", event => {

  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  /* HTML PAGES */

  if (request.mode === "navigate") {

    event.respondWith(
      (async () => {

        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);

            await cache.put("./index.html", response.clone());
          }

          return response;

        } catch (error) {

          return (
            await caches.match("./index.html") ||
            new Response(
              "أنت غير متصل بالإنترنت. يرجى المحاولة لاحقاً.",
              {
                status: 503,
                headers: {
                  "Content-Type": "text/plain; charset=utf-8"
                }
              }
            )
          );
        }

      })()
    );

    return;
  }

  /* STATIC FILES */

  event.respondWith(
    (async () => {

      const cached = await caches.match(request);

      if (cached) return cached;

      try {

        const response = await fetch(request);

        if (response.ok && response.type === "basic") {

          const cache = await caches.open(CACHE_NAME);

          await cache.put(request, response.clone());
        }

        return response;

      } catch (error) {

        return new Response("", {
          status: 503,
          statusText: "Offline"
        });

      }

    })()
  );

});
