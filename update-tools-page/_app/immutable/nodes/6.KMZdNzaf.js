import{S as Vt,i as Nt,d as _,s as It,v as Ot,F as ht,G as mt,a1 as Y,a2 as et,y as kt,a3 as Dt,P as nt,b as N,e as b,f as pt,a4 as Ut,Q as st,j as v,k as I,g as E,h as B,N as V,m as T,T as ot,n as O,r as U,t as L,q as gt,W as it,u as Mt,x as _t,U as p,a5 as Ct,O as vt,p as $t,R as q,_ as At,X as G,Y as Q,Z as X,V as xt,a0 as Ht}from"../chunks/vendor.CXVBaljs.js";import{A as yt,e as bt,f as Et}from"../chunks/graphql.CNu7qPRc.js";import{M as wt}from"../chunks/MetaDescriptors.DhSu6wlm.js";import{p as z}from"../chunks/formatting.DRqZGGFY.js";const k="src/routes/admin/unapproved-mods/+page.svelte";function Tt(s,t,n){const e=s.slice();return e[17]=t[n],e}function Z(s){let t,n,e,a,f;function d(g){s[8](g)}let h={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};s[4]!==void 0&&(h.settings=s[4]),e=new et({props:h,$$inline:!0}),kt.push(()=>Dt(e,"settings",d)),e.$on("page",s[9]),e.$on("amount",s[10]);const l={c:function(){t=b("div"),n=b("div"),nt(e.$$.fragment),this.h()},l:function(r){t=E(r,"DIV",{class:!0});var u=B(t);n=E(u,"DIV",{});var i=B(n);st(e.$$.fragment,i),i.forEach(v),u.forEach(v),this.h()},h:function(){T(n,k,60,4,1389),V(t,"class","mb-5 ml-auto flex justify-end"),T(t,k,59,2,1341)},m:function(r,u){O(r,t,u),p(t,n),ot(e,n,null),f=!0},p:function(r,u){const i={};!a&&u&16&&(a=!0,i.settings=r[4],Ct(()=>a=!1)),e.$set(i)},i:function(r){f||(U(e.$$.fragment,r),f=!0)},o:function(r){L(e.$$.fragment,r),f=!1},d:function(r){r&&v(t),it(e)}};return _("SvelteRegisterBlock",{block:l,id:Z.name,type:"if",source:"(51:0) {#if totalMods}",ctx:s}),l}function Bt(s){let t,n,e,a,f="Mod",d,h,l="Description",g,r,u="Release Date",i,y,x="",o,m,j=vt(s[3].data.getUnapprovedMods.mods),D=[];for(let P=0;P<j.length;P+=1)D[P]=J(Tt(s,j,P));const R={c:function(){t=b("table"),n=b("thead"),e=b("tr"),a=b("th"),a.textContent=f,d=N(),h=b("th"),h.textContent=l,g=N(),r=b("th"),r.textContent=u,i=N(),y=b("th"),y.innerHTML=x,o=N(),m=b("tbody");for(let C=0;C<D.length;C+=1)D[C].c();this.h()},l:function(C){t=E(C,"TABLE",{class:!0});var M=B(t);n=E(M,"THEAD",{});var $=B(n);e=E($,"TR",{});var w=B(e);a=E(w,"TH",{"data-svelte-h":!0}),q(a)!=="svelte-1hkc9fy"&&(a.textContent=f),d=I(w),h=E(w,"TH",{"data-svelte-h":!0}),q(h)!=="svelte-18juats"&&(h.textContent=l),g=I(w),r=E(w,"TH",{"data-svelte-h":!0}),q(r)!=="svelte-pi2tux"&&(r.textContent=u),i=I(w),y=E(w,"TH",{"data-svelte-h":!0}),q(y)!=="svelte-qfgexu"&&(y.innerHTML=x),w.forEach(v),$.forEach(v),o=I(M),m=E(M,"TBODY",{});var c=B(m);for(let A=0;A<D.length;A+=1)D[A].l(c);c.forEach(v),M.forEach(v),this.h()},h:function(){T(a,k,81,10,1974),T(h,k,82,10,1997),T(r,k,83,10,2028),T(y,k,84,10,2060),T(e,k,80,8,1959),T(n,k,79,6,1943),T(m,k,87,6,2121),V(t,"class","table table-hover max-w-full"),T(t,k,78,4,1892)},m:function(C,M){O(C,t,M),p(t,n),p(n,e),p(e,a),p(e,d),p(e,h),p(e,g),p(e,r),p(e,i),p(e,y),p(t,o),p(t,m);for(let $=0;$<D.length;$+=1)D[$]&&D[$].m(m,null)},p:function(C,M){if(M&200){j=vt(C[3].data.getUnapprovedMods.mods);let $;for($=0;$<j.length;$+=1){const w=Tt(C,j,$);D[$]?D[$].p(w,M):(D[$]=J(w),D[$].c(),D[$].m(m,null))}for(;$<D.length;$+=1)D[$].d(1);D.length=j.length}},d:function(C){C&&v(t),At(D,C)}};return _("SvelteRegisterBlock",{block:R,id:Bt.name,type:"else",source:"(70:2) {:else}",ctx:s}),R}function St(s){let t,n,e=s[3].error.message+"",a;const f={c:function(){t=b("section"),n=G("Oh no... "),a=G(e),this.h()},l:function(h){t=E(h,"SECTION",{class:!0});var l=B(t);n=Q(l,"Oh no... "),a=Q(l,e),l.forEach(v),this.h()},h:function(){V(t,"class","p-4"),T(t,k,76,4,1816)},m:function(h,l){O(h,t,l),p(t,n),p(t,a)},p:function(h,l){l&8&&e!==(e=h[3].error.message+"")&&X(a,e)},d:function(h){h&&v(t)}};return _("SvelteRegisterBlock",{block:f,id:St.name,type:"if",source:"(68:24) ",ctx:s}),f}function Pt(s){let t,n="Loading...";const e={c:function(){t=b("section"),t.textContent=n,this.h()},l:function(f){t=E(f,"SECTION",{class:!0,"data-svelte-h":!0}),q(t)!=="svelte-1e06hs8"&&(t.textContent=n),this.h()},h:function(){V(t,"class","p-4"),T(t,k,74,4,1745)},m:function(f,d){O(f,t,d)},p:Mt,d:function(f){f&&v(t)}};return _("SvelteRegisterBlock",{block:e,id:Pt.name,type:"if",source:"(66:2) {#if $mods.fetching}",ctx:s}),e}function J(s){let t,n,e=s[17].name+"",a,f,d,h=s[17].short_description+"",l,g,r,u=z(s[17].created_at)+"",i,y,x,o,m,j="Approve",D,R,P="Deny",C,M,$,w,c,A,at;function jt(){return s[11](s[17])}function Rt(){return s[12](s[17])}const lt={c:function(){t=b("tr"),n=b("td"),a=G(e),f=N(),d=b("td"),l=G(h),g=N(),r=b("td"),i=G(u),y=N(),x=b("td"),o=b("div"),m=b("button"),m.textContent=j,D=N(),R=b("button"),R.textContent=P,C=N(),M=b("a"),$=G("View"),c=N(),this.h()},l:function(H){t=E(H,"TR",{});var S=B(t);n=E(S,"TD",{});var rt=B(n);a=Q(rt,e),rt.forEach(v),f=I(S),d=E(S,"TD",{});var ct=B(d);l=Q(ct,h),ct.forEach(v),g=I(S),r=E(S,"TD",{});var ft=B(r);i=Q(ft,u),ft.forEach(v),y=I(S),x=E(S,"TD",{class:!0});var ut=B(x);o=E(ut,"DIV",{class:!0});var F=B(o);m=E(F,"BUTTON",{class:!0,"data-svelte-h":!0}),q(m)!=="svelte-1ytvx06"&&(m.textContent=j),D=I(F),R=E(F,"BUTTON",{class:!0,"data-svelte-h":!0}),q(R)!=="svelte-1fhqmlk"&&(R.textContent=P),C=I(F),M=E(F,"A",{class:!0,href:!0});var dt=B(M);$=Q(dt,"View"),dt.forEach(v),F.forEach(v),ut.forEach(v),c=I(S),S.forEach(v),this.h()},h:function(){T(n,k,90,12,2213),T(d,k,91,12,2245),T(r,k,92,12,2290),V(m,"class","variant-ghost-primary btn btn-sm"),T(m,k,95,16,2429),V(R,"class","variant-ghost-primary btn btn-sm"),T(R,k,96,16,2547),V(M,"class","variant-ghost-primary btn btn-sm"),V(M,"href",w=Y+"/mod/"+s[17].id),T(M,k,97,16,2659),V(o,"class","grid grid-flow-col gap-4"),T(o,k,94,14,2374),V(x,"class","!p-2.5"),T(x,k,93,12,2340),T(t,k,89,10,2196)},m:function(H,S){O(H,t,S),p(t,n),p(n,a),p(t,f),p(t,d),p(d,l),p(t,g),p(t,r),p(r,i),p(t,y),p(t,x),p(x,o),p(o,m),p(o,D),p(o,R),p(o,C),p(o,M),p(M,$),p(t,c),A||(at=[xt(m,"click",jt,!1,!1,!1,!1),xt(R,"click",Rt,!1,!1,!1,!1)],A=!0)},p:function(H,S){s=H,S&8&&e!==(e=s[17].name+"")&&X(a,e),S&8&&h!==(h=s[17].short_description+"")&&X(l,h),S&8&&u!==(u=z(s[17].created_at)+"")&&X(i,u),S&8&&w!==(w=Y+"/mod/"+s[17].id)&&V(M,"href",w)},d:function(H){H&&v(t),A=!1,Ht(at)}};return _("SvelteRegisterBlock",{block:lt,id:J.name,type:"each",source:"(81:8) {#each $mods.data.getUnapprovedMods.mods as mod}",ctx:s}),lt}function K(s){let t,n,e,a,f;function d(g){s[13](g)}let h={showFirstLastButtons:!0,showPreviousNextButtons:!0,controlVariant:"variant-filled-surface"};s[4]!==void 0&&(h.settings=s[4]),e=new et({props:h,$$inline:!0}),kt.push(()=>Dt(e,"settings",d)),e.$on("page",s[14]),e.$on("amount",s[15]);const l={c:function(){t=b("div"),n=b("div"),nt(e.$$.fragment),this.h()},l:function(r){t=E(r,"DIV",{class:!0});var u=B(t);n=E(u,"DIV",{});var i=B(n);st(e.$$.fragment,i),i.forEach(v),u.forEach(v),this.h()},h:function(){T(n,k,109,4,2924),V(t,"class","ml-auto mt-5 flex justify-end"),T(t,k,108,2,2876)},m:function(r,u){O(r,t,u),p(t,n),ot(e,n,null),f=!0},p:function(r,u){const i={};!a&&u&16&&(a=!0,i.settings=r[4],Ct(()=>a=!1)),e.$set(i)},i:function(r){f||(U(e.$$.fragment,r),f=!0)},o:function(r){L(e.$$.fragment,r),f=!1},d:function(r){r&&v(t),it(e)}};return _("SvelteRegisterBlock",{block:l,id:K.name,type:"if",source:"(100:0) {#if totalMods}",ctx:s}),l}function tt(s){let t,n,e,a,f,d,h;t=new wt({props:{description:"Unapproved mods",title:"Admin: Unapproved Mods"},$$inline:!0});let l=s[2]&&Z(s);function g(x,o){return x[3].fetching?Pt:x[3].error?St:Bt}let r=g(s),u=r(s),i=s[2]&&K(s);const y={c:function(){nt(t.$$.fragment),n=N(),l&&l.c(),e=N(),a=b("div"),u.c(),f=N(),i&&i.c(),d=pt(),this.h()},l:function(o){const m=Ut("svelte-g9j975",document.head);st(t.$$.fragment,m),m.forEach(v),n=I(o),l&&l.l(o),e=I(o),a=E(o,"DIV",{class:!0});var j=B(a);u.l(j),j.forEach(v),f=I(o),i&&i.l(o),d=pt(),this.h()},h:function(){V(a,"class","card"),T(a,k,72,0,1699)},m:function(o,m){ot(t,document.head,null),O(o,n,m),l&&l.m(o,m),O(o,e,m),O(o,a,m),u.m(a,null),O(o,f,m),i&&i.m(o,m),O(o,d,m),h=!0},p:function(o,[m]){o[2]?l?(l.p(o,m),m&4&&U(l,1)):(l=Z(o),l.c(),U(l,1),l.m(e.parentNode,e)):l&&($t(),L(l,1,1,()=>{l=null}),gt()),r===(r=g(o))&&u?u.p(o,m):(u.d(1),u=r(o),u&&(u.c(),u.m(a,null))),o[2]?i?(i.p(o,m),m&4&&U(i,1)):(i=K(o),i.c(),U(i,1),i.m(d.parentNode,d)):i&&($t(),L(i,1,1,()=>{i=null}),gt())},i:function(o){h||(U(t.$$.fragment,o),U(l),U(i),h=!0)},o:function(o){L(t.$$.fragment,o),L(l),L(i),h=!1},d:function(o){o&&(v(n),v(e),v(a),v(f),v(d)),it(t),l&&l.d(o),u.d(),i&&i.d(o)}};return _("SvelteRegisterBlock",{block:y,id:tt.name,type:"component",source:"",ctx:s}),y}function Lt(s,t,n){let e,a,f,d,h=Mt,l=()=>(h(),h=_t(e,c=>n(3,d=c)),e);s.$$.on_destroy.push(()=>h());let{$$slots:g={},$$scope:r}=t;Ot("Page",g,[]);const u=ht();let i=20,y=0;const x=c=>{u.mutation(yt,{modId:c}).toPromise().then(()=>{e.pause(),e.resume()})},o=c=>{u.mutation(bt,{modId:c}).toPromise().then(()=>{e.pause(),e.resume()})},m=[];Object.keys(t).forEach(c=>{!~m.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Page> was created with unknown prop '${c}'`)});function j(c){f=c,n(4,f),n(1,y),n(0,i),n(2,a),n(3,d)}const D=c=>n(1,y=c.detail),R=c=>n(0,i=c.detail),P=c=>x(c.id),C=c=>o(c.id);function M(c){f=c,n(4,f),n(1,y),n(0,i),n(2,a),n(3,d)}const $=c=>n(1,y=c.detail),w=c=>n(0,i=c.detail);return s.$capture_state=()=>({ApproveModDocument:yt,DenyModDocument:bt,GetUnapprovedModsDocument:Et,getContextClient:ht,queryStore:mt,base:Y,MetaDescriptors:wt,prettyDate:z,Paginator:et,client:u,perPage:i,page:y,approveMod:x,denyMod:o,totalMods:a,paginationSettings:f,mods:e,$mods:d}),s.$inject_state=c=>{"perPage"in c&&n(0,i=c.perPage),"page"in c&&n(1,y=c.page),"totalMods"in c&&n(2,a=c.totalMods),"paginationSettings"in c&&n(4,f=c.paginationSettings),"mods"in c&&l(n(5,e=c.mods))},t&&"$$inject"in t&&s.$inject_state(t.$$inject),s.$$.update=()=>{s.$$.dirty&3&&l(n(5,e=mt({query:Et,client:u,variables:{filter:{offset:y*i,limit:i}}}))),s.$$.dirty&8&&n(2,a=d?.data?.getUnapprovedMods?.count),s.$$.dirty&7&&n(4,f={page:y,limit:i,size:a,amounts:[5,10,20,50,100]})},[i,y,a,d,f,e,x,o,j,D,R,P,C,M,$,w]}class Wt extends Vt{constructor(t){super(t),Nt(this,t,Lt,tt,It,{}),_("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:tt.name})}}export{Wt as component};
//# sourceMappingURL=6.KMZdNzaf.js.map
