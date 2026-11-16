
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

      status: "pending_image"
    },

    /* GAMING ACCESSORIES — NOON EGYPT */

    {
      id: "nokhba-redragon-fizz-k617",
      name: "لوحة مفاتيح Redragon FIZZ K617 الميكانيكية RGB",
      description: "لوحة ألعاب ميكانيكية مدمجة بنسبة 60% تضم 61 مفتاحًا ومفاتيح Red خطية وإضاءة RGB وكابل USB-C قابل للفصل. تخطيط إنجليزي/عربي حسب صفحة نون.",
      category: "gaming",
      brand: "Redragon",
      store: "noon",
      price: 1670,
      currency: "EGP",
      image: "https://redragonshop.com/cdn/shop/products/minikeyboard.png?v=1762457848&width=1946",
      noonUrl: "https://www.noon.com/egypt-ar/fizz-k617-60-mechanical-keyboard-red-key-switches-hot-swappable-detachable-type-c-cable-pro-software-customizable-rgb-full-rollover-61-keys-white-gray-k617-rgb/N53340668A/p/",
      status: "approved"
    },

    {
      id: "nokhba-logitech-g502-hero",
      name: "ماوس الألعاب Logitech G502 HERO",
      description: "ماوس ألعاب سلكي بمستشعر HERO 25K ودقة تصل إلى 25,600 DPI وإضاءة RGB و11 زرًا قابلًا للبرمجة وأوزان قابلة للتعديل.",
      category: "gaming",
      brand: "Logitech",
      store: "noon",
      price: 1990,
      currency: "EGP",
      image: "https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/2025/g502-hero-mouse-top-angle-gallery-1.png",
      noonUrl: "https://www.noon.com/egypt-en/g502-hero-high-performance-wired-gaming-mouse-hero-25k-sensor-25-600-dpi-rgb-adjustable-weights-11-programmable-buttons-on-board-memory-pc-mac-black/N21961435A/p/",
      status: "approved"
    },

    {
      id: "nokhba-redragon-tophis-g821",
      name: "يد تحكم الألعاب اللاسلكية Redragon Tophis G821",
      description: "وحدة تحكم لاسلكية وسلكية USB-C بعصي Hall Effect، واهتزاز مزدوج وإضاءة RGB ووضع Turbo. السعر يحتاج إعادة تحقق من صفحة نون قبل تحديثه.",
      category: "gaming",
      brand: "Redragon",
      store: "noon",
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z70335A1D575E6FA59294Z/45/_/1778748211/dfda66a0-9695-4374-9847-8a7a2d4f67b3.jpg",
      noonUrl: "https://www.noon.com/egypt-ar/tophis-g821-wireless-gamepad-controller-with-hall-effect-3d-joysticks-turbo-function-dual-motor-vibration-rgb-lighting-2-4ghz-wireless-usb-c-wired-connectivity-multi-platform-support-for-pc-ps3-nintendo-switch-and-android/N70262028V/p/",
      status: "approved"
    },

    {
      id: "nokhba-aukey-km-p3-xl-mousepad",
      name: "لوحة ماوس AUKEY KM-P3 XL للألعاب",
      description: "لوحة ماوس كبيرة بمقاس 900 × 400 × 3 مم، سطح قماشي وقاعدة مطاطية مانعة للانزلاق وحواف مخيطة. مناسبة للوحة المفاتيح والماوس معًا.",
      category: "gaming",
      brand: "AUKEY",
      store: "noon",
      price: 241,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z6186C380562FA9E66660Z/45/_/1778747996/cc56eceb-e609-498b-92e3-d6dcbf3cde41.jpg",
      noonUrl: "https://www.noon.com/egypt-en/gaming-mouse-pad-large-xl-900-x-400-x-3-mm-thick-extended-mouse-mat-non-slip-spill-resistant-desk-pad-with-special-textured-surface-anti-fray-stitched-edges-for-keyboard-pc/N53411662A/p/",
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
