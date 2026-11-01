
"use strict";

/* =========================================
   NOKHBA | نخبة
   Service Worker - Version 3.0
   ========================================= */

const CACHE_NAME = "nokhba-v3";

const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];


/* =========================================
   1. تثبيت التطبيق وحفظ الملفات
   ========================================= */

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME).then(async cache => {

      for (const file of APP_FILES) {

        try {

          const response = await fetch(file);

          if (response.ok) {

            await cache.put(file, response);

          } else {

            console.warn(
              "تعذر حفظ الملف:",
              file
            );

          }

        } catch (error) {

          console.warn(
            "تعذر تحميل الملف:",
            file,
            error
          );

        }

      }

    })

  );

  self.skipWaiting();

});


/* =========================================
   2. تفعيل النسخة الجديدة
   ========================================= */

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(

        keys
          .filter(key =>
            key.startsWith("nokhba-") &&
            key !== CACHE_NAME
          )
          .map(key => caches.delete(key))

      );

    }).then(() => {

      return self.clients.claim();

    })

  );

});


/* =========================================
   3. التعامل مع طلبات الصفحات
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


  /* صفحات الموقع */

  if (request.mode === "navigate") {

    event.respondWith(

      fetch(request)

        .then(response => {

          if (response.ok) {

            const copy = response.clone();

            caches.open(CACHE_NAME).then(cache => {

              cache.put("./index.html", copy);

            });

          }

          return response;

        })

        .catch(async () => {

          return (

            await caches.match(request) ||

            await caches.match("./index.html") ||

            new Response(
              "أنت غير متصل بالإنترنت. يرجى الاتصال بالشبكة ثم المحاولة مرة أخرى.",
              {
                status: 503,
                headers: {
                  "Content-Type": "text/plain; charset=utf-8"
                }
              }
            )

          );

        })

    );

    return;

  }


  /* الملفات الثابتة */

  event.respondWith(

    caches.match(request).then(cached => {

      if (cached) {
        return cached;
      }

      return fetch(request).then(response => {

        if (
          response.ok &&
          response.type === "basic"
        ) {

          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {

            cache.put(request, copy);

          });

        }

        return response;

      });

    })

  );

});
