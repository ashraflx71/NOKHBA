(() => {
  "use strict";
  const form = document.getElementById("nokhbaReviewForm");
  if (!form) return;
  const byId = id => document.getElementById(id);
  const password = byId("nokhbaAdminPassword");
  const submit = byId("nokhbaReviewSubmit");
  const status = byId("nokhbaReviewStatus");
  const result = byId("nokhbaReviewResult");
  const answer = byId("nokhbaReviewAnswer");
  const copy = byId("nokhbaReviewCopy");
  function setStatus(message,type=""){status.textContent=message;status.className="ai-status"+(type?" is-"+type:"");}

  form.addEventListener("submit",async event=>{
    event.preventDefault();
    const payload={
      password:password.value,
      name:byId("nokhbaReviewName").value.trim(),
      description:byId("nokhbaReviewDescription").value.trim(),
      price:byId("nokhbaReviewPrice").value.trim(),
      imageUrl:byId("nokhbaReviewImage").value.trim(),
      productUrl:byId("nokhbaReviewUrl").value.trim()
    };
    if(!payload.password||!payload.name||!payload.description){setStatus("أكمل كلمة المرور واسم المنتج والوصف.","error");return;}
    submit.disabled=true;submit.textContent="جارٍ فحص البيانات...";result.hidden=true;
    setStatus("جارٍ إعداد تقرير المراجعة. قد يستغرق ذلك لحظات.");
    try{
      const response=await fetch("./api/review-product",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const data=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(data.error||"تعذرت مراجعة المنتج.");
      answer.textContent=data.answer||"لم يصل تقرير.";result.hidden=false;
      setStatus("اكتمل التقرير. راجع الملاحظات بنفسك قبل اتخاذ قرار النشر.","success");
    }catch(error){setStatus(error.message||"حدث خطأ مؤقت.","error");}
    finally{submit.disabled=false;submit.textContent="ابدأ مراجعة المنتج";payload.password="";password.value="";}
  });

  copy.addEventListener("click",async()=>{
    try{await navigator.clipboard.writeText(answer.textContent||"");copy.textContent="تم النسخ";setTimeout(()=>{copy.textContent="نسخ التقرير";},1800);}
    catch{setStatus("تعذر النسخ تلقائيًا. يمكنك تحديد التقرير ونسخه يدويًا.","error");}
  });
})();