
/* =========================================
   NOKHBA | نخبة
   نظام المنتجات والبحث والمتاجر
   ========================================= */

const AMAZON_TAG = "ashrafdealseg-21";

const AMAZON_PRODUCTS = [
  {
    name: "Razer Viper V3 HyperSpeed",
    category: "electronics",
    description: "ماوس ألعاب لاسلكي",
    icon: "🖱️",
    store: "amazon",
    url: "https://amzn.to/3UQqfhT"
  },
  {
    name: "عطر Marina من Kamara",
    category: "fashion",
    description: "عطر للاستخدام اليومي",
    icon: "🌸",
    store: "amazon",
    url: "https://amzn.to/4A2dtLZ"
  },
  {
    name: "Oraimo Watch 6 OSW-807",
    category: "electronics",
    description: "ساعة ذكية",
    icon: "⌚",
    store: "amazon",
    url: "https://amzn.to/4f3YHwf"
  },
  {
    name: "Sony WH-CH520",
    category: "electronics",
    description: "سماعة رأس لاسلكية",
    icon: "🎧",
    store: "amazon",
    url: "https://amzn.to/4zk6het"
  },
  {
    name: "GRABIST Case Samsung Galaxy A16",
    category: "electronics",
    description: "جراب حماية للهاتف",
    icon: "📱",
    store: "amazon",
    url: "https://amzn.to/4igWGyU"
  },
  {
    name: "Redragon GS511 RGB",
    category: "electronics",
    description: "سماعات كمبيوتر",
    icon: "🔊",
    store: "amazon",
    url: "https://amzn.to/3UpuUab"
  },
  {
    name: "قلادة القلب من Julia Store",
    category: "fashion",
    description: "إكسسوار نسائي",
    icon: "💝",
    store: "amazon",
    url: "https://amzn.to/4yPpP9g"
  },
  {
    name: "Simple Trending Coffee Organizer",
    category: "home",
    description: "منظم كبسولات القهوة",
    icon: "☕",
    store: "amazon",
    url: "https://amzn.to/3U1AdNa"
  },
  {
    name: "Mirokitty Summer Dresses",
    category: "fashion",
    description: "فساتين صيفية",
    icon: "👗",
    store: "amazon",
    url: "https://amzn.to/3UxkoOa"
  },
  {
    name: "Assistant to the Villain",
    category: "featured",
    description: "كتاب للقراءة",
    icon: "📚",
    store: "amazon",
    url: "https://amzn.to/3UY9K3g"
  }
];

const STORE_NAMES = {
  amazon: "أمازون مصر",
  noon: "نون",
  jumia: "جوميا"
};

const CATEGORY_NAMES = {
  electronics: "إلكترونيات",
  home: "المنزل",
  fashion: "الأزياء",
  cars: "السيارات",
  daily: "مستلزمات يومية",
  featured: "اختيارات مميزة"
};

function normalizeArabic(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/\u0640/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .trim();
}

/* إنشاء روابط البحث في المتاجر */
function getStoreUrl(product, store) {
  if (store === "amazon") {
    return product.store === "amazon" ? product.url : null;
  }

  if (!product.search) return null;

  const query = encodeURIComponent(product.search);

  if (store === "noon") {
    return "https://www.noon.com/egypt-en/search/?q=" + query;
  }

  if (store === "jumia") {
    return "https://www.jumia.com.eg/catalog/?q=" + query;
  }

  return null;
}

/* التحقق من الروابط */
function isSafeProductUrl(url, store) {
  if (!url) return false;

  try {
    const parsed = new URL(url);

    if (parsed.protocol !== "https:") return false;

    const host = parsed.hostname.toLowerCase();

    if (store === "amazon") {
      return host === "amzn.to" ||
        host === "amazon.eg" ||
        host.endsWith(".amazon.eg");
    }

    if (store === "noon") {
      return host === "noon.com" ||
        host.endsWith(".noon.com");
    }

    if (store === "jumia") {
      return host === "jumia.com.eg" ||
        host.endsWith(".jumia.com.eg");
    }

    return false;
  } catch {
    return false;
  }
}

function isValidProduct(product) {
  if (!product || !product.name || !product.category) {
    return false;
  }

  if (product.store === "amazon") {
    return isSafeProductUrl(product.url, "amazon");
  }

  return Boolean(product.search);
}

/* دمج المنتجات القديمة والجديدة */
function getAllProducts() {
  const extraProducts = Array.isArray(window.NOKHBA_EXTRA_PRODUCTS)
    ? window.NOKHBA_EXTRA_PRODUCTS
    : [];

  const newProducts = extraProducts.map(product => ({
    ...product,
    store: "multi"
  }));

  return [...AMAZON_PRODUCTS, ...newProducts].filter(isValidProduct);
}

const NOKHBA_PRODUCTS = getAllProducts();

/* التحقق من وجود المنتج في المتجر */
function productHasStore(product, store) {
  if (store === "all") {
    return true;
  }

  const url = getStoreUrl(product, store);

  return Boolean(url && isSafeProductUrl(url, store));
}

