"use strict";

/* =========================================
   NOKHBA | نخبة
   قاعدة المنتجات الرئيسية
   Amazon Egypt Affiliate
   Version 3.1
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
      id: "ninja-bn800eu",
      name: "جهاز نينجا متعدد الوظائف BN800EU",
      brand: "Ninja",
      category: "home",
      store: "amazon",

      asin: "B08HSF4FY6",

      image: "https://www.emarqt.com/cdn/shop/files/NINJA-BN800EU-IMG-5.jpg?v=1714374598&width=3000",

      description:
        "جهاز مطبخ متعدد الوظائف لتحضير الطعام والخلط والفرم.",

      price: null,
      currency: "EGP",

      url: amazonLink("B08HSF4FY6")
    }

    /* ==== لإضافة منتج جديد ====
       1) ضع فاصلة بعد قوس المنتج السابق }
       2) انسخ القالب التالي، وأزل علامات التعليق عنه، واملأ بياناته

    ,
    {
      id: "product-id",
      name: "اسم المنتج",
      brand: "الماركة",
      category: "electronics",
      store: "amazon",

      asin: "XXXXXXXXXX",

      image: "https://m.media-amazon.com/images/I/XXXXXXXX.jpg",

      description:
        "وصف قصير وصادق للمنتج.",

      price: null,
      currency: "EGP",

      url: amazonLink("XXXXXXXXXX")
    }

    ==== نهاية القالب ==== */

  ];

  // نشر قاعدة المنتجات لمحرك الموقع

  window.AMAZON_PRODUCTS = PRODUCTS;

  window.NOKHBA_PRODUCTS = PRODUCTS;

  window.NOKHBA_AFFILIATE_TAG = TAG;

  console.log(
    "NOKHBA: Main products database loaded:",
    PRODUCTS.length
  );

})();
