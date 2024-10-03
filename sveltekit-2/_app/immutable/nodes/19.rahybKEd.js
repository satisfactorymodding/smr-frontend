import{S as Ve,i as ke,d as M,s as xe,v as ye,F as te,_ as ne,G as oe,a1 as we,a2 as Se,am as se,$ as G,H as z,a0 as Ee,f as ie,b as F,e as x,W as H,K as Pe,j as p,k as A,g as y,h as B,M as K,X as L,N as D,m as w,Q as V,n as O,Z as Ce,r as I,t as R,q as ae,J as de,L as fe,O as me,R as ge,p as re,Y as Ie,u as N}from"../chunks/vendor.EnQYnbEU.js";import{t as ce,u as le}from"../chunks/graphql.olkSQdQZ.js";import{V as pe}from"../chunks/VersionForm.0hACnmFF.js";import{M as ve}from"../chunks/MetaDescriptors.hIol7D0u.js";const _e=async({params:n})=>({...n}),Te=Object.freeze(Object.defineProperty({__proto__:null,load:_e},Symbol.toStringTag,{value:"Module"})),{console:ue}=Ee,S="src/routes/mod/[modId]/version/[versionId]/edit/+page.svelte";function U(n){let e,a;e=new ve({props:{description:"Editing mod version "+n[0].data.getVersion.mod.name+" "+n[0].data.getVersion.version,title:"Edit mod version "+n[0].data.getVersion.mod.name+" "+n[0].data.getVersion.version},$$inline:!0});const s={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,l){me(e,t,l),a=!0},p:function(t,l){const i={};l&1&&(i.description="Editing mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),l&1&&(i.title="Edit mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version),e.$set(i)},i:function(t){a||(I(e.$$.fragment,t),a=!0)},o:function(t){R(e.$$.fragment,t),a=!1},d:function(t){ge(e,t)}};return M("SvelteRegisterBlock",{block:s,id:U.name,type:"if",source:"(66:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:n}),s}function he(n){let e,a;e=new pe({props:{onSubmit:n[3],initialValues:n[1],modReference:n[0].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save",submitIcon:"save"},$$inline:!0});const s={c:function(){de(e.$$.fragment)},l:function(t){fe(e.$$.fragment,t)},m:function(t,l){me(e,t,l),a=!0},p:function(t,l){const i={};l&2&&(i.initialValues=t[1]),l&1&&(i.modReference=t[0].data.getVersion.mod.mod_reference),e.$set(i)},i:function(t){a||(I(e.$$.fragment,t),a=!0)},o:function(t){R(e.$$.fragment,t),a=!1},d:function(t){ge(e,t)}};return M("SvelteRegisterBlock",{block:s,id:he.name,type:"else",source:"(88:4) {:else}",ctx:n}),s}function $e(n){let e,a,s=n[0].error.message+"",o;const t={c:function(){e=x("p"),a=H("Oh no... "),o=H(s),this.h()},l:function(i){e=y(i,"P",{});var u=B(e);a=L(u,"Oh no... "),o=L(u,s),u.forEach(p),this.h()},h:function(){w(e,S,99,6,2754)},m:function(i,u){O(i,e,u),V(e,a),V(e,o)},p:function(i,u){u&1&&s!==(s=i[0].error.message+"")&&Ie(o,s)},i:N,o:N,d:function(i){i&&p(e)}};return M("SvelteRegisterBlock",{block:t,id:$e.name,type:"if",source:"(86:29) ",ctx:n}),t}function be(n){let e,a="Loading...";const s={c:function(){e=x("p"),e.textContent=a,this.h()},l:function(t){e=y(t,"P",{"data-svelte-h":!0}),K(e)!=="svelte-qdsr2u"&&(e.textContent=a),this.h()},h:function(){w(e,S,97,6,2700)},m:function(t,l){O(t,e,l)},p:N,i:N,o:N,d:function(t){t&&p(e)}};return M("SvelteRegisterBlock",{block:s,id:be.name,type:"if",source:"(84:4) {#if $version.fetching}",ctx:n}),s}function J(n){let e,a,s,o,t="Edit Version",l,i,u,g,_="arrow_back",C,k,h,$,f,m,j,T,d,c=!n[0].fetching&&!n[0].error&&n[0].data.getVersion&&U(n);const Q=[be,$e,he],E=[];function W(b,r){return b[0].fetching?0:b[0].error?1:2}f=W(n),m=E[f]=Q[f](n);const X={c:function(){c&&c.c(),e=ie(),a=F(),s=x("div"),o=x("h1"),o.textContent=t,l=F(),i=x("div"),u=x("button"),g=x("span"),g.textContent=_,C=H(`
      Back to Versions`),k=F(),h=x("div"),$=x("section"),m.c(),this.h()},l:function(r){const v=Pe("svelte-wzsk0g",document.head);c&&c.l(v),e=ie(),v.forEach(p),a=A(r),s=y(r,"DIV",{class:!0});var P=B(s);o=y(P,"H1",{class:!0,"data-svelte-h":!0}),K(o)!=="svelte-1n0bkh"&&(o.textContent=t),l=A(P),i=y(P,"DIV",{});var Y=B(i);u=y(Y,"BUTTON",{class:!0});var q=B(u);g=y(q,"SPAN",{class:!0,"data-svelte-h":!0}),K(g)!=="svelte-qua3zr"&&(g.textContent=_),C=L(q,`
      Back to Versions`),q.forEach(p),Y.forEach(p),P.forEach(p),k=A(r),h=y(r,"DIV",{class:!0});var Z=B(h);$=y(Z,"SECTION",{});var ee=B($);m.l(ee),ee.forEach(p),Z.forEach(p),this.h()},h:function(){D(o,"class","text-4xl my-4 font-bold"),w(o,S,86,2,2368),D(g,"class","material-icons pr-2"),w(g,S,89,6,2530),D(u,"class","btn variant-ghost-primary"),w(u,S,88,4,2434),w(i,S,87,2,2424),D(s,"class","flex flex-wrap h-auto justify-between items-center"),w(s,S,85,0,2301),w($,S,95,2,2656),D(h,"class","card p-4"),w(h,S,94,0,2631)},m:function(r,v){c&&c.m(document.head,null),V(document.head,e),O(r,a,v),O(r,s,v),V(s,o),V(s,l),V(s,i),V(i,u),V(u,g),V(u,C),O(r,k,v),O(r,h,v),V(h,$),E[f].m($,null),j=!0,T||(d=Ce(u,"click",n[7],!1,!1,!1,!1),T=!0)},p:function(r,[v]){!r[0].fetching&&!r[0].error&&r[0].data.getVersion?c?(c.p(r,v),v&1&&I(c,1)):(c=U(r),c.c(),I(c,1),c.m(e.parentNode,e)):c&&(re(),R(c,1,1,()=>{c=null}),ae());let P=f;f=W(r),f===P?E[f].p(r,v):(re(),R(E[P],1,1,()=>{E[P]=null}),ae(),m=E[f],m?m.p(r,v):(m=E[f]=Q[f](r),m.c()),I(m,1),m.m($,null))},i:function(r){j||(I(c),I(m),j=!0)},o:function(r){R(c),R(m),j=!1},d:function(r){r&&(p(a),p(s),p(k),p(h)),c&&c.d(r),p(e),E[f].d(),T=!1,d()}};return M("SvelteRegisterBlock",{block:X,id:J.name,type:"component",source:"",ctx:n}),X}function je(n,e,a){let s,o,{$$slots:t={},$$scope:l}=e;ye("Page",t,[]);let{data:i}=e;const{modId:u,versionId:g}=i,_=te(),C=ne(),k=oe({query:ce,client:_,variables:{version:g}});we(k,"version"),Se(n,k,d=>a(0,o=d));const h=async d=>_.mutation(le,{versionId:g,version:d}).toPromise().then(c=>{if(c.error)console.error(c.error.message),C.trigger({message:"Error editing version: "+c.error.message,background:"variant-filled-error",autohide:!1});else return C.trigger({message:"Version updated",background:"variant-filled-success",timeout:5e3}),G(z+"/mod/"+u+"/version/"+g)}),$=()=>{G(z+"/mod/"+u+"/version/"+g)},f={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:d=>{d&&$()}},m=se();n.$$.on_mount.push(function(){i===void 0&&!("data"in e||n.$$.bound[n.$$.props.data])&&ue.warn("<Page> was created without expected prop 'data'")});const j=["data"];Object.keys(e).forEach(d=>{!~j.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&ue.warn(`<Page> was created with unknown prop '${d}'`)});const T=()=>m.trigger(f);return n.$$set=d=>{"data"in d&&a(6,i=d.data)},n.$capture_state=()=>({queryStore:oe,getContextClient:te,GetModVersionDocument:ce,UpdateVersionDocument:le,goto:G,VersionForm:pe,base:z,MetaDescriptors:ve,getModalStore:se,getToastStore:ne,data:i,modId:u,versionId:g,client:_,toastStore:C,version:k,onSubmit:h,goBackFn:$,backModal:f,modalStore:m,initialValues:s,$version:o}),n.$inject_state=d=>{"data"in d&&a(6,i=d.data),"initialValues"in d&&a(1,s=d.initialValues)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&1&&a(1,s=o.data?{...o.data.getVersion,logo:void 0}:void 0)},[o,s,k,h,f,m,i,T]}class De extends Ve{constructor(e){super(e),ke(this,e,je,J,xe,{data:6}),M("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:J.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{De as component,Te as universal};
//# sourceMappingURL=19.rahybKEd.js.map