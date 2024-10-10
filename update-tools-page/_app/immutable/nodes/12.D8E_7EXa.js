import{S as ke,i as xe,d as q,s as ye,v as Ge,F as te,J as ie,aj as ne,G as ae,ac as M,a1 as z,M as we,f as oe,b as F,e as y,X as U,a4 as Ee,j as m,k as A,g as G,h as j,R as K,Y as H,N,m as w,U as b,n as T,V as Se,r as I,t as O,q as se,u as R,x as Pe,P as de,Q as fe,T as ge,W as me,p as re,Z as _e}from"../chunks/vendor.CXVBaljs.js";import{l as ce,m as ue}from"../chunks/graphql.CNu7qPRc.js";import{G as pe}from"../chunks/GuideForm.CTmFOem3.js";import{M as he}from"../chunks/MetaDescriptors.DhSu6wlm.js";const Ce=async({params:n})=>({...n}),Re=Object.freeze(Object.defineProperty({__proto__:null,load:Ce},Symbol.toStringTag,{value:"Module"})),{console:le}=we,E="src/routes/guide/[guideId]/edit/+page.svelte";function J(n){let e,o;e=new he({props:{description:"Editing guide '"+n[1].data.getGuide.short_description+"'",title:"Edit guide '"+n[1].data.getGuide.name+"'"},$$inline:!0});const a={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,c){ge(e,t,c),o=!0},p:function(t,c){const u={};c&2&&(u.description="Editing guide '"+t[1].data.getGuide.short_description+"'"),c&2&&(u.title="Edit guide '"+t[1].data.getGuide.name+"'"),e.$set(u)},i:function(t){o||(I(e.$$.fragment,t),o=!0)},o:function(t){O(e.$$.fragment,t),o=!1},d:function(t){me(e,t)}};return q("SvelteRegisterBlock",{block:a,id:J.name,type:"if",source:"(62:2) {#if !$guide.fetching && !$guide.error && $guide.data.getGuide}",ctx:n}),a}function $e(n){let e,o;e=new pe({props:{onSubmit:n[2],initialValues:n[1].data.getGuide,submitText:"Save",submitIcon:"save"},$$inline:!0});const a={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,c){ge(e,t,c),o=!0},p:function(t,c){const u={};c&2&&(u.initialValues=t[1].data.getGuide),e.$set(u)},i:function(t){o||(I(e.$$.fragment,t),o=!0)},o:function(t){O(e.$$.fragment,t),o=!1},d:function(t){me(e,t)}};return q("SvelteRegisterBlock",{block:a,id:$e.name,type:"else",source:"(84:4) {:else}",ctx:n}),a}function ve(n){let e,o,a=n[1].error.message+"",i;const t={c:function(){e=y("p"),o=U("Oh no... "),i=U(a),this.h()},l:function(u){e=G(u,"P",{});var d=j(e);o=H(d,"Oh no... "),i=H(d,a),d.forEach(m),this.h()},h:function(){w(e,E,93,6,2536)},m:function(u,d){T(u,e,d),b(e,o),b(e,i)},p:function(u,d){d&2&&a!==(a=u[1].error.message+"")&&_e(i,a)},i:R,o:R,d:function(u){u&&m(e)}};return q("SvelteRegisterBlock",{block:t,id:ve.name,type:"if",source:"(82:27) ",ctx:n}),t}function be(n){let e,o="Loading...";const a={c:function(){e=y("p"),e.textContent=o,this.h()},l:function(t){e=G(t,"P",{"data-svelte-h":!0}),K(e)!=="svelte-qdsr2u"&&(e.textContent=o),this.h()},h:function(){w(e,E,91,6,2484)},m:function(t,c){T(t,e,c)},p:R,i:R,o:R,d:function(t){t&&m(e)}};return q("SvelteRegisterBlock",{block:a,id:be.name,type:"if",source:"(80:4) {#if $guide.fetching}",ctx:n}),a}function L(n){let e,o,a,i,t="Edit Guide",c,u,d,k,x="arrow_back",C,S,h,$,f,g,B,D,l,s=!n[1].fetching&&!n[1].error&&n[1].data.getGuide&&J(n);const Q=[be,ve,$e],P=[];function W(v,r){return v[1].fetching?0:v[1].error?1:2}f=W(n),g=P[f]=Q[f](n);const X={c:function(){s&&s.c(),e=oe(),o=F(),a=y("div"),i=y("h1"),i.textContent=t,c=F(),u=y("div"),d=y("button"),k=y("span"),k.textContent=x,C=U(`
      Back to Guide`),S=F(),h=y("div"),$=y("section"),g.c(),this.h()},l:function(r){const p=Ee("svelte-2z35li",document.head);s&&s.l(p),e=oe(),p.forEach(m),o=A(r),a=G(r,"DIV",{class:!0});var _=j(a);i=G(_,"H1",{class:!0,"data-svelte-h":!0}),K(i)!=="svelte-1alq187"&&(i.textContent=t),c=A(_),u=G(_,"DIV",{});var Y=j(u);d=G(Y,"BUTTON",{class:!0});var V=j(d);k=G(V,"SPAN",{class:!0,"data-svelte-h":!0}),K(k)!=="svelte-qua3zr"&&(k.textContent=x),C=H(V,`
      Back to Guide`),V.forEach(m),Y.forEach(m),_.forEach(m),S=A(r),h=G(r,"DIV",{class:!0});var Z=j(h);$=G(Z,"SECTION",{});var ee=j($);g.l(ee),ee.forEach(m),Z.forEach(m),this.h()},h:function(){N(i,"class","my-4 text-4xl font-bold"),w(i,E,80,2,2159),N(k,"class","material-icons pr-2"),w(k,E,83,6,2319),N(d,"class","variant-ghost-primary btn"),w(d,E,82,4,2223),w(u,E,81,2,2213),N(a,"class","flex h-auto flex-wrap items-center justify-between"),w(a,E,79,0,2092),w($,E,89,2,2442),N(h,"class","card p-4"),w(h,E,88,0,2417)},m:function(r,p){s&&s.m(document.head,null),b(document.head,e),T(r,o,p),T(r,a,p),b(a,i),b(a,c),b(a,u),b(u,d),b(d,k),b(d,C),T(r,S,p),T(r,h,p),b(h,$),P[f].m($,null),B=!0,D||(l=Se(d,"click",n[7],!1,!1,!1,!1),D=!0)},p:function(r,[p]){!r[1].fetching&&!r[1].error&&r[1].data.getGuide?s?(s.p(r,p),p&2&&I(s,1)):(s=J(r),s.c(),I(s,1),s.m(e.parentNode,e)):s&&(re(),O(s,1,1,()=>{s=null}),se());let _=f;f=W(r),f===_?P[f].p(r,p):(re(),O(P[_],1,1,()=>{P[_]=null}),se(),g=P[f],g?g.p(r,p):(g=P[f]=Q[f](r),g.c()),I(g,1),g.m($,null))},i:function(r){B||(I(s),I(g),B=!0)},o:function(r){O(s),O(g),B=!1},d:function(r){r&&(m(o),m(a),m(S),m(h)),s&&s.d(r),m(e),P[f].d(),D=!1,l()}};return q("SvelteRegisterBlock",{block:X,id:L.name,type:"component",source:"",ctx:n}),X}function Ie(n,e,o){let a,i,t,c=R,u=()=>(c(),c=Pe(i,l=>o(1,t=l)),i);n.$$.on_destroy.push(()=>c());let{$$slots:d={},$$scope:k}=e;Ge("Page",d,[]);let{data:x}=e;const C=te(),S=ie(),h=l=>{C.mutation(ce,{guideId:a,guide:l}).toPromise().then(s=>{s.error?(console.error(s.error.message),S.trigger({message:"Error editing guide: "+s.error.message,background:"variant-filled-error",autohide:!1})):(S.trigger({message:"Guide updated",background:"variant-filled-success",timeout:5e3}),M(z+"/guide/"+s.data.updateGuide.id))})},$=()=>{M(z+"/guide/"+a)},f={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:l=>{l&&$()}},g=ne();n.$$.on_mount.push(function(){x===void 0&&!("data"in e||n.$$.bound[n.$$.props.data])&&le.warn("<Page> was created without expected prop 'data'")});const B=["data"];Object.keys(e).forEach(l=>{!~B.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&le.warn(`<Page> was created with unknown prop '${l}'`)});const D=()=>g.trigger(f);return n.$$set=l=>{"data"in l&&o(5,x=l.data)},n.$capture_state=()=>({getContextClient:te,queryStore:ae,EditGuideDocument:ce,GetGuideDocument:ue,goto:M,GuideForm:pe,base:z,MetaDescriptors:he,getModalStore:ne,getToastStore:ie,data:x,client:C,toastStore:S,onSubmit:h,goBackFn:$,backModal:f,modalStore:g,guideId:a,guide:i,$guide:t}),n.$inject_state=l=>{"data"in l&&o(5,x=l.data),"guideId"in l&&o(6,a=l.guideId),"guide"in l&&u(o(0,i=l.guide))},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&32&&o(6,{guideId:a}=x,a),n.$$.dirty&64&&u(o(0,i=ae({query:ue,client:C,variables:{guide:a}})))},[i,t,h,f,g,x,a,D]}class qe extends ke{constructor(e){super(e),xe(this,e,Ie,L,ye,{data:5}),q("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:L.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{qe as component,Re as universal};
//# sourceMappingURL=12.D8E_7EXa.js.map
