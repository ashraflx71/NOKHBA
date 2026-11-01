
/* =========================================
   NOKHBA | نخبة
   Main Application - Version 2.0
   ========================================= */

"use strict";

/* =========================================
   1. بيانات المنتجات
   ========================================= */

const NOKHBA_PRODUCTS = [

  {
    id: 1,
    name: "ماوس Razer Viper V3 HyperSpeed",
    description: "ماوس لاسلكي من Razer للاستخدام اليومي والألعاب.",
    category: "electronics",
    store: "amazon",
    url: "https://amzn.to/3UQqfhT"
  },

  {
    id: 2,
    name: "عطر Marina من Kamara",
    description: "عطر Marina من Kamara لمحبي العطور المميزة.",
    category: "fashion",
    store: "amazon",
    url: "https://amzn.to/4A2dtLZ"
  },

  {
    id: 3,
    name: "ساعة Oraimo Watch 6 OSW-807",
    description: "ساعة ذكية من Oraimo للاستخدام اليومي.",
    category: "electronics",
    store: "amazon",
    url: "https://amzn.to/4f3YHwf"
  },

  {
    id: 4,
    name: "سماعة Sony WH-CH520 البيضاء",
    description: "سماعة رأس لاسلكية من Sony.",
    category: "electronics",
    store: "amazon",
    url: "https://amzn.to/4zk6het"
  },

  {
    id: 5,
    name: "جراب GRABIST لهاتف Samsung Galaxy A16",
    description: "جراب حماية لهاتف Samsung Galaxy A16.",
    category: "electronics",
    store: "amazon",
    url: "https://amzn.to/4igWGyU"
  },

  {
    id: 6,
    name: "مكبر صوت Redragon GS511 RGB",
    description: "مكبر صوت بتصميم RGB للاستخدام مع الكمبيوتر.",
    category: "electronics",
    store: "amazon",
    url: "https://amzn.to/3UpuUab"
  },

  {
    id: 7,
    name: "قلادة القلب من Julia Store",
    description: "قلادة بتصميم القلب من Julia Store.",
    category: "fashion",
    store: "amazon",
    url: "https://amzn.to/4yPpP9g"
  },

  {
    id: 8,
    name: "منظم كبسولات القهوة Simple Trending",
    description: "منظم لتخزين كبسولات القهوة وترتيبها.",
    category: "home",
    store: "amazon",
    url: "https://amzn.to/3U1AdNa"
  },

  {
    id: 9,
    name: "فساتين Mirokitty الصيفية للنساء",
    description: "فساتين صيفية من Mirokitty.",
    category: "fashion",
    store: "amazon",
    url: "https://amzn.to/3UxkoOa"
  },

  {
    id: 10,
    name: "كتاب Assistant to the Villain",
    description: "كتاب Assistant to the Villain لمحبي القراءة.",
    category: "featured",
    store: "amazon",
    url: "https://amzn.to/3UY9K3g"
  }

];


/* =========================================
   2. أسماء الأقسام والمتاجر
   ========================================= */

const CATEGORY_NAMES = {
  all: "كل الأقسام",
  electronics: "إلكترونيات",
  home: "المنزل",
  fashion: "الأزياء",
  featured: "اختيارات مميزة"
};

const STORE_NAMES = {
  all: "كل المتاجر",
  amazon: "أمازون مصر",
  noon: "نون",
  jumia: "جوميا"
};


/* =========================================
   3. أدوات مساعدة
   ========================================= */

function normalizeArabic(value) {

  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .trim();
}


function isValidProduct(product) {

  if (!product || typeof product !== "object") {
    return false;
  }

  if (!product.name || !product.url) {
    return false;
  }

  try {

    const parsedUrl = new URL(product.url);

    return (
      parsedUrl.protocol === "https:" &&
      ["amazon"].includes(product.store)
    );

  } catch (error) {

    return false;

  }

}


function createElement(tag, className, text) {

  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;

}


/* =========================================
   4. عناصر الصفحة
   ========================================= */

let productsContainer;
let searchInput;
let categoryFilter;
let storeFilter;
let resultsCounter;


/* =========================================
   5. قائمة الهاتف
   ========================================= */

function setupMobileMenu() {

  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  if (!menuBtn || !mainNav) {
    return;
  }

  menuBtn.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuBtn.setAttribute("aria-expanded", "false");

    });

  });

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      mainNav.classList.remove("open");

      menuBtn.setAttribute("aria-expanded", "false");

    }

  });

}


/* =========================================
   6. عداد النتائج
   ========================================= */

function setupResultsCounter() {

  if (!productsContainer) {
    return;
  }

  resultsCounter = document.getElementById("resultsCounter");

  if (!resultsCounter) {

    resultsCounter = createElement(
      "p",
      "results-counter"
    );

    resultsCounter.id = "resultsCounter";

    productsContainer.parentNode.insertBefore(
      resultsCounter,
      productsContainer
    );

  }

}


function updateResultsCounter(count) {

  if (!resultsCounter) {
    return;
  }

  resultsCounter.textContent =
    "عدد المنتجات المعروضة: " + count;

}


/* =========================================
   7. ضبط قائمة المتاجر
   ========================================= */

function setupStoreFilter() {

  if (!storeFilter) {
    return;
  }

  const availableStores = [
    ...new Set(
      NOKHBA_PRODUCTS
        .filter(isValidProduct)
        .map(product => product.store)
    )
  ];

  Array.from(storeFilter.options).forEach(option => {

    if (
      option.value !== "all" &&
      !availableStores.includes(option.value)
    ) {

      option.remove();

    }

  });

}


