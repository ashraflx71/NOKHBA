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

      if (!response.ok) {
        throw new Error(data.error || "تعذر تنفيذ الطلب.");
      }

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
})();
