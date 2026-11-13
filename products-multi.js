
"use strict";

/* =========================================
   NOKHBA | نخبة
   MULTI PRODUCTS DATABASE
   FINAL VERSION 3.1
   AMAZON EGYPT
   AFFILIATE TAG: ashrafdealseg-21
   يعتمد على app.js VERSION 5.2
   لا يكرر المنتجات الموجودة في products.js
   ========================================= */

(() => {
  const AMAZON_TAG = "ashrafdealseg-21";

  const PRODUCTS = [
    // =========================
    // ELECTRONICS
    // =========================
    {
      id: "multi-001",
      name: "سماعة Soundcore R50i اللاسلكية",
      category: "electronics",
      description: "سماعة لاسلكية للاستخدام اليومي.",
      search: "Soundcore R50i wireless earbuds",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-002",
      name: "ساعة Oraimo Watch 5 Lite",
      category: "electronics",
      description: "ساعة ذكية لمتابعة النشاط اليومي.",
      search: "Oraimo Watch 5 Lite",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-003",
      name: "باور بانك JOYROOM 10000mAh",
      category: "electronics",
      description: "شاحن متنقل للهواتف والأجهزة المتوافقة.",
      search: "JOYROOM 10000mAh power bank",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-004",
      name: "شاحن Anker Zolo Type-C 20W",
      category: "electronics",
      description: "شاحن سريع للأجهزة المتوافقة.",
      search: "Anker Zolo Type C 20W charger",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-005",
      name: "سماعة ألعاب Havit H2008D",
      category: "electronics",
      description: "سماعة رأس للألعاب والاستخدام اليومي.",
      search: "Havit H2008D gaming headset",
      store: "amazon",
      image: ""
    },

    // =========================
    // HOME & KITCHEN
    // =========================
    {
      id: "multi-006",
      name: "غلاية كهربائية Hoho سعة 1.5 لتر",
      category: "home",
      description: "غلاية مياه للاستخدام المنزلي.",
      search: "Hoho electric kettle 1.5L",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-007",
      name: "صانعة ساندويتش وشواية",
      category: "home",
      description: "جهاز لتحضير الساندويتش في المنزل.",
      search: "sandwich maker grill",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-008",
      name: "ميزان مطبخ رقمي",
      category: "home",
      description: "ميزان رقمي لقياس مكونات الطعام.",
      search: "digital kitchen scale",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-009",
      name: "كبة Fresh CH-400",
      category: "home",
      description: "كبة كهربائية لتحضير الطعام.",
      search: "Fresh CH-400 chopper",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-010",
      name: "أكياس حفظ الطعام القابلة لإعادة الاستخدام",
      category: "home",
      description: "أكياس لحفظ وتنظيم الطعام.",
      search: "reusable food storage bags",
      store: "amazon",
      image: ""
    },

    // =========================
    // FASHION
    // =========================
    {
      id: "multi-011",
      name: "حذاء رياضي Activ أبيض",
      category: "fashion",
      description: "حذاء رياضي للاستخدام اليومي.",
      search: "Activ white sneakers",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-012",
      name: "بلوفر Caesar رجالي",
      category: "fashion",
      description: "ملابس رجالية للاستخدام اليومي.",
      search: "Caesar mens wool pullover",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-013",
      name: "تيشيرت بولو رجالي Defacto",
      category: "fashion",
      description: "تيشيرت رجالي بتصميم بولو.",
      search: "Defacto mens polo shirt",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-014",
      name: "بطانية شتوية Mintra",
      category: "home",
      description: "بطانية للاستخدام المنزلي.",
      search: "Mintra winter blanket",
      store: "amazon",
      image: ""
    },

    // =========================
    // CAR ACCESSORIES
    // =========================
    {
      id: "multi-015",
      name: "مظلة واقية لزجاج السيارة",
      category: "cars",
      description: "مظلة لحماية السيارة من أشعة الشمس.",
      search: "car windshield sunshade umbrella",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-016",
      name: "ممسحة تنظيف السيارة من المايكروفايبر",
      category: "cars",
      description: "أداة لتنظيف السيارة.",
      search: "microfiber car cleaning mop",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-017",
      name: "جل تلميع إطارات Flamingo",
      category: "cars",
      description: "منتج للعناية بمظهر إطارات السيارة.",
      search: "Flamingo tire gel",
      store: "amazon",
      image: ""
    },

    // =========================
    // DAILY PRODUCTS
    // =========================
    {
      id: "multi-018",
      name: "ماوس لاسلكي",
      category: "electronics",
      description: "فأرة لاسلكية للكمبيوتر.",
      search: "wireless computer mouse",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-019",
      name: "زجاجة حرارية استانلس 1 لتر",
      category: "daily",
      description: "زجاجة لحفظ المشروبات.",
      search: "1L stainless steel thermal bottle",
      store: "amazon",
      image: ""
    },
    {
      id: "multi-020",
      name: "آلة حاسبة Casio FX-991ARX",
      category: "daily",
      description: "آلة حاسبة علمية للدراسة والعمل.",
      search: "Casio FX-991ARX",
      store: "amazon",
      image: ""
    },

    // =========================
    // NEW PRODUCT 021
    // FASHION - COUPLE HOODIE
    // =========================
    {
      id: "multi-021",
      asin: "B0HM7RR3BK",
      name: "سويت شيرت هودي للزوجين بنقوش النجوم",
      category: "fashion",
      description: "هودي رمادي داكن للزوجين بنقوش نجوم صغيرة وجيب أمامي وغطاء رأس.",
      search: "هودي رمادي بنقوش نجوم للزوجين",
      store: "amazon",
      seller: "Amazon.eg",
      amazonUrl: "https://amzn.eu/d/02w5yP6T",
      image: "",
      status: "pending_review"
    }
  ];

  // منع تحميل قاعدة البيانات أكثر من مرة
  if (window.NOKHBA_EXTRA_PRODUCTS_LOADED) {
    console.warn("NOKHBA products already loaded.");
    return;
  }

  window.NOKHBA_EXTRA_PRODUCTS = PRODUCTS;
  window.NOKHBA_EXTRA_PRODUCTS_LOADED = true;

  console.log(
    "NOKHBA Multi Products:",
    PRODUCTS.length,
    "products loaded.",
    "Amazon Tag:",
    AMAZON_TAG
  );

})();
