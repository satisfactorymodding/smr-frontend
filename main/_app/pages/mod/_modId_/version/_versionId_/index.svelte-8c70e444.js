import{S as Ne,i as Te,s as Me,bc as Ge,K as M,L as P,N as R,v as g,w as V,Q as A,bd as He,bi as qe,e as h,g as v,h as I,j as c,Y as ee,l as S,bj as ot,ad as O,a8 as b,d as j,a9 as k,f as N,Z as l,aa as te,aG as rt,a7 as be,aW as at,a0 as ke,a3 as ze,ac as lt,aF as it,$ as we,a6 as ft,aL as le,P as Fe,I as Je,J as Ke,b2 as Qe,b3 as Ue,aE as ct,aJ as ut,aK as $t}from"../../../../../chunks/vendor-ec5ada1e.js";import{M as dt}from"../../../../../chunks/MetaDescriptors-906e206a.js";import{l as mt}from"../../../../../chunks/gql-5fdd41cb.js";import{B as _t,H as pt}from"../../../../../chunks/graphql-b763070c.js";import{p as gt}from"../../../../../chunks/routing-689f9c1f.js";import{m as We}from"../../../../../chunks/markdown-e391b8a1.js";import{a as Ye,p as Ze,b as Xe}from"../../../../../chunks/formatting-24701f16.js";import{b as ye}from"../../../../../chunks/api-82c76902.js";import{a as ht}from"../../../../../chunks/user-eeec5cd2.js";import{T as vt}from"../../../../../chunks/Toast-ae7e9d4e.js";import{g as xe}from"../../../../../chunks/navigation-d7362a67.js";import{b as Ve}from"../../../../../chunks/paths-396f020f.js";import{i as bt}from"../../../../../chunks/launcher-431b4437.js";import"../../../../../chunks/stores-bab812ef.js";import"../../../../../chunks/global-5ff8cc03.js";import"../../../../../chunks/extras-7497b851.js";import"../../../../../chunks/singletons-d19c42e4.js";function kt(o){return{c:O,l:O,m:O,p:O,d:O}}function wt(o){let e,n=o[1]+"";return{c(){e=h("p")},l(t){e=v(t,"P",{});var r=I(e);r.forEach(c)},m(t,r){S(t,e,r),e.innerHTML=n},p(t,r){r&1&&n!==(n=t[1]+"")&&(e.innerHTML=n)},d(t){t&&c(e)}}}function Vt(o){return{c:O,l:O,m:O,p:O,d:O}}function Et(o){let e,n,t={ctx:o,current:null,token:null,hasCatch:!1,pending:Vt,then:wt,catch:kt,value:1};return qe(n=We(o[0]),t),{c(){e=h("div"),t.block.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var s=I(e);t.block.l(s),s.forEach(c),this.h()},h(){ee(e,"class","markdown-content")},m(r,s){S(r,e,s),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(r,s){o=r,t.ctx=o,s&1&&n!==(n=We(o[0]))&&qe(n,t)||ot(t,o,s)},d(r){r&&c(e),t.block.d(),t.token=null,t=null}}}function Dt(o){let e,n;return e=new He({props:{$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&5&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function It(o){let e,n;return e=new Ge({props:{class:"h-fit",$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,[r]){const s={};r&5&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function St(o,e,n){let{changelog:t}=e;return o.$$set=r=>{"changelog"in r&&n(0,t=r.changelog)},[t]}class jt extends Ne{constructor(e){super();Te(this,e,St,It,Me,{changelog:0})}}function Nt(o){let e,n,t,r,s,a,i,m,d=Ye(o[0].created_at)+"",$,u,w,C,B,Q,q,Y=Ze(o[0].downloads)+"",z,K,ne,L,G,y,p,F=o[0].sml_version+"",se,x,T,E,oe,ie,f,_=o[0].stability+"",U,Z,H,J,X,re,Ee,fe=Xe(o[0].size)+"",$e,De,Ie,ae,ce,Se,je,ue=o[0].hash+"",de;return{c(){e=h("div"),n=h("h3"),t=b("Info"),r=j(),s=h("span"),a=h("strong"),i=b("Created:"),m=j(),$=b(d),u=h("br"),w=j(),C=h("span"),B=h("strong"),Q=b("Downloads:"),q=j(),z=b(Y),K=h("br"),ne=j(),L=h("span"),G=h("strong"),y=b("SML Version:"),p=j(),se=b(F),x=h("br"),T=j(),E=h("span"),oe=h("strong"),ie=b("Stability:"),f=j(),U=b(_),Z=h("br"),H=j(),J=h("span"),X=h("strong"),re=b("Size:"),Ee=j(),$e=b(fe),De=h("br"),Ie=j(),ae=h("span"),ce=h("strong"),Se=b("Hash:"),je=j(),de=b(ue),this.h()},l(W){e=v(W,"DIV",{class:!0});var D=I(e);n=v(D,"H3",{class:!0});var Pe=I(n);t=k(Pe,"Info"),Pe.forEach(c),r=N(D),s=v(D,"SPAN",{});var me=I(s);a=v(me,"STRONG",{});var Re=I(a);i=k(Re,"Created:"),Re.forEach(c),m=N(me),$=k(me,d),me.forEach(c),u=v(D,"BR",{}),w=N(D),C=v(D,"SPAN",{});var _e=I(C);B=v(_e,"STRONG",{});var Ae=I(B);Q=k(Ae,"Downloads:"),Ae.forEach(c),q=N(_e),z=k(_e,Y),_e.forEach(c),K=v(D,"BR",{}),ne=N(D),L=v(D,"SPAN",{});var pe=I(L);G=v(pe,"STRONG",{});var Ce=I(G);y=k(Ce,"SML Version:"),Ce.forEach(c),p=N(pe),se=k(pe,F),pe.forEach(c),x=v(D,"BR",{}),T=N(D),E=v(D,"SPAN",{});var ge=I(E);oe=v(ge,"STRONG",{});var Oe=I(oe);ie=k(Oe,"Stability:"),Oe.forEach(c),f=N(ge),U=k(ge,_),ge.forEach(c),Z=v(D,"BR",{}),H=N(D),J=v(D,"SPAN",{});var he=I(J);X=v(he,"STRONG",{});var Be=I(X);re=k(Be,"Size:"),Be.forEach(c),Ee=N(he),$e=k(he,fe),he.forEach(c),De=v(D,"BR",{}),Ie=N(D),ae=v(D,"SPAN",{});var ve=I(ae);ce=v(ve,"STRONG",{});var Le=I(ce);Se=k(Le,"Hash:"),Le.forEach(c),je=N(ve),de=k(ve,ue),ve.forEach(c),D.forEach(c),this.h()},h(){ee(n,"class","text-2xl my-4 font-bold"),ee(e,"class","text-lg break-words")},m(W,D){S(W,e,D),l(e,n),l(n,t),l(e,r),l(e,s),l(s,a),l(a,i),l(s,m),l(s,$),l(e,u),l(e,w),l(e,C),l(C,B),l(B,Q),l(C,q),l(C,z),l(e,K),l(e,ne),l(e,L),l(L,G),l(G,y),l(L,p),l(L,se),l(e,x),l(e,T),l(e,E),l(E,oe),l(oe,ie),l(E,f),l(E,U),l(e,Z),l(e,H),l(e,J),l(J,X),l(X,re),l(J,Ee),l(J,$e),l(e,De),l(e,Ie),l(e,ae),l(ae,ce),l(ce,Se),l(ae,je),l(ae,de)},p(W,D){D&1&&d!==(d=Ye(W[0].created_at)+"")&&te($,d),D&1&&Y!==(Y=Ze(W[0].downloads)+"")&&te(z,Y),D&1&&F!==(F=W[0].sml_version+"")&&te(se,F),D&1&&_!==(_=W[0].stability+"")&&te(U,_),D&1&&fe!==(fe=Xe(W[0].size)+"")&&te($e,fe),D&1&&ue!==(ue=W[0].hash+"")&&te(de,ue)},d(W){W&&c(e)}}}function Tt(o){let e,n;return e=new He({props:{$$slots:{default:[Nt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&3&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Mt(o){let e,n;return e=new Ge({props:{$$slots:{default:[Tt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,[r]){const s={};r&3&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Pt(o,e,n){let{version:t}=e;return o.$$set=r=>{"version"in r&&n(0,t=r.version)},[t]}class Rt extends Ne{constructor(e){super();Te(this,e,Pt,Mt,Me,{version:0})}}function et(o){let e,n;return e=new dt({props:{description:"Information for mod version "+o[3].data.getVersion.mod.name+" "+o[3].data.getVersion.version,title:"Mod version "+o[3].data.getVersion.mod.name+" "+o[3].data.getVersion.version}}),{c(){M(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){R(e,t,r),n=!0},p(t,r){const s={};r&8&&(s.description="Information for mod version "+t[3].data.getVersion.mod.name+" "+t[3].data.getVersion.version),r&8&&(s.title="Mod version "+t[3].data.getVersion.mod.name+" "+t[3].data.getVersion.version),e.$set(s)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function At(o){let e;return{c(){e=b("404")},l(n){e=k(n,"404")},m(n,t){S(n,e,t)},p:O,i:O,o:O,d(n){n&&c(e)}}}function Ct(o){let e,n,t,r=o[3].data.getVersion.mod.name+"",s,a,i=o[3].data.getVersion.version+"",m,d,$,u,w,C,B,Q,q,Y,z,K,ne,L,G,y,p,F,se,x,T=o[6]&&tt(o);w=new le({props:{variant:"outlined",href:ye+"/mod/"+o[0]+"/versions/"+o[1]+"/download",$$slots:{default:[Ht]},$$scope:{ctx:o}}}),B=new le({props:{variant:"outlined",$$slots:{default:[Ft]},$$scope:{ctx:o}}}),B.$on("click",o[13]),q=new le({props:{variant:"outlined",href:Ve+"/mod/"+o[0],$$slots:{default:[Qt]},$$scope:{ctx:o}}}),K=new jt({props:{changelog:o[3].data.getVersion.changelog}}),G=new Rt({props:{version:o[3].data.getVersion}});let E=o[6]&&nt(o);function oe(f){o[17](f)}let ie={$$slots:{default:[yt]},$$scope:{ctx:o}};return o[5]!==void 0&&(ie.running=o[5]),F=new vt({props:ie}),Je.push(()=>Ke(F,"running",oe)),{c(){e=h("div"),n=h("div"),t=h("h1"),s=b(r),a=b(`
        Version `),m=b(i),d=j(),$=h("div"),T&&T.c(),u=j(),M(w.$$.fragment),C=j(),M(B.$$.fragment),Q=j(),M(q.$$.fragment),Y=j(),z=h("div"),M(K.$$.fragment),ne=j(),L=h("div"),M(G.$$.fragment),y=j(),E&&E.c(),p=j(),M(F.$$.fragment),this.h()},l(f){e=v(f,"DIV",{class:!0});var _=I(e);n=v(_,"DIV",{class:!0});var U=I(n);t=v(U,"H1",{class:!0});var Z=I(t);s=k(Z,r),a=k(Z,`
        Version `),m=k(Z,i),Z.forEach(c),d=N(U),$=v(U,"DIV",{class:!0});var H=I($);T&&T.l(H),u=N(H),P(w.$$.fragment,H),C=N(H),P(B.$$.fragment,H),Q=N(H),P(q.$$.fragment,H),H.forEach(c),U.forEach(c),Y=N(_),z=v(_,"DIV",{class:!0});var J=I(z);P(K.$$.fragment,J),ne=N(J),L=v(J,"DIV",{class:!0});var X=I(L);P(G.$$.fragment,X),X.forEach(c),J.forEach(c),_.forEach(c),y=N(f),E&&E.l(f),p=N(f),P(F.$$.fragment,f),this.h()},h(){ee(t,"class","text-4xl font-bold"),ee($,"class","grid grid-flow-col gap-4"),ee(n,"class","flex flex-wrap h-auto justify-between items-center"),ee(L,"class","grid grid-cols-1 auto-rows-min gap-8"),ee(z,"class","grid grid-auto-max auto-cols-fr gap-4"),ee(e,"class","grid gap-6 xlx:grid-flow-row")},m(f,_){S(f,e,_),l(e,n),l(n,t),l(t,s),l(t,a),l(t,m),l(n,d),l(n,$),T&&T.m($,null),l($,u),R(w,$,null),l($,C),R(B,$,null),l($,Q),R(q,$,null),l(e,Y),l(e,z),R(K,z,null),l(z,ne),l(z,L),R(G,L,null),S(f,y,_),E&&E.m(f,_),S(f,p,_),R(F,f,_),x=!0},p(f,_){(!x||_&8)&&r!==(r=f[3].data.getVersion.mod.name+"")&&te(s,r),(!x||_&8)&&i!==(i=f[3].data.getVersion.version+"")&&te(m,i),f[6]?T?(T.p(f,_),_&64&&g(T,1)):(T=tt(f),T.c(),g(T,1),T.m($,u)):T&&(we(),V(T,1,1,()=>{T=null}),ke());const U={};_&3&&(U.href=ye+"/mod/"+f[0]+"/versions/"+f[1]+"/download"),_&524288&&(U.$$scope={dirty:_,ctx:f}),w.$set(U);const Z={};_&524288&&(Z.$$scope={dirty:_,ctx:f}),B.$set(Z);const H={};_&1&&(H.href=Ve+"/mod/"+f[0]),_&524288&&(H.$$scope={dirty:_,ctx:f}),q.$set(H);const J={};_&8&&(J.changelog=f[3].data.getVersion.changelog),K.$set(J);const X={};_&8&&(X.version=f[3].data.getVersion),G.$set(X),f[6]?E?(E.p(f,_),_&64&&g(E,1)):(E=nt(f),E.c(),g(E,1),E.m(p.parentNode,p)):E&&(we(),V(E,1,1,()=>{E=null}),ke());const re={};_&524304&&(re.$$scope={dirty:_,ctx:f}),!se&&_&32&&(se=!0,re.running=f[5],Fe(()=>se=!1)),F.$set(re)},i(f){x||(g(T),g(w.$$.fragment,f),g(B.$$.fragment,f),g(q.$$.fragment,f),g(K.$$.fragment,f),g(G.$$.fragment,f),g(E),g(F.$$.fragment,f),x=!0)},o(f){V(T),V(w.$$.fragment,f),V(B.$$.fragment,f),V(q.$$.fragment,f),V(K.$$.fragment,f),V(G.$$.fragment,f),V(E),V(F.$$.fragment,f),x=!1},d(f){f&&c(e),T&&T.d(),A(w),A(B),A(q),A(K),A(G),f&&c(y),E&&E.d(f),f&&c(p),A(F,f)}}}function Ot(o){let e,n,t=o[3].error.message+"",r;return{c(){e=h("p"),n=b("Oh no... "),r=b(t)},l(s){e=v(s,"P",{});var a=I(e);n=k(a,"Oh no... "),r=k(a,t),a.forEach(c)},m(s,a){S(s,e,a),l(e,n),l(e,r)},p(s,a){a&8&&t!==(t=s[3].error.message+"")&&te(r,t)},i:O,o:O,d(s){s&&c(e)}}}function Bt(o){let e,n;return{c(){e=h("p"),n=b("Loading...")},l(t){e=v(t,"P",{});var r=I(e);n=k(r,"Loading..."),r.forEach(c)},m(t,r){S(t,e,r),l(e,n)},p:O,i:O,o:O,d(t){t&&c(e)}}}function tt(o){let e,n,t,r;return e=new le({props:{variant:"outlined",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),e.$on("click",o[11]),t=new le({props:{variant:"outlined",$$slots:{default:[Gt]},$$scope:{ctx:o}}}),t.$on("click",o[12]),{c(){M(e.$$.fragment),n=j(),M(t.$$.fragment)},l(s){P(e.$$.fragment,s),n=N(s),P(t.$$.fragment,s)},m(s,a){R(e,s,a),S(s,n,a),R(t,s,a),r=!0},p(s,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:s}),t.$set(m)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){V(e.$$.fragment,s),V(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&c(n),A(t,s)}}}function Lt(o){let e;return{c(){e=b("Edit")},l(n){e=k(n,"Edit")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Gt(o){let e;return{c(){e=b("Delete")},l(n){e=k(n,"Delete")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Ht(o){let e;return{c(){e=b("Download")},l(n){e=k(n,"Download")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function qt(o){let e;return{c(){e=b("Install")},l(n){e=k(n,"Install")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function zt(o){let e;return{c(){e=b("download")},l(n){e=k(n,"download")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Ft(o){let e,n,t,r;return e=new Qe({props:{$$slots:{default:[qt]},$$scope:{ctx:o}}}),t=new Ue({props:{class:"material-icons",$$slots:{default:[zt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment),n=j(),M(t.$$.fragment)},l(s){P(e.$$.fragment,s),n=N(s),P(t.$$.fragment,s)},m(s,a){R(e,s,a),S(s,n,a),R(t,s,a),r=!0},p(s,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:s}),t.$set(m)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){V(e.$$.fragment,s),V(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&c(n),A(t,s)}}}function Jt(o){let e;return{c(){e=b("Mod")},l(n){e=k(n,"Mod")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Kt(o){let e;return{c(){e=b("extension")},l(n){e=k(n,"extension")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Qt(o){let e,n,t,r;return e=new Qe({props:{$$slots:{default:[Jt]},$$scope:{ctx:o}}}),t=new Ue({props:{class:"material-icons",$$slots:{default:[Kt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment),n=j(),M(t.$$.fragment)},l(s){P(e.$$.fragment,s),n=N(s),P(t.$$.fragment,s)},m(s,a){R(e,s,a),S(s,n,a),R(t,s,a),r=!0},p(s,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:s}),t.$set(m)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){V(e.$$.fragment,s),V(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&c(n),A(t,s)}}}function nt(o){let e,n,t;function r(a){o[16](a)}let s={$$slots:{default:[Xt]},$$scope:{ctx:o}};return o[7]!==void 0&&(s.open=o[7]),e=new ct({props:s}),Je.push(()=>Ke(e,"open",r)),{c(){M(e.$$.fragment)},l(a){P(e.$$.fragment,a)},m(a,i){R(e,a,i),t=!0},p(a,i){const m={};i&524288&&(m.$$scope={dirty:i,ctx:a}),!n&&i&128&&(n=!0,m.open=a[7],Fe(()=>n=!1)),e.$set(m)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){V(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function Ut(o){let e;return{c(){e=b("Delete Version?")},l(n){e=k(n,"Delete Version?")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Wt(o){let e;return{c(){e=b("Cancel")},l(n){e=k(n,"Cancel")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Yt(o){let e;return{c(){e=b("Delete")},l(n){e=k(n,"Delete")},m(n,t){S(n,e,t)},d(n){n&&c(e)}}}function Zt(o){let e,n,t,r,s,a,i,m;return s=new le({props:{variant:"outlined",$$slots:{default:[Wt]},$$scope:{ctx:o}}}),s.$on("click",o[14]),i=new le({props:{variant:"outlined",$$slots:{default:[Yt]},$$scope:{ctx:o}}}),i.$on("click",o[15]),{c(){e=h("div"),n=h("span"),t=b("Are you sure you wish to delete this version"),r=j(),M(s.$$.fragment),a=j(),M(i.$$.fragment),this.h()},l(d){e=v(d,"DIV",{class:!0});var $=I(e);n=v($,"SPAN",{});var u=I(n);t=k(u,"Are you sure you wish to delete this version"),u.forEach(c),r=N($),P(s.$$.fragment,$),a=N($),P(i.$$.fragment,$),$.forEach(c),this.h()},h(){ee(e,"class","grid grid-flow-row gap-4")},m(d,$){S(d,e,$),l(e,n),l(n,t),l(e,r),R(s,e,null),l(e,a),R(i,e,null),m=!0},p(d,$){const u={};$&524288&&(u.$$scope={dirty:$,ctx:d}),s.$set(u);const w={};$&524288&&(w.$$scope={dirty:$,ctx:d}),i.$set(w)},i(d){m||(g(s.$$.fragment,d),g(i.$$.fragment,d),m=!0)},o(d){V(s.$$.fragment,d),V(i.$$.fragment,d),m=!1},d(d){d&&c(e),A(s),A(i)}}}function Xt(o){let e,n,t,r;return e=new ut({props:{id:"simple-title",$$slots:{default:[Ut]},$$scope:{ctx:o}}}),t=new $t({props:{$$slots:{default:[Zt]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment),n=j(),M(t.$$.fragment)},l(s){P(e.$$.fragment,s),n=N(s),P(t.$$.fragment,s)},m(s,a){R(e,s,a),S(s,n,a),R(t,s,a),r=!0},p(s,a){const i={};a&524288&&(i.$$scope={dirty:a,ctx:s}),e.$set(i);const m={};a&524288&&(m.$$scope={dirty:a,ctx:s}),t.$set(m)},i(s){r||(g(e.$$.fragment,s),g(t.$$.fragment,s),r=!0)},o(s){V(e.$$.fragment,s),V(t.$$.fragment,s),r=!1},d(s){A(e,s),s&&c(n),A(t,s)}}}function yt(o){let e,n;return{c(){e=h("span"),n=b(o[4])},l(t){e=v(t,"SPAN",{});var r=I(e);n=k(r,o[4]),r.forEach(c)},m(t,r){S(t,e,r),l(e,n)},p(t,r){r&16&&te(n,t[4])},d(t){t&&c(e)}}}function xt(o){let e,n,t,r,s,a,i=!o[3].fetching&&!o[3].error&&o[3].data.getVersion&&et(o);const m=[Bt,Ot,Ct,At],d=[];function $(u,w){return u[3].fetching?0:u[3].error?1:u[3].data.getVersion?2:3}return t=$(o),r=d[t]=m[t](o),{c(){i&&i.c(),e=be(),n=j(),r.c(),s=be()},l(u){const w=at('[data-svelte="svelte-1c60p3b"]',document.head);i&&i.l(w),e=be(),w.forEach(c),n=N(u),r.l(u),s=be()},m(u,w){i&&i.m(document.head,null),l(document.head,e),S(u,n,w),d[t].m(u,w),S(u,s,w),a=!0},p(u,[w]){!u[3].fetching&&!u[3].error&&u[3].data.getVersion?i?(i.p(u,w),w&8&&g(i,1)):(i=et(u),i.c(),g(i,1),i.m(e.parentNode,e)):i&&(we(),V(i,1,1,()=>{i=null}),ke());let C=t;t=$(u),t===C?d[t].p(u,w):(we(),V(d[C],1,1,()=>{d[C]=null}),ke(),r=d[t],r?r.p(u,w):(r=d[t]=m[t](u),r.c()),g(r,1),r.m(s.parentNode,s))},i(u){a||(g(i),g(r),a=!0)},o(u){V(i),V(r),a=!1},d(u){i&&i.d(u),c(e),u&&c(n),d[t].d(u),u&&c(s)}}}const st=rt(_t,{version:void 0}),vn=gt(async o=>(st.variables.version=o.params.versionId,mt({version:st})(o)));function en(o,e,n){let t,r,s,a=O,i=()=>(a(),a=lt(u,p=>n(3,s=p)),u),m;ze(o,ht,p=>n(10,r=p)),o.$$.on_destroy.push(()=>a());let{modId:d}=e,{versionId:$}=e,{version:u}=e;i();let w="",C=!1;const B=it({query:pt}),Q=ft(!1);ze(o,Q,p=>n(7,m=p));const q=()=>{B({versionId:$}).then(p=>{p.error?(console.error(p.error.message),n(4,w="Error deleting version: "+p.error.message),n(5,C=!0)):xe(Ve+"/mod/"+d)})},Y=()=>xe(Ve+"/mod/"+d+"/version/"+$+"/edit"),z=()=>Q.set(!0),K=()=>bt(u.data.getVersion.mod.mod_reference),ne=()=>Q.set(!1),L=()=>q();function G(p){m=p,Q.set(m)}function y(p){C=p,n(5,C)}return o.$$set=p=>{"modId"in p&&n(0,d=p.modId),"versionId"in p&&n(1,$=p.versionId),"version"in p&&i(n(2,u=p.version))},o.$$.update=()=>{o.$$.dirty&1032&&n(6,t=r?.roles?.deleteContent||s?.data?.getVersion.mod?.authors?.findIndex(p=>p.user_id==r?.id)>=0)},[d,$,u,s,w,C,t,m,Q,q,r,Y,z,K,ne,L,G,y]}class bn extends Ne{constructor(e){super();Te(this,e,en,xt,Me,{modId:0,versionId:1,version:2})}}export{bn as default,vn as load};
//# sourceMappingURL=index.svelte-8c70e444.js.map
