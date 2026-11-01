
/* ==================================================
   منتجات متعددة المتاجر - عروض وخصومات مصر
   20 منتجاً من جوميا ونون
   روابط بحث وليست روابط عمولة مباشرة
   ================================================== */

(function () {
  "use strict";

  const products = [
    // الإلكترونيات
    { name: "سماعة Soundcore R50i", category: "إلكترونيات", search: "Soundcore R50i earbuds", icon: "🎧" },
    { name: "ساعة Oraimo Watch 5 Lite", category: "إلكترونيات", search: "Oraimo Watch 5 Lite", icon: "⌚" },
    { name: "باور بنك JOYROOM 10000mAh", category: "إلكترونيات", search: "JOYROOM 10000mAh power bank", icon: "🔋" },
    { name: "شاحن Anker Zolo Type-C 20W", category: "إلكترونيات", search: "Anker Zolo 20W charger", icon: "🔌" },
    { name: "سماعة ألعاب Havit H2008D", category: "إلكترونيات", search: "Havit H2008D gaming headset", icon: "🎮" },

    // المنزل والمطبخ
    { name: "غلاية مياه Hoho سعة 1.5 لتر", category: "المنزل والمطبخ", search: "Hoho electric kettle 1.5L", icon: "🫖" },
    { name: "صانعة ساندويتش", category: "المنزل والمطبخ", search: "sandwich maker", icon: "🥪" },
    { name: "ميزان مطبخ رقمي", category: "المنزل والمطبخ", search: "digital kitchen scale", icon: "⚖️" },
    { name: "كبة Fresh CH-400", category: "المنزل والمطبخ", search: "Fresh CH-400 chopper", icon: "🥣" },
    { name: "أكياس حفظ الطعام قابلة لإعادة الاستخدام", category: "المنزل والمطبخ", search: "reusable food storage bags", icon: "🥡" },

    // الأزياء
    { name: "حذاء رياضي أبيض Activ", category: "الأزياء", search: "Activ white sneakers", icon: "👟" },
    { name: "بلوفر رجالي Caesar", category: "الأزياء", search: "Caesar men's pullover", icon: "🧥" },
    { name: "تيشيرت بولو رجالي Defacto", category: "الأزياء", search: "Defacto men's polo shirt", icon: "👕" },
    { name: "بطانية شتوية Mintra", category: "الأزياء", search: "Mintra winter blanket", icon: "🛏️" },

    // إكسسوارات السيارات
    { name: "مظلة شمس للسيارة", category: "السيارات", search: "car windshield sunshade umbrella", icon: "🚘" },
    { name: "ممسحة تنظيف السيارة مايكروفايبر", category: "السيارات", search: "microfiber car cleaning mop", icon: "🧽" },
    { name: "ملمع إطارات Flamingo", category: "السيارات", search: "Flamingo tire gel", icon: "🚗" },

    // منتجات متنوعة
    { name: "ماوس لاسلكي", category: "استخدام يومي", search: "wireless computer mouse", icon: "🖱️" },
    { name: "زجاجة حرارية استانلس 1 لتر", category: "استخدام يومي", search: "1L stainless steel thermal bottle", icon: "🥤" },
    { name: "آلة حاسبة Casio FX-991ARX", category: "استخدام يومي", search: "Casio FX-991ARX calculator", icon: "🧮" }
  ];

  const oldSection = document.getElementById("multi-store-products");
  if (oldSection) oldSection.remove();

  const section = document.createElement("section");
  section.id = "multi-store-products";
  section.dir = "rtl";

  section.innerHTML = `
    <style>
      #multi-store-products {
        margin: 30px auto;
        padding: 18px;
        max-width: 1180px;
        color: #10243a;
        font-family: Tahoma, Arial, sans-serif;
      }
      #multi-store-products * { box-sizing: border-box; }
      #multi-store-products h2 {
        margin: 0 0 8px;
        font-size: 25px;
      }
      #multi-store-products .multi-intro {
        line-height: 1.8;
        color: #536273;
        margin-bottom: 16px;
      }
      #multi-store-products .multi-controls {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 18px;
      }
      #multi-store-products input,
      #multi-store-products select {
        width: 100%;
        min-width: 0;
        padding: 12px;
        border: 1px solid #ccd5df;
        border-radius: 9px;
        background: #fff;
        color: #10243a;
        font: inherit;
      }
      #multi-store-products .multi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: 15px;
      }
      #multi-store-products .multi-card {
        background: #fff;
        border: 1px solid #e1e7ee;
        border-radius: 13px;
        padding: 16px;
        box-shadow: 0 3px 12px rgba(16,36,58,.06);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      #multi-store-products .multi-icon {
        min-height: 95px;
        display: grid;
        place-items: center;
        background: #f1f5f9;
        border-radius: 10px;
        font-size: 48px;
      }
      #multi-store-products .multi-card h3 {
        font-size: 17px;
        line-height: 1.6;
        margin: 0;
      }
      #multi-store-products .multi-category {
        color: #64748b;
        font-size: 13px;
      }
      #multi-store-products .multi-note {
        color: #536273;
        font-size: 13px;
        line-height: 1.6;
      }
      #multi-store-products .multi-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        margin-top: auto;
      }
      #multi-store-products .multi-links a {
        display: block;
        text-align: center;
        padding: 10px 5px;
        border-radius: 8px;
        text-decoration: none;
        color: #fff;
        background: #10243a;
        font-weight: bold;
        font-size: 14px;
      }
      #multi-store-products .multi-links a:last-child {
        background: #f47721;
      }
      #multi-store-products .multi-count {
        margin: 12px 0;
        color: #536273;
      }
      @media(max-width:520px) {
        #multi-store-products { padding: 12px; }
        #multi-store-products .multi-controls {
          grid-template-columns: 1fr;
        }
        #multi-store-products .multi-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }
        #multi-store-products .multi-card { padding: 10px; }
        #multi-store-products .multi-card h3 { font-size: 14px; }
        #multi-store-products .multi-links { grid-template-columns: 1fr; }
      }
    </style>

    <h2>🛍️ منتجات من متاجر متعددة</h2>
    <p class="multi-intro">
      اكتشف مجموعة من المنتجات وابحث عنها في جوميا ونون.
      قارن السعر والمواصفات والتوصيل قبل الشراء.
    </p>

    <div class="multi-controls">
      <input id="multi-search" type="search"
        placeholder="ابحث عن منتج..." aria-label="ابحث عن منتج">
      <select id="multi-category" aria-label="اختر القسم">
        <option value="">كل الأقسام</option>
        <option value="إلكترونيات">إلكترونيات</option>
        <option value="المنزل والمطبخ">المنزل والمطبخ</option>
        <option value="الأزياء">الأزياء</option>
        <option value="السيارات">السيارات</option>
        <option value="استخدام يومي">استخدام يومي</option>
      </select>
    </div>

    <p class="multi-count" id="multi-count" aria-live="polite"></p>
    <div class="multi-grid" id="multi-grid"></div>

    <p class="multi-note">
      تنبيه: هذه روابط بحث في المتاجر وليست عروضاً مؤكدة أو روابط عمولة مباشرة.
      الأسعار والتوافر والصور والمواصفات يحددها المتجر عند فتح صفحة المنتج.
    </p>
  `;

  const grid = section.querySelector("#multi-grid");
  const searchInput = section.querySelector("#multi-search");
  const categorySelect = section.querySelector("#multi-category");
  const count = section.querySelector("#multi-count");

  function renderProducts() {
    const term = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;

    const filtered = products.filter(product => {
      const matchesTerm =
        product.name.toLowerCase().includes(term) ||
        product.search.toLowerCase().includes(term);

      const matchesCategory =
        !category || product.category === category;

      return matchesTerm && matchesCategory;
    });

    count.textContent = `عدد المنتجات: ${filtered.length}`;

    grid.innerHTML = filtered.map(product => {
      const encoded = encodeURIComponent(product.search);
      const jumiaUrl = `https://www.jumia.com.eg/catalog/?q=${encoded}`;
      const noonUrl = `https://www.noon.com/egypt-en/search/?q=${encoded}`;

      return `
        <article class="multi-card">
          <div class="multi-icon" aria-hidden="true">${product.icon}</div>
          <h3>${product.name}</h3>
          <div class="multi-category">${product.category}</div>
          <div class="multi-note">السعر والتوافر: راجع المتجر</div>
          <div class="multi-links">
            <a href="${jumiaUrl}" target="_blank" rel="noopener noreferrer">
              ابحث في جوميا
            </a>
            <a href="${noonUrl}" target="_blank" rel="noopener noreferrer">
              ابحث في نون
            </a>
          </div>
        </article>
      `;
    }).join("");

    if (!filtered.length) {
      grid.innerHTML = "<p>لم نعثر على منتجات مطابقة لبحثك.</p>";
    }
  }

  searchInput.addEventListener("input", renderProducts);
  categorySelect.addEventListener("change", renderProducts);

  const main = document.querySelector("main") ||
    document.getElementById("main-content");

  if (main) {
    main.appendChild(section);
  } else {
    document.body.appendChild(section);
  }

  renderProducts();
})();
