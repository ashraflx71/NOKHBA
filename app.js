
(() => {
  "use strict";

  const AMAZON_PRODUCTS = [
    {
      name: "Razer Viper V3 HyperSpeed",
      category: "electronics",
      description: "ماوس ألعاب لاسلكي.",
      icon: "🖱️",
      store: "amazon",
      url: "https://amzn.to/3UQqfhT"
    },
    {
      name: "عطر Marina من Kamara",
      category: "fashion",
      description: "عطر للاستخدام اليومي.",
      icon: "🌸",
      store: "amazon",
      url: "https://amzn.to/4A2dtLZ"
    },
    {
      name: "Oraimo Watch 6 OSW-807",
      category: "electronics",
      description: "ساعة ذكية.",
      icon: "⌚",
      store: "amazon",
      url: "https://amzn.to/4f3YHwf"
    },
    {
      name: "Sony WH-CH520 White",
      category: "electronics",
      description: "سماعة رأس لاسلكية.",
      icon: "🎧",
      store: "amazon",
      url: "https://amzn.to/4zk6het"
    },
    {
      name: "GRABIST Case Samsung Galaxy A16",
      category: "electronics",
      description: "جراب حماية لهاتف Samsung Galaxy A16.",
      icon: "📱",
      store: "amazon",
      url: "https://amzn.to/4igWGyU"
    },
    {
      name: "Redragon GS511 RGB",
      category: "electronics",
      description: "مكبرات صوت للكمبيوتر.",
      icon: "🔊",
      store: "amazon",
      url: "https://amzn.to/3UpuUab"
    },
    {
      name: "قلادة القلب من Julia Store",
      category: "fashion",
      description: "قلادة بتصميم القلب.",
      icon: "💎",
      store: "amazon",
      url: "https://amzn.to/4yPpP9g"
    },
    {
      name: "Simple Trending Coffee Capsule Organizer",
      category: "home",
      description: "منظم كبسولات القهوة.",
      icon: "☕",
      store: "amazon",
      url: "https://amzn.to/3U1AdNa"
    },
    {
      name: "Mirokitty Summer Dresses",
      category: "fashion",
      description: "فساتين صيفية.",
      icon: "👗",
      store: "amazon",
      url: "https://amzn.to/3UxkoOa"
    },
    {
      name: "Assistant to the Villain",
      category: "featured",
      description: "كتاب للقراءة.",
      icon: "📚",
      store: "amazon",
      url: "https://amzn.to/3UY9K3g"
    }
  ];

  const EXTRA_PRODUCTS = Array.isArray(window.NOKHBA_EXTRA_PRODUCTS)
    ? window.NOKHBA_EXTRA_PRODUCTS
    : [];

  const CATEGORY_NAMES = {
    electronics: "التقنية والإلكترونيات",
    home: "المنزل والمطبخ",
    fashion: "الأناقة والعناية",
    featured: "اختيارات مميزة",
    cars: "السيارات والعناية بها",
    daily: "احتياجات يومية"
  };

  const STORE_NAMES = {
    amazon: "Amazon Egypt",
    noon: "Noon Egypt",
    jumia: "Jumia Egypt"
  };

  const PRODUCTS = [
    ...AMAZON_PRODUCTS,
    ...EXTRA_PRODUCTS.map((product) => ({
      ...product,
      store: "multi"
    }))
  ];

  const elements = {
    search: document.getElementById("productSearch"),
    category: document.getElementById("categoryFilter"),
    store: document.getElementById("storeFilter"),
    products: document.getElementById("products"),
    count: document.getElementById("resultCount"),
    menuButton: document.getElementById("menuBtn"),
    nav: document.getElementById("mainNav")
  };

  function normalizeText(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/[ـًٌٍَُِّْ]/g, "")
      .trim();
  }

  function safeExternalUrl(url) {
    try {
      const parsed = new URL(url);

      const allowedHosts = [
        "amzn.to",
        "amazon.eg",
        "www.amazon.eg",
        "noon.com",
        "www.noon.com",
        "jumia.com.eg",
        "www.jumia.com.eg"
      ];

      return parsed.protocol === "https:" &&
        allowedHosts.includes(parsed.hostname);
    } catch {
      return false;
    }
  }

  function getStoreUrl(product, store) {
    if (store === "amazon") {
      return product.store === "amazon" ? product.url : "";
    }

    if (!product.search) return "";

    const query = encodeURIComponent(product.search);

    if (store === "noon") {
      return `https://www.noon.com/egypt-en/search/?q=${query}`;
    }

    if (store === "jumia") {
      return `https://www.jumia.com.eg/catalog/?q=${query}`;
    }

    return "";
  }

  function productMatchesStore(product, selectedStore) {
    if (selectedStore === "all") return true;

    if (selectedStore === "amazon") {
      return product.store === "amazon";
    }

    if (selectedStore === "noon" || selectedStore === "jumia") {
      return product.store === "multi" && Boolean(product.search);
    }

    return false;
  }

  function productMatchesSearch(product, query) {
    if (!query) return true;

    const searchable = normalizeText([
      product.name,
      product.description,
      product.search,
      CATEGORY_NAMES[product.category]
    ].join(" "));

    return searchable.includes(normalizeText(query));
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  function createStoreButton(product, store) {
    const url = getStoreUrl(product, store);

    if (!url || !safeExternalUrl(url)) return null;

    const labels = {
      amazon: "عرض المنتج في أمازون",
      noon: "ابحث عنه في نون",
      jumia: "ابحث عنه في جوميا"
    };

    const link = createElement("a", "product-button", labels[store]);
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `${labels[store]}: ${product.name}`);

    return link;
  }

  function createProductCard(product) {
    const card = createElement("article", "product-card");

    const image = createElement(
      "div",
      "product-image product-image-fallback",
      product.icon || "✧"
    );
    image.setAttribute("aria-hidden", "true");

    const info = createElement("div", "product-info");
    const title = createElement("h3", "", product.name);
    const description = createElement("p", "", product.description || "");

    const category = createElement(
      "span",
      "product-category",
      CATEGORY_NAMES[product.category] || "منتج متنوع"
    );

    const buttons = createElement("div", "product-store-buttons");

    if (product.store === "amazon") {
      const amazonButton = createStoreButton(product, "amazon");
      if (amazonButton) buttons.appendChild(amazonButton);
    } else {
      const noonButton = createStoreButton(product, "noon");
      const jumiaButton = createStoreButton(product, "jumia");

      if (noonButton) buttons.appendChild(noonButton);
      if (jumiaButton) buttons.appendChild(jumiaButton);
    }

    info.append(title, description, category, buttons);
    card.append(image, info);

    return card;
  }

  function getFilteredProducts() {
    const query = elements.search ? elements.search.value : "";
    const category = elements.category ? elements.category.value : "all";
    const store = elements.store ? elements.store.value : "all";

    return PRODUCTS.filter((product) => {
      const categoryMatch =
        category === "all" || product.category === category;

      return categoryMatch &&
        productMatchesStore(product, store) &&
        productMatchesSearch(product, query);
    });
  }

  function renderProducts() {
    if (!elements.products) return;

    const filtered = getFilteredProducts();
    elements.products.replaceChildren();

    if (elements.count) {
      elements.count.textContent = `عدد النتائج: ${filtered.length}`;
    }

    if (filtered.length === 0) {
      const empty = createElement("div", "empty-state");
      const icon = createElement("span", "", "✧");
      icon.setAttribute("aria-hidden", "true");

      const message = createElement(
        "p",
        "",
        "لم نعثر على منتجات تطابق اختياراتك."
      );

      const hint = createElement(
        "small",
        "",
        "جرّب تغيير كلمة البحث أو اختيار قسم أو متجر آخر."
      );

      empty.append(icon, message, hint);
      elements.products.appendChild(empty);
      return;
    }

    const fragment = document.createDocumentFragment();

    filtered.forEach((product) => {
      fragment.appendChild(createProductCard(product));
    });

    elements.products.appendChild(fragment);
  }

  function setupFilters() {
    if (elements.search) {
      elements.search.addEventListener("input", renderProducts);
    }

    if (elements.category) {
      elements.category.addEventListener("change", renderProducts);
    }

    if (elements.store) {
      elements.store.addEventListener("change", renderProducts);
    }

    document.querySelectorAll("[data-category]").forEach((card) => {
      card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");

        if (elements.category) {
          elements.category.value = category;
        }

        renderProducts();
      });
    });
  }

  function setupMobileMenu() {
    if (!elements.menuButton || !elements.nav) return;

    function closeMenu() {
      elements.nav.classList.remove("open");
      elements.menuButton.setAttribute("aria-expanded", "false");
      elements.menuButton.setAttribute("aria-label", "فتح القائمة");
    }

    elements.menuButton.addEventListener("click", () => {
      const isOpen = elements.nav.classList.toggle("open");

      elements.menuButton.setAttribute("aria-expanded", String(isOpen));
      elements.menuButton.setAttribute(
        "aria-label",
        isOpen ? "إغلاق القائمة" : "فتح القائمة"
      );
    });

    elements.nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && location.protocol === "https:") {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
          .catch((error) => {
            console.warn("تعذر تسجيل Service Worker:", error);
          });
      });
    }
  }

  function init() {
    setupFilters();
    setupMobileMenu();
    renderProducts();
    registerServiceWorker();
  }

  window.NOKHBA = {
    products: PRODUCTS,
    renderProducts,
    getFilteredProducts
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
