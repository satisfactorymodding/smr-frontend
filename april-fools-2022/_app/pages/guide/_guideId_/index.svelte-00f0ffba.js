import{S as re,i as ne,s as se,bc as ae,a6 as P,a7 as S,a8 as q,t as h,q as w,aa as H,bd as oe,e as v,W as T,d as B,f as b,g as D,X as A,h as u,j as O,k as V,l as I,m as _,Y as z,aC as ve,V as Z,aT as be,C as y,J as le,_ as ke,aB as we,B as x,$ as C,R as De,aj as ie,T as ue,ai as fe,aH as ee,aA as Ee,bi as ce,bj as Ge,aF as Ie,aG as je}from"../../../chunks/vendor-c539ab3b.js";import{l as Ve}from"../../../chunks/gql-eeaa0f18.js";import{s as Ce,t as Te}from"../../../chunks/graphql-b763070c.js";import{p as Ae}from"../../../chunks/routing-689f9c1f.js";import{a as de}from"../../../chunks/formatting-24701f16.js";import{b as te}from"../../../chunks/paths-396f020f.js";import{a as Ne}from"../../../chunks/user-5d6a437f.js";import{g as $e}from"../../../chunks/navigation-d7362a67.js";import{T as Pe}from"../../../chunks/Toast-cb4527d6.js";import{m as ge}from"../../../chunks/markdown-e391b8a1.js";import{M as Se}from"../../../chunks/MetaDescriptors-a8cd2896.js";import"../../../chunks/global-bc12f708.js";import"../../../chunks/singletons-d19c42e4.js";import"../../../chunks/extras-7497b851.js";import"../../../chunks/stores-0ab1fd98.js";function qe(a){let e,r,t,s,n,o,l,m,f=de(a[0].created_at)+"",d,i;return{c(){e=v("div"),r=v("h3"),t=T("Info"),s=B(),n=v("span"),o=v("strong"),l=T("Created:"),m=B(),d=T(f),i=v("br"),this.h()},l($){e=b($,"DIV",{class:!0});var p=D(e);r=b(p,"H3",{class:!0});var N=D(r);t=A(N,"Info"),N.forEach(u),s=O(p),n=b(p,"SPAN",{});var j=D(n);o=b(j,"STRONG",{});var F=D(o);l=A(F,"Created:"),F.forEach(u),m=O(j),d=A(j,f),j.forEach(u),i=b(p,"BR",{}),p.forEach(u),this.h()},h(){V(r,"class","text-2xl my-4 font-bold"),V(e,"class","text-lg")},m($,p){I($,e,p),_(e,r),_(r,t),_(e,s),_(e,n),_(n,o),_(o,l),_(n,m),_(n,d),_(e,i)},p($,p){p&1&&f!==(f=de($[0].created_at)+"")&&z(d,f)},d($){$&&u(e)}}}function He(a){let e,r;return e=new oe({props:{$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),r=!0},p(t,s){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Me(a){let e,r;return e=new ae({props:{$$slots:{default:[He]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),r=!0},p(t,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Be(a,e,r){let{guide:t}=e;return a.$$set=s=>{"guide"in s&&r(0,t=s.guide)},[t]}class Oe extends re{constructor(e){super();ne(this,e,Be,Me,se,{guide:0})}}function Fe(a){let e,r,t,s,n,o,l,m,f,d,i,$=a[0].username+"",p,N,j,F,L;return{c(){e=v("div"),r=v("h3"),t=T("Author"),s=B(),n=v("div"),o=v("div"),l=v("div"),f=B(),d=v("div"),i=v("a"),p=T($),j=B(),F=v("div"),L=T("Writer"),this.h()},l(G){e=b(G,"DIV",{class:!0});var M=D(e);r=b(M,"H3",{class:!0});var W=D(r);t=A(W,"Author"),W.forEach(u),s=O(M),n=b(M,"DIV",{class:!0});var k=D(n);o=b(k,"DIV",{class:!0});var g=D(o);l=b(g,"DIV",{class:!0,style:!0}),D(l).forEach(u),f=O(g),d=b(g,"DIV",{class:!0});var J=D(d);i=b(J,"A",{href:!0,class:!0});var Q=D(i);p=A(Q,$),Q.forEach(u),j=O(J),F=b(J,"DIV",{});var c=D(F);L=A(c,"Writer"),c.forEach(u),J.forEach(u),g.forEach(u),k.forEach(u),M.forEach(u),this.h()},h(){V(r,"class","text-2xl my-4 font-bold"),V(l,"class","rounded-full bg-cover w-14 h-14"),V(l,"style",m=`background-image: url("${a[0].avatar}")`),V(i,"href",N=""+(te+"/user/"+a[0].id+"/")),V(i,"class","text-yellow-500 underline"),V(d,"class","grid grid-flow-row"),V(o,"class","grid grid-flow-col auto-cols-min gap-x-4"),V(n,"class","grid auto-rows-min text-lg gap-y-4"),V(e,"class","grid grid-flow-row gap-y-2")},m(G,M){I(G,e,M),_(e,r),_(r,t),_(e,s),_(e,n),_(n,o),_(o,l),_(o,f),_(o,d),_(d,i),_(i,p),_(d,j),_(d,F),_(F,L)},p(G,M){M&1&&m!==(m=`background-image: url("${G[0].avatar}")`)&&V(l,"style",m),M&1&&$!==($=G[0].username+"")&&z(p,$),M&1&&N!==(N=""+(te+"/user/"+G[0].id+"/"))&&V(i,"href",N)},d(G){G&&u(e)}}}function Le(a){let e,r;return e=new oe({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),r=!0},p(t,s){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function We(a){let e,r;return e=new ae({props:{$$slots:{default:[Le]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),r=!0},p(t,[s]){const n={};s&3&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Re(a,e,r){let{author:t}=e;return a.$$set=s=>{"author"in s&&r(0,t=s.author)},[t]}class Ue extends re{constructor(e){super();ne(this,e,Re,We,se,{author:0})}}function _e(a){let e,r;return e=new Se({props:{description:a[3].data.getGuide.short_description,title:a[3].data.getGuide.name}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),r=!0},p(t,s){const n={};s&8&&(n.description=t[3].data.getGuide.short_description),s&8&&(n.title=t[3].data.getGuide.name),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Je(a){let e;return{c(){e=T("404")},l(r){e=A(r,"404")},m(r,t){I(r,e,t)},p:C,i:C,o:C,d(r){r&&u(e)}}}function Qe(a){let e,r,t,s=a[3].data.getGuide.name+"",n,o,l,m,f,d,i,$,p,N,j,F,L,G,M,W,k=a[5]&&me(a);d=new ae({props:{class:"h-fit",$$slots:{default:[tt]},$$scope:{ctx:a}}}),p=new Oe({props:{guide:a[3].data.getGuide}}),j=new Ue({props:{author:a[3].data.getGuide.user}});let g=a[5]&&pe(a);function J(c){a[15](c)}let Q={$$slots:{default:[lt]},$$scope:{ctx:a}};return a[2]!==void 0&&(Q.running=a[2]),G=new Pe({props:Q}),ue.push(()=>fe(G,"running",J)),{c(){e=v("div"),r=v("div"),t=v("h1"),n=T(s),o=B(),l=v("div"),k&&k.c(),m=B(),f=v("div"),P(d.$$.fragment),i=B(),$=v("div"),P(p.$$.fragment),N=B(),P(j.$$.fragment),F=B(),g&&g.c(),L=B(),P(G.$$.fragment),this.h()},l(c){e=b(c,"DIV",{class:!0});var E=D(e);r=b(E,"DIV",{class:!0});var U=D(r);t=b(U,"H1",{class:!0});var X=D(t);n=A(X,s),X.forEach(u),o=O(U),l=b(U,"DIV",{});var Y=D(l);k&&k.l(Y),Y.forEach(u),U.forEach(u),m=O(E),f=b(E,"DIV",{class:!0});var R=D(f);S(d.$$.fragment,R),i=O(R),$=b(R,"DIV",{class:!0});var K=D($);S(p.$$.fragment,K),N=O(K),S(j.$$.fragment,K),K.forEach(u),R.forEach(u),E.forEach(u),F=O(c),g&&g.l(c),L=O(c),S(G.$$.fragment,c),this.h()},h(){V(t,"class","text-4xl font-bold"),V(r,"class","flex flex-wrap h-auto justify-between items-center"),V($,"class","grid grid-cols-1 auto-rows-min gap-8"),V(f,"class","grid grid-auto-max auto-cols-fr gap-4"),V(e,"class","grid gap-6 xlx:grid-flow-row")},m(c,E){I(c,e,E),_(e,r),_(r,t),_(t,n),_(r,o),_(r,l),k&&k.m(l,null),_(e,m),_(e,f),q(d,f,null),_(f,i),_(f,$),q(p,$,null),_($,N),q(j,$,null),I(c,F,E),g&&g.m(c,E),I(c,L,E),q(G,c,E),W=!0},p(c,E){(!W||E&8)&&s!==(s=c[3].data.getGuide.name+"")&&z(n,s),c[5]?k?(k.p(c,E),E&32&&h(k,1)):(k=me(c),k.c(),h(k,1),k.m(l,null)):k&&(x(),w(k,1,1,()=>{k=null}),y());const U={};E&262152&&(U.$$scope={dirty:E,ctx:c}),d.$set(U);const X={};E&8&&(X.guide=c[3].data.getGuide),p.$set(X);const Y={};E&8&&(Y.author=c[3].data.getGuide.user),j.$set(Y),c[5]?g?(g.p(c,E),E&32&&h(g,1)):(g=pe(c),g.c(),h(g,1),g.m(L.parentNode,L)):g&&(x(),w(g,1,1,()=>{g=null}),y());const R={};E&262160&&(R.$$scope={dirty:E,ctx:c}),!M&&E&4&&(M=!0,R.running=c[2],ie(()=>M=!1)),G.$set(R)},i(c){W||(h(k),h(d.$$.fragment,c),h(p.$$.fragment,c),h(j.$$.fragment,c),h(g),h(G.$$.fragment,c),W=!0)},o(c){w(k),w(d.$$.fragment,c),w(p.$$.fragment,c),w(j.$$.fragment,c),w(g),w(G.$$.fragment,c),W=!1},d(c){c&&u(e),k&&k.d(),H(d),H(p),H(j),c&&u(F),g&&g.d(c),c&&u(L),H(G,c)}}}function Xe(a){let e,r,t=a[3].error.message+"",s;return{c(){e=v("p"),r=T("Oh no... "),s=T(t)},l(n){e=b(n,"P",{});var o=D(e);r=A(o,"Oh no... "),s=A(o,t),o.forEach(u)},m(n,o){I(n,e,o),_(e,r),_(e,s)},p(n,o){o&8&&t!==(t=n[3].error.message+"")&&z(s,t)},i:C,o:C,d(n){n&&u(e)}}}function Ye(a){let e,r;return{c(){e=v("p"),r=T("Loading...")},l(t){e=b(t,"P",{});var s=D(e);r=A(s,"Loading..."),s.forEach(u)},m(t,s){I(t,e,s),_(e,r)},p:C,i:C,o:C,d(t){t&&u(e)}}}function me(a){let e,r,t,s;return e=new ee({props:{variant:"outlined",$$slots:{default:[ze]},$$scope:{ctx:a}}}),e.$on("click",a[10]),t=new ee({props:{variant:"outlined",$$slots:{default:[Ke]},$$scope:{ctx:a}}}),t.$on("click",a[11]),{c(){P(e.$$.fragment),r=B(),P(t.$$.fragment)},l(n){S(e.$$.fragment,n),r=O(n),S(t.$$.fragment,n)},m(n,o){q(e,n,o),I(n,r,o),q(t,n,o),s=!0},p(n,o){const l={};o&262144&&(l.$$scope={dirty:o,ctx:n}),e.$set(l);const m={};o&262144&&(m.$$scope={dirty:o,ctx:n}),t.$set(m)},i(n){s||(h(e.$$.fragment,n),h(t.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),w(t.$$.fragment,n),s=!1},d(n){H(e,n),n&&u(r),H(t,n)}}}function ze(a){let e;return{c(){e=T("Edit")},l(r){e=A(r,"Edit")},m(r,t){I(r,e,t)},d(r){r&&u(e)}}}function Ke(a){let e;return{c(){e=T("Delete")},l(r){e=A(r,"Delete")},m(r,t){I(r,e,t)},d(r){r&&u(e)}}}function Ze(a){return{c:C,l:C,m:C,p:C,d:C}}function ye(a){let e,r=a[17]+"";return{c(){e=v("p")},l(t){e=b(t,"P",{});var s=D(e);s.forEach(u)},m(t,s){I(t,e,s),e.innerHTML=r},p(t,s){s&8&&r!==(r=t[17]+"")&&(e.innerHTML=r)},d(t){t&&u(e)}}}function xe(a){return{c:C,l:C,m:C,p:C,d:C}}function et(a){let e,r,t={ctx:a,current:null,token:null,hasCatch:!1,pending:xe,then:ye,catch:Ze,value:17};return ce(r=ge(a[3].data.getGuide.guide),t),{c(){e=v("div"),t.block.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var n=D(e);t.block.l(n),n.forEach(u),this.h()},h(){V(e,"class","markdown-content break-words")},m(s,n){I(s,e,n),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(s,n){a=s,t.ctx=a,n&8&&r!==(r=ge(a[3].data.getGuide.guide))&&ce(r,t)||Ge(t,a,n)},d(s){s&&u(e),t.block.d(),t.token=null,t=null}}}function tt(a){let e,r;return e=new oe({props:{$$slots:{default:[et]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),r=!0},p(t,s){const n={};s&262152&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function pe(a){let e,r,t;function s(o){a[14](o)}let n={$$slots:{default:[ot]},$$scope:{ctx:a}};return a[6]!==void 0&&(n.open=a[6]),e=new Ee({props:n}),ue.push(()=>fe(e,"open",s)),{c(){P(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,l){q(e,o,l),t=!0},p(o,l){const m={};l&262144&&(m.$$scope={dirty:l,ctx:o}),!r&&l&64&&(r=!0,m.open=o[6],ie(()=>r=!1)),e.$set(m)},i(o){t||(h(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){H(e,o)}}}function rt(a){let e;return{c(){e=T("Delete Guide?")},l(r){e=A(r,"Delete Guide?")},m(r,t){I(r,e,t)},d(r){r&&u(e)}}}function nt(a){let e;return{c(){e=T("Cancel")},l(r){e=A(r,"Cancel")},m(r,t){I(r,e,t)},d(r){r&&u(e)}}}function st(a){let e;return{c(){e=T("Delete")},l(r){e=A(r,"Delete")},m(r,t){I(r,e,t)},d(r){r&&u(e)}}}function at(a){let e,r,t,s,n,o,l,m;return n=new ee({props:{variant:"outlined",$$slots:{default:[nt]},$$scope:{ctx:a}}}),n.$on("click",a[12]),l=new ee({props:{variant:"outlined",$$slots:{default:[st]},$$scope:{ctx:a}}}),l.$on("click",a[13]),{c(){e=v("div"),r=v("span"),t=T("Are you sure you wish to delete this guide"),s=B(),P(n.$$.fragment),o=B(),P(l.$$.fragment),this.h()},l(f){e=b(f,"DIV",{class:!0});var d=D(e);r=b(d,"SPAN",{});var i=D(r);t=A(i,"Are you sure you wish to delete this guide"),i.forEach(u),s=O(d),S(n.$$.fragment,d),o=O(d),S(l.$$.fragment,d),d.forEach(u),this.h()},h(){V(e,"class","grid grid-flow-row gap-4")},m(f,d){I(f,e,d),_(e,r),_(r,t),_(e,s),q(n,e,null),_(e,o),q(l,e,null),m=!0},p(f,d){const i={};d&262144&&(i.$$scope={dirty:d,ctx:f}),n.$set(i);const $={};d&262144&&($.$$scope={dirty:d,ctx:f}),l.$set($)},i(f){m||(h(n.$$.fragment,f),h(l.$$.fragment,f),m=!0)},o(f){w(n.$$.fragment,f),w(l.$$.fragment,f),m=!1},d(f){f&&u(e),H(n),H(l)}}}function ot(a){let e,r,t,s;return e=new Ie({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),t=new je({props:{$$slots:{default:[at]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment),r=B(),P(t.$$.fragment)},l(n){S(e.$$.fragment,n),r=O(n),S(t.$$.fragment,n)},m(n,o){q(e,n,o),I(n,r,o),q(t,n,o),s=!0},p(n,o){const l={};o&262144&&(l.$$scope={dirty:o,ctx:n}),e.$set(l);const m={};o&262144&&(m.$$scope={dirty:o,ctx:n}),t.$set(m)},i(n){s||(h(e.$$.fragment,n),h(t.$$.fragment,n),s=!0)},o(n){w(e.$$.fragment,n),w(t.$$.fragment,n),s=!1},d(n){H(e,n),n&&u(r),H(t,n)}}}function lt(a){let e,r;return{c(){e=v("span"),r=T(a[4])},l(t){e=b(t,"SPAN",{});var s=D(e);r=A(s,a[4]),s.forEach(u)},m(t,s){I(t,e,s),_(e,r)},p(t,s){s&16&&z(r,t[4])},d(t){t&&u(e)}}}function it(a){let e,r,t,s,n,o,l=!a[3].fetching&&!a[3].error&&a[3].data.getGuide&&_e(a);const m=[Ye,Xe,Qe,Je],f=[];function d(i,$){return i[3].fetching?0:i[3].error?1:i[3].data.getGuide?2:3}return t=d(a),s=f[t]=m[t](a),{c(){l&&l.c(),e=Z(),r=B(),s.c(),n=Z()},l(i){const $=be('[data-svelte="svelte-bhfvpi"]',document.head);l&&l.l($),e=Z(),$.forEach(u),r=O(i),s.l(i),n=Z()},m(i,$){l&&l.m(document.head,null),_(document.head,e),I(i,r,$),f[t].m(i,$),I(i,n,$),o=!0},p(i,[$]){!i[3].fetching&&!i[3].error&&i[3].data.getGuide?l?(l.p(i,$),$&8&&h(l,1)):(l=_e(i),l.c(),h(l,1),l.m(e.parentNode,e)):l&&(x(),w(l,1,1,()=>{l=null}),y());let p=t;t=d(i),t===p?f[t].p(i,$):(x(),w(f[p],1,1,()=>{f[p]=null}),y(),s=f[t],s?s.p(i,$):(s=f[t]=m[t](i),s.c()),h(s,1),s.m(n.parentNode,n))},i(i){o||(h(l),h(s),o=!0)},o(i){w(l),w(s),o=!1},d(i){l&&l.d(i),u(e),i&&u(r),f[t].d(i),i&&u(n)}}}const he=ve(Ce,{guide:void 0}),Gt=Ae(async a=>(he.variables.guide=a.params.guideId,Ve({guide:he})(a)));function ut(a,e,r){let t,s,n=C,o=()=>(n(),n=ke(d,g=>r(3,s=g)),d),l,m;le(a,Ne,g=>r(9,l=g)),a.$$.on_destroy.push(()=>n());let{guideId:f}=e,{guide:d}=e;o();let i="",$=!1;const p=we({query:Te}),N=De(!1);le(a,N,g=>r(6,m=g));const j=()=>{p({guideId:f}).then(g=>{g.error?(console.error(g.error.message),r(4,i="Error deleting guide: "+g.error.message),r(2,$=!0)):$e(te+"/guides")})},F=()=>$e(te+"/guide/"+f+"/edit"),L=()=>N.set(!0),G=()=>N.set(!1),M=()=>j();function W(g){m=g,N.set(m)}function k(g){$=g,r(2,$)}return a.$$set=g=>{"guideId"in g&&r(0,f=g.guideId),"guide"in g&&o(r(1,d=g.guide))},a.$$.update=()=>{a.$$.dirty&520&&r(5,t=l?.roles?.deleteContent||l?.id===s?.data?.getGuide?.user?.id),a.$$.dirty&4&&($||r(4,i=""))},[f,d,$,s,i,t,m,N,j,l,F,L,G,M,W,k]}class It extends re{constructor(e){super();ne(this,e,ut,it,se,{guideId:0,guide:1})}}export{It as default,Gt as load};
//# sourceMappingURL=index.svelte-00f0ffba.js.map