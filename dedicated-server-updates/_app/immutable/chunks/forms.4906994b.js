import{h as c,i as l}from"./forms.3a4d3ba4.js";const f=(s,n)=>Object.fromEntries(Object.entries(s).map(([r,e])=>{if(Object.keys(n.shape).indexOf(r)>=0){if(e!=null&&typeof e=="object"){let t=n.shape[r];if(t instanceof c&&(t=t.unwrap()),t instanceof l&&(t=t.innerType()),Array.isArray(e)){const a=t.element;for(let i=0;i<e.length;i++)typeof e[i]=="object"&&(e[i]=f(e[i],a))}else e.constructor.name!=="File"&&(e=f(e,t))}return[r,e]}}).filter(r=>!!r));export{f as t};
//# sourceMappingURL=forms.4906994b.js.map
