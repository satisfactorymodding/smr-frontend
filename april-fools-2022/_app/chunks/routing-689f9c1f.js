const o=p=>async r=>{if(p){const s=await p(r);return{...s||{},props:{...r.params||{},...s?s?.props||{}:{}}}}return{props:{...r.params||{}}}};export{o as p};
//# sourceMappingURL=routing-689f9c1f.js.map
