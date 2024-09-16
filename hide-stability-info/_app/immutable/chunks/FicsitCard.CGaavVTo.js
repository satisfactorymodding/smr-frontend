import{S as Ue,i as We,s as Ye,d as U,z as oe,v as Ge,ae as me,ac as Fe,ap as Le,aq as Pe,ar as pe,M as Je,e as y,b as _,X as Ve,g as $,h as L,j as b,k as O,Y as Ie,N as u,m as E,l as K,ak as B,n as H,U as k,V as W,Z as Se,A as ae,C as le,D as re,r as M,p as je,t as Y,q as Re,a0 as Qe,y as ze,f as ce,R as qe,as as fe,u as Ke,am as Xe,at as Ze,au as et}from"./vendor.DD_stces.js";const{console:tt}=Je,C="src/lib/components/general/FicsitCard.svelte",st=t=>({}),Be=t=>({}),it=t=>({}),Ae=t=>({}),nt=t=>({}),He=t=>({}),ot=t=>({}),Ne=t=>({});function Te(t){let e,s,h,a,r,f,m,c=!t[4]&&t[6]&&ge(t);const d={c:function(){e=y("img"),a=_(),c&&c.c(),r=ce(),this.h()},l:function(n){e=$(n,"IMG",{class:!0,src:!0,alt:!0}),a=O(n),c&&c.l(n),r=ce(),this.h()},h:function(){u(e,"class","logo absolute max-h-full min-h-full min-w-full max-w-full transition-opacity delay-100 duration-200 ease-linear svelte-1qt0tvr"),fe(e.src,s=t[2])||u(e,"src",s),u(e,"alt",h=t[8]+" Logo"),B(e,"invisible",!t[4]),B(e,"opacity-0",!t[4]),E(e,C,88,10,2036)},m:function(n,o){H(n,e,o),H(n,a,o),c&&c.m(n,o),H(n,r,o),f||(m=W(e,"load",t[18],!1,!1,!1,!1),f=!0)},p:function(n,o){o&4&&!fe(e.src,s=n[2])&&u(e,"src",s),o&256&&h!==(h=n[8]+" Logo")&&u(e,"alt",h),o&16&&B(e,"invisible",!n[4]),o&16&&B(e,"opacity-0",!n[4]),!n[4]&&n[6]?c?(c.p(n,o),o&80&&M(c,1)):(c=ge(n),c.c(),M(c,1),c.m(r.parentNode,r)):c&&(je(),Y(c,1,1,()=>{c=null}),Re())},d:function(n){n&&(b(e),b(a),b(r)),c&&c.d(n),f=!1,m()}};return U("SvelteRegisterBlock",{block:d,id:Te.name,type:"else",source:"(74:8) {:else}",ctx:t}),d}function _e(t){let e;const s={c:function(){e=y("div"),this.h()},l:function(a){e=$(a,"DIV",{class:!0}),L(e).forEach(b),this.h()},h:function(){u(e,"class","logo max-h-full min-h-full min-w-full max-w-full bg-neutral-500 svelte-1qt0tvr"),E(e,C,86,10,1930)},m:function(a,r){H(a,e,r)},p:Ke,d:function(a){a&&b(e)}};return U("SvelteRegisterBlock",{block:s,id:_e.name,type:"if",source:"(72:8) {#if fake}",ctx:t}),s}function ge(t){let e,s,h,a,r,f,m,c;const d={c:function(){e=y("img"),this.h()},l:function(n){e=$(n,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){u(e,"class","logo absolute max-h-full min-h-full min-w-full max-w-full svelte-1qt0tvr"),fe(e.src,s=t[6])||u(e,"src",s),u(e,"alt",h=t[8]+" Logo"),B(e,"invisible",!t[5]),E(e,C,96,12,2438)},m:function(n,o){H(n,e,o),f=!0,m||(c=W(e,"load",t[19],!1,!1,!1,!1),m=!0)},p:function(n,o){(!f||o&64&&!fe(e.src,s=n[6]))&&u(e,"src",s),(!f||o&256&&h!==(h=n[8]+" Logo"))&&u(e,"alt",h),(!f||o&32)&&B(e,"invisible",!n[5])},i:function(n){f||(n&&Xe(()=>{f&&(r&&r.end(1),a=Ze(e,pe,{duration:200}),a.start())}),f=!0)},o:function(n){a&&a.invalidate(),n&&(r=et(e,pe,{duration:200,delay:100})),f=!1},d:function(n){n&&b(e),n&&r&&r.end(),m=!1,c()}};return U("SvelteRegisterBlock",{block:d,id:ge.name,type:"if",source:"(82:10) {#if !imageLoaded && thumbHashData}",ctx:t}),d}function we(t){let e,s="Card stats";const h={c:function(){e=y("span"),e.textContent=s,this.h()},l:function(r){e=$(r,"SPAN",{class:!0,"data-svelte-h":!0}),qe(e)!=="svelte-1e5l8mc"&&(e.textContent=s),this.h()},h:function(){u(e,"class","font-flow"),E(e,C,118,16,3232)},m:function(r,f){H(r,e,f)},d:function(r){r&&b(e)}};return U("SvelteRegisterBlock",{block:h,id:we.name,type:"if",source:"(104:14) {#if fake}",ctx:t}),h}function Oe(t){let e,s=t[1]&&we(t);const h={c:function(){s&&s.c(),e=ce()},l:function(r){s&&s.l(r),e=ce()},m:function(r,f){s&&s.m(r,f),H(r,e,f)},p:function(r,f){r[1]?s||(s=we(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d:function(r){r&&b(e),s&&s.d(r)}};return U("SvelteRegisterBlock",{block:h,id:Oe.name,type:"fallback",source:"(103:31)                ",ctx:t}),h}function be(t){let e,s,h="info",a,r,f,m;const c=t[17].actions,d=oe(c,t,t[16],Ae),p={c:function(){e=y("a"),s=y("span"),s.textContent=h,f=_(),d&&d.c(),this.h()},l:function(o){e=$(o,"A",{href:!0,class:!0,"aria-label":!0,title:!0});var g=L(e);s=$(g,"SPAN",{class:!0,"data-svelte-h":!0}),qe(s)!=="svelte-j9s9eb"&&(s.textContent=h),g.forEach(b),f=O(o),d&&d.l(o),this.h()},h:function(){u(s,"class","material-icons"),E(s,C,147,12,4112),u(e,"href",t[0]),u(e,"class","variant-soft-surface btn btn-sm"),u(e,"aria-label",a="View "+t[8]),u(e,"title",r="View "+t[8]),E(e,C,142,10,3935)},m:function(o,g){H(o,e,g),k(e,s),H(o,f,g),d&&d.m(o,g),m=!0},p:function(o,g){(!m||g&1)&&u(e,"href",o[0]),(!m||g&256&&a!==(a="View "+o[8]))&&u(e,"aria-label",a),(!m||g&256&&r!==(r="View "+o[8]))&&u(e,"title",r),d&&d.p&&(!m||g&65536)&&ae(d,c,o,o[16],m?re(c,o[16],g,it):le(o[16]),Ae)},i:function(o){m||(M(d,o),m=!0)},o:function(o){Y(d,o),m=!1},d:function(o){o&&(b(e),b(f)),d&&d.d(o)}};return U("SvelteRegisterBlock",{block:p,id:be.name,type:"if",source:"(128:8) {#if !fake}",ctx:t}),p}function ve(t){let e,s,h,a,r,f,m,c,d,p,n,o,g,A,N,D,j,G,P,R,F,q,v,z,X;function Z(T,l){return T[1]?_e:Te}let J=Z(t),i=J(t);const ue=t[17].stats,ee=oe(ue,t,t[16],Ne),V=ee||Oe(t),he=t[17].tags,I=oe(he,t,t[16],He);let x=!t[1]&&be(t);const de=t[17].outer,S=oe(de,t,t[16],Be),ke={c:function(){e=y("div"),s=y("div"),h=y("div"),a=y("a"),i.c(),r=_(),f=y("div"),m=y("div"),c=y("div"),d=y("a"),p=y("span"),n=Ve(t[8]),o=_(),g=y("h5"),V&&V.c(),A=_(),I&&I.c(),N=_(),D=y("div"),j=Ve(t[7]),G=_(),P=y("div"),R=_(),F=y("div"),x&&x.c(),q=_(),S&&S.c(),this.h()},l:function(l){e=$(l,"DIV",{class:!0,role:!0});var w=L(e);s=$(w,"DIV",{class:!0});var te=L(s);h=$(te,"DIV",{class:!0});var xe=L(h);a=$(xe,"A",{href:!0,tabindex:!0,class:!0});var ye=L(a);i.l(ye),ye.forEach(b),xe.forEach(b),r=O(te),f=$(te,"DIV",{class:!0});var se=L(f);m=$(se,"DIV",{class:!0});var ie=L(m);c=$(ie,"DIV",{class:!0});var Q=L(c);d=$(Q,"A",{href:!0,class:!0});var $e=L(d);p=$($e,"SPAN",{class:!0});var Ee=L(p);n=Ie(Ee,t[8]),Ee.forEach(b),$e.forEach(b),o=O(Q),g=$(Q,"H5",{class:!0});var Ce=L(g);V&&V.l(Ce),Ce.forEach(b),A=O(Q),I&&I.l(Q),Q.forEach(b),N=O(ie),D=$(ie,"DIV",{style:!0});var ne=L(D);j=Ie(ne,t[7]),G=O(ne),P=$(ne,"DIV",{class:!0,style:!0});var Me=L(P);Me.forEach(b),ne.forEach(b),ie.forEach(b),R=O(se),F=$(se,"DIV",{class:!0});var De=L(F);x&&x.l(De),De.forEach(b),se.forEach(b),te.forEach(b),q=O(w),S&&S.l(w),w.forEach(b),this.h()},h:function(){u(a,"href",t[0]),u(a,"tabindex","0"),u(a,"class","relative block max-h-full min-h-full min-w-full max-w-full"),E(a,C,80,6,1742),u(h,"class","card-image-container cursor-pointer"),E(h,C,79,4,1686),u(p,"class","break-words text-xl"),E(p,C,112,12,3052),u(d,"href",t[0]),u(d,"class","text-white"),E(d,C,111,10,3005),u(g,"class","m-0 text-sm"),E(g,C,115,10,3134),u(c,"class","mb-1.5"),E(c,C,110,8,2974),u(P,"class","float-right"),K(P,"width",(t[3]?.clientWidth||0)-8+"px"),K(P,"height",(t[3]?.clientHeight||0)-8+"px"),E(P,C,129,10,3486),K(D,"word-wrap","anywhere"),B(D,"font-flow",t[1]),E(D,C,126,8,3386),u(m,"class","flex flex-col px-3 py-2 pb-0"),E(m,C,109,6,2923),u(F,"class","absolute bottom-0 right-0 flex flex-row items-center gap-1 self-end px-2 py-2 text-lg"),E(F,C,138,6,3763),u(f,"class","relative flex w-full flex-col justify-between"),E(f,C,108,4,2857),u(s,"class","grid-max-auto grid grid-cols-1 justify-items-center sm:grid-cols-2 svelte-1qt0tvr"),B(s,"text-neutral-500",t[1]),B(s,"font-flow",t[1]),E(s,C,75,2,1536),u(e,"class","card relative h-full overflow-hidden"),u(e,"role","none"),E(e,C,68,0,1383)},m:function(l,w){H(l,e,w),k(e,s),k(s,h),k(h,a),i.m(a,null),k(s,r),k(s,f),k(f,m),k(m,c),k(c,d),k(d,p),k(p,n),k(c,o),k(c,g),V&&V.m(g,null),k(c,A),I&&I.m(c,null),k(m,N),k(m,D),k(D,j),k(D,G),k(D,P),k(f,R),k(f,F),x&&x.m(F,null),t[21](F),k(e,q),S&&S.m(e,null),v=!0,z||(X=[W(a,"keypress",t[20],!1,!1,!1,!1),W(e,"mouseover",t[9],!1,!1,!1,!1),W(e,"mouseout",t[10],!1,!1,!1,!1),W(e,"focus",t[9],!1,!1,!1,!1),W(e,"blur",t[10],!1,!1,!1,!1)],z=!0)},p:function(l,[w]){J===(J=Z(l))&&i?i.p(l,w):(i.d(1),i=J(l),i&&(i.c(),i.m(a,null))),(!v||w&1)&&u(a,"href",l[0]),(!v||w&256)&&Se(n,l[8]),(!v||w&1)&&u(d,"href",l[0]),ee?ee.p&&(!v||w&65536)&&ae(ee,ue,l,l[16],v?re(ue,l[16],w,ot):le(l[16]),Ne):V&&V.p&&(!v||w&2)&&V.p(l,v?w:-1),I&&I.p&&(!v||w&65536)&&ae(I,he,l,l[16],v?re(he,l[16],w,nt):le(l[16]),He),(!v||w&128)&&Se(j,l[7]),(!v||w&8)&&K(P,"width",(l[3]?.clientWidth||0)-8+"px"),(!v||w&8)&&K(P,"height",(l[3]?.clientHeight||0)-8+"px"),(!v||w&2)&&B(D,"font-flow",l[1]),l[1]?x&&(je(),Y(x,1,1,()=>{x=null}),Re()):x?(x.p(l,w),w&2&&M(x,1)):(x=be(l),x.c(),M(x,1),x.m(F,null)),(!v||w&2)&&B(s,"text-neutral-500",l[1]),(!v||w&2)&&B(s,"font-flow",l[1]),S&&S.p&&(!v||w&65536)&&ae(S,de,l,l[16],v?re(de,l[16],w,st):le(l[16]),Be)},i:function(l){v||(M(V,l),M(I,l),M(x),M(S,l),v=!0)},o:function(l){Y(V,l),Y(I,l),Y(x),Y(S,l),v=!1},d:function(l){l&&b(e),i.d(),V&&V.d(l),I&&I.d(l),x&&x.d(),t[21](null),S&&S.d(l),z=!1,Qe(X)}};return U("SvelteRegisterBlock",{block:ke,id:ve.name,type:"component",source:"",ctx:t}),ke}function at(t,e,s){let h,a,r,f,m,{$$slots:c={},$$scope:d}=e;Ge("FicsitCard",c,["stats","tags","actions","outer"]);let{name:p=""}=e,{logo:n=me+"/images/no_image.webp"}=e,{description:o=""}=e,{link:g="/"}=e,{fake:A=!1}=e,{thumbhash:N=""}=e,D=!1,j;const G=()=>{D||(j=setTimeout(()=>{D=!0,Le(g)},250))},P=()=>{D||clearTimeout(j)};let R,F=!1,q=!1;const v=["name","logo","description","link","fake","thumbhash"];Object.keys(e).forEach(i=>{!~v.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&tt.warn(`<FicsitCard> was created with unknown prop '${i}'`)});const z=()=>s(4,F=!0),X=()=>s(5,q=!0),Z=()=>Fe(g);function J(i){ze[i?"unshift":"push"](()=>{R=i,s(3,R)})}return t.$$set=i=>{"name"in i&&s(11,p=i.name),"logo"in i&&s(12,n=i.logo),"description"in i&&s(13,o=i.description),"link"in i&&s(0,g=i.link),"fake"in i&&s(1,A=i.fake),"thumbhash"in i&&s(14,N=i.thumbhash),"$$scope"in i&&s(16,d=i.$$scope)},t.$capture_state=()=>({assets:me,goto:Fe,preloadData:Le,thumbHashToDataURL:Pe,fade:pe,name:p,logo:n,description:o,link:g,fake:A,thumbhash:N,preloaded:D,timeoutHandle:j,onOver:G,onOut:P,actionButtons:R,imageLoaded:F,thumbnailLoaded:q,renderedThumbhash:f,renderedLogo:h,thumbHashData:m,renderedDescription:r,renderedName:a}),t.$inject_state=i=>{"name"in i&&s(11,p=i.name),"logo"in i&&s(12,n=i.logo),"description"in i&&s(13,o=i.description),"link"in i&&s(0,g=i.link),"fake"in i&&s(1,A=i.fake),"thumbhash"in i&&s(14,N=i.thumbhash),"preloaded"in i&&(D=i.preloaded),"timeoutHandle"in i&&(j=i.timeoutHandle),"actionButtons"in i&&s(3,R=i.actionButtons),"imageLoaded"in i&&s(4,F=i.imageLoaded),"thumbnailLoaded"in i&&s(5,q=i.thumbnailLoaded),"renderedThumbhash"in i&&s(15,f=i.renderedThumbhash),"renderedLogo"in i&&s(2,h=i.renderedLogo),"thumbHashData"in i&&s(6,m=i.thumbHashData),"renderedDescription"in i&&s(7,r=i.renderedDescription),"renderedName"in i&&s(8,a=i.renderedName)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&4096&&s(2,h=n||me+"/images/no_image.webp"),t.$$.dirty&2050&&s(8,a=p||A&&"Card Name"),t.$$.dirty&8194&&s(7,r=o||A&&"Short card description"),t.$$.dirty&16384&&s(15,f=N||"2/eFDQIsFmh9h4BreKeAeQqYBxd3d3J4Jw"),t.$$.dirty&32768&&s(6,m=(()=>{try{return Pe(new Uint8Array(atob(f).split("").map(i=>i.charCodeAt(0))))}catch(i){console.error(i)}})()),t.$$.dirty&4&&s(4,F=!1),t.$$.dirty&32768&&s(5,q=!1)},[g,A,h,R,F,q,m,r,a,G,P,p,n,o,N,f,d,c,z,X,Z,J]}class rt extends Ue{constructor(e){super(e),We(this,e,at,ve,Ye,{name:11,logo:12,description:13,link:0,fake:1,thumbhash:14}),U("SvelteRegisterComponent",{component:this,tagName:"FicsitCard",options:e,id:ve.name})}get name(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get logo(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set logo(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get description(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set description(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get link(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set link(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fake(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fake(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get thumbhash(){throw new Error("<FicsitCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set thumbhash(e){throw new Error("<FicsitCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{rt as F};
//# sourceMappingURL=FicsitCard.CGaavVTo.js.map
