import{S as ot,i as st,s as at,d as w,aQ as R,v as lt,a6 as B,a8 as C,k as J,a9 as S,ab as E,l as P,ae as N,p as m,m as D,t as h,n as O,q as d,aj as j,L as y,N as b,x as K,y as M,z as T,ac as U,C as W,ad as X,O as F}from"./vendor.650b2849.js";const Y="src/lib/components/utils/PageControls.svelte";function I(c){let t,i,s,e;t=new R({props:{variant:"outlined",$$slots:{default:[Z]},$$scope:{ctx:c}},$$inline:!0}),t.$on("click",c[3]),s=new R({props:{variant:"outlined",$$slots:{default:[tt]},$$scope:{ctx:c}},$$inline:!0}),s.$on("click",c[4]);const n={c:function(){C(t.$$.fragment),i=B(),C(s.$$.fragment)},l:function(o){E(t.$$.fragment,o),i=S(o),E(s.$$.fragment,o)},m:function(o,u){N(t,o,u),P(o,i,u),N(s,o,u),e=!0},p:function(o,u){const x={};u&512&&(x.$$scope={dirty:u,ctx:o}),t.$set(x);const f={};u&512&&(f.$$scope={dirty:u,ctx:o}),s.$set(f)},i:function(o){e||(m(t.$$.fragment,o),m(s.$$.fragment,o),e=!0)},o:function(o){h(t.$$.fragment,o),h(s.$$.fragment,o),e=!1},d:function(o){j(t,o),o&&d(i),j(s,o)}};return w("SvelteRegisterBlock",{block:n,id:I.name,type:"if",source:"(7:0) {#if currentPage > startPage}",ctx:c}),n}function Z(c){let t;const i={c:function(){t=y("«")},l:function(e){t=b(e,"«")},m:function(e,n){P(e,t,n)},d:function(e){e&&d(t)}};return w("SvelteRegisterBlock",{block:i,id:Z.name,type:"slot",source:'(8:2) <Button variant=\\"outlined\\" on:click={() => (currentPage = startPage)}>',ctx:c}),i}function tt(c){let t;const i={c:function(){t=y("<")},l:function(e){t=b(e,"<")},m:function(e,n){P(e,t,n)},d:function(e){e&&d(t)}};return w("SvelteRegisterBlock",{block:i,id:tt.name,type:"slot",source:'(9:2) <Button variant=\\"outlined\\" on:click={() => (currentPage = currentPage - 1)}>',ctx:c}),i}function V(c){let t,i;const s={c:function(){t=K("div"),i=y("..."),this.h()},l:function(n){t=M(n,"DIV",{class:!0});var a=T(t);i=b(a,"..."),a.forEach(d),this.h()},h:function(){U(t,"class","py-1 px-2 inline-block"),W(t,Y,12,2,391)},m:function(n,a){P(n,t,a),X(t,i)},d:function(n){n&&d(t)}};return w("SvelteRegisterBlock",{block:s,id:V.name,type:"if",source:"(12:0) {#if currentPage > startPage + 1}",ctx:c}),s}function q(c){let t,i;t=new R({props:{variant:"outlined",$$slots:{default:[et]},$$scope:{ctx:c}},$$inline:!0}),t.$on("click",c[5]);const s={c:function(){C(t.$$.fragment)},l:function(n){E(t.$$.fragment,n)},m:function(n,a){N(t,n,a),i=!0},p:function(n,a){const o={};a&513&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i:function(n){i||(m(t.$$.fragment,n),i=!0)},o:function(n){h(t.$$.fragment,n),i=!1},d:function(n){j(t,n)}};return w("SvelteRegisterBlock",{block:s,id:q.name,type:"if",source:"(16:0) {#if currentPage > startPage}",ctx:c}),s}function et(c){let t=c[0]-1+"",i;const s={c:function(){i=y(t)},l:function(n){i=b(n,t)},m:function(n,a){P(n,i,a)},p:function(n,a){a&1&&t!==(t=n[0]-1+"")&&F(i,t)},d:function(n){n&&d(i)}};return w("SvelteRegisterBlock",{block:s,id:et.name,type:"slot",source:'(17:2) <Button variant=\\"outlined\\" on:click={() => (currentPage = currentPage - 1)}>',ctx:c}),s}function nt(c){let t;const i={c:function(){t=y(c[0])},l:function(e){t=b(e,c[0])},m:function(e,n){P(e,t,n)},p:function(e,n){n&1&&F(t,e[0])},d:function(e){e&&d(t)}};return w("SvelteRegisterBlock",{block:i,id:nt.name,type:"slot",source:'(22:0) <Button variant=\\"unelevated\\">',ctx:c}),i}function z(c){let t,i;t=new R({props:{variant:"outlined",$$slots:{default:[it]},$$scope:{ctx:c}},$$inline:!0}),t.$on("click",c[6]);const s={c:function(){C(t.$$.fragment)},l:function(n){E(t.$$.fragment,n)},m:function(n,a){N(t,n,a),i=!0},p:function(n,a){const o={};a&513&&(o.$$scope={dirty:a,ctx:n}),t.$set(o)},i:function(n){i||(m(t.$$.fragment,n),i=!0)},o:function(n){h(t.$$.fragment,n),i=!1},d:function(n){j(t,n)}};return w("SvelteRegisterBlock",{block:s,id:z.name,type:"if",source:"(26:0) {#if currentPage < totalPages}",ctx:c}),s}function it(c){let t=c[0]+1+"",i;const s={c:function(){i=y(t)},l:function(n){i=b(n,t)},m:function(n,a){P(n,i,a)},p:function(n,a){a&1&&t!==(t=n[0]+1+"")&&F(i,t)},d:function(n){n&&d(i)}};return w("SvelteRegisterBlock",{block:s,id:it.name,type:"slot",source:'(27:2) <Button variant=\\"outlined\\" on:click={() => (currentPage = currentPage + 1)}>',ctx:c}),s}function L(c){let t,i;const s={c:function(){t=K("div"),i=y("..."),this.h()},l:function(n){t=M(n,"DIV",{class:!0});var a=T(t);i=b(a,"..."),a.forEach(d),this.h()},h:function(){U(t,"class","py-1 px-2 inline-block"),W(t,Y,32,2,839)},m:function(n,a){P(n,t,a),X(t,i)},d:function(n){n&&d(t)}};return w("SvelteRegisterBlock",{block:s,id:L.name,type:"if",source:"(32:0) {#if currentPage < totalPages - 1}",ctx:c}),s}function Q(c){let t,i,s,e;t=new R({props:{variant:"outlined",$$slots:{default:[ct]},$$scope:{ctx:c}},$$inline:!0}),t.$on("click",c[7]),s=new R({props:{variant:"outlined",$$slots:{default:[rt]},$$scope:{ctx:c}},$$inline:!0}),s.$on("click",c[8]);const n={c:function(){C(t.$$.fragment),i=B(),C(s.$$.fragment)},l:function(o){E(t.$$.fragment,o),i=S(o),E(s.$$.fragment,o)},m:function(o,u){N(t,o,u),P(o,i,u),N(s,o,u),e=!0},p:function(o,u){const x={};u&512&&(x.$$scope={dirty:u,ctx:o}),t.$set(x);const f={};u&512&&(f.$$scope={dirty:u,ctx:o}),s.$set(f)},i:function(o){e||(m(t.$$.fragment,o),m(s.$$.fragment,o),e=!0)},o:function(o){h(t.$$.fragment,o),h(s.$$.fragment,o),e=!1},d:function(o){j(t,o),o&&d(i),j(s,o)}};return w("SvelteRegisterBlock",{block:n,id:Q.name,type:"if",source:"(36:0) {#if currentPage < totalPages}",ctx:c}),n}function ct(c){let t;const i={c:function(){t=y(">")},l:function(e){t=b(e,">")},m:function(e,n){P(e,t,n)},d:function(e){e&&d(t)}};return w("SvelteRegisterBlock",{block:i,id:ct.name,type:"slot",source:'(37:2) <Button variant=\\"outlined\\" on:click={() => (currentPage = currentPage + 1)}>',ctx:c}),i}function rt(c){let t;const i={c:function(){t=y("»")},l:function(e){t=b(e,"»")},m:function(e,n){P(e,t,n)},d:function(e){e&&d(t)}};return w("SvelteRegisterBlock",{block:i,id:rt.name,type:"slot",source:'(38:2) <Button variant=\\"outlined\\" on:click={() => (currentPage = totalPages)}>',ctx:c}),i}function A(c){let t,i,s,e,n,a,o,u,x,f=c[0]>c[1]&&I(c),k=c[0]>c[1]+1&&V(c),g=c[0]>c[1]&&q(c);e=new R({props:{variant:"unelevated",$$slots:{default:[nt]},$$scope:{ctx:c}},$$inline:!0});let p=c[0]<c[2]&&z(c),v=c[0]<c[2]-1&&L(c),l=c[0]<c[2]&&Q(c);const G={c:function(){f&&f.c(),t=B(),k&&k.c(),i=B(),g&&g.c(),s=B(),C(e.$$.fragment),n=B(),p&&p.c(),a=B(),v&&v.c(),o=B(),l&&l.c(),u=J()},l:function(r){f&&f.l(r),t=S(r),k&&k.l(r),i=S(r),g&&g.l(r),s=S(r),E(e.$$.fragment,r),n=S(r),p&&p.l(r),a=S(r),v&&v.l(r),o=S(r),l&&l.l(r),u=J()},m:function(r,$){f&&f.m(r,$),P(r,t,$),k&&k.m(r,$),P(r,i,$),g&&g.m(r,$),P(r,s,$),N(e,r,$),P(r,n,$),p&&p.m(r,$),P(r,a,$),v&&v.m(r,$),P(r,o,$),l&&l.m(r,$),P(r,u,$),x=!0},p:function(r,[$]){r[0]>r[1]?f?(f.p(r,$),$&3&&m(f,1)):(f=I(r),f.c(),m(f,1),f.m(t.parentNode,t)):f&&(D(),h(f,1,1,()=>{f=null}),O()),r[0]>r[1]+1?k||(k=V(r),k.c(),k.m(i.parentNode,i)):k&&(k.d(1),k=null),r[0]>r[1]?g?(g.p(r,$),$&3&&m(g,1)):(g=q(r),g.c(),m(g,1),g.m(s.parentNode,s)):g&&(D(),h(g,1,1,()=>{g=null}),O());const H={};$&513&&(H.$$scope={dirty:$,ctx:r}),e.$set(H),r[0]<r[2]?p?(p.p(r,$),$&5&&m(p,1)):(p=z(r),p.c(),m(p,1),p.m(a.parentNode,a)):p&&(D(),h(p,1,1,()=>{p=null}),O()),r[0]<r[2]-1?v||(v=L(r),v.c(),v.m(o.parentNode,o)):v&&(v.d(1),v=null),r[0]<r[2]?l?(l.p(r,$),$&5&&m(l,1)):(l=Q(r),l.c(),m(l,1),l.m(u.parentNode,u)):l&&(D(),h(l,1,1,()=>{l=null}),O())},i:function(r){x||(m(f),m(g),m(e.$$.fragment,r),m(p),m(l),x=!0)},o:function(r){h(f),h(g),h(e.$$.fragment,r),h(p),h(l),x=!1},d:function(r){f&&f.d(r),r&&d(t),k&&k.d(r),r&&d(i),g&&g.d(r),r&&d(s),j(e,r),r&&d(n),p&&p.d(r),r&&d(a),v&&v.d(r),r&&d(o),l&&l.d(r),r&&d(u)}};return w("SvelteRegisterBlock",{block:G,id:A.name,type:"component",source:"",ctx:c}),G}function ft(c,t,i){let{$$slots:s={},$$scope:e}=t;lt("PageControls",s,[]);let{startPage:n=1}=t,{totalPages:a}=t,{currentPage:o}=t;c.$$.on_mount.push(function(){a===void 0&&!("totalPages"in t||c.$$.bound[c.$$.props.totalPages])&&console.warn("<PageControls> was created without expected prop 'totalPages'"),o===void 0&&!("currentPage"in t||c.$$.bound[c.$$.props.currentPage])&&console.warn("<PageControls> was created without expected prop 'currentPage'")});const u=["startPage","totalPages","currentPage"];Object.keys(t).forEach(l=>{!~u.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<PageControls> was created with unknown prop '${l}'`)});const x=()=>i(0,o=n),f=()=>i(0,o=o-1),k=()=>i(0,o=o-1),g=()=>i(0,o=o+1),p=()=>i(0,o=o+1),v=()=>i(0,o=a);return c.$$set=l=>{"startPage"in l&&i(1,n=l.startPage),"totalPages"in l&&i(2,a=l.totalPages),"currentPage"in l&&i(0,o=l.currentPage)},c.$capture_state=()=>({Button:R,startPage:n,totalPages:a,currentPage:o}),c.$inject_state=l=>{"startPage"in l&&i(1,n=l.startPage),"totalPages"in l&&i(2,a=l.totalPages),"currentPage"in l&&i(0,o=l.currentPage)},t&&"$$inject"in t&&c.$inject_state(t.$$inject),[o,n,a,x,f,k,g,p,v]}class $t extends ot{constructor(t){super(t),st(this,t,ft,A,at,{startPage:1,totalPages:2,currentPage:0}),w("SvelteRegisterComponent",{component:this,tagName:"PageControls",options:t,id:A.name})}get startPage(){throw new Error("<PageControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set startPage(t){throw new Error("<PageControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get totalPages(){throw new Error("<PageControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set totalPages(t){throw new Error("<PageControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get currentPage(){throw new Error("<PageControls>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set currentPage(t){throw new Error("<PageControls>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{$t as P};
//# sourceMappingURL=PageControls.361804a8.js.map
