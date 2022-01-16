import{bc as s}from"./vendor-f8cbd986.js";const f=r=>{if(!r)return"outdated";let o="outdated";for(const i of Object.keys(r)){const e=r[i];if(e&&e.sml_version)try{if(s.satisfies(s.minVersion(e.sml_version),">=3.0.0")){if(s.satisfies(s.minVersion(e.sml_version),">=3.2.0"))return;o="own-risk"}}catch{}}return o};export{f as m};
//# sourceMappingURL=mod-3e2dcd02.js.map
