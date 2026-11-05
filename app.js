
(() => {
  "use strict";

  /* =========================================
     NOKHBA | نخبة
     Main Application - Version 3.5
     Amazon Affiliate Only
     Tracking ID: ashrafdealseg-21
     ========================================= */

  const VERSION = "3.5";
  const AMAZON_TAG = "ashrafdealseg-21";

  // =========================================
  // المنتجات الأساسية - روابط مباشرة
  // =========================================

  const AMAZON_PRODUCTS = [
    {
      name: "Razer Viper V3 HyperSpeed",
      category: "electronics",
      description: "ماوس ألعاب لاسلكي.",
      icon: "🖱️",
      url: "https://amzn.to/3UQqfhT"
    },
    {
      name: "عطر Marina من Kamara",
      category: "fashion",
      description: "عطر للاستخدام اليومي.",
      icon: "🌸",
      url: "https://amzn.to/4A2dtLZ"
    },
    {
      name: "Oraimo Watch 6 OSW-807",
      category: "electronics",
      description: "ساعة ذكية.",
      icon: "⌚",
      url: "https://amzn.to/4f3YHwf"
    },
    {
      name: "Sony WH-CH520 White",
      category: "electronics",
      description: "سماعة رأس لاسلكية.",
      icon: "🎧",
      url: "https://amzn.to/4zk6het"
    },
    {
      name: "GRABIST Case Samsung Galaxy A16",
      category: "electronics",
      description: "جراب حماية لهاتف Samsung Galaxy A16.",
      icon: "📱",
      url: "https://amzn.to/4igWGyU"
    },
    {
      name: "Redragon GS511 RGB",
      category: "electronics",
      description: "مكبرات صوت للكمبيوتر.",
      icon: "🔊",
      url: "https://amzn.to/3UpuUab"
    },
    {
      name: "قلادة القلب من Julia Store",
      category: "fashion",
      description: "قلادة بتصميم القلب.",
      icon: "💎",
      url: "https://amzn.to/4yPpP9g"
    },
    {
      name: "Simple Trending Coffee Capsule Organizer",
      category: "home",
      description: "منظم كبسولات القهوة.",
      icon: "☕",
      url: "https://amzn.to/3U1AdNa"
    },
    {
      name: "Mirokitty Summer Dresses",
      category: "fashion",
      description: "فساتين صيفية.",
      icon: "👗",
      url: "https://amzn.to/3UxkoOa"
    },
    {
      name: "Assistant to the Villain",
      category: "featured",
      description: "كتاب للقراءة.",
      icon: "📚",
      url: "https://amzn.to/3UY9K3g"
    },
    {
      name: "Xiaomi Redmi 15C 8GB / 256GB",
      category: "electronics",
      description: "هاتف شاومي ريدمي 15C.",
      icon: "📱",
      url: "https://amzn.to/4imw67K"
    }
  ];

  // =========================================
  // المنتجات الإضافية
  // =========================================

  const EXTRA_PRODUCTS = Array.isArray(
    window.NOKHBA_EXTRA_PRODUCTS
  )
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

  // =========================================
  // توحيد المنتجات
  // =========================================

  const PRODUCTS = [
    ...AMAZON_PRODUCTS.map(product => ({
      ...product,
      store: "amazon",
      source: "direct"
    })),

    ...EXTRA_PRODUCTS.map(product => ({
      ...product,
      store: "amazon",
      source: "search"
    }))
  ];

  // =========================================
  // التحقق من الروابط
  // =========================================

  function safeAmazonUrl(url) {
    try {
      const parsed = new URL(url);

      const allowedHosts = [
        "amzn.to",
        "amazon.eg",
        "www.amazon.eg"
      ];

      return (
        parsed.protocol === "https:" &&
        allowedHosts.includes(parsed.hostname)
      );
    } catch {
      return false;
    }
  }

  function safeImageUrl(url) {
    try {
      const parsed = new URL(url);

      return parsed.protocol === "https:" &&
        ["http:", "https:"].includes(parsed.protocol);
    } catch {
      return false;
    }
  }

  // =========================================
  // إنشاء روابط أمازون
  // =========================================

  function getAmazonUrl(product) {
    if (product.source === "direct") {
      return safeAmazonUrl(product.url)
        ? product.url
        : "";
    }

    if (!product.search) return "";

    const url = new URL(
      "https://www.amazon.eg/s"
    );

    url.searchParams.set("k", product.search);
    url.searchParams.set("tag", AMAZON_TAG);

    return url.toString();
  }

  // =========================================
  // أدوات مساعدة
  // =========================================

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

  // =========================================
  // عناصر الصفحة
  // =========================================

  const elements = {
    search: document.getElementById("productSearch"),
    category: document.getElementById("categoryFilter"),
    store: document.getElementById("storeFilter"),
    products: document.getElementById("products"),
    count: document.getElementById("resultCount"),
    menuButton: document.getElementById("menuBtn"),
    nav: document.getElementById("mainNav")
  };

  // =========================================
  // البحث والتصفية
  // =========================================

  function productMatchesSearch(product, query) {
    if (!query) return true;

    const searchable = normalizeText([
      product.name,
      product.description,
      product.search,
      CATEGORY_NAMES[product.category]
    ].join(" "));

    return searchable.includes(
      normalizeText(query)
    );
  }

  function getFilteredProducts() {
    const query = elements.search
      ? elements.search.value
      : "";

    const category = elements.category
      ? elements.category.value
      : "all";

    return PRODUCTS.filter(product => {
      const categoryMatch =
        category === "all" ||
        product.category === category;

      return categoryMatch &&
        productMatchesSearch(product, query);
    });
  }

  // =========================================
  // صور المنتجات
  // =========================================

  function createProductImage(product) {
    const wrapper = createElement(
      "div",
      "product-image"
    );

    const imageUrl =
      product.image || product.imageUrl || "";

    if (imageUrl && safeImageUrl(imageUrl)) {
      const image = createElement(
        "img",
        "product-photo"
      );

      image.src = imageUrl;
      image.alt = product.name;
      image.loading = "lazy";
      image.decoding = "async";

      image.addEventListener("error", () => {
        wrapper.replaceChildren(
          createElement(
            "span",
            "product-image-fallback",
            product.icon || "✧"
          )
        );
      }, { once: true });

      wrapper.appendChild(image);
    } else {
      wrapper.appendChild(
        createElement(
          "span",
          "product-image-fallback",
          product.icon || "✧"
        )
      );
    }

    return wrapper;
  }

  // =========================================
  // زر أمازون
  // =========================================

  function createAmazonButton(product) {
    const url = getAmazonUrl(product);

    if (!url || !safeAmazonUrl(url)) {
      return null;
    }

    const label = product.source === "direct"
      ? "عرض المنتج في أمازون"
      : "ابحث عن المنتج في أمازون";

    const button = createElement(
      "a",
      "product-button",
      label
    );

    button.href = url;
    button.target = "_blank";

    button.rel =
      "noopener noreferrer sponsored nofollow";

    button.setAttribute(
      "aria-label",
      label + ": " + product.name
    );

    return button;
  }

  // =========================================
  // بطاقة المنتج
  // =========================================

  function createProductCard(product) {
    const card = createElement(
      "article",
      "product-card"
    );

    const image = createProductImage(product);

    const info = createElement(
      "div",
      "product-info"
    );

    const title = createElement(
      "h3",
      "",
      product.name
    );

    const description = createElement(
      "p",
      "",
      product.description || ""
    );

    const category = createElement(
      "span",
      "product-category",
      CATEGORY_NAMES[product.category] ||
      "منتج متنوع"
    );

    const buttons = createElement(
      "div",
      "product-store-buttons"
    );

    const button = createAmazonButton(product);

    if (button) {
      buttons.appendChild(button);
    }

    info.append(
      title,
      description,
      category,
      buttons
    );

    card.append(image, info);

    return card;
  }

  // =========================================
  // عرض المنتجات
  // =========================================

  function renderProducts() {
    if (!elements.products) return;

    const filteredProducts =
      getFilteredProducts();

    elements.products.replaceChildren();

    if (elements.count) {
      elements.count.textContent =
        "عدد النتائج: " + filteredProducts.length;
    }

    if (filteredProducts.length === 0) {
      const empty = createElement(
        "div",
        "empty-state"
      );

      empty.append(
        createElement("span", "", "✧"),
        createElement(
          "p",
          "",
          "لم نعثر على منتجات تطابق اختياراتك."
        ),
        createElement(
          "small",
          "",
          "جرّب تغيير كلمة البحث أو اختيار قسم آخر."
        )
      );

      elements.products.appendChild(empty);
      return;
    }

    const fragment =
      document.createDocumentFragment();

    filteredProducts.forEach(product => {
      fragment.appendChild(
        createProductCard(product)
      );
    });

    elements.products.appendChild(fragment);
  }

  // =========================================
  // تحسين مظهر المنتجات
  // =========================================

  function addProductStyles() {
    if (document.getElementById("nokhbaProductStyles")) {
      return;
    }

    const style = document.createElement("style");

    style.id = "nokhbaProductStyles";

    style.textContent = `
      .product-image {
        height: 220px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: #f8f8f6;
      }

      .product-photo {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
        padding: 15px;
      }

      .product-image-fallback {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 58px;
        color: #a98743;
      }

      .product-store-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 12px;
      }

      .product-button {
        display: inline-block;
        padding: 10px 14px;
        border-radius: 8px;
        background: #d6b36a;
        color: #15191e;
        text-decoration: none;
        font-weight: 700;
        text-align: center;
      }

      .product-button:hover {
        background: #f0d99e;
      }

      .product-category {
        display: inline-block;
        margin-top: 8px;
      }

      .nokhba-disclosure {
        width: min(1100px, 92%);
        margin: 30px auto;
        padding: 16px;
        border: 1px solid rgba(214,179,106,.3);
        border-radius: 12px;
        color: var(--muted, #a8adb4);
        line-height: 1.9;
        font-size: 13px;
      }

      .nokhba-disclosure strong {
        color: var(--gold, #d6b36a);
      }
    `;

    document.head.appendChild(style);
  }

  // =========================================
  // إفصاح العمولة
  // =========================================

  function addAffiliateDisclosure() {
    if (
      document.getElementById("nokhbaDisclosure")
    ) {
      return;
    }

    const anchor =
      document.getElementById("about") ||
      document.querySelector("footer");

    if (!anchor || !anchor.parentNode) return;

    const disclosure = createElement(
      "section",
      "nokhba-disclosure"
    );

    disclosure.id = "nokhbaDisclosure";

    const heading = createElement(
      "strong",
      "",
      "إفصاح روابط العمولة"
    );

    const paragraph = createElement(
      "p",
      "",
      "قد تحصل نخبة على عمولة من عمليات الشراء المؤهلة عبر بعض روابط أمازون، دون أي تكلفة إضافية عليك. لا تؤثر هذه العمولة على حرصنا على تقديم معلومات واضحة وشفافة."
    );

    disclosure.append(heading, paragraph);

    anchor.parentNode.insertBefore(
      disclosure,
      anchor
    );
  }

  // =========================================
  // البحث والفلاتر
  // =========================================

  function setupFilters() {
    if (elements.search) {
      elements.search.addEventListener(
        "input",
        renderProducts
      );
    }

    if (elements.category) {
      elements.category.addEventListener(
        "change",
        renderProducts
      );
    }

    // إخفاء خيارات المتاجر الأخرى
    // لأن هذه النسخة مخصصة لأمازون فقط

    if (elements.store) {
      elements.store.value = "amazon";

      Array.from(elements.store.options).forEach(
        option => {
          if (
            option.value !== "amazon" &&
            option.value !== "all"
          ) {
            option.hidden = true;
          }
        }
      );

      elements.store.addEventListener(
        "change",
        renderProducts
      );
    }

    document.querySelectorAll(
      "[data-category]"
    ).forEach(card => {
      card.addEventListener("click", () => {
        const category =
          card.getAttribute("data-category");

        if (elements.category) {
          elements.category.value = category;
        }

        renderProducts();

        const section =
          document.getElementById("products");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  }

  // =========================================
  // القائمة المتنقلة
  // =========================================

  function setupMobileMenu() {
    if (!elements.menuButton || !elements.nav) {
      return;
    }

    function closeMenu() {
      elements.nav.classList.remove("open");

      elements.menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      elements.menuButton.setAttribute(
        "aria-label",
        "فتح القائمة"
      );
    }

    elements.menuButton.addEventListener(
      "click",
      () => {
        const isOpen =
          elements.nav.classList.toggle("open");

        elements.menuButton.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

        elements.menuButton.setAttribute(
          "aria-label",
          isOpen
            ? "إغلاق القائمة"
            : "فتح القائمة"
        );
      }
    );

    elements.nav.querySelectorAll("a").forEach(
      link => {
        link.addEventListener("click", closeMenu);
      }
    );

    document.addEventListener(
      "keydown",
      event => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }
    );
  }

  // =========================================
  // Service Worker
  // =========================================

  function registerServiceWorker() {
    if (
      "serviceWorker" in navigator &&
      location.protocol === "https:"
    ) {
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
  }

  // =========================================
  // تشغيل التطبيق
  // =========================================

  function init() {
    setupFilters();
    setupMobileMenu();
    addProductStyles();
    renderProducts();
    addAffiliateDisclosure();
    registerServiceWorker();

    console.info(
      "NOKHBA Version " + VERSION + " is ready."
    );

    console.info(
      "Products:", PRODUCTS.length
    );
  }

  window.NOKHBA = {
    version: VERSION,
    trackingId: AMAZON_TAG,
    products: PRODUCTS,
    renderProducts,
    getFilteredProducts
  };

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();
