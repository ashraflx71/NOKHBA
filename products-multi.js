"use strict";

/* ==================================================
   NOKHBA | نخبة
   MULTI-STORE PRODUCTS DATABASE
   VERSION 2.9
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
    },


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
    },

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
    },

    /* 18. TOTALENERGIES QUARTZ 7000 10W-40 5L */

    {
      id: "nokhba-totalenergies-quartz-7000-10w40-5l",
      name: "زيت محرك TotalEnergies Quartz 7000 10W-40 – عبوة 5 لتر",
      description:
        "زيت محرك بتقنية Synthetic Technology لمحركات البنزين والديزل وفق مواصفات ACEA A3/B4 وAPI SN/CF، مع اعتمادات مذكورة من Peugeot وCitroen وVolkswagen وRenault وغيرها. السعر المسجل 1,199 جنيهًا وقت المراجعة في 17 نوفمبر 2026. تقييم المنتج 4.6/5 من 2,929 تقييمًا. يباع بواسطة Total Egypt على نون؛ تقييم البائع 4.3 ونسبة إيجابية 88%. لا تختَر الزيت اعتمادًا على اللزوجة وحدها؛ طابق مواصفات واعتمادات الزيت مع كتالوج سيارتك.",
      category: "cars",
      brand: "TotalEnergies",
      store: "noon",
      price: 1199,
      currency: "EGP",
      image:
        "https://f.nooncdn.com/p/pzsku/Z217ADAAFD1B98DD1ED05Z/45/_/1730475624/4c40a7c6-d7f9-4c80-b041-ffbf642cf1ab.jpg",
      noonUrl:
        "https://www.noon.com/egypt-en/quartz-7000-s-10w-40-synthetic-technology-5-liters-4-liters-1-liter-free/Z217ADAAFD1B98DD1ED05Z/p/",
      status: "approved"
    },
/* 19. TOTALENERGIES FLUIDMATIC AT 42 - DEXRON III */
    {
      id: "nokhba-total-fluidmatic-at42",
      name: "زيت ناقل الحركة TotalEnergies FLUIDMATIC AT 42",
      description: "سائل ناقل حركة أوتوماتيكي لبعض التطبيقات التي تتطلب GM DEXRON III، ومناسب أيضًا لتطبيقات Allison C4 وفق مواصفات الشركة. السعر المسجل 399 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.7/5 من 53 تقييمًا. يباع من متجر Total Energies Marketing Egypt الرسمي على نون. لا تستخدمه إلا إذا طلب كتالوج السيارة مواصفة متوافقة مثل Dexron III.",
      category: "cars",
      brand: "TotalEnergies",
      store: "noon",
      price: 399,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/ZF8F0B01D9927C1F70F99Z/45/1767808512/c4b9834c-71e9-4079-b218-61de818455c0.jpg",
      noonUrl: "https://www.noon.com/egypt-en/fluidmatic-at-42/ZF8F0B01D9927C1F70F99Z/p/",
      status: "approved"
    },

    /* 20. TOTALENERGIES FLUIDMATIC LV MV - DEXRON VI */
    {
      id: "nokhba-total-fluidmatic-lvmv",
      name: "زيت ناقل الحركة TotalEnergies FLUIDMATIC LV MV Dexron VI",
      description: "سائل ATF اصطناعي منخفض اللزوجة لناقلات حركة أوتوماتيكية حديثة تتطلب مواصفات مثل GM Dexron VI. تذكر صفحة المنتج توافقات متعددة منها بعض مواصفات Hyundai SP-IV وToyota WS وHonda DW-1 وZF Lifeguardfluid 6/8/9. السعر المسجل 639 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.3/5 من 12 تقييمًا. يباع من متجر Total Energies Marketing Egypt الرسمي على نون. يجب مطابقة رقم المواصفة المطلوب في كتالوج السيارة قبل الشراء.",
      category: "cars",
      brand: "TotalEnergies",
      store: "noon",
      price: 639,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z88840DF204B9BC50D5EAZ/45/_/1730499691/7b1ee3be-9bd6-4366-b316-d12f3b28fb3d.jpg",
      noonUrl: "https://www.noon.com/egypt-en/fluidmatic-lv-mv-dexron-vi/Z88840DF204B9BC50D5EAZ/p/",
      status: "approved"
    },

    /* 21. TOTALENERGIES FLUIDMATIC DCT MV - WET DCT */
    {
      id: "nokhba-total-fluidmatic-dctmv",
      name: "زيت ناقل الحركة TotalEnergies FLUIDMATIC DCT MV للقابض الرطب",
      description: "سائل مخصص لتطبيقات ناقل الحركة مزدوج القابض ذي القابض الرطب Wet DCT، وتذكر الشركة توافقه مع تطبيقات لدى Volkswagen وBMW وMercedes وPorsche وMitsubishi وRenault وVolvo وPeugeot وFord. السعر المسجل 599 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 5.0/5 من 5 تقييمات. يباع من Total Energies Marketing Egypt على نون، والصفحة توضح عدم وجود ضمان. لا يناسب نواقل CVT أو ATF التقليدية لمجرد أنه زيت فتيس؛ يجب مطابقة نوع DCT والمواصفة المطلوبة.",
      category: "cars",
      brand: "TotalEnergies",
      store: "noon",
      price: 599,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z529CF87C6990A0BC3B9FZ/45/_/1730500872/9c83994c-3c0c-4c80-bd15-0d4415a70f52.jpg",
      noonUrl: "https://www.noon.com/egypt-ar/fluidmatic-dct-mv/Z529CF87C6990A0BC3B9FZ/p/",
      status: "approved"
    }
