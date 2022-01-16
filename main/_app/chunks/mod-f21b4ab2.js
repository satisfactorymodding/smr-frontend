import{aG as s}from"./vendor-ecbd8300.js";const m=r=>{if(!r)return"outdated";let o="outdated";for(const i of Object.keys(r)){const e=r[i];if(e&&e.sml_version)try{if(s.satisfies(s.minVersion(e.sml_version),">=3.0.0")){if(s.satisfies(s.minVersion(e.sml_version),">=3.2.0"))return;o="own-risk"}}catch{}}return o};export{m};
//# sourceMappingURL=mod-f21b4ab2.js.map