/* =========================================
   8. إعداد البحث والتصفية
   ========================================= */

function setupProductFilters() {

  searchInput = document.getElementById("productSearch");

  categoryFilter = document.getElementById("categoryFilter");

  storeFilter = document.getElementById("storeFilter");

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


/* =========================================
   9. روابط الأقسام
   ========================================= */

function setupCategoryLinks() {

  const categoryLinks = document.querySelectorAll(
    "[data-category]"
  );

  categoryLinks.forEach(link => {

    link.addEventListener("click", () => {

      const category = link.dataset.category;

      if (categoryFilter) {

        categoryFilter.value = category;

        renderProducts();

      }

    });

  });

}


/* =========================================
   10. إنشاء صورة بديلة
   ========================================= */

function createProductImage(product) {

  const wrapper = createElement(
    "div",
    "product-image-fallback"
  );

  wrapper.setAttribute("role", "img");

  wrapper.setAttribute(
    "aria-label",
    "الصورة غير متوفرة حاليًا للمنتج: " + product.name
  );

  const label = createElement(
    "span",
    "",
    "NOKHBA"
  );

  wrapper.appendChild(label);

  return wrapper;

}


/* =========================================
   11. إنشاء بطاقة المنتج
   ========================================= */

function createProductCard(product) {

  const card = createElement(
    "article",
    "product-card"
  );

  card.dataset.productId = product.id;

  const imageArea = createProductImage(product);

  card.appendChild(imageArea);


  const content = createElement(
    "div",
    "product-content"
  );


  const category = createElement(
    "span",
    "product-category",
    CATEGORY_NAMES[product.category] || "منتج"
  );

  content.appendChild(category);


  const title = createElement(
    "h3",
    "product-title",
    product.name
  );

  content.appendChild(title);


  const description = createElement(
    "p",
    "product-description",
    product.description || "اكتشف تفاصيل المنتج لدى المتجر."
  );

  content.appendChild(description);


  const store = createElement(
    "p",
    "product-store",
    "المتجر: " + (STORE_NAMES[product.store] || product.store)
  );

  content.appendChild(store);


  const button = createElement(
    "a",
    "product-link",
    "عرض المنتج في أمازون"
  );

  button.href = product.url;

  button.target = "_blank";

  button.rel = "nofollow sponsored noopener noreferrer";

  button.setAttribute(
    "aria-label",
    "عرض " + product.name + " في أمازون"
  );

  content.appendChild(button);

  card.appendChild(content);

  return card;

}


/* =========================================
   12. رسالة عدم وجود نتائج
   ========================================= */

function showEmptyState() {

  const empty = createElement(
    "div",
    "empty-state"
  );

  const title = createElement(
    "h3",
    "",
    "لم نعثر على منتجات مطابقة"
  );

  const message = createElement(
    "p",
    "",
    "جرّب تغيير كلمة البحث أو اختيار قسم آخر."
  );

  empty.appendChild(title);

  empty.appendChild(message);

  productsContainer.appendChild(empty);

}


/* =========================================
   13. تصفية المنتجات
   ========================================= */

function getFilteredProducts() {

  const searchTerm = normalizeArabic(
    searchInput ? searchInput.value : ""
  );

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const selectedStore = storeFilter
    ? storeFilter.value
    : "all";


  return NOKHBA_PRODUCTS.filter(product => {

    if (!isValidProduct(product)) {
      return false;
    }

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesStore =
      selectedStore === "all" ||
      product.store === selectedStore;

    const searchableText = normalizeArabic(
      product.name + " " +
      product.description + " " +
      (CATEGORY_NAMES[product.category] || "") + " " +
      (STORE_NAMES[product.store] || "")
    );

    const matchesSearch =
      !searchTerm ||
      searchableText.includes(searchTerm);

    return (
      matchesCategory &&
      matchesStore &&
      matchesSearch
    );

  });

}


/* =========================================
   14. عرض المنتجات
   ========================================= */

function renderProducts() {

  if (!productsContainer) {
    return;
  }

  productsContainer.replaceChildren();

  const filteredProducts = getFilteredProducts();

  updateResultsCounter(filteredProducts.length);

  if (filteredProducts.length === 0) {

    showEmptyState();

    return;

  }

  filteredProducts.forEach(product => {

    const card = createProductCard(product);

    productsContainer.appendChild(card);

  });

}


/* =========================================
   15. تسجيل PWA
   ========================================= */

function registerServiceWorker() {

  if (!("serviceWorker" in navigator)) {
    return;
  }

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


/* =========================================
   16. تشغيل التطبيق
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  productsContainer = document.getElementById("products");

  if (!productsContainer) {

    console.error(
      "لم يتم العثور على عنصر المنتجات products"
    );

    return;

  }

  setupMobileMenu();

  setupResultsCounter();

  setupStoreFilter();

  setupProductFilters();

  setupCategoryLinks();

  renderProducts();

  registerServiceWorker();

});


/* =========================================
   17. إتاحة وظائف التطبيق
   ========================================= */

window.NOKHBA = {

  products: NOKHBA_PRODUCTS,

  renderProducts: renderProducts,

  getFilteredProducts: getFilteredProducts,

  normalizeArabic: normalizeArabic,

  stores: STORE_NAMES,

  categories: CATEGORY_NAMES

};
