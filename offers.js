
"use strict";

/* =========================================
   NOKHBA | نخبة
   عروض وخصومات مصر
   Amazon Egypt Affiliate
   ========================================= */

// معرّف العمولة الحالي
// سنغيّره فقط بعد التأكد من تفعيل المعرّف الجديد
const TAG = "ashrafhassa03-21";

// المنتجات والأقسام
const PRODUCTS = `
electronics | سماعات بلوتوث لاسلكية | سماعات بلوتوث لاسلكية | 🎧
electronics | باور بانك 20000 مللي أمبير | باور بانك 20000 | 🔋
electronics | ساعة ذكية | ساعة ذكية | ⌚
electronics | شاحن موبايل سريع | شاحن سريع تايب سي | 🔌
electronics | سماعة جيمنج | سماعة جيمنج | 🎮
electronics | كشاف LED قابل للشحن | كشاف LED قابل للشحن | 🔦
electronics | ماوس بلوتوث لاسلكي قابل للشحن | ماوس بلوتوث لاسلكي قابل لإعادة الشحن | 🖱️
electronics | ماوس M256 لاسلكي صامت | ماوس M256 لاسلكي بلوتوث | 🖱️
electronics | كابل USB-C من أنكر | كابل انكر USB-C | 🔌
electronics | باور بانك 10000 مغناطيسي | باور بانك 10000 مغناطيسي | 🔋
electronics | فلاش ميموري كينغستون 64 جيجا | فلاش ميموري كينغستون 64 جيجا | 💾
electronics | حامل لابتوب قابل للطي | حامل لابتوب ألومنيوم | 💻
electronics | جراب آيفون 17 برو سيليكون | جراب ايفون 17 برو | 📱
electronics | جراب سامسونج A52 | جراب سامسونج A52 | 📱
electronics | بطاريات AA كاميليون | بطاريات AA كاميليون | 🔋
electronics | سماعات أذن لاسلكية TWS | سماعات ايربودز TWS | 🎧
electronics | كيبورد لاسلكي | كيبورد لاسلكي | ⌨️
electronics | حامل موبايل للسيارة | حامل موبايل للسيارة | 🚗
electronics | سماعة بلوتوث محمولة | سبيكر بلوتوث محمول | 🔊
electronics | كاميرا مراقبة منزلية | كاميرا مراقبة واي فاي | 📷
electronics | شاحن لاسلكي | شاحن لاسلكي سريع | 🔌
fashion | حذاء رياضي رجالي | حذاء رياضي رجالي | 👟
fashion | حذاء رياضي حريمي | حذاء رياضي حريمي | 👟
fashion | شنطة ظهر | شنطة ظهر | 🎒
fashion | ساعة يد رجالي | ساعة يد رجالي | ⌚
fashion | حقيبة يد نسائية | حقيبة يد نسائية | 👜
fashion | نظارة شمس | نظارة شمس | 🕶️
fashion | محفظة جلد رجالي | محفظة جلد رجالي | 👛
fashion | عطر رجالي | عطر رجالي | 🧴
fashion | عطر نسائي | عطر نسائي | 🌸
home | خلاط كهربائي | خلاط كهربائي | 🥤
home | مكواة بخار | مكواة بخار | 👔
home | مروحة | مروحة كهربائية | 🌀
home | طقم حلل | طقم حلل طبخ | 🍳
home | شفاطات معدنية قابلة لإعادة الاستخدام | شفاطات استانلس ستيل | 🥤
home | شماعات ملابس معدنية 10 قطع | شماعات ملابس معدنية | 👔
home | سلال تخزين قماشية قابلة للطي | سلال تخزين قماشية | 🧺
home | طقم تنظيف أرضيات شرشوبة ودلو | شرشوبة مسطحة ودلو | 🧹
home | بخاخ زيت للطبخ | بخاخ زيت للمطبخ | 🫒
home | مضرب رغوة حليب قابل للشحن | مضرب رغوة الحليب | ☕
home | نبات صناعي للديكور | نبات صناعي يوكاليبتوس | 🌿
home | قلاية هوائية | قلاية هوائية إير فراير | 🍟
home | غلاية مياه كهربائية | غلاية مياه كهربائية | ☕
home | مكنسة كهربائية | مكنسة كهربائية | 🧹
home | منظم أدراج ومستلزمات تخزين | منظم تخزين منزلي | 🧺
home | مجفف شعر | مجفف شعر | 💇
home | ماكينة حلاقة رجالي | ماكينة حلاقة رجالي | 🪒
home | سخان مياه كهربائي صغير | سخان مياه كهربائي | 🚿
grocery | قهوة | قهوة | ☕
grocery | شوكولاتة | شوكولاتة | 🍫
grocery | شاي | شاي | 🍵
grocery | عسل طبيعي | عسل نحل طبيعي | 🍯
grocery | زيت زيتون | زيت زيتون | 🫒
`;

