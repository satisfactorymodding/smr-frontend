const p="modulepreload",y=function(a,l){return new URL(a,l).href},h={},v=function(l,i,d){let u=Promise.resolve();if(i&&i.length>0){const r=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),f=n?.nonce||n?.getAttribute("nonce");u=Promise.all(i.map(e=>{if(e=y(e,d),e in h)return;h[e]=!0;const o=e.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!d)for(let s=r.length-1;s>=0;s--){const c=r[s];if(c.href===e&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const t=document.createElement("link");if(t.rel=o?"stylesheet":p,o||(t.as="script",t.crossOrigin=""),t.href=e,f&&t.setAttribute("nonce",f),document.head.appendChild(t),o)return new Promise((s,c)=>{t.addEventListener("load",s),t.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})}))}return u.then(()=>l()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};export{v as _};
//# sourceMappingURL=preload-helper.9YLJ1q38.js.map
