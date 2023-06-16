import{aJ as Fe,S as me,i as $e,s as ge,d as w,bg as Ie,v as pe,bh as _e,a2 as N,a3 as M,a4 as G,p as h,t as x,a6 as L,x as y,aa as _,a0 as C,y as S,z as R,ab as j,q as $,a1 as D,a8 as I,B,l as E,a7 as p,ac as he,be as Ue,bb as ke,L as T,af as ye,ag as Se,aO as ve,aY as je,k as Z,ba as Qe,n as F,m as Q,aZ as te,a_ as Ae}from"../chunks/vendor.3b08e99d.js";import{S as We}from"../chunks/graphql.769656ab.js";import{l as Xe}from"../chunks/gql.ff9241aa.js";import{p as oe}from"../chunks/formatting.6f84ef8f.js";import{M as Pe}from"../chunks/ModCard.9e1e5bbd.js";import{G as Oe}from"../chunks/GuideCard.976dc437.js";import{M as Ce}from"../chunks/MetaDescriptors.2bca5674.js";import{a as ne}from"../chunks/user.65736ff2.js";const et=async({params:r,parent:e})=>({...r,...await Xe({user:Fe({query:We,client:(await e()).client,variables:{user:r.userId}})})}),dt=Object.freeze(Object.defineProperty({__proto__:null,load:et},Symbol.toStringTag,{value:"Module"})),X="src/lib/components/users/UserInfo.svelte";function De(r){let e,s,i,n,t,c,o,m,l=oe(r[0].created_at)+"",f,u;const a={c:function(){e=y("div"),s=y("h3"),i=_("Info"),n=C(),t=y("span"),c=y("strong"),o=_("Created:"),m=C(),f=_(l),u=y("br"),this.h()},l:function(v){e=S(v,"DIV",{class:!0});var b=R(e);s=S(b,"H3",{class:!0});var A=R(s);i=j(A,"Info"),A.forEach($),n=D(b),t=S(b,"SPAN",{});var q=R(t);c=S(q,"STRONG",{});var P=R(c);o=j(P,"Created:"),P.forEach($),m=D(q),f=j(q,l),q.forEach($),u=S(b,"BR",{}),b.forEach($),this.h()},h:function(){I(s,"class","text-2xl my-4 font-bold"),B(s,X,8,6,193),B(c,X,9,12,251),B(t,X,9,6,245),B(u,X,9,74,313),I(e,"class","text-lg"),B(e,X,7,4,165)},m:function(v,b){E(v,e,b),p(e,s),p(s,i),p(e,n),p(e,t),p(t,c),p(c,o),p(t,m),p(t,f),p(e,u)},p:function(v,b){b&1&&l!==(l=oe(v[0].created_at)+"")&&he(f,l)},d:function(v){v&&$(e)}};return w("SvelteRegisterBlock",{block:a,id:De.name,type:"slot",source:"(7:2) <Content>",ctx:r}),a}function Te(r){let e,s;e=new _e({props:{$$slots:{default:[De]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){N(e.$$.fragment)},l:function(t){M(e.$$.fragment,t)},m:function(t,c){G(e,t,c),s=!0},p:function(t,c){const o={};c&3&&(o.$$scope={dirty:c,ctx:t}),e.$set(o)},i:function(t){s||(h(e.$$.fragment,t),s=!0)},o:function(t){x(e.$$.fragment,t),s=!1},d:function(t){L(e,t)}};return w("SvelteRegisterBlock",{block:i,id:Te.name,type:"slot",source:"(6:0) <Card>",ctx:r}),i}function se(r){let e,s;e=new Ie({props:{$$slots:{default:[Te]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){N(e.$$.fragment)},l:function(t){M(e.$$.fragment,t)},m:function(t,c){G(e,t,c),s=!0},p:function(t,[c]){const o={};c&3&&(o.$$scope={dirty:c,ctx:t}),e.$set(o)},i:function(t){s||(h(e.$$.fragment,t),s=!0)},o:function(t){x(e.$$.fragment,t),s=!1},d:function(t){L(e,t)}};return w("SvelteRegisterBlock",{block:i,id:se.name,type:"component",source:"",ctx:r}),i}function tt(r,e,s){let{$$slots:i={},$$scope:n}=e;pe("UserInfo",i,[]);let{user:t}=e;r.$$.on_mount.push(function(){t===void 0&&!("user"in e||r.$$.bound[r.$$.props.user])&&console.warn("<UserInfo> was created without expected prop 'user'")});const c=["user"];return Object.keys(e).forEach(o=>{!~c.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&console.warn(`<UserInfo> was created with unknown prop '${o}'`)}),r.$$set=o=>{"user"in o&&s(0,t=o.user)},r.$capture_state=()=>({Card:Ie,Content:_e,prettyDate:oe,user:t}),r.$inject_state=o=>{"user"in o&&s(0,t=o.user)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[t]}class Ve extends me{constructor(e){super(e),$e(this,e,tt,se,ge,{user:0}),w("SvelteRegisterComponent",{component:this,tagName:"UserInfo",options:e,id:se.name})}get user(){throw new Error("<UserInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set user(e){throw new Error("<UserInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Be="src/lib/components/users/UserAvatar.svelte";function re(r){let e,s,i,n;const t={c:function(){e=y("div"),s=y("img"),this.h()},l:function(o){e=S(o,"DIV",{});var m=R(e);s=S(m,"IMG",{class:!0,src:!0,alt:!0}),m.forEach($),this.h()},h:function(){I(s,"class","rounded-lg sm:max-w-lg max-w-full w-full"),ke(s.src,i=r[1])||I(s,"src",i),I(s,"alt",n="Avatar for "+r[0]),B(s,Be,7,2,174),B(e,Be,6,0,166)},m:function(o,m){E(o,e,m),p(e,s)},p:function(o,[m]){m&2&&!ke(s.src,i=o[1])&&I(s,"src",i),m&1&&n!==(n="Avatar for "+o[0])&&I(s,"alt",n)},i:T,o:T,d:function(o){o&&$(e)}};return w("SvelteRegisterBlock",{block:t,id:re.name,type:"component",source:"",ctx:r}),t}function nt(r,e,s){let i,{$$slots:n={},$$scope:t}=e;pe("UserAvatar",n,[]);let{avatar:c}=e,{username:o}=e;r.$$.on_mount.push(function(){c===void 0&&!("avatar"in e||r.$$.bound[r.$$.props.avatar])&&console.warn("<UserAvatar> was created without expected prop 'avatar'"),o===void 0&&!("username"in e||r.$$.bound[r.$$.props.username])&&console.warn("<UserAvatar> was created without expected prop 'username'")});const m=["avatar","username"];return Object.keys(e).forEach(l=>{!~m.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<UserAvatar> was created with unknown prop '${l}'`)}),r.$$set=l=>{"avatar"in l&&s(2,c=l.avatar),"username"in l&&s(0,o=l.username)},r.$capture_state=()=>({assets:Ue,avatar:c,username:o,userAvatar:i}),r.$inject_state=l=>{"avatar"in l&&s(2,c=l.avatar),"username"in l&&s(0,o=l.username),"userAvatar"in l&&s(1,i=l.userAvatar)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),r.$$.update=()=>{r.$$.dirty&4&&s(1,i=c||Ue+"/images/no_image.webp")},[o,i,c]}class Ne extends me{constructor(e){super(e),$e(this,e,nt,re,ge,{avatar:2,username:0}),w("SvelteRegisterComponent",{component:this,tagName:"UserAvatar",options:e,id:re.name})}get avatar(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set avatar(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get username(){throw new Error("<UserAvatar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set username(e){throw new Error("<UserAvatar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const O="src/routes/user/[userId]/+page.svelte";function Ee(r,e,s){const i=r.slice();return i[9]=e[s],i}function Re(r,e,s){const i=r.slice();return i[6]=e[s],i}function ie(r){let e,s;e=new Ce({props:{description:r[1].data.getUser.username+" profile",title:r[1].data.getUser.username+" profile"},$$inline:!0});const i={c:function(){N(e.$$.fragment)},l:function(t){M(e.$$.fragment,t)},m:function(t,c){G(e,t,c),s=!0},p:function(t,c){const o={};c&2&&(o.description=t[1].data.getUser.username+" profile"),c&2&&(o.title=t[1].data.getUser.username+" profile"),e.$set(o)},i:function(t){s||(h(e.$$.fragment,t),s=!0)},o:function(t){x(e.$$.fragment,t),s=!1},d:function(t){L(e,t)}};return w("SvelteRegisterBlock",{block:i,id:ie.name,type:"if",source:"(15:2) {#if !$user.fetching && !$user.error && $user.data.getUser}",ctx:r}),i}function Me(r){let e;const s={c:function(){e=_("404")},l:function(n){e=j(n,"404")},m:function(n,t){E(n,e,t)},p:T,i:T,o:T,d:function(n){n&&$(e)}};return w("SvelteRegisterBlock",{block:s,id:Me.name,type:"else",source:"(75:0) {:else}",ctx:r}),s}function Ge(r){let e,s,i,n=r[1].data.getUser.username+"",t,c,o,m,l,f,u,a,d,v,b,A,q,P,W,U=r[2]&&r[1].data.getUser.id===r[2].id&&ae(r);l=new ve({props:{variant:"outlined",$$slots:{default:[Ke]},$$scope:{ctx:r}},$$inline:!0}),l.$on("click",r[5]);const we=[Ze,Ye],z=[];function be(V,g){return V[0]?1:0}a=be(r),d=z[a]=we[a](r),A=new Ne({props:{avatar:r[1].data.getUser.avatar,username:r[1].data.getUser.username},$$inline:!0}),P=new Ve({props:{user:r[1].data.getUser},$$inline:!0});const xe={c:function(){e=y("div"),s=y("div"),i=y("h1"),t=_(n),c=C(),o=y("div"),U&&U.c(),m=C(),N(l.$$.fragment),f=C(),u=y("div"),d.c(),v=C(),b=y("div"),N(A.$$.fragment),q=C(),N(P.$$.fragment),this.h()},l:function(g){e=S(g,"DIV",{class:!0});var k=R(e);s=S(k,"DIV",{class:!0});var J=R(s);i=S(J,"H1",{class:!0});var Y=R(i);t=j(Y,n),Y.forEach($),c=D(J),o=S(J,"DIV",{});var H=R(o);U&&U.l(H),m=D(H),M(l.$$.fragment,H),H.forEach($),J.forEach($),f=D(k),u=S(k,"DIV",{class:!0});var K=R(u);d.l(K),v=D(K),b=S(K,"DIV",{class:!0});var ee=R(b);M(A.$$.fragment,ee),q=D(ee),M(P.$$.fragment,ee),ee.forEach($),K.forEach($),k.forEach($),this.h()},h:function(){I(i,"class","text-4xl font-bold"),B(i,O,28,6,1025),B(o,O,30,6,1098),I(s,"class","flex flex-wrap h-auto justify-between items-center"),B(s,O,27,4,954),I(b,"class","grid grid-cols-1 auto-rows-min gap-8"),B(b,O,68,6,2290),I(u,"class","grid grid-auto-max auto-cols-fr gap-4"),B(u,O,44,4,1472),I(e,"class","grid gap-6 xlx:grid-flow-row"),B(e,O,26,2,907)},m:function(g,k){E(g,e,k),p(e,s),p(s,i),p(i,t),p(s,c),p(s,o),U&&U.m(o,null),p(o,m),G(l,o,null),p(e,f),p(e,u),z[a].m(u,null),p(u,v),p(u,b),G(A,b,null),p(b,q),G(P,b,null),W=!0},p:function(g,k){(!W||k&2)&&n!==(n=g[1].data.getUser.username+"")&&he(t,n),g[2]&&g[1].data.getUser.id===g[2].id?U?(U.p(g,k),k&6&&h(U,1)):(U=ae(g),U.c(),h(U,1),U.m(o,m)):U&&(Q(),x(U,1,1,()=>{U=null}),F());const J={};k&4097&&(J.$$scope={dirty:k,ctx:g}),l.$set(J);let Y=a;a=be(g),a===Y?z[a].p(g,k):(Q(),x(z[Y],1,1,()=>{z[Y]=null}),F(),d=z[a],d?d.p(g,k):(d=z[a]=we[a](g),d.c()),h(d,1),d.m(u,v));const H={};k&2&&(H.avatar=g[1].data.getUser.avatar),k&2&&(H.username=g[1].data.getUser.username),A.$set(H);const K={};k&2&&(K.user=g[1].data.getUser),P.$set(K)},i:function(g){W||(h(U),h(l.$$.fragment,g),h(d),h(A.$$.fragment,g),h(P.$$.fragment,g),W=!0)},o:function(g){x(U),x(l.$$.fragment,g),x(d),x(A.$$.fragment,g),x(P.$$.fragment,g),W=!1},d:function(g){g&&$(e),U&&U.d(),L(l),z[a].d(),L(A),L(P)}};return w("SvelteRegisterBlock",{block:xe,id:Ge.name,type:"if",source:"(26:29) ",ctx:r}),xe}function Le(r){let e,s,i=r[1].error.message+"",n;const t={c:function(){e=y("p"),s=_("Oh no... "),n=_(i),this.h()},l:function(o){e=S(o,"P",{});var m=R(e);s=j(m,"Oh no... "),n=j(m,i),m.forEach($),this.h()},h:function(){B(e,O,24,2,837)},m:function(o,m){E(o,e,m),p(e,s),p(e,n)},p:function(o,m){m&2&&i!==(i=o[1].error.message+"")&&he(n,i)},i:T,o:T,d:function(o){o&&$(e)}};return w("SvelteRegisterBlock",{block:t,id:Le.name,type:"if",source:"(24:22) ",ctx:r}),t}function qe(r){let e,s;const i={c:function(){e=y("p"),s=_("Loading..."),this.h()},l:function(t){e=S(t,"P",{});var c=R(e);s=j(c,"Loading..."),c.forEach($),this.h()},h:function(){B(e,O,22,2,794)},m:function(t,c){E(t,e,c),p(e,s)},p:T,i:T,o:T,d:function(t){t&&$(e)}};return w("SvelteRegisterBlock",{block:i,id:qe.name,type:"if",source:"(22:0) {#if $user.fetching}",ctx:r}),i}function ae(r){let e,s;e=new ve({props:{variant:"outlined",href:je+"/settings",$$slots:{default:[ze]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){N(e.$$.fragment)},l:function(t){M(e.$$.fragment,t)},m:function(t,c){G(e,t,c),s=!0},p:function(t,c){const o={};c&4096&&(o.$$scope={dirty:c,ctx:t}),e.$set(o)},i:function(t){s||(h(e.$$.fragment,t),s=!0)},o:function(t){x(e.$$.fragment,t),s=!1},d:function(t){L(e,t)}};return w("SvelteRegisterBlock",{block:i,id:ae.name,type:"if",source:"(32:8) {#if $me && $user.data.getUser.id === $me.id}",ctx:r}),i}function ze(r){let e;const s={c:function(){e=_("Settings")},l:function(n){e=j(n,"Settings")},m:function(n,t){E(n,e,t)},d:function(n){n&&$(e)}};return w("SvelteRegisterBlock",{block:s,id:ze.name,type:"slot",source:'(33:10) <Button variant=\\"outlined\\" href=\\"{base}/settings\\">',ctx:r}),s}function He(r){let e;const s={c:function(){e=_("Mods")},l:function(n){e=j(n,"Mods")},m:function(n,t){E(n,e,t)},d:function(n){n&&$(e)}};return w("SvelteRegisterBlock",{block:s,id:He.name,type:"else",source:"(39:10) {:else}",ctx:r}),s}function Je(r){let e;const s={c:function(){e=_("Guides")},l:function(n){e=j(n,"Guides")},m:function(n,t){E(n,e,t)},d:function(n){n&&$(e)}};return w("SvelteRegisterBlock",{block:s,id:Je.name,type:"if",source:"(37:10) {#if !guidesTab}",ctx:r}),s}function Ke(r){let e;function s(c,o){return c[0]?He:Je}let i=s(r),n=i(r);const t={c:function(){n.c(),e=Z()},l:function(o){n.l(o),e=Z()},m:function(o,m){n.m(o,m),E(o,e,m)},p:function(o,m){i!==(i=s(o))&&(n.d(1),n=i(o),n&&(n.c(),n.m(e.parentNode,e)))},d:function(o){n.d(o),o&&$(e)}};return w("SvelteRegisterBlock",{block:t,id:Ke.name,type:"slot",source:'(36:8) <Button variant=\\"outlined\\" on:click={() => (guidesTab = !guidesTab)}>',ctx:r}),t}function Ye(r){let e,s,i,n=r[1].data.getUser.guides;te(n);let t=[];for(let l=0;l<n.length;l+=1)t[l]=ce(Ee(r,n,l));const c=l=>x(t[l],1,1,()=>{t[l]=null});let o=r[1].data.getUser.guides.length===0&&le(r);const m={c:function(){e=y("div");for(let f=0;f<t.length;f+=1)t[f].c();s=C(),o&&o.c(),this.h()},l:function(f){e=S(f,"DIV",{class:!0});var u=R(e);for(let a=0;a<t.length;a+=1)t[a].l(u);s=D(u),o&&o.l(u),u.forEach($),this.h()},h:function(){I(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),B(e,O,57,8,1906)},m:function(f,u){E(f,e,u);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);p(e,s),o&&o.m(e,null),i=!0},p:function(f,u){if(u&2){n=f[1].data.getUser.guides,te(n);let a;for(a=0;a<n.length;a+=1){const d=Ee(f,n,a);t[a]?(t[a].p(d,u),h(t[a],1)):(t[a]=ce(d),t[a].c(),h(t[a],1),t[a].m(e,s))}for(Q(),a=n.length;a<t.length;a+=1)c(a);F()}f[1].data.getUser.guides.length===0?o||(o=le(f),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:function(f){if(!i){for(let u=0;u<n.length;u+=1)h(t[u]);i=!0}},o:function(f){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)x(t[u]);i=!1},d:function(f){f&&$(e),Ae(t,f),o&&o.d()}};return w("SvelteRegisterBlock",{block:m,id:Ye.name,type:"else",source:"(57:6) {:else}",ctx:r}),m}function Ze(r){let e,s,i,n=r[1].data.getUser.mods;te(n);let t=[];for(let l=0;l<n.length;l+=1)t[l]=ue(Re(r,n,l));const c=l=>x(t[l],1,1,()=>{t[l]=null});let o=r[1].data.getUser.mods.length===0&&fe(r);const m={c:function(){e=y("div");for(let f=0;f<t.length;f+=1)t[f].c();s=C(),o&&o.c(),this.h()},l:function(f){e=S(f,"DIV",{class:!0});var u=R(e);for(let a=0;a<t.length;a+=1)t[a].l(u);s=D(u),o&&o.l(u),u.forEach($),this.h()},h:function(){I(e,"class","grid 3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1 gap-4 h-fit"),B(e,O,46,8,1555)},m:function(f,u){E(f,e,u);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null);p(e,s),o&&o.m(e,null),i=!0},p:function(f,u){if(u&2){n=f[1].data.getUser.mods,te(n);let a;for(a=0;a<n.length;a+=1){const d=Re(f,n,a);t[a]?(t[a].p(d,u),h(t[a],1)):(t[a]=ue(d),t[a].c(),h(t[a],1),t[a].m(e,s))}for(Q(),a=n.length;a<t.length;a+=1)c(a);F()}f[1].data.getUser.mods.length===0?o||(o=fe(f),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:function(f){if(!i){for(let u=0;u<n.length;u+=1)h(t[u]);i=!0}},o:function(f){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)x(t[u]);i=!1},d:function(f){f&&$(e),Ae(t,f),o&&o.d()}};return w("SvelteRegisterBlock",{block:m,id:Ze.name,type:"if",source:"(46:6) {#if !guidesTab}",ctx:r}),m}function ce(r){let e,s;e=new Oe({props:{guide:r[9],logo:r[1].data.getUser.avatar},$$inline:!0});const i={c:function(){N(e.$$.fragment)},l:function(t){M(e.$$.fragment,t)},m:function(t,c){G(e,t,c),s=!0},p:function(t,c){const o={};c&2&&(o.guide=t[9]),c&2&&(o.logo=t[1].data.getUser.avatar),e.$set(o)},i:function(t){s||(h(e.$$.fragment,t),s=!0)},o:function(t){x(e.$$.fragment,t),s=!1},d:function(t){L(e,t)}};return w("SvelteRegisterBlock",{block:i,id:ce.name,type:"each",source:"(59:10) {#each $user.data.getUser.guides as guide}",ctx:r}),i}function le(r){let e;const s={c:function(){e=_("User has no guides")},l:function(n){e=j(n,"User has no guides")},m:function(n,t){E(n,e,t)},d:function(n){n&&$(e)}};return w("SvelteRegisterBlock",{block:s,id:le.name,type:"if",source:"(63:10) {#if $user.data.getUser.guides.length === 0}",ctx:r}),s}function ue(r){let e,s;e=new Pe({props:{mod:r[6].mod},$$inline:!0});const i={c:function(){N(e.$$.fragment)},l:function(t){M(e.$$.fragment,t)},m:function(t,c){G(e,t,c),s=!0},p:function(t,c){const o={};c&2&&(o.mod=t[6].mod),e.$set(o)},i:function(t){s||(h(e.$$.fragment,t),s=!0)},o:function(t){x(e.$$.fragment,t),s=!1},d:function(t){L(e,t)}};return w("SvelteRegisterBlock",{block:i,id:ue.name,type:"each",source:"(48:10) {#each $user.data.getUser.mods as mod}",ctx:r}),i}function fe(r){let e;const s={c:function(){e=_("User has no mods")},l:function(n){e=j(n,"User has no mods")},m:function(n,t){E(n,e,t)},d:function(n){n&&$(e)}};return w("SvelteRegisterBlock",{block:s,id:fe.name,type:"if",source:"(52:10) {#if $user.data.getUser.mods.length === 0}",ctx:r}),s}function de(r){let e,s,i,n,t,c,o=!r[1].fetching&&!r[1].error&&r[1].data.getUser&&ie(r);const m=[qe,Le,Ge,Me],l=[];function f(a,d){return a[1].fetching?0:a[1].error?1:a[1].data.getUser?2:3}i=f(r),n=l[i]=m[i](r);const u={c:function(){o&&o.c(),e=Z(),s=C(),n.c(),t=Z()},l:function(d){const v=Qe("svelte-sx4i20",document.head);o&&o.l(v),e=Z(),v.forEach($),s=D(d),n.l(d),t=Z()},m:function(d,v){o&&o.m(document.head,null),p(document.head,e),E(d,s,v),l[i].m(d,v),E(d,t,v),c=!0},p:function(d,[v]){!d[1].fetching&&!d[1].error&&d[1].data.getUser?o?(o.p(d,v),v&2&&h(o,1)):(o=ie(d),o.c(),h(o,1),o.m(e.parentNode,e)):o&&(Q(),x(o,1,1,()=>{o=null}),F());let b=i;i=f(d),i===b?l[i].p(d,v):(Q(),x(l[b],1,1,()=>{l[b]=null}),F(),n=l[i],n?n.p(d,v):(n=l[i]=m[i](d),n.c()),h(n,1),n.m(t.parentNode,t))},i:function(d){c||(h(o),h(n),c=!0)},o:function(d){x(o),x(n),c=!1},d:function(d){o&&o.d(d),$(e),d&&$(s),l[i].d(d),d&&$(t)}};return w("SvelteRegisterBlock",{block:u,id:de.name,type:"component",source:"",ctx:r}),u}function ot(r,e,s){let i,n;ye(ne,"me"),Se(r,ne,a=>s(2,n=a));let{$$slots:t={},$$scope:c}=e;pe("Page",t,[]);let{data:o}=e;const{user:m}=o;ye(m,"user"),Se(r,m,a=>s(1,i=a));let l=!1;r.$$.on_mount.push(function(){o===void 0&&!("data"in e||r.$$.bound[r.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const f=["data"];Object.keys(e).forEach(a=>{!~f.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)});const u=()=>s(0,l=!l);return r.$$set=a=>{"data"in a&&s(4,o=a.data)},r.$capture_state=()=>({Button:ve,UserInfo:Ve,UserAvatar:Ne,ModCard:Pe,GuideCard:Oe,MetaDescriptors:Ce,me:ne,base:je,data:o,user:m,guidesTab:l,$user:i,$me:n}),r.$inject_state=a=>{"data"in a&&s(4,o=a.data),"guidesTab"in a&&s(0,l=a.guidesTab)},e&&"$$inject"in e&&r.$inject_state(e.$$inject),[l,i,n,m,o,u]}class mt extends me{constructor(e){super(e),$e(this,e,ot,de,ge,{data:4}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:de.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{mt as component,dt as universal};
//# sourceMappingURL=29.05f088cc.js.map