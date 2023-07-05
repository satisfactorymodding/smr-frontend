import{S as W,i as X,d as k,s as Y,bh as P,r as tt,aa as et,v as nt,aJ as L,aM as R,aZ as j,bi as _,Q as ot,a3 as S,a1 as C,x as A,ab as D,bb as st,a4 as b,q as m,a2 as V,y as O,z as q,ac as z,a9 as rt,C as F,a5 as w,l as x,a8 as H,ae as it,p as v,t as M,a7 as y,N as at,ad as ct}from"../chunks/vendor.37b6f580.js";import{N as B}from"../chunks/graphql.cb6ec208.js";import{T as J}from"../chunks/Toast.0f11c52a.js";import{S as G}from"../chunks/SMLVersionForm.25221360.js";import{M as K}from"../chunks/MetaDescriptors.1f905892.js";const{console:ft}=ot,Q="src/routes/admin/sml-versions/new/+page.svelte";function Z(r){let t,s;t=new G({props:{onSubmit:r[2]},$$inline:!0});const a={c:function(){S(t.$$.fragment)},l:function(e){b(t.$$.fragment,e)},m:function(e,o){w(t,e,o),s=!0},p:at,i:function(e){s||(v(t.$$.fragment,e),s=!0)},o:function(e){M(t.$$.fragment,e),s=!1},d:function(e){y(t,e)}};return k("SvelteRegisterBlock",{block:a,id:Z.name,type:"slot",source:"(42:2) <Content>",ctx:r}),a}function I(r){let t,s;t=new _({props:{$$slots:{default:[Z]},$$scope:{ctx:r}},$$inline:!0});const a={c:function(){S(t.$$.fragment)},l:function(e){b(t.$$.fragment,e)},m:function(e,o){w(t,e,o),s=!0},p:function(e,o){const c={};o&32&&(c.$$scope={dirty:o,ctx:e}),t.$set(c)},i:function(e){s||(v(t.$$.fragment,e),s=!0)},o:function(e){M(t.$$.fragment,e),s=!1},d:function(e){y(t,e)}};return k("SvelteRegisterBlock",{block:a,id:I.name,type:"slot",source:"(41:0) <Card>",ctx:r}),a}function U(r){let t,s;const a={c:function(){t=A("span"),s=D(r[1]),this.h()},l:function(e){t=O(e,"SPAN",{});var o=q(t);s=z(o,r[1]),o.forEach(m),this.h()},h:function(){F(t,Q,47,2,1362)},m:function(e,o){x(e,t,o),H(t,s)},p:function(e,o){o&2&&ct(s,e[1])},d:function(e){e&&m(t)}};return k("SvelteRegisterBlock",{block:a,id:U.name,type:"slot",source:"(47:0) <Toast bind:running={errorToast}>",ctx:r}),a}function T(r){let t,s,a,i,e,o,c,u,d,p;t=new K({props:{description:"New SML Version",title:"Admin: New SML Version"},$$inline:!0}),o=new P({props:{$$slots:{default:[I]},$$scope:{ctx:r}},$$inline:!0});function f(l){r[3](l)}let g={$$slots:{default:[U]},$$scope:{ctx:r}};r[0]!==void 0&&(g.running=r[0]),u=new J({props:g,$$inline:!0}),tt.push(()=>et(u,"running",f));const E={c:function(){S(t.$$.fragment),s=C(),a=A("h1"),i=D("New SML Version"),e=C(),S(o.$$.fragment),c=C(),S(u.$$.fragment),this.h()},l:function(n){const $=st("svelte-1wdno4b",document.head);b(t.$$.fragment,$),$.forEach(m),s=V(n),a=O(n,"H1",{class:!0});var h=q(a);i=z(h,"New SML Version"),h.forEach(m),e=V(n),b(o.$$.fragment,n),c=V(n),b(u.$$.fragment,n),this.h()},h:function(){rt(a,"class","text-4xl my-4 font-bold"),F(a,Q,38,0,1193)},m:function(n,$){w(t,document.head,null),x(n,s,$),x(n,a,$),H(a,i),x(n,e,$),w(o,n,$),x(n,c,$),w(u,n,$),p=!0},p:function(n,[$]){const h={};$&32&&(h.$$scope={dirty:$,ctx:n}),o.$set(h);const N={};$&34&&(N.$$scope={dirty:$,ctx:n}),!d&&$&1&&(d=!0,N.running=n[0],it(()=>d=!1)),u.$set(N)},i:function(n){p||(v(t.$$.fragment,n),v(o.$$.fragment,n),v(u.$$.fragment,n),p=!0)},o:function(n){M(t.$$.fragment,n),M(o.$$.fragment,n),M(u.$$.fragment,n),p=!1},d:function(n){y(t),n&&m(s),n&&m(a),n&&m(e),y(o,n),n&&m(c),y(u,n)}};return k("SvelteRegisterBlock",{block:E,id:T.name,type:"component",source:"",ctx:r}),E}function $t(r,t,s){let{$$slots:a={},$$scope:i}=t;nt("Page",a,[]);const e=L();let o="",c=!1;const u=f=>{e.mutation(B,{smlVersion:f}).toPromise().then(g=>{g.error?(console.error(g.error.message),s(1,o="Error creating SML Version: "+g.error.message),s(0,c=!0)):R(j+"/admin/sml-versions")})},d=[];Object.keys(t).forEach(f=>{!~d.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&ft.warn(`<Page> was created with unknown prop '${f}'`)});function p(f){c=f,s(0,c)}return r.$capture_state=()=>({getContextClient:L,NewSmlVersionDocument:B,Toast:J,goto:R,SMLVersionForm:G,base:j,MetaDescriptors:K,Card:P,Content:_,client:e,errorMessage:o,errorToast:c,onSubmit:u}),r.$inject_state=f=>{"errorMessage"in f&&s(1,o=f.errorMessage),"errorToast"in f&&s(0,c=f.errorToast)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),r.$$.update=()=>{r.$$.dirty&1&&(c||s(1,o=""))},[c,o,u,p]}class dt extends W{constructor(t){super(t),X(this,t,$t,T,Y,{}),k("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:T.name})}}export{dt as component};
//# sourceMappingURL=6.40c2ffb0.js.map
