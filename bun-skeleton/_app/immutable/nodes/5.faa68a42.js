import{S as ne,i as se,d as k,s as oe,v as ie,F as C,_ as I,G as D,a1 as ae,a2 as re,$ as R,H as q,a0 as ce,J,b as B,e as V,K as le,L as K,j as $,k as T,g as b,M as Q,h as j,N,m as x,O as U,n as S,Q as L,t as P,q as ue,r as M,R as W,p as fe,W as A,X as F,Y as de,u as w}from"../chunks/vendor.bc99403f.js";import{l as G,m as H}from"../chunks/graphql.80ff4abf.js";import{S as X}from"../chunks/SMLVersionForm.d3c07bac.js";import{M as Y}from"../chunks/MetaDescriptors.f3d170eb.js";const me=async({params:n})=>({...n}),Se=Object.freeze(Object.defineProperty({__proto__:null,load:me},Symbol.toStringTag,{value:"Module"})),{console:z}=ce,y="src/routes/admin/sml-versions/[smlVersionId]/edit/+page.svelte";function Z(n){let e,r;e=new X({props:{onSubmit:n[3],initialValues:n[1],submitText:"Save"},$$inline:!0});const s={c:function(){J(e.$$.fragment)},l:function(t){K(e.$$.fragment,t)},m:function(t,c){U(e,t,c),r=!0},p:function(t,c){const i={};c&2&&(i.initialValues=t[1]),e.$set(i)},i:function(t){r||(M(e.$$.fragment,t),r=!0)},o:function(t){P(e.$$.fragment,t),r=!1},d:function(t){W(e,t)}};return k("SvelteRegisterBlock",{block:s,id:Z.name,type:"else",source:"(63:4) {:else}",ctx:n}),s}function ee(n){let e,r,s=n[0].error.message+"",o;const t={c:function(){e=V("p"),r=A("Oh no... "),o=A(s),this.h()},l:function(i){e=b(i,"P",{});var a=j(e);r=F(a,"Oh no... "),o=F(a,s),a.forEach($),this.h()},h:function(){x(e,y,70,6,1935)},m:function(i,a){S(i,e,a),L(e,r),L(e,o)},p:function(i,a){a&1&&s!==(s=i[0].error.message+"")&&de(o,s)},i:w,o:w,d:function(i){i&&$(e)}};return k("SvelteRegisterBlock",{block:t,id:ee.name,type:"if",source:"(61:32) ",ctx:n}),t}function te(n){let e,r="Loading...";const s={c:function(){e=V("p"),e.textContent=r,this.h()},l:function(t){e=b(t,"P",{"data-svelte-h":!0}),Q(e)!=="svelte-qdsr2u"&&(e.textContent=r),this.h()},h:function(){x(e,y,68,6,1878)},m:function(t,c){S(t,e,c)},p:w,i:w,o:w,d:function(t){t&&$(e)}};return k("SvelteRegisterBlock",{block:s,id:te.name,type:"if",source:"(59:4) {#if $smlVersion.fetching}",ctx:n}),s}function O(n){let e,r,s,o="Edit SMLVersion",t,c,i,a,f,g;e=new Y({props:{description:"Edit SML Version",title:"Admin: Edit SML Version"},$$inline:!0});const h=[te,ee,Z],m=[];function E(d,l){return d[0].fetching?0:d[0].error?1:2}a=E(n),f=m[a]=h[a](n);const u={c:function(){J(e.$$.fragment),r=B(),s=V("h1"),s.textContent=o,t=B(),c=V("div"),i=V("section"),f.c(),this.h()},l:function(l){const p=le("svelte-7e9nlv",document.head);K(e.$$.fragment,p),p.forEach($),r=T(l),s=b(l,"H1",{class:!0,"data-svelte-h":!0}),Q(s)!=="svelte-1tcpdgj"&&(s.textContent=o),t=T(l),c=b(l,"DIV",{class:!0});var v=j(c);i=b(v,"SECTION",{});var _=j(i);f.l(_),_.forEach($),v.forEach($),this.h()},h:function(){N(s,"class","text-4xl my-4 font-bold"),x(s,y,63,0,1748),x(i,y,66,2,1831),N(c,"class","card p-4"),x(c,y,65,0,1806)},m:function(l,p){U(e,document.head,null),S(l,r,p),S(l,s,p),S(l,t,p),S(l,c,p),L(c,i),m[a].m(i,null),g=!0},p:function(l,[p]){let v=a;a=E(l),a===v?m[a].p(l,p):(fe(),P(m[v],1,1,()=>{m[v]=null}),ue(),f=m[a],f?f.p(l,p):(f=m[a]=h[a](l),f.c()),M(f,1),f.m(i,null))},i:function(l){g||(M(e.$$.fragment,l),M(f),g=!0)},o:function(l){P(e.$$.fragment,l),P(f),g=!1},d:function(l){l&&($(r),$(s),$(t),$(c)),W(e),m[a].d()}};return k("SvelteRegisterBlock",{block:u,id:O.name,type:"component",source:"",ctx:n}),u}function pe(n,e,r){let s,o,{$$slots:t={},$$scope:c}=e;ie("Page",t,[]);let{data:i}=e;const{smlVersionId:a}=i,f=C(),g=I(),h=D({query:G,client:f,variables:{smlVersionID:a}});ae(h,"smlVersion"),re(n,h,u=>r(0,o=u));const m=u=>{f.mutation(H,{smlVersionID:a,smlVersion:u}).toPromise().then(d=>{d.error?(console.error(d.error.message),g.trigger({message:"Error editing SMLVersion: "+d.error.message,background:"variant-filled-error",autohide:!1})):(g.trigger({message:"SML version updated",background:"variant-filled-success",timeout:5e3}),R(q+"/admin/sml-versions"))})};n.$$.on_mount.push(function(){i===void 0&&!("data"in e||n.$$.bound[n.$$.props.data])&&z.warn("<Page> was created without expected prop 'data'")});const E=["data"];return Object.keys(e).forEach(u=>{!~E.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&z.warn(`<Page> was created with unknown prop '${u}'`)}),n.$$set=u=>{"data"in u&&r(4,i=u.data)},n.$capture_state=()=>({getContextClient:C,queryStore:D,GetSmlVersionAdminDocument:G,UpdateSmlVersionDocument:H,goto:R,SMLVersionForm:X,base:q,MetaDescriptors:Y,getToastStore:I,data:i,smlVersionId:a,client:f,toastStore:g,smlVersion:h,onSubmit:m,initialValues:s,$smlVersion:o}),n.$inject_state=u=>{"data"in u&&r(4,i=u.data),"initialValues"in u&&r(1,s=u.initialValues)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&1&&r(1,s=o.data?{...o.data.getSMLVersion,logo:void 0}:void 0)},[o,s,h,m,i]}class Ve extends ne{constructor(e){super(e),se(this,e,pe,O,oe,{data:4}),k("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:O.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ve as component,Se as universal};
//# sourceMappingURL=5.faa68a42.js.map