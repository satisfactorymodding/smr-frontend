import{S as O,i as R,s as z,K as v,L as V,N as j,v as g,w as h,Q as E,bc as A,I as B,J,a7 as T,d as N,e as q,a8 as I,aW as K,j as u,f as C,g as M,h as P,a9 as w,Y as Q,Z as b,l as $,a0 as F,P as U,aG as W,a3 as Y,aF as Z,aH as X,bd as x,$ as L,aa as G,ad as S}from"../../../../../chunks/vendor-ec5ada1e.js";import{p as ee}from"../../../../../chunks/routing-689f9c1f.js";import{B as te,I as ne}from"../../../../../chunks/graphql-b763070c.js";import{T as re}from"../../../../../chunks/Toast-ae7e9d4e.js";import{g as se}from"../../../../../chunks/navigation-d7362a67.js";import{V as oe}from"../../../../../chunks/VersionForm-39d1ebe2.js";import{b as ae}from"../../../../../chunks/paths-396f020f.js";import{M as ie}from"../../../../../chunks/MetaDescriptors-906e206a.js";import"../../../../../chunks/singletons-d19c42e4.js";import"../../../../../chunks/forms-2be97dc2.js";import"../../../../../chunks/jszip-650ad10c.js";import"../../../../../chunks/extras-7497b851.js";import"../../../../../chunks/uplugin-39034714.js";import"../../../../../chunks/api-82c76902.js";import"../../../../../chunks/user-eeec5cd2.js";import"../../../../../chunks/forms-41b68a57.js";import"../../../../../chunks/markdown-e391b8a1.js";import"../../../../../chunks/formatting-24701f16.js";import"../../../../../chunks/stores-bab812ef.js";function H(o){let t,n;return t=new ie({props:{description:"Editing mod version "+o[1].data.getVersion.mod.name+" "+o[1].data.getVersion.version,title:"Edit mod version "+o[1].data.getVersion.mod.name+" "+o[1].data.getVersion.version}}),{c(){v(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){j(t,e,r),n=!0},p(e,r){const f={};r&2&&(f.description="Editing mod version "+e[1].data.getVersion.mod.name+" "+e[1].data.getVersion.version),r&2&&(f.title="Edit mod version "+e[1].data.getVersion.mod.name+" "+e[1].data.getVersion.version),t.$set(f)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function fe(o){let t,n;return t=new oe({props:{onSubmit:o[5],initialValues:o[3],modReference:o[1].data.getVersion.mod.mod_reference,editing:!0,submitText:"Save"}}),{c(){v(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){j(t,e,r),n=!0},p(e,r){const f={};r&8&&(f.initialValues=e[3]),r&2&&(f.modReference=e[1].data.getVersion.mod.mod_reference),t.$set(f)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function ce(o){let t,n,e=o[1].error.message+"",r;return{c(){t=q("p"),n=I("Oh no... "),r=I(e)},l(f){t=M(f,"P",{});var i=P(t);n=w(i,"Oh no... "),r=w(i,e),i.forEach(u)},m(f,i){$(f,t,i),b(t,n),b(t,r)},p(f,i){i&2&&e!==(e=f[1].error.message+"")&&G(r,e)},i:S,o:S,d(f){f&&u(t)}}}function me(o){let t,n;return{c(){t=q("p"),n=I("Loading...")},l(e){t=M(e,"P",{});var r=P(t);n=w(r,"Loading..."),r.forEach(u)},m(e,r){$(e,t,r),b(t,n)},p:S,i:S,o:S,d(e){e&&u(t)}}}function le(o){let t,n,e,r;const f=[me,ce,fe],i=[];function p(a,l){return a[1].fetching?0:a[1].error?1:2}return t=p(o),n=i[t]=f[t](o),{c(){n.c(),e=T()},l(a){n.l(a),e=T()},m(a,l){i[t].m(a,l),$(a,e,l),r=!0},p(a,l){let _=t;t=p(a),t===_?i[t].p(a,l):(L(),h(i[_],1,1,()=>{i[_]=null}),F(),n=i[t],n?n.p(a,l):(n=i[t]=f[t](a),n.c()),g(n,1),n.m(e.parentNode,e))},i(a){r||(g(n),r=!0)},o(a){h(n),r=!1},d(a){i[t].d(a),a&&u(e)}}}function ue(o){let t,n;return t=new x({props:{$$slots:{default:[le]},$$scope:{ctx:o}}}),{c(){v(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){j(t,e,r),n=!0},p(e,r){const f={};r&1034&&(f.$$scope={dirty:r,ctx:e}),t.$set(f)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function de(o){let t,n;return{c(){t=q("span"),n=I(o[2])},l(e){t=M(e,"SPAN",{});var r=P(t);n=w(r,o[2]),r.forEach(u)},m(e,r){$(e,t,r),b(t,n)},p(e,r){r&4&&G(n,e[2])},d(e){e&&u(t)}}}function pe(o){let t,n,e,r,f,i,p,a,l,_,c=!o[1].fetching&&!o[1].error&&o[1].data.getVersion&&H(o);i=new A({props:{$$slots:{default:[ue]},$$scope:{ctx:o}}});function y(s){o[8](s)}let d={$$slots:{default:[de]},$$scope:{ctx:o}};return o[0]!==void 0&&(d.running=o[0]),a=new re({props:d}),B.push(()=>J(a,"running",y)),{c(){c&&c.c(),t=T(),n=N(),e=q("h1"),r=I("Edit Version"),f=N(),v(i.$$.fragment),p=N(),v(a.$$.fragment),this.h()},l(s){const m=K('[data-svelte="svelte-1gp98ge"]',document.head);c&&c.l(m),t=T(),m.forEach(u),n=C(s),e=M(s,"H1",{class:!0});var k=P(e);r=w(k,"Edit Version"),k.forEach(u),f=C(s),V(i.$$.fragment,s),p=C(s),V(a.$$.fragment,s),this.h()},h(){Q(e,"class","text-4xl my-4 font-bold")},m(s,m){c&&c.m(document.head,null),b(document.head,t),$(s,n,m),$(s,e,m),b(e,r),$(s,f,m),j(i,s,m),$(s,p,m),j(a,s,m),_=!0},p(s,[m]){!s[1].fetching&&!s[1].error&&s[1].data.getVersion?c?(c.p(s,m),m&2&&g(c,1)):(c=H(s),c.c(),g(c,1),c.m(t.parentNode,t)):c&&(L(),h(c,1,1,()=>{c=null}),F());const k={};m&1034&&(k.$$scope={dirty:m,ctx:s}),i.$set(k);const D={};m&1028&&(D.$$scope={dirty:m,ctx:s}),!l&&m&1&&(l=!0,D.running=s[0],U(()=>l=!1)),a.$set(D)},i(s){_||(g(c),g(i.$$.fragment,s),g(a.$$.fragment,s),_=!0)},o(s){h(c),h(i.$$.fragment,s),h(a.$$.fragment,s),_=!1},d(s){c&&c.d(s),u(t),s&&u(n),s&&u(e),s&&u(f),E(i,s),s&&u(p),E(a,s)}}}const Ce=ee();function _e(o,t,n){let e,r,{modId:f}=t,{versionId:i}=t,p="",a=!1;const l=W(te,{version:i});Y(o,l,d=>n(1,r=d));const _=Z({query:ne}),c=async d=>_({versionId:i,version:d}).then(s=>{if(s.error)console.error(s.error.message),n(2,p="Error editing version: "+s.error.message),n(0,a=!0);else return se(ae+"/mod/"+f+"/version/"+i)});X(l);function y(d){a=d,n(0,a)}return o.$$set=d=>{"modId"in d&&n(6,f=d.modId),"versionId"in d&&n(7,i=d.versionId)},o.$$.update=()=>{o.$$.dirty&1&&(a||n(2,p="")),o.$$.dirty&2&&n(3,e=r.data?{...r.data.getVersion,logo:void 0}:void 0)},[a,r,p,e,l,c,f,i,y]}class Fe extends O{constructor(t){super();R(this,t,_e,pe,z,{modId:6,versionId:7})}}export{Fe as default,Ce as load};
//# sourceMappingURL=edit.svelte-fc355f78.js.map
