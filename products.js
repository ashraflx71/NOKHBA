
"use strict";

/* =========================================
   NOKHBA | نخبة
   قاعدة المنتجات الرئيسية
   Version 3.3
   Sony + Casio
   ========================================= */

(() => {
  const TAG = "ashrafdealseg-21";

  const amazonLink = (asin) =>
    `https://www.amazon.eg/dp/${asin}?tag=${TAG}`;

  const PRODUCTS = [
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
    {
      id: "casio-mtp-v005d-1b4udf",
      name: "ساعة كاسيو رجالي MTP-V005D-1B4UDF فضي وأسود",
      brand: "Casio",
      category: "fashion",
      store: "amazon",
      asin: "B09BB3T9LJ",
      image: "https://www.casio.com/content/dam/casio/product-info/locales/mea/en/timepiece/product/watch/M/MT/MTP/MTP-V005D-1B4/assets/MTP-V005D-1B4U.png.transform/main-visual-sp/image.png",
      description:
        "ساعة أنالوج رجالية بسوار من الستانلس ستيل ومشبك ثلاثي الطي وزجاج معدني، وبطارية تدوم نحو 3 سنوات وفق مواصفات كاسيو.",
      price: 1690.02,
      currency: "EGP",
      url: amazonLink("B09BB3T9LJ")
    }
  ];

  window.AMAZON_PRODUCTS = PRODUCTS;
  window.NOKHBA_PRODUCTS = PRODUCTS;
  window.NOKHBA_AFFILIATE_TAG = TAG;

  console.log(
    "NOKHBA: Main products database loaded:",
    PRODUCTS.length
  );
})();
