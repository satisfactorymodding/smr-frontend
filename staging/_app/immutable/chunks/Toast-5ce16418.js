import{S as R,i as V,s as _,d as E,v as C,b8 as B,b9 as D,ba as I,bb as S,z as N,e as b,h as w,j as $,k as p,ac as g,n as v,p as O,ad as z,A,B as F,C as G,u as h,bc as H,bd as J,t as T,be as K,g as q,q as L,r as M}from"./vendor-856b0c89.js";const k="src/lib/components/general/Toast.svelte";function x(o){let e,i,t,l,c,n,r;const f=o[5].default,a=N(f,o,o[4],null),s={c:function(){e=b("div"),i=b("div"),t=b("div"),a&&a.c(),this.h()},l:function(u){e=w(u,"DIV",{class:!0});var d=$(e);i=w(d,"DIV",{class:!0});var j=$(i);t=w(j,"DIV",{class:!0});var P=$(t);a&&a.l(P),P.forEach(p),j.forEach(p),d.forEach(p),this.h()},h:function(){g(t,"class",l=o[1]+" bottom-0 pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto rounded items-center shadow-sm h-12"),v(t,k,21,6,644),g(i,"class","text-white fixed w-full h-full flex items-center justify-center pointer-events-none"),v(i,k,20,4,540),g(e,"class","fixed w-full h-full top-0 left-0 z-30 pointer-events-none"),v(e,k,19,2,464)},m:function(u,d){O(u,e,d),z(e,i),z(i,t),a&&a.m(t,null),r=!0},p:function(u,d){o=u,a&&a.p&&(!r||d&16)&&A(a,f,o,o[4],r?G(f,o[4],d,null):F(o[4]),null),(!r||d&2&&l!==(l=o[1]+" bottom-0 pointer-events-auto flex absolute py-2 px-4 z-30 mb-4 content-between mx-auto rounded items-center shadow-sm h-12"))&&g(t,"class",l)},i:function(u){r||(h(a,u),H(()=>{n&&n.end(1),c=J(t,D,{duration:100,easing:I}),c.start()}),r=!0)},o:function(u){T(a,u),c&&c.invalidate(),n=K(t,B,{duration:100,easing:S,delay:150}),r=!1},d:function(u){u&&p(e),a&&a.d(u),u&&n&&n.end()}};return E("SvelteRegisterBlock",{block:s,id:x.name,type:"if",source:"(19:0) {#if running}",ctx:o}),s}function y(o){let e,i,t=o[0]&&x(o);const l={c:function(){t&&t.c(),e=q()},l:function(n){t&&t.l(n),e=q()},m:function(n,r){t&&t.m(n,r),O(n,e,r),i=!0},p:function(n,[r]){n[0]?t?(t.p(n,r),r&1&&h(t,1)):(t=x(n),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(L(),T(t,1,1,()=>{t=null}),M())},i:function(n){i||(h(t),i=!0)},o:function(n){T(t),i=!1},d:function(n){t&&t.d(n),n&&p(e)}};return E("SvelteRegisterBlock",{block:l,id:y.name,type:"component",source:"",ctx:o}),l}function Q(o,e,i){let{$$slots:t={},$$scope:l}=e;C("Toast",t,["default"]);let{timeout:c=5e3}=e,{running:n=!1}=e,{background:r="bg-red-800"}=e,f;const a=["timeout","running","background"];return Object.keys(e).forEach(s=>{!~a.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Toast> was created with unknown prop '${s}'`)}),o.$$set=s=>{"timeout"in s&&i(2,c=s.timeout),"running"in s&&i(0,n=s.running),"background"in s&&i(1,r=s.background),"$$scope"in s&&i(4,l=s.$$scope)},o.$capture_state=()=>({fade:B,scale:D,quadIn:I,quadOut:S,timeout:c,running:n,background:r,currentTimeout:f}),o.$inject_state=s=>{"timeout"in s&&i(2,c=s.timeout),"running"in s&&i(0,n=s.running),"background"in s&&i(1,r=s.background),"currentTimeout"in s&&i(3,f=s.currentTimeout)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&13&&(f&&clearTimeout(f),n&&i(3,f=setTimeout(()=>{i(0,n=!1)},c)))},[n,r,c,f,l,t]}class W extends R{constructor(e){super(e),V(this,e,Q,y,_,{timeout:2,running:0,background:1}),E("SvelteRegisterComponent",{component:this,tagName:"Toast",options:e,id:y.name})}get timeout(){throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set timeout(e){throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get running(){throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set running(e){throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get background(){throw new Error("<Toast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set background(e){throw new Error("<Toast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{W as T};
//# sourceMappingURL=Toast-5ce16418.js.map
