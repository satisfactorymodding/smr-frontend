import{S as F,i as A,s as P,bc as H,I,J,K as l,d as M,e as q,a8 as y,aW as K,L as d,j as u,f as N,g as E,h as T,a9 as v,Y as L,N as _,l as g,Z as C,P as Q,v as h,w as b,Q as k,aF as R,bd as W,ad as Y,aa as Z}from"../../chunks/vendor-ec5ada1e.js";import{g as x}from"../../chunks/graphql-b763070c.js";import{T as z}from"../../chunks/Toast-ae7e9d4e.js";import{g as B}from"../../chunks/navigation-d7362a67.js";import{M as G}from"../../chunks/ModForm-fd32b1d8.js";import{b as O}from"../../chunks/paths-396f020f.js";import{M as U}from"../../chunks/MetaDescriptors-906e206a.js";import"../../chunks/singletons-d19c42e4.js";import"../../chunks/forms-2be97dc2.js";import"../../chunks/forms-41b68a57.js";import"../../chunks/markdown-e391b8a1.js";import"../../chunks/extras-7497b851.js";import"../../chunks/stores-bab812ef.js";function V(a){let t,n;return t=new G({props:{onSubmit:a[2]}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){_(t,e,r),n=!0},p:Y,i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function X(a){let t,n;return t=new W({props:{$$slots:{default:[V]},$$scope:{ctx:a}}}),{c(){l(t.$$.fragment)},l(e){d(t.$$.fragment,e)},m(e,r){_(t,e,r),n=!0},p(e,r){const i={};r&32&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){b(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ee(a){let t,n;return{c(){t=q("span"),n=y(a[1])},l(e){t=E(e,"SPAN",{});var r=T(t);n=v(r,a[1]),r.forEach(u)},m(e,r){g(e,t,r),C(t,n)},p(e,r){r&2&&Z(n,e[1])},d(e){e&&u(t)}}}function te(a){let t,n,e,r,i,f,p,m,c,j;t=new U({props:{description:"Adding a new mod in the Satisfactory Mod Repository",title:"New mod"}}),f=new H({props:{$$slots:{default:[X]},$$scope:{ctx:a}}});function D(s){a[3](s)}let S={$$slots:{default:[ee]},$$scope:{ctx:a}};return a[0]!==void 0&&(S.running=a[0]),m=new z({props:S}),I.push(()=>J(m,"running",D)),{c(){l(t.$$.fragment),n=M(),e=q("h1"),r=y("New Mod"),i=M(),l(f.$$.fragment),p=M(),l(m.$$.fragment),this.h()},l(s){const o=K('[data-svelte="svelte-17bmqo"]',document.head);d(t.$$.fragment,o),o.forEach(u),n=N(s),e=E(s,"H1",{class:!0});var $=T(e);r=v($,"New Mod"),$.forEach(u),i=N(s),d(f.$$.fragment,s),p=N(s),d(m.$$.fragment,s),this.h()},h(){L(e,"class","text-4xl my-4 font-bold")},m(s,o){_(t,document.head,null),g(s,n,o),g(s,e,o),C(e,r),g(s,i,o),_(f,s,o),g(s,p,o),_(m,s,o),j=!0},p(s,[o]){const $={};o&32&&($.$$scope={dirty:o,ctx:s}),f.$set($);const w={};o&34&&(w.$$scope={dirty:o,ctx:s}),!c&&o&1&&(c=!0,w.running=s[0],Q(()=>c=!1)),m.$set(w)},i(s){j||(h(t.$$.fragment,s),h(f.$$.fragment,s),h(m.$$.fragment,s),j=!0)},o(s){b(t.$$.fragment,s),b(f.$$.fragment,s),b(m.$$.fragment,s),j=!1},d(s){k(t),s&&u(n),s&&u(e),s&&u(i),k(f,s),s&&u(p),k(m,s)}}}function se(a,t,n){let e="",r=!1;const i=R({query:x}),f=m=>{i({mod:m}).then(c=>{c.error?(console.error(c.error.message),n(1,e="Error creating mod: "+c.error.message),n(0,r=!0)):B(O+"/mod/"+c.data.createMod.id)})};function p(m){r=m,n(0,r)}return a.$$.update=()=>{a.$$.dirty&1&&(r||n(1,e=""))},[r,e,f,p]}class _e extends F{constructor(t){super();A(this,t,se,te,P,{})}}export{_e as default};
//# sourceMappingURL=index.svelte-7708a33c.js.map
