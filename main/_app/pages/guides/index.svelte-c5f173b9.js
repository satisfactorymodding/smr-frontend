import{S as Y,i as Z,s as z,w as v,x as k,y as G,q as _,o as h,B as w,e as j,k as B,c as C,a as P,m as S,d as m,b as E,g as $,X as V,n as N,p as O,P as H,R as W,aI as x,T as ee,Y as te,t as A,h as R,D as re,aB as J,j as se,Z as F,a2 as le}from"../../chunks/vendor-1ba4e540.js";import{i as ae}from"../../chunks/graphql-a19cc583.js";import{G as ne}from"../../chunks/GuideCard-ea1576b3.js";import{P as K}from"../../chunks/PageControls-7bf021fb.js";import{b as oe}from"../../chunks/paths-396f020f.js";import{a as ie}from"../../chunks/user-3cdd149b.js";import{F as ce}from"../../chunks/FicsitCard-3b00a8a4.js";import{M as ue}from"../../chunks/MetaDescriptors-28c89374.js";import"../../chunks/formatting-24701f16.js";import"../../chunks/navigation-b10cf5bf.js";import"../../chunks/singletons-4a680913.js";import"../../chunks/stores-db79f75e.js";function L(o,e,s){const t=o.slice();return t[11]=e[s],t}function fe(o,e,s){const t=o.slice();return t[8]=e[s],t}function Q(o){let e,s;return e=new te({props:{variant:"outlined",href:""+(oe+"/new-guide"),$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,n){G(e,t,n),s=!0},p(t,n){const r={};n&16384&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function de(o){let e;return{c(){e=A("New Guide")},l(s){e=R(s,"New Guide")},m(s,t){$(s,e,t)},d(s){s&&m(e)}}}function ge(o){let e,s,t,n=o[1].data.getGuides.guides,r=[];for(let l=0;l<n.length;l+=1)r[l]=U(L(o,n,l));const a=l=>h(r[l],1,1,()=>{r[l]=null});return{c(){e=j("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=C(l,"DIV",{class:!0});var c=P(e);for(let u=0;u<r.length;u+=1)r[u].l(c);c.forEach(m),this.h()},h(){E(e,"class",s="grid "+o[3]+" gap-4")},m(l,c){$(l,e,c);for(let u=0;u<r.length;u+=1)r[u].m(e,null);t=!0},p(l,c){if(c&2){n=l[1].data.getGuides.guides;let u;for(u=0;u<n.length;u+=1){const p=L(l,n,u);r[u]?(r[u].p(p,c),_(r[u],1)):(r[u]=U(p),r[u].c(),_(r[u],1),r[u].m(e,null))}for(N(),u=n.length;u<r.length;u+=1)a(u);O()}(!t||c&8&&s!==(s="grid "+l[3]+" gap-4"))&&E(e,"class",s)},i(l){if(!t){for(let c=0;c<n.length;c+=1)_(r[c]);t=!0}},o(l){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)h(r[c]);t=!1},d(l){l&&m(e),J(r,l)}}}function me(o){let e,s,t=o[1].error.message+"",n;return{c(){e=j("p"),s=A("Oh no... "),n=A(t)},l(r){e=C(r,"P",{});var a=P(e);s=R(a,"Oh no... "),n=R(a,t),a.forEach(m)},m(r,a){$(r,e,a),V(e,s),V(e,n)},p(r,a){a&2&&t!==(t=r[1].error.message+"")&&se(n,t)},i:F,o:F,d(r){r&&m(e)}}}function _e(o){let e,s,t,n=Array(D),r=[];for(let a=0;a<n.length;a+=1)r[a]=he(fe(o,n,a));return{c(){e=j("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=C(a,"DIV",{class:!0});var l=P(e);for(let c=0;c<r.length;c+=1)r[c].l(l);l.forEach(m),this.h()},h(){E(e,"class",s="grid "+o[3]+" gap-4")},m(a,l){$(a,e,l);for(let c=0;c<r.length;c+=1)r[c].m(e,null);t=!0},p(a,l){(!t||l&8&&s!==(s="grid "+a[3]+" gap-4"))&&E(e,"class",s)},i(a){if(!t){for(let l=0;l<n.length;l+=1)_(r[l]);t=!0}},o(a){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)h(r[l]);t=!1},d(a){a&&m(e),J(r,a)}}}function U(o){let e,s;return e=new ne({props:{guide:o[11],logo:o[11].user.avatar}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,n){G(e,t,n),s=!0},p(t,n){const r={};n&2&&(r.guide=t[11]),n&2&&(r.logo=t[11].user.avatar),e.$set(r)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function he(o){let e,s;return e=new ce({props:{fake:!0}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,n){G(e,t,n),s=!0},p:F,i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function pe(o){let e,s,t,n,r,a,l,c,u,p,d,q,f=o[0]&&o[4]!==null&&Q(o);n=new K({props:{totalPages:Math.ceil(o[2]/D),currentPage:o[6]}});const T=[_e,me,ge],b=[];function X(i,g){return i[1].fetching?0:i[1].error?1:2}return a=X(o),l=b[a]=T[a](o),d=new K({props:{totalPages:Math.ceil(o[2]/D),currentPage:o[6]}}),{c(){e=j("div"),f&&f.c(),s=B(),t=j("div"),v(n.$$.fragment),r=B(),l.c(),c=B(),u=j("div"),p=j("div"),v(d.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var g=P(e);f&&f.l(g),s=S(g),t=C(g,"DIV",{});var I=P(t);k(n.$$.fragment,I),I.forEach(m),g.forEach(m),r=S(i),l.l(i),c=S(i),u=C(i,"DIV",{class:!0});var y=P(u);p=C(y,"DIV",{});var M=P(p);k(d.$$.fragment,M),M.forEach(m),y.forEach(m),this.h()},h(){E(e,"class","mb-5 ml-auto flex justify-between"),E(u,"class","mt-5 ml-auto flex justify-end")},m(i,g){$(i,e,g),f&&f.m(e,null),V(e,s),V(e,t),G(n,t,null),$(i,r,g),b[a].m(i,g),$(i,c,g),$(i,u,g),V(u,p),G(d,p,null),q=!0},p(i,[g]){i[0]&&i[4]!==null?f?(f.p(i,g),g&17&&_(f,1)):(f=Q(i),f.c(),_(f,1),f.m(e,s)):f&&(N(),h(f,1,1,()=>{f=null}),O());const I={};g&4&&(I.totalPages=Math.ceil(i[2]/D)),n.$set(I);let y=a;a=X(i),a===y?b[a].p(i,g):(N(),h(b[y],1,1,()=>{b[y]=null}),O(),l=b[a],l?l.p(i,g):(l=b[a]=T[a](i),l.c()),_(l,1),l.m(c.parentNode,c));const M={};g&4&&(M.totalPages=Math.ceil(i[2]/D)),d.$set(M)},i(i){q||(_(f),_(n.$$.fragment,i),_(l),_(d.$$.fragment,i),q=!0)},o(i){h(f),h(n.$$.fragment,i),h(l),h(d.$$.fragment,i),q=!1},d(i){i&&m(e),f&&f.d(),w(n),i&&m(r),b[a].d(i),i&&m(c),i&&m(u),w(d)}}}const D=40;function $e(o,e,s){let t,n,r;H(o,ie,d=>s(4,r=d));let{colCount:a=4}=e,{newGuide:l=!1}=e;const c=W(ae,{offset:0,limit:D});H(o,c,d=>s(1,n=d));const u=re(1);let p;return u.subscribe(d=>{x(c,n.variables.offset=(d-1)*D,n),n.reexecute()}),ee(c),o.$$set=d=>{"colCount"in d&&s(7,a=d.colCount),"newGuide"in d&&s(0,l=d.newGuide)},o.$$.update=()=>{o.$$.dirty&2&&s(2,p=n?.data?.getGuides?.count||0),o.$$.dirty&128&&s(3,t=a==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1")},[l,n,p,t,r,c,u,a]}class be extends Y{constructor(e){super();Z(this,e,$e,pe,z,{colCount:7,newGuide:0})}}function ve(o){let e,s,t,n;return e=new ue({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),t=new be({props:{newGuide:!0,colCount:4}}),{c(){v(e.$$.fragment),s=B(),v(t.$$.fragment)},l(r){const a=le('[data-svelte="svelte-gby4d8"]',document.head);k(e.$$.fragment,a),a.forEach(m),s=S(r),k(t.$$.fragment,r)},m(r,a){G(e,document.head,null),$(r,s,a),G(t,r,a),n=!0},p:F,i(r){n||(_(e.$$.fragment,r),_(t.$$.fragment,r),n=!0)},o(r){h(e.$$.fragment,r),h(t.$$.fragment,r),n=!1},d(r){w(e),r&&m(s),w(t,r)}}}class qe extends Y{constructor(e){super();Z(this,e,null,ve,z,{})}}export{qe as default};
//# sourceMappingURL=index.svelte-c5f173b9.js.map
