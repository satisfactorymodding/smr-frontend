import{Z as c,d as l}from"./forms.0e735907.js";const i=(s,f)=>Object.fromEntries(Object.entries(s).map(([r,e])=>{if(Object.keys(f.shape).indexOf(r)>=0){if(e!=null&&typeof e=="object"){let t=f.shape[r];if(t instanceof c&&(t=t.unwrap()),t instanceof l&&(t=t.innerType()),Array.isArray(e)){const a=t.element;for(let n=0;n<e.length;n++)typeof e[n]=="object"&&(e[n]=i(e[n],a))}else e.constructor.name!=="File"&&(e=i(e,t))}return[r,e]}}).filter(r=>!!r));export{i as t};
//# sourceMappingURL=forms.47e7aa5a.js.map
