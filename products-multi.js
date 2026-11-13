
"use strict";

/* =========================================
   NOKHBA | نخبة
   MULTI-STORE PRODUCTS DATABASE
   VERSION 3.5 FINAL
   AMAZON + NOON + JUMIA
   AMAZON TAG: ashrafdealseg-21
   ========================================= */

(() => {

  const TAG = "ashrafdealseg-21";

  const PRODUCTS = [

    /* =====================================
       AMAZON EGYPT
       ===================================== */

    {
      id: "multi-001",
      name: "Fresh Venus سخان مياه كهربائي 50 لتر",
      category: "home",
      store: "amazon",
      price: 3999,
      oldPrice: null,
      rating: 4.5,
      reviews: 174,
      image: "",
      url: `https://www.amazon.eg/dp/B0DJ963QF6?tag=${TAG}`,
      description: "سخان مياه كهربائي بسعة 50 لتر.",
      active: false,
      status: "needs_image"
    },

    {
      id: "multi-002",
      name: "Oraimo Watch 6 OSW-807",
      category: "electronics",
      store: "amazon",
      price: 949.05,
      oldPrice: 1100,
      rating: 4.1,
      reviews: 239,
      image: "",
      url: `https://www.amazon.eg/dp/B0FMR7H8FT?tag=${TAG}`,
      description: "ساعة Oraimo الذكية، موديل OSW-807.",
      active: false,
      status: "needs_image"
    },

    {
      id: "multi-003",
      name: "Casio MTP-V005D-1B4UDF",
      category: "fashion",
      store: "amazon",
      price: 1690.02,
      oldPrice: 1795,
      rating: 4.0,
      reviews: 30,
      image: "",
      url: `https://www.amazon.eg/dp/B09BB3T9LJ?tag=${TAG}`,
      description: "ساعة كاسيو رجالية بعقارب وسوار معدني فضي.",
      active: false,
      status: "needs_image"
    },

    {
      id: "multi-004",
      name: "Mini Focus ساعة رجالي مينا خضراء",
      category: "fashion",
      store: "amazon",
      price: 1397.89,
      oldPrice: 1789,
      rating: null,
      reviews: null,
      image: "",
      url: `https://www.amazon.eg/dp/B0BX55B652?tag=${TAG}`,
      description: "ساعة رجالية Mini Focus، مينا خضراء وسوار ستانلس ستيل.",
      active: false,
      status: "needs_image"
    },

    {
      id: "multi-005",
      name: "iLOCK مشترك كهربائي أصفر 3 متر",
      category: "electronics",
      store: "amazon",
      price: 169,
      oldPrice: null,
      rating: 4.7,
      reviews: 3306,
      image: "",
      url: `https://www.amazon.eg/dp/B0CLKQKFL3?tag=${TAG}`,
      description: "مشترك كهربائي بثلاثة مخارج ومفتاح تشغيل.",
      active: false,
      status: "verify_variant_and_image"
    },

    /* =====================================
       NOON EGYPT
       TOOLS & HOME IMPROVEMENT
       ===================================== */

    {
      id: "noon-001",
      name: "TOTAL طقم أدوات 148 قطعة مع مثقاب لاسلكي 12V",
      category: "home",
      store: "noon",
      price: 1525,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "طقم أدوات TOTAL يضم 148 قطعة مع مثقاب لاسلكي بجهد 12 فولت.",
      active: false,
      status: "needs_image_and_direct_link"
    },

    {
      id: "noon-002",
      name: "طقم مفكات دقيقة مغناطيسي 32 في 1",
      category: "home",
      store: "noon",
      price: 99,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "طقم مفكات دقيقة مغناطيسي متعدد الاستخدامات، 32 قطعة.",
      active: false,
      status: "needs_image_and_direct_link"
    },

    {
      id: "noon-003",
      name: "TOTAL مفك اختبار ديجيتال THT210003",
      category: "home",
      store: "noon",
      price: 233.10,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "مفك اختبار كهربائي ديجيتال من TOTAL، موديل THT210003.",
      active: false,
      status: "needs_image_and_direct_link"
    },

    /* =====================================
       NOON - ADDITIONAL PRODUCTS
       ===================================== */

    {
      id: "noon-004",
      name: "TOTAL طقم أدوات 166 قطعة مع مثقاب 20V",
      category: "home",
      store: "noon",
      price: null,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "طقم أدوات TOTAL مع مثقاب لاسلكي بجهد 20 فولت.",
      active: false,
      status: "needs_price_image_and_link"
    },

    {
      id: "noon-005",
      name: "Jadever شاكوش كهربائي 800W",
      category: "home",
      store: "noon",
      price: null,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "شاكوش كهربائي من Jadever بقدرة 800 واط.",
      active: false,
      status: "needs_price_image_and_link"
    },

    {
      id: "noon-006",
      name: "TOTAL منفاخ هواء كهربائي 800W",
      category: "cars",
      store: "noon",
      price: null,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "منفاخ هواء كهربائي من TOTAL بقدرة 800 واط.",
      active: false,
      status: "needs_price_image_and_link"
    },

    {
      id: "noon-007",
      name: "TOTAL مفك كهربائي 4V",
      category: "home",
      store: "noon",
      price: null,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "مفك كهربائي صغير من TOTAL بجهد 4 فولت.",
      active: false,
      status: "needs_price_image_and_link"
    },

    {
      id: "noon-008",
      name: "TOTAL طقم مفكات 55 قطعة",
      category: "home",
      store: "noon",
      price: null,
      oldPrice: null,
      rating: null,
      reviews: null,
      image: "",
      url: "",
      noonUrl: "",
      description: "طقم مفكات وأدوات يدوية من TOTAL، 55 قطعة.",
      active: false,
      status: "needs_price_image_and_link"
    }

    /* =====================================
       JUMIA EGYPT
       READY FOR VERIFIED PRODUCTS
       ===================================== */

  ];

  /* =====================================
     DATABASE PUBLICATION
     ===================================== */

  window.NOKHBA_EXTRA_PRODUCTS = PRODUCTS;

  window.NOKHBA_AFFILIATE_TAG = TAG;

  window.NOKHBA_PRODUCTS_VERSION = "3.5";

  console.log(
    "NOKHBA DATABASE 3.5:",
    PRODUCTS.length,
    "product records loaded."
  );

})();
