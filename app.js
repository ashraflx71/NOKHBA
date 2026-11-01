
/* ==================================
   NOKHBA | نخبة
   Version 1.0
   Multi-Store Shopping Platform
   ================================== */

"use strict";

/* بيانات المنتجات الموثقة */
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

/* ==================================
   تشغيل التطبيق
   ================================== */

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupProductFilters();
  setupCategoryLinks();
  setupResultsCounter();
  renderProducts();

  registerServiceWorker();
});

/* ==================================
   تسجيل Service Worker
   ================================== */

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch(error => {
        console.warn("تعذر تسجيل Service Worker:", error);
      });
  });
}

/* ==================================
   قائمة الهاتف
   ================================== */

function setupMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (!menuBtn || !mainNav) return;

  function closeMenu() {
    mainNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "فتح القائمة");
  }

  menuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "إغلاق القائمة" : "فتح القائمة"
    );
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", event => {
    if (
      mainNav.classList.contains("open") &&
      !mainNav.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

/* ==================================
   تحسين البحث العربي
   ================================== */

function normalizeArabic(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[إأآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ـ/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/* ==================================
   البحث والتصفية
   ================================== */

function setupProductFilters() {
  const searchInput = document.getElementById("productSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const storeFilter = document.getElementById("storeFilter");

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
   روابط الأقسام
   ================================== */

function setupCategoryLinks() {
  const cards = document.querySelectorAll("[data-category]");
  const categoryFilter = document.getElementById("categoryFilter");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");

      if (!categoryFilter) return;

      categoryFilter.value = category;
      renderProducts();
    });
  });
}

/* ==================================
   عداد النتائج
   ================================== */

function setupResultsCounter() {
  const container = document.getElementById("products");

  if (!container || document.getElementById("resultsCounter")) {
    return;
  }

  const counter = document.createElement("p");

  counter.id = "resultsCounter";
  counter.className = "results-counter";
  counter.setAttribute("role", "status");
  counter.setAttribute("aria-live", "polite");
  counter.textContent = "عدد المنتجات: 0";

  container.parentNode.insertBefore(counter, container);
}

function updateResultsCounter(total, shown) {
  const counter = document.getElementById("resultsCounter");

  if (!counter) return;

  counter.textContent =
    "عرض " + shown + " من أصل " + total + " منتج";
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

    return url.protocol === "https:";
  } catch {
    return false;
  }
}

/* ==================================
   التحقق من بيانات المنتج
   ================================== */

function isValidProduct(product) {
  if (!product || typeof product !== "object") {
    return false;
  }

  if (
    typeof product.name !== "string" ||
    !product.name.trim()
  ) {
    return false;
  }

  if (!isSafeUrl(product.url)) {
    return false;
  }

  if (!STORE_NAMES[product.store]) {
    return false;
  }

  if (!CATEGORY_NAMES[product.category]) {
    return false;
  }

  if (
    product.image &&
    !isSafeUrl(product.image)
  ) {
    return false;
  }

  return true;
}

/* ==================================
   صورة بديلة
   ================================== */

function createImageFallback() {
  const fallback = document.createElement("div");

  fallback.className = "product-image product-image-fallback";
  fallback.textContent = "NOKHBA";

  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", "صورة المنتج غير متاحة");

  return fallback;
}

/* ==================================
   إنشاء صورة المنتج
   ================================== */

function createProductImage(product) {
  if (!product.image) {
    return createImageFallback();
  }

  const image = document.createElement("img");

  image.className = "product-image";
  image.src = product.image;
  image.alt = product.name;
  image.loading = "lazy";
  image.decoding = "async";

  image.addEventListener("error", () => {
    const fallback = createImageFallback();

    image.replaceWith(fallback);
  }, { once: true });

  return image;
}

/* ==================================
   إنشاء بطاقة المنتج
   ================================== */

