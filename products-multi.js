"use strict";

/* ==================================================
   NOKHBA | نخبة
   MULTI-STORE PRODUCTS DATABASE
   VERSION 2.7
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
      price: null,
      currency: "EGP",
      image:
        "https://be.fresh.com.eg/media/catalog/product/cache/6fdb9282313a7e48374fe05a5418029a/w/a/water_heater_-_venus_digital.jpg",
      amazonUrl:
        "https://www.amazon.eg/dp/B0DJ963QF6?tag=ashrafdealseg-21",
      status: "approved"
    },

    /* 3. TOTAL 148-PIECE POWER TOOL SET */

    {
      id: "nokhba-total-148-piece-tool-set",
      name: "طقم أدوات TOTAL 148 قطعة مع شنيور لاسلكي 12V",
      description:
        "طقم أدوات متعدد الاستخدامات يضم شنيور لاسلكي 12 فولت ومجموعة متنوعة من أدوات الصيانة المنزلية داخل حقيبة تخزين.",
      category: "home",
      brand: "TOTAL",
      store: "noon",
      price: 1525,
      currency: "EGP",
      image:
        "https://static.wixstatic.com/media/06303a_76a0ae9352864a4c8b65a633b3dd9bdf~mv2.jpg/v1/fill/w_900%2Ch_900%2Cal_c%2Cq_85%2Cenc_avif%2Cquality_auto/06303a_76a0ae9352864a4c8b65a633b3dd9bdf~mv2.jpg",
      noonUrl:
        "https://www.noon.com/egypt-en/total-148-piece-power-tool-set-with-12v-cordless-drill-multicolour/ZAC882C29DF3C75F799F7Z/p/?o=c072a43077526c5a",
      status: "approved"
    },

    /* 4. REDRAGON FIZZ K617 */

    {
      id: "nokhba-redragon-fizz-k617",
      name: "لوحة مفاتيح Redragon FIZZ K617 الميكانيكية RGB",
      description:
        "لوحة ألعاب ميكانيكية مدمجة بنسبة 60% تضم 61 مفتاحًا ومفاتيح Red خطية وإضاءة RGB وكابل USB-C قابل للفصل. تخطيط إنجليزي/عربي حسب صفحة نون.",
      category: "gaming",
      brand: "Redragon",
      store: "noon",
      price: 1670,
      currency: "EGP",
      image:
        "https://down-id.img.susercontent.com/file/id-11134207-82251-mgyrffneyubu64",
      noonUrl:
        "https://www.noon.com/egypt-ar/fizz-k617-60-mechanical-keyboard-red-key-switches-hot-swappable-detachable-type-c-cable-pro-software-customizable-rgb-full-rollover-61-keys-white-gray-k617-rgb/N53340668A/p/",
      status: "approved"
    },

    /* 5. LOGITECH G502 HERO */

    {
      id: "nokhba-logitech-g502-hero",
      name: "ماوس الألعاب Logitech G502 HERO",
      description:
        "ماوس ألعاب سلكي بمستشعر HERO 25K ودقة تصل إلى 25,600 DPI وإضاءة RGB و11 زرًا قابلًا للبرمجة وأوزان قابلة للتعديل.",
      category: "gaming",
      brand: "Logitech",
      store: "noon",
      price: 2029,
      currency: "EGP",
      image:
        "https://www.pixelzones.com/cdn/shop/files/Logitech_G502_Hero_Gaming_Mouse.jpg?v=1744804538&width=1946",
      noonUrl:
        "https://www.noon.com/egypt-en/g502-hero-high-performance-wired-gaming-mouse-hero-25k-sensor-25-600-dpi-rgb-adjustable-weights-11-programmable-buttons-on-board-memory-pc-mac-black/N21961435A/p/",
      status: "approved"
    },

    /* 6. REDRAGON TOPHIS G821 */

    {
      id: "nokhba-redragon-tophis-g821",
      name: "يد تحكم الألعاب اللاسلكية Redragon Tophis G821",
      description:
        "وحدة تحكم لاسلكية وسلكية USB-C بعصي Hall Effect، واهتزاز مزدوج وإضاءة RGB ووضع Turbo.",
      category: "gaming",
      brand: "Redragon",
      store: "noon",
      price: 1495,
      currency: "EGP",
      image:
        "https://www.ue.ba/img/product/40377-ReDragon---Gamepad-Tophis-G821-PC-Nintendo-Android-Wireless-1.webp",
      noonUrl:
        "https://www.noon.com/egypt-ar/tophis-g821-wireless-gamepad-controller-with-hall-effect-3d-joysticks-turbo-function-dual-motor-vibration-rgb-lighting-2-4ghz-wireless-usb-c-wired-connectivity-multi-platform-support-for-pc-ps3-nintendo-switch-and-android/N70262028V/p/",
      status: "approved"
    },

    /* 7. AUKEY KM-P3 XL MOUSEPAD */

    {
      id: "nokhba-aukey-km-p3-xl-mousepad",
      name: "لوحة ماوس AUKEY KM-P3 XL للألعاب",
      description:
        "لوحة ماوس كبيرة بمقاس 900 × 400 × 3 مم، سطح قماشي وقاعدة مطاطية مانعة للانزلاق وحواف مخيطة. مناسبة للوحة المفاتيح والماوس معًا.",
      category: "gaming",
      brand: "AUKEY",
      store: "noon",
      price: 241,
      currency: "EGP",
      image:
        "https://www.aukey.my/cdn/shop/products/Aukey-KM-P3-3.jpg?v=1535544605&width=1500",
      noonUrl:
        "https://www.noon.com/egypt-en/gaming-mouse-pad-large-xl-900-x-400-x-3-mm-thick-extended-mouse-mat-non-slip-spill-resistant-desk-pad-with-special-textured-surface-anti-fray-stitched-edges-for-keyboard-pc/N53411662A/p/",
      status: "approved"
    },

    /* 8. MINI FOCUS MEN'S WATCH */

    {
      id: "nokhba-mini-focus-24-0463",
      asin: "B0BX55B652",
      name: "ساعة Mini Focus رجالي 24 0463 بمينا خضراء",
      description:
        "ساعة كوارتز رجالية بمينا خضراء وسوار من الستانلس ستيل، مع كرونوغراف وتقويم ومؤشر 24 ساعة.",
      category: "fashion",
      brand: "Mini Focus",
      store: "amazon",
      image:
        "https://i.ebayimg.com/images/g/44cAAOSw8FVnBqAR/s-l1600.jpg",
      amazonUrl:
        "https://www.amazon.eg/dp/B0BX55B652?tag=ashrafdealseg-21",
      status: "approved"
    },

    /* 9. iLOCK 3-METER POWER STRIP */

    {
      id: "nokhba-ilock-power-strip-3m",
      asin: "B0CLKQKFL3",
      name: "مشترك كهرباء iLOCK أصفر بطول 3 أمتار",
      description:
        "مشترك كهرباء مدمج بثلاثة مخارج مزدوجة وكابل بطول 3 أمتار، مع شريط لتجميع السلك.",
      category: "home",
      brand: "iLOCK",
      store: "amazon",
      image:
        "https://cdn.almatjar.org/fluffystores/media/12568/mshtrk-khrbaaa-sghyr-b3-mdakhl-thnayy-mn-ay-lok-3-mtr.jpg",
      amazonUrl:
        "https://www.amazon.eg/dp/B0CLKQKFL3?tag=ashrafdealseg-21",
      status: "approved"
    },

    /* 10. HAVIT H2008D GAMING HEADSET */

    {
      id: "nokhba-havit-h2008d",
      name: "سماعة الألعاب Havit H2008D",
      description:
        "سماعة ألعاب سلكية بمكبرات 50 مم وميكروفون قابل للفصل، مع وصلة 3.5 مم وعصابة رأس قابلة للتعديل.",
      category: "gaming",
      brand: "Havit",
      store: "noon",
      image:
        "https://www.prohavit.com/cdn/shop/products/havit-h2008d-wired-gaming-headset-with-3-5mm-plug-50mm-drivers-surround-sound-hd-detachable-mic-1.jpg?v=1650527284&width=1400",
      noonUrl:
        "https://www.noon.com/egypt-ar/havit-h2008d-gaming-headphone-with-high-magnetic-50mm-speakers-adjustable-headband-and-pluggable-mic/N52116037A/p/?o=df45ba45ecc2003f",
      status: "approved"
    },

    /* 11. CAR WINDSHIELD SUNSHADE */

    {
      id: "nokhba-car-umbrella-sunshade",
      name: "مظلة شمس للسيارة بتصميم المظلة",
      description:
        "مظلة للزجاج الأمامي تساعد على حجب أشعة الشمس والأشعة فوق البنفسجية عن مقصورة السيارة.",
      category: "cars",
      brand: "Generic",
      store: "noon",
      image:
        "https://f.nooncdn.com/p/v1663755669/N44899538A_1.jpg",
      noonUrl:
        "https://www.noon.com/egypt-ar/uv-protection-car-umbrella-sunshade/N44899538A/p/",
      status: "approved"
    },

    /* 12. HOHO HKE1.5 ELECTRIC KETTLE */

    {
      id: "nokhba-hoho-hke15-kettle",
      name: "غلاية HOHO الكهربائية HKE1.5 سعة 1.5 لتر",
      description:
        "غلاية كهربائية من الستانلس ستيل بسعة 1.5 لتر وقدرة 1500 واط، مع فصل تلقائي وقاعدة دوارة 360 درجة.",
      category: "home",
      brand: "HOHO",
      store: "jumia",
      image:
        "https://assets.kenzz.com/products/129128/004_mo-040.jpg",
      jumiaUrl:
        "https://www.jumia.com.eg/hoho-electric-kettle-silver-1.5l-hke1.5-133754470.html",
      status: "approved"
    },

    /* 13. GAMESIR TEGENARIA LITE CONTROLLER */

    {
      id: "nokhba-gamesir-tegenaria-lite",
      name: "يد تحكم GameSir Tegenaria Lite السلكية للألعاب",
      description:
        "يد تحكم سلكية بمستشعرات Hall Effect ومعدل استقصاء 1000Hz وزرين خلفيين قابلين لإعادة البرمجة واهتزاز مزدوج. السعر المسجل 799 جنيهًا وقت المراجعة. يباع بواسطة Hardware Market؛ لا يوجد ضمان ظاهر لهذا العرض، لذا يُرجى مراجعة شروط الإرجاع قبل الشراء.",
      category: "gaming",
      brand: "GameSir",
      store: "noon",
      price: 799,
      currency: "EGP",
      image:
        "https://f.nooncdn.com/p/pzsku/ZE216025A95B536CE9F83Z/45/_/1777376089/ba15830a-9161-421c-9b55-984839abf2a2.jpg",
      noonUrl:
        "https://www.noon.com/egypt-en/tegenaria-lite-wired-controller-for-pc-wired-1000hz-polling-rate-hall-effect-joysticks-and-2-remappable-buttons-dual-vibration-turbo-pc-gaming-controller-for-steam-android-ios-switch/N70185578V/p/?o=da45009cf0b20fab",
      status: "approved"
    },

    /* 14. T-DAGGER TGK313 BORA KEYBOARD */

    {
      id: "nokhba-t-dagger-tgk313-bora-blue",
      name: "كيبورد T-DAGGER TGK313 BORA الميكانيكي",
      description:
        "لوحة مفاتيح ألعاب ميكانيكية سلكية بمفاتيح زرقاء وإضاءة LED بألوان قوس قزح، مع تخطيط عربي وإنجليزي. السعر المسجل 725 جنيهًا وقت المراجعة. البائع Planet Gate E-Marketing. لا يوجد ضمان ظاهر لهذا العرض، وتشير مراجعات الصفحة إلى أن كابل USB ثابت وغير قابل للفصل.",
      category: "gaming",
      brand: "T-DAGGER",
      store: "noon",
      price: 725,
      currency: "EGP",
      image:
        "https://f.nooncdn.com/p/pzsku/ZB1A285F7DFC5C7104C1FZ/45/_/1677407933/c42581d1-0f04-4962-bc78-f3bcab7efbec.jpg?width=940",
      noonUrl:
        "https://www.noon.com/egypt-ar/tgk313-bora-gaming-mechanical-keyboard-with-led-lighting-rainbow-blue-switch-image-may-vary/ZB1A285F7DFC5C7104C1FZ/p/?o=zb1a285f7dfc5c7104c1fz-1",
      status: "approved"
    }


    /* 15. IONIC INTERIOR DETAILER */

    {
      id: "nokhba-ionic-interior-detailer",
      name: "منظف IONIC للعناية بالأسطح الداخلية للسيارة",
      description:
        "منظف داخلي 460 مل بتركيبة متعادلة الحموضة لتنظيف الجلد والبلاستيك والفينيل والمطاط والزجاج وشاشات السيارة. السعر المسجل 135 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.3/5 من 99 تقييمًا. البائع IONIC؛ الصفحة توضح عدم وجود ضمان، مع إتاحة الإرجاع.",
      category: "cars",
      brand: "IONIC",
      store: "noon",
      price: 135,
      currency: "EGP",
      image:
        "https://f.nooncdn.com/p/pzsku/Z1BD8F3555E9712A7CA78Z/45/_/1670415088/85b31c43-3eda-4ed3-ad45-17461127c2f7.jpg?width=1200",
      noonUrl:
        "https://www.noon.com/egypt-en/interior-detailer-cleaner/Z1BD8F3555E9712A7CA78Z/p/",
      status: "approved"
    },

    /* 16. IONIC PREMIUM MICROFIBER DRYING TOWEL */

    {
      id: "nokhba-ionic-premium-microfiber-drying-towel",
      name: "فوطة IONIC الاحترافية لتجفيف السيارة بالمايكروفايبر",
      description:
        "فوطة تجفيف بتقنية Twisted Loop ومقاس 40 × 60 سم، مصممة لامتصاص الماء وتقليل آثار التجفيف والخدوش. السعر المسجل 266 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.4/5 من 65 تقييمًا في نتائج نون. البائع IONIC؛ الصفحة توضح عدم وجود ضمان.",
      category: "cars",
      brand: "IONIC",
      store: "noon",
      price: 266,
      currency: "EGP",
      image:
        "https://static.wixstatic.com/media/f8bc45_bbd1af5fd12a4424a1e64a99a3c3cb2b~mv2.jpg/v1/fit/w_500%2Ch_500%2Cq_90/file.jpg",
      noonUrl:
        "https://www.noon.com/egypt-en/40-60/ZA3340828306959CB002AZ/p/?o=aefdd4f3819e36cb",
      status: "approved"
    }

    /* 17. GENERIC HEAVY-DUTY TOW ROPE 4M / 7 TON */

    {
      id: "nokhba-heavy-duty-tow-rope-4m-7ton",
      name: "واير سحب فولاذي للسيارة 4 متر بخطافات أمان",
      description:
        "كابل سحب فولاذي بطول 4 أمتار مع خطافات معدنية، والحمولة القصوى المعلنة في صفحة العرض 7 أطنان. السعر المسجل 334 جنيهًا وقت المراجعة في 17 نوفمبر 2026. البائع SHARK EG؛ تقييم البائع 4.6/5 ونسبة إيجابية 86%، وهذه بيانات للبائع وليست تقييمًا للمنتج. لا يظهر تقييم مستقل للمنتج. يجب التأكد من سلامة الخطافات ومطابقة نقاط الجر في السيارة، وعدم تجاوز الحمولة المعتمدة من الشركة المصنعة.",
      category: "cars",
      brand: "Generic",
      store: "noon",
      price: 334,
      currency: "EGP",
      image:
        "https://f.nooncdn.com/p/pzsku/Z0F13CA856FF4AC5F9AB4Z/45/1767188588/258b480f-d6cb-4f12-8605-8385f4c4bc36.jpg",
      noonUrl:
        "https://www.noon.com/egypt-en/heavy-duty-tow-rope-4m-7-ton-steel-cable-with-hooks-for-emergency-towing/Z0F13CA856FF4AC5F9AB4Z/p/",
      status: "approved"
    }
  ];

  /* DATABASE REGISTRATION */

  window.NOKHBA_EXTRA_PRODUCTS = PRODUCTS;

  console.log(
    "NOKHBA PRODUCTS v2.7:",
    PRODUCTS.length,
    "products loaded."
  );

})();
