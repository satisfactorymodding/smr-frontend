import{S as s,i as a,s as r,J as t,K as o,j as e,k as n,e as c,t as m,$ as i,m as d,d as f,n as $,c as u,a as p,g as h,b as g,o as l,f as k,R as j,L as b,x as v,u as w,v as M,Q as x,h as y}from"../../chunks/vendor-ae42b6a0.js";import{g as E}from"../../chunks/graphql-53becde4.js";import{T as N}from"../../chunks/Toast-1d0b041d.js";import{g as S}from"../../chunks/navigation-51f4a605.js";import{M as q}from"../../chunks/ModForm-c80b8258.js";import{b as A}from"../../chunks/paths-6758d194.js";import{M as R}from"../../chunks/MetaDescriptors-acbf38a9.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/forms-8d025218.js";import"../../chunks/markdown-70c7c4d4.js";import"../../chunks/stores-fc868ea7.js";function T(s){let a,r;return{c(){a=c("span"),r=m(s[1])},l(t){a=u(t,"SPAN",{});var o=p(a);r=h(o,s[1]),o.forEach(f)},m(s,t){k(s,a,t),j(a,r)},p(s,a){2&a&&y(r,s[1])},d(s){s&&f(a)}}}function D(s){let a,r,x,y,E,S,A,D,F,H;function J(a){s[3](a)}a=new R({props:{description:"Adding a new mod in the Satisfactory Mod Repository",title:"New mod"}}),S=new q({props:{onSubmit:s[2]}});let K={$$slots:{default:[T]},$$scope:{ctx:s}};return void 0!==s[0]&&(K.running=s[0]),D=new N({props:K}),t.push((()=>o(D,"running",J))),{c(){e(a.$$.fragment),r=n(),x=c("h1"),y=m("New Mod"),E=n(),e(S.$$.fragment),A=n(),e(D.$$.fragment),this.h()},l(s){const t=i('[data-svelte="svelte-17bmqo"]',document.head);d(a.$$.fragment,t),t.forEach(f),r=$(s),x=u(s,"H1",{class:!0});var o=p(x);y=h(o,"New Mod"),o.forEach(f),E=$(s),d(S.$$.fragment,s),A=$(s),d(D.$$.fragment,s),this.h()},h(){g(x,"class","text-4xl my-4 font-bold")},m(s,t){l(a,document.head,null),k(s,r,t),k(s,x,t),j(x,y),k(s,E,t),l(S,s,t),k(s,A,t),l(D,s,t),H=!0},p(s,[a]){const r={};34&a&&(r.$$scope={dirty:a,ctx:s}),!F&&1&a&&(F=!0,r.running=s[0],b((()=>F=!1))),D.$set(r)},i(s){H||(v(a.$$.fragment,s),v(S.$$.fragment,s),v(D.$$.fragment,s),H=!0)},o(s){w(a.$$.fragment,s),w(S.$$.fragment,s),w(D.$$.fragment,s),H=!1},d(s){M(a),s&&f(r),s&&f(x),s&&f(E),M(S,s),s&&f(A),M(D,s)}}}function F(s,a,r){let t="",o=!1;const e=x({query:E});return s.$$.update=()=>{1&s.$$.dirty&&(o||r(1,t=""))},[o,t,s=>{e({mod:s}).then((s=>{s.error?(console.error(s.error.message),r(1,t="Error creating mod: "+s.error.message),r(0,o=!0)):S(A+"/mod/"+s.data.createMod.id)}))},function(s){o=s,r(0,o)}]}class H extends s{constructor(s){super(),a(this,s,F,D,r,{})}}export{H as default};
//# sourceMappingURL=index.svelte-e85a6bae.js.map