import{bp as t,bq as e}from"./vendor-856b0c89.js";const a=r=>{if(!r)return"outdated";let s="outdated";for(const n of Object.keys(r)){const o=r[n];if(o&&o.sml_version)try{if(t(e(o.sml_version),">=3.0.0")){if(t(e(o.sml_version),">=3.2.0"))return;s="own-risk"}}catch{}}return s};export{a as m};
//# sourceMappingURL=mod-27b77630.js.map
