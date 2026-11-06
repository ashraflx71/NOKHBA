"use strict";

/* ==================================================
   NOKHBA | نخبة
   Premium Products Display Engine
   Version 5.0
   Amazon Affiliate: ashrafdealseg-21
   ================================================== */

(() => {
  const AMAZON_TAG = "ashrafdealseg-21";
  const VERSION = "5.0";

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
     CATEGORY NAMES
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
     SECURITY HELPERS
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
    if (!value || typeof value !== "string") {
      return "";
    }

    try {
      const url = new URL(value.trim(), location.href);

      if (
        url.protocol !== "https:" &&
        url.protocol !== "http:"
      ) {
        return "";
      }

      return url.href;

    } catch {
      return "";
    }
  }

  function isAmazonURL(value) {
    try {
      return new URL(value).hostname.endsWith("amazon.eg");
    } catch {
      return false;
    }
  }

  function addAmazonTag(value) {
    const url = safeURL(value);

    if (!url || !isAmazonURL(url)) {
      return url;
    }

    try {
      const parsed = new URL(url);

      parsed.searchParams.set("tag", AMAZON_TAG);

      return parsed.href;

    } catch {
      return url;
    }
  }

  /* ================================================
     PRODUCT DATA
     Preserve existing product databases
     ================================================ */

  function getProducts() {
    const sources = [
      window.AMAZON_PRODUCTS,
      window.NOKHBA_EXTRA_PRODUCTS
    ];

    const allProducts = [];

    sources.forEach(source => {
      if (!Array.isArray(source)) return;

      source.forEach(product => {
        if (
          product &&
          typeof product === "object" &&
          product.name
        ) {
          allProducts.push(product);
        }
      });
    });

    const unique = new Map();

    allProducts.forEach(product => {
      const name = String(product.name).trim();

      if (!name) return;

      const store = normalizeStore(product.store);

      const key = (
        name.toLowerCase() + "|" + store
      );

      if (!unique.has(key)) {
        unique.set(key, product);
      }
    });

    return Array.from(unique.values());
  }

  function normalizeStore(store) {
    const value = String(store || "").toLowerCase();

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

  const products = getProducts();

  /* ================================================
     PRODUCT IMAGE
     Use original images only
     ================================================ */

  function getProductImage(product) {
    return safeURL(
      product.image ||
      product.imageUrl ||
      product.img ||
      product.thumbnail ||
      ""
    );
  }

  function createImage(product) {
    const image = getProductImage(product);

    if (!image) {
      return "";
    }

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

  // Hide broken images without replacing them
  productsGrid.addEventListener("error", event => {
    const target = event.target;

    if (
      target &&
      target.tagName === "IMG" &&
      target.classList.contains("product-image")
    ) {
      const container = target.closest(
        ".product-image-container"
      );

      if (container) {
        container.remove();
      }
    }
  }, true);

  /* ================================================
     STORE LINKS
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

      if (url) {
        return store === "amazon"
          ? addAmazonTag(url)
          : url;
      }
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
        AMAZON_TAG
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

  function getAvailableStores(product) {
    const stores = [];

    const productStore = normalizeStore(product.store);

    ["amazon", "noon", "jumia"].forEach(store => {
      const direct = getDirectLink(product, store);

      const isPrimaryStore = productStore === store;

      // Products without a specified store are treated
      // as Amazon products for backward compatibility.
      const isLegacyAmazon =
        !productStore &&
        store === "amazon";

      const isExplicitMultiStore =
        productStore === "multi" &&
        Boolean(direct);

      if (
        direct ||
        isPrimaryStore ||
        isLegacyAmazon ||
        isExplicitMultiStore
      ) {
        stores.push(store);
      }
    });

    return stores;
  }

  function getStoreLink(product, store) {
    const direct = getDirectLink(product, store);

    if (direct) {
      return direct;
    }

    const productStore = normalizeStore(product.store);

    if (
      productStore === store ||
      (!productStore && store === "amazon")
    ) {
      return searchURL(store, product);
    }

    return "";
  }

  /* ================================================
     STORE BUTTONS
     ================================================ */

  function createStoreButtons(product, selectedStore) {
    const availableStores = getAvailableStores(product);

    const stores = selectedStore === "all"
      ? availableStores
      : availableStores.includes(selectedStore)
        ? [selectedStore]
        : [];

    return stores.map(store => {
      const url = getStoreLink(product, store);

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
      "اكتشف تفاصيل المنتج من المتجر."
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

    if (!buttons) {
      return "";
    }

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
     SEARCH AND FILTERS
     ================================================ */

  function renderProducts() {
    const search = (
      searchInput?.value || ""
    ).trim().toLowerCase();

    const category = categoryFilter?.value || "all";

    const store = storeFilter?.value || "all";

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

      const availableStores =
        getAvailableStores(product);

      const matchesStore =
        store === "all" ||
        availableStores.includes(store);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStore
      );
    });

    const cards = filtered
      .map(product => createCard(product, store))
      .filter(Boolean);

    productsGrid.innerHTML = cards.join("");

    if (resultCount) {
      resultCount.textContent =
        `عدد المنتجات: ${cards.length}`;
    }

    if (emptyMessage) {
      emptyMessage.hidden = cards.length !== 0;
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

        const category = card.dataset.category;

        if (!categoryFilter || !category) {
          return;
        }

        categoryFilter.value = category;

        renderProducts();

        $("products")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });

  /* ================================================
     MOBILE NAVIGATION
     ================================================ */

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

  /* ================================================
     INITIALIZATION
     ================================================ */

  renderProducts();

  console.log(
    `NOKHBA ${VERSION}: ${products.length} products loaded.`
  );

})();
