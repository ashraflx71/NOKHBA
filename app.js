
/* ==================================
   NOKHBA | نخبة
   Main Application
   ================================== */

"use strict";

// قائمة المنتجات
// سنضيف المنتجات الحقيقية وروابط المتاجر لاحقًا
const NOKHBA_PRODUCTS = [];

// تشغيل التطبيق
document.addEventListener("DOMContentLoaded", () => {

  // قائمة الهاتف
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");

      menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    // إغلاق القائمة بعد اختيار رابط
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // عرض المنتجات
  renderProducts();

  // تسجيل Service Worker عند إضافته
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js")
        .catch(error => {
          console.warn("تعذر تسجيل Service Worker:", error);
        });
    });
  }

});

// إنشاء بطاقة منتج
function createProductCard(product) {

  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("img");
  image.className = "product-image";
  image.src = product.image;
  image.alt = product.name;
  image.loading = "lazy";

  const info = document.createElement("div");
  info.className = "product-info";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description || "";

  const store = document.createElement("p");
  store.textContent = "المتجر: " + product.store;

  info.append(title, description, store);

  if (product.price) {
    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = product.price;
    info.appendChild(price);
  }

  const button = document.createElement("a");
  button.className = "product-btn";
  button.textContent = "زيارة المتجر";
  button.href = product.url;
  button.target = "_blank";
  button.rel = "nofollow sponsored noopener noreferrer";

  info.appendChild(button);
  card.append(image, info);

  return card;
}

// عرض المنتجات داخل الصفحة
function renderProducts() {

  const container = document.getElementById("products");

  if (!container) return;

  if (!Array.isArray(NOKHBA_PRODUCTS) ||
      NOKHBA_PRODUCTS.length === 0) {
    return;
  }

  container.replaceChildren();

  NOKHBA_PRODUCTS.forEach(product => {
    if (
      product.name &&
      product.image &&
      product.url &&
      product.store
    ) {
      container.appendChild(
        createProductCard(product)
      );
    }
  });

}

// واجهة جاهزة لإضافة المنتجات مستقبلًا
window.NOKHBA = {
  products: NOKHBA_PRODUCTS,
  renderProducts
};
