import{S as U,i as _,s as O,d as E,am as C,an as I,v as L,e as y,f as v,h as w,l as $,ac as l,n as M,p as d,k as u,af as T,j as q,ag as j,ad as A,ah as z,x as S}from"./vendor-856b0c89.js";import{p as k}from"./stores-607bd200.js";import{b as P}from"./paths-396f020f.js";const b="src/lib/components/utils/MetaDescriptors.svelte";function D(a){let e,c,i,r,s;const m={c:function(){e=y("meta"),c=v(),i=y("meta"),r=v(),s=y("meta"),this.h()},l:function(o){e=w(o,"META",{name:!0,content:!0}),c=$(o),i=w(o,"META",{property:!0,content:!0}),r=$(o),s=w(o,"META",{property:!0,content:!0}),this.h()},h:function(){l(e,"name","description"),l(e,"content",a[0]),M(e,b,10,2,278),l(i,"property","description"),l(i,"content",a[0]),M(i,b,11,2,330),l(s,"property","og:description"),l(s,"content",a[0]),M(s,b,12,2,386)},m:function(o,n){d(o,e,n),d(o,c,n),d(o,i,n),d(o,r,n),d(o,s,n)},p:function(o,n){n&1&&l(e,"content",o[0]),n&1&&l(i,"content",o[0]),n&1&&l(s,"content",o[0])},d:function(o){o&&u(e),o&&u(c),o&&u(i),o&&u(r),o&&u(s)}};return E("SvelteRegisterBlock",{block:m,id:D.name,type:"if",source:"(10:0) {#if description}",ctx:a}),m}function B(a){let e;const c={c:function(){e=y("meta"),this.h()},l:function(r){e=w(r,"META",{property:!0,content:!0}),this.h()},h:function(){l(e,"property","og:image"),l(e,"content",P+"/assets/favicon.ico"),M(e,b,18,2,519)},m:function(r,s){d(r,e,s)},p:S,d:function(r){r&&u(e)}};return E("SvelteRegisterBlock",{block:c,id:B.name,type:"else",source:"(18:0) {:else}",ctx:a}),c}function N(a){let e;const c={c:function(){e=y("meta"),this.h()},l:function(r){e=w(r,"META",{property:!0,content:!0}),this.h()},h:function(){l(e,"property","og:image"),l(e,"content",a[1]),M(e,b,16,2,464)},m:function(r,s){d(r,e,s)},p:function(r,s){s&2&&l(e,"content",r[1])},d:function(r){r&&u(e)}};return E("SvelteRegisterBlock",{block:c,id:N.name,type:"if",source:"(16:0) {#if image}",ctx:a}),c}function R(a){let e,c,i,r,s,m;const f={c:function(){e=y("title"),c=T(a[2]),i=T(" - SMR"),r=v(),s=y("meta"),this.h()},l:function(n){e=w(n,"TITLE",{});var p=q(e);c=j(p,a[2]),i=j(p," - SMR"),p.forEach(u),r=$(n),s=w(n,"META",{property:!0,content:!0}),this.h()},h:function(){M(e,b,22,2,605),l(s,"property","og:title"),l(s,"content",m=a[2]+" - SMR"),M(s,b,23,2,636)},m:function(n,p){d(n,e,p),A(e,c),A(e,i),d(n,r,p),d(n,s,p)},p:function(n,p){p&4&&z(c,n[2]),p&4&&m!==(m=n[2]+" - SMR")&&l(s,"content",m)},d:function(n){n&&u(e),n&&u(r),n&&u(s)}};return E("SvelteRegisterBlock",{block:f,id:R.name,type:"if",source:"(22:0) {#if title}",ctx:a}),f}function x(a){let e,c,i,r,s=a[0]&&D(a);function m(g,t){return g[1]?N:B}let f=m(a),o=f(a),n=a[2]&&R(a);const p={c:function(){s&&s.c(),e=v(),o.c(),c=v(),n&&n.c(),i=v(),r=y("meta"),this.h()},l:function(t){s&&s.l(t),e=$(t),o.l(t),c=$(t),n&&n.l(t),i=$(t),r=w(t,"META",{property:!0,content:!0}),this.h()},h:function(){l(r,"property","og:url"),l(r,"content",""+(a[3]+a[4])),M(r,b,26,0,696)},m:function(t,h){s&&s.m(t,h),d(t,e,h),o.m(t,h),d(t,c,h),n&&n.m(t,h),d(t,i,h),d(t,r,h)},p:function(t,[h]){t[0]?s?s.p(t,h):(s=D(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),f===(f=m(t))&&o?o.p(t,h):(o.d(1),o=f(t),o&&(o.c(),o.m(c.parentNode,c))),t[2]?n?n.p(t,h):(n=R(t),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},i:S,o:S,d:function(t){s&&s.d(t),t&&u(e),o.d(t),t&&u(c),n&&n.d(t),t&&u(i),t&&u(r)}};return E("SvelteRegisterBlock",{block:p,id:x.name,type:"component",source:"",ctx:a}),p}function F(a,e,c){let i;C(k,"page"),I(a,k,t=>c(5,i=t));let{$$slots:r={},$$scope:s}=e;L("MetaDescriptors",r,[]);let m=i.url.host,f=i.url.pathname,{description:o=void 0}=e,{image:n=void 0}=e,{title:p=void 0}=e;const g=["description","image","title"];return Object.keys(e).forEach(t=>{!~g.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<MetaDescriptors> was created with unknown prop '${t}'`)}),a.$$set=t=>{"description"in t&&c(0,o=t.description),"image"in t&&c(1,n=t.image),"title"in t&&c(2,p=t.title)},a.$capture_state=()=>({page:k,base:P,baseUrl:m,route:f,description:o,image:n,title:p,$page:i}),a.$inject_state=t=>{"baseUrl"in t&&c(3,m=t.baseUrl),"route"in t&&c(4,f=t.route),"description"in t&&c(0,o=t.description),"image"in t&&c(1,n=t.image),"title"in t&&c(2,p=t.title)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[o,n,p,m,f]}class K extends U{constructor(e){super(e),_(this,e,F,x,O,{description:0,image:1,title:2}),E("SvelteRegisterComponent",{component:this,tagName:"MetaDescriptors",options:e,id:x.name})}get description(){throw new Error("<MetaDescriptors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set description(e){throw new Error("<MetaDescriptors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get image(){throw new Error("<MetaDescriptors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set image(e){throw new Error("<MetaDescriptors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get title(){throw new Error("<MetaDescriptors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<MetaDescriptors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{K as M};
//# sourceMappingURL=MetaDescriptors-0fdcf703.js.map
