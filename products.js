
"use strict";

/* =========================================
   NOKHBA | نخبة
   MAIN PRODUCTS DATABASE
   Version 4.0
   Amazon Egypt Affiliate
   ========================================= */

(() => {
  const TAG = "ashrafdealseg-21";

  const amazonLink = (asin) =>
    `https://www.amazon.eg/dp/${asin}?tag=${TAG}`;

  const PRODUCTS = [

    // 1 - Sony WH-CH520
    {
      id: "sony-wh-ch520",
      name: "سماعة سوني اللاسلكية WH-CH520",
      brand: "Sony",
      category: "electronics",
      store: "amazon",
      asin: "B0BS1QB15L",
      image: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dwe58091b5/images/WHCH520W/WHCH520W.png",
      description:
        "سماعة بلوتوث لاسلكية مع ميكروفون للمكالمات وبطارية تصل إلى 50 ساعة وفق مواصفات الشركة.",
      price: null,
      currency: "EGP",
      url: amazonLink("B0BS1QB15L")
    },

    // 2 - Casio MTP-V005D
    {
      id: "casio-mtp-v005d",
      name: "ساعة كاسيو رجالي MTP-V005D-1B4UDF",
      brand: "Casio",
      category: "fashion",
      store: "amazon",
      asin: "B09BB3T9LJ",
      image: "",
      description:
        "ساعة رجالية أنالوج بتصميم فضي وميناء أسود وسوار من الستانلس ستيل.",
      price: null,
      currency: "EGP",
      url: amazonLink("B09BB3T9LJ")
    },

    // 3 - Men's Dice Boxers
    {
      id: "dice-mens-boxers",
      name: "بوكسر رجالي دايس - 5 قطع",
      brand: "Dice",
      category: "fashion",
      store: "amazon",
      asin: "B091J4KJ29",
      image: "",
      description:
        "مجموعة بوكسر رجالي من 5 قطع، بخامة 95% قطن و5% إيلاستين. يُرجى مراجعة جدول المقاسات وسياسة الإرجاع.",
      price: null,
      currency: "EGP",
      url: "https://www.amazon.eg/dp/B091J4KJ29/ref=cm_sw_r_as_gl_apa_gl_i_BJTF4R5VA1XXZWZX8ZWG?linkCode=ml1&tag=ashrafdealseg-21&linkId=ed0c5f37262a2249ac5ef7e1c040659c"
    },

    // 4 - PlayStation DualSense
    {
      id: "ps5-dualsense-white",
      name: "يد تحكم بلايستيشن 5 DualSense - أبيض",
      brand: "Sony",
      category: "electronics",
      store: "amazon",
      asin: "B0CQKLS4RP",
      image: "",
      description:
        "وحدة تحكم لاسلكية لبلايستيشن 5، مع استجابة لمسية ومشغلات تكيفية وميكروفون مدمج.",
      price: null,
      currency: "EGP",
      url: "https://www.amazon.eg/dp/B0CQKLS4RP/ref=cm_sw_r_as_gl_apa_gl_i_RPDA8HHRMXRKJKMW60VV?linkCode=ml1&tag=ashrafdealseg-21&linkId=45239d33d12041f5871d4181423eef7a"
    },

    // 5 - ISTANBUL MODEL Hoodie
    {
      id: "istanbul-model-hoodie",
      name: "هودي رجالي ISTANBUL MODEL",
      brand: "ISTANBUL MODEL",
      category: "fashion",
      store: "amazon",
      asin: "B0HM7RR3BK",
      image: "",
      description:
        "هودي رجالي بخامة 50% قطن و50% بوليستر. القصة فضفاضة قليلًا وفق المراجعات المتاحة.",
      price: null,
      currency: "EGP",
      url: "https://www.amazon.eg/dp/B0HM7RR3BK/ref=cm_sw_r_as_gl_apa_gl_i_ZW7Z173NXV8MFZPDYGA6?linkCode=ml1&tag=ashrafdealseg-21&linkId=ff0dececc84dae0db41ea4b4fc4c6a94"
    },

    // 6 - Andora Jacket
    // ASIN needs verification before activating its purchase link.
    {
      id: "andora-mens-jacket",
      name: "جاكيت رجالي سادة بغطاء للرأس وسوستة - Andora",
      brand: "Andora",
      category: "fashion",
      store: "amazon",
      asin: "",
      image: "",
      description:
        "جاكيت رجالي بسوستة وغطاء للرأس، من البوليستر. بيانات رقم المنتج ورابط الشراء تحتاج إلى تأكيد.",
      price: null,
      currency: "EGP",
      url: ""
    }

  ];

  // Main database
  window.AMAZON_PRODUCTS = PRODUCTS;
  window.NOKHBA_PRODUCTS = PRODUCTS;
  window.NOKHBA_AFFILIATE_TAG = TAG;

  console.log(
    "NOKHBA: Main products database loaded:",
    PRODUCTS.length
  );

})();
