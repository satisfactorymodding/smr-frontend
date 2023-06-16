import{S as W,i as X,d as C,s as Z,bg as D,r as tt,a9 as et,v as nt,aI as R,aL as j,aY as B,bh as _,P as ot,a2 as w,a0 as E,x as q,aa as F,ba as st,a3 as b,q as m,a1 as G,y as L,z as O,ab as z,a8 as rt,B as A,a4 as v,l as x,a7 as H,ad as at,p as y,t as k,a6 as S,L as it,ac as ct}from"../chunks/vendor.3b08e99d.js";import{Q as M}from"../chunks/graphql.769656ab.js";import{T as I}from"../chunks/Toast.b4dddbd8.js";import{G as Q}from"../chunks/GuideForm.6833a73d.js";import{M as K}from"../chunks/MetaDescriptors.2bca5674.js";const{console:ft}=ot,Y="src/routes/new-guide/+page.svelte";function J(r){let t,s;t=new Q({props:{onSubmit:r[2]},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(e){b(t.$$.fragment,e)},m:function(e,o){v(t,e,o),s=!0},p:it,i:function(e){s||(y(t.$$.fragment,e),s=!0)},o:function(e){k(t.$$.fragment,e),s=!1},d:function(e){S(t,e)}};return C("SvelteRegisterBlock",{block:i,id:J.name,type:"slot",source:"(42:2) <Content>",ctx:r}),i}function U(r){let t,s;t=new _({props:{$$slots:{default:[J]},$$scope:{ctx:r}},$$inline:!0});const i={c:function(){w(t.$$.fragment)},l:function(e){b(t.$$.fragment,e)},m:function(e,o){v(t,e,o),s=!0},p:function(e,o){const $={};o&32&&($.$$scope={dirty:o,ctx:e}),t.$set($)},i:function(e){s||(y(t.$$.fragment,e),s=!0)},o:function(e){k(t.$$.fragment,e),s=!1},d:function(e){S(t,e)}};return C("SvelteRegisterBlock",{block:i,id:U.name,type:"slot",source:"(41:0) <Card>",ctx:r}),i}function V(r){let t,s;const i={c:function(){t=q("span"),s=F(r[1]),this.h()},l:function(e){t=L(e,"SPAN",{});var o=O(t);s=z(o,r[1]),o.forEach(m),this.h()},h:function(){A(t,Y,47,2,1322)},m:function(e,o){x(e,t,o),H(t,s)},p:function(e,o){o&2&&ct(s,e[1])},d:function(e){e&&m(t)}};return C("SvelteRegisterBlock",{block:i,id:V.name,type:"slot",source:"(47:0) <Toast bind:running={errorToast}>",ctx:r}),i}function N(r){let t,s,i,a,e,o,$,u,d,p;t=new K({props:{description:"Creating a new guide",title:"New guide"},$$inline:!0}),o=new D({props:{$$slots:{default:[U]},$$scope:{ctx:r}},$$inline:!0});function c(l){r[3](l)}let g={$$slots:{default:[V]},$$scope:{ctx:r}};r[0]!==void 0&&(g.running=r[0]),u=new I({props:g,$$inline:!0}),tt.push(()=>et(u,"running",c));const P={c:function(){w(t.$$.fragment),s=E(),i=q("h1"),a=F("New Guide"),e=E(),w(o.$$.fragment),$=E(),w(u.$$.fragment),this.h()},l:function(n){const f=st("svelte-u6ds2",document.head);b(t.$$.fragment,f),f.forEach(m),s=G(n),i=L(n,"H1",{class:!0});var h=O(i);a=z(h,"New Guide"),h.forEach(m),e=G(n),b(o.$$.fragment,n),$=G(n),b(u.$$.fragment,n),this.h()},h:function(){rt(i,"class","text-4xl my-4 font-bold"),A(i,Y,38,0,1164)},m:function(n,f){v(t,document.head,null),x(n,s,f),x(n,i,f),H(i,a),x(n,e,f),v(o,n,f),x(n,$,f),v(u,n,f),p=!0},p:function(n,[f]){const h={};f&32&&(h.$$scope={dirty:f,ctx:n}),o.$set(h);const T={};f&34&&(T.$$scope={dirty:f,ctx:n}),!d&&f&1&&(d=!0,T.running=n[0],at(()=>d=!1)),u.$set(T)},i:function(n){p||(y(t.$$.fragment,n),y(o.$$.fragment,n),y(u.$$.fragment,n),p=!0)},o:function(n){k(t.$$.fragment,n),k(o.$$.fragment,n),k(u.$$.fragment,n),p=!1},d:function(n){S(t),n&&m(s),n&&m(i),n&&m(e),S(o,n),n&&m($),S(u,n)}};return C("SvelteRegisterBlock",{block:P,id:N.name,type:"component",source:"",ctx:r}),P}function ut(r,t,s){let{$$slots:i={},$$scope:a}=t;nt("Page",i,[]);let e="",o=!1;const $=R(),u=c=>{$.mutation(M,{guide:c}).toPromise().then(g=>{g.error?(console.error(g.error.message),s(1,e="Error creating guide: "+g.error.message),s(0,o=!0)):j(B+"/guide/"+g.data.createGuide.id)})},d=[];Object.keys(t).forEach(c=>{!~d.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&ft.warn(`<Page> was created with unknown prop '${c}'`)});function p(c){o=c,s(0,o)}return r.$capture_state=()=>({getContextClient:R,NewGuideDocument:M,Toast:I,goto:j,GuideForm:Q,base:B,MetaDescriptors:K,Card:D,Content:_,errorMessage:e,errorToast:o,client:$,onSubmit:u}),r.$inject_state=c=>{"errorMessage"in c&&s(1,e=c.errorMessage),"errorToast"in c&&s(0,o=c.errorToast)},t&&"$$inject"in t&&r.$inject_state(t.$$inject),r.$$.update=()=>{r.$$.dirty&1&&(o||s(1,e=""))},[o,e,u,p]}class dt extends W{constructor(t){super(t),X(this,t,ut,N,Z,{}),C("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:N.name})}}export{dt as component};
//# sourceMappingURL=22.f7928e14.js.map