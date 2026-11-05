
(() => {
  "use strict";

  /* =========================================
     NOKHBA | نخبة
     Main Application - Version 3.3
     Amazon ID: ashrafdealseg-21
     ========================================= */

  const AMAZON_TAG = "ashrafdealseg-21";

  // =========================================
  // المنتجات الأساسية - روابط أمازون الأصلية
  // =========================================

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
    },
    {
      name: "Xiaomi Redmi 15C 8GB / 256GB",
      category: "electronics",
      description: "هاتف شاومي ريدمي 15C.",
      icon: "📱",
      store: "amazon",
      url: "https://amzn.to/4imw67K"
    }
  ];

  // =========================================
  // المنتجات الإضافية
  // يجب تحميل products-multi.js أولاً
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

  const PRODUCTS = [
    ...AMAZON_PRODUCTS,
    ...EXTRA_PRODUCTS.map(product => ({
      ...product,
      store: "multi"
    }))
  ];

  // =========================================
  // مكتبة الحملات الإعلانية
  // =========================================

  const CAMPAIGN_CREATIVES = [
    {
      title: "أزياء البنات",
      store: "نمشي Namshi",
      category: "الأطفال والأزياء",
      type: "video",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D8%A3%D8%B7%D9%81%D8%A7%D9%84/3131_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%D8%8C%D9%86%D9%85%D8%B4%D9%89_%D8%B9%D8%B1%D8%A8%D9%8A_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%20%D8%A8%D9%86%D8%A7%D8%AA.mp4"
    },
    {
      title: "تخفيضات منتجات الأطفال",
      store: "نون",
      category: "الأطفال",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Noon/Arabic/%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84/1143_%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84%D8%8C%D9%86%D9%88%D9%86_%D8%B9%D8%B1%D8%A8%D9%8A_%D8%AA%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84.jpg"
    },
    {
      title: "تخفيضات اللابتوبات",
      store: "نون",
      category: "التقنية والإلكترونيات",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Noon/Arabic/%D9%86%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA/11311_%D8%AA%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA_%D9%86%D9%88%D9%86_%D8%B9%D8%B1%D8%A8%D9%8A,%D9%84%D8%A7%D8%A8%D8%AA%D9%88%D8%A8%D8%A7%D8%AA.jpg.png.jpg"
    },
    {
      title: "تخفيضات الكاميرات",
      store: "نون",
      category: "التصوير",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Noon/Arabic/%D9%86%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA/11313_%D8%AA%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA_%D9%86%D9%88%D9%86_%D8%B9%D8%B1%D8%A8%D9%8A,%D9%83%D8%A7%D9%85%D9%8A%D8%B1%D8%A7%D8%AA..jpg.jpg"
    },
    {
      title: "أزياء رجالية من نمشي",
      store: "نمشي Namshi",
      category: "أزياء رجالية",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D8%B1%D8%AC%D8%A7%D9%84/3131_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%D8%8C%D9%86%D9%85%D8%B4%D9%89_%D8%B9%D8%B1%D8%A8%D9%8A_%D8%B7%D9%82%D9%85.gif"
    },
    {
      title: "العودة إلى الجامعة",
      store: "نمشي Namshi",
      category: "أزياء رجالية",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D8%B1%D8%AC%D8%A7%D9%84/3134_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%D8%8C%D9%86%D9%85%D8%B4%D9%89_%D8%B9%D8%B1%D8%A8%D9%8A_%D8%B7%D9%82%D9%85%20%D8%A7%D9%84%D8%B1%D8%AC%D9%88%D8%B9%20%D9%84%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9.jpg"
    },
    {
      title: "الجمال والمكياج",
      store: "نمشي Namshi",
      category: "الجمال والعناية",
      type: "image",
      note: "يرجى التأكد من صلاحية الحملة قبل الترويج.",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D9%86%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA/31318_%D8%AC%D9%85%D8%A7%D9%84,%D9%85%D9%83%D9%8A%D8%A7%D8%AC%202024.gif"
    },
    {
      title: "الأزياء الأوروبية",
      store: "نمشي Namshi",
      category: "الأزياء",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D9%86%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA/31320_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%D8%8C%D9%86%D9%85%D8%B4%D9%89_%D8%B9%D8%B1%D8%A8%D9%8A_%D8%A7%D9%84%D9%83%D8%A7%D8%B3%20%D8%A7%D9%84%D8%A7%D9%88%D8%B1%D9%88%D8%A8%D9%8A.jpg"
    },
    {
      title: "تخفيضات يوم الرواتب",
      store: "نمشي Namshi",
      category: "تخفيضات الأزياء",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D9%86%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA/3135_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%D8%8C%D9%86%D9%85%D8%B4%D9%89_%D8%B9%D8%B1%D8%A8%D9%8A_%D8%AA%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA%20%D9%84%D9%8A%D9%88%D9%85%20%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D8%AA%D8%A8.gif"
    },
    {
      title: "تخفيضات الأزياء",
      store: "نمشي Namshi",
      category: "الأزياء",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D9%86%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA/3133_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%D8%8C%D9%86%D9%85%D8%B4%D9%89_%D8%B9%D8%B1%D8%A8%D9%8A_%D8%AA%D8%AE%D9%81%D9%8A%D8%B6%D8%A7%D8%AA.jpg"
    },
    {
      title: "قمصان نسائية",
      store: "نمشي Namshi",
      category: "أزياء نسائية",
      type: "image",
      url: "https://z.nooncdn.com/rn/ambassadors/Artworks/Namshi/Arabic/%D9%86%D8%B3%D8%A7%D8%A1/3232_%D8%A7%D8%B2%D9%8A%D8%A7%D8%A1%D8%8C%D9%86%D9%85%D8%B4%D9%89_%D8%B9%D8%B1%D8%A8%D9%8A_%D9%82%D9%85%D8%B5%D8%A7%D9%86.jpg"
    }
  ];

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

  function safeImageUrl(url) {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "https:";
    } catch {
      return false;
    }
  }

  function safeCampaignUrl(url) {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "https:" &&
        parsed.hostname === "z.nooncdn.com";
    } catch {
      return false;
    }
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  // =========================================
  // روابط المتاجر
  // =========================================

  function getStoreUrl(product, store) {
    if (store === "amazon") {
      if (product.store === "amazon" && product.url) {
        return product.url;
      }

      if (product.search) {
        return "https://www.amazon.eg/s?k=" +
          encodeURIComponent(product.search) +
          "&tag=" + encodeURIComponent(AMAZON_TAG);
      }

      return "";
    }

    if (!product.search) return "";

    const query = encodeURIComponent(product.search);

    if (store === "noon") {
      return "https://www.noon.com/egypt-en/search/?q=" + query;
    }

    if (store === "jumia") {
      return "https://www.jumia.com.eg/catalog/?q=" + query;
    }

    return "";
  }

  function productMatchesStore(product, selectedStore) {
    if (selectedStore === "all") return true;

    if (selectedStore === "amazon") {
      return product.store === "amazon" ||
        (product.store === "multi" && Boolean(product.search));
    }

    if (selectedStore === "noon" || selectedStore === "jumia") {
      return product.store === "multi" && Boolean(product.search);
    }

    return false;
  }

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

    return searchable.includes(normalizeText(query));
  }

  function getFilteredProducts() {
    const query = elements.search
      ? elements.search.value
      : "";

    const category = elements.category
      ? elements.category.value
      : "all";

    const store = elements.store
      ? elements.store.value
      : "all";

    return PRODUCTS.filter(product => {
      const categoryMatch =
        category === "all" || product.category === category;

      return categoryMatch &&
        productMatchesStore(product, store) &&
        productMatchesSearch(product, query);
    });
  }

  // =========================================
  // صور المنتجات
  // =========================================

  function createProductImage(product) {
    const wrapper = createElement("div", "product-image");

    const imageUrl = product.image || product.imageUrl || "";

    if (imageUrl && safeImageUrl(imageUrl)) {
      const image = createElement("img", "product-photo");

      image.src = imageUrl;
      image.alt = product.name || "صورة المنتج";
      image.loading = "lazy";
      image.decoding = "async";

      image.addEventListener("error", () => {
        image.remove();
        wrapper.appendChild(
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
  // أزرار المتاجر
  // =========================================

  function createStoreButton(product, store) {
    const url = getStoreUrl(product, store);

    if (!url || !safeExternalUrl(url)) return null;

    const labels = {
      amazon: product.store === "amazon"
        ? "عرض المنتج في أمازون"
        : "البحث في أمازون",
      noon: "البحث في نون",
      jumia: "البحث في جوميا"
    };

    const button = createElement(
      "a",
      "product-button",
      labels[store]
    );

    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer sponsored nofollow";

    button.setAttribute(
      "aria-label",
      labels[store] + ": " + product.name
    );

    return button;
  }

  // =========================================
  // بطاقة المنتج
  // =========================================

  function createProductCard(product) {
    const card = createElement("article", "product-card");
    const image = createProductImage(product);
    const info = createElement("div", "product-info");

    const title = createElement("h3", "", product.name);

    const description = createElement(
      "p",
      "",
      product.description || ""
    );

    const category = createElement(
      "span",
      "product-category",
      CATEGORY_NAMES[product.category] || "منتج متنوع"
    );

    const buttons = createElement(
      "div",
      "product-store-buttons"
    );

    const selectedStore = elements.store
      ? elements.store.value
      : "all";

    const stores = product.store === "amazon"
      ? ["amazon"]
      : selectedStore === "all"
        ? ["amazon", "noon", "jumia"]
        : [selectedStore];

    stores.forEach(store => {
      const button = createStoreButton(product, store);
      if (button) buttons.appendChild(button);
    });

    info.append(title, description, category, buttons);
    card.append(image, info);

    return card;
  }

  // =========================================
  // عرض المنتجات
  // =========================================

  function renderProducts() {
    if (!elements.products) return;

    const filteredProducts = getFilteredProducts();

    elements.products.replaceChildren();

    if (elements.count) {
      elements.count.textContent =
        "عدد النتائج: " + filteredProducts.length;
    }

    if (filteredProducts.length === 0) {
      const empty = createElement("div", "empty-state");

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

    const fragment = document.createDocumentFragment();

    filteredProducts.forEach(product => {
      fragment.appendChild(createProductCard(product));
    });

    elements.products.appendChild(fragment);
  }

  // =========================================
  // تنسيق مكتبة الحملات
  // =========================================

  function addCampaignStyles() {
    if (document.getElementById("campaignStyles")) return;

    const style = document.createElement("style");
    style.id = "campaignStyles";

    style.textContent = `
      .campaign-creatives {
        width: min(1180px, 92%);
        margin: 45px auto;
        color: var(--text, #f1f1ed);
      }

      .campaign-heading {
        text-align: center;
        margin-bottom: 24px;
      }

      .campaign-heading h2 {
        color: var(--gold, #d6b36a);
      }

      .campaign-heading p,
      .campaign-info p {
        color: var(--muted, #a8adb4);
      }

      .campaign-grid {
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(230px, 1fr)
        );
        gap: 20px;
      }

      .campaign-card {
        overflow: hidden;
        border: 1px solid var(--border, rgba(214,179,106,.22));
        border-radius: 16px;
        background: var(--dark-card, #222a33);
      }

      .campaign-media {
        width: 100%;
        aspect-ratio: 16 / 10;
        background: #111820;
        overflow: hidden;
      }

      .campaign-media img,
      .campaign-media video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
      }

      .campaign-info {
        padding: 15px;
      }

      .campaign-info h3 {
        color: var(--gold-light, #f0d99e);
        margin: 0 0 8px;
      }

      .campaign-info a {
        display: inline-block;
        margin-top: 8px;
        color: var(--gold-light, #f0d99e);
      }

      .campaign-note {
        font-size: 12px;
        line-height: 1.8;
      }

      .campaign-disclosure {
        margin-top: 18px;
        font-size: 13px;
        line-height: 1.8;
        color: var(--muted, #a8adb4);
      }

      .product-image {
        height: 220px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .product-photo {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .product-image-fallback {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-size: 64px;
      }

      .product-store-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 12px;
      }
    `;

    document.head.appendChild(style);
  }

  // =========================================
  // عرض مكتبة الحملات
  // =========================================

  function renderCampaignCreatives() {
    if (document.getElementById("campaignCreatives")) return;

    const anchor =
      document.getElementById("about") ||
      document.querySelector("footer");

    if (!anchor || !anchor.parentNode) return;

    const section = document.createElement("section");

    section.id = "campaignCreatives";
    section.className = "campaign-creatives";

    const heading = document.createElement("div");
    heading.className = "campaign-heading";

    heading.append(
      createElement("h2", "", "مكتبة العروض والإعلانات"),
      createElement(
        "p",
        "",
        "مواد إعلانية من المتاجر والعلامات التجارية."
      )
    );

    const grid = document.createElement("div");
    grid.className = "campaign-grid";

    CAMPAIGN_CREATIVES.forEach(item => {
      if (!safeCampaignUrl(item.url)) return;

      const card = document.createElement("article");
      card.className = "campaign-card";

      const media = document.createElement("div");
      media.className = "campaign-media";

      if (item.type === "video") {
        const video = document.createElement("video");

        video.controls = true;
        video.preload = "metadata";
        video.playsInline = true;

        const source = document.createElement("source");
        source.src = item.url;
        source.type = "video/mp4";

        video.appendChild(source);
        media.appendChild(video);
      } else {
        const image = document.createElement("img");

        image.src = item.url;
        image.alt = item.title;
        image.loading = "lazy";
        image.decoding = "async";

        image.addEventListener("error", () => {
          image.style.display = "none";
        });

        media.appendChild(image);
      }

      const info = document.createElement("div");
      info.className = "campaign-info";

      const name = createElement("h3", "", item.title);

      const store = createElement(
        "p",
        "",
        item.store + " · " + item.category
      );

      const link = createElement(
        "a",
        "",
        "فتح المادة الأصلية"
      );

      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      info.append(name, store, link);

      if (item.note) {
        info.appendChild(
          createElement("p", "campaign-note", item.note)
        );
      }

      card.append(media, info);
      grid.appendChild(card);
    });

    const disclosure = createElement(
      "p",
      "campaign-disclosure",
      "تنبيه: المواد الإعلانية المعروضة ليست روابط شراء أو روابط تتبع عمولة. يجب التأكد من صلاحية الحملات وإضافة روابط التتبع المعتمدة قبل الترويج."
    );

    section.append(heading, grid, disclosure);

    anchor.parentNode.insertBefore(section, anchor);
  }

  // =========================================
  // البحث والفلاتر
  // =========================================

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

    document.querySelectorAll("[data-category]").forEach(card => {
      card.addEventListener("click", () => {
        const category = card.getAttribute("data-category");

        if (elements.category) {
          elements.category.value = category;
        }

        renderProducts();
      });
    });
  }

  // =========================================
  // القائمة المتنقلة
  // =========================================

  function setupMobileMenu() {
    if (!elements.menuButton || !elements.nav) return;

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

    elements.menuButton.addEventListener("click", () => {
      const isOpen = elements.nav.classList.toggle("open");

      elements.menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      elements.menuButton.setAttribute(
        "aria-label",
        isOpen ? "إغلاق القائمة" : "فتح القائمة"
      );
    });

    elements.nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
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
    renderProducts();
    addCampaignStyles();
    renderCampaignCreatives();
    registerServiceWorker();
  }

  window.NOKHBA = {
    products: PRODUCTS,
    creatives: CAMPAIGN_CREATIVES,
    renderProducts,
    getFilteredProducts,
    renderCampaignCreatives
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
