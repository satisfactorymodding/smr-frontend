import{S as Dt,i as Vt,s as It,d as q,v as St,am as lt,b as qt,bn as ct,an as ot,w as Pt,e as h,h as b,ac as f,bo as Ut,aZ as J,m as K,n as $,p as S,k as m,g as _t,W as ft,x as T,R as pe,ap as ut,aH as Bt,bf as at,a7 as tt,f as W,b0 as me,a8 as et,l as C,j as y,a9 as st,ad as d,t as N,r as dt,u as G,ab as it,aM as At,af as Z,ag as z,aV as gt,q as ht,aW as Wt,ah as Ct}from"../chunks/vendor-856b0c89.js";import{l as Lt}from"../chunks/gql-7502c755.js";import{n as Xt,M as Qt,o as Gt}from"../chunks/graphql-90c77071.js";import{M as Nt}from"../chunks/MetaDescriptors-0fdcf703.js";import{F as Ft}from"../chunks/FicsitCard-91b64f5c.js";import{M as Ot}from"../chunks/ModCard-190d05a9.js";import{a as F}from"../chunks/paths-396f020f.js";import{d as rt,o as pt,e as mt}from"../chunks/global-cdf1d74f.js";import"../chunks/stores-607bd200.js";import"../chunks/navigation-fe373893.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/launcher-75834ab8.js";import"../chunks/mod-27b77630.js";import"../chunks/formatting-f0380eae.js";var Ie=(()=>`.doggo-flipper-L.s-7qWqUbRfAbQ4{-webkit-animation:.1s linear 0s 1 alternate s-7qWqUbRfAbQ4-flip-L both;animation:.1s linear 0s 1 alternate s-7qWqUbRfAbQ4-flip-L both}.doggo-flipper-R.s-7qWqUbRfAbQ4{-webkit-animation:.1s linear 0s 1 alternate s-7qWqUbRfAbQ4-flip-R both;animation:.1s linear 0s 1 alternate s-7qWqUbRfAbQ4-flip-R both}@-webkit-keyframes s-7qWqUbRfAbQ4-flip-R{0%{transform:scaleX(1)}to{transform:scaleX(-1)}}@keyframes s-7qWqUbRfAbQ4-flip-R{0%{transform:scaleX(1)}to{transform:scaleX(-1)}}@-webkit-keyframes s-7qWqUbRfAbQ4-flip-L{0%{transform:scaleX(-1)}to{transform:scaleX(1)}}@keyframes s-7qWqUbRfAbQ4-flip-L{0%{transform:scaleX(-1)}to{transform:scaleX(1)}}
`)();const de="src/lib/components/general/Doggo.svelte";function bt(r){let t,s,a;const e={c:function(){t=h("img"),this.h()},l:function(l){t=b(l,"IMG",{class:!0,src:!0,alt:!0,title:!0,style:!0}),this.h()},h:function(){f(t,"class",s=Ut("h-full doggo-flipper"+(r[1]?"-R":"-L"))+" s-7qWqUbRfAbQ4"),J(t.src,a=r[4])||f(t,"src",a),f(t,"alt","Doggo!"),f(t,"title",`Click to pat doggo!
Art by Zago#5322 (discord)/ZagoTheSpider (youtube)`),K(t,"width","200px"),K(t,"height","auto"),K(t,"position","absolute"),K(t,"top",r[2]+"px"),K(t,"left",r[3]+"px"),K(t,"z-index","69"),$(t,de,50,2,1583)},m:function(l,n){S(l,t,n)},p:function(l,n){n&2&&s!==(s=Ut("h-full doggo-flipper"+(l[1]?"-R":"-L"))+" s-7qWqUbRfAbQ4")&&f(t,"class",s),n&16&&!J(t.src,a=l[4])&&f(t,"src",a),n&4&&K(t,"top",l[2]+"px"),n&8&&K(t,"left",l[3]+"px")},d:function(l){l&&m(t)}};return q("SvelteRegisterBlock",{block:e,id:bt.name,type:"if",source:"(50:0) {#if $dogVisible}",ctx:r}),e}function $t(r){let t,s,a,e=r[5]&&bt(r);const i={c:function(){e&&e.c(),t=_t()},l:function(n){e&&e.l(n),t=_t()},m:function(n,o){e&&e.m(n,o),S(n,t,o),s||(a=[ft(window,"mousedown",r[9],!1,!1,!1),ft(window,"mousemove",r[8],!1,!1,!1),ft(window,"mouseup",r[10],!1,!1,!1)],s=!0)},p:function(n,[o]){n[5]?e?e.p(n,o):(e=bt(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:T,o:T,d:function(n){e&&e.d(n),n&&m(t),s=!1,pe(a)}};return q("SvelteRegisterBlock",{block:i,id:$t.name,type:"component",source:"",ctx:r}),i}function ge(r,t,s){let a,e,i,l,n,o,u,p,E,w,g=T,R=()=>(g(),g=qt(k,c=>s(5,w=c)),k);r.$$.on_destroy.push(()=>g());let{$$slots:M={},$$scope:X}=t;St("Doggo",M,[]);let{dogVisible:k=Pt(!1)}=t;lt(k,"dogVisible"),R();const P=ct(-2e3,{stiffness:.004,damping:.25,precision:1});lt(P,"x"),ot(r,P,c=>s(3,E=c));const D=ct(-1e3,{stiffness:.004,damping:.25,precision:1});lt(D,"y"),ot(r,D,c=>s(2,p=c));let U=F+"/images/dog_stand.gif",I={clientX:-1e3,clientY:0},B=!1;function A(c){!B&&k&&s(11,I=c)}function Q(){s(4,U=F+"/images/dog_aw_yis_pats.gif"),B=!0}function L(){n&&Q()}async function j(){B&&(s(4,U=F+"/images/dog_boing.gif"),s(12,a=3e3),await new Promise(x=>setTimeout(x,700)),c());function c(){ut(k,w=!1,w),ut(P,E=-2e3,E),ut(D,p=-1e3,p),B=!1}}const V=["dogVisible"];return Object.keys(t).forEach(c=>{!~V.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Doggo> was created with unknown prop '${c}'`)}),r.$$set=c=>{"dogVisible"in c&&R(s(0,k=c.dogVisible))},r.$capture_state=()=>({spring:ct,assets:F,writable:Pt,dogVisible:k,x:P,y:D,sprite:U,last_mouse:I,patting:B,update_pos:A,pat:Q,try_pat:L,end_pat:j,actual_mouse_x:a,isClose:n,actual_mouse_y:e,head_offset:u,isLookingRight:o,dy:l,dx:i,$y:p,$x:E,$dogVisible:w}),r.$inject_state=c=>{"dogVisible"in c&&R(s(0,k=c.dogVisible)),"sprite"in c&&s(4,U=c.sprite),"last_mouse"in c&&s(11,I=c.last_mouse),"patting"in c&&(B=c.patting),"actual_mouse_x"in c&&s(12,a=c.actual_mouse_x),"isClose"in c&&s(13,n=c.isClose),"actual_mouse_y"in c&&s(14,e=c.actual_mouse_y),"head_offset"in c&&s(15,u=c.head_offset),"isLookingRight"in c&&s(1,o=c.isLookingRight),"dy"in c&&s(16,l=c.dy),"dx"in c&&s(17,i=c.dx)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),r.$$.update=()=>{r.$$.dirty&2048&&s(12,a=I.clientX-350),r.$$.dirty&2048&&s(14,e=I.clientY-100),r.$$.dirty&4104&&s(17,i=Math.abs(E-a)),r.$$.dirty&16388&&s(16,l=Math.abs(p-e)),r.$$.dirty&196608&&s(13,n=i<80&&l<40),r.$$.dirty&4104&&s(1,o=E<a),r.$$.dirty&8192&&s(4,U=F+("/images/dog_"+(n?"stand.gif":"boing.gif"))),r.$$.dirty&2&&s(15,u=o?-70:50),r.$$.dirty&36864&&P.set(a+u),r.$$.dirty&16384&&D.set(e)},[k,o,p,E,U,w,P,D,A,L,j,I,a,n,e,u,l,i]}class Tt extends Dt{constructor(t){super(t),Vt(this,t,ge,$t,It,{dogVisible:0}),q("SvelteRegisterComponent",{component:this,tagName:"Doggo",options:t,id:$t.name})}get dogVisible(){throw new Error("<Doggo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set dogVisible(t){throw new Error("<Doggo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}var Se=(()=>`.smm-banner.s-Uap-jPRb-uiE{background-image:url(/images/smm_background.webp);filter:blur(8px);-webkit-filter:blur(8px)}.modding-banner.s-Uap-jPRb-uiE{background-image:url(/images/bg_nologo.webp);filter:blur(8px);-webkit-filter:blur(8px)}.css-banner.s-Uap-jPRb-uiE{background-image:url(/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp);filter:blur(8px) brightness(.5);-webkit-filter:blur(8px) brightness(.5)}.banner.s-Uap-jPRb-uiE{height:100%;background-position:center;background-repeat:no-repeat;background-size:cover}.centered-logo.s-Uap-jPRb-uiE{max-height:50%;max-width:60%}.flipped.s-Uap-jPRb-uiE{transform:scaleX(-1)}.flipper-1.s-Uap-jPRb-uiE{-webkit-animation:.11s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper;animation:.11s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper}.flipper-2.s-Uap-jPRb-uiE{-webkit-animation:.12s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper;animation:.12s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper}.flipper-3.s-Uap-jPRb-uiE{-webkit-animation:.13s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper;animation:.13s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper}.flipper-4.s-Uap-jPRb-uiE{-webkit-animation:.14s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper;animation:.14s linear 1s infinite alternate s-Uap-jPRb-uiE-flipper}@-webkit-keyframes s-Uap-jPRb-uiE-flipper{0%{transform:scaleX(-1)}to{transform:scaleX(1)}}@keyframes s-Uap-jPRb-uiE-flipper{0%{transform:scaleX(-1)}to{transform:scaleX(1)}}@media (min-width: 1280px){.centered-logo.s-Uap-jPRb-uiE{max-height:15vh}}
`)();const v="src/routes/index.svelte";function Mt(r,t,s){const a=r.slice();return a[8]=t[s],a}function he(r,t,s){const a=r.slice();return a[5]=t[s],a}function Zt(r){let t,s,a;s=new at({props:{class:"h-full",$$slots:{default:[Kt]},$$scope:{ctx:r}},$$inline:!0});const e={c:function(){t=h("a"),tt(s.$$.fragment),this.h()},l:function(l){t=b(l,"A",{href:!0,class:!0});var n=y(t);et(s.$$.fragment,n),n.forEach(m),this.h()},h:function(){f(t,"href","/mods"),f(t,"class","overflow-hidden s-Uap-jPRb-uiE"),$(t,v,67,6,2938)},m:function(l,n){S(l,t,n),st(s,t,null),a=!0},p:function(l,n){const o={};n&2064&&(o.$$scope={dirty:n,ctx:l}),s.$set(o)},i:function(l){a||(G(s.$$.fragment,l),a=!0)},o:function(l){N(s.$$.fragment,l),a=!1},d:function(l){l&&m(t),it(s)}};return q("SvelteRegisterBlock",{block:e,id:Zt.name,type:"else",source:"(67:4) {:else}",ctx:r}),e}function zt(r){let t,s,a;s=new at({props:{class:"h-full",$$slots:{default:[ne]},$$scope:{ctx:r}},$$inline:!0});const e={c:function(){t=h("a"),tt(s.$$.fragment),this.h()},l:function(l){t=b(l,"A",{href:!0,rel:!0,target:!0,class:!0});var n=y(t);et(s.$$.fragment,n),n.forEach(m),this.h()},h:function(){f(t,"href","https://smm.ficsit.app"),f(t,"rel","noopener"),f(t,"target","_blank"),f(t,"class","s-Uap-jPRb-uiE"),$(t,v,35,6,1272)},m:function(l,n){S(l,t,n),st(s,t,null),a=!0},p:function(l,n){const o={};n&2060&&(o.$$scope={dirty:n,ctx:l}),s.$set(o)},i:function(l){a||(G(s.$$.fragment,l),a=!0)},o:function(l){N(s.$$.fragment,l),a=!1},d:function(l){l&&m(t),it(s)}};return q("SvelteRegisterBlock",{block:e,id:zt.name,type:"if",source:"(35:4) {#if !$onMobile}",ctx:r}),e}function Ht(r){let t=r[4].data.getMods.count+"",s;const a={c:function(){s=Z(t)},l:function(i){s=z(i,t)},m:function(i,l){S(i,s,l)},p:function(i,l){l&16&&t!==(t=i[4].data.getMods.count+"")&&Ct(s,t)},d:function(i){i&&m(s)}};return q("SvelteRegisterBlock",{block:a,id:Ht.name,type:"else",source:"(81:20) {:else}",ctx:r}),a}function Yt(r){let t;const s={c:function(){t=Z("...")},l:function(e){t=z(e,"...")},m:function(e,i){S(e,t,i)},p:T,d:function(e){e&&m(t)}};return q("SvelteRegisterBlock",{block:s,id:Yt.name,type:"if",source:"(79:20) {#if $mods.fetching || $mods.error}",ctx:r}),s}function Jt(r){let t;const s={c:function(){t=Z("Take a look!")},l:function(e){t=z(e,"Take a look!")},m:function(e,i){S(e,t,i)},d:function(e){e&&m(t)}};return q("SvelteRegisterBlock",{block:s,id:Jt.name,type:"slot",source:'(91:14) <Button variant=\\"unelevated\\" class=\\"h-1/4 py-3 px-14 w-full\\" style=\\"background: #5a7b78; color: white\\">',ctx:r}),s}function Kt(r){let t,s,a,e,i,l,n,o,u,p,E,w,g,R,M,X,k,P,D,U,I,B,A;function Q(c,x){return c[4].fetching||c[4].error?Yt:Ht}let L=Q(r),j=L(r);B=new At({props:{variant:"unelevated",class:"h-1/4 py-3 px-14 w-full",style:"background: #5a7b78; color: white",$$slots:{default:[Jt]},$$scope:{ctx:r}},$$inline:!0});const V={c:function(){t=h("div"),s=h("div"),a=W(),e=h("div"),i=h("img"),n=W(),o=h("div"),u=h("div"),p=h("div"),E=Z("We have over "),w=h("span"),j.c(),g=Z(" mods!"),R=W(),M=h("div"),X=Z("Most are compatible with the"),k=W(),P=h("div"),D=Z("latest version of satisfactory."),U=W(),I=h("div"),tt(B.$$.fragment),this.h()},l:function(x){t=b(x,"DIV",{class:!0});var _=y(t);s=b(_,"DIV",{class:!0}),y(s).forEach(m),a=C(_),e=b(_,"DIV",{class:!0});var O=y(e);i=b(O,"IMG",{class:!0,src:!0,alt:!0}),O.forEach(m),n=C(_),o=b(_,"DIV",{class:!0});var H=y(o);u=b(H,"DIV",{class:!0});var Y=y(u);p=b(Y,"DIV",{class:!0});var nt=y(p);E=z(nt,"We have over "),w=b(nt,"SPAN",{class:!0});var wt=y(w);j.l(wt),wt.forEach(m),g=z(nt," mods!"),nt.forEach(m),R=C(Y),M=b(Y,"DIV",{class:!0});var yt=y(M);X=z(yt,"Most are compatible with the"),yt.forEach(m),k=C(Y),P=b(Y,"DIV",{class:!0});var kt=y(P);D=z(kt,"latest version of satisfactory."),kt.forEach(m),Y.forEach(m),H.forEach(m),U=C(_),I=b(_,"DIV",{class:!0});var jt=y(I);et(B.$$.fragment,jt),jt.forEach(m),_.forEach(m),this.h()},h:function(){f(s,"class","smm-banner banner s-Uap-jPRb-uiE"),$(s,v,70,12,3068),f(i,"class","h-full s-Uap-jPRb-uiE"),J(i.src,l=F+"/images/mods_mobile.webp")||f(i,"src",l),f(i,"alt","Ficsit Minion"),$(i,v,72,14,3213),f(e,"class","flex absolute w-full h-full top-0 items-center justify-end text-center s-Uap-jPRb-uiE"),$(e,v,71,12,3114),f(w,"class","text-amber-600 font-bold s-Uap-jPRb-uiE"),$(w,v,77,31,3483),f(p,"class","text-md s-Uap-jPRb-uiE"),$(p,v,76,16,3430),f(M,"class","text-md s-Uap-jPRb-uiE"),$(M,v,85,16,3779),f(P,"class","text-md mb-4 s-Uap-jPRb-uiE"),$(P,v,86,16,3851),f(u,"class","s-Uap-jPRb-uiE"),$(u,v,75,14,3408),f(o,"class","flex absolute w-full h-4/5 top-0 items-center pl-8 s-Uap-jPRb-uiE"),$(o,v,74,12,3329),f(I,"class","flex absolute w-full h-full top-0 items-end justify-center s-Uap-jPRb-uiE"),$(I,v,89,12,3967),f(t,"class","relative h-full w-full s-Uap-jPRb-uiE"),$(t,v,69,10,3019)},m:function(x,_){S(x,t,_),d(t,s),d(t,a),d(t,e),d(e,i),d(t,n),d(t,o),d(o,u),d(u,p),d(p,E),d(p,w),j.m(w,null),d(p,g),d(u,R),d(u,M),d(M,X),d(u,k),d(u,P),d(P,D),d(t,U),d(t,I),st(B,I,null),A=!0},p:function(x,_){L===(L=Q(x))&&j?j.p(x,_):(j.d(1),j=L(x),j&&(j.c(),j.m(w,null)));const O={};_&2048&&(O.$$scope={dirty:_,ctx:x}),B.$set(O)},i:function(x){A||(G(B.$$.fragment,x),A=!0)},o:function(x){N(B.$$.fragment,x),A=!1},d:function(x){x&&m(t),j.d(),it(B)}};return q("SvelteRegisterBlock",{block:V,id:Kt.name,type:"slot",source:'(69:8) <Card class=\\"h-full\\">',ctx:r}),V}function te(r){let t,s;const a={c:function(){t=h("img"),this.h()},l:function(i){t=b(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){f(t,"class","h-full flipped s-Uap-jPRb-uiE"),J(t.src,s=F+"/images/smm_hand.webp")||f(t,"src",s),f(t,"alt","Ficsit Minion"),$(t,v,44,16,1833)},m:function(i,l){S(i,t,l)},p:T,d:function(i){i&&m(t)}};return q("SvelteRegisterBlock",{block:a,id:te.name,type:"else",source:"(44:14) {:else}",ctx:r}),a}function ee(r){let t,s,a,e,i;const l={c:function(){t=h("img"),a=W(),e=h("img"),this.h()},l:function(o){t=b(o,"IMG",{class:!0,src:!0,alt:!0}),a=C(o),e=b(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){f(t,"class","h-full flipper-1 s-Uap-jPRb-uiE"),J(t.src,s=F+"/images/smm_hand.webp")||f(t,"src",s),f(t,"alt","Ficsit Minion"),$(t,v,41,16,1595),f(e,"class","h-full flipper-2 s-Uap-jPRb-uiE"),J(e.src,i=F+"/images/smm_hand.webp")||f(e,"src",i),f(e,"alt","Ficsit Minion"),$(e,v,42,16,1703)},m:function(o,u){S(o,t,u),S(o,a,u),S(o,e,u)},p:T,d:function(o){o&&m(t),o&&m(a),o&&m(e)}};return q("SvelteRegisterBlock",{block:l,id:ee.name,type:"if",source:"(41:14) {#if $easterEgg}",ctx:r}),l}function vt(r){let t=" - Doggo",s;const a={c:function(){s=Z(t)},l:function(i){s=z(i,t)},m:function(i,l){S(i,s,l)},d:function(i){i&&m(s)}};return q("SvelteRegisterBlock",{block:a,id:vt.name,type:"if",source:"(51:18) {#if $easterEgg || $doggoNeedsPats}",ctx:r}),a}function se(r){let t,s;const a={c:function(){t=h("img"),this.h()},l:function(i){t=b(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){f(t,"class","h-full s-Uap-jPRb-uiE"),J(t.src,s=F+"/images/smm_hand.webp")||f(t,"src",s),f(t,"alt","Ficsit Minion"),$(t,v,60,16,2755)},m:function(i,l){S(i,t,l)},p:T,d:function(i){i&&m(t)}};return q("SvelteRegisterBlock",{block:a,id:se.name,type:"else",source:"(60:14) {:else}",ctx:r}),a}function ie(r){let t,s,a,e,i;const l={c:function(){t=h("img"),a=W(),e=h("img"),this.h()},l:function(o){t=b(o,"IMG",{class:!0,src:!0,alt:!0}),a=C(o),e=b(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){f(t,"class","h-full flipper-3 s-Uap-jPRb-uiE"),J(t.src,s=F+"/images/smm_hand.webp")||f(t,"src",s),f(t,"alt","Ficsit Minion"),$(t,v,57,16,2517),f(e,"class","h-full flipper-4 s-Uap-jPRb-uiE"),J(e.src,i=F+"/images/smm_hand.webp")||f(e,"src",i),f(e,"alt","Ficsit Minion"),$(e,v,58,16,2625)},m:function(o,u){S(o,t,u),S(o,a,u),S(o,e,u)},p:T,d:function(o){o&&m(t),o&&m(a),o&&m(e)}};return q("SvelteRegisterBlock",{block:l,id:ie.name,type:"if",source:"(57:14) {#if $easterEgg}",ctx:r}),l}function ne(r){let t,s,a,e,i,l,n,o,u,p,E,w,g,R,M,X;function k(L,j){return L[2]?ee:te}let P=k(r),D=P(r),U=(r[2]||r[3])&&vt(r);function I(L,j){return L[2]?ie:se}let B=I(r),A=B(r);const Q={c:function(){t=h("div"),s=h("div"),a=W(),e=h("div"),D.c(),i=W(),l=h("div"),n=h("div"),o=Z("Satisfactory Mod Manager"),u=W(),p=h("div"),E=Z(`Windows - Linux - Epic - Steam
                  `),U&&U.c(),w=W(),g=h("div"),R=h("img"),X=W(),A.c(),this.h()},l:function(j){t=b(j,"DIV",{class:!0});var V=y(t);s=b(V,"DIV",{class:!0}),y(s).forEach(m),a=C(V),e=b(V,"DIV",{class:!0});var c=y(e);D.l(c),i=C(c),l=b(c,"DIV",{class:!0});var x=y(l);n=b(x,"DIV",{class:!0});var _=y(n);o=z(_,"Satisfactory Mod Manager"),_.forEach(m),u=C(x),p=b(x,"DIV",{class:!0});var O=y(p);E=z(O,`Windows - Linux - Epic - Steam
                  `),U&&U.l(O),O.forEach(m),w=C(x),g=b(x,"DIV",{class:!0});var H=y(g);R=b(H,"IMG",{class:!0,src:!0,alt:!0}),H.forEach(m),x.forEach(m),X=C(c),A.l(c),c.forEach(m),V.forEach(m),this.h()},h:function(){f(s,"class","banner smm-banner s-Uap-jPRb-uiE"),$(s,v,38,12,1426),f(n,"class","text-4xl mb-2 s-Uap-jPRb-uiE"),$(n,v,47,16,1999),f(p,"class","text-xl mb-4 s-Uap-jPRb-uiE"),$(p,v,48,16,2073),f(R,"class","h-full s-Uap-jPRb-uiE"),J(R.src,M=F+"/images/smm_icon_white.webp")||f(R,"src",M),f(R,"alt","Satisfactory Mod Manager"),$(R,v,53,18,2327),f(g,"class","2xl:h-1/2 h-1/3 flex justify-center s-Uap-jPRb-uiE"),$(g,v,52,16,2259),f(l,"class","text-center s-Uap-jPRb-uiE"),$(l,v,46,14,1957),f(e,"class","flex absolute w-full h-full top-0 items-center justify-center s-Uap-jPRb-uiE"),$(e,v,39,12,1472),f(t,"class","relative h-full w-full s-Uap-jPRb-uiE"),$(t,v,37,10,1377)},m:function(j,V){S(j,t,V),d(t,s),d(t,a),d(t,e),D.m(e,null),d(e,i),d(e,l),d(l,n),d(n,o),d(l,u),d(l,p),d(p,E),U&&U.m(p,null),d(l,w),d(l,g),d(g,R),d(e,X),A.m(e,null)},p:function(j,V){P===(P=k(j))&&D?D.p(j,V):(D.d(1),D=P(j),D&&(D.c(),D.m(e,i))),j[2]||j[3]?U||(U=vt(j),U.c(),U.m(p,null)):U&&(U.d(1),U=null),B===(B=I(j))&&A?A.p(j,V):(A.d(1),A=B(j),A&&(A.c(),A.m(e,null)))},d:function(j){j&&m(t),D.d(),U&&U.d(),A.d()}};return q("SvelteRegisterBlock",{block:Q,id:ne.name,type:"slot",source:'(37:8) <Card class=\\"h-full\\">',ctx:r}),Q}function le(r){let t,s,a,e,i,l,n,o,u,p;const E={c:function(){t=h("div"),s=h("div"),a=W(),e=h("div"),i=h("img"),n=W(),o=h("div"),u=h("span"),p=Z("Community-run Modding Discord"),this.h()},l:function(g){t=b(g,"DIV",{class:!0});var R=y(t);s=b(R,"DIV",{class:!0}),y(s).forEach(m),a=C(R),e=b(R,"DIV",{class:!0});var M=y(e);i=b(M,"IMG",{class:!0,src:!0,alt:!0}),M.forEach(m),n=C(R),o=b(R,"DIV",{class:!0});var X=y(o);u=b(X,"SPAN",{class:!0});var k=y(u);p=z(k,"Community-run Modding Discord"),k.forEach(m),X.forEach(m),R.forEach(m),this.h()},h:function(){f(s,"class","modding-banner banner s-Uap-jPRb-uiE"),$(s,v,104,10,4553),f(i,"class","centered-logo s-Uap-jPRb-uiE"),J(i.src,l=F+"/images/sf_modding_logo.webp")||f(i,"src",l),f(i,"alt","Satisfactory Modding Logo"),$(i,v,106,12,4689),f(e,"class","flex absolute w-full h-full top-0 items-center justify-center s-Uap-jPRb-uiE"),$(e,v,105,10,4601),f(u,"class","s-Uap-jPRb-uiE"),$(u,v,109,12,4924),f(o,"class","absolute bottom-0 pb-4 px-4 w-full text-gray-400 text-center xl:text-left s-Uap-jPRb-uiE"),$(o,v,108,10,4824),f(t,"class","relative h-full w-full s-Uap-jPRb-uiE"),$(t,v,103,8,4506)},m:function(g,R){S(g,t,R),d(t,s),d(t,a),d(t,e),d(e,i),d(t,n),d(t,o),d(o,u),d(u,p)},p:T,d:function(g){g&&m(t)}};return q("SvelteRegisterBlock",{block:E,id:le.name,type:"slot",source:'(103:6) <Card class=\\"h-full\\">',ctx:r}),E}function oe(r){let t,s,a,e,i,l,n,o,u,p;const E={c:function(){t=h("div"),s=h("div"),a=W(),e=h("div"),i=h("img"),n=W(),o=h("div"),u=h("span"),p=Z("Official Website"),this.h()},l:function(g){t=b(g,"DIV",{class:!0});var R=y(t);s=b(R,"DIV",{class:!0}),y(s).forEach(m),a=C(R),e=b(R,"DIV",{class:!0});var M=y(e);i=b(M,"IMG",{class:!0,src:!0,alt:!0}),M.forEach(m),n=C(R),o=b(R,"DIV",{class:!0});var X=y(o);u=b(X,"SPAN",{class:!0});var k=y(u);p=z(k,"Official Website"),k.forEach(m),X.forEach(m),R.forEach(m),this.h()},h:function(){f(s,"class","css-banner banner s-Uap-jPRb-uiE"),$(s,v,117,10,5222),f(i,"class","centered-logo s-Uap-jPRb-uiE"),J(i.src,l=F+"/images/satisfactory_logo_full_color_small.webp")||f(i,"src",l),f(i,"alt","Satisfactory Logo"),$(i,v,119,12,5354),f(e,"class","flex absolute w-full h-full top-0 items-center justify-center s-Uap-jPRb-uiE"),$(e,v,118,10,5266),f(u,"class","s-Uap-jPRb-uiE"),$(u,v,126,12,5655),f(o,"class","absolute bottom-0 pb-4 px-4 w-full text-gray-300 text-center xl:text-right s-Uap-jPRb-uiE"),$(o,v,125,10,5554),f(t,"class","relative h-full w-full s-Uap-jPRb-uiE"),$(t,v,116,8,5175)},m:function(g,R){S(g,t,R),d(t,s),d(t,a),d(t,e),d(e,i),d(t,n),d(t,o),d(o,u),d(u,p)},p:T,d:function(g){g&&m(t)}};return q("SvelteRegisterBlock",{block:E,id:oe.name,type:"slot",source:'(116:6) <Card class=\\"h-full\\">',ctx:r}),E}function ae(r){let t,s,a=r[4].data.getMods.mods;gt(a);let e=[];for(let n=0;n<a.length;n+=1)e[n]=Rt(Mt(r,a,n));const i=n=>N(e[n],1,1,()=>{e[n]=null}),l={c:function(){t=h("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l:function(o){t=b(o,"DIV",{class:!0});var u=y(t);for(let p=0;p<e.length;p+=1)e[p].l(u);u.forEach(m),this.h()},h:function(){f(t,"class","grid "+xt+" gap-4 s-Uap-jPRb-uiE"),$(t,v,142,4,5978)},m:function(o,u){S(o,t,u);for(let p=0;p<e.length;p+=1)e[p].m(t,null);s=!0},p:function(o,u){if(u&16){a=o[4].data.getMods.mods,gt(a);let p;for(p=0;p<a.length;p+=1){const E=Mt(o,a,p);e[p]?(e[p].p(E,u),G(e[p],1)):(e[p]=Rt(E),e[p].c(),G(e[p],1),e[p].m(t,null))}for(ht(),p=a.length;p<e.length;p+=1)i(p);dt()}},i:function(o){if(!s){for(let u=0;u<a.length;u+=1)G(e[u]);s=!0}},o:function(o){e=e.filter(Boolean);for(let u=0;u<e.length;u+=1)N(e[u]);s=!1},d:function(o){o&&m(t),Wt(e,o)}};return q("SvelteRegisterBlock",{block:l,id:ae.name,type:"else",source:"(142:2) {:else}",ctx:r}),l}function re(r){let t,s,a=r[4].error.message+"",e;const i={c:function(){t=h("p"),s=Z("Oh no... "),e=Z(a),this.h()},l:function(n){t=b(n,"P",{class:!0});var o=y(t);s=z(o,"Oh no... "),e=z(o,a),o.forEach(m),this.h()},h:function(){f(t,"class","s-Uap-jPRb-uiE"),$(t,v,140,4,5926)},m:function(n,o){S(n,t,o),d(t,s),d(t,e)},p:function(n,o){o&16&&a!==(a=n[4].error.message+"")&&Ct(e,a)},i:T,o:T,d:function(n){n&&m(t)}};return q("SvelteRegisterBlock",{block:i,id:re.name,type:"if",source:"(140:24) ",ctx:r}),i}function ce(r){let t,s,a=Array(4);gt(a);let e=[];for(let l=0;l<a.length;l+=1)e[l]=fe(he(r,a,l));const i={c:function(){t=h("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l:function(n){t=b(n,"DIV",{class:!0});var o=y(t);for(let u=0;u<e.length;u+=1)e[u].l(o);o.forEach(m),this.h()},h:function(){f(t,"class","grid "+xt+" gap-4 s-Uap-jPRb-uiE"),$(t,v,134,4,5777)},m:function(n,o){S(n,t,o);for(let u=0;u<e.length;u+=1)e[u].m(t,null);s=!0},p:T,i:function(n){if(!s){for(let o=0;o<a.length;o+=1)G(e[o]);s=!0}},o:function(n){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)N(e[o]);s=!1},d:function(n){n&&m(t),Wt(e,n)}};return q("SvelteRegisterBlock",{block:i,id:ce.name,type:"if",source:"(134:2) {#if $mods.fetching}",ctx:r}),i}function Rt(r){let t,s;t=new Ot({props:{mod:r[8]},$$inline:!0});const a={c:function(){tt(t.$$.fragment)},l:function(i){et(t.$$.fragment,i)},m:function(i,l){st(t,i,l),s=!0},p:function(i,l){const n={};l&16&&(n.mod=i[8]),t.$set(n)},i:function(i){s||(G(t.$$.fragment,i),s=!0)},o:function(i){N(t.$$.fragment,i),s=!1},d:function(i){it(t,i)}};return q("SvelteRegisterBlock",{block:a,id:Rt.name,type:"each",source:"(144:6) {#each $mods.data.getMods.mods as mod}",ctx:r}),a}function fe(r){let t,s;t=new Ft({props:{fake:!0},$$inline:!0});const a={c:function(){tt(t.$$.fragment)},l:function(i){et(t.$$.fragment,i)},m:function(i,l){st(t,i,l),s=!0},p:T,i:function(i){s||(G(t.$$.fragment,i),s=!0)},o:function(i){N(t.$$.fragment,i),s=!1},d:function(i){it(t,i)}};return q("SvelteRegisterBlock",{block:a,id:fe.name,type:"each",source:"(136:6) {#each Array(4) as _}",ctx:r}),a}function Et(r){let t,s,a,e,i,l,n,o,u,p,E,w,g,R,M,X,k,P,D;t=new Nt({props:{description:"Satisfactory Mod Repository",title:"Home"},$$inline:!0}),a=new Tt({props:{dogVisible:rt},$$inline:!0});const U=[zt,Zt],I=[];function B(V,c){return V[1]?1:0}n=B(r),o=I[n]=U[n](r),w=new at({props:{class:"h-full",$$slots:{default:[le]},$$scope:{ctx:r}},$$inline:!0}),M=new at({props:{class:"h-full",$$slots:{default:[oe]},$$scope:{ctx:r}},$$inline:!0});const A=[ce,re,ae],Q=[];function L(V,c){return V[4].fetching?0:V[4].error?1:2}k=L(r),P=Q[k]=A[k](r);const j={c:function(){tt(t.$$.fragment),s=W(),tt(a.$$.fragment),e=W(),i=h("div"),l=h("div"),o.c(),u=W(),p=h("div"),E=h("a"),tt(w.$$.fragment),g=W(),R=h("a"),tt(M.$$.fragment),X=W(),P.c(),this.h()},l:function(c){const x=me('[data-svelte="svelte-uhqw2p"]',document.head);et(t.$$.fragment,x),x.forEach(m),s=C(c),et(a.$$.fragment,c),e=C(c),i=b(c,"DIV",{class:!0,style:!0});var _=y(i);l=b(_,"DIV",{class:!0});var O=y(l);o.l(O),O.forEach(m),u=C(_),p=b(_,"DIV",{class:!0});var H=y(p);E=b(H,"A",{href:!0,rel:!0,target:!0,class:!0});var Y=y(E);et(w.$$.fragment,Y),Y.forEach(m),g=C(H),R=b(H,"A",{href:!0,rel:!0,target:!0,class:!0});var nt=y(R);et(M.$$.fragment,nt),nt.forEach(m),H.forEach(m),X=C(_),P.l(_),_.forEach(m),this.h()},h:function(){f(l,"class","mb-4 min-h-[25vh] overflow-hidden s-Uap-jPRb-uiE"),$(l,v,33,2,1197),f(E,"href","https://discord.gg/xkVJ73E"),f(E,"rel","noopener"),f(E,"target","_blank"),f(E,"class","overflow-hidden min-h-[25vh] s-Uap-jPRb-uiE"),$(E,v,101,4,4364),f(R,"href","https://www.satisfactorygame.com/"),f(R,"rel","noopener"),f(R,"target","_blank"),f(R,"class","overflow-hidden min-h-[25vh] s-Uap-jPRb-uiE"),$(R,v,114,4,5026),f(p,"class","grid xl:grid-cols-2 grid-cols-1 gap-4 flex-1 mb-4 s-Uap-jPRb-uiE"),$(p,v,100,2,4296),f(i,"class","flex flex-col min-h-full s-Uap-jPRb-uiE"),K(i,"height","calc(100vh - 64px - 3rem)"),$(i,v,32,0,1114)},m:function(c,x){st(t,document.head,null),S(c,s,x),st(a,c,x),S(c,e,x),S(c,i,x),d(i,l),I[n].m(l,null),d(i,u),d(i,p),d(p,E),st(w,E,null),d(p,g),d(p,R),st(M,R,null),d(i,X),Q[k].m(i,null),D=!0},p:function(c,[x]){let _=n;n=B(c),n===_?I[n].p(c,x):(ht(),N(I[_],1,1,()=>{I[_]=null}),dt(),o=I[n],o?o.p(c,x):(o=I[n]=U[n](c),o.c()),G(o,1),o.m(l,null));const O={};x&2048&&(O.$$scope={dirty:x,ctx:c}),w.$set(O);const H={};x&2048&&(H.$$scope={dirty:x,ctx:c}),M.$set(H);let Y=k;k=L(c),k===Y?Q[k].p(c,x):(ht(),N(Q[Y],1,1,()=>{Q[Y]=null}),dt(),P=Q[k],P?P.p(c,x):(P=Q[k]=A[k](c),P.c()),G(P,1),P.m(i,null))},i:function(c){D||(G(t.$$.fragment,c),G(a.$$.fragment,c),G(o),G(w.$$.fragment,c),G(M.$$.fragment,c),G(P),D=!0)},o:function(c){N(t.$$.fragment,c),N(a.$$.fragment,c),N(o),N(w.$$.fragment,c),N(M.$$.fragment,c),N(P),D=!1},d:function(c){it(t),c&&m(s),it(a,c),c&&m(e),c&&m(i),I[n].d(),it(w),it(M),Q[k].d()}};return q("SvelteRegisterBlock",{block:j,id:Et.name,type:"component",source:"",ctx:r}),j}const ue=Bt(Gt,{offset:0,limit:4,order:Xt.Desc,orderBy:Qt.LastVersionDate}),be=Lt({mods:ue}),xt="3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1";function $e(r,t,s){let a,e,i,l,n=T,o=()=>(n(),n=qt(E,g=>s(4,l=g)),E);lt(pt,"onMobile"),ot(r,pt,g=>s(1,a=g)),lt(mt,"easterEgg"),ot(r,mt,g=>s(2,e=g)),lt(rt,"doggoNeedsPats"),ot(r,rt,g=>s(3,i=g)),r.$$.on_destroy.push(()=>n());let{$$slots:u={},$$scope:p}=t;St("Routes",u,[]);let{mods:E}=t;lt(E,"mods"),o();const w=["mods"];return Object.keys(t).forEach(g=>{!~w.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&console.warn(`<Routes> was created with unknown prop '${g}'`)}),r.$$set=g=>{"mods"in g&&o(s(0,E=g.mods))},r.$capture_state=()=>({operationStore:Bt,GetModsDocument:Gt,ModFields:Qt,Order:Xt,loadWaitForNoFetch:Lt,modsQ:ue,load:be,MetaDescriptors:Nt,FicsitCard:Ft,ModCard:Ot,Doggo:Tt,Card:at,assets:F,Button:At,onMobile:pt,easterEgg:mt,doggoNeedsPats:rt,mods:E,gridClasses:xt,$onMobile:a,$easterEgg:e,$doggoNeedsPats:i,$mods:l}),r.$inject_state=g=>{"mods"in g&&o(s(0,E=g.mods))},t&&"$$inject"in t&&r.$inject_state(t.$$inject),[E,a,e,i,l]}class qe extends Dt{constructor(t){super(t),Vt(this,t,$e,Et,It,{mods:0}),q("SvelteRegisterComponent",{component:this,tagName:"Routes",options:t,id:Et.name});const{ctx:s}=this.$$,a=t.props||{};s[0]===void 0&&!("mods"in a)&&console.warn("<Routes> was created without expected prop 'mods'")}get mods(){throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set mods(t){throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{qe as default,be as load};
//# sourceMappingURL=index.svelte-a33bd89b.js.map
