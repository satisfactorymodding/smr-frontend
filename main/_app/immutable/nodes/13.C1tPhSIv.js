import{S as ae,i as oe,s as fe,Z as K,u as W,_ as X,e as B,a as k,I as A,c as D,d as I,g as q,J as F,f as $,A as b,af as J,j as E,M as C,L as P,$ as ee,k as Z,t as w,l as H,m as p,O as L,F as ce,C as ge,a5 as de,D as $e,P as T,Q as U,a0 as me,R as Y,q as N,r as te,T as O,U as ue,Y as he}from"../chunks/vendor.DBwCcoHF.js";import{n as pe}from"../chunks/graphql.sMbDXPDh.js";import{G as ve}from"../chunks/GuideCard.BR2k3W9J.js";import{u as we}from"../chunks/user.9kbIp_of.js";import{F as ye}from"../chunks/FicsitCard.DuujPStn.js";import{M as xe}from"../chunks/MetaDescriptors.BnMuLQUR.js";function le(o,e,n){const r=o.slice();return r[22]=e[n],r}function ne(o,e,n){const r=o.slice();return r[19]=e[n],r}function re(o){let e,n=o[9]("guides.new")+"",r;return{c(){e=B("a"),r=T(n),this.h()},l(a){e=D(a,"A",{class:!0,href:!0});var t=I(e);r=U(t,n),t.forEach($),this.h()},h(){b(e,"class","variant-ghost-primary btn"),b(e,"href",me+"/new-guide")},m(a,t){E(a,e,t),C(e,r)},p(a,t){t&512&&n!==(n=a[9]("guides.new")+"")&&Y(r,n)},d(a){a&&$(e)}}}function Ge(o){let e,n,r,a=O(o[4].data.getGuides.guides),t=[];for(let l=0;l<a.length;l+=1)t[l]=se(le(o,a,l));const c=l=>w(t[l],1,1,()=>{t[l]=null});return{c(){e=B("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=D(l,"DIV",{class:!0});var s=I(e);for(let i=0;i<t.length;i+=1)t[i].l(s);s.forEach($),this.h()},h(){b(e,"class",n="grid "+o[6]+" gap-4")},m(l,s){E(l,e,s);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);r=!0},p(l,s){if(s&16){a=O(l[4].data.getGuides.guides);let i;for(i=0;i<a.length;i+=1){const m=le(l,a,i);t[i]?(t[i].p(m,s),p(t[i],1)):(t[i]=se(m),t[i].c(),p(t[i],1),t[i].m(e,null))}for(Z(),i=a.length;i<t.length;i+=1)c(i);H()}(!r||s&64&&n!==(n="grid "+l[6]+" gap-4"))&&b(e,"class",n)},i(l){if(!r){for(let s=0;s<a.length;s+=1)p(t[s]);r=!0}},o(l){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)w(t[s]);r=!1},d(l){l&&$(e),ue(t,l)}}}function Ee(o){let e,n=o[9]("error.oh-no")+"",r,a,t=o[4].error.message+"",c;return{c(){e=B("p"),r=T(n),a=k(),c=T(t)},l(l){e=D(l,"P",{});var s=I(e);r=U(s,n),a=q(s),c=U(s,t),s.forEach($)},m(l,s){E(l,e,s),C(e,r),C(e,a),C(e,c)},p(l,s){s&512&&n!==(n=l[9]("error.oh-no")+"")&&Y(r,n),s&16&&t!==(t=l[4].error.message+"")&&Y(c,t)},i:N,o:N,d(l){l&&$(e)}}}function Ve(o){let e,n,r,a=O(Array(o[2])),t=[];for(let l=0;l<a.length;l+=1)t[l]=ie(ne(o,a,l));const c=l=>w(t[l],1,1,()=>{t[l]=null});return{c(){e=B("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=D(l,"DIV",{class:!0});var s=I(e);for(let i=0;i<t.length;i+=1)t[i].l(s);s.forEach($),this.h()},h(){b(e,"class",n="grid "+o[6]+" gap-4")},m(l,s){E(l,e,s);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);r=!0},p(l,s){if(s&4){a=O(Array(l[2]));let i;for(i=0;i<a.length;i+=1){const m=ne(l,a,i);t[i]?(t[i].p(m,s),p(t[i],1)):(t[i]=ie(),t[i].c(),p(t[i],1),t[i].m(e,null))}for(Z(),i=a.length;i<t.length;i+=1)c(i);H()}(!r||s&64&&n!==(n="grid "+l[6]+" gap-4"))&&b(e,"class",n)},i(l){if(!r){for(let s=0;s<a.length;s+=1)p(t[s]);r=!0}},o(l){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)w(t[s]);r=!1},d(l){l&&$(e),ue(t,l)}}}function se(o){let e,n;return e=new ve({props:{guide:o[22],logo:o[22].user.avatar}}),{c(){A(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){P(e,r,a),n=!0},p(r,a){const t={};a&16&&(t.guide=r[22]),a&16&&(t.logo=r[22].user.avatar),e.$set(t)},i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}function ie(o){let e,n;return e=new ye({props:{fake:!0}}),{c(){A(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,a){P(e,r,a),n=!0},p:N,i(r){n||(p(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){L(e,r)}}}function Be(o){let e,n,r,a,t,c,l,s,i,m,V,h,S,x,d=o[0]&&o[8]!==null&&re(o);function Q(f){o[12](f)}let y={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};o[5]!==void 0&&(y.settings=o[5]),a=new K({props:y}),W.push(()=>X(a,"settings",Q)),a.$on("page",o[13]),a.$on("amount",o[14]);const G=[Ve,Ee,Ge],v=[];function M(f,g){return f[4].fetching?0:f[4].error?1:2}l=M(o),s=v[l]=G[l](o);function R(f){o[15](f)}let z={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};return o[5]!==void 0&&(z.settings=o[5]),h=new K({props:z}),W.push(()=>X(h,"settings",R)),h.$on("page",o[16]),h.$on("amount",o[17]),{c(){e=B("div"),d&&d.c(),n=k(),r=B("div"),A(a.$$.fragment),c=k(),s.c(),i=k(),m=B("div"),V=B("div"),A(h.$$.fragment),this.h()},l(f){e=D(f,"DIV",{class:!0});var g=I(e);d&&d.l(g),n=q(g),r=D(g,"DIV",{});var j=I(r);F(a.$$.fragment,j),j.forEach($),g.forEach($),c=q(f),s.l(f),i=q(f),m=D(f,"DIV",{class:!0});var u=I(m);V=D(u,"DIV",{});var _=I(V);F(h.$$.fragment,_),_.forEach($),u.forEach($),this.h()},h(){b(e,"class","mb-5 ml-auto flex"),J(e,"justify-between",o[0]&&o[8]!==null),J(e,"justify-end",!o[0]||o[8]==null),b(m,"class","ml-auto mt-5 flex justify-end")},m(f,g){E(f,e,g),d&&d.m(e,null),C(e,n),C(e,r),P(a,r,null),E(f,c,g),v[l].m(f,g),E(f,i,g),E(f,m,g),C(m,V),P(h,V,null),x=!0},p(f,[g]){f[0]&&f[8]!==null?d?d.p(f,g):(d=re(f),d.c(),d.m(e,n)):d&&(d.d(1),d=null);const j={};!t&&g&32&&(t=!0,j.settings=f[5],ee(()=>t=!1)),a.$set(j),(!x||g&257)&&J(e,"justify-between",f[0]&&f[8]!==null),(!x||g&257)&&J(e,"justify-end",!f[0]||f[8]==null);let u=l;l=M(f),l===u?v[l].p(f,g):(Z(),w(v[u],1,1,()=>{v[u]=null}),H(),s=v[l],s?s.p(f,g):(s=v[l]=G[l](f),s.c()),p(s,1),s.m(i.parentNode,i));const _={};!S&&g&32&&(S=!0,_.settings=f[5],ee(()=>S=!1)),h.$set(_)},i(f){x||(p(a.$$.fragment,f),p(s),p(h.$$.fragment,f),x=!0)},o(f){w(a.$$.fragment,f),w(s),w(h.$$.fragment,f),x=!1},d(f){f&&($(e),$(c),$(i),$(m)),d&&d.d(),L(a),v[l].d(f),L(h)}}}function De(o,e,n){let r,a,t,c,l,s=N,i=()=>(s(),s=te(r,u=>n(4,l=u)),r),m,V,h=N,S=()=>(h(),h=te(v,u=>n(9,V=u)),v);ce(o,we,u=>n(8,m=u)),o.$$.on_destroy.push(()=>s()),o.$$.on_destroy.push(()=>h());let{colCount:x=4}=e,{newGuide:d=!1}=e;const Q=ge();let y=32,G=0;const{t:v}=de();S();function M(u){c=u,n(5,c),n(3,G),n(2,y),n(11,a),n(4,l)}const R=u=>n(3,G=u.detail),z=u=>n(2,y=u.detail);function f(u){c=u,n(5,c),n(3,G),n(2,y),n(11,a),n(4,l)}const g=u=>n(3,G=u.detail),j=u=>n(2,y=u.detail);return o.$$set=u=>{"colCount"in u&&n(10,x=u.colCount),"newGuide"in u&&n(0,d=u.newGuide)},o.$$.update=()=>{o.$$.dirty&12&&i(n(7,r=$e({query:pe,client:Q,variables:{offset:G*y,limit:y}}))),o.$$.dirty&16&&n(11,a=l?.data?.getGuides?.count||0),o.$$.dirty&1024&&n(6,t=x==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1"),o.$$.dirty&2060&&n(5,c={page:G,limit:y,size:a,amounts:[8,16,32,64,100]})},[d,v,y,G,l,c,t,r,m,V,x,a,M,R,z,f,g,j]}class Ie extends ae{constructor(e){super(),oe(this,e,De,Be,fe,{colCount:10,newGuide:0,t:1})}get t(){return this.$$.ctx[1]}}function be(o){let e,n,r,a;return e=new xe({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),r=new Ie({props:{newGuide:!0,colCount:4}}),{c(){A(e.$$.fragment),n=k(),A(r.$$.fragment)},l(t){const c=he("svelte-gby4d8",document.head);F(e.$$.fragment,c),c.forEach($),n=q(t),F(r.$$.fragment,t)},m(t,c){P(e,document.head,null),E(t,n,c),P(r,t,c),a=!0},p:N,i(t){a||(p(e.$$.fragment,t),p(r.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),w(r.$$.fragment,t),a=!1},d(t){t&&$(n),L(e),L(r,t)}}}class Ne extends ae{constructor(e){super(),oe(this,e,null,be,fe,{})}}export{Ne as component};
//# sourceMappingURL=13.C1tPhSIv.js.map