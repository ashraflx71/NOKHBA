
"use strict";

/* =========================================
   NOKHBA | نخبة
   Products Display Engine
   Fixed Version 4.0
   ========================================= */

(() => {
  const AMAZON_TAG = "ashrafdealseg-21";

  const productsGrid = document.getElementById("products");
  const searchInput = document.getElementById("productSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const storeFilter = document.getElementById("storeFilter");
  const resultCount = document.getElementById("resultCount");
  const emptyMessage = document.getElementById("emptyMessage");

  if (!productsGrid) {
    console.error("NOKHBA: Products container not found.");
    return;
  }

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

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function validImage(url) {
    if (!url) return false;

    try {
      const parsed = new URL(url, location.href);
      return ["http:", "https:"].includes(parsed.protocol);
    } catch {
      return false;
    }
  }

  function getProducts() {
    const extra = Array.isArray(window.NOKHBA_EXTRA_PRODUCTS)
      ? window.NOKHBA_EXTRA_PRODUCTS
      : [];

    const amazon = Array.isArray(window.AMAZON_PRODUCTS)
      ? window.AMAZON_PRODUCTS
      : [];

    const all = [...amazon, ...extra];

    const unique = new Map();

    all.forEach(product => {
      if (!product || !product.name) return;

      const key = product.name.trim().toLowerCase();

      if (!unique.has(key)) {
        unique.set(key, product);
      }
    });

    return [...unique.values()];
  }

  const products = getProducts();

  function searchURL(store, product) {
    const query = product.search || product.name;

    if (store === "amazon") {
      return "https://www.amazon.eg/s?k=" +
        encodeURIComponent(query) +
        "&tag=" + AMAZON_TAG;
    }

    if (store === "noon") {
      return "https://www.noon.com/egypt-en/search/?q=" +
        encodeURIComponent(query);
    }

    if (store === "jumia") {
      return "https://www.jumia.com.eg/catalog/?q=" +
        encodeURIComponent(query);
    }

    return "#";
  }

  function getStoreLink(product, store) {
    const directLinks = {
      amazon: product.amazonUrl || product.amazonLink,
      noon: product.noonUrl || product.noonLink,
      jumia: product.jumiaUrl || product.jumiaLink
    };

    const direct = directLinks[store];

    if (direct && validImage(direct)) {
      return direct;
    }

    if (product.store === store && product.url) {
      return product.url;
    }

    return searchURL(store, product);
  }

  function createImage(product) {
    if (validImage(product.image)) {
      return `
        <img
          class="product-image"
          src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="
            this.outerHTML =
            '<div class=&quot;product-image-fallback&quot;>نخبة</div>'
          "
        >
      `;
    }

    return `
      <div class="product-image-fallback">
        <span>${escapeHTML(product.icon || "✦")}</span>
      </div>
    `;
  }

  function createStoreButtons(product, selectedStore) {
    const stores = selectedStore === "all"
      ? Object.keys(storeNames)
      : [selectedStore];

    return stores.map(store => {
      const url = getStoreLink(product, store);

      return `
        <a
          class="product-button"
          href="${escapeHTML(url)}"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          ابحث في ${storeNames[store]}
        </a>
      `;
    }).join("");
  }

  function createCard(product, selectedStore) {
    const name = escapeHTML(product.name);
    const description = escapeHTML(
      product.description || "اكتشف تفاصيل المنتج في المتجر."
    );

    const category = escapeHTML(
      categoryNames[product.category] || "منتجات مختارة"
    );

    return `
      <article class="product-card">

        ${createImage(product)}

        <div class="product-info">

          <h3>${name}</h3>

          <p>${description}</p>

          <span class="product-category">
            ${category}
          </span>

          <div class="product-store-buttons">
            ${createStoreButtons(product, selectedStore)}
          </div>

        </div>

      </article>
    `;
  }

  function renderProducts() {
    const search = (searchInput?.value || "")
      .trim()
      .toLowerCase();

    const category = categoryFilter?.value || "all";
    const store = storeFilter?.value || "all";

    const filtered = products.filter(product => {

      const searchable = [
        product.name,
        product.description,
        product.search,
        product.category
      ].join(" ").toLowerCase();

      const matchesSearch = searchable.includes(search);

      const matchesCategory =
        category === "all" ||
        product.category === category;

      const matchesStore =
        store === "all" ||
        product.store === store ||
        product.store === "multi" ||
        Boolean(
          product[store + "Url"] ||
          product[store + "Link"]
        );

      return matchesSearch &&
        matchesCategory &&
        matchesStore;
    });

    productsGrid.innerHTML = filtered.length
      ? filtered.map(product =>
          createCard(product, store)
        ).join("")
      : "";

    if (resultCount) {
      resultCount.textContent =
        `عدد المنتجات: ${filtered.length}`;
    }

    if (emptyMessage) {
      emptyMessage.hidden = filtered.length !== 0;
    }
  }

  // Search
  searchInput?.addEventListener("input", renderProducts);

  // Filters
  categoryFilter?.addEventListener("change", renderProducts);
  storeFilter?.addEventListener("change", renderProducts);

  // Category cards
  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;

      if (categoryFilter && category) {
        categoryFilter.value = category;
        renderProducts();
      }
    });
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

  menuBtn?.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(opened));
  });

  mainNav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // Initial display
  renderProducts();

  console.log(
    `NOKHBA: ${products.length} products loaded successfully.`
  );

})();
