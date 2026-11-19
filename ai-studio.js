(() => {
  "use strict";

  const form = document.getElementById("nokhbaAiForm");
  const promptInput = document.getElementById("nokhbaAiPrompt");
  const submitButton = document.getElementById("nokhbaAiSubmit");
  const status = document.getElementById("nokhbaAiStatus");
  const resultBox = document.getElementById("nokhbaAiResult");
  const answerBox = document.getElementById("nokhbaAiAnswer");
  const count = document.getElementById("nokhbaAiCount");
  const copyButton = document.getElementById("nokhbaAiCopy");

  if (!form || !promptInput) return;

  function setStatus(message, type = "") {
    status.textContent = message;
    status.className = "ai-status" + (type ? " is-" + type : "");
  }

  promptInput.addEventListener("input", () => {
    count.textContent = promptInput.value.length + " / 1800";
  });

  document.querySelectorAll(".ai-prompt-chip").forEach(button => {
    button.addEventListener("click", () => {
      promptInput.value = button.dataset.prompt || "";
      promptInput.dispatchEvent(new Event("input"));
      promptInput.focus();
    });
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const prompt = promptInput.value.trim();
    if (!prompt) {
      setStatus("اكتب طلبك أولًا.", "error");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "جارٍ التفكير...";
    resultBox.hidden = true;
    setStatus("جارٍ تجهيز الإجابة. قد يستغرق ذلك لحظات...");

    try {
      const response = await fetch("./api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "تعذر تنفيذ الطلب.");

      answerBox.textContent = data.answer || "لم تصل إجابة.";
      resultBox.hidden = false;
      setStatus("اكتملت الإجابة.", "success");
    } catch (error) {
      setStatus(error.message || "حدث خطأ. حاول مرة أخرى.", "error");
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'ابدأ المساعدة <span aria-hidden="true">←</span>';
    }
  });

  copyButton?.addEventListener("click", async () => {
    const text = answerBox.textContent || "";
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "تم النسخ";
      setTimeout(() => { copyButton.textContent = "نسخ النص"; }, 1800);
    } catch {
      setStatus("تعذر النسخ تلقائيًا. حدّد النص وانسخه يدويًا.", "error");
    }
  });

  // Image Studio: separate endpoint, preserving the existing text assistant.
  const panel = document.querySelector(".ai-studio-panel");
  if (!panel || document.getElementById("nokhbaImageForm")) return;

  panel.insertAdjacentHTML("beforeend", `
    <div class="nokhba-image-studio" id="nokhba-image-studio">
      <div class="nokhba-image-heading">
        <span class="ai-studio-mark" aria-hidden="true">✧</span>
        <div>
          <h3>استوديو توليد الصور</h3>
          <p>حوّل وصفك إلى صورة إبداعية باستخدام FLUX Schnell.</p>
        </div>
      </div>
      <form id="nokhbaImageForm">
        <label for="nokhbaImagePrompt">صف الصورة التي تريد إنشاءها</label>
        <textarea id="nokhbaImagePrompt" rows="4" maxlength="1800" required
          placeholder="مثال: صورة إعلانية فاخرة لساعة يد على خلفية سوداء وإضاءة ذهبية..."></textarea>
        <div class="ai-form-footer">
          <span id="nokhbaImageCount">0 / 1800</span>
          <button type="submit" id="nokhbaImageSubmit">ولّد الصورة ✦</button>
        </div>
      </form>
      <p id="nokhbaImageStatus" class="ai-status" role="status" aria-live="polite">
        ثلاث محاولات كحد أقصى كل 10 دقائق. التوليد يعتمد على الحصة المجانية اليومية في Cloudflare.
      </p>
      <div id="nokhbaImageResult" class="nokhba-image-result" hidden>
        <img id="nokhbaGeneratedImage" alt="الصورة التي أنشأها استوديو نخبة" />
        <a id="nokhbaImageDownload" class="nokhba-image-download" download="nokhba-ai-image.jpg">حفظ الصورة على الجهاز</a>
      </div>
    </div>
  `);

  const imageForm = document.getElementById("nokhbaImageForm");
  const imagePrompt = document.getElementById("nokhbaImagePrompt");
  const imageCount = document.getElementById("nokhbaImageCount");
  const imageSubmit = document.getElementById("nokhbaImageSubmit");
  const imageStatus = document.getElementById("nokhbaImageStatus");
  const imageResult = document.getElementById("nokhbaImageResult");
  const generatedImage = document.getElementById("nokhbaGeneratedImage");
  const downloadLink = document.getElementById("nokhbaImageDownload");

  imagePrompt.addEventListener("input", () => {
    imageCount.textContent = imagePrompt.value.length + " / 1800";
  });

  imageForm.addEventListener("submit", async event => {
    event.preventDefault();
    const prompt = imagePrompt.value.trim();
    if (!prompt) {
      imageStatus.textContent = "اكتب وصف الصورة أولًا.";
      imageStatus.className = "ai-status is-error";
      return;
    }

    imageSubmit.disabled = true;
    imageSubmit.textContent = "جارٍ إنشاء الصورة...";
    imageResult.hidden = true;
    imageStatus.textContent = "قد يستغرق إنشاء الصورة بعض الوقت. لا تغلق الصفحة.";
    imageStatus.className = "ai-status";

    try {
      const response = await fetch("./api/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "تعذر توليد الصورة.");

      generatedImage.src = data.image;
      downloadLink.href = data.image;
      imageResult.hidden = false;
      imageStatus.textContent = "تم إنشاء الصورة بنجاح. يمكنك حفظها على جهازك.";
      imageStatus.className = "ai-status is-success";
    } catch (error) {
      imageStatus.textContent = error.message || "حدث خطأ أثناء توليد الصورة.";
      imageStatus.className = "ai-status is-error";
    } finally {
      imageSubmit.disabled = false;
      imageSubmit.textContent = "ولّد الصورة ✦";
    }
  });
})();