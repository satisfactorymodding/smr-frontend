import{S as Q,i as W,s as X,bb as $t,Z as A,_ as B,$ as C,m as h,t as v,a1 as H,bc as pt,e as w,aa as D,a as S,c as E,d as b,ab as _,f as m,g as G,a7 as V,j as I,a5 as $,ac as Y,a_ as rt,q as N,aC as ht,b as F,aV as vt,l as T,al as Ut,k as Z,r as xt,aH as mt,aM as gt}from"../../../chunks/vendor-93f46a94.js";import{M as wt}from"../../../chunks/MetaDescriptors-5ea9952a.js";import{l as Et}from"../../../chunks/gql-d96f7ff1.js";import{t as It}from"../../../chunks/graphql-8819e72c.js";import{p as bt}from"../../../chunks/routing-c6322149.js";import{p as st}from"../../../chunks/formatting-b1e7d458.js";import{a as Vt,b as yt}from"../../../chunks/paths-1c47712a.js";import{M as Dt}from"../../../chunks/ModCard-a30b1cd8.js";import{G as _t}from"../../../chunks/GuideCard-3eaa8d92.js";import{a as Mt}from"../../../chunks/user-bfea9258.js";import"../../../chunks/stores-84e1d086.js";import"../../../chunks/global-98137ee8.js";import"../../../chunks/FicsitCard-e155e469.js";import"../../../chunks/navigation-ce539261.js";import"../../../chunks/singletons-cdeec3fd.js";import"../../../chunks/launcher-0869f499.js";import"../../../chunks/CompatibilityButton-8de932ee.js";function Nt(l){let t,r,e,a,s,u,n,f,o=st(l[0].created_at)+"",i,c;return{c(){t=w("div"),r=w("h3"),e=D("Info"),a=S(),s=w("span"),u=w("strong"),n=D("Created:"),f=S(),i=D(o),c=w("br"),this.h()},l(d){t=E(d,"DIV",{class:!0});var p=b(t);r=E(p,"H3",{class:!0});var R=b(r);e=_(R,"Info"),R.forEach(m),a=G(p),s=E(p,"SPAN",{});var y=b(s);u=E(y,"STRONG",{});var M=b(u);n=_(M,"Created:"),M.forEach(m),f=G(y),i=_(y,o),y.forEach(m),c=E(p,"BR",{}),p.forEach(m),this.h()},h(){V(r,"class","text-2xl my-4 font-bold"),V(t,"class","text-lg")},m(d,p){I(d,t,p),$(t,r),$(r,e),$(t,a),$(t,s),$(s,u),$(u,n),$(s,f),$(s,i),$(t,c)},p(d,p){p&1&&o!==(o=st(d[0].created_at)+"")&&Y(i,o)},d(d){d&&m(t)}}}function St(l){let t,r;return t=new pt({props:{$$slots:{default:[Nt]},$$scope:{ctx:l}}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),r=!0},p(e,a){const s={};a&3&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function Gt(l){let t,r;return t=new $t({props:{$$slots:{default:[St]},$$scope:{ctx:l}}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),r=!0},p(e,[a]){const s={};a&3&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function At(l,t,r){let{user:e}=t;return l.$$set=a=>{"user"in a&&r(0,e=a.user)},[e]}class Bt extends Q{constructor(t){super(),W(this,t,At,Gt,X,{user:0})}}function Ct(l){let t,r,e,a;return{c(){t=w("div"),r=w("img"),this.h()},l(s){t=E(s,"DIV",{});var u=b(t);r=E(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(m),this.h()},h(){V(r,"class","rounded-lg sm:max-w-lg max-w-full w-full"),rt(r.src,e=l[1])||V(r,"src",e),V(r,"alt",a="Avatar for "+l[0])},m(s,u){I(s,t,u),$(t,r)},p(s,[u]){u&2&&!rt(r.src,e=s[1])&&V(r,"src",e),u&1&&a!==(a="Avatar for "+s[0])&&V(r,"alt",a)},i:N,o:N,d(s){s&&m(t)}}}function Ht(l,t,r){let e,{avatar:a}=t,{username:s}=t;return l.$$set=u=>{"avatar"in u&&r(2,a=u.avatar),"username"in u&&r(0,s=u.username)},l.$$.update=()=>{l.$$.dirty&4&&r(1,e=a||Vt+"/images/no_image.webp")},[s,e,a]}class Ot extends Q{constructor(t){super(),W(this,t,Ht,Ct,X,{avatar:2,username:0})}}function at(l,t,r){const e=l.slice();return e[8]=t[r],e}function lt(l,t,r){const e=l.slice();return e[5]=t[r],e}function nt(l){let t,r;return t=new wt({props:{description:l[2].data.getUser.username+" profile",title:l[2].data.getUser.username+" profile"}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),r=!0},p(e,a){const s={};a&4&&(s.description=e[2].data.getUser.username+" profile"),a&4&&(s.title=e[2].data.getUser.username+" profile"),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function Pt(l){let t;return{c(){t=D("404")},l(r){t=_(r,"404")},m(r,e){I(r,t,e)},p:N,i:N,o:N,d(r){r&&m(t)}}}function Lt(l){let t,r,e,a=l[2].data.getUser.username+"",s,u,n,f,o,i,c,d,p,R,y,M,K,O,z,U=l[3]&&l[2].data.getUser.id===l[3].id&&it(l);o=new mt({props:{variant:"outlined",$$slots:{default:[Tt]},$$scope:{ctx:l}}}),o.$on("click",l[4]);const tt=[zt,Zt],P=[];function et(g,x){return g[1]?1:0}return d=et(l),p=P[d]=tt[d](l),M=new Ot({props:{avatar:l[2].data.getUser.avatar,username:l[2].data.getUser.username}}),O=new Bt({props:{user:l[2].data.getUser}}),{c(){t=w("div"),r=w("div"),e=w("h1"),s=D(a),u=S(),n=w("div"),U&&U.c(),f=S(),A(o.$$.fragment),i=S(),c=w("div"),p.c(),R=S(),y=w("div"),A(M.$$.fragment),K=S(),A(O.$$.fragment),this.h()},l(g){t=E(g,"DIV",{class:!0});var x=b(t);r=E(x,"DIV",{class:!0});var j=b(r);e=E(j,"H1",{class:!0});var q=b(e);s=_(q,a),q.forEach(m),u=G(j),n=E(j,"DIV",{});var L=b(n);U&&U.l(L),f=G(L),B(o.$$.fragment,L),L.forEach(m),j.forEach(m),i=G(x),c=E(x,"DIV",{class:!0});var k=b(c);p.l(k),R=G(k),y=E(k,"DIV",{class:!0});var J=b(y);B(M.$$.fragment,J),K=G(J),B(O.$$.fragment,J),J.forEach(m),k.forEach(m),x.forEach(m),this.h()},h(){V(e,"class","text-4xl font-bold"),V(r,"class","flex flex-wrap h-auto justify-between items-center"),V(y,"class","grid grid-cols-1 auto-rows-min gap-8"),V(c,"class","grid grid-auto-max auto-cols-fr gap-4"),V(t,"class","grid gap-6 xlx:grid-flow-row")},m(g,x){I(g,t,x),$(t,r),$(r,e),$(e,s),$(r,u),$(r,n),U&&U.m(n,null),$(n,f),C(o,n,null),$(t,i),$(t,c),P[d].m(c,null),$(c,R),$(c,y),C(M,y,null),$(y,K),C(O,y,null),z=!0},p(g,x){(!z||x&4)&&a!==(a=g[2].data.getUser.username+"")&&Y(s,a),g[3]&&g[2].data.getUser.id===g[3].id?U?(U.p(g,x),x&12&&h(U,1)):(U=it(g),U.c(),h(U,1),U.m(n,f)):U&&(Z(),v(U,1,1,()=>{U=null}),T());const j={};x&2050&&(j.$$scope={dirty:x,ctx:g}),o.$set(j);let q=d;d=et(g),d===q?P[d].p(g,x):(Z(),v(P[q],1,1,()=>{P[q]=null}),T(),p=P[d],p?p.p(g,x):(p=P[d]=tt[d](g),p.c()),h(p,1),p.m(c,R));const L={};x&4&&(L.avatar=g[2].data.getUser.avatar),x&4&&(L.username=g[2].data.getUser.username),M.$set(L);const k={};x&4&&(k.user=g[2].data.getUser),O.$set(k)},i(g){z||(h(U),h(o.$$.fragment,g),h(p),h(M.$$.fragment,g),h(O.$$.fragment,g),z=!0)},o(g){v(U),v(o.$$.fragment,g),v(p),v(M.$$.fragment,g),v(O.$$.fragment,g),z=!1},d(g){g&&m(t),U&&U.d(),H(o),P[d].d(),H(M),H(O)}}}function Rt(l){let t,r,e=l[2].error.message+"",a;return{c(){t=w("p"),r=D("Oh no... "),a=D(e)},l(s){t=E(s,"P",{});var u=b(t);r=_(u,"Oh no... "),a=_(u,e),u.forEach(m)},m(s,u){I(s,t,u),$(t,r),$(t,a)},p(s,u){u&4&&e!==(e=s[2].error.message+"")&&Y(a,e)},i:N,o:N,d(s){s&&m(t)}}}function jt(l){let t,r;return{c(){t=w("p"),r=D("Loading...")},l(e){t=E(e,"P",{});var a=b(t);r=_(a,"Loading..."),a.forEach(m)},m(e,a){I(e,t,a),$(t,r)},p:N,i:N,o:N,d(e){e&&m(t)}}}function it(l){let t,r;return t=new mt({props:{variant:"outlined",href:yt+"/settings",$$slots:{default:[kt]},$$scope:{ctx:l}}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),r=!0},p(e,a){const s={};a&2048&&(s.$$scope={dirty:a,ctx:e}),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function kt(l){let t;return{c(){t=D("Settings")},l(r){t=_(r,"Settings")},m(r,e){I(r,t,e)},d(r){r&&m(t)}}}function qt(l){let t;return{c(){t=D("Mods")},l(r){t=_(r,"Mods")},m(r,e){I(r,t,e)},d(r){r&&m(t)}}}function Ft(l){let t;return{c(){t=D("Guides")},l(r){t=_(r,"Guides")},m(r,e){I(r,t,e)},d(r){r&&m(t)}}}function Tt(l){let t;function r(s,u){return s[1]?qt:Ft}let e=r(l),a=e(l);return{c(){a.c(),t=F()},l(s){a.l(s),t=F()},m(s,u){a.m(s,u),I(s,t,u)},p(s,u){e!==(e=r(s))&&(a.d(1),a=e(s),a&&(a.c(),a.m(t.parentNode,t)))},d(s){a.d(s),s&&m(t)}}}function Zt(l){let t,r,e,a=l[2].data.getUser.guides,s=[];for(let f=0;f<a.length;f+=1)s[f]=ft(at(l,a,f));const u=f=>v(s[f],1,1,()=>{s[f]=null});let n=l[2].data.getUser.guides.length===0&&ot();return{c(){t=w("div");for(let f=0;f<s.length;f+=1)s[f].c();r=S(),n&&n.c(),this.h()},l(f){t=E(f,"DIV",{class:!0});var o=b(t);for(let i=0;i<s.length;i+=1)s[i].l(o);r=G(o),n&&n.l(o),o.forEach(m),this.h()},h(){V(t,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit")},m(f,o){I(f,t,o);for(let i=0;i<s.length;i+=1)s[i].m(t,null);$(t,r),n&&n.m(t,null),e=!0},p(f,o){if(o&4){a=f[2].data.getUser.guides;let i;for(i=0;i<a.length;i+=1){const c=at(f,a,i);s[i]?(s[i].p(c,o),h(s[i],1)):(s[i]=ft(c),s[i].c(),h(s[i],1),s[i].m(t,r))}for(Z(),i=a.length;i<s.length;i+=1)u(i);T()}f[2].data.getUser.guides.length===0?n||(n=ot(),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i(f){if(!e){for(let o=0;o<a.length;o+=1)h(s[o]);e=!0}},o(f){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)v(s[o]);e=!1},d(f){f&&m(t),gt(s,f),n&&n.d()}}}function zt(l){let t,r,e,a=l[2].data.getUser.mods,s=[];for(let f=0;f<a.length;f+=1)s[f]=ut(lt(l,a,f));const u=f=>v(s[f],1,1,()=>{s[f]=null});let n=l[2].data.getUser.mods.length===0&&ct();return{c(){t=w("div");for(let f=0;f<s.length;f+=1)s[f].c();r=S(),n&&n.c(),this.h()},l(f){t=E(f,"DIV",{class:!0});var o=b(t);for(let i=0;i<s.length;i+=1)s[i].l(o);r=G(o),n&&n.l(o),o.forEach(m),this.h()},h(){V(t,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit")},m(f,o){I(f,t,o);for(let i=0;i<s.length;i+=1)s[i].m(t,null);$(t,r),n&&n.m(t,null),e=!0},p(f,o){if(o&4){a=f[2].data.getUser.mods;let i;for(i=0;i<a.length;i+=1){const c=lt(f,a,i);s[i]?(s[i].p(c,o),h(s[i],1)):(s[i]=ut(c),s[i].c(),h(s[i],1),s[i].m(t,r))}for(Z(),i=a.length;i<s.length;i+=1)u(i);T()}f[2].data.getUser.mods.length===0?n||(n=ct(),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},i(f){if(!e){for(let o=0;o<a.length;o+=1)h(s[o]);e=!0}},o(f){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)v(s[o]);e=!1},d(f){f&&m(t),gt(s,f),n&&n.d()}}}function ft(l){let t,r;return t=new _t({props:{guide:l[8],logo:l[2].data.getUser.avatar}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),r=!0},p(e,a){const s={};a&4&&(s.guide=e[8]),a&4&&(s.logo=e[2].data.getUser.avatar),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function ot(l){let t;return{c(){t=D("User has no guides")},l(r){t=_(r,"User has no guides")},m(r,e){I(r,t,e)},d(r){r&&m(t)}}}function ut(l){let t,r;return t=new Dt({props:{mod:l[5].mod}}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){C(t,e,a),r=!0},p(e,a){const s={};a&4&&(s.mod=e[5].mod),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function ct(l){let t;return{c(){t=D("User has no mods")},l(r){t=_(r,"User has no mods")},m(r,e){I(r,t,e)},d(r){r&&m(t)}}}function Jt(l){let t,r,e,a,s,u,n=!l[2].fetching&&!l[2].error&&l[2].data.getUser&&nt(l);const f=[jt,Rt,Lt,Pt],o=[];function i(c,d){return c[2].fetching?0:c[2].error?1:c[2].data.getUser?2:3}return e=i(l),a=o[e]=f[e](l),{c(){n&&n.c(),t=F(),r=S(),a.c(),s=F()},l(c){const d=vt('[data-svelte="svelte-sx4i20"]',document.head);n&&n.l(d),t=F(),d.forEach(m),r=G(c),a.l(c),s=F()},m(c,d){n&&n.m(document.head,null),$(document.head,t),I(c,r,d),o[e].m(c,d),I(c,s,d),u=!0},p(c,[d]){!c[2].fetching&&!c[2].error&&c[2].data.getUser?n?(n.p(c,d),d&4&&h(n,1)):(n=nt(c),n.c(),h(n,1),n.m(t.parentNode,t)):n&&(Z(),v(n,1,1,()=>{n=null}),T());let p=e;e=i(c),e===p?o[e].p(c,d):(Z(),v(o[p],1,1,()=>{o[p]=null}),T(),a=o[e],a?a.p(c,d):(a=o[e]=f[e](c),a.c()),h(a,1),a.m(s.parentNode,s))},i(c){u||(h(n),h(a),u=!0)},o(c){v(n),v(a),u=!1},d(c){n&&n.d(c),m(t),c&&m(r),o[e].d(c),c&&m(s)}}}const dt=ht(It,{user:void 0}),me=bt(async l=>(dt.variables.user=l.params.userId,Et({user:dt})(l)));function Kt(l,t,r){let e,a=N,s=()=>(a(),a=xt(n,i=>r(2,e=i)),n),u;Ut(l,Mt,i=>r(3,u=i)),l.$$.on_destroy.push(()=>a());let{user:n}=t;s();let f=!1;const o=()=>r(1,f=!f);return l.$$set=i=>{"user"in i&&s(r(0,n=i.user))},[n,f,e,u,o]}class ge extends Q{constructor(t){super(),W(this,t,Kt,Jt,X,{user:0})}}export{ge as default,me as load};
//# sourceMappingURL=index.svelte-032eb9cc.js.map
