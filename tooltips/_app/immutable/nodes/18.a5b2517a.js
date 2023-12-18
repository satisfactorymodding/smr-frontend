import{G as tn,S as bt,i as Vt,s as xt,d as z,a7 as St,v as yt,e as m,b as S,g,h as V,k as I,j as p,N as E,m as v,n as U,Q as a,r as Y,p as rt,t as oe,q as st,a8 as nn,J as Ee,L as ke,O as Se,R as Ie,u as j,a9 as on,aa as rn,ak as It,a1 as it,W as D,M as fe,X as N,Y as K,x as sn,a2 as Dt,F as Nt,_ as Pt,aq as Rt,$ as nt,H as _e,ah as Tt,a0 as an,f as Fe,K as ln,Z as at,a6 as cn,U as Ct,l as fn,ab as un,V as dn}from"../chunks/vendor.e19595da.js";import{s as pn,r as jt,H as At}from"../chunks/graphql.9e431d10.js";import{l as hn}from"../chunks/gql.ff9241aa.js";import{m as lt}from"../chunks/markdown.71e214fe.js";import{A as Mt}from"../chunks/AnnouncementRow.4fb5f0ad.js";import{p as ct,a as ft,b as ut,c as dt}from"../chunks/formatting.625b9f27.js";import{M as qt}from"../chunks/MetaDescriptors.2ea28770.js";import{A as We}from"../chunks/api.853e29e3.js";import{u as ot}from"../chunks/user.1432081b.js";import{i as _t}from"../chunks/launcher.4385f578.js";import{V as Ut,a as zt}from"../chunks/VersionDependenciesGrid.fd89d8b3.js";import{P as Gt}from"../chunks/Page404.aa6d1030.js";const mn=async({params:t,parent:e})=>({...t,...await hn({version:tn({query:pn,client:(await e()).client,variables:{version:t.versionId}})})}),Rn=Object.freeze(Object.defineProperty({__proto__:null,load:mn},Symbol.toStringTag,{value:"Module"})),Ne="src/lib/components/versions/VersionDescription.svelte";function pt(t){let e,s,n;s=new Mt({props:{importance:jt.Warning,message:"This version has not yet been approved by the virus scanner and is hidden until this process is complete. If this message isn't gone in the next few minutes, ask for manual approval on the Discord."},$$inline:!0});const r={c:function(){e=m("div"),Ee(s.$$.fragment),this.h()},l:function(c){e=g(c,"DIV",{class:!0});var l=V(e);ke(s.$$.fragment,l),l.forEach(p),this.h()},h:function(){E(e,"class","p-4"),v(e,Ne,11,4,276)},m:function(c,l){U(c,e,l),Se(s,e,null),n=!0},i:function(c){n||(Y(s.$$.fragment,c),n=!0)},o:function(c){oe(s.$$.fragment,c),n=!1},d:function(c){c&&p(e),Ie(s)}};return z("SvelteRegisterBlock",{block:r,id:pt.name,type:"if",source:"(9:2) {#if !approved}",ctx:t}),r}function Lt(t){const e={c:j,l:j,m:j,p:j,d:j};return z("SvelteRegisterBlock",{block:e,id:Lt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { AnnouncementImportance }',ctx:t}),e}function Ht(t){let e,s,n=t[2]+"";const r={c:function(){e=m("p"),s=new on(!1),this.h()},l:function(c){e=g(c,"P",{});var l=V(e);s=rn(l,!1),l.forEach(p),this.h()},h:function(){s.a=null,v(e,Ne,22,10,805)},m:function(c,l){U(c,e,l),s.m(n,e)},p:function(c,l){l&1&&n!==(n=c[2]+"")&&s.p(n)},d:function(c){c&&p(e)}};return z("SvelteRegisterBlock",{block:r,id:Ht.name,type:"then",source:"(19:59)            <!-- eslint-disable -->           <p>{@html changelogRendered}",ctx:t}),r}function Ft(t){const e={c:j,l:j,m:j,p:j,d:j};return z("SvelteRegisterBlock",{block:e,id:Ft.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { AnnouncementImportance }',ctx:t}),e}function ht(t){let e,s,n,r,o,c,l,i=!t[1]&&pt(t),f={ctx:t,current:null,token:null,hasCatch:!1,pending:Ft,then:Ht,catch:Lt,value:2};St(c=lt(t[0]),f);const d={c:function(){e=m("div"),i&&i.c(),s=S(),n=m("div"),r=m("section"),o=m("div"),f.block.c(),this.h()},l:function(w){e=g(w,"DIV",{});var u=V(e);i&&i.l(u),s=I(u),n=g(u,"DIV",{class:!0});var $=V(n);r=g($,"SECTION",{});var B=V(r);o=g(B,"DIV",{class:!0});var R=V(o);f.block.l(R),R.forEach(p),B.forEach(p),$.forEach(p),u.forEach(p),this.h()},h:function(){E(o,"class","markdown-content break-words"),v(o,Ne,19,6,658),v(r,Ne,18,4,642),E(n,"class","h-fit card p-4"),v(n,Ne,17,2,609),v(e,Ne,9,0,248)},m:function(w,u){U(w,e,u),i&&i.m(e,null),a(e,s),a(e,n),a(n,r),a(r,o),f.block.m(o,f.anchor=null),f.mount=()=>o,f.anchor=null,l=!0},p:function(w,[u]){t=w,t[1]?i&&(rt(),oe(i,1,1,()=>{i=null}),st()):i?u&2&&Y(i,1):(i=pt(t),i.c(),Y(i,1),i.m(e,s)),f.ctx=t,u&1&&c!==(c=lt(t[0]))&&St(c,f)||nn(f,t,u)},i:function(w){l||(Y(i),l=!0)},o:function(w){oe(i),l=!1},d:function(w){w&&p(e),i&&i.d(),f.block.d(),f.token=null,f=null}};return z("SvelteRegisterBlock",{block:d,id:ht.name,type:"component",source:"",ctx:t}),d}function gn(t,e,s){let{$$slots:n={},$$scope:r}=e;yt("VersionDescription",n,[]);let{changelog:o}=e,{approved:c}=e;t.$$.on_mount.push(function(){o===void 0&&!("changelog"in e||t.$$.bound[t.$$.props.changelog])&&console.warn("<VersionDescription> was created without expected prop 'changelog'"),c===void 0&&!("approved"in e||t.$$.bound[t.$$.props.approved])&&console.warn("<VersionDescription> was created without expected prop 'approved'")});const l=["changelog","approved"];return Object.keys(e).forEach(i=>{!~l.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<VersionDescription> was created with unknown prop '${i}'`)}),t.$$set=i=>{"changelog"in i&&s(0,o=i.changelog),"approved"in i&&s(1,c=i.approved)},t.$capture_state=()=>({AnnouncementImportance:jt,markdown:lt,AnnouncementRow:Mt,changelog:o,approved:c}),t.$inject_state=i=>{"changelog"in i&&s(0,o=i.changelog),"approved"in i&&s(1,c=i.approved)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,c]}class Wt extends bt{constructor(e){super(e),Vt(this,e,gn,ht,xt,{changelog:0,approved:1}),z("SvelteRegisterComponent",{component:this,tagName:"VersionDescription",options:e,id:ht.name})}get changelog(){throw new Error("<VersionDescription>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set changelog(e){throw new Error("<VersionDescription>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get approved(){throw new Error("<VersionDescription>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set approved(e){throw new Error("<VersionDescription>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const T="src/lib/components/versions/VersionInfo.svelte";function mt(t){let e,s,n,r,o="Info",c,l,i,f=t[2]("entry.created-at")+"",d,h,w,u=ct(t[0].created_at)+"",$,B,R,x,C,k=t[2]("downloads")+"",A,b,le,ue=ft(t[0].downloads)+"",Z,$e,we,G,H,be,F=t[2]("version")+"",ee,Ve,re,de=t[0].sml_version+"",te,ie,xe,ae,_,me=t[2]("stability")+"",pe,Q,De,X=t[0].stability+"",y,O,se,J,M,ne=t[2]("size")+"",he,ge,ce,Pe=ut(t[0].size)+"",Be,Oe,Je,ve,ye,Re=t[2]("hash")+"",Te,Ke,Qe,Ce=t[0].hash+"",je;const Et={c:function(){e=m("div"),s=m("section"),n=m("div"),r=m("h3"),r.textContent=o,c=S(),l=m("span"),i=m("strong"),d=D(f),h=D(":"),w=S(),$=D(u),B=m("br"),R=S(),x=m("span"),C=m("strong"),A=D(k),b=D(":"),le=S(),Z=D(ue),$e=m("br"),we=S(),G=m("span"),H=m("strong"),be=D("SML "),ee=D(F),Ve=D(":"),re=S(),te=D(de),ie=m("br"),xe=S(),ae=m("span"),_=m("strong"),pe=D(me),Q=D(":"),De=S(),y=D(X),O=m("br"),se=S(),J=m("span"),M=m("strong"),he=D(ne),ge=D(":"),ce=S(),Be=D(Pe),Oe=m("br"),Je=S(),ve=m("span"),ye=m("strong"),Te=D(Re),Ke=D(":"),Qe=S(),je=D(Ce),this.h()},l:function(L){e=g(L,"DIV",{class:!0});var W=V(e);s=g(W,"SECTION",{});var kt=V(s);n=g(kt,"DIV",{class:!0});var q=V(n);r=g(q,"H3",{class:!0,"data-svelte-h":!0}),fe(r)!=="svelte-1cfi42f"&&(r.textContent=o),c=I(q),l=g(q,"SPAN",{});var Me=V(l);i=g(Me,"STRONG",{});var Xe=V(i);d=N(Xe,f),h=N(Xe,":"),Xe.forEach(p),w=I(Me),$=N(Me,u),Me.forEach(p),B=g(q,"BR",{}),R=I(q),x=g(q,"SPAN",{});var qe=V(x);C=g(qe,"STRONG",{});var Ye=V(C);A=N(Ye,k),b=N(Ye,":"),Ye.forEach(p),le=I(qe),Z=N(qe,ue),qe.forEach(p),$e=g(q,"BR",{}),we=I(q),G=g(q,"SPAN",{});var Ue=V(G);H=g(Ue,"STRONG",{});var ze=V(H);be=N(ze,"SML "),ee=N(ze,F),Ve=N(ze,":"),ze.forEach(p),re=I(Ue),te=N(Ue,de),Ue.forEach(p),ie=g(q,"BR",{}),xe=I(q),ae=g(q,"SPAN",{});var Ge=V(ae);_=g(Ge,"STRONG",{});var Ze=V(_);pe=N(Ze,me),Q=N(Ze,":"),Ze.forEach(p),De=I(Ge),y=N(Ge,X),Ge.forEach(p),O=g(q,"BR",{}),se=I(q),J=g(q,"SPAN",{});var Le=V(J);M=g(Le,"STRONG",{});var et=V(M);he=N(et,ne),ge=N(et,":"),et.forEach(p),ce=I(Le),Be=N(Le,Pe),Le.forEach(p),Oe=g(q,"BR",{}),Je=I(q),ve=g(q,"SPAN",{});var He=V(ve);ye=g(He,"STRONG",{});var tt=V(ye);Te=N(tt,Re),Ke=N(tt,":"),tt.forEach(p),Qe=I(He),je=N(He,Ce),He.forEach(p),q.forEach(p),kt.forEach(p),W.forEach(p),this.h()},h:function(){E(r,"class","text-2xl my-4 font-bold"),v(r,T,13,6,291),v(i,T,14,12,349),v(l,T,14,6,343),v(B,T,14,94,431),v(C,T,15,12,450),v(x,T,15,6,444),v($e,T,15,88,526),v(H,T,16,12,545),v(G,T,16,6,539),v(ie,T,16,78,611),v(_,T,17,12,630),v(ae,T,17,6,624),v(O,T,17,74,692),v(M,T,18,12,711),v(J,T,18,6,705),v(Oe,T,18,77,776),v(ye,T,19,12,795),v(ve,T,19,6,789),E(n,"class","text-lg break-words"),v(n,T,12,4,251),v(s,T,11,2,237),E(e,"class","card p-4"),v(e,T,10,0,212)},m:function(L,W){U(L,e,W),a(e,s),a(s,n),a(n,r),a(n,c),a(n,l),a(l,i),a(i,d),a(i,h),a(l,w),a(l,$),a(n,B),a(n,R),a(n,x),a(x,C),a(C,A),a(C,b),a(x,le),a(x,Z),a(n,$e),a(n,we),a(n,G),a(G,H),a(H,be),a(H,ee),a(H,Ve),a(G,re),a(G,te),a(n,ie),a(n,xe),a(n,ae),a(ae,_),a(_,pe),a(_,Q),a(ae,De),a(ae,y),a(n,O),a(n,se),a(n,J),a(J,M),a(M,he),a(M,ge),a(J,ce),a(J,Be),a(n,Oe),a(n,Je),a(n,ve),a(ve,ye),a(ye,Te),a(ye,Ke),a(ve,Qe),a(ve,je)},p:function(L,[W]){W&4&&f!==(f=L[2]("entry.created-at")+"")&&K(d,f),W&1&&u!==(u=ct(L[0].created_at)+"")&&K($,u),W&4&&k!==(k=L[2]("downloads")+"")&&K(A,k),W&1&&ue!==(ue=ft(L[0].downloads)+"")&&K(Z,ue),W&4&&F!==(F=L[2]("version")+"")&&K(ee,F),W&1&&de!==(de=L[0].sml_version+"")&&K(te,de),W&4&&me!==(me=L[2]("stability")+"")&&K(pe,me),W&1&&X!==(X=L[0].stability+"")&&K(y,X),W&4&&ne!==(ne=L[2]("size")+"")&&K(he,ne),W&1&&Pe!==(Pe=ut(L[0].size)+"")&&K(Be,Pe),W&4&&Re!==(Re=L[2]("hash")+"")&&K(Te,Re),W&1&&Ce!==(Ce=L[0].hash+"")&&K(je,Ce)},i:j,o:j,d:function(L){L&&p(e)}};return z("SvelteRegisterBlock",{block:Et,id:mt.name,type:"component",source:"",ctx:t}),Et}function vn(t,e,s){let n,r=j,o=()=>(r(),r=sn(f,h=>s(2,n=h)),f);t.$$.on_destroy.push(()=>r());let{$$slots:c={},$$scope:l}=e;yt("VersionInfo",c,[]);let{version:i}=e;const{t:f}=It();it(f,"t"),o(),t.$$.on_mount.push(function(){i===void 0&&!("version"in e||t.$$.bound[t.$$.props.version])&&console.warn("<VersionInfo> was created without expected prop 'version'")});const d=["version"];return Object.keys(e).forEach(h=>{!~d.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<VersionInfo> was created with unknown prop '${h}'`)}),t.$$set=h=>{"version"in h&&s(0,i=h.version)},t.$capture_state=()=>({prettyBytes:ut,prettyDate:ct,prettyNumber:ft,getTranslate:It,version:i,t:f,$t:n}),t.$inject_state=h=>{"version"in h&&s(0,i=h.version)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[i,f,n]}class Jt extends bt{constructor(e){super(e),Vt(this,e,vn,mt,xt,{version:0,t:1}),z("SvelteRegisterComponent",{component:this,tagName:"VersionInfo",options:e,id:mt.name})}get version(){throw new Error("<VersionInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set version(e){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[1]}set t(e){throw new Error("<VersionInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const{console:Bt}=an,P="src/routes/mod/[modId]/version/[versionId]/+page.svelte";function Ot(t,e,s){const n=t.slice();return n[15]=e[s],n}function gt(t){let e,s;e=new qt({props:{description:"Information for mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version,title:"Mod version "+t[0].data.getVersion.mod.name+" "+t[0].data.getVersion.version},$$inline:!0});const n={c:function(){Ee(e.$$.fragment)},l:function(o){ke(e.$$.fragment,o)},m:function(o,c){Se(e,o,c),s=!0},p:function(o,c){const l={};c&1&&(l.description="Information for mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version),c&1&&(l.title="Mod version "+o[0].data.getVersion.mod.name+" "+o[0].data.getVersion.version),e.$set(l)},i:function(o){s||(Y(e.$$.fragment,o),s=!0)},o:function(o){oe(e.$$.fragment,o),s=!1},d:function(o){Ie(e,o)}};return z("SvelteRegisterBlock",{block:n,id:gt.name,type:"if",source:"(60:2) {#if !$version.fetching && !$version.error && $version.data.getVersion}",ctx:t}),n}function Kt(t){let e,s;e=new Gt({$$inline:!0});const n={c:function(){Ee(e.$$.fragment)},l:function(o){ke(e.$$.fragment,o)},m:function(o,c){Se(e,o,c),s=!0},p:j,i:function(o){s||(Y(e.$$.fragment,o),s=!0)},o:function(o){oe(e.$$.fragment,o),s=!1},d:function(o){Ie(e,o)}};return z("SvelteRegisterBlock",{block:n,id:Kt.name,type:"else",source:"(146:0) {:else}",ctx:t}),n}function Qt(t){let e,s,n,r=t[0].data.getVersion.mod.name+"",o,c,l=t[0].data.getVersion.version+"",i,f,d,h,w,u,$,B="Install",R,x,C="download",k,A,b,le="Mod",ue,Z,$e="extension",we,G,H,be,F,ee,Ve,re,de,te,ie,xe,ae,_=t[1]&&vt(t);function me(X,y){return X[0].data.getVersion.targets.length!=0?en:Zt}let pe=me(t),Q=pe(t);H=new Wt({props:{changelog:t[0].data.getVersion.changelog,approved:t[0].data.getVersion.approved},$$inline:!0}),ee=new Jt({props:{version:t[0].data.getVersion},$$inline:!0}),re=new Ut({props:{targets:t[0].data.getVersion.targets},$$inline:!0}),te=new zt({props:{dependencies:t[0].data.getVersion.dependencies},$$inline:!0});const De={c:function(){e=m("div"),s=m("div"),n=m("h1"),o=D(r),c=D(`
        Version `),i=D(l),f=S(),d=m("div"),_&&_.c(),h=S(),Q.c(),w=S(),u=m("button"),$=m("span"),$.textContent=B,R=S(),x=m("span"),x.textContent=C,k=S(),A=m("a"),b=m("span"),b.textContent=le,ue=S(),Z=m("span"),Z.textContent=$e,we=S(),G=m("div"),Ee(H.$$.fragment),be=S(),F=m("div"),Ee(ee.$$.fragment),Ve=S(),Ee(re.$$.fragment),de=S(),Ee(te.$$.fragment),this.h()},l:function(y){e=g(y,"DIV",{class:!0});var O=V(e);s=g(O,"DIV",{class:!0});var se=V(s);n=g(se,"H1",{class:!0});var J=V(n);o=N(J,r),c=N(J,`
        Version `),i=N(J,l),J.forEach(p),f=I(se),d=g(se,"DIV",{class:!0});var M=V(d);_&&_.l(M),h=I(M),Q.l(M),w=I(M),u=g(M,"BUTTON",{class:!0,title:!0});var ne=V(u);$=g(ne,"SPAN",{"data-svelte-h":!0}),fe($)!=="svelte-1bbhnfr"&&($.textContent=B),R=I(ne),x=g(ne,"SPAN",{class:!0,"data-svelte-h":!0}),fe(x)!=="svelte-rqt9z7"&&(x.textContent=C),ne.forEach(p),k=I(M),A=g(M,"A",{class:!0,href:!0,title:!0});var he=V(A);b=g(he,"SPAN",{"data-svelte-h":!0}),fe(b)!=="svelte-y2sqc2"&&(b.textContent=le),ue=I(he),Z=g(he,"SPAN",{class:!0,"data-svelte-h":!0}),fe(Z)!=="svelte-y4psqu"&&(Z.textContent=$e),he.forEach(p),M.forEach(p),se.forEach(p),we=I(O),G=g(O,"DIV",{class:!0});var ge=V(G);ke(H.$$.fragment,ge),be=I(ge),F=g(ge,"DIV",{class:!0});var ce=V(F);ke(ee.$$.fragment,ce),Ve=I(ce),ke(re.$$.fragment,ce),de=I(ce),ke(te.$$.fragment,ce),ce.forEach(p),ge.forEach(p),O.forEach(p),this.h()},h:function(){E(n,"class","text-4xl font-bold"),v(n,P,82,6,2821),v($,P,135,10,5e3),E(x,"class","material-icons"),v(x,P,136,10,5031),E(u,"class","btn variant-ghost-primary"),E(u,"title","Install via Satisfactory Mod Manager"),v(u,P,131,8,4800),v(b,P,140,10,5228),E(Z,"class","material-icons"),v(Z,P,141,10,5255),E(A,"class","btn variant-ghost-primary"),E(A,"href",_e+"/mod/"+t[2]),E(A,"title","View the description page for this mod"),v(A,P,139,8,5103),E(d,"class","grid grid-flow-col gap-4"),v(d,P,87,6,2967),E(s,"class","flex flex-wrap h-auto justify-between items-center"),v(s,P,81,4,2750),E(F,"class","grid grid-cols-1 auto-rows-min gap-8"),v(F,P,147,6,5521),E(G,"class","grid grid-auto-max auto-cols-fr gap-4"),v(G,P,145,4,5342),E(e,"class","grid gap-6 xlx:grid-flow-row"),v(e,P,80,2,2703)},m:function(y,O){U(y,e,O),a(e,s),a(s,n),a(n,o),a(n,c),a(n,i),a(s,f),a(s,d),_&&_.m(d,null),a(d,h),Q.m(d,null),a(d,w),a(d,u),a(u,$),a(u,R),a(u,x),a(d,k),a(d,A),a(A,b),a(A,ue),a(A,Z),a(e,we),a(e,G),Se(H,G,null),a(G,be),a(G,F),Se(ee,F,null),a(F,Ve),Se(re,F,null),a(F,de),Se(te,F,null),ie=!0,xe||(ae=at(u,"click",t[11],!1,!1,!1,!1),xe=!0)},p:function(y,O){(!ie||O&1)&&r!==(r=y[0].data.getVersion.mod.name+"")&&K(o,r),(!ie||O&1)&&l!==(l=y[0].data.getVersion.version+"")&&K(i,l),y[1]?_?_.p(y,O):(_=vt(y),_.c(),_.m(d,h)):_&&(_.d(1),_=null),pe===(pe=me(y))&&Q?Q.p(y,O):(Q.d(1),Q=pe(y),Q&&(Q.c(),Q.m(d,w)));const se={};O&1&&(se.changelog=y[0].data.getVersion.changelog),O&1&&(se.approved=y[0].data.getVersion.approved),H.$set(se);const J={};O&1&&(J.version=y[0].data.getVersion),ee.$set(J);const M={};O&1&&(M.targets=y[0].data.getVersion.targets),re.$set(M);const ne={};O&1&&(ne.dependencies=y[0].data.getVersion.dependencies),te.$set(ne)},i:function(y){ie||(Y(H.$$.fragment,y),Y(ee.$$.fragment,y),Y(re.$$.fragment,y),Y(te.$$.fragment,y),ie=!0)},o:function(y){oe(H.$$.fragment,y),oe(ee.$$.fragment,y),oe(re.$$.fragment,y),oe(te.$$.fragment,y),ie=!1},d:function(y){y&&p(e),_&&_.d(),Q.d(),Ie(H),Ie(ee),Ie(re),Ie(te),xe=!1,ae()}};return z("SvelteRegisterBlock",{block:De,id:Qt.name,type:"if",source:"(71:35) ",ctx:t}),De}function Xt(t){let e,s,n=t[0].error.message+"",r;const o={c:function(){e=m("p"),s=D("Oh no... "),r=D(n),this.h()},l:function(l){e=g(l,"P",{});var i=V(e);s=N(i,"Oh no... "),r=N(i,n),i.forEach(p),this.h()},h:function(){v(e,P,78,2,2624)},m:function(l,i){U(l,e,i),a(e,s),a(e,r)},p:function(l,i){i&1&&n!==(n=l[0].error.message+"")&&K(r,n)},i:j,o:j,d:function(l){l&&p(e)}};return z("SvelteRegisterBlock",{block:o,id:Xt.name,type:"if",source:"(69:25) ",ctx:t}),o}function Yt(t){let e,s="Loading...";const n={c:function(){e=m("p"),e.textContent=s,this.h()},l:function(o){e=g(o,"P",{"data-svelte-h":!0}),fe(e)!=="svelte-qdsr2u"&&(e.textContent=s),this.h()},h:function(){v(e,P,76,2,2578)},m:function(o,c){U(o,e,c)},p:j,i:j,o:j,d:function(o){o&&p(e)}};return z("SvelteRegisterBlock",{block:n,id:Yt.name,type:"if",source:"(67:0) {#if $version.fetching}",ctx:t}),n}function vt(t){let e,s="Edit",n,r,o="Delete",c,l;const i={c:function(){e=m("button"),e.textContent=s,n=S(),r=m("button"),r.textContent=o,this.h()},l:function(d){e=g(d,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-53n07s"&&(e.textContent=s),n=I(d),r=g(d,"BUTTON",{class:!0,"data-svelte-h":!0}),fe(r)!=="svelte-tfawqf"&&(r.textContent=o),this.h()},h:function(){E(e,"class","btn variant-ghost-primary"),v(e,P,89,10,3042),E(r,"class","btn variant-ghost-primary"),v(r,P,94,10,3238)},m:function(d,h){U(d,e,h),U(d,n,h),U(d,r,h),c||(l=[at(e,"click",t[9],!1,!1,!1,!1),at(r,"click",t[10],!1,!1,!1,!1)],c=!0)},p:j,d:function(d){d&&(p(e),p(n),p(r)),c=!1,cn(l)}};return z("SvelteRegisterBlock",{block:i,id:vt.name,type:"if",source:"(80:8) {#if canUserEdit}",ctx:t}),i}function Zt(t){let e,s,n,r,o;const c={c:function(){e=m("a"),s=D("View"),n=S(),r=m("a"),o=D("Download"),this.h()},l:function(i){e=g(i,"A",{class:!0,href:!0});var f=V(e);s=N(f,"View"),f.forEach(p),n=I(i),r=g(i,"A",{class:!0,href:!0});var d=V(r);o=N(d,"Download"),d.forEach(p),this.h()},h:function(){E(e,"class","btn variant-ghost-primary"),E(e,"href",_e+"/mod/"+t[2]+"/version/"+t[3]),v(e,P,126,10,4517),E(r,"class","btn variant-ghost-primary"),E(r,"href",We+"/mod/"+t[2]+"/versions/"+t[3]+"/download"),v(r,P,127,10,4629)},m:function(i,f){U(i,e,f),a(e,s),U(i,n,f),U(i,r,f),a(r,o)},p:j,d:function(i){i&&(p(e),p(n),p(r))}};return z("SvelteRegisterBlock",{block:c,id:Zt.name,type:"else",source:"(117:8) {:else}",ctx:t}),c}function en(t){let e,s,n="Download",r,o,c="arrow_drop_down",l,i,f,d,h,w,u=Ct(t[0].data.getVersion.targets),$=[];for(let R=0;R<u.length;R+=1)$[R]=$t(Ot(t,u,R));const B={c:function(){e=m("button"),s=m("span"),s.textContent=n,r=S(),o=m("span"),o.textContent=c,l=S(),i=m("div"),f=m("nav"),d=m("ul");for(let x=0;x<$.length;x+=1)$[x].c();this.h()},l:function(x){e=g(x,"BUTTON",{class:!0,title:!0});var C=V(e);s=g(C,"SPAN",{"data-svelte-h":!0}),fe(s)!=="svelte-q9mf3e"&&(s.textContent=n),r=I(C),o=g(C,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),fe(o)!=="svelte-dpxqae"&&(o.textContent=c),C.forEach(p),l=I(x),i=g(x,"DIV",{class:!0,"data-popup":!0});var k=V(i);f=g(k,"NAV",{class:!0});var A=V(f);d=g(A,"UL",{});var b=V(d);for(let le=0;le<$.length;le+=1)$[le].l(b);b.forEach(p),A.forEach(p),k.forEach(p),this.h()},h:function(){v(s,P,106,12,3748),E(o,"class","material-icons"),fn(o,"margin","0"),v(o,P,107,12,3782),E(e,"class","btn variant-ghost-primary"),E(e,"title","Download a specific release target of this mod"),v(e,P,97,10,3428),v(d,P,112,14,4005),E(f,"class","list-nav"),v(f,P,111,12,3968),E(i,"class","card w-72 shadow-xl z-10"),E(i,"data-popup","versionArchDropdown"),v(i,P,110,10,3884)},m:function(x,C){U(x,e,C),a(e,s),a(e,r),a(e,o),U(x,l,C),U(x,i,C),a(i,f),a(f,d);for(let k=0;k<$.length;k+=1)$[k]&&$[k].m(d,null);h||(w=un(Tt.call(null,e,{event:"focus-click",target:"versionArchDropdown",placement:"bottom",closeQuery:"a"})),h=!0)},p:function(x,C){if(C&13){u=Ct(x[0].data.getVersion.targets);let k;for(k=0;k<u.length;k+=1){const A=Ot(x,u,k);$[k]?$[k].p(A,C):($[k]=$t(A),$[k].c(),$[k].m(d,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=u.length}},d:function(x){x&&(p(e),p(l),p(i)),dn($,x),h=!1,w()}};return z("SvelteRegisterBlock",{block:B,id:en.name,type:"if",source:"(88:8) {#if $version.data.getVersion.targets.length != 0}",ctx:t}),B}function $t(t){let e,s,n,r,o=dt(t[15].targetName)+"",c,l,i;const f={c:function(){e=m("li"),s=m("a"),n=m("span"),r=D("Download "),c=D(o),i=S(),this.h()},l:function(h){e=g(h,"LI",{});var w=V(e);s=g(w,"A",{class:!0,href:!0});var u=V(s);n=g(u,"SPAN",{});var $=V(n);r=N($,"Download "),c=N($,o),$.forEach(p),u.forEach(p),i=I(w),w.forEach(p),this.h()},h:function(){v(n,P,118,22,4306),E(s,"class","w-full"),E(s,"href",l=We+"/mod/"+t[2]+"/versions/"+t[3]+"/"+t[15].targetName+"/download"),v(s,P,115,20,4120),v(e,P,114,18,4095)},m:function(h,w){U(h,e,w),a(e,s),a(s,n),a(n,r),a(n,c),a(e,i)},p:function(h,w){w&1&&o!==(o=dt(h[15].targetName)+"")&&K(c,o),w&1&&l!==(l=We+"/mod/"+h[2]+"/versions/"+h[3]+"/"+h[15].targetName+"/download")&&E(s,"href",l)},d:function(h){h&&p(e)}};return z("SvelteRegisterBlock",{block:f,id:$t.name,type:"each",source:"(105:16) {#each $version.data.getVersion.targets as target}",ctx:t}),f}function wt(t){let e,s,n,r,o,c,l=!t[0].fetching&&!t[0].error&&t[0].data.getVersion&&gt(t);const i=[Yt,Xt,Qt,Kt],f=[];function d(w,u){return w[0].fetching?0:w[0].error?1:w[0].data.getVersion?2:3}n=d(t),r=f[n]=i[n](t);const h={c:function(){l&&l.c(),e=Fe(),s=S(),r.c(),o=Fe()},l:function(u){const $=ln("svelte-7zfw29",document.head);l&&l.l($),e=Fe(),$.forEach(p),s=I(u),r.l(u),o=Fe()},m:function(u,$){l&&l.m(document.head,null),a(document.head,e),U(u,s,$),f[n].m(u,$),U(u,o,$),c=!0},p:function(u,[$]){!u[0].fetching&&!u[0].error&&u[0].data.getVersion?l?(l.p(u,$),$&1&&Y(l,1)):(l=gt(u),l.c(),Y(l,1),l.m(e.parentNode,e)):l&&(rt(),oe(l,1,1,()=>{l=null}),st());let B=n;n=d(u),n===B?f[n].p(u,$):(rt(),oe(f[B],1,1,()=>{f[B]=null}),st(),r=f[n],r?r.p(u,$):(r=f[n]=i[n](u),r.c()),Y(r,1),r.m(o.parentNode,o))},i:function(u){c||(Y(l),Y(r),c=!0)},o:function(u){oe(l),oe(r),c=!1},d:function(u){u&&(p(s),p(o)),l&&l.d(u),p(e),f[n].d(u)}};return z("SvelteRegisterBlock",{block:h,id:wt.name,type:"component",source:"",ctx:t}),h}function $n(t,e,s){let n,r,o;it(ot,"user"),Dt(t,ot,b=>s(8,r=b));let{$$slots:c={},$$scope:l}=e;yt("Page",c,[]);let{data:i}=e;const{modId:f,versionId:d,version:h}=i;it(h,"version"),Dt(t,h,b=>s(0,o=b));const w=Nt(),u=Pt(),$=()=>{w.mutation(At,{versionId:d}).toPromise().then(b=>{b.error?(console.error(b.error.message),u.trigger({message:"Error deleting version: "+b.error.message,background:"variant-filled-error",autohide:!1})):(u.trigger({message:"Version deleted",background:"variant-filled-success",timeout:5e3}),nt(_e+"/mod/"+f))})},B={type:"confirm",title:"Delete Version?",body:"Are you sure you wish to delete this version?",response:b=>{b&&$()}},R=Rt();t.$$.on_mount.push(function(){i===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&Bt.warn("<Page> was created without expected prop 'data'")});const x=["data"];Object.keys(e).forEach(b=>{!~x.indexOf(b)&&b.slice(0,2)!=="$$"&&b!=="slot"&&Bt.warn(`<Page> was created with unknown prop '${b}'`)});const C=()=>nt(_e+"/mod/"+f+"/version/"+d+"/edit"),k=()=>R.trigger(B),A=()=>_t(o.data.getVersion.mod.mod_reference);return t.$$set=b=>{"data"in b&&s(7,i=b.data)},t.$capture_state=()=>({DeleteVersionDocument:At,VersionDescription:Wt,VersionInfo:Jt,MetaDescriptors:qt,API_REST:We,goto:nt,user:ot,base:_e,installMod:_t,prettyTarget:dt,VersionTargetSupportGrid:Ut,VersionDependenciesGrid:zt,getContextClient:Nt,getModalStore:Rt,getToastStore:Pt,popup:Tt,Page404:Gt,data:i,modId:f,versionId:d,version:h,client:w,toastStore:u,deleteVersionFn:$,deleteModal:B,modalStore:R,canUserEdit:n,$user:r,$version:o}),t.$inject_state=b=>{"data"in b&&s(7,i=b.data),"canUserEdit"in b&&s(1,n=b.canUserEdit)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&257&&s(1,n=r?.roles?.deleteContent||o?.data?.getVersion.mod?.authors?.findIndex(b=>b.user_id==r?.id)>=0)},[o,n,f,d,h,B,R,i,r,C,k,A]}class Cn extends bt{constructor(e){super(e),Vt(this,e,$n,wt,xt,{data:7}),z("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:wt.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Cn as component,Rn as universal};
//# sourceMappingURL=18.a5b2517a.js.map
