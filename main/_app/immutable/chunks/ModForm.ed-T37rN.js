import{S as ur,i as dr,s as pr,b as Ke,j as q,q as Z,f as n,a5 as hr,C as yr,D as br,r as je,e as f,c as u,K as mr,A as c,a as _,P as A,d as m,g as I,Q as N,a9 as Qe,M as i,R as T,a1 as Ge,u as fe,_ as ue,aA as $r,I as Y,J as tt,W as G,L as et,N as Nt,a8 as Er,a2 as wr,$ as de,m as B,k as pe,t as W,l as he,O as rt,X as xr,F as _r,aB as Xe,T as Ye,U as Ir,a3 as Ar,a4 as Nr}from"./vendor.DBwCcoHF.js";import{o as Ht,s as it,a as Jt,b as Pr,l as kr,f as tr,g as Dr,V as Lt,c as Vr,v as Sr,r as Tr}from"./forms.BqkbRs4c.js";import{t as Ur}from"./forms.VVrKmoJB.js";import{m as er}from"./markdown.CRido6f5.js";import{B as Lr,t as rr}from"./graphql.sMbDXPDh.js";import{T as Br}from"./TagList.DP2FHsP3.js";import{M as qr}from"./ModCompatibilityEdit.DpRGkfsh.js";const sr=Ht({name:it().min(3).max(32),mod_reference:it().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:it().min(16).max(128),full_description:Jt(it()),logo:Jt(Pr().refine(e=>"name"in e&&"size"in e&&"type"in e)),source_url:it().url().optional().or(kr("")),authors:Jt(Ht({role:it(),user_id:it()}).array()),compatibility:Jt(Ht({EA:Ht({state:it(),note:tr()}),EXP:Ht({state:it(),note:tr()})})),hidden:Dr(),tagIDs:Jt(it().array())});function Cr(e){let t,s="Unknown User ID";return{c(){t=f("p"),t.textContent=s,this.h()},l(a){t=u(a,"P",{class:!0,"data-svelte-h":!0}),mr(t)!=="svelte-12dp6bw"&&(t.textContent=s),this.h()},h(){c(t,"class","mr-2 whitespace-nowrap")},m(a,r){q(a,t,r)},p:Z,d(a){a&&n(t)}}}function Or(e){let t,s,a,r,l,o,h=e[2].data.getUser.username+"",g;return{c(){t=f("div"),s=f("div"),r=_(),l=f("div"),o=f("span"),g=A(h),this.h()},l(w){t=u(w,"DIV",{class:!0});var b=m(t);s=u(b,"DIV",{class:!0,style:!0}),m(s).forEach(n),r=I(b),l=u(b,"DIV",{class:!0});var C=m(l);o=u(C,"SPAN",{class:!0});var P=m(o);g=N(P,h),P.forEach(n),C.forEach(n),b.forEach(n),this.h()},h(){c(s,"class","h-7 w-7 rounded-full bg-cover"),c(s,"style",a=`background-image: url("${e[2].data.getUser.avatar||Qe+"/images/no_image.webp"}")`),c(o,"class","text-yellow-500"),c(l,"class","grid grid-flow-row"),c(t,"class","mr-2 grid auto-cols-max grid-flow-col gap-x-2")},m(w,b){q(w,t,b),i(t,s),i(t,r),i(t,l),i(l,o),i(o,g)},p(w,b){b&4&&a!==(a=`background-image: url("${w[2].data.getUser.avatar||Qe+"/images/no_image.webp"}")`)&&c(s,"style",a),b&4&&h!==(h=w[2].data.getUser.username+"")&&T(g,h)},d(w){w&&n(t)}}}function Mr(e){let t,s=e[3]("error.oh-no")+"",a,r,l=e[2].error.message+"",o;return{c(){t=f("p"),a=A(s),r=A("... "),o=A(l),this.h()},l(h){t=u(h,"P",{class:!0});var g=m(t);a=N(g,s),r=N(g,"... "),o=N(g,l),g.forEach(n),this.h()},h(){c(t,"class","mr-2")},m(h,g){q(h,t,g),i(t,a),i(t,r),i(t,o)},p(h,g){g&8&&s!==(s=h[3]("error.oh-no")+"")&&T(a,s),g&4&&l!==(l=h[2].error.message+"")&&T(o,l)},d(h){h&&n(t)}}}function Xr(e){let t,s=e[3]("loading")+"",a,r;return{c(){t=f("p"),a=A(s),r=A("..."),this.h()},l(l){t=u(l,"P",{class:!0});var o=m(t);a=N(o,s),r=N(o,"..."),o.forEach(n),this.h()},h(){c(t,"class","mr-2")},m(l,o){q(l,t,o),i(t,a),i(t,r)},p(l,o){o&8&&s!==(s=l[3]("loading")+"")&&T(a,s)},d(l){l&&n(t)}}}function jr(e){let t;function s(l,o){return l[2].fetching?Xr:l[2].error?Mr:l[2].data.getUser?Or:Cr}let a=s(e),r=a(e);return{c(){r.c(),t=Ke()},l(l){r.l(l),t=Ke()},m(l,o){r.m(l,o),q(l,t,o)},p(l,[o]){a===(a=s(l))&&r?r.p(l,o):(r.d(1),r=a(l),r&&(r.c(),r.m(t.parentNode,t)))},i:Z,o:Z,d(l){l&&n(t),r.d(l)}}}function Wr(e,t,s){let a,r,l=Z,o=()=>(l(),l=je(a,X=>s(2,r=X)),a),h,g=Z,w=()=>(g(),g=je(C,X=>s(3,h=X)),C);e.$$.on_destroy.push(()=>l()),e.$$.on_destroy.push(()=>g());let{id:b}=t;const{t:C}=hr();w();const P=yr();return e.$$set=X=>{"id"in X&&s(4,b=X.id)},e.$$.update=()=>{e.$$.dirty&16&&o(s(1,a=br({query:Lr,client:P,variables:{user:b}})))},[C,a,r,h,b]}class zr extends ur{constructor(t){super(),dr(this,t,Wr,jr,pr,{id:4,t:0})}get t(){return this.$$.ctx[0]}}function lr(e,t,s){const a=e.slice();return a[28]=t[s],a[29]=t,a[30]=s,a}function Fr(e){let t,s=(e[31]||"")+"",a;return{c(){t=f("span"),a=A(s),this.h()},l(r){t=u(r,"SPAN",{class:!0});var l=m(t);a=N(l,s),l.forEach(n),this.h()},h(){c(t,"class","validation-message")},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[1]&1&&s!==(s=(r[31]||"")+"")&&T(a,s)},d(r){r&&n(t)}}}function ar(e){let t,s=e[7]("mod.reference-warning")+"",a;return{c(){t=f("span"),a=A(s)},l(r){t=u(r,"SPAN",{});var l=m(t);a=N(l,s),l.forEach(n)},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[0]&128&&s!==(s=r[7]("mod.reference-warning")+"")&&T(a,s)},d(r){r&&n(t)}}}function Rr(e){let t,s=(e[31]||"")+"",a;return{c(){t=f("span"),a=A(s),this.h()},l(r){t=u(r,"SPAN",{class:!0});var l=m(t);a=N(l,s),l.forEach(n),this.h()},h(){c(t,"class","validation-message")},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[1]&1&&s!==(s=(r[31]||"")+"")&&T(a,s)},d(r){r&&n(t)}}}function Zr(e){let t,s=(e[31]||"")+"",a;return{c(){t=f("span"),a=A(s),this.h()},l(r){t=u(r,"SPAN",{class:!0});var l=m(t);a=N(l,s),l.forEach(n),this.h()},h(){c(t,"class","validation-message")},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[1]&1&&s!==(s=(r[31]||"")+"")&&T(a,s)},d(r){r&&n(t)}}}function Hr(e){let t,s=(e[31]||"")+"",a;return{c(){t=f("span"),a=A(s),this.h()},l(r){t=u(r,"SPAN",{class:!0});var l=m(t);a=N(l,s),l.forEach(n),this.h()},h(){c(t,"class","validation-message")},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[1]&1&&s!==(s=(r[31]||"")+"")&&T(a,s)},d(r){r&&n(t)}}}function Jr(e){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function Kr(e){let t,s,a=e[32]+"";return{c(){t=f("div"),s=new Ar(!1),this.h()},l(r){t=u(r,"DIV",{class:!0});var l=m(t);s=Nr(l,!1),l.forEach(n),this.h()},h(){s.a=null,c(t,"class","markdown-content right svelte-k92wki")},m(r,l){q(r,t,l),s.m(a,t)},p(r,l){l[0]&64&&a!==(a=r[32]+"")&&s.p(a)},d(r){r&&n(t)}}}function Qr(e){return{c:Z,l:Z,m:Z,p:Z,d:Z}}function Gr(e){let t,s=(e[31]||"")+"",a;return{c(){t=f("span"),a=A(s),this.h()},l(r){t=u(r,"SPAN",{class:!0});var l=m(t);a=N(l,s),l.forEach(n),this.h()},h(){c(t,"class","validation-message")},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[1]&1&&s!==(s=(r[31]||"")+"")&&T(a,s)},d(r){r&&n(t)}}}function Yr(e){let t,s=(e[31]||"")+"",a;return{c(){t=f("span"),a=A(s),this.h()},l(r){t=u(r,"SPAN",{class:!0});var l=m(t);a=N(l,s),l.forEach(n),this.h()},h(){c(t,"class","validation-message")},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[1]&1&&s!==(s=(r[31]||"")+"")&&T(a,s)},d(r){r&&n(t)}}}function ts(e){let t=e[7]("entry.hidden")+"",s;return{c(){s=A(t)},l(a){s=N(a,t)},m(a,r){q(a,s,r)},p(a,r){r[0]&128&&t!==(t=a[7]("entry.hidden")+"")&&T(s,t)},d(a){a&&n(s)}}}function es(e){let t,s=(e[31]||"")+"",a;return{c(){t=f("span"),a=A(s),this.h()},l(r){t=u(r,"SPAN",{class:!0});var l=m(t);a=N(l,s),l.forEach(n),this.h()},h(){c(t,"class","validation-message")},m(r,l){q(r,t,l),i(t,a)},p(r,l){l[1]&1&&s!==(s=(r[31]||"")+"")&&T(a,s)},d(r){r&&n(t)}}}function ir(e){let t,s,a,r,l,o,h,g,w=e[7]("authors")+"",b,C,P,X,$=e[7]("add")+"",U,k,L,V,F;function dt(p){e[22](p)}let z={name:"slider-label",$$slots:{default:[rs]},$$scope:{ctx:e}};e[5]!==void 0&&(z.checked=e[5]),s=new $r({props:z}),fe.push(()=>ue(s,"checked",dt)),s.$on("change",e[23]);let S=e[5]&&nr(e),H=Ye(e[4].authors),x=[];for(let p=0;p<H.length;p+=1)x[p]=fr(lr(e,H,p));const Pt=p=>W(x[p],1,1,()=>{x[p]=null});return{c(){t=f("div"),Y(s.$$.fragment),r=_(),S&&S.c(),l=_(),o=f("div"),h=f("div"),g=f("h4"),b=A(w),C=_(),P=f("button"),X=f("span"),U=A($),k=_();for(let p=0;p<x.length;p+=1)x[p].c();this.h()},l(p){t=u(p,"DIV",{});var E=m(t);tt(s.$$.fragment,E),E.forEach(n),r=I(p),S&&S.l(p),l=I(p),o=u(p,"DIV",{class:!0});var M=m(o);h=u(M,"DIV",{class:!0});var D=m(h);g=u(D,"H4",{class:!0});var Q=m(g);b=N(Q,w),Q.forEach(n),C=I(D),P=u(D,"BUTTON",{class:!0,type:!0});var pt=m(P);X=u(pt,"SPAN",{});var ht=m(X);U=N(ht,$),ht.forEach(n),pt.forEach(n),D.forEach(n),k=I(M);for(let v=0;v<x.length;v+=1)x[v].l(M);M.forEach(n),this.h()},h(){c(g,"class","mr-4"),c(P,"class","variant-ghost-primary btn"),c(P,"type","button"),c(h,"class","flex items-center"),c(o,"class","grid grid-flow-row gap-2")},m(p,E){q(p,t,E),et(s,t,null),q(p,r,E),S&&S.m(p,E),q(p,l,E),q(p,o,E),i(o,h),i(h,g),i(g,b),i(h,C),i(h,P),i(P,X),i(X,U),i(o,k);for(let M=0;M<x.length;M+=1)x[M]&&x[M].m(o,null);L=!0,V||(F=Nt(P,"click",e[10]),V=!0)},p(p,E){const M={};if(E[0]&128|E[1]&4&&(M.$$scope={dirty:E,ctx:p}),!a&&E[0]&32&&(a=!0,M.checked=p[5],de(()=>a=!1)),s.$set(M),p[5]?S?(S.p(p,E),E[0]&32&&B(S,1)):(S=nr(p),S.c(),B(S,1),S.m(l.parentNode,l)):S&&(pe(),W(S,1,1,()=>{S=null}),he()),(!L||E[0]&128)&&w!==(w=p[7]("authors")+"")&&T(b,w),(!L||E[0]&128)&&$!==($=p[7]("add")+"")&&T(U,$),E[0]&2192){H=Ye(p[4].authors);let D;for(D=0;D<H.length;D+=1){const Q=lr(p,H,D);x[D]?(x[D].p(Q,E),B(x[D],1)):(x[D]=fr(Q),x[D].c(),B(x[D],1),x[D].m(o,null))}for(pe(),D=H.length;D<x.length;D+=1)Pt(D);he()}},i(p){if(!L){B(s.$$.fragment,p),B(S);for(let E=0;E<H.length;E+=1)B(x[E]);L=!0}},o(p){W(s.$$.fragment,p),W(S),x=x.filter(Boolean);for(let E=0;E<x.length;E+=1)W(x[E]);L=!1},d(p){p&&(n(t),n(r),n(l),n(o)),rt(s),S&&S.d(p),Ir(x,p),V=!1,F()}}}function rs(e){let t=e[7]("compatibility-info.edit")+"",s;return{c(){s=A(t)},l(a){s=N(a,t)},m(a,r){q(a,s,r)},p(a,r){r[0]&128&&t!==(t=a[7]("compatibility-info.edit")+"")&&T(s,t)},d(a){a&&n(s)}}}function nr(e){let t,s,a;function r(o){e[24](o)}let l={};return e[4].compatibility!==void 0&&(l.compatibilityInfo=e[4].compatibility),t=new qr({props:l}),fe.push(()=>ue(t,"compatibilityInfo",r)),{c(){Y(t.$$.fragment)},l(o){tt(t.$$.fragment,o)},m(o,h){et(t,o,h),a=!0},p(o,h){const g={};!s&&h[0]&16&&(s=!0,g.compatibilityInfo=o[4].compatibility,de(()=>s=!1)),t.$set(g)},i(o){a||(B(t.$$.fragment,o),a=!0)},o(o){W(t.$$.fragment,o),a=!1},d(o){rt(t,o)}}}function or(e){let t,s,a;return s=new zr({props:{id:e[4].authors[e[30]].user_id}}),{c(){t=f("div"),Y(s.$$.fragment),this.h()},l(r){t=u(r,"DIV",{class:!0});var l=m(t);tt(s.$$.fragment,l),l.forEach(n),this.h()},h(){c(t,"class","p-2")},m(r,l){q(r,t,l),et(s,t,null),a=!0},p(r,l){const o={};l[0]&16&&(o.id=r[4].authors[r[30]].user_id),s.$set(o)},i(r){a||(B(s.$$.fragment,r),a=!0)},o(r){W(s.$$.fragment,r),a=!1},d(r){r&&n(t),rt(s)}}}function cr(e){let t,s,a=e[7]("remove")+"",r,l,o;function h(){return e[26](e[30])}return{c(){t=f("button"),s=f("span"),r=A(a),this.h()},l(g){t=u(g,"BUTTON",{class:!0,type:!0});var w=m(t);s=u(w,"SPAN",{});var b=m(s);r=N(b,a),b.forEach(n),w.forEach(n),this.h()},h(){c(t,"class","variant-ghost-primary btn"),c(t,"type","button")},m(g,w){q(g,t,w),i(t,s),i(s,r),l||(o=Nt(t,"click",h),l=!0)},p(g,w){e=g,w[0]&128&&a!==(a=e[7]("remove")+"")&&T(r,a)},d(g){g&&n(t),l=!1,o()}}}function fr(e){let t,s,a,r,l="User ID",o,h,g,w,b,C,P,X,$=e[4].authors[e[30]].user_id&&or(e);function U(){e[25].call(h,e[30])}let k=e[28].role!=="creator"&&cr(e);return{c(){t=f("div"),$&&$.c(),s=_(),a=f("label"),r=f("span"),r.textContent=l,o=_(),h=f("input"),w=_(),k&&k.c(),b=_(),this.h()},l(L){t=u(L,"DIV",{class:!0});var V=m(t);$&&$.l(V),s=I(V),a=u(V,"LABEL",{class:!0});var F=m(a);r=u(F,"SPAN",{"data-svelte-h":!0}),mr(r)!=="svelte-5fmcbq"&&(r.textContent=l),o=I(F),h=u(F,"INPUT",{type:!0,class:!0}),F.forEach(n),w=I(V),k&&k.l(V),b=I(V),V.forEach(n),this.h()},h(){c(h,"type","text"),h.required=!0,c(h,"class","input p-2"),h.disabled=g=e[28].role==="creator",c(a,"class","label"),c(t,"class","flex items-end")},m(L,V){q(L,t,V),$&&$.m(t,null),i(t,s),i(t,a),i(a,r),i(a,o),i(a,h),G(h,e[4].authors[e[30]].user_id),i(t,w),k&&k.m(t,null),i(t,b),C=!0,P||(X=Nt(h,"input",U),P=!0)},p(L,V){e=L,e[4].authors[e[30]].user_id?$?($.p(e,V),V[0]&16&&B($,1)):($=or(e),$.c(),B($,1),$.m(t,s)):$&&(pe(),W($,1,1,()=>{$=null}),he()),(!C||V[0]&16&&g!==(g=e[28].role==="creator"))&&(h.disabled=g),V[0]&16&&h.value!==e[4].authors[e[30]].user_id&&G(h,e[4].authors[e[30]].user_id),e[28].role!=="creator"?k?k.p(e,V):(k=cr(e),k.c(),k.m(t,b)):k&&(k.d(1),k=null)},i(L){C||(B($),C=!0)},o(L){W($),C=!1},d(L){L&&n(t),$&&$.d(),k&&k.d(),P=!1,X()}}}function ss(e){let t,s,a,r,l,o=e[7]("entry.name")+"",h,g,w,b,C,P,X,$,U,k,L=e[7]("mod.reference")+"",V,F,dt,z,S,H,x,Pt,p,E,M,D=e[7]("entry.short-description")+"",Q,pt,ht,v,me,mt,$e,$t,gt,vt,Bt,jt=e[7]("entry.full-description")+"",Kt,ge,ve,st,ye,yt,be,nt,qt,Wt=e[7]("preview")+"",Qt,Ee,we,Gt,xe,Ct,ot,_e,Ie,lt,kt,zt=e[7]("logo")+"",Yt,Ae,Ne,ct,Pe,bt,ke,Et,wt,Ft,Rt=e[7]("entry.source-url")+"",te,De,at,Ve,xt,Se,_t,ft,Te,Ue,It,Le,ee,Zt,Dt,re,J,Be,We;P=new Lt({props:{for:"name",$$slots:{default:[Fr,({messages:d})=>({31:d}),({messages:d})=>[0,d?1:0]]},$$scope:{ctx:e}}});let R=!e[2]&&ar(e);x=new Lt({props:{for:"mod_reference",$$slots:{default:[Rr,({messages:d})=>({31:d}),({messages:d})=>[0,d?1:0]]},$$scope:{ctx:e}}}),mt=new Lt({props:{for:"short_description",$$slots:{default:[Zr,({messages:d})=>({31:d}),({messages:d})=>[0,d?1:0]]},$$scope:{ctx:e}}}),yt=new Lt({props:{for:"full_description",$$slots:{default:[Hr,({messages:d})=>({31:d}),({messages:d})=>[0,d?1:0]]},$$scope:{ctx:e}}});let K={ctx:e,current:null,token:null,hasCatch:!1,pending:Qr,then:Kr,catch:Jr,value:32};Ge(Gt=er(e[6]),K);function gr(d){e[19](d)}let ze={editable:!0};e[3]!==void 0&&(ze.tags=e[3]),ot=new Br({props:ze}),fe.push(()=>ue(ot,"tags",gr)),bt=new Lt({props:{for:"logo",$$slots:{default:[Gr,({messages:d})=>({31:d}),({messages:d})=>[0,d?1:0]]},$$scope:{ctx:e}}}),xt=new Lt({props:{for:"source_url",$$slots:{default:[Yr,({messages:d})=>({31:d}),({messages:d})=>[0,d?1:0]]},$$scope:{ctx:e}}});function vr(d){e[21](d)}let Fe={name:"slider-label",$$slots:{default:[ts]},$$scope:{ctx:e}};e[4].hidden!==void 0&&(Fe.checked=e[4].hidden),ft=new $r({props:Fe}),fe.push(()=>ue(ft,"checked",vr)),It=new Lt({props:{for:"hidden",$$slots:{default:[es,({messages:d})=>({31:d}),({messages:d})=>[0,d?1:0]]},$$scope:{ctx:e}}});let j=e[2]&&ir(e);return{c(){t=f("form"),s=f("div"),a=f("div"),r=f("label"),l=f("span"),h=A(o),g=A(" *"),w=_(),b=f("input"),C=_(),Y(P.$$.fragment),X=_(),$=f("div"),U=f("label"),k=f("span"),V=A(L),F=A(" *"),dt=_(),z=f("input"),S=_(),R&&R.c(),H=_(),Y(x.$$.fragment),Pt=_(),p=f("div"),E=f("label"),M=f("span"),Q=A(D),pt=A(" *"),ht=_(),v=f("input"),me=_(),Y(mt.$$.fragment),$e=_(),$t=f("div"),gt=f("div"),vt=f("label"),Bt=f("span"),Kt=A(jt),ge=A(" *"),ve=_(),st=f("textarea"),ye=_(),Y(yt.$$.fragment),be=_(),nt=f("div"),qt=f("span"),Qt=A(Wt),Ee=A(":"),we=_(),K.block.c(),xe=_(),Ct=f("div"),Y(ot.$$.fragment),Ie=_(),lt=f("div"),kt=f("label"),Yt=A(zt),Ae=A(":"),Ne=_(),ct=f("input"),Pe=_(),Y(bt.$$.fragment),ke=_(),Et=f("div"),wt=f("label"),Ft=f("span"),te=A(Rt),De=_(),at=f("input"),Ve=_(),Y(xt.$$.fragment),Se=_(),_t=f("div"),Y(ft.$$.fragment),Ue=_(),Y(It.$$.fragment),Le=_(),j&&j.c(),ee=_(),Zt=f("div"),Dt=f("button"),re=A(e[1]),this.h()},l(d){t=u(d,"FORM",{});var y=m(t);s=u(y,"DIV",{class:!0});var O=m(s);a=u(O,"DIV",{class:!0});var Vt=m(a);r=u(Vt,"LABEL",{class:!0});var St=m(r);l=u(St,"SPAN",{});var Ot=m(l);h=N(Ot,o),g=N(Ot," *"),Ot.forEach(n),w=I(St),b=u(St,"INPUT",{type:!0,class:!0}),St.forEach(n),C=I(Vt),tt(P.$$.fragment,Vt),Vt.forEach(n),X=I(O),$=u(O,"DIV",{class:!0});var Tt=m($);U=u(Tt,"LABEL",{class:!0});var ut=m(U);k=u(ut,"SPAN",{});var Mt=m(k);V=N(Mt,L),F=N(Mt," *"),Mt.forEach(n),dt=I(ut),z=u(ut,"INPUT",{type:!0,class:!0}),S=I(ut),R&&R.l(ut),ut.forEach(n),H=I(Tt),tt(x.$$.fragment,Tt),Tt.forEach(n),Pt=I(O),p=u(O,"DIV",{class:!0});var At=m(p);E=u(At,"LABEL",{class:!0});var Ut=m(E);M=u(Ut,"SPAN",{});var qe=m(M);Q=N(qe,D),pt=N(qe," *"),qe.forEach(n),ht=I(Ut),v=u(Ut,"INPUT",{type:!0,class:!0}),Ut.forEach(n),me=I(At),tt(mt.$$.fragment,At),At.forEach(n),$e=I(O),$t=u(O,"DIV",{class:!0});var se=m($t);gt=u(se,"DIV",{class:!0});var le=m(gt);vt=u(le,"LABEL",{class:!0});var ae=m(vt);Bt=u(ae,"SPAN",{});var Ce=m(Bt);Kt=N(Ce,jt),ge=N(Ce," *"),Ce.forEach(n),ve=I(ae),st=u(ae,"TEXTAREA",{class:!0,rows:!0}),m(st).forEach(n),ae.forEach(n),ye=I(le),tt(yt.$$.fragment,le),le.forEach(n),be=I(se),nt=u(se,"DIV",{class:!0});var ie=m(nt);qt=u(ie,"SPAN",{});var Oe=m(qt);Qt=N(Oe,Wt),Ee=N(Oe,":"),Oe.forEach(n),we=I(ie),K.block.l(ie),ie.forEach(n),se.forEach(n),xe=I(O),Ct=u(O,"DIV",{class:!0});var Re=m(Ct);tt(ot.$$.fragment,Re),Re.forEach(n),Ie=I(O),lt=u(O,"DIV",{class:!0});var Xt=m(lt);kt=u(Xt,"LABEL",{for:!0});var Me=m(kt);Yt=N(Me,zt),Ae=N(Me,":"),Me.forEach(n),Ne=I(Xt),ct=u(Xt,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),Pe=I(Xt),tt(bt.$$.fragment,Xt),Xt.forEach(n),ke=I(O),Et=u(O,"DIV",{class:!0});var ne=m(Et);wt=u(ne,"LABEL",{class:!0});var oe=m(wt);Ft=u(oe,"SPAN",{});var Ze=m(Ft);te=N(Ze,Rt),Ze.forEach(n),De=I(oe),at=u(oe,"INPUT",{type:!0,class:!0}),oe.forEach(n),Ve=I(ne),tt(xt.$$.fragment,ne),ne.forEach(n),Se=I(O),_t=u(O,"DIV",{class:!0});var ce=m(_t);tt(ft.$$.fragment,ce),Ue=I(ce),tt(It.$$.fragment,ce),ce.forEach(n),Le=I(O),j&&j.l(O),ee=I(O),Zt=u(O,"DIV",{});var He=m(Zt);Dt=u(He,"BUTTON",{class:!0,type:!0});var Je=m(Dt);re=N(Je,e[1]),Je.forEach(n),He.forEach(n),O.forEach(n),y.forEach(n),this.h()},h(){c(b,"type","text"),b.required=!0,c(b,"class","input p-2"),c(r,"class","label"),c(a,"class","grid grid-flow-row gap-2"),c(z,"type","text"),z.required=!0,c(z,"class","input p-2"),z.disabled=e[2],c(U,"class","label"),c($,"class","grid grid-flow-row gap-2"),c(v,"type","text"),v.required=!0,c(v,"class","input p-2"),c(E,"class","label"),c(p,"class","grid grid-flow-row gap-2"),c(st,"class","vertical-textarea textarea p-2"),st.required=!0,c(st,"rows",10),c(vt,"class","label"),c(gt,"class","grid grid-flow-row auto-rows-max gap-2"),c(nt,"class","grid grid-flow-row auto-rows-max gap-2"),c($t,"class","split grid gap-6 svelte-k92wki"),c(Ct,"class","grid grid-flow-row gap-2"),c(kt,"for","logo"),c(ct,"id","logo"),c(ct,"class","base-input"),c(ct,"name","logo"),c(ct,"type","file"),c(ct,"accept","image/png,image/jpeg,image/gif"),c(ct,"placeholder","Logo"),c(lt,"class","grid grid-flow-row gap-2"),c(at,"type","text"),at.required=!0,c(at,"class","input p-2"),c(wt,"class","label"),c(Et,"class","grid grid-flow-row gap-2"),c(_t,"class","grid grid-flow-row gap-2"),c(Dt,"class","variant-ghost-primary btn"),c(Dt,"type","submit"),c(s,"class","grid grid-flow-row gap-6")},m(d,y){q(d,t,y),i(t,s),i(s,a),i(a,r),i(r,l),i(l,h),i(l,g),i(r,w),i(r,b),G(b,e[4].name),i(a,C),et(P,a,null),i(s,X),i(s,$),i($,U),i(U,k),i(k,V),i(k,F),i(U,dt),i(U,z),G(z,e[4].mod_reference),i(U,S),R&&R.m(U,null),i($,H),et(x,$,null),i(s,Pt),i(s,p),i(p,E),i(E,M),i(M,Q),i(M,pt),i(E,ht),i(E,v),G(v,e[4].short_description),i(p,me),et(mt,p,null),i(s,$e),i(s,$t),i($t,gt),i(gt,vt),i(vt,Bt),i(Bt,Kt),i(Bt,ge),i(vt,ve),i(vt,st),G(st,e[4].full_description),i(gt,ye),et(yt,gt,null),i($t,be),i($t,nt),i(nt,qt),i(qt,Qt),i(qt,Ee),i(nt,we),K.block.m(nt,K.anchor=null),K.mount=()=>nt,K.anchor=null,i(s,xe),i(s,Ct),et(ot,Ct,null),i(s,Ie),i(s,lt),i(lt,kt),i(kt,Yt),i(kt,Ae),i(lt,Ne),i(lt,ct),i(lt,Pe),et(bt,lt,null),i(s,ke),i(s,Et),i(Et,wt),i(wt,Ft),i(Ft,te),i(wt,De),i(wt,at),G(at,e[4].source_url),i(Et,Ve),et(xt,Et,null),i(s,Se),i(s,_t),et(ft,_t,null),i(_t,Ue),et(It,_t,null),i(s,Le),j&&j.m(s,null),i(s,ee),i(s,Zt),i(Zt,Dt),i(Dt,re),J=!0,Be||(We=[Nt(b,"input",e[15]),Nt(z,"input",e[16]),Nt(v,"input",e[17]),Nt(st,"input",e[18]),Nt(at,"input",e[20]),Er(e[8].call(null,t))],Be=!0)},p(d,y){e=d,(!J||y[0]&128)&&o!==(o=e[7]("entry.name")+"")&&T(h,o),y[0]&16&&b.value!==e[4].name&&G(b,e[4].name);const O={};y[1]&5&&(O.$$scope={dirty:y,ctx:e}),P.$set(O),(!J||y[0]&128)&&L!==(L=e[7]("mod.reference")+"")&&T(V,L),(!J||y[0]&4)&&(z.disabled=e[2]),y[0]&16&&z.value!==e[4].mod_reference&&G(z,e[4].mod_reference),e[2]?R&&(R.d(1),R=null):R?R.p(e,y):(R=ar(e),R.c(),R.m(U,null));const Vt={};y[1]&5&&(Vt.$$scope={dirty:y,ctx:e}),x.$set(Vt),(!J||y[0]&128)&&D!==(D=e[7]("entry.short-description")+"")&&T(Q,D),y[0]&16&&v.value!==e[4].short_description&&G(v,e[4].short_description);const St={};y[1]&5&&(St.$$scope={dirty:y,ctx:e}),mt.$set(St),(!J||y[0]&128)&&jt!==(jt=e[7]("entry.full-description")+"")&&T(Kt,jt),y[0]&16&&G(st,e[4].full_description);const Ot={};y[1]&5&&(Ot.$$scope={dirty:y,ctx:e}),yt.$set(Ot),(!J||y[0]&128)&&Wt!==(Wt=e[7]("preview")+"")&&T(Qt,Wt),K.ctx=e,y[0]&64&&Gt!==(Gt=er(e[6]))&&Ge(Gt,K)||wr(K,e,y);const Tt={};!_e&&y[0]&8&&(_e=!0,Tt.tags=e[3],de(()=>_e=!1)),ot.$set(Tt),(!J||y[0]&128)&&zt!==(zt=e[7]("logo")+"")&&T(Yt,zt);const ut={};y[1]&5&&(ut.$$scope={dirty:y,ctx:e}),bt.$set(ut),(!J||y[0]&128)&&Rt!==(Rt=e[7]("entry.source-url")+"")&&T(te,Rt),y[0]&16&&at.value!==e[4].source_url&&G(at,e[4].source_url);const Mt={};y[1]&5&&(Mt.$$scope={dirty:y,ctx:e}),xt.$set(Mt);const At={};y[0]&128|y[1]&4&&(At.$$scope={dirty:y,ctx:e}),!Te&&y[0]&16&&(Te=!0,At.checked=e[4].hidden,de(()=>Te=!1)),ft.$set(At);const Ut={};y[1]&5&&(Ut.$$scope={dirty:y,ctx:e}),It.$set(Ut),e[2]?j?(j.p(e,y),y[0]&4&&B(j,1)):(j=ir(e),j.c(),B(j,1),j.m(s,ee)):j&&(pe(),W(j,1,1,()=>{j=null}),he()),(!J||y[0]&2)&&T(re,e[1])},i(d){J||(B(P.$$.fragment,d),B(x.$$.fragment,d),B(mt.$$.fragment,d),B(yt.$$.fragment,d),B(ot.$$.fragment,d),B(bt.$$.fragment,d),B(xt.$$.fragment,d),B(ft.$$.fragment,d),B(It.$$.fragment,d),B(j),J=!0)},o(d){W(P.$$.fragment,d),W(x.$$.fragment,d),W(mt.$$.fragment,d),W(yt.$$.fragment,d),W(ot.$$.fragment,d),W(bt.$$.fragment,d),W(xt.$$.fragment,d),W(ft.$$.fragment,d),W(It.$$.fragment,d),W(j),J=!1},d(d){d&&n(t),rt(P),R&&R.d(),rt(x),rt(mt),rt(yt),K.block.d(),K.token=null,K=null,rt(ot),rt(bt),rt(xt),rt(ft),rt(It),j&&j.d(),Be=!1,xr(We)}}}function ls(e,t,s){let a,r,l,o=Z,h=()=>(o(),o=je(g,v=>s(7,l=v)),g);e.$$.on_destroy.push(()=>o());const{t:g}=hr();h();let{onSubmit:w}=t,{initialValues:b={full_description:"",mod_reference:"",name:"",short_description:"",source_url:"",hidden:!1,tagIDs:[],compatibility:{EA:{state:rr.Works,note:""},EXP:{state:rr.Works,note:""}}}}=t,{submitText:C=l("entry.create")}=t,{editing:P=!1}=t;const{form:X,data:$}=Vr({initialValues:b,extend:[Sr({schema:sr}),Tr],onSubmit:v=>w(Ur(v,sr))});_r(e,$,v=>s(4,r=v));let U=r.tags;const k=()=>{Xe($,r.tagIDs=U.map(v=>v.id),r)},L=()=>{r.authors.push({role:"editor",user_id:"",key:""}),$.set(r)},V=v=>{r.authors.splice(v,1),$.set(r)};let F=!1;const dt=r.compatibility;function z(){r.name=this.value,$.set(r)}function S(){r.mod_reference=this.value,$.set(r)}function H(){r.short_description=this.value,$.set(r)}function x(){r.full_description=this.value,$.set(r)}function Pt(v){U=v,s(3,U)}function p(){r.source_url=this.value,$.set(r)}function E(v){e.$$.not_equal(r.hidden,v)&&(r.hidden=v,$.set(r))}function M(v){F=v,s(5,F)}const D=()=>{Xe($,r.compatibility=F?dt:void 0,r)};function Q(v){e.$$.not_equal(r.compatibility,v)&&(r.compatibility=v,$.set(r))}function pt(v){r.authors[v].user_id=this.value,$.set(r)}const ht=v=>V(v);return e.$$set=v=>{"onSubmit"in v&&s(13,w=v.onSubmit),"initialValues"in v&&s(14,b=v.initialValues),"submitText"in v&&s(1,C=v.submitText),"editing"in v&&s(2,P=v.editing)},e.$$.update=()=>{e.$$.dirty[0]&8&&U&&k(),e.$$.dirty[0]&16&&Xe($,r.compatibility=r.compatibility?r.compatibility:void 0,r),e.$$.dirty[0]&20&&(P||delete r.compatibility),e.$$.dirty[0]&16&&s(6,a=r.full_description||"")},[g,C,P,U,r,F,a,l,X,$,L,V,dt,w,b,z,S,H,x,Pt,p,E,M,D,Q,pt,ht]}class ds extends ur{constructor(t){super(),dr(this,t,ls,ss,pr,{t:0,onSubmit:13,initialValues:14,submitText:1,editing:2},null,[-1,-1])}get t(){return this.$$.ctx[0]}}export{ds as M};
//# sourceMappingURL=ModForm.ed-T37rN.js.map