
"use strict";

/* ==================================================
   NOKHBA | نخبة
   MULTI-STORE PRODUCTS DATABASE
   VERSION 2.2
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

      // السعر السابق 949.05 جنيه كان من قائمة Noon وليس من Amazon.
      // أُزيل حتى لا ننسب سعر متجر إلى متجر آخر دون تحقق.
      price: null,
      currency: "EGP",

      image:
        "https://cloud-img.oraimo.com/official/2025/10/31/OBs9o513gs.jpg",

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

      price: 3999,
      currency: "EGP",

      image:
        "https://www.ahmedelsallab.com/media/catalog/product/cache/115636a5cb38ddb0354ff4b19da0ffc5/a/p/apfrh000083.jpg",

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

      image: "https://static.wixstatic.com/media/06303a_76a0ae9352864a4c8b65a633b3dd9bdf~mv2.jpg/v1/fill/w_900%2Ch_900%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/06303a_76a0ae9352864a4c8b65a633b3dd9bdf~mv2.jpg",

      noonUrl:
        "https://www.noon.com/egypt-en/total-148-piece-power-tool-set-with-12v-cordless-drill-multicolour/ZAC882C29DF3C75F799F7Z/p/?o=c072a43077526c5a",

      status: "approved"
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
      image: "https://down-id.img.susercontent.com/file/id-11134207-82251-mgyrffneyubu64",
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
      price: 2029,
      currency: "EGP",
      image: "https://www.pixelzones.com/cdn/shop/files/Logitech_G502_Hero_Gaming_Mouse.jpg?v=1744804538&width=1946",
      noonUrl: "https://www.noon.com/egypt-en/g502-hero-high-performance-wired-gaming-mouse-hero-25k-sensor-25-600-dpi-rgb-adjustable-weights-11-programmable-buttons-on-board-memory-pc-mac-black/N21961435A/p/",
      status: "approved"
    },

    {
      id: "nokhba-redragon-tophis-g821",
      name: "يد تحكم الألعاب اللاسلكية Redragon Tophis G821",
      description: "وحدة تحكم لاسلكية وسلكية USB-C بعصي Hall Effect، واهتزاز مزدوج وإضاءة RGB ووضع Turbo.",
      category: "gaming",
      brand: "Redragon",
      store: "noon",
      price: 1495,
      currency: "EGP",
      image: "https://www.ue.ba/img/product/40377-ReDragon---Gamepad-Tophis-G821-PC-Nintendo-Android-Wireless-1.webp",
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
      image: "https://www.aukey.my/cdn/shop/products/Aukey-KM-P3-3.jpg?v=1535544605&width=1500",
      noonUrl: "https://www.noon.com/egypt-en/gaming-mouse-pad-large-xl-900-x-400-x-3-mm-thick-extended-mouse-mat-non-slip-spill-resistant-desk-pad-with-special-textured-surface-anti-fray-stitched-edges-for-keyboard-pc/N53411662A/p/",
      status: "approved"
    }

,
    /* 8. MINI FOCUS MEN'S WATCH */
    {
      id: "nokhba-mini-focus-24-0463",
      asin: "B0BX55B652",
      name: "ساعة Mini Focus رجالي 24 0463 بمينا خضراء",
      description: "ساعة كوارتز رجالية بمينا خضراء وسوار من الستانلس ستيل، مع كرونوغراف وتقويم ومؤشر 24 ساعة.",
      category: "fashion",
      brand: "Mini Focus",
      store: "amazon",
      image: "https://i.ebayimg.com/images/g/44cAAOSw8FVnBqAR/s-l1600.jpg",
      amazonUrl: "https://www.amazon.eg/dp/B0BX55B652?tag=ashrafdealseg-21",
      status: "approved"
    },
    /* 9. iLOCK 3-METER POWER STRIP */
    {
      id: "nokhba-ilock-power-strip-3m",
      asin: "B0CLKQKFL3",
      name: "مشترك كهرباء iLOCK أصفر بطول 3 أمتار",
      description: "مشترك كهرباء مدمج بثلاثة مخارج مزدوجة وكابل بطول 3 أمتار، مع شريط لتجميع السلك.",
      category: "home",
      brand: "iLOCK",
      store: "amazon",
      image: "https://cdn.almatjar.org/fluffystores/media/12568/mshtrk-khrbaaa-sghyr-b3-mdakhl-thnayy-mn-ay-lok-3-mtr.jpg",
      amazonUrl: "https://www.amazon.eg/dp/B0CLKQKFL3?tag=ashrafdealseg-21",
      status: "approved"
    },

    /* 10. HAVIT H2008D GAMING HEADSET — NOON EGYPT */

    {
      id: "nokhba-havit-h2008d",
      name: "سماعة الألعاب Havit H2008D",
      description: "سماعة ألعاب سلكية بمكبرات 50 مم وميكروفون قابل للفصل، مع وصلة 3.5 مم وعصابة رأس قابلة للتعديل.",
      category: "gaming",
      brand: "Havit",
      store: "noon",
      image: "https://www.prohavit.com/cdn/shop/products/havit-h2008d-wired-gaming-headset-with-3-5mm-plug-50mm-drivers-surround-sound-hd-detachable-mic-1.jpg?v=1650527284&width=1400",
      noonUrl: "https://www.noon.com/egypt-ar/havit-h2008d-gaming-headphone-with-high-magnetic-50mm-speakers-adjustable-headband-and-pluggable-mic/N52116037A/p/?o=df45ba45ecc2003f",
      status: "approved"
    },

    /* 11. CAR WINDSHIELD SUNSHADE — NOON EGYPT */

    {
      id: "nokhba-car-umbrella-sunshade",
      name: "مظلة شمس للسيارة بتصميم المظلة",
      description: "مظلة للزجاج الأمامي تساعد على حجب أشعة الشمس والأشعة فوق البنفسجية عن مقصورة السيارة.",
      category: "cars",
      brand: "Generic",
      store: "noon",
      image: "https://f.nooncdn.com/p/v1663755669/N44899538A_1.jpg",
      noonUrl: "https://www.noon.com/egypt-ar/uv-protection-car-umbrella-sunshade/N44899538A/p/",
      status: "approved"
    }

  ];

  window.NOKHBA_EXTRA_PRODUCTS = PRODUCTS;

  console.log(
    "NOKHBA PRODUCTS v2.2:",
    PRODUCTS.length,
    "products loaded."
  );

})();
