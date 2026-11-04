
"use strict";

/* =========================================
   NOKHBA | نخبة
   عروض وخصومات مصر
   Amazon Egypt Affiliate
   Products Database
   ========================================= */

(() => {

  // معرّف العمولة الذي سبق استخدامه
  const TAG = "ashrafhassa03-21";

  // رابط المنتج مع معرّف العمولة
  const amazonLink = (asin) =>
    `https://www.amazon.eg/dp/${asin}?tag=${TAG}`;

  // قاعدة بيانات المنتجات
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
      description:
        "سماعة بلوتوث لاسلكية مع ميكروفون للمكالمات الهاتفية.",
      url: amazonLink("B0BS1QB15L"),
      store: "Amazon Egypt",
      verified: true
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
      description:
        "جهاز مطبخ متعدد الوظائف لتحضير الطعام.",
      url: amazonLink("B08HSF4FY6"),
      store: "Amazon Egypt",
      verified: true
    }

  ];

  // إتاحة المنتجات لبقية ملفات الموقع
  window.NOKHBA_PRODUCTS = PRODUCTS;

  // إتاحة معرّف العمولة
  window.NOKHBA_AFFILIATE_TAG = TAG;

})();
