import{G as Dt,S as nt,i as ot,s as it,d as U,v as rt,H as me,aK as Be,I as ye,ae as J,w as Ee,f as et,n as O,V as Pe,u as fe,j as h,a0 as It,x as je,aJ as Ae,e as g,g as p,N as a,aD as tt,as as se,l as ie,m as v,aa as lt,P as De,b as A,X as Q,a4 as Mt,Q as Ie,k as j,h as w,Y as Z,T as Me,U as u,Z as ce,t as he,q as ct,r as ae,W as Se,O as Le,p as at,_ as ft}from"../chunks/vendor.BrZETyhx.js";import{x as St,O as Rt,M as Bt}from"../chunks/graphql.CNu7qPRc.js";import{l as Pt}from"../chunks/gql.DGDorg1Q.js";import{M as ut}from"../chunks/MetaDescriptors.jA_Um1p_.js";import{F as dt}from"../chunks/FicsitCard.BMRm_xoj.js";import{M as ht}from"../chunks/ModCard.U_5CnS57.js";const At=async({parent:s})=>({...await Pt({mods:Dt({query:St,client:(await s()).client,variables:{offset:0,limit:4,order:Rt.Desc,orderBy:Bt.LastVersionDate}})})}),Ut=Object.freeze(Object.defineProperty({__proto__:null,load:At},Symbol.toStringTag,{value:"Module"})),jt="src/lib/components/general/Doggo.svelte";function Ge(s){let e,l,n;const t={c:function(){e=g("img"),this.h()},l:function(i){e=p(i,"IMG",{class:!0,src:!0,alt:!0,title:!0,style:!0}),this.h()},h:function(){a(e,"class",l=tt("doggo-flipper h-full"+(s[1]?"-R":"-L"))+" svelte-k5o0wz"),se(e.src,n=s[4])||a(e,"src",n),a(e,"alt","Doggo!"),a(e,"title","Click to pat doggo!"),ie(e,"width","200px"),ie(e,"height","auto"),ie(e,"position","absolute"),ie(e,"top",s[2]+"px"),ie(e,"left",s[3]+"px"),ie(e,"z-index","69"),v(e,jt,57,2,1531)},m:function(i,r){O(i,e,r)},p:function(i,r){r&2&&l!==(l=tt("doggo-flipper h-full"+(i[1]?"-R":"-L"))+" svelte-k5o0wz")&&a(e,"class",l),r&16&&!se(e.src,n=i[4])&&a(e,"src",n),r&4&&ie(e,"top",i[2]+"px"),r&8&&ie(e,"left",i[3]+"px")},d:function(i){i&&h(e)}};return U("SvelteRegisterBlock",{block:t,id:Ge.name,type:"if",source:"(48:0) {#if $dogVisible}",ctx:s}),t}function Ne(s){let e,l,n,t=s[5]&&Ge(s);const o={c:function(){t&&t.c(),e=et()},l:function(r){t&&t.l(r),e=et()},m:function(r,c){t&&t.m(r,c),O(r,e,c),l||(n=[Pe(window,"mousedown",s[9],!1,!1,!1,!1),Pe(window,"mousemove",s[8],!1,!1,!1,!1),Pe(window,"mouseup",s[10],!1,!1,!1,!1)],l=!0)},p:function(r,[c]){r[5]?t?t.p(r,c):(t=Ge(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:fe,o:fe,d:function(r){r&&h(e),t&&t.d(r),l=!1,It(n)}};return U("SvelteRegisterBlock",{block:o,id:Ne.name,type:"component",source:"",ctx:s}),o}function Lt(s,e,l){let n,t,o,i,r,c,f,d,y,_,S=fe,N=()=>(S(),S=je(V,m=>l(5,_=m)),V);s.$$.on_destroy.push(()=>S());let{$$slots:R={},$$scope:M}=e;rt("Doggo",R,[]);let{dogVisible:V=Ee(!1)}=e;me(V,"dogVisible"),N();const b=Be(-2e3,{stiffness:.004,damping:.25,precision:1});me(b,"x"),ye(s,b,m=>l(3,y=m));const L=Be(-1e3,{stiffness:.004,damping:.25,precision:1});me(L,"y"),ye(s,L,m=>l(2,d=m));let z=J+"/images/dog_stand.gif",T={clientX:-1e3,clientY:0},D=!1;function x(m){!D&&V&&l(11,T=m)}function q(){l(4,z=J+"/images/dog_aw_yis_pats.gif"),D=!0}function P(){r&&q()}async function I(){D&&(l(4,z=J+"/images/dog_boing.gif"),l(12,n=3e3),setTimeout(()=>{Ae(V,_=!1,_),Ae(b,y=-2e3,y),Ae(L,d=-1e3,d),D=!1},700))}const W=["dogVisible"];return Object.keys(e).forEach(m=>{!~W.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<Doggo> was created with unknown prop '${m}'`)}),s.$$set=m=>{"dogVisible"in m&&N(l(0,V=m.dogVisible))},s.$capture_state=()=>({spring:Be,assets:J,writable:Ee,dogVisible:V,x:b,y:L,sprite:z,last_mouse:T,patting:D,update_pos:x,pat:q,try_pat:P,end_pat:I,actual_mouse_x:n,isClose:r,actual_mouse_y:t,head_offset:f,isLookingRight:c,dy:i,dx:o,$y:d,$x:y,$dogVisible:_}),s.$inject_state=m=>{"dogVisible"in m&&N(l(0,V=m.dogVisible)),"sprite"in m&&l(4,z=m.sprite),"last_mouse"in m&&l(11,T=m.last_mouse),"patting"in m&&(D=m.patting),"actual_mouse_x"in m&&l(12,n=m.actual_mouse_x),"isClose"in m&&l(13,r=m.isClose),"actual_mouse_y"in m&&l(14,t=m.actual_mouse_y),"head_offset"in m&&l(15,f=m.head_offset),"isLookingRight"in m&&l(1,c=m.isLookingRight),"dy"in m&&l(16,i=m.dy),"dx"in m&&l(17,o=m.dx)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&2048&&l(12,n=T.clientX-350),s.$$.dirty&2048&&l(14,t=T.clientY-100),s.$$.dirty&4104&&l(17,o=Math.abs(y-n)),s.$$.dirty&16388&&l(16,i=Math.abs(d-t)),s.$$.dirty&196608&&l(13,r=o<80&&i<40),s.$$.dirty&4104&&l(1,c=y<n),s.$$.dirty&8192&&l(4,z=J+("/images/dog_"+(r?"stand.gif":"boing.gif"))),s.$$.dirty&2&&l(15,f=c?-70:50),s.$$.dirty&36864&&b.set(n+f),s.$$.dirty&16384&&L.set(t)},[V,c,d,y,z,_,b,L,x,P,I,T,n,r,t,f,i,o]}class mt extends nt{constructor(e){super(e),ot(this,e,Lt,Ne,it,{dogVisible:0}),U("SvelteRegisterComponent",{component:this,tagName:"Doggo",options:e,id:Ne.name})}get dogVisible(){throw new Error("<Doggo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set dogVisible(e){throw new Error("<Doggo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}let Re;Re=window.matchMedia("(min-width: 1280px)");const xe=Ee(Re&&!Re.matches),_e=Ee(!1),Ve=Ee(!1);Re.addEventListener("change",s=>{xe&&xe.set(!s.matches)});{const s=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA","Space"],e=[];window.onkeyup=l=>{if(e.push(l.code),e.length>s.length&&e.shift(),e.length==s.length){let n=!0;for(let t=0;t<s.length;t++)if(s[t]!==e[t]){n=!1;break}n&&Ve.set(!0)}l.code=="KeyD"&&_e.set(!0)}}const $="src/routes/+page.svelte";function st(s,e,l){const n=s.slice();return n[11]=e[l],n}function Gt(s,e,l){const n=s.slice();return n[8]=e[l],n}function gt(s){let e,l,n,t,o,i,r,c,f,d,y,_,S=s[4]("home.banner.we-have-over")+"",N,R,M,V,b=s[4]("home.banner.mods")+"",L,z,T,D,x=s[4]("home.banner.most-are-compatible")+"",q,P,I,W,m=s[4]("home.banner.take-a-look")+"",E;function te(C,G){return C[6].fetching||C[6].error?$t:vt}let ne=te(s),B=ne(s);const Y={c:function(){e=g("a"),l=g("div"),n=g("div"),t=g("div"),o=A(),i=g("div"),r=g("img"),f=A(),d=g("div"),y=g("div"),_=g("div"),N=Q(S),R=A(),M=g("span"),B.c(),V=A(),L=Q(b),z=Q("!"),T=A(),D=g("div"),q=Q(x),P=A(),I=g("div"),W=g("button"),E=Q(m),this.h()},l:function(G){e=p(G,"A",{href:!0,class:!0});var X=w(e);l=p(X,"DIV",{class:!0});var H=w(l);n=p(H,"DIV",{class:!0});var F=w(n);t=p(F,"DIV",{class:!0}),w(t).forEach(h),o=j(F),i=p(F,"DIV",{class:!0});var ue=w(i);r=p(ue,"IMG",{class:!0,src:!0,alt:!0}),ue.forEach(h),f=j(F),d=p(F,"DIV",{class:!0});var ve=w(d);y=p(ve,"DIV",{});var de=w(y);_=p(de,"DIV",{class:!0});var K=w(_);N=Z(K,S),R=j(K),M=p(K,"SPAN",{class:!0});var $e=w(M);B.l($e),$e.forEach(h),V=j(K),L=Z(K,b),z=Z(K,"!"),K.forEach(h),T=j(de),D=p(de,"DIV",{class:!0});var oe=w(D);q=Z(oe,x),oe.forEach(h),de.forEach(h),ve.forEach(h),P=j(F),I=p(F,"DIV",{class:!0});var be=w(I);W=p(be,"BUTTON",{class:!0,style:!0});var we=w(W);E=Z(we,m),we.forEach(h),be.forEach(h),F.forEach(h),H.forEach(h),X.forEach(h),this.h()},h:function(){a(t,"class","smm-banner banner svelte-eofvo5"),v(t,$,63,12,2710),a(r,"class","h-full"),se(r.src,c=J+"/images/mods_mobile.webp")||a(r,"src",c),a(r,"alt","Ficsit Minion"),v(r,$,65,14,2855),a(i,"class","absolute top-0 flex h-full w-full items-center justify-end text-center"),v(i,$,64,12,2756),a(M,"class","font-bold text-amber-600"),v(M,$,71,18,3163),a(_,"class","text-md"),v(_,$,69,16,3072),a(D,"class","text-md max-w-prose"),v(D,$,80,16,3497),v(y,$,68,14,3050),a(d,"class","absolute top-0 flex h-4/5 w-full items-center pl-8"),v(d,$,67,12,2971),a(W,"class","btn h-1/4 w-full px-14 py-3"),ie(W,"background","#5a7b78"),ie(W,"color","white"),v(W,$,84,14,3715),a(I,"class","absolute top-0 flex h-full w-full items-end justify-center"),v(I,$,83,12,3628),a(n,"class","relative h-full w-full"),v(n,$,62,10,2661),a(l,"class","card h-full"),v(l,$,61,8,2625),a(e,"href","/mods"),a(e,"class","overflow-hidden"),v(e,$,60,6,2576)},m:function(G,X){O(G,e,X),u(e,l),u(l,n),u(n,t),u(n,o),u(n,i),u(i,r),u(n,f),u(n,d),u(d,y),u(y,_),u(_,N),u(_,R),u(_,M),B.m(M,null),u(_,V),u(_,L),u(_,z),u(y,T),u(y,D),u(D,q),u(n,P),u(n,I),u(I,W),u(W,E)},p:function(G,X){X&16&&S!==(S=G[4]("home.banner.we-have-over")+"")&&ce(N,S),ne===(ne=te(G))&&B?B.p(G,X):(B.d(1),B=ne(G),B&&(B.c(),B.m(M,null))),X&16&&b!==(b=G[4]("home.banner.mods")+"")&&ce(L,b),X&16&&x!==(x=G[4]("home.banner.most-are-compatible")+"")&&ce(q,x),X&16&&m!==(m=G[4]("home.banner.take-a-look")+"")&&ce(E,m)},d:function(G){G&&h(e),B.d()}};return U("SvelteRegisterBlock",{block:Y,id:gt.name,type:"else",source:"(54:4) {:else}",ctx:s}),Y}function pt(s){let e,l,n,t,o,i,r,c,f,d=s[4]("home.satisfactory-mod-manager")+"",y,_,S,N,R,M,V,b,L;function z(m,E){return m[3]?wt:bt}let T=z(s),D=T(s),x=(s[3]||s[5])&&Ce(s);function q(m,E){return m[3]?xt:yt}let P=q(s),I=P(s);const W={c:function(){e=g("a"),l=g("div"),n=g("div"),t=g("div"),o=A(),i=g("div"),D.c(),r=A(),c=g("div"),f=g("div"),y=Q(d),_=A(),S=g("div"),N=Q(`Windows - Linux - Epic - Steam
                  `),x&&x.c(),R=A(),M=g("div"),V=g("img"),L=A(),I.c(),this.h()},l:function(E){e=p(E,"A",{href:!0,rel:!0,target:!0});var te=w(e);l=p(te,"DIV",{class:!0});var ne=w(l);n=p(ne,"DIV",{class:!0});var B=w(n);t=p(B,"DIV",{class:!0}),w(t).forEach(h),o=j(B),i=p(B,"DIV",{class:!0});var Y=w(i);D.l(Y),r=j(Y),c=p(Y,"DIV",{class:!0});var C=w(c);f=p(C,"DIV",{class:!0});var G=w(f);y=Z(G,d),G.forEach(h),_=j(C),S=p(C,"DIV",{class:!0});var X=w(S);N=Z(X,`Windows - Linux - Epic - Steam
                  `),x&&x.l(X),X.forEach(h),R=j(C),M=p(C,"DIV",{class:!0});var H=w(M);V=p(H,"IMG",{class:!0,src:!0,alt:!0}),H.forEach(h),C.forEach(h),L=j(Y),I.l(Y),Y.forEach(h),B.forEach(h),ne.forEach(h),te.forEach(h),this.h()},h:function(){a(t,"class","banner smm-banner svelte-eofvo5"),v(t,$,31,12,1052),a(f,"class","mb-2 text-4xl"),v(f,$,40,16,1625),a(S,"class","mb-4 text-xl"),v(S,$,41,16,1712),a(V,"class","h-full"),se(V.src,b=J+"/images/smm_icon_white.webp")||a(V,"src",b),a(V,"alt","Satisfactory Mod Manager"),v(V,$,46,18,1966),a(M,"class","flex h-1/3 justify-center 2xl:h-1/2"),v(M,$,45,16,1898),a(c,"class","text-center"),v(c,$,39,14,1583),a(i,"class","absolute top-0 flex h-full w-full items-center justify-center"),v(i,$,32,12,1098),a(n,"class","relative h-full w-full"),v(n,$,30,10,1003),a(l,"class","card h-full"),v(l,$,29,8,967),a(e,"href","https://smm.ficsit.app"),a(e,"rel","noopener"),a(e,"target","_blank"),v(e,$,28,6,894)},m:function(E,te){O(E,e,te),u(e,l),u(l,n),u(n,t),u(n,o),u(n,i),D.m(i,null),u(i,r),u(i,c),u(c,f),u(f,y),u(c,_),u(c,S),u(S,N),x&&x.m(S,null),u(c,R),u(c,M),u(M,V),u(i,L),I.m(i,null)},p:function(E,te){T!==(T=z(E))&&(D.d(1),D=T(E),D&&(D.c(),D.m(i,r))),te&16&&d!==(d=E[4]("home.satisfactory-mod-manager")+"")&&ce(y,d),E[3]||E[5]?x||(x=Ce(E),x.c(),x.m(S,null)):x&&(x.d(1),x=null),P!==(P=q(E))&&(I.d(1),I=P(E),I&&(I.c(),I.m(i,null)))},d:function(E){E&&h(e),D.d(),x&&x.d(),I.d()}};return U("SvelteRegisterBlock",{block:W,id:pt.name,type:"if",source:"(22:4) {#if !$onMobile}",ctx:s}),W}function vt(s){let e=s[6].data.getMods.count+"",l;const n={c:function(){l=Q(e)},l:function(o){l=Z(o,e)},m:function(o,i){O(o,l,i)},p:function(o,i){i&64&&e!==(e=o[6].data.getMods.count+"")&&ce(l,e)},d:function(o){o&&h(l)}};return U("SvelteRegisterBlock",{block:n,id:vt.name,type:"else",source:"(69:20) {:else}",ctx:s}),n}function $t(s){let e;const l={c:function(){e=Q("...")},l:function(t){e=Z(t,"...")},m:function(t,o){O(t,e,o)},p:fe,d:function(t){t&&h(e)}};return U("SvelteRegisterBlock",{block:l,id:$t.name,type:"if",source:"(67:20) {#if $mods.fetching || $mods.error}",ctx:s}),l}function bt(s){let e,l;const n={c:function(){e=g("img"),this.h()},l:function(o){e=p(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","flipped h-full svelte-eofvo5"),se(e.src,l=J+"/images/smm_hand.webp")||a(e,"src",l),a(e,"alt","Ficsit Minion"),v(e,$,37,16,1459)},m:function(o,i){O(o,e,i)},d:function(o){o&&h(e)}};return U("SvelteRegisterBlock",{block:n,id:bt.name,type:"else",source:"(31:14) {:else}",ctx:s}),n}function wt(s){let e,l,n,t,o;const i={c:function(){e=g("img"),n=A(),t=g("img"),this.h()},l:function(c){e=p(c,"IMG",{class:!0,src:!0,alt:!0}),n=j(c),t=p(c,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","flipper-1 h-full svelte-eofvo5"),se(e.src,l=J+"/images/smm_hand.webp")||a(e,"src",l),a(e,"alt","Ficsit Minion"),v(e,$,34,16,1221),a(t,"class","flipper-2 h-full svelte-eofvo5"),se(t.src,o=J+"/images/smm_hand.webp")||a(t,"src",o),a(t,"alt","Ficsit Minion"),v(t,$,35,16,1329)},m:function(c,f){O(c,e,f),O(c,n,f),O(c,t,f)},d:function(c){c&&(h(e),h(n),h(t))}};return U("SvelteRegisterBlock",{block:i,id:wt.name,type:"if",source:"(28:14) {#if $easterEgg}",ctx:s}),i}function Ce(s){let e=" - Doggo",l;const n={c:function(){l=Q(e)},l:function(o){l=Z(o,e)},m:function(o,i){O(o,l,i)},d:function(o){o&&h(l)}};return U("SvelteRegisterBlock",{block:n,id:Ce.name,type:"if",source:"(38:18) {#if $easterEgg || $doggoNeedsPats}",ctx:s}),n}function yt(s){let e,l;const n={c:function(){e=g("img"),this.h()},l:function(o){e=p(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","h-full"),se(e.src,l=J+"/images/smm_hand.webp")||a(e,"src",l),a(e,"alt","Ficsit Minion"),v(e,$,53,16,2394)},m:function(o,i){O(o,e,i)},d:function(o){o&&h(e)}};return U("SvelteRegisterBlock",{block:n,id:yt.name,type:"else",source:"(47:14) {:else}",ctx:s}),n}function xt(s){let e,l,n,t,o;const i={c:function(){e=g("img"),n=A(),t=g("img"),this.h()},l:function(c){e=p(c,"IMG",{class:!0,src:!0,alt:!0}),n=j(c),t=p(c,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){a(e,"class","flipper-3 h-full svelte-eofvo5"),se(e.src,l=J+"/images/smm_hand.webp")||a(e,"src",l),a(e,"alt","Ficsit Minion"),v(e,$,50,16,2156),a(t,"class","flipper-4 h-full svelte-eofvo5"),se(t.src,o=J+"/images/smm_hand.webp")||a(t,"src",o),a(t,"alt","Ficsit Minion"),v(t,$,51,16,2264)},m:function(c,f){O(c,e,f),O(c,n,f),O(c,t,f)},d:function(c){c&&(h(e),h(n),h(t))}};return U("SvelteRegisterBlock",{block:i,id:xt.name,type:"if",source:"(44:14) {#if $easterEgg}",ctx:s}),i}function _t(s){let e,l,n=Le(s[6].data.getMods.mods),t=[];for(let r=0;r<n.length;r+=1)t[r]=Fe(st(s,n,r));const o=r=>he(t[r],1,1,()=>{t[r]=null}),i={c:function(){e=g("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l:function(c){e=p(c,"DIV",{class:!0});var f=w(e);for(let d=0;d<t.length;d+=1)t[d].l(f);f.forEach(h),this.h()},h:function(){a(e,"class","grid "+Te+" gap-4 svelte-eofvo5"),v(e,$,135,4,5683)},m:function(c,f){O(c,e,f);for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(e,null);l=!0},p:function(c,f){if(f&64){n=Le(c[6].data.getMods.mods);let d;for(d=0;d<n.length;d+=1){const y=st(c,n,d);t[d]?(t[d].p(y,f),ae(t[d],1)):(t[d]=Fe(y),t[d].c(),ae(t[d],1),t[d].m(e,null))}for(at(),d=n.length;d<t.length;d+=1)o(d);ct()}},i:function(c){if(!l){for(let f=0;f<n.length;f+=1)ae(t[f]);l=!0}},o:function(c){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)he(t[f]);l=!1},d:function(c){c&&h(e),ft(t,c)}};return U("SvelteRegisterBlock",{block:i,id:_t.name,type:"else",source:"(129:2) {:else}",ctx:s}),i}function Et(s){let e,l=s[4]("error.oh-no")+"",n,t,o=s[6].error.message+"",i;const r={c:function(){e=g("p"),n=Q(l),t=A(),i=Q(o),this.h()},l:function(f){e=p(f,"P",{});var d=w(e);n=Z(d,l),t=j(d),i=Z(d,o),d.forEach(h),this.h()},h:function(){v(e,$,133,4,5620)},m:function(f,d){O(f,e,d),u(e,n),u(e,t),u(e,i)},p:function(f,d){d&16&&l!==(l=f[4]("error.oh-no")+"")&&ce(n,l),d&64&&o!==(o=f[6].error.message+"")&&ce(i,o)},i:fe,o:fe,d:function(f){f&&h(e)}};return U("SvelteRegisterBlock",{block:r,id:Et.name,type:"if",source:"(127:24) ",ctx:s}),r}function kt(s){let e,l,n=Le(Array(4)),t=[];for(let i=0;i<n.length;i+=1)t[i]=Vt(Gt(s,n,i));const o={c:function(){e=g("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l:function(r){e=p(r,"DIV",{class:!0});var c=w(e);for(let f=0;f<t.length;f+=1)t[f].l(c);c.forEach(h),this.h()},h:function(){a(e,"class","grid "+Te+" gap-4 svelte-eofvo5"),v(e,$,127,4,5471)},m:function(r,c){O(r,e,c);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);l=!0},p:fe,i:function(r){if(!l){for(let c=0;c<n.length;c+=1)ae(t[c]);l=!0}},o:function(r){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)he(t[c]);l=!1},d:function(r){r&&h(e),ft(t,r)}};return U("SvelteRegisterBlock",{block:o,id:kt.name,type:"if",source:"(121:2) {#if $mods.fetching}",ctx:s}),o}function Fe(s){let e,l;e=new ht({props:{mod:s[11]},$$inline:!0});const n={c:function(){De(e.$$.fragment)},l:function(o){Ie(e.$$.fragment,o)},m:function(o,i){Me(e,o,i),l=!0},p:function(o,i){const r={};i&64&&(r.mod=o[11]),e.$set(r)},i:function(o){l||(ae(e.$$.fragment,o),l=!0)},o:function(o){he(e.$$.fragment,o),l=!1},d:function(o){Se(e,o)}};return U("SvelteRegisterBlock",{block:n,id:Fe.name,type:"each",source:"(131:6) {#each $mods.data.getMods.mods as mod}",ctx:s}),n}function Vt(s){let e,l;e=new dt({props:{fake:!0},$$inline:!0});const n={c:function(){De(e.$$.fragment)},l:function(o){Ie(e.$$.fragment,o)},m:function(o,i){Me(e,o,i),l=!0},p:fe,i:function(o){l||(ae(e.$$.fragment,o),l=!0)},o:function(o){he(e.$$.fragment,o),l=!1},d:function(o){Se(e,o)}};return U("SvelteRegisterBlock",{block:n,id:Vt.name,type:"each",source:"(123:6) {#each Array(4) as _}",ctx:s}),n}function Oe(s){let e,l,n,t,o,i,r,c,f,d,y,_,S,N,R,M,V,b,L,z=s[4]("home.banner.community-run-discord")+"",T,D,x,q,P,I,W,m,E,te,ne,B,Y,C=s[4]("home.banner.official-website")+"",G,X,H,F,ue;e=new ut({props:{description:"Satisfactory Mod Repository",title:"Home"},$$inline:!0}),n=new mt({props:{dogVisible:_e},$$inline:!0});function ve(le,k){return le[2]?gt:pt}let de=ve(s),K=de(s);const $e=[kt,Et,_t],oe=[];function be(le,k){return le[6].fetching?0:le[6].error?1:2}H=be(s),F=oe[H]=$e[H](s);const we={c:function(){De(e.$$.fragment),l=A(),De(n.$$.fragment),t=A(),o=g("div"),i=g("div"),K.c(),r=A(),c=g("div"),f=g("a"),d=g("div"),y=g("div"),_=g("div"),S=A(),N=g("div"),R=g("img"),V=A(),b=g("div"),L=g("span"),T=Q(z),D=A(),x=g("a"),q=g("div"),P=g("div"),I=g("div"),W=A(),m=g("div"),E=g("img"),ne=A(),B=g("div"),Y=g("span"),G=Q(C),X=A(),F.c(),this.h()},l:function(k){const ee=Mt("svelte-uhqw2p",document.head);Ie(e.$$.fragment,ee),ee.forEach(h),l=j(k),Ie(n.$$.fragment,k),t=j(k),o=p(k,"DIV",{class:!0,style:!0});var re=w(o);i=p(re,"DIV",{class:!0});var ze=w(i);K.l(ze),ze.forEach(h),r=j(re),c=p(re,"DIV",{class:!0});var ke=w(c);f=p(ke,"A",{href:!0,rel:!0,target:!0,class:!0});var Ke=w(f);d=p(Ke,"DIV",{class:!0});var Ue=w(d);y=p(Ue,"DIV",{class:!0});var ge=w(y);_=p(ge,"DIV",{class:!0}),w(_).forEach(h),S=j(ge),N=p(ge,"DIV",{class:!0});var qe=w(N);R=p(qe,"IMG",{class:!0,src:!0,alt:!0}),qe.forEach(h),V=j(ge),b=p(ge,"DIV",{class:!0});var We=w(b);L=p(We,"SPAN",{});var Xe=w(L);T=Z(Xe,z),Xe.forEach(h),We.forEach(h),ge.forEach(h),Ue.forEach(h),Ke.forEach(h),D=j(ke),x=p(ke,"A",{href:!0,rel:!0,target:!0,class:!0});var He=w(x);q=p(He,"DIV",{class:!0});var Ye=w(q);P=p(Ye,"DIV",{class:!0});var pe=w(P);I=p(pe,"DIV",{class:!0}),w(I).forEach(h),W=j(pe),m=p(pe,"DIV",{class:!0});var Je=w(m);E=p(Je,"IMG",{class:!0,src:!0,alt:!0}),Je.forEach(h),ne=j(pe),B=p(pe,"DIV",{class:!0});var Qe=w(B);Y=p(Qe,"SPAN",{});var Ze=w(Y);G=Z(Ze,C),Ze.forEach(h),Qe.forEach(h),pe.forEach(h),Ye.forEach(h),He.forEach(h),ke.forEach(h),X=j(re),F.l(re),re.forEach(h),this.h()},h:function(){a(i,"class","mb-4 min-h-[25vh] overflow-hidden"),v(i,$,26,2,819),a(_,"class","modding-banner banner svelte-eofvo5"),v(_,$,98,10,4219),a(R,"class","centered-logo svelte-eofvo5"),se(R.src,M=J+"/images/sf_modding_logo.webp")||a(R,"src",M),a(R,"alt","Satisfactory Modding Logo"),v(R,$,100,12,4355),a(N,"class","absolute top-0 flex h-full w-full items-center justify-center"),v(N,$,99,10,4267),v(L,$,103,12,4593),a(b,"class","absolute bottom-0 w-full px-4 pb-4 text-center text-neutral-400 xl:text-left"),v(b,$,102,10,4490),a(y,"class","relative h-full w-full"),v(y,$,97,8,4172),a(d,"class","card h-full"),v(d,$,96,6,4138),a(f,"href","https://discord.gg/xkVJ73E"),a(f,"rel","noopener"),a(f,"target","_blank"),a(f,"class","min-h-[25vh] overflow-hidden"),v(f,$,95,4,4026),a(I,"class","css-banner banner svelte-eofvo5"),v(I,$,111,10,4906),a(E,"class","centered-logo svelte-eofvo5"),se(E.src,te=J+"/images/satisfactory_logo_full_color_small.webp")||a(E,"src",te),a(E,"alt","Satisfactory Logo"),v(E,$,113,12,5038),a(m,"class","absolute top-0 flex h-full w-full items-center justify-center"),v(m,$,112,10,4950),v(Y,$,119,12,5330),a(B,"class","absolute bottom-0 w-full px-4 pb-4 text-center text-neutral-300 xl:text-right"),v(B,$,118,10,5226),a(P,"class","relative h-full w-full"),v(P,$,110,8,4859),a(q,"class","card h-full"),v(q,$,109,6,4825),a(x,"href","https://www.satisfactorygame.com/"),a(x,"rel","noopener"),a(x,"target","_blank"),a(x,"class","min-h-[25vh] overflow-hidden"),v(x,$,108,4,4706),a(c,"class","mb-4 grid flex-1 grid-cols-1 gap-4 xl:grid-cols-2"),v(c,$,94,2,3958),a(o,"class","flex min-h-full flex-col"),ie(o,"height","calc(100vh - 64px - 3rem)"),v(o,$,25,0,736)},m:function(k,ee){Me(e,document.head,null),O(k,l,ee),Me(n,k,ee),O(k,t,ee),O(k,o,ee),u(o,i),K.m(i,null),u(o,r),u(o,c),u(c,f),u(f,d),u(d,y),u(y,_),u(y,S),u(y,N),u(N,R),u(y,V),u(y,b),u(b,L),u(L,T),u(c,D),u(c,x),u(x,q),u(q,P),u(P,I),u(P,W),u(P,m),u(m,E),u(P,ne),u(P,B),u(B,Y),u(Y,G),u(o,X),oe[H].m(o,null),ue=!0},p:function(k,[ee]){de===(de=ve(k))&&K?K.p(k,ee):(K.d(1),K=de(k),K&&(K.c(),K.m(i,null))),(!ue||ee&16)&&z!==(z=k[4]("home.banner.community-run-discord")+"")&&ce(T,z),(!ue||ee&16)&&C!==(C=k[4]("home.banner.official-website")+"")&&ce(G,C);let re=H;H=be(k),H===re?oe[H].p(k,ee):(at(),he(oe[re],1,1,()=>{oe[re]=null}),ct(),F=oe[H],F?F.p(k,ee):(F=oe[H]=$e[H](k),F.c()),ae(F,1),F.m(o,null))},i:function(k){ue||(ae(e.$$.fragment,k),ae(n.$$.fragment,k),ae(F),ue=!0)},o:function(k){he(e.$$.fragment,k),he(n.$$.fragment,k),he(F),ue=!1},d:function(k){k&&(h(l),h(t),h(o)),Se(e),Se(n,k),K.d(),oe[H].d()}};return U("SvelteRegisterBlock",{block:we,id:Oe.name,type:"component",source:"",ctx:s}),we}const Te="3xl:grid-cols-4 lg:grid-cols-2 grid-cols-1";function Nt(s,e,l){let n,t,o,i,r=fe,c=()=>(r(),r=je(M,b=>l(4,i=b)),M),f,d,y=fe,_=()=>(y(),y=je(n,b=>l(6,d=b)),n);me(xe,"onMobile"),ye(s,xe,b=>l(2,t=b)),me(Ve,"easterEgg"),ye(s,Ve,b=>l(3,o=b)),me(_e,"doggoNeedsPats"),ye(s,_e,b=>l(5,f=b)),s.$$.on_destroy.push(()=>r()),s.$$.on_destroy.push(()=>y());let{$$slots:S={},$$scope:N}=e;rt("Page",S,[]);let{data:R}=e;const{t:M}=lt();me(M,"t"),c(),s.$$.on_mount.push(function(){R===void 0&&!("data"in e||s.$$.bound[s.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const V=["data"];return Object.keys(e).forEach(b=>{!~V.indexOf(b)&&b.slice(0,2)!=="$$"&&b!=="slot"&&console.warn(`<Page> was created with unknown prop '${b}'`)}),s.$$set=b=>{"data"in b&&l(7,R=b.data)},s.$capture_state=()=>({MetaDescriptors:ut,FicsitCard:dt,ModCard:ht,Doggo:mt,assets:J,onMobile:xe,easterEgg:Ve,doggoNeedsPats:_e,getTranslate:lt,data:R,t:M,gridClasses:Te,mods:n,$onMobile:t,$easterEgg:o,$t:i,$doggoNeedsPats:f,$mods:d}),s.$inject_state=b=>{"data"in b&&l(7,R=b.data),"mods"in b&&_(l(1,n=b.mods))},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&128&&_(l(1,{mods:n}=R,n))},[M,n,t,o,i,f,d,R]}class qt extends nt{constructor(e){super(e),ot(this,e,Nt,Oe,it,{data:7,t:0}),U("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Oe.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{qt as component,Ut as universal};
//# sourceMappingURL=2.BPPPnpjs.js.map