function createProductCard(product) {
  const card = document.createElement("article");

  card.className = "product-card";

  /* الصورة */
  const image = createProductImage(product);

  /* المعلومات */
  const info = document.createElement("div");
  info.className = "product-info";

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description || "";

  const category = document.createElement("p");
  category.textContent =
    "القسم: " + CATEGORY_NAMES[product.category];

  const store = document.createElement("p");
  store.textContent =
    "المتجر: " + STORE_NAMES[product.store];

  info.append(title, description, category, store);

  /* السعر */
  if (
    product.price !== undefined &&
    product.price !== null &&
    String(product.price).trim() !== ""
  ) {
    const price = document.createElement("div");

    price.className = "product-price";
    price.textContent = String(product.price);

    info.appendChild(price);
  }

  /* تاريخ التحقق */
  if (product.checkedAt) {
    const date = document.createElement("small");

    date.className = "product-date";
    date.textContent =
      "آخر تحقق من البيانات: " + product.checkedAt;

    info.appendChild(date);
  }

  /* رابط الشراء */
  const button = document.createElement("a");

  button.className = "product-btn";
  button.textContent = "زيارة المتجر";
  button.href = product.url;
  button.target = "_blank";
  button.rel = "nofollow sponsored noopener noreferrer";
  button.setAttribute("aria-label", "زيارة متجر " + STORE_NAMES[product.store]);

  info.appendChild(button);

  card.append(image, info);

  return card;
}

/* ==================================
   الحصول على المنتجات المطابقة
   ================================== */

function getFilteredProducts() {
  const searchInput = document.getElementById("productSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const storeFilter = document.getElementById("storeFilter");

  const searchText = normalizeArabic(
    searchInput ? searchInput.value : ""
  );

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const selectedStore = storeFilter
    ? storeFilter.value
    : "all";

  return NOKHBA_PRODUCTS.filter(product => {
    if (!isValidProduct(product)) return false;

    const searchableText = normalizeArabic([
      product.name,
      product.description,
      STORE_NAMES[product.store],
      CATEGORY_NAMES[product.category]
    ].join(" "));

    const matchesSearch =
      !searchText || searchableText.includes(searchText);

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
   إنشاء رسالة فارغة
   ================================== */

function createEmptyState(message, hint) {
  const empty = document.createElement("div");

  empty.className = "empty-state";

  const symbol = document.createElement("span");
  symbol.textContent = "✧";

  const text = document.createElement("p");
  text.textContent = message;

  const small = document.createElement("small");
  small.textContent = hint;

  empty.append(symbol, text, small);

  return empty;
}

/* ==================================
   عرض المنتجات
   ================================== */

function renderProducts() {
  const container = document.getElementById("products");

  if (!container) return;

  const validProducts = NOKHBA_PRODUCTS.filter(isValidProduct);
  const filteredProducts = getFilteredProducts();

  updateResultsCounter(
    validProducts.length,
    filteredProducts.length
  );

  container.replaceChildren();

  /* لا توجد منتجات */
  if (validProducts.length === 0) {
    container.appendChild(
      createEmptyState(
        "نعمل على تجهيز مجموعة مختارة من المنتجات المميزة.",
        "سنضيف المنتجات بعد التحقق من الصور والأسعار وروابط المتاجر."
      )
    );

    return;
  }

  /* لا توجد نتائج */
  if (filteredProducts.length === 0) {
    container.appendChild(
      createEmptyState(
        "لم نعثر على منتجات تطابق اختياراتك.",
        "جرّب تغيير كلمة البحث أو اختيار قسم ومتجر آخر."
      )
    );

    return;
  }

  /* عرض البطاقات */
  const fragment = document.createDocumentFragment();

  filteredProducts.forEach(product => {
    fragment.appendChild(createProductCard(product));
  });

  container.appendChild(fragment);
}

/* ==================================
   واجهة NOKHBA العامة
   ================================== */

window.NOKHBA = {
  products: NOKHBA_PRODUCTS,
  renderProducts,
  getFilteredProducts,
  normalizeArabic,
  stores: STORE_NAMES,
  categories: CATEGORY_NAMES
};
