import{S as O,i as L,s as N,d as $,v as F,P as R,Q as D,T as E,r as g,t as b,W as z,e as k,X as W,g as w,h as S,Y as X,j as h,m as v,N as x,n as y,U as j,Z as Y,O as I,b as A,a4 as Z,k as B,R as J,q as tt,_ as ot,u as et,p as at}from"../chunks/vendor.0SqNIuc5.js";import{F as U}from"../chunks/FicsitCard.CCYZmTfh.js";import{M as q}from"../chunks/MetaDescriptors.4KEUF8Op.js";const G="src/lib/components/tools/ToolCard.svelte";function K(a){let t,i,s=a[0].author+"",u;const o={c:function(){t=k("div"),i=k("span"),u=W(s),this.h()},l:function(e){t=w(e,"DIV",{slot:!0});var p=S(t);i=w(p,"SPAN",{});var r=S(i);u=X(r,s),r.forEach(h),p.forEach(h),this.h()},h:function(){v(i,G,9,4,234),x(t,"slot","stats"),v(t,G,8,2,211)},m:function(e,p){y(e,t,p),j(t,i),j(i,u)},p:function(e,p){p&1&&s!==(s=e[0].author+"")&&Y(u,s)},d:function(e){e&&h(t)}};return $("SvelteRegisterBlock",{block:o,id:K.name,type:"slot",source:"(6:2) ",ctx:a}),o}function C(a){let t,i;t=new U({props:{name:a[0].name,link:a[0].link,logo:a[0].logo,description:a[0].description,$$slots:{stats:[K]},$$scope:{ctx:a}},$$inline:!0});const s={c:function(){R(t.$$.fragment)},l:function(o){D(t.$$.fragment,o)},m:function(o,n){E(t,o,n),i=!0},p:function(o,[n]){const e={};n&1&&(e.name=o[0].name),n&1&&(e.link=o[0].link),n&1&&(e.logo=o[0].logo),n&1&&(e.description=o[0].description),n&3&&(e.$$scope={dirty:n,ctx:o}),t.$set(e)},i:function(o){i||(g(t.$$.fragment,o),i=!0)},o:function(o){b(t.$$.fragment,o),i=!1},d:function(o){z(t,o)}};return $("SvelteRegisterBlock",{block:s,id:C.name,type:"component",source:"",ctx:a}),s}function nt(a,t,i){let{$$slots:s={},$$scope:u}=t;F("ToolCard",s,[]);let{tool:o}=t;a.$$.on_mount.push(function(){o===void 0&&!("tool"in t||a.$$.bound[a.$$.props.tool])&&console.warn("<ToolCard> was created without expected prop 'tool'")});const n=["tool"];return Object.keys(t).forEach(e=>{!~n.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<ToolCard> was created with unknown prop '${e}'`)}),a.$$set=e=>{"tool"in e&&i(0,o=e.tool)},a.$capture_state=()=>({FicsitCard:U,tool:o}),a.$inject_state=e=>{"tool"in e&&i(0,o=e.tool)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),[o]}class V extends O{constructor(t){super(t),L(this,t,nt,C,N,{tool:0}),$("SvelteRegisterComponent",{component:this,tagName:"ToolCard",options:t,id:C.name})}get tool(){throw new Error("<ToolCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set tool(t){throw new Error("<ToolCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const _="src/routes/tools/+page.svelte";function H(a,t,i){const s=a.slice();return s[1]=t[i],s}function T(a){let t,i;t=new V({props:{tool:a[1]},$$inline:!0});const s={c:function(){R(t.$$.fragment)},l:function(o){D(t.$$.fragment,o)},m:function(o,n){E(t,o,n),i=!0},p:et,i:function(o){i||(g(t.$$.fragment,o),i=!0)},o:function(o){b(t.$$.fragment,o),i=!1},d:function(o){z(t,o)}};return $("SvelteRegisterBlock",{block:s,id:T.name,type:"each",source:"(100:2) {#each tools as tool}",ctx:a}),s}function P(a){let t,i,s,u="Tools",o,n,e;t=new q({props:{description:"A collection of useful tools for Satisfactory, such as recipe calculators and save editors",title:"Tools"},$$inline:!0});let p=I(a[0]),r=[];for(let d=0;d<p.length;d+=1)r[d]=T(H(a,p,d));const Q=d=>b(r[d],1,1,()=>{r[d]=null}),M={c:function(){R(t.$$.fragment),i=A(),s=k("h1"),s.textContent=u,o=A(),n=k("div");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l:function(c){const f=Z("svelte-5zkdli",document.head);D(t.$$.fragment,f),f.forEach(h),i=B(c),s=w(c,"H1",{class:!0,"data-svelte-h":!0}),J(s)!=="svelte-qmswt0"&&(s.textContent=u),o=B(c),n=w(c,"DIV",{class:!0});var l=S(n);for(let m=0;m<r.length;m+=1)r[m].l(l);l.forEach(h),this.h()},h:function(){document.title="Tools - SMR",x(s,"class","my-4 text-4xl font-bold"),v(s,_,107,0,4499),x(n,"class","grid grid-cols-1 gap-4 2xl:grid-cols-2 3xl:grid-cols-3"),v(n,_,108,0,4546)},m:function(c,f){E(t,document.head,null),y(c,i,f),y(c,s,f),y(c,o,f),y(c,n,f);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(n,null);e=!0},p:function(c,[f]){if(f&1){p=I(c[0]);let l;for(l=0;l<p.length;l+=1){const m=H(c,p,l);r[l]?(r[l].p(m,f),g(r[l],1)):(r[l]=T(m),r[l].c(),g(r[l],1),r[l].m(n,null))}for(at(),l=p.length;l<r.length;l+=1)Q(l);tt()}},i:function(c){if(!e){g(t.$$.fragment,c);for(let f=0;f<p.length;f+=1)g(r[f]);e=!0}},o:function(c){b(t.$$.fragment,c),r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)b(r[f]);e=!1},d:function(c){c&&(h(i),h(s),h(o),h(n)),z(t),ot(r,c)}};return $("SvelteRegisterBlock",{block:M,id:P.name,type:"component",source:"",ctx:a}),M}function st(a,t,i){let{$$slots:s={},$$scope:u}=t;F("Page",s,[]);const o=[{name:"Save Editor",author:"Goz3rr",logo:"https://cdn.jsdelivr.net/gh/Goz3rr/SatisfactorySaveEditor@6958101e3f2c0e50ba92df798ebefe4e6bdd4eb5/Reference%20Materials/SatisfactorySaveEditorLogo.png",description:"A work in progress save editor for Satisfactory. Consists of both a save parser and an application for viewing and editing the parsed data.",link:"https://github.com/Goz3rr/SatisfactorySaveEditor"},{name:"Satisfactory Tools",author:"greeny",logo:"https://i.imgur.com/WQEHo26.png",description:"A collection of powerful tools for planning and building the perfect base. Calculate your production or consumption, browse items, buildings, and schematics and share your builds with others!",link:"https://www.satisfactorytools.com/"},{name:"Recipe Calculator",author:"KirkMcDonald",logo:"",description:"Recipe calculator using sankey diagrams.",link:"https://kirkmcdonald.github.io/satisfactory-calculator/calc.html"},{name:"SatisGraphtory",author:"tehalexf and thinkaliker",logo:"https://cdn.jsdelivr.net/gh/rhocode/rhocode.github.io@4713b4887e8821f1482de7af4ae32fb6a4b2bcaf/img/satoolsfactory_icons/dot.png",description:"This is a factory planner/optimizer/analyzer tool for factories old and new! Simulate resource chains, factory layouts, and more!",link:"https://satisgraphtory.com/"},{name:"Satisfactory Calculator Interactive Map (SCIM)",author:"Anthor",logo:"",description:"Collection of tools for Satisfactory (Production planner, Interactive map, Recipes, etc)",link:"https://satisfactory-calculator.com/"},{name:"Savegame Tool",author:"SillyBits",logo:"",description:"Allows for numerous options regarding satisfactory savegames, e.g. searching and erasing damaged entities",link:"https://github.com/SillyBits/satisfactory-savegame-tool-ng"},{name:"Satisfactory UI Kit",author:"Deantendo",logo:"",description:"A UI kit for Satisfactory mods",link:"https://github.com/deantendo/sfuikit"},{name:"Daniel's Satisfactory Tools",author:"DanielTheProgrammer",logo:"https://i.imgur.com/Ogt0r9k.png",description:"Visualize production chains, and browse items and recipes!",link:"https://daniel2013.github.io/satisfactory/"},{name:"Satisfactory 3D Map",author:"Moritz",logo:"",description:"Shows all objects within a savegame in 3D and provides a simple version of the game world for spatial context. Additionally, all properties and values of objects are shown.",link:"https://github.com/moritz-h/satisfactory-3d-map"},{name:"FactorioLab",author:"Doug Broad",logo:"https://factoriolab.github.io/factoriolab.webp",description:"Production calculator supporting multiple factory games and visualization approaches",link:"https://factoriolab.github.io/satisfactory"},{name:"Satisfactory Dedicated Server Remote Manager",author:"GreyHak",logo:"https://raw.githubusercontent.com/GreyHak/sdsrm/main/sdsrm_icon.png",description:"Manage your 1.0+ Dedicated Server remotely with this Python GUI through the new Dedicated Server HTTPS API.  If you want a make your own remote manager, a Python library is available.",link:"https://github.com/GreyHak/sdsrm"},{name:"Satisfactory Logistics",author:"leonardfactory",logo:"https://satisfactory-logistics.xyz/images/logo/logo-square-big.png",description:"Keep track of in-game Logistics (by train, drones, vehicles), setup inputs and outputs between them and see how many items are consumed and where.",link:"https://satisfactory-logistics.xyz/"}],n=[];return Object.keys(t).forEach(e=>{!~n.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)}),a.$capture_state=()=>({ToolCard:V,MetaDescriptors:q,tools:o}),[o]}class lt extends O{constructor(t){super(t),L(this,t,st,P,N,{}),$("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:P.name})}}export{lt as component};
//# sourceMappingURL=25.B5opG2G3.js.map
