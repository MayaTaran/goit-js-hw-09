import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",a=document.querySelector(".feedback-form"),n=a.querySelector(".email-input"),r=a.querySelector(".message-input");function c(){const e=n.value.trim(),t=r.value.trim();return{email:e,message:t}}a.addEventListener("input",()=>{const e=c(),t=JSON.stringify(e);localStorage.setItem(s,t)});const o=localStorage.getItem(s);if(o){const e=JSON.parse(o);n.value=e.email,r.value=e.message}a.addEventListener("submit",e=>{e.preventDefault();const t=c();localStorage.setItem(s,JSON.stringify(t)),console.log(t),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map