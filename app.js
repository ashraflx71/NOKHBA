
/* ==================================
   NOKHBA | نخبة
   Main Application
   Multi-Store Shopping Platform
   ================================== */

"use strict";

/*
  بيانات المنتجات

  category:
  electronics | home | fashion | featured

  store:
  amazon | noon | jumia

  لا نضيف منتجًا إلا بعد التحقق من بياناته
  وصورته ورابط متجره.
*/

const NOKHBA_PRODUCTS = [];

/* أسماء المتاجر */

const STORE_NAMES = {
  amazon: "Amazon Egypt",
  noon: "Noon Egypt",
  jumia: "Jumia Egypt"
};

/* أسماء الأقسام */

const CATEGORY_NAMES = {
  electronics: "التقنية والإلكترونيات",
  home: "المنزل والمطبخ",
  fashion: "الأناقة والعناية",
  featured: "اختيارات مميزة"
};

/* تشغيل التطبيق */

document.addEventListener("DOMContentLoaded", () => {

  setupMobileMenu();
  setupProductFilters();
  setupCategoryLinks();
  renderProducts();

  /* تسجيل Service Worker */

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./service-worker.js")
        .catch(error => {
          console.warn(
            "تعذر تسجيل Service Worker:",
            error
          );
        });
    });
  }

});

/* ==================================
   قائمة الهاتف
   ================================== */

function setupMobileMenu() {

  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (!menuBtn || !mainNav) return;

  menuBtn.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "إغلاق القائمة" : "فتح القائمة"
    );

  });

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBtn.setAttribute(
        "aria-label",
        "فتح القائمة"
      );

    });

  });

}

/* ==================================
   البحث والتصفية
   ================================== */

function setupProductFilters() {

  const searchInput =
    document.getElementById("productSearch");

  const categoryFilter =
    document.getElementById("categoryFilter");

  const storeFilter =
    document.getElementById("storeFilter");

  if (searchInput) {
    searchInput.addEventListener("input", renderProducts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", renderProducts);
  }

  if (storeFilter) {
    storeFilter.addEventListener("change", renderProducts);
  }

}

/* ==================================
   ربط بطاقات الأقسام
   ================================== */

function setupCategoryLinks() {

  const categoryCards =
    document.querySelectorAll("[data-category]");

  const categoryFilter =
    document.getElementById("categoryFilter");

  categoryCards.forEach(card => {

    card.addEventListener("click", () => {

      const selectedCategory =
        card.getAttribute("data-category");

      if (categoryFilter) {

        categoryFilter.value = selectedCategory;

        renderProducts();

      }

    });

  });

}

/* ==================================
   التحقق من الروابط
   ================================== */

function isSafeUrl(value) {

  if (typeof value !== "string" || !value.trim()) {
    return false;
  }

  try {

    const url = new URL(value);

    return (
      url.protocol === "https:" ||
      url.protocol === "http:"
    );

  } catch {

    return false;

  }

}

/* ==================================
   إنشاء بطاقة منتج
   ================================== */

function createProductCard(product) {

  const card = document.createElement("article");
  card.className = "product-card";

  /* صورة المنتج */

  const image = document.createElement("img");

  image.className = "product-image";
  image.src = product.image;
  image.alt = product.name;
  image.loading = "lazy";
  image.decoding = "async";

  image.addEventListener("error", () => {
    image.style.display = "none";
  });

  /* معلومات المنتج */

  const info = document.createElement("div");
  info.className = "product-info";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description || "";

  const store = document.createElement("p");
  store.textContent =
    "المتجر: " +
    (STORE_NAMES[product.store] || product.store);

  info.append(title, description, store);

  /* السعر */

  if (product.price) {

    const price = document.createElement("div");

    price.className = "product-price";
    price.textContent = product.price;

    info.appendChild(price);

  }

  /* تاريخ التحقق من السعر */

  if (product.checkedAt) {

    const checkedAt = document.createElement("small");

    checkedAt.className = "product-date";

    checkedAt.textContent =
      "آخر تحقق من السعر: " + product.checkedAt;

    info.appendChild(checkedAt);

  }

  /* رابط المتجر */

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

/* ==================================
   فلترة المنتجات
   ================================== */

function getFilteredProducts() {

  const searchInput =
    document.getElementById("productSearch");

  const categoryFilter =
    document.getElementById("categoryFilter");

  const storeFilter =
    document.getElementById("storeFilter");

  const searchText = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const selectedStore = storeFilter
    ? storeFilter.value
    : "all";

  return NOKHBA_PRODUCTS.filter(product => {

    if (
      !product ||
      !product.name ||
      !product.image ||
      !product.url ||
      !product.store
    ) {
      return false;
    }

    if (!isSafeUrl(product.image) || !isSafeUrl(product.url)) {
      return false;
    }

    const searchableText = (
      product.name + " " +
      (product.description || "") + " " +
      (product.store || "")
    ).toLowerCase();

    const matchesSearch =
      !searchText ||
      searchableText.includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesStore =
      selectedStore === "all" ||
      product.store === selectedStore;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStore
    );

  });

}

/* ==================================
   عرض المنتجات
   ================================== */

function renderProducts() {

  const container =
    document.getElementById("products");

  if (!container) return;

  const filteredProducts = getFilteredProducts();

  container.replaceChildren();

  /* لا توجد منتجات مسجلة */

  if (NOKHBA_PRODUCTS.length === 0) {

    container.innerHTML = `
      <div class="empty-state">
        <span>✧</span>
        <p>نعمل على تجهيز مجموعة مختارة من المنتجات المميزة.</p>
        <small>
          قريبًا ستجد هنا اختياراتنا من متاجر متعددة.
        </small>
      </div>
    `;

    return;

  }

  /* لا توجد نتائج مطابقة */

  if (filteredProducts.length === 0) {

    const empty = document.createElement("div");

    empty.className = "empty-state";

    const symbol = document.createElement("span");
    symbol.textContent = "⌕";

    const message = document.createElement("p");
    message.textContent =
      "لم نعثر على منتجات تطابق اختياراتك.";

    const hint = document.createElement("small");
    hint.textContent =
      "جرّب تغيير كلمة البحث أو اختيار قسم ومتجر آخر.";

    empty.append(symbol, message, hint);

    container.appendChild(empty);

    return;

  }

  /* عرض النتائج */

  filteredProducts.forEach(product => {

    container.appendChild(
      createProductCard(product)
    );

  });

}

/* ==================================
   واجهة نخبة
   ================================== */

window.NOKHBA = {

  products: NOKHBA_PRODUCTS,

  renderProducts,

  getFilteredProducts,

  stores: STORE_NAMES,

  categories: CATEGORY_NAMES

};
