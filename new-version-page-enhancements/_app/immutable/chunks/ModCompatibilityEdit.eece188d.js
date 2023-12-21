import{S as lt,i as at,s as rt,d as k,U as ot,v as ft,ab as U,a1 as ut,a0 as wt,e as x,b as j,g as w,h as N,M as V,k as I,j as b,m as C,N as P,l as Ct,ap as kt,n as g,Q as _,aq as nt,a5 as D,Z as st,u as X,V as St,a6 as Pt,x as pt,ar as At,W as R,X as B,a3 as mt,a4 as F,J as T,L,O as q,r as W,t as J,R as Q,y as $t,I as yt,Y,T as bt}from"./vendor.1973e767.js";import{v as O}from"./graphql.deb800f0.js";const{Object:_t}=wt,S="src/lib/components/mods/compatibility/CompatibilityEdit.svelte";function ct(o,t,s){const c=o.slice();return c[5]=t[s],c}function G(o){let t,s=o[5]+"",c;const a={c:function(){t=x("option"),c=R(s),this.h()},l:function(r){t=w(r,"OPTION",{});var e=N(t);c=B(e,s),e.forEach(b),this.h()},h:function(){t.__value=o[5],D(t,t.__value),C(t,S,16,6,439)},m:function(r,e){g(r,t,e),_(t,c)},p:X,d:function(r){r&&b(t)}};return k("SvelteRegisterBlock",{block:a,id:G.name,type:"each",source:"(12:4) {#each Object.values(CompatibilityState) as state}",ctx:o}),a}function H(o){let t,s,c="Compatibility State",a,n,r,e,i,l,u,f="Note",m,p,$,Z,et,M=ot(Object.values(O)),h=[];for(let E=0;E<M.length;E+=1)h[E]=G(ct(o,M,E));const it={c:function(){t=x("label"),s=x("span"),s.textContent=c,a=j(),n=x("select");for(let y=0;y<h.length;y+=1)h[y].c();r=j(),e=x("br"),i=j(),l=x("label"),u=x("span"),u.textContent=f,m=j(),p=x("textarea"),this.h()},l:function(y){t=w(y,"LABEL",{class:!0});var v=N(t);s=w(v,"SPAN",{"data-svelte-h":!0}),V(s)!=="svelte-aygekh"&&(s.textContent=c),a=I(v),n=w(v,"SELECT",{class:!0,style:!0});var d=N(n);for(let z=0;z<h.length;z+=1)h[z].l(d);d.forEach(b),v.forEach(b),r=I(y),e=w(y,"BR",{}),i=I(y),l=w(y,"LABEL",{class:!0});var A=N(l);u=w(A,"SPAN",{"data-svelte-h":!0}),V(u)!=="svelte-34a23a"&&(u.textContent=f),m=I(A),p=w(A,"TEXTAREA",{class:!0,placeholder:!0}),N(p).forEach(b),A.forEach(b),this.h()},h:function(){C(s,S,13,2,258),P(n,"class","select"),Ct(n,"margin-bottom","10px"),o[0].state===void 0&&kt(()=>o[3].call(n)),C(n,S,14,2,293),P(t,"class","label"),C(t,S,12,0,234),C(e,S,21,0,512),C(u,S,24,2,544),P(p,"class","textarea p-4"),P(p,"placeholder",$=o[2]("compatibility-info.notes")),C(p,S,25,2,564),P(l,"class","label"),C(l,S,23,0,520)},m:function(y,v){g(y,t,v),_(t,s),_(t,a),_(t,n);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(n,null);nt(n,o[0].state,!0),g(y,r,v),g(y,e,v),g(y,i,v),g(y,l,v),_(l,u),_(l,m),_(l,p),D(p,o[0].note),Z||(et=[st(n,"change",o[3]),st(p,"input",o[4])],Z=!0)},p:function(y,[v]){if(v&0){M=ot(Object.values(O));let d;for(d=0;d<M.length;d+=1){const A=ct(y,M,d);h[d]?h[d].p(A,v):(h[d]=G(A),h[d].c(),h[d].m(n,null))}for(;d<h.length;d+=1)h[d].d(1);h.length=M.length}v&1&&nt(n,y[0].state),v&4&&$!==($=y[2]("compatibility-info.notes"))&&P(p,"placeholder",$),v&1&&D(p,y[0].note)},i:X,o:X,d:function(y){y&&(b(t),b(r),b(e),b(i),b(l)),St(h,y),Z=!1,Pt(et)}};return k("SvelteRegisterBlock",{block:it,id:H.name,type:"component",source:"",ctx:o}),it}function jt(o,t,s){let c,a=X,n=()=>(a(),a=pt(l,p=>s(2,c=p)),l);o.$$.on_destroy.push(()=>a());let{$$slots:r={},$$scope:e}=t;ft("CompatibilityEdit",r,[]);let{compatibility:i={state:O.Works}}=t;const{t:l}=U();ut(l,"t"),n();const u=["compatibility"];_t.keys(t).forEach(p=>{!~u.indexOf(p)&&p.slice(0,2)!=="$$"&&p!=="slot"&&console.warn(`<CompatibilityEdit> was created with unknown prop '${p}'`)});function f(){i.state=At(this),s(0,i)}function m(){i.note=this.value,s(0,i)}return o.$$set=p=>{"compatibility"in p&&s(0,i=p.compatibility)},o.$capture_state=()=>({CompatibilityState:O,getTranslate:U,compatibility:i,t:l,$t:c}),o.$inject_state=p=>{"compatibility"in p&&s(0,i=p.compatibility)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[i,l,c,f,m]}class tt extends lt{constructor(t){super(t),at(this,t,jt,H,rt,{compatibility:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityEdit",options:t,id:H.name})}get compatibility(){throw new Error("<CompatibilityEdit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const dt="src/lib/components/mods/compatibility/ModCompatibilityEdit.svelte";function ht(o){let t,s="rocket_launch",c,a=o[2]("early-access")+"",n,r,e=o[2]("compatibility")+"",i;const l={c:function(){t=x("span"),t.textContent=s,c=j(),n=R(a),r=R(" - "),i=R(e),this.h()},l:function(f){t=w(f,"SPAN",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-1ol260v"&&(t.textContent=s),c=I(f),n=B(f,a),r=B(f," - "),i=B(f,e),this.h()},h:function(){P(t,"class","material-icons text-sm"),C(t,dt,28,6,716)},m:function(f,m){g(f,t,m),g(f,c,m),g(f,n,m),g(f,r,m),g(f,i,m)},p:function(f,m){m&4&&a!==(a=f[2]("early-access")+"")&&Y(n,a),m&4&&e!==(e=f[2]("compatibility")+"")&&Y(i,e)},d:function(f){f&&(b(t),b(c),b(n),b(r),b(i))}};return k("SvelteRegisterBlock",{block:l,id:ht.name,type:"slot",source:'(24:4) <svelte:fragment slot=\\"summary\\">',ctx:o}),l}function gt(o){let t,s,c;function a(e){o[3](e)}let n={};o[0].EA!==void 0&&(n.compatibility=o[0].EA),t=new tt({props:n,$$inline:!0}),$t.push(()=>yt(t,"compatibility",a));const r={c:function(){T(t.$$.fragment)},l:function(i){L(t.$$.fragment,i)},m:function(i,l){q(t,i,l),c=!0},p:function(i,l){const u={};!s&&l&1&&(s=!0,u.compatibility=i[0].EA,bt(()=>s=!1)),t.$set(u)},i:function(i){c||(W(t.$$.fragment,i),c=!0)},o:function(i){J(t.$$.fragment,i),c=!1},d:function(i){Q(t,i)}};return k("SvelteRegisterBlock",{block:r,id:gt.name,type:"slot",source:'(27:4) <svelte:fragment slot=\\"content\\">',ctx:o}),r}function vt(o){let t,s="science",c,a=o[2]("experimental")+"",n,r,e=o[2]("compatibility")+"",i;const l={c:function(){t=x("span"),t.textContent=s,c=j(),n=R(a),r=R(" - "),i=R(e),this.h()},l:function(f){t=w(f,"SPAN",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-rqph63"&&(t.textContent=s),c=I(f),n=B(f,a),r=B(f," - "),i=B(f,e),this.h()},h:function(){P(t,"class","material-icons text-sm"),C(t,dt,36,6,1051)},m:function(f,m){g(f,t,m),g(f,c,m),g(f,n,m),g(f,r,m),g(f,i,m)},p:function(f,m){m&4&&a!==(a=f[2]("experimental")+"")&&Y(n,a),m&4&&e!==(e=f[2]("compatibility")+"")&&Y(i,e)},d:function(f){f&&(b(t),b(c),b(n),b(r),b(i))}};return k("SvelteRegisterBlock",{block:l,id:vt.name,type:"slot",source:'(32:4) <svelte:fragment slot=\\"summary\\">',ctx:o}),l}function Et(o){let t,s,c;function a(e){o[4](e)}let n={};o[0].EXP!==void 0&&(n.compatibility=o[0].EXP),t=new tt({props:n,$$inline:!0}),$t.push(()=>yt(t,"compatibility",a));const r={c:function(){T(t.$$.fragment)},l:function(i){L(t.$$.fragment,i)},m:function(i,l){q(t,i,l),c=!0},p:function(i,l){const u={};!s&&l&1&&(s=!0,u.compatibility=i[0].EXP,bt(()=>s=!1)),t.$set(u)},i:function(i){c||(W(t.$$.fragment,i),c=!0)},o:function(i){J(t.$$.fragment,i),c=!1},d:function(i){Q(t,i)}};return k("SvelteRegisterBlock",{block:r,id:Et.name,type:"slot",source:'(35:4) <svelte:fragment slot=\\"content\\">',ctx:o}),r}function xt(o){let t,s,c,a;t=new F({props:{$$slots:{content:[gt],summary:[ht]},$$scope:{ctx:o}},$$inline:!0}),c=new F({props:{$$slots:{content:[Et],summary:[vt]},$$scope:{ctx:o}},$$inline:!0});const n={c:function(){T(t.$$.fragment),s=j(),T(c.$$.fragment)},l:function(e){L(t.$$.fragment,e),s=I(e),L(c.$$.fragment,e)},m:function(e,i){q(t,e,i),g(e,s,i),q(c,e,i),a=!0},p:function(e,i){const l={};i&69&&(l.$$scope={dirty:i,ctx:e}),t.$set(l);const u={};i&69&&(u.$$scope={dirty:i,ctx:e}),c.$set(u)},i:function(e){a||(W(t.$$.fragment,e),W(c.$$.fragment,e),a=!0)},o:function(e){J(t.$$.fragment,e),J(c.$$.fragment,e),a=!1},d:function(e){e&&b(s),Q(t,e),Q(c,e)}};return k("SvelteRegisterBlock",{block:n,id:xt.name,type:"slot",source:"(22:0) <Accordion>",ctx:o}),n}function K(o){let t,s;t=new mt({props:{$$slots:{default:[xt]},$$scope:{ctx:o}},$$inline:!0});const c={c:function(){T(t.$$.fragment)},l:function(n){L(t.$$.fragment,n)},m:function(n,r){q(t,n,r),s=!0},p:function(n,[r]){const e={};r&69&&(e.$$scope={dirty:r,ctx:n}),t.$set(e)},i:function(n){s||(W(t.$$.fragment,n),s=!0)},o:function(n){J(t.$$.fragment,n),s=!1},d:function(n){Q(t,n)}};return k("SvelteRegisterBlock",{block:c,id:K.name,type:"component",source:"",ctx:o}),c}function It(o,t,s){let c,a=X,n=()=>(a(),a=pt(u,$=>s(2,c=$)),u);o.$$.on_destroy.push(()=>a());let{$$slots:r={},$$scope:e}=t;ft("ModCompatibilityEdit",r,[]);const i={EA:{state:O.Works,note:""},EXP:{state:O.Works,note:""}};let{compatibilityInfo:l=null}=t;const{t:u}=U();ut(u,"t"),n();const f=["compatibilityInfo"];Object.keys(t).forEach($=>{!~f.indexOf($)&&$.slice(0,2)!=="$$"&&$!=="slot"&&console.warn(`<ModCompatibilityEdit> was created with unknown prop '${$}'`)});function m($){o.$$.not_equal(l.EA,$)&&(l.EA=$,s(0,l))}function p($){o.$$.not_equal(l.EXP,$)&&(l.EXP=$,s(0,l))}return o.$$set=$=>{"compatibilityInfo"in $&&s(0,l=$.compatibilityInfo)},o.$capture_state=()=>({CompatibilityState:O,CompatibilityEdit:tt,getTranslate:U,Accordion:mt,AccordionItem:F,prefilledCompatibilityInfo:i,compatibilityInfo:l,t:u,$t:c}),o.$inject_state=$=>{"compatibilityInfo"in $&&s(0,l=$.compatibilityInfo)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),o.$$.update=()=>{o.$$.dirty&1&&l==null&&s(0,l=i)},[l,u,c,m,p]}class Ot extends lt{constructor(t){super(t),at(this,t,It,K,rt,{compatibilityInfo:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"ModCompatibilityEdit",options:t,id:K.name})}get compatibilityInfo(){throw new Error("<ModCompatibilityEdit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibilityInfo(t){throw new Error("<ModCompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<ModCompatibilityEdit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ot as M};
//# sourceMappingURL=ModCompatibilityEdit.eece188d.js.map
