"use strict";

/* =========================================
   NOKHBA | نخبة
   Amazon Egypt Products Database
   Version 2.0
   ========================================= */

(() => {

  const TAG = "ashrafdealseg-21";

  const amazonLink = asin =>
    `https://www.amazon.eg/dp/${asin}?tag=${TAG}`;

  const PRODUCTS = [

    {
      id: 1,
      name: "سماعة سوني اللاسلكية WH-CH520",
      category: "electronics",
      brand: "Sony",
      asin: "B0BS1QB15L",
      image: "",
      price: null,
      currency: "EGP",
      rating: null,
      description: "سماعة بلوتوث لاسلكية مع ميكروفون للمكالمات الهاتفية.",
      url: amazonLink("B0BS1QB15L"),
      store: "Amazon Egypt"
    },

    {
      id: 2,
      name: "جهاز نينجا متعدد الوظائف BN800EU",
      category: "home",
      brand: "Ninja",
      asin: "B08HSF4FY6",
      image: "",
      price: null,
      currency: "EGP",
      rating: null,
      description: "جهاز مطبخ متعدد الوظائف لتحضير الطعام.",
      url: amazonLink("B08HSF4FY6"),
      store: "Amazon Egypt"
    }

  ];

  // قاعدة المنتجات الرئيسية
  window.AMAZON_PRODUCTS = PRODUCTS;

  // توافق مع الملفات والإصدارات السابقة
  window.NOKHBA_PRODUCTS = PRODUCTS;

  // معرّف العمولة
  window.NOKHBA_AFFILIATE_TAG = TAG;

})();
