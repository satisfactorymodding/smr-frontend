const a=r=>async p=>{if(r){const s=await r(p);return{...s||{},props:{...p.params||{},...s?s?.props||{}:{}}}}return{props:{...p.params||{}}}};export{a as p};
//# sourceMappingURL=routing-689f9c1f.js.map
