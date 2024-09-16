import{S as et,i as ot,s as nt,d as k,v as it,aa as Q,H as dt,aj as W,e as w,P as j,b as I,g as v,h as E,Q as P,k as X,j as d,N as b,m as x,n as V,T as M,U as y,V as st,r as N,t as R,W as T,u as at,x as ht,a1 as D,X as Y,R as U,Y as Z,Z as G,f as J}from"./vendor.DD_stces.js";import{F as ct}from"./FicsitCard.CGaavVTo.js";import{i as K}from"./launcher.nm4Lq1Mz.js";import{a as A}from"./formatting.CJGi6h9M.js";import{C as z,a as tt,O as lt}from"./CompatibilityModal.NFxFx7u4.js";import{T as rt}from"./TagList.CX90afeh.js";const bt="src/lib/components/mods/compatibility/CompatibilityButton.svelte";function F(i){let t,e,s,a,n,o,c,r;e=new z({props:{compatibility:i[0]?.EA},$$inline:!0}),a=new z({props:{compatibility:i[0]?.EXP,EXP:!0},$$inline:!0});const l={c:function(){t=w("button"),j(e.$$.fragment),s=I(),j(a.$$.fragment),this.h()},l:function(f){t=v(f,"BUTTON",{class:!0,title:!0});var m=E(t);P(e.$$.fragment,m),s=X(m),P(a.$$.fragment,m),m.forEach(d),this.h()},h:function(){b(t,"class","variant-soft-surface btn m-0 min-w-0 px-1 py-0 text-xs"),b(t,"title",n=i[2]("compatibility-info.button")),x(t,bt,25,0,593)},m:function(f,m){V(f,t,m),M(e,t,null),y(t,s),M(a,t,null),o=!0,c||(r=st(t,"click",i[3],!1,!1,!1,!1),c=!0)},p:function(f,[m]){const u={};m&1&&(u.compatibility=f[0]?.EA),e.$set(u);const g={};m&1&&(g.compatibility=f[0]?.EXP),a.$set(g),(!o||m&4&&n!==(n=f[2]("compatibility-info.button")))&&b(t,"title",n)},i:function(f){o||(N(e.$$.fragment,f),N(a.$$.fragment,f),o=!0)},o:function(f){R(e.$$.fragment,f),R(a.$$.fragment,f),o=!1},d:function(f){f&&d(t),T(e),T(a),c=!1,r()}};return k("SvelteRegisterBlock",{block:l,id:F.name,type:"component",source:"",ctx:i}),l}function gt(i,t,e){let s,a=at,n=()=>(a(),a=ht(l,u=>e(2,s=u)),l);i.$$.on_destroy.push(()=>a());let{$$slots:o={},$$scope:c}=t;it("CompatibilityButton",o,[]);let{compatibility:r}=t;const{t:l}=Q();dt(l,"t"),n();const p=W(),f=()=>{p.trigger({type:"component",component:{ref:tt,props:{compatibility:r}}})};i.$$.on_mount.push(function(){r===void 0&&!("compatibility"in t||i.$$.bound[i.$$.props.compatibility])&&console.warn("<CompatibilityButton> was created without expected prop 'compatibility'")});const m=["compatibility"];return Object.keys(t).forEach(u=>{!~m.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<CompatibilityButton> was created with unknown prop '${u}'`)}),i.$$set=u=>{"compatibility"in u&&e(0,r=u.compatibility)},i.$capture_state=()=>({CompatibilityIcon:z,getTranslate:Q,getModalStore:W,CompatibilityModal:tt,compatibility:r,t:l,modalStore:p,openCompatibility:f,$t:s}),i.$inject_state=u=>{"compatibility"in u&&e(0,r=u.compatibility)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),[r,l,s,f]}class ft extends et{constructor(t){super(t),ot(this,t,gt,F,nt,{compatibility:0,t:1}),k("SvelteRegisterComponent",{component:this,tagName:"CompatibilityButton",options:t,id:F.name})}get compatibility(){throw new Error("<CompatibilityButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set compatibility(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(t){throw new Error("<CompatibilityButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const C="src/lib/components/mods/ModCard.svelte";function ut(i){let t,e,s,a="visibility",n=A(i[0].views)+"",o,c,r,l,p="download",f=A(i[0].downloads)+"",m,u,g,S;g=new ft({props:{compatibility:i[0].compatibility},$$inline:!0});const L={c:function(){t=w("div"),e=w("span"),s=w("span"),s.textContent=a,o=Y(n),c=I(),r=w("span"),l=w("span"),l.textContent=p,m=Y(f),u=I(),j(g.$$.fragment),this.h()},l:function($){t=v($,"DIV",{slot:!0,class:!0});var h=E(t);e=v(h,"SPAN",{});var _=E(e);s=v(_,"SPAN",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-12ecnwz"&&(s.textContent=a),o=Z(_,n),_.forEach(d),c=X(h),r=v(h,"SPAN",{});var O=E(r);l=v(O,"SPAN",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-1rth8xv"&&(l.textContent=p),m=Z(O,f),O.forEach(d),u=X(h),P(g.$$.fragment,h),h.forEach(d),this.h()},h:function(){b(s,"class","material-icons mr-1 align-middle text-sm"),x(s,C,41,10,871),x(e,C,41,4,865),b(l,"class","material-icons mr-1 align-middle text-sm"),x(l,C,42,10,986),x(r,C,42,4,980),b(t,"slot","stats"),b(t,"class","flex flex-row items-center gap-2"),x(t,C,40,2,801)},m:function($,h){V($,t,h),y(t,e),y(e,s),y(e,o),y(t,c),y(t,r),y(r,l),y(r,m),y(t,u),M(g,t,null),S=!0},p:function($,h){(!S||h&1)&&n!==(n=A($[0].views)+"")&&G(o,n),(!S||h&1)&&f!==(f=A($[0].downloads)+"")&&G(m,f);const _={};h&1&&(_.compatibility=$[0].compatibility),g.$set(_)},i:function($){S||(N(g.$$.fragment,$),S=!0)},o:function($){R(g.$$.fragment,$),S=!1},d:function($){$&&d(t),T(g)}};return k("SvelteRegisterBlock",{block:L,id:ut.name,type:"slot",source:"(19:2) ",ctx:i}),L}function mt(i){let t,e,s;e=new rt({props:{tags:i[0].tags},$$inline:!0});const a={c:function(){t=w("div"),j(e.$$.fragment),this.h()},l:function(o){t=v(o,"DIV",{slot:!0});var c=E(t);P(e.$$.fragment,c),c.forEach(d),this.h()},h:function(){b(t,"slot","tags"),x(t,C,45,2,1166)},m:function(o,c){V(o,t,c),M(e,t,null),s=!0},p:function(o,c){const r={};c&1&&(r.tags=o[0].tags),e.$set(r)},i:function(o){s||(N(e.$$.fragment,o),s=!0)},o:function(o){R(e.$$.fragment,o),s=!1},d:function(o){o&&d(t),T(e)}};return k("SvelteRegisterBlock",{block:a,id:mt.name,type:"slot",source:"(24:2) ",ctx:i}),a}function q(i){let t,e,s="download",a,n;const o={c:function(){t=w("button"),e=w("span"),e.textContent=s,this.h()},l:function(r){t=v(r,"BUTTON",{class:!0,title:!0});var l=E(t);e=v(l,"SPAN",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-rqt9z7"&&(e.textContent=s),l.forEach(d),this.h()},h:function(){b(e,"class","material-icons"),x(e,C,51,8,1408),b(t,"class","variant-soft-surface btn btn-sm"),b(t,"title","Install"),x(t,C,50,6,1288)},m:function(r,l){V(r,t,l),y(t,e),a||(n=st(t,"click",i[2],!1,!1,!1,!1),a=!0)},p:at,d:function(r){r&&d(t),a=!1,n()}};return k("SvelteRegisterBlock",{block:o,id:q.name,type:"if",source:"(28:4) {#if installable}",ctx:i}),o}function pt(i){let t,e=i[1]&&q(i);const s={c:function(){e&&e.c(),t=J()},l:function(n){e&&e.l(n),t=J()},m:function(n,o){e&&e.m(n,o),V(n,t,o)},p:function(n,o){n[1]?e?e.p(n,o):(e=q(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d:function(n){n&&d(t),e&&e.d(n)}};return k("SvelteRegisterBlock",{block:s,id:pt.name,type:"slot",source:'(27:2) <svelte:fragment slot=\\"actions\\">',ctx:i}),s}function $t(i){let t,e,s;e=new lt({props:{compatibility:i[0].compatibility},$$inline:!0});const a={c:function(){t=w("div"),j(e.$$.fragment),this.h()},l:function(o){t=v(o,"DIV",{slot:!0});var c=E(t);P(e.$$.fragment,c),c.forEach(d),this.h()},h:function(){b(t,"slot","outer"),x(t,C,55,2,1502)},m:function(o,c){V(o,t,c),M(e,t,null),s=!0},p:function(o,c){const r={};c&1&&(r.compatibility=o[0].compatibility),e.$set(r)},i:function(o){s||(N(e.$$.fragment,o),s=!0)},o:function(o){R(e.$$.fragment,o),s=!1},d:function(o){o&&d(t),T(e)}};return k("SvelteRegisterBlock",{block:a,id:$t.name,type:"slot",source:"(34:2) ",ctx:i}),a}function H(i){let t,e;t=new ct({props:{name:i[0].name,link:D+"/mod/"+i[0].mod_reference,logo:i[0].logo,thumbhash:i[0].logo_thumbhash,description:i[0].short_description,$$slots:{outer:[$t],actions:[pt],tags:[mt],stats:[ut]},$$scope:{ctx:i}},$$inline:!0});const s={c:function(){j(t.$$.fragment)},l:function(n){P(t.$$.fragment,n)},m:function(n,o){M(t,n,o),e=!0},p:function(n,[o]){const c={};o&1&&(c.name=n[0].name),o&1&&(c.link=D+"/mod/"+n[0].mod_reference),o&1&&(c.logo=n[0].logo),o&1&&(c.thumbhash=n[0].logo_thumbhash),o&1&&(c.description=n[0].short_description),o&11&&(c.$$scope={dirty:o,ctx:n}),t.$set(c)},i:function(n){e||(N(t.$$.fragment,n),e=!0)},o:function(n){R(t.$$.fragment,n),e=!1},d:function(n){T(t,n)}};return k("SvelteRegisterBlock",{block:s,id:H.name,type:"component",source:"",ctx:i}),s}function yt(i,t,e){let s,{$$slots:a={},$$scope:n}=t;it("ModCard",a,[]);let{mod:o}=t;i.$$.on_mount.push(function(){o===void 0&&!("mod"in t||i.$$.bound[i.$$.props.mod])&&console.warn("<ModCard> was created without expected prop 'mod'")});const c=["mod"];Object.keys(t).forEach(l=>{!~c.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<ModCard> was created with unknown prop '${l}'`)});const r=()=>K(o.mod_reference);return i.$$set=l=>{"mod"in l&&e(0,o=l.mod)},i.$capture_state=()=>({base:D,FicsitCard:ct,installMod:K,prettyNumber:A,OutdatedBanner:lt,CompatibilityButton:ft,TagList:rt,mod:o,installable:s}),i.$inject_state=l=>{"mod"in l&&e(0,o=l.mod),"installable"in l&&e(1,s=l.installable)},t&&"$$inject"in t&&i.$inject_state(t.$$inject),i.$$.update=()=>{i.$$.dirty&1&&e(1,s="latestVersions"in o?o.latestVersions.alpha||o.latestVersions.beta||o.latestVersions.release:!1)},[o,s,r]}class Et extends et{constructor(t){super(t),ot(this,t,yt,H,nt,{mod:0}),k("SvelteRegisterComponent",{component:this,tagName:"ModCard",options:t,id:H.name})}get mod(){throw new Error("<ModCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set mod(t){throw new Error("<ModCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Et as M};
//# sourceMappingURL=ModCard.BuGAI7gD.js.map
