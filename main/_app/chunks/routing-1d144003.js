const a=s=>async r=>{if(s){const p=await s(r);return{...p||{},props:{...r.page.params||{},...p?p?.props||{}:{}}}}return{props:{...r.page.params||{}}}};export{a as p};
//# sourceMappingURL=routing-1d144003.js.map