,
    /* 22. MALDINI MD-40 RUST REMOVER */
    {
      id: "nokhba-maldini-md40-rust-remover",
      name: "بخاخ Maldini MD-40 لإزالة الصدأ والتشحيم متعدد الاستخدامات 400 مل",
      description: "بخاخ يساعد على فك الأجزاء المعدنية الصدئة، والتشحيم، وتقليل الصرير، وإزاحة الرطوبة وترك طبقة حماية ضد التآكل. السعر المسجل 105 جنيهات وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.0/5 من 21 تقييمًا. يباع عبر نون؛ تقييم البائع 4.1 ونسبة إيجابية 82%. لا يظهر ضمان، مع إتاحة الإرجاع. يُستخدم وفق تعليمات العبوة، ويُتجنب رشه على الأسطح الحساسة أو الأجزاء التي تتطلب شحمًا متخصصًا.",
      category: "cars",
      brand: "Maldini",
      store: "noon",
      price: 105,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z5128C9B885CAF766FC11Z/45/1757935576/1fc00731-298c-499b-beda-0953ba8277b2.jpg",
      noonUrl: "https://www.noon.com/egypt-en/maldini-md-40-rust-remover-400-ml/Z5128C9B885CAF766FC11Z/p/?o=f94cd63de9474acb",
      status: "approved"
    },
    /* 23. IONIC TIRE SHINE 460ML */
    {
      id: "nokhba-ionic-tire-shine-460ml",
      name: "ملمع إطارات السيارة IONIC Tire Shine – 460 مل",
      description: "ملمع إطارات سائل قابل للرش، يساعد على استعادة المظهر اللامع للإطارات، ويكوّن طبقة للمساعدة في الحد من البهتان والتشقق الناتج عن التعرض للشمس. تذكر صفحة المنتج أنه يجف بملمس غير دهني وغير زلق. السعر المسجل 120 جنيهًا وقت المراجعة في 17 نوفمبر 2026، وتقييم المنتج 4.2/5 من 90 تقييمًا. البائع IONIC بتقييم 4.1/5 ونسبة إيجابية 85%، مع إتاحة الإرجاع. يُستخدم على الجدار الجانبي للإطار فقط، مع تجنب سطح المداس والفرامل.",
      category: "cars",
      brand: "IONIC",
      store: "noon",
      price: 120,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/ZB14E7E8952685728CFEFZ/45/_/1670331002/65f591fb-f34b-4a0e-a1a0-bdfd009b9367.jpg",
      noonUrl: "https://www.noon.com/egypt-en/tire-shine-460ml/ZB14E7E8952685728CFEFZ/p/",
      status: "approved"
    }

    /* 24. ANKER 30W DUAL-PORT CAR CHARGER */
    {
      id: "nokhba-anker-car-charger-30w-dual-port",
      name: "شاحن سيارة Anker USB-C بقدرة 30W ومنفذين",
      description: "شاحن سيارة بمنفذ USB-C PD بقدرة تصل إلى 30W ومنفذ USB-A، مع تقنيات حماية متعددة. السعر المسجل 369 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.6/5 من 1,323 تقييمًا، والترتيب الأول في شواحن السيارات على نون. البائع الظاهر: المصرية الألمانية بتقييم 4.7/5 ونسبة إيجابية 88%. راجع توافقه مع هاتفك والكابل قبل الشراء.",
      category: "cars",
      brand: "Anker",
      store: "noon",
      price: 369,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z84C21181F746914CAC02Z/45/1759222978/c4064ed8-7728-41b1-8f7d-b94939f56922.jpg?width=1200",
      noonUrl: "https://www.noon.com/egypt-en/usb-c-car-charger-30w-2-port-type-c-car-adapter-iphone-17-16-15-14-series-samsung-galaxy-s26-s25-s24-series-ipad-pro-airpods-huawei-and-more-black/N70081961V/p/",
      status: "approved"
    },

    /* 25. ANKER 40W POWERDRIVE III DUO */
    {
      id: "nokhba-anker-powerdrive-iii-duo-40w",
      name: "شاحن سيارة Anker PowerDrive III Duo بقدرة 40W",
      description: "شاحن بمنفذين USB-C وتقنية PowerIQ 3.0 بقدرة إجمالية تصل إلى 40W. السعر المسجل 499 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.5/5 من نحو 1,290 تقييمًا. يظهر البيع عبر نون، والصفحة لا تعرض ضمانًا لهذا العرض. اختيار مناسب لمن يريد منفذين USB-C، مع ضرورة التأكد من دعم جهازك لقدرات الشحن المناسبة.",
      category: "cars",
      brand: "Anker",
      store: "noon",
      price: 499,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z63628A0F4EA8C0F0F9DBZ/45/1759222820/400b5e5c-2adb-4cc5-9db8-3f2ceef19992.jpg?width=1200",
      noonUrl: "https://www.noon.com/egypt-en/usb-c-car-charger-40w-2-port-poweriq-3-0-type-c-adapter-iphone-16-car-charger-powerdrive-iii-duo-with-power-delivery-for-iphone-17-16-15-samsung-huawei-xiaomi-redmi-vivo-oppo-and-more-multicolour/N53426388A/p/",
      status: "approved"
    },

    /* 26. UGREEN 30W DUAL-PORT CAR CHARGER */
    {
      id: "nokhba-ugreen-car-charger-30w-dual-port",
      name: "شاحن سيارة UGREEN بمنفذين وقدرة 30W",
      description: "شاحن بمنفذ USB-C PD بقدرة تصل إلى 30W ومنفذ USB-A QC بقدرة تصل إلى 22.5W، ويدعم مقابس سيارات 12–24V. السعر المسجل 449 جنيهًا وقت المراجعة في 17 نوفمبر 2026، والتقييم 4.7/5 من 104 تقييمات. البائع الظاهر نون، مع ضمان سنتين من الموزع Blooms وفق تفاصيل العرض. راجع توافق بروتوكول الشحن مع جهازك.",
      category: "cars",
      brand: "UGREEN",
      store: "noon",
      price: 449,
      currency: "EGP",
      image: "https://f.nooncdn.com/p/pzsku/Z4A95F2C13787E692AC41Z/45/1761032880/234bfded-b7c4-4b55-a42c-088958c91690.jpg?width=1200",
      noonUrl: "https://www.noon.com/egypt-en/ugreen-2-port-fast-car-charger-30w-black/N70133734V/p/",
      status: "approved"
    }

  ];

  /* DATABASE REGISTRATION */

  window.NOKHBA_EXTRA_PRODUCTS = PRODUCTS;

  console.log(
    "NOKHBA PRODUCTS v2.8:",
    PRODUCTS.length,
    "products loaded."
  );

})();