// ألوان خلفيات المنتجات
const CATEGORY_STYLES = {
  electronics: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
  fashion: "linear-gradient(135deg,#fce4ec,#f8bbd0)",
  home: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
  grocery: "linear-gradient(135deg,#fff3e0,#ffe0b2)"
};

// إنشاء رابط البحث مع العمولة
function buildAmazonSearch(keyword) {
  return "https://www.amazon.eg/s?k=" +
    encodeURIComponent(keyword) +
    "&tag=" + encodeURIComponent(TAG);
}

// قراءة المنتجات
const offers = PRODUCTS
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.includes("|"))
  .map(line => {
    const [category, title, keyword, icon] =
      line.split("|").map(value => value.trim());

    return {
      category,
      title,
      keyword,
      icon: icon || "🛍️",
      image: "",
      store: "أمازون مصر",
      link: buildAmazonSearch(keyword)
    };
  });

// منتج نينجا برابط مباشر
offers.push({
  category: "home",
  title: "محضرة طعام نينجا Ninja BN800EU",
  keyword: "Ninja BN800EU",
  icon: "🍲",
  image: "",
  store: "أمازون مصر",
  link: "https://www.amazon.eg/dp/B08HSF4FY6?tag=" +
    encodeURIComponent(TAG)
});

// عناصر الصفحة
const container = document.getElementById("offers");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const resultCount = document.getElementById("result-count");

if (!container || !searchInput || !categorySelect) {
  console.error("تعذر العثور على عناصر الصفحة الأساسية.");
} else {

  // تطبيع الكلمات العربية
  function normalizeArabic(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/[ًٌٍَُِّْـ]/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // إنشاء صورة احتياطية بالأيقونة
  function createVisual(product) {
    const visual = document.createElement("div");
    visual.className = "product-visual image-fallback";

    visual.style.background =
      CATEGORY_STYLES[product.category] ||
      CATEGORY_STYLES.grocery;

    const icon = document.createElement("div");
    icon.className = "product-fallback-icon";
    icon.textContent = product.icon;
    icon.setAttribute("aria-hidden", "true");

    visual.appendChild(icon);
    return visual;
  }

  // إنشاء بطاقة المنتج
  function createCard(product) {
    const card = document.createElement("article");
    card.className = "card";

    card.appendChild(createVisual(product));

    const body = document.createElement("div");
    body.className = "body";

    const title = document.createElement("h3");
    title.textContent = product.title;

    const store = document.createElement("span");
    store.className = "store";
    store.textContent = product.store;

    const button = document.createElement("a");
    button.className = "btn";
    button.href = product.link;
    button.target = "_blank";
    button.rel = "nofollow sponsored noopener noreferrer";
    button.textContent = "شوف العروض";

    body.appendChild(title);
    body.appendChild(store);
    body.appendChild(button);

    card.appendChild(body);
    return card;
  }

  // تحديث عدد المنتجات
  function updateCount(count) {
    if (resultCount) {
      resultCount.textContent = "عدد المنتجات: " + count;
    }
  }

  // عرض المنتجات والبحث
  function render() {
    const query = normalizeArabic(searchInput.value);
    const selectedCategory = categorySelect.value;

    container.innerHTML = "";

    const filtered = offers.filter(product => {
      const categoryMatch =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const searchableText = normalizeArabic(
        product.title + " " +
        product.keyword + " " +
        product.store + " " +
        product.category
      );

      const searchMatch =
        !query ||
        query.split(" ").every(word =>
          searchableText.includes(word)
        );

      return categoryMatch && searchMatch;
    });

    const fragment = document.createDocumentFragment();

    filtered.forEach(product => {
      fragment.appendChild(createCard(product));
    });

    container.appendChild(fragment);

    if (filtered.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-results";
      empty.textContent =
        "لم نجد منتجات مطابقة. جرّب كلمة بحث أخرى.";
      container.appendChild(empty);
    }

    updateCount(filtered.length);
  }

  // تشغيل البحث والتصنيفات
  searchInput.addEventListener("input", render);
  categorySelect.addEventListener("change", render);

  // العرض الأول
  render();

  console.log(
    "تم تحميل " + offers.length + " منتجًا بنجاح."
  );
}
