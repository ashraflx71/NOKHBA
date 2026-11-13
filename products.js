
"use strict";
/* =========================================
   NOKHBA | نخبة
   قاعدة المنتجات الرئيسية
   Amazon Egypt Affiliate
   Version 3.2
   تم حذف جهاز Ninja BN800EU
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
    }
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
