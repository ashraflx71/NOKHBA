
"use strict";

/* ==================================================
   NOKHBA | نخبة
   PREMIUM PRODUCTS DISPLAY ENGINE
   VERSION 5.5 FINAL
   AMAZON TAG: ashrafdealseg-21
   ================================================== */

(() => {

  const CONFIG = {
    version: "5.5",
    amazonTag: "ashrafdealseg-21"
  };

  const $ = id => document.getElementById(id);

  const productsGrid = $("products");
  const searchInput = $("productSearch");
  const categoryFilter = $("categoryFilter");
  const storeFilter = $("storeFilter");
  const resultCount = $("resultCount");
  const emptyMessage = $("emptyMessage");
  const resetButton = $("resetFilters");

  if (!productsGrid) {
    console.error("NOKHBA: Products container not found.");
    return;
  }

  /* CATEGORY NAMES */

  const categoryNames = {
    electronics: "الإلكترونيات",
    home: "المنزل والمطبخ",
    fashion: "الأزياء",
    featured: "اختيارات مميزة",
    cars: "مستلزمات السيارات",
    daily: "احتياجات يومية"
  };

  /* STORE NAMES */

  const storeNames = {
    amazon: "Amazon Egypt",
    noon: "Noon Egypt",
    jumia: "Jumia Egypt"
  };

  /* SECURITY */

  function escapeHTML(value) {
    return String(value ?? "").replace(
      /[&<>"']/g,
      char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char]
    );
  }

  function safeURL(value) {

    if (
      typeof value !== "string" ||
      !value.trim()
    ) {
      return "";
    }

    try {

      const url = new URL(value.trim());

      if (
        url.protocol !== "https:" ||
        url.username ||
        url.password
      ) {
        return "";
      }

      return url.href;

    } catch {
      return "";
    }
  }

  /* STORE NORMALIZATION */

  function normalizeStore(store) {

    const value = String(store || "")
      .toLowerCase()
      .trim();

    if (
      value.includes("amazon") ||
      value.includes("أمازون")
    ) {
      return "amazon";
    }

    if (
      value.includes("noon") ||
      value.includes("نون")
    ) {
      return "noon";
    }

    if (
      value.includes("jumia") ||
      value.includes("جوميا")
    ) {
      return "jumia";
    }

    return "";
  }

  /* STORE URL VALIDATION */

  function isStoreURL(value, store) {

    const url = safeURL(value);

    if (!url) return false;

    try {

      const hostname = new URL(url)
        .hostname
        .toLowerCase();

      if (store === "amazon") {
        return (
          hostname === "amazon.eg" ||
          hostname.endsWith(".amazon.eg")
        );
      }

      if (store === "noon") {
        return (
          hostname === "noon.com" ||
          hostname.endsWith(".noon.com")
        );
      }

      if (store === "jumia") {
        return (
          hostname === "jumia.com.eg" ||
          hostname.endsWith(".jumia.com.eg")
        );
      }

      return false;

    } catch {
      return false;
    }
  }

  /* AMAZON AFFILIATE */

  function addAmazonTag(value) {

    if (!isStoreURL(value, "amazon")) {
      return "";
    }

    try {

      const parsed = new URL(value);

      parsed.searchParams.set(
        "tag",
        CONFIG.amazonTag
      );

      return parsed.href;

    } catch {
      return "";
    }
  }

  /* PRODUCT APPROVAL */

  function isApproved(product) {

    const status = String(product.status || "")
      .toLowerCase()
      .trim();

    const approvedStatuses = [
      "approved",
      "verified",
      "active",
      "published",
      "ready"
    ];

    return approvedStatuses.includes(status);
  }

  /* DATABASE LOADING */

  function getProducts() {

    const sources = [
      window.AMAZON_PRODUCTS,
      window.NOKHBA_PRODUCTS,
      window.NOKHBA_EXTRA_PRODUCTS
    ];

    const all = [];
    const usedArrays = new Set();

    sources.forEach(source => {

      if (!Array.isArray(source)) return;

      if (usedArrays.has(source)) return;

      usedArrays.add(source);

      source.forEach(product => {

        if (
          product &&
          typeof product === "object" &&
          String(product.name || "").trim()
        ) {
          all.push(product);
        }

      });

    });

    const unique = new Map();

    function productScore(product) {

      let score = 0;

      if (product.image || product.imageUrl || product.img) {
        score += 3;
      }

      if (product.url) score += 2;

      if (
        product.amazonUrl ||
        product.noonUrl ||
        product.jumiaUrl
      ) {
        score += 2;
      }

      if (product.description) score++;

      if (Number(product.price) > 0) score++;

      if (isApproved(product)) score += 3;

      return score;
    }

    all.forEach(product => {

      const identity = String(
        product.asin ||
        product.id ||
        product.name
      )
        .trim()
        .toLowerCase();

      if (!unique.has(identity)) {

        unique.set(identity, product);

        return;
      }

      const existing = unique.get(identity);

      if (
        productScore(product) >
        productScore(existing)
      ) {
        unique.set(identity, product);
      }

    });

    return [...unique.values()];
  }

  const allProducts = getProducts();

  const products = allProducts.filter(isApproved);

  /* PRODUCT IMAGES */

  function getProductImage(product) {

    const candidates = [
      product.image,
      product.imageUrl,
      product.img,
      product.thumbnail
    ];

    for (const candidate of candidates) {

      const url = safeURL(candidate);

      if (url) return url;

    }

    return "";
  }

  function createImage(product) {

    const image = getProductImage(product);

    if (!image) return "";

    return `
      <div class="product-image-container">

        <img
          class="product-image"
          src="${escapeHTML(image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          decoding="async"
        >

      </div>
    `;
  }

  /* IMAGE ERROR HANDLING */

  productsGrid.addEventListener("error", event => {

    const target = event.target;

    if (
      !target ||
      target.tagName !== "IMG" ||
      !target.classList.contains("product-image")
    ) {
      return;
    }

    const card = target.closest(".product-card");

    if (card) {

      console.warn(
        "NOKHBA: Product image unavailable:",
        target.alt
      );

      // إخفاء البطاقة فقط.
      // لا نحذف المنتج من قاعدة البيانات.

      card.remove();

    }

    updateVisibleCount();

  }, true);

  /* DIRECT STORE LINKS */

  function getDirectLink(product, store) {

    const fields = {

      amazon: [
        product.amazonUrl,
        product.amazonLink,
        product.amazonURL
      ],

      noon: [
        product.noonUrl,
        product.noonLink,
        product.noonURL
      ],

      jumia: [
        product.jumiaUrl,
        product.jumiaLink,
        product.jumiaURL
      ]

    };

    for (const candidate of fields[store] || []) {

      if (!isStoreURL(candidate, store)) {
        continue;
      }

      if (store === "amazon") {
        return addAmazonTag(candidate);
      }

      return safeURL(candidate);

    }

    const mainURL = safeURL(product.url);

    if (
      mainURL &&
      normalizeStore(product.store) === store &&
      isStoreURL(mainURL, store)
    ) {

      return store === "amazon"
        ? addAmazonTag(mainURL)
        : mainURL;

    }

    return "";
  }

  /* AVAILABLE STORES */

  function getAvailableStores(product) {

    const stores = [];

    ["amazon", "noon", "jumia"].forEach(store => {

      if (getDirectLink(product, store)) {
        stores.push(store);
      }

    });

    return stores;
  }

  /* PRICE FORMATTING */

  function formatPrice(product) {

    const price = Number(product.price);

    if (
      !Number.isFinite(price) ||
      price <= 0
    ) {
      return "";
    }

    const formatted = new Intl.NumberFormat(
      "en-EG",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    ).format(price);

    return `
      <div class="product-price" dir="rtl">
        ${formatted} جنيه
      </div>
    `;
  }

  /* STORE BUTTONS */

  function createStoreButtons(product, selectedStore) {

    const available = getAvailableStores(product);

    const stores = selectedStore === "all"
      ? available
      : available.includes(selectedStore)
        ? [selectedStore]
        : [];

    return stores.map(store => {

      const url = getDirectLink(product, store);

      if (!url) return "";

      return `
        <a
          class="product-button"
          href="${escapeHTML(url)}"
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label="عرض ${escapeHTML(product.name)} في ${storeNames[store]}"
        >
          عرض في ${storeNames[store]}
          <span aria-hidden="true">↗</span>
        </a>
      `;

    }).join("");

  }

  /* PRODUCT CARD */

  function createCard(product, selectedStore) {

    const imageURL = getProductImage(product);

    if (!imageURL) return "";

    const buttons = createStoreButtons(
      product,
      selectedStore
    );

    if (!buttons) return "";

    const name = escapeHTML(product.name);

    const description = escapeHTML(
      product.description ||
      "اكتشف تفاصيل المنتج في المتجر."
    );

    const category = escapeHTML(
      categoryNames[product.category] ||
      "اختيارات نخبة"
    );

    return `
      <article class="product-card">

        ${createImage(product)}

        <div class="product-info">

          <span class="product-category">
            ${category}
          </span>

          <h3>${name}</h3>

          <p>${description}</p>

          ${formatPrice(product)}

          <div class="product-store-buttons">
            ${buttons}
          </div>

        </div>

      </article>
    `;
  }

  /* COUNTER */

  function updateVisibleCount() {

    const count = productsGrid.querySelectorAll(
      ".product-card"
    ).length;

    if (resultCount) {

      resultCount.textContent =
        `عدد المنتجات: ${count}`;

    }

    if (emptyMessage) {
      emptyMessage.hidden = count !== 0;
    }
  }

  /* SEARCH AND FILTER */

  function renderProducts() {

    const search = (
      searchInput?.value || ""
    )
      .trim()
      .toLowerCase();

    const category =
      categoryFilter?.value || "all";

    const store =
      storeFilter?.value || "all";

    const filtered = products.filter(product => {

      const searchable = [

        product.name,
        product.description,
        product.search,
        product.brand,
        product.category,
        product.store

      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchable.includes(search);

      const matchesCategory =
        category === "all" ||
        product.category === category;

      const available = getAvailableStores(product);

      const matchesStore =
        store === "all" ||
        available.includes(store);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStore &&
        Boolean(getProductImage(product))
      );

    });

    productsGrid.innerHTML = filtered
      .map(product =>
        createCard(product, store)
      )
      .filter(Boolean)
      .join("");

    updateVisibleCount();

    productsGrid.setAttribute(
      "aria-live",
      "polite"
    );
  }

  /* RESET FILTERS */

  resetButton?.addEventListener("click", () => {

    if (searchInput) {
      searchInput.value = "";
    }

    if (categoryFilter) {
      categoryFilter.value = "all";
    }

    if (storeFilter) {
      storeFilter.value = "all";
    }

    renderProducts();

  });

  /* EVENTS */

  searchInput?.addEventListener(
    "input",
    renderProducts
  );

  categoryFilter?.addEventListener(
    "change",
    renderProducts
  );

  storeFilter?.addEventListener(
    "change",
    renderProducts
  );

  /* CATEGORY CARDS */

  document.querySelectorAll(
    ".category-card"
  ).forEach(card => {

    card.addEventListener("click", event => {

      const category = card.dataset.category;

      if (!categoryFilter || !category) {
        return;
      }

      event.preventDefault();

      categoryFilter.value = category;

      renderProducts();

      productsGrid.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

  /* MOBILE MENU */

  const menuBtn = $("menuBtn");
  const mainNav = $("mainNav");

  menuBtn?.addEventListener("click", () => {

    if (!mainNav) return;

    const opened = mainNav.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      String(opened)
    );

  });

  mainNav?.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("open");

      menuBtn?.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

  /* INITIALIZATION */

  renderProducts();

  console.log(
    `NOKHBA ${CONFIG.version}:`,
    products.length,
    "approved records;",
    productsGrid.querySelectorAll(".product-card").length,
    "visible products."
  );

})();