/* إعداد خيارات المتاجر */
function setupStoreFilter() {
  const storeFilter = document.getElementById("storeFilter");

  if (!storeFilter) return;

  Array.from(storeFilter.options).forEach(option => {
    if (option.value === "all") return;

    const available = NOKHBA_PRODUCTS.some(product =>
      productHasStore(product, option.value)
    );

    option.hidden = !available;
    option.disabled = !available;
  });

  if (
    storeFilter.value !== "all" &&
    !NOKHBA_PRODUCTS.some(product =>
      productHasStore(product, storeFilter.value)
    )
  ) {
    storeFilter.value = "all";
  }
}

/* البحث والفلاتر */
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

/* روابط الأقسام */
function setupCategoryLinks() {
  document.querySelectorAll("[data-category]").forEach(link => {
    link.addEventListener("click", () => {
      const categoryFilter =
        document.getElementById("categoryFilter");

      if (!categoryFilter) return;

      categoryFilter.value = link.dataset.category;
      renderProducts();
    });
  });
}

/* إنشاء أزرار المتاجر */
function createStoreButton(product, store) {
  const url = getStoreUrl(product, store);

  if (!url || !isSafeProductUrl(url, store)) {
    return null;
  }

  const link = document.createElement("a");

  link.className = "product-button";
  link.href = url;
  link.target = "_blank";
  link.rel = "nofollow sponsored noopener noreferrer";

  link.textContent = "عرض في " + STORE_NAMES[store];

  return link;
}

/* إنشاء بطاقة المنتج */
function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("div");
  image.className = "product-image";
  image.textContent = product.icon || "🛍️";
  image.setAttribute("aria-hidden", "true");

  const info = document.createElement("div");
  info.className = "product-info";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = product.name;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description || "";

  const category = document.createElement("span");
  category.className = "product-category";
  category.textContent =
    CATEGORY_NAMES[product.category] || "منتجات متنوعة";

  const buttons = document.createElement("div");
  buttons.className = "product-store-buttons";

  ["amazon", "noon", "jumia"].forEach(store => {
    const button = createStoreButton(product, store);

    if (button) {
      buttons.appendChild(button);
    }
  });

  const note = document.createElement("small");
  note.className = "product-note";
  note.textContent =
    "تحقق من السعر والتوافر وتفاصيل المنتج في المتجر قبل الشراء.";

  info.appendChild(name);
  info.appendChild(description);
  info.appendChild(category);
  info.appendChild(buttons);
  info.appendChild(note);

  card.appendChild(image);
  card.appendChild(info);

  return card;
}

/* تصفية المنتجات */
function getFilteredProducts() {
  const searchInput = document.getElementById("productSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const storeFilter = document.getElementById("storeFilter");

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
    const searchableText = normalizeArabic([
      product.name,
      product.description,
      product.search,
      CATEGORY_NAMES[product.category]
    ].join(" "));

    const matchesSearch =
      !searchTerm || searchableText.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesStore =
      productHasStore(product, selectedStore);

    return matchesSearch && matchesCategory && matchesStore;
  });
}

/* عرض المنتجات */
function renderProducts() {
  const productsContainer = document.getElementById("products");

  if (!productsContainer) return;

  const products = getFilteredProducts();

  productsContainer.replaceChildren();

  products.forEach(product => {
    productsContainer.appendChild(
      createProductCard(product)
    );
  });

  const resultCount = document.getElementById("resultCount");

  if (resultCount) {
    resultCount.textContent =
      "عدد المنتجات: " + products.length;
  }

  if (products.length === 0) {
    const emptyMessage = document.createElement("p");

    emptyMessage.className = "empty-state";
    emptyMessage.textContent =
      "لم نعثر على منتجات مطابقة. جرّب تغيير كلمات البحث أو الفلاتر.";

    productsContainer.appendChild(emptyMessage);
  }
}

/* الإفصاح عن التسويق بالعمولة */
function setupAffiliateDisclosure() {
  const disclosure = document.getElementById("affiliateNotice");

  if (disclosure) {
    disclosure.textContent =
      "قد نحصل على عمولة من بعض عمليات الشراء المؤهلة عبر روابط أمازون، دون تكلفة إضافية عليك. روابط نون وجوميا هنا هي روابط بحث، ولا ندّعي وجود عمولة عليها.";
  }
}

/* تشغيل الموقع */
document.addEventListener("DOMContentLoaded", () => {
  setupStoreFilter();
  setupProductFilters();
  setupCategoryLinks();
  setupAffiliateDisclosure();
  renderProducts();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .catch(error => {
        console.log("Service Worker:", error);
      });
  }
});

/* إتاحة وظائف الموقع */
window.NOKHBA = {
  products: NOKHBA_PRODUCTS,
  renderProducts,
  getFilteredProducts,
  normalizeArabic,
  stores: STORE_NAMES,
  categories: CATEGORY_NAMES
};
