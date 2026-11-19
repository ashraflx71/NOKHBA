"use strict";
(() => {
  const API_BASE = ""; // Same-origin Worker route will be configured later.
  const $ = (id) => document.getElementById(id);
  const diagnostics = $("diagnostics");
  async function checkConnection() {
    $("refreshBtn").disabled = true;
    diagnostics.textContent = "جارٍ فحص الاتصال...";
    try {
      const response = await fetch(API_BASE + "/api/health", {
        method: "GET",
        headers: { "Accept": "application/json" },
        credentials: "same-origin"
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const data = await response.json();
      $("serverStatus").textContent = data.status === "ok" ? "متصل" : "غير جاهز";
      $("productCount").textContent = Number.isInteger(data.products) ? data.products : "—";
      $("taskCount").textContent = Number.isInteger(data.tasks) ? data.tasks : "—";
      diagnostics.textContent = JSON.stringify(data, null, 2);
      $("connectionNotice").hidden = data.status === "ok";
    } catch (error) {
      $("serverStatus").textContent = "لم يتم الربط";
      diagnostics.textContent = "الخادم غير مُعد بعد أو أن المسار محمي/غير متاح. هذا متوقع في مرحلة التأسيس.\nالتفاصيل: " + error.message;
    } finally {
      $("refreshBtn").disabled = false;
    }
  }
  $("refreshBtn").addEventListener("click", checkConnection);
  checkConnection();
})();