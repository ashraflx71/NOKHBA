
"use strict";

/* =========================================
   NOKHBA | نخبة
   MAIN PRODUCTS DATABASE
   VERSION 3.4
   VERIFIED PRODUCT RECORDS
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

    /* =====================================
       AMAZON - NEEDS FINAL VERIFICATION
       ===================================== */

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
    }

  ];

  /* =====================================
     PUBLISH DATABASE
     ===================================== */

  window.NOKHBA_EXTRA_PRODUCTS = PRODUCTS;

  window.NOKHBA_AFFILIATE_TAG = TAG;

  window.NOKHBA_PRODUCTS_VERSION = "3.4";

})();
