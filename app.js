
"use strict";

/* ==================================================
   NOKHBA | نخبة
   PREMIUM PRODUCTS DISPLAY ENGINE
   VERSION 5.1 - FIXED
   AMAZON TAG: ashrafdealseg-21
   ================================================== */

(() => {

  /* ================================================
     CONFIGURATION
     ================================================ */

  const CONFIG = {
    version: "5.1",
    amazonTag: "ashrafdealseg-21",
    defaultStore: "amazon"
  };

  const $ = id => document.getElementById(id);

  const productsGrid = $("products");
  const searchInput = $("productSearch");
  const categoryFilter = $("categoryFilter");
  const storeFilter = $("storeFilter");
  const resultCount = $("resultCount");
  const emptyMessage = $("emptyMessage");

  if (!productsGrid) {
    console.error("NOKHBA: Products container not found.");
    return;
  }

  /* ================================================
     CATEGORIES
     ================================================ */

  const categoryNames = {
    electronics: "الإلكترونيات",
    home: "المنزل والمطبخ",
    fashion: "الأزياء",
    featured: "اختيارات مميزة",
    cars: "مستلزمات السيارات",
    daily: "احتياجات يومية"
  };

  const storeNames = {
    amazon: "Amazon Egypt",
    noon: "Noon Egypt",
    jumia: "Jumia Egypt"
  };

  /* ================================================
     SECURITY
     ================================================ */

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
      const url = new URL(
        value.trim(),
        location.href
      );

      if (
        !["https:", "http:"].includes(url.protocol)
      ) {
        return "";
      }

      return url.href;

    } catch {
      return "";
    }
  }

  /* ================================================
     STORE NORMALIZATION
     ================================================ */

  function normalizeStore(store) {
    const value = String(
      store || ""
    ).toLowerCase().trim();

    if (
      value.includes("amazon") ||
      value.includes("أمازون")
    ) return "amazon";

    if (
      value.includes("noon") ||
      value.includes("نون")
    ) return "noon";

    if (
      value.includes("jumia") ||
      value.includes("جوميا")
    ) return "jumia";

    if (
      value === "multi" ||
      value === "all"
    ) return "multi";

    return value;
  }

  /* ================================================
     AMAZON AFFILIATE
     ================================================ */

  function addAmazonTag(value) {
    const url = safeURL(value);

    if (!url) return "";

    try {
      const parsed = new URL(url);

      const hostname = parsed.hostname.toLowerCase();

      if (
        hostname !== "amazon.eg" &&
        !hostname.endsWith(".amazon.eg")
      ) {
        return url;
      }

      parsed.searchParams.set(
        "tag",
        CONFIG.amazonTag
      );

      return parsed.href;

    } catch {
      return url;
    }
  }

  /* ================================================
     LOAD PRODUCT DATABASES
     ================================================ */

  function getProducts() {

    const sources = [
      window.AMAZON_PRODUCTS,
      window.NOKHBA_EXTRA_PRODUCTS
    ];

    const all = [];

    sources.forEach(source => {

      if (!Array.isArray(source)) return;

      source.forEach(product => {

        if (
          !product ||
          typeof product !== "object" ||
          !product.name
        ) {
          return;
        }

        all.push(product);

      });

    });

    const unique = new Map();

    all.forEach(product => {

      const name = String(
        product.name
      ).trim();

      if (!name) return;

      const store = normalizeStore(
        product.store
      );

      const key = name.toLowerCase();

      if (!unique.has(key)) {
        unique.set(key, product);
        return;
      }

      // Prefer the entry containing more useful data.
      const existing = unique.get(key);

      const score = item => [
        item.image,
        item.imageUrl,
        item.url,
        item.amazonUrl,
        item.amazonLink,
        item.description,
        item.price
      ].filter(Boolean).length;

      if (score(product) > score(existing)) {
        unique.set(key, product);
      }

    });

    return [...unique.values()];
  }

  const products = getProducts();

  /* ================================================
     PRODUCT IMAGES
     ================================================ */

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

  // Remove broken images without fake replacements.
  productsGrid.addEventListener(
    "error",
    event => {

      const target = event.target;

      if (
        target &&
        target.tagName === "IMG" &&
        target.classList.contains("product-image")
      ) {

        target.closest(
          ".product-image-container"
        )?.remove();

      }

    },
    true
  );

  /* ================================================
     DIRECT PRODUCT LINKS
     ================================================ */

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

      const url = safeURL(candidate);

      if (!url) continue;

      return store === "amazon"
        ? addAmazonTag(url)
        : url;

    }

    const mainURL = safeURL(product.url);

    if (
      mainURL &&
      normalizeStore(product.store) === store
    ) {

      return store === "amazon"
        ? addAmazonTag(mainURL)
        : mainURL;

    }

    return "";
  }

  /* ================================================
     STORE SEARCH LINKS
     ================================================ */

  function searchURL(store, product) {

    const query = String(
      product.search || product.name
    ).trim();

    if (!query) return "";

    if (store === "amazon") {

      return (
        "https://www.amazon.eg/s?k=" +
        encodeURIComponent(query) +
        "&tag=" +
        CONFIG.amazonTag
      );

    }

    if (store === "noon") {

      return (
        "https://www.noon.com/egypt-en/search/?q=" +
        encodeURIComponent(query)
      );

    }

    if (store === "jumia") {

      return (
        "https://www.jumia.com.eg/catalog/?q=" +
        encodeURIComponent(query)
      );

    }

    return "";
  }

  /* ================================================
     AVAILABLE STORES
     ================================================ */

  function getAvailableStores(product) {

    const productStore = normalizeStore(
      product.store
    );

    // Explicit multi-store products.
    if (productStore === "multi") {

      return [
        "amazon",
        "noon",
        "jumia"
      ];

    }

    // Products assigned to one specific store.
    if (
      ["amazon", "noon", "jumia"].includes(
        productStore
      )
    ) {

      return [productStore];

    }

    // Backward compatibility for older products.
    return [CONFIG.defaultStore];
  }

  /* ================================================
     FINAL STORE LINK
     ================================================ */

  function getStoreLink(product, store) {

    const direct = getDirectLink(
      product,
      store
    );

    if (direct) return direct;

    const available = getAvailableStores(product);

    if (!available.includes(store)) {
      return "";
    }

    return searchURL(store, product);
  }

  /* ================================================
     STORE BUTTONS
     ================================================ */

  function createStoreButtons(
    product,
    selectedStore
  ) {

    const available = getAvailableStores(product);

    const stores = selectedStore === "all"
      ? available
      : available.includes(selectedStore)
        ? [selectedStore]
        : [];

    return stores.map(store => {

      const url = getStoreLink(
        product,
        store
      );

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

  /* ================================================
     PRODUCT CARD
     ================================================ */

  function createCard(product, selectedStore) {

    const name = escapeHTML(product.name);

    const description = escapeHTML(
      product.description ||
      "اكتشف تفاصيل المنتج في المتجر."
    );

    const category = escapeHTML(
      categoryNames[product.category] ||
      "اختيارات نخبة"
    );

    const image = createImage(product);

    const buttons = createStoreButtons(
      product,
      selectedStore
    );

    if (!buttons) return "";

    const price = product.price
      ? `
        <div class="product-price">
          ${escapeHTML(product.price)}
        </div>
      `
      : "";

    return `
      <article class="product-card">

        ${image}

        <div class="product-info">

          <span class="product-category">
            ${category}
          </span>

          <h3>${name}</h3>

          <p>${description}</p>

          ${price}

          <div class="product-store-buttons">
            ${buttons}
          </div>

        </div>

      </article>
    `;

  }

  /* ================================================
     SEARCH AND FILTER ENGINE
     ================================================ */

  function renderProducts() {

    const search = (
      searchInput?.value || ""
    ).trim().toLowerCase();

    const category =
      categoryFilter?.value || "all";

    const store =
      storeFilter?.value || "all";

    const filtered = products.filter(product => {

      const searchable = [

        product.name,
        product.description,
        product.search,
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

      const matchesStore =
        store === "all" ||
        getAvailableStores(product).includes(store);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStore
      );

    });

    const cards = filtered
      .map(product =>
        createCard(product, store)
      )
      .filter(Boolean);

    productsGrid.innerHTML = cards.join("");

    if (resultCount) {

      resultCount.textContent =
        `عدد المنتجات: ${cards.length}`;

    }

    if (emptyMessage) {

      emptyMessage.hidden =
        cards.length !== 0;

    }

    productsGrid.setAttribute(
      "aria-live",
      "polite"
    );

  }

  /* ================================================
     EVENT LISTENERS
     ================================================ */

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

  /* ================================================
     CATEGORY CARDS
     ================================================ */

  document
    .querySelectorAll(".category-card")
    .forEach(card => {

      card.addEventListener("click", () => {

        const category =
          card.dataset.category;

        if (!categoryFilter || !category) {
          return;
        }

        categoryFilter.value = category;

        renderProducts();

        productsGrid.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });

  /* ================================================
     MOBILE MENU
     ================================================ */

  const menuBtn = $("menuBtn");
  const mainNav = $("mainNav");

  menuBtn?.addEventListener("click", () => {

    if (!mainNav) return;

    const opened =
      mainNav.classList.toggle("open");

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

  /* ================================================
     INITIALIZATION
     ================================================ */

  renderProducts();

  console.log(
    `NOKHBA ${CONFIG.version}: ` +
    `${products.length} products loaded successfully.`
  );

})();
