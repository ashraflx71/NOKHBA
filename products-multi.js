
"use strict";

/* ==================================================
   NOKHBA | نخبة
   MULTI-STORE PRODUCTS DATABASE
   VERSION 2.1
   AMAZON TAG: ashrafdealseg-21
   ================================================== */

(() => {

  const PRODUCTS = [

    /* 1. ORAIMO WATCH 6 */

    {
      id: "nokhba-oraimo-watch-6",
      asin: "B0FMR7H8FT",

      name: "ساعة Oraimo Watch 6 الذكية OSW-807",

      description:
        "ساعة ذكية بشاشة TFT مقاس 2.04 بوصة ومكالمات بلوتوث ومقاومة ماء IP68.",

      category: "electronics",
      brand: "Oraimo",
      store: "amazon",

      price: 949.05,

      image:
        "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2026/09/16/oraimo-smartwatch-watch6-OSW-807-1.jpg.jpg",

      amazonUrl:
        "https://www.amazon.eg/dp/B0FMR7H8FT?tag=ashrafdealseg-21",

      status: "approved"
    },

    /* 2. FRESH VENUS WATER HEATER */

    {
      id: "nokhba-fresh-venus-50l",
      asin: "B0DJ963QF6",

      name: "سخان فريش فينوس الرقمي 50 لتر",

      description:
        "سخان مياه كهربائي رقمي من فريش بسعة 50 لتر وقدرة 1500 واط.",

      category: "home",
      brand: "Fresh",
      store: "amazon",

      image:
        "https://m.media-amazon.com/images/I/21mONXyr%2BQL._SL500_.jpg",

      amazonUrl:
        "https://www.amazon.eg/dp/B0DJ963QF6?tag=ashrafdealseg-21",

      status: "approved"
    },

    /* 3. TOTAL 148-PIECE POWER TOOL SET */

    {
      id: "nokhba-total-148-piece-tool-set",

      name:
        "طقم أدوات TOTAL 148 قطعة مع شنيور لاسلكي 12V",

      description:
        "طقم أدوات متعدد الاستخدامات يضم شنيور لاسلكي 12 فولت ومجموعة متنوعة من أدوات الصيانة المنزلية داخل حقيبة تخزين.",

      category: "home",
      brand: "TOTAL",
      store: "noon",

      price: 1525,

      image: "",

      noonUrl:
        "https://www.noon.com/egypt-en/total-148-piece-power-tool-set-with-12v-cordless-drill-multicolour/ZAC882C29DF3C75F799F7Z/p/?o=c072a43077526c5a",

      status: "approved"
    }

  ];

  window.NOKHBA_EXTRA_PRODUCTS = PRODUCTS;

  console.log(
    "NOKHBA PRODUCTS v2.1:",
    PRODUCTS.length,
    "products loaded."
  );

})();
