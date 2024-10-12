import{S as Z,i as ee,s as te,b as z,a as j,e as b,Y as re,f as u,g as B,c as y,d as O,K as D,A as P,M as E,j as C,N as se,m as k,t as I,l as H,C as ae,G as ne,ae as oe,D as ie,I as Q,J as Y,L as W,O as X,k as R,q as _,r as le,a7 as A,a0 as K,P as U,Q as F,R as de}from"../chunks/vendor.DBwCcoHF.js";import{r as ce,s as fe}from"../chunks/graphql.sMbDXPDh.js";import{V as ue}from"../chunks/VersionForm.DhoZAjpj.js";import{M as me}from"../chunks/MetaDescriptors.BnMuLQUR.js";const ge=async({params:s})=>({...s}),ke=Object.freeze(Object.defineProperty({__proto__:null,load:ge},Symbol.toStringTag,{value:"Module"}));function J(s){let t,n;return t=new me({props:{description:"Editing mod version "+s[0].data.getVersion.mod.name+" "+s[0].data.getVersion.version,title:"Edit mod version "+s[0].data.getVersion.mod.name+" "+s[0].data.getVersion.version}}),{c(){Q(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,r){W(t,e,r),n=!0},p(e,r){const i={};r&1&&(i.description="Editing mod version "+e[0].data.getVersion.mod.name+" "+e[0].data.getVersion.version),r&1&&(i.title="Edit mod version "+e[0].data.getVersion.mod.name+" "+e[0].data.getVersion.version),t.$set(i)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function pe(s){let t,n;return t=new ue({props:{onSubmit:s[3],initialValues:s[1],modReference:s[0].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save",submitIcon:"save"}}),{c(){Q(t.$$.fragment)},l(e){Y(t.$$.fragment,e)},m(e,r){W(t,e,r),n=!0},p(e,r){const i={};r&2&&(i.initialValues=e[1]),r&1&&(i.modReference=e[0].data.getVersion.mod.mod_reference),t.$set(i)},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){X(t,e)}}}function ve(s){let t,n,e=s[0].error.message+"",r;return{c(){t=b("p"),n=U("Oh no... "),r=U(e)},l(i){t=y(i,"P",{});var l=O(t);n=F(l,"Oh no... "),r=F(l,e),l.forEach(u)},m(i,l){C(i,t,l),E(t,n),E(t,r)},p(i,l){l&1&&e!==(e=i[0].error.message+"")&&de(r,e)},i:_,o:_,d(i){i&&u(t)}}}function he(s){let t,n="Loading...";return{c(){t=b("p"),t.textContent=n},l(e){t=y(e,"P",{"data-svelte-h":!0}),D(t)!=="svelte-qdsr2u"&&(t.textContent=n)},m(e,r){C(e,t,r)},p:_,i:_,o:_,d(e){e&&u(t)}}}function $e(s){let t,n,e,r,i="Edit Version",l,g,m,S=`<span class="material-icons pr-2">arrow_back</span>
      Back to Versions`,h,p,v,d,c,x,w,M,a=!s[0].fetching&&!s[0].error&&s[0].data.getVersion&&J(s);const T=[he,ve,pe],$=[];function G(o,f){return o[0].fetching?0:o[0].error?1:2}return d=G(s),c=$[d]=T[d](s),{c(){a&&a.c(),t=z(),n=j(),e=b("div"),r=b("h1"),r.textContent=i,l=j(),g=b("div"),m=b("button"),m.innerHTML=S,h=j(),p=b("div"),v=b("section"),c.c(),this.h()},l(o){const f=re("svelte-wzsk0g",document.head);a&&a.l(f),t=z(),f.forEach(u),n=B(o),e=y(o,"DIV",{class:!0});var V=O(e);r=y(V,"H1",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-142h57n"&&(r.textContent=i),l=B(V),g=y(V,"DIV",{});var q=O(g);m=y(q,"BUTTON",{class:!0,"data-svelte-h":!0}),D(m)!=="svelte-1wwz687"&&(m.innerHTML=S),q.forEach(u),V.forEach(u),h=B(o),p=y(o,"DIV",{class:!0});var L=O(p);v=y(L,"SECTION",{});var N=O(v);c.l(N),N.forEach(u),L.forEach(u),this.h()},h(){P(r,"class","my-4 text-4xl font-bold"),P(m,"class","variant-ghost-primary btn"),P(e,"class","flex h-auto flex-wrap items-center justify-between"),P(p,"class","card p-4")},m(o,f){a&&a.m(document.head,null),E(document.head,t),C(o,n,f),C(o,e,f),E(e,r),E(e,l),E(e,g),E(g,m),C(o,h,f),C(o,p,f),E(p,v),$[d].m(v,null),x=!0,w||(M=se(m,"click",s[8]),w=!0)},p(o,[f]){!o[0].fetching&&!o[0].error&&o[0].data.getVersion?a?(a.p(o,f),f&1&&k(a,1)):(a=J(o),a.c(),k(a,1),a.m(t.parentNode,t)):a&&(R(),I(a,1,1,()=>{a=null}),H());let V=d;d=G(o),d===V?$[d].p(o,f):(R(),I($[V],1,1,()=>{$[V]=null}),H(),c=$[d],c?c.p(o,f):(c=$[d]=T[d](o),c.c()),k(c,1),c.m(v,null))},i(o){x||(k(a),k(c),x=!0)},o(o){I(a),I(c),x=!1},d(o){o&&(u(n),u(e),u(h),u(p)),a&&a.d(o),u(t),$[d].d(),w=!1,M()}}}function Ve(s,t,n){let e,r,i,l,g,m=_,S=()=>(m(),m=le(i,a=>n(0,g=a)),i);s.$$.on_destroy.push(()=>m());let{data:h}=t;const p=ae(),v=ne(),d=async a=>p.mutation(fe,{versionId:r,version:a}).toPromise().then(T=>{if(T.error)console.error(T.error.message),v.trigger({message:"Error editing version: "+T.error.message,background:"variant-filled-error",autohide:!1});else return v.trigger({message:"Version updated",background:"variant-filled-success",timeout:5e3}),A(K+"/mod/"+e+"/version/"+r)}),c=()=>{A(K+"/mod/"+e+"/version/"+r)},x={type:"confirm",title:"Go Back?",buttonTextCancel:"Keep Editing",buttonTextConfirm:"Go Back",body:"Going back will discard any unsaved changes. Are you sure you wish to continue?",response:a=>{a&&c()}},w=oe(),M=()=>w.trigger(x);return s.$$set=a=>{"data"in a&&n(6,h=a.data)},s.$$.update=()=>{s.$$.dirty&64&&n(7,{modId:e,versionId:r}=h,r),s.$$.dirty&128&&S(n(2,i=ie({query:ce,client:p,variables:{version:r}}))),s.$$.dirty&1&&n(1,l=g.data?{...g.data.getVersion,logo:void 0}:void 0)},[g,l,i,d,x,w,h,r,M]}class we extends Z{constructor(t){super(),ee(this,t,Ve,$e,te,{data:6})}}export{we as component,ke as universal};
//# sourceMappingURL=19.DpRGiOQ1.js.map