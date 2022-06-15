import{S as Lt,i as Tt,s as qt,d as G,y as ve,ae as be,bh as lt,aM as pt,v as Dt,am as Ot,an as jt,e as d,a7 as V,f as k,af as P,h,j as v,a8 as R,l as _,k as m,ag as F,ac as b,n as w,p as M,ad as $,a9 as I,O as Zt,ai as we,bi as zt,u as N,t as E,ab as H,ah as ae,x as O}from"./vendor-856b0c89.js";import{o as Ct,s as ye,n as Jt,T as xe,V as re,S as dt,I as ct,e as ut,a as ft,O as Ee}from"./forms-accbf7c0.js";import{t as $t}from"./forms-0bb28cc5.js";import{m as Je}from"./markdown-f8c8918c.js";import{V as mt}from"./graphql-90c77071.js";const gt=/^(<=|<|>|>=|\^)?(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,Ce=Ct({version:ye().regex(gt),satisfactory_version:Jt(),bootstrap_version:ye().regex(gt),stability:ye(),link:ye().url(),changelog:ye(),date:ye()});var ts=(()=>`.split.s-N2rIGQHR_ehr.s-N2rIGQHR_ehr{grid-template-columns:50% 50%}.split.s-N2rIGQHR_ehr .right.s-N2rIGQHR_ehr{max-height:75vh;overflow:auto}
`)();const x="src/lib/components/sml-versions/SMLVersionForm.svelte";function ht(t){let e,s=(t[14]||"")+"",i;const n={c:function(){e=d("span"),i=P(s),this.h()},l:function(r){e=h(r,"SPAN",{class:!0});var a=v(e);i=F(a,s),a.forEach(m),this.h()},h:function(){b(e,"class","validation-message s-N2rIGQHR_ehr"),w(e,x,35,8,1277)},m:function(r,a){M(r,e,a),$(e,i)},p:function(r,a){a&16384&&s!==(s=(r[14]||"")+"")&&ae(i,s)},d:function(r){r&&m(e)}};return G("SvelteRegisterBlock",{block:n,id:ht.name,type:"slot",source:'(35:6) <ValidationMessage for=\\"version\\" let:messages={message}>',ctx:t}),n}function vt(t){let e,s=(t[14]||"")+"",i;const n={c:function(){e=d("span"),i=P(s),this.h()},l:function(r){e=h(r,"SPAN",{class:!0});var a=v(e);i=F(a,s),a.forEach(m),this.h()},h:function(){b(e,"class","validation-message s-N2rIGQHR_ehr"),w(e,x,42,8,1611)},m:function(r,a){M(r,e,a),$(e,i)},p:function(r,a){a&16384&&s!==(s=(r[14]||"")+"")&&ae(i,s)},d:function(r){r&&m(e)}};return G("SvelteRegisterBlock",{block:n,id:vt.name,type:"slot",source:'(42:6) <ValidationMessage for=\\"satisfactory_version\\" let:messages={message}>',ctx:t}),n}function bt(t){let e,s=(t[14]||"")+"",i;const n={c:function(){e=d("span"),i=P(s),this.h()},l:function(r){e=h(r,"SPAN",{class:!0});var a=v(e);i=F(a,s),a.forEach(m),this.h()},h:function(){b(e,"class","validation-message s-N2rIGQHR_ehr"),w(e,x,49,8,1922)},m:function(r,a){M(r,e,a),$(e,i)},p:function(r,a){a&16384&&s!==(s=(r[14]||"")+"")&&ae(i,s)},d:function(r){r&&m(e)}};return G("SvelteRegisterBlock",{block:n,id:bt.name,type:"slot",source:'(49:6) <ValidationMessage for=\\"bootstrap_version\\" let:messages={message}>',ctx:t}),n}function wt(t){let e;const s={c:function(){e=P("Alpha")},l:function(n){e=F(n,"Alpha")},m:function(n,o){M(n,e,o)},d:function(n){n&&m(e)}};return G("SvelteRegisterBlock",{block:s,id:wt.name,type:"slot",source:'(56:8) <Option value=\\"alpha\\">',ctx:t}),s}function xt(t){let e;const s={c:function(){e=P("Beta")},l:function(n){e=F(n,"Beta")},m:function(n,o){M(n,e,o)},d:function(n){n&&m(e)}};return G("SvelteRegisterBlock",{block:s,id:xt.name,type:"slot",source:'(57:8) <Option value=\\"beta\\">',ctx:t}),s}function yt(t){let e;const s={c:function(){e=P("Release")},l:function(n){e=F(n,"Release")},m:function(n,o){M(n,e,o)},d:function(n){n&&m(e)}};return G("SvelteRegisterBlock",{block:s,id:yt.name,type:"slot",source:'(58:8) <Option value=\\"release\\">',ctx:t}),s}function St(t){let e,s,i,n,o,r;e=new Ee({props:{value:"alpha",$$slots:{default:[wt]},$$scope:{ctx:t}},$$inline:!0}),i=new Ee({props:{value:"beta",$$slots:{default:[xt]},$$scope:{ctx:t}},$$inline:!0}),o=new Ee({props:{value:"release",$$slots:{default:[yt]},$$scope:{ctx:t}},$$inline:!0});const a={c:function(){V(e.$$.fragment),s=k(),V(i.$$.fragment),n=k(),V(o.$$.fragment)},l:function(u){R(e.$$.fragment,u),s=_(u),R(i.$$.fragment,u),n=_(u),R(o.$$.fragment,u)},m:function(u,p){I(e,u,p),M(u,s,p),I(i,u,p),M(u,n,p),I(o,u,p),r=!0},p:function(u,p){const S={};p&65536&&(S.$$scope={dirty:p,ctx:u}),e.$set(S);const Y={};p&65536&&(Y.$$scope={dirty:p,ctx:u}),i.$set(Y);const B={};p&65536&&(B.$$scope={dirty:p,ctx:u}),o.$set(B)},i:function(u){r||(N(e.$$.fragment,u),N(i.$$.fragment,u),N(o.$$.fragment,u),r=!0)},o:function(u){E(e.$$.fragment,u),E(i.$$.fragment,u),E(o.$$.fragment,u),r=!1},d:function(u){H(e,u),u&&m(s),H(i,u),u&&m(n),H(o,u)}};return G("SvelteRegisterBlock",{block:a,id:St.name,type:"slot",source:'(55:6) <Select bind:value={$data.stability} label=\\"Stability\\">',ctx:t}),a}function kt(t){let e,s=(t[14]||"")+"",i;const n={c:function(){e=d("span"),i=P(s),this.h()},l:function(r){e=h(r,"SPAN",{class:!0});var a=v(e);i=F(a,s),a.forEach(m),this.h()},h:function(){b(e,"class","validation-message s-N2rIGQHR_ehr"),w(e,x,60,8,2348)},m:function(r,a){M(r,e,a),$(e,i)},p:function(r,a){a&16384&&s!==(s=(r[14]||"")+"")&&ae(i,s)},d:function(r){r&&m(e)}};return G("SvelteRegisterBlock",{block:n,id:kt.name,type:"slot",source:'(60:6) <ValidationMessage for=\\"stability\\" let:messages={message}>',ctx:t}),n}function _t(t){let e,s=(t[14]||"")+"",i;const n={c:function(){e=d("span"),i=P(s),this.h()},l:function(r){e=h(r,"SPAN",{class:!0});var a=v(e);i=F(a,s),a.forEach(m),this.h()},h:function(){b(e,"class","validation-message s-N2rIGQHR_ehr"),w(e,x,75,10,2811)},m:function(r,a){M(r,e,a),$(e,i)},p:function(r,a){a&16384&&s!==(s=(r[14]||"")+"")&&ae(i,s)},d:function(r){r&&m(e)}};return G("SvelteRegisterBlock",{block:n,id:_t.name,type:"slot",source:'(75:8) <ValidationMessage for=\\"changelog\\" let:messages={message}>',ctx:t}),n}function Vt(t){const e={c:O,l:O,m:O,p:O,d:O};return G("SvelteRegisterBlock",{block:e,id:Vt.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Rt(t){let e,s=t[15]+"";const i={c:function(){e=d("div"),this.h()},l:function(o){e=h(o,"DIV",{class:!0});var r=v(e);r.forEach(m),this.h()},h:function(){b(e,"class","markdown-content right s-N2rIGQHR_ehr"),w(e,x,81,10,3064)},m:function(o,r){M(o,e,r),e.innerHTML=s},p:function(o,r){r&4&&s!==(s=o[15]+"")&&(e.innerHTML=s)},d:function(o){o&&m(e)}};return G("SvelteRegisterBlock",{block:i,id:Rt.name,type:"then",source:'(81:55)            <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:t}),i}function It(t){const e={c:O,l:O,m:O,p:O,d:O};return G("SvelteRegisterBlock",{block:e,id:It.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Nt(t){let e,s=(t[14]||"")+"",i;const n={c:function(){e=d("span"),i=P(s),this.h()},l:function(r){e=h(r,"SPAN",{class:!0});var a=v(e);i=F(a,s),a.forEach(m),this.h()},h:function(){b(e,"class","validation-message s-N2rIGQHR_ehr"),w(e,x,89,8,3358)},m:function(r,a){M(r,e,a),$(e,i)},p:function(r,a){a&16384&&s!==(s=(r[14]||"")+"")&&ae(i,s)},d:function(r){r&&m(e)}};return G("SvelteRegisterBlock",{block:n,id:Nt.name,type:"slot",source:'(89:6) <ValidationMessage for=\\"date\\" let:messages={message}>',ctx:t}),n}function Et(t){let e,s=(t[14]||"")+"",i;const n={c:function(){e=d("span"),i=P(s),this.h()},l:function(r){e=h(r,"SPAN",{class:!0});var a=v(e);i=F(a,s),a.forEach(m),this.h()},h:function(){b(e,"class","validation-message s-N2rIGQHR_ehr"),w(e,x,96,8,3630)},m:function(r,a){M(r,e,a),$(e,i)},p:function(r,a){a&16384&&s!==(s=(r[14]||"")+"")&&ae(i,s)},d:function(r){r&&m(e)}};return G("SvelteRegisterBlock",{block:n,id:Et.name,type:"slot",source:'(96:6) <ValidationMessage for=\\"link\\" let:messages={message}>',ctx:t}),n}function Ht(t){let e;const s={c:function(){e=P(t[0])},l:function(n){e=F(n,t[0])},m:function(n,o){M(n,e,o)},p:function(n,o){o&1&&ae(e,n[0])},d:function(n){n&&m(e)}};return G("SvelteRegisterBlock",{block:s,id:Ht.name,type:"slot",source:'(102:6) <Button variant=\\"outlined\\" type=\\"submit\\">',ctx:t}),s}function Ke(t){let e,s,i,n,o,r,a,Q,u,p,S,Y,B,Se,L,T,ke,_e,q,l,j,Z,He,Ge,ee,Qe,z,C,J,Me,Be,te,Ae,D,le,Pe,Fe,Ie,Le,K,U,Te,qe,se,De,W,X,Oe,je,ne,Ze,ce,ie,Ne,ze,Ue;function Gt(c){t[7](c)}let We={label:"Version",required:!0};t[1].version!==void 0&&(We.value=t[1].version),n=new xe({props:We,$$inline:!0}),ve.push(()=>be(n,"value",Gt)),a=new re({props:{for:"version",$$slots:{default:[ht,({messages:c})=>({14:c}),({messages:c})=>c?16384:0]},$$scope:{ctx:t}},$$inline:!0});function Qt(c){t[8](c)}let Xe={label:"Satisfactory Version",required:!0,type:"number"};t[1].satisfactory_version!==void 0&&(Xe.value=t[1].satisfactory_version),p=new xe({props:Xe,$$inline:!0}),ve.push(()=>be(p,"value",Qt)),B=new re({props:{for:"satisfactory_version",$$slots:{default:[vt,({messages:c})=>({14:c}),({messages:c})=>c?16384:0]},$$scope:{ctx:t}},$$inline:!0});function Mt(c){t[9](c)}let Ye={label:"Bootstrap Version",required:!0};t[1].bootstrap_version!==void 0&&(Ye.value=t[1].bootstrap_version),T=new xe({props:Ye,$$inline:!0}),ve.push(()=>be(T,"value",Mt)),q=new re({props:{for:"bootstrap_version",$$slots:{default:[bt,({messages:c})=>({14:c}),({messages:c})=>c?16384:0]},$$scope:{ctx:t}},$$inline:!0});function Bt(c){t[10](c)}let et={label:"Stability",$$slots:{default:[St]},$$scope:{ctx:t}};t[1].stability!==void 0&&(et.value=t[1].stability),Z=new dt({props:et,$$inline:!0}),ve.push(()=>be(Z,"value",Bt)),ee=new re({props:{for:"stability",$$slots:{default:[kt,({messages:c})=>({14:c}),({messages:c})=>c?16384:0]},$$scope:{ctx:t}},$$inline:!0});function At(c){t[11](c)}let tt={textarea:!0,class:"vertical-textarea",label:"Changelog",required:!0,input$rows:10};t[1].changelog!==void 0&&(tt.value=t[1].changelog),J=new xe({props:tt,$$inline:!0}),ve.push(()=>be(J,"value",At)),te=new re({props:{for:"changelog",$$slots:{default:[_t,({messages:c})=>({14:c}),({messages:c})=>c?16384:0]},$$scope:{ctx:t}},$$inline:!0});let A={ctx:t,current:null,token:null,hasCatch:!1,pending:It,then:Rt,catch:Vt,value:15};lt(Ie=Je(t[2]),A);function Pt(c){t[12](c)}let st={label:"Date and Time",required:!0};t[1].date!==void 0&&(st.value=t[1].date),U=new xe({props:st,$$inline:!0}),ve.push(()=>be(U,"value",Pt)),se=new re({props:{for:"date",$$slots:{default:[Nt,({messages:c})=>({14:c}),({messages:c})=>c?16384:0]},$$scope:{ctx:t}},$$inline:!0});function Ft(c){t[13](c)}let nt={label:"Link",required:!0};t[1].link!==void 0&&(nt.value=t[1].link),X=new xe({props:nt,$$inline:!0}),ve.push(()=>be(X,"value",Ft)),ne=new re({props:{for:"link",$$slots:{default:[Et,({messages:c})=>({14:c}),({messages:c})=>c?16384:0]},$$scope:{ctx:t}},$$inline:!0}),ie=new pt({props:{variant:"outlined",type:"submit",$$slots:{default:[Ht]},$$scope:{ctx:t}},$$inline:!0});const it={c:function(){e=d("form"),s=d("div"),i=d("div"),V(n.$$.fragment),r=k(),V(a.$$.fragment),Q=k(),u=d("div"),V(p.$$.fragment),Y=k(),V(B.$$.fragment),Se=k(),L=d("div"),V(T.$$.fragment),_e=k(),V(q.$$.fragment),l=k(),j=d("div"),V(Z.$$.fragment),Ge=k(),V(ee.$$.fragment),Qe=k(),z=d("div"),C=d("div"),V(J.$$.fragment),Be=k(),V(te.$$.fragment),Ae=k(),D=d("div"),le=d("span"),Pe=P("Preview:"),Fe=k(),A.block.c(),Le=k(),K=d("div"),V(U.$$.fragment),qe=k(),V(se.$$.fragment),De=k(),W=d("div"),V(X.$$.fragment),je=k(),V(ne.$$.fragment),Ze=k(),ce=d("div"),V(ie.$$.fragment),this.h()},l:function(f){e=h(f,"FORM",{class:!0});var g=v(e);s=h(g,"DIV",{class:!0});var y=v(s);i=h(y,"DIV",{class:!0});var ue=v(i);R(n.$$.fragment,ue),r=_(ue),R(a.$$.fragment,ue),ue.forEach(m),Q=_(y),u=h(y,"DIV",{class:!0});var fe=v(u);R(p.$$.fragment,fe),Y=_(fe),R(B.$$.fragment,fe),fe.forEach(m),Se=_(y),L=h(y,"DIV",{class:!0});var $e=v(L);R(T.$$.fragment,$e),_e=_($e),R(q.$$.fragment,$e),$e.forEach(m),l=_(y),j=h(y,"DIV",{class:!0});var me=v(j);R(Z.$$.fragment,me),Ge=_(me),R(ee.$$.fragment,me),me.forEach(m),Qe=_(y),z=h(y,"DIV",{class:!0});var ge=v(z);C=h(ge,"DIV",{class:!0});var oe=v(C);R(J.$$.fragment,oe),Be=_(oe),R(te.$$.fragment,oe),oe.forEach(m),Ae=_(ge),D=h(ge,"DIV",{class:!0});var pe=v(D);le=h(pe,"SPAN",{class:!0});var Ve=v(le);Pe=F(Ve,"Preview:"),Ve.forEach(m),Fe=_(pe),A.block.l(pe),pe.forEach(m),ge.forEach(m),Le=_(y),K=h(y,"DIV",{class:!0});var de=v(K);R(U.$$.fragment,de),qe=_(de),R(se.$$.fragment,de),de.forEach(m),De=_(y),W=h(y,"DIV",{class:!0});var he=v(W);R(X.$$.fragment,he),je=_(he),R(ne.$$.fragment,he),he.forEach(m),Ze=_(y),ce=h(y,"DIV",{class:!0});var Re=v(ce);R(ie.$$.fragment,Re),Re.forEach(m),y.forEach(m),g.forEach(m),this.h()},h:function(){b(i,"class","grid grid-flow-row gap-2 s-N2rIGQHR_ehr"),w(i,x,32,4,1095),b(u,"class","grid grid-flow-row gap-2 s-N2rIGQHR_ehr"),w(u,x,39,4,1376),b(L,"class","grid grid-flow-row gap-2 s-N2rIGQHR_ehr"),w(L,x,46,4,1710),b(j,"class","grid grid-flow-row gap-2 s-N2rIGQHR_ehr"),w(j,x,53,4,2021),b(C,"class","grid grid-flow-row gap-2 auto-rows-max s-N2rIGQHR_ehr"),w(C,x,65,6,2484),b(le,"class","s-N2rIGQHR_ehr"),w(le,x,79,8,2976),b(D,"class","grid grid-flow-row gap-2 auto-rows-max s-N2rIGQHR_ehr"),w(D,x,78,6,2915),b(z,"class","grid gap-6 split s-N2rIGQHR_ehr"),w(z,x,64,4,2447),b(K,"class","grid grid-flow-row gap-2 s-N2rIGQHR_ehr"),w(K,x,86,4,3176),b(W,"class","grid grid-flow-row gap-2 s-N2rIGQHR_ehr"),w(W,x,93,4,3457),b(ce,"class","s-N2rIGQHR_ehr"),w(ce,x,100,4,3729),b(s,"class","grid grid-flow-row gap-6 s-N2rIGQHR_ehr"),w(s,x,31,2,1052),b(e,"class","s-N2rIGQHR_ehr"),w(e,x,30,0,1034)},m:function(f,g){M(f,e,g),$(e,s),$(s,i),I(n,i,null),$(i,r),I(a,i,null),$(s,Q),$(s,u),I(p,u,null),$(u,Y),I(B,u,null),$(s,Se),$(s,L),I(T,L,null),$(L,_e),I(q,L,null),$(s,l),$(s,j),I(Z,j,null),$(j,Ge),I(ee,j,null),$(s,Qe),$(s,z),$(z,C),I(J,C,null),$(C,Be),I(te,C,null),$(z,Ae),$(z,D),$(D,le),$(le,Pe),$(D,Fe),A.block.m(D,A.anchor=null),A.mount=()=>D,A.anchor=null,$(s,Le),$(s,K),I(U,K,null),$(K,qe),I(se,K,null),$(s,De),$(s,W),I(X,W,null),$(W,je),I(ne,W,null),$(s,Ze),$(s,ce),I(ie,ce,null),Ne=!0,ze||(Ue=Zt(t[3].call(null,e)),ze=!0)},p:function(f,[g]){t=f;const y={};!o&&g&2&&(o=!0,y.value=t[1].version,we(()=>o=!1)),n.$set(y);const ue={};g&81920&&(ue.$$scope={dirty:g,ctx:t}),a.$set(ue);const fe={};!S&&g&2&&(S=!0,fe.value=t[1].satisfactory_version,we(()=>S=!1)),p.$set(fe);const $e={};g&81920&&($e.$$scope={dirty:g,ctx:t}),B.$set($e);const me={};!ke&&g&2&&(ke=!0,me.value=t[1].bootstrap_version,we(()=>ke=!1)),T.$set(me);const ge={};g&81920&&(ge.$$scope={dirty:g,ctx:t}),q.$set(ge);const oe={};g&65536&&(oe.$$scope={dirty:g,ctx:t}),!He&&g&2&&(He=!0,oe.value=t[1].stability,we(()=>He=!1)),Z.$set(oe);const pe={};g&81920&&(pe.$$scope={dirty:g,ctx:t}),ee.$set(pe);const Ve={};!Me&&g&2&&(Me=!0,Ve.value=t[1].changelog,we(()=>Me=!1)),J.$set(Ve);const de={};g&81920&&(de.$$scope={dirty:g,ctx:t}),te.$set(de),A.ctx=t,g&4&&Ie!==(Ie=Je(t[2]))&&lt(Ie,A)||zt(A,t,g);const he={};!Te&&g&2&&(Te=!0,he.value=t[1].date,we(()=>Te=!1)),U.$set(he);const Re={};g&81920&&(Re.$$scope={dirty:g,ctx:t}),se.$set(Re);const ot={};!Oe&&g&2&&(Oe=!0,ot.value=t[1].link,we(()=>Oe=!1)),X.$set(ot);const rt={};g&81920&&(rt.$$scope={dirty:g,ctx:t}),ne.$set(rt);const at={};g&65537&&(at.$$scope={dirty:g,ctx:t}),ie.$set(at)},i:function(f){Ne||(N(n.$$.fragment,f),N(a.$$.fragment,f),N(p.$$.fragment,f),N(B.$$.fragment,f),N(T.$$.fragment,f),N(q.$$.fragment,f),N(Z.$$.fragment,f),N(ee.$$.fragment,f),N(J.$$.fragment,f),N(te.$$.fragment,f),N(U.$$.fragment,f),N(se.$$.fragment,f),N(X.$$.fragment,f),N(ne.$$.fragment,f),N(ie.$$.fragment,f),Ne=!0)},o:function(f){E(n.$$.fragment,f),E(a.$$.fragment,f),E(p.$$.fragment,f),E(B.$$.fragment,f),E(T.$$.fragment,f),E(q.$$.fragment,f),E(Z.$$.fragment,f),E(ee.$$.fragment,f),E(J.$$.fragment,f),E(te.$$.fragment,f),E(U.$$.fragment,f),E(se.$$.fragment,f),E(X.$$.fragment,f),E(ne.$$.fragment,f),E(ie.$$.fragment,f),Ne=!1},d:function(f){f&&m(e),H(n),H(a),H(p),H(B),H(T),H(q),H(Z),H(ee),H(J),H(te),A.block.d(),A.token=null,A=null,H(U),H(se),H(X),H(ne),H(ie),ze=!1,Ue()}};return G("SvelteRegisterBlock",{block:it,id:Ke.name,type:"component",source:"",ctx:t}),it}function Kt(t,e,s){let i,n,{$$slots:o={},$$scope:r}=e;Dt("SMLVersionForm",o,[]);let{onSubmit:a}=e,{initialValues:Q={link:"",bootstrap_version:"",date:"",changelog:"",satisfactory_version:0,stability:mt.Alpha,version:""}}=e,{submitText:u="Create"}=e;const{form:p,data:S}=ct({initialValues:Q,extend:[ut,ft],validateSchema:Ce,onSubmit:l=>a($t(l,Ce))});Ot(S,"data"),jt(t,S,l=>s(1,n=l));const Y=["onSubmit","initialValues","submitText"];Object.keys(e).forEach(l=>{!~Y.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<SMLVersionForm> was created with unknown prop '${l}'`)});function B(l){t.$$.not_equal(n.version,l)&&(n.version=l,S.set(n))}function Se(l){t.$$.not_equal(n.satisfactory_version,l)&&(n.satisfactory_version=l,S.set(n))}function L(l){t.$$.not_equal(n.bootstrap_version,l)&&(n.bootstrap_version=l,S.set(n))}function T(l){t.$$.not_equal(n.stability,l)&&(n.stability=l,S.set(n))}function ke(l){t.$$.not_equal(n.changelog,l)&&(n.changelog=l,S.set(n))}function _e(l){t.$$.not_equal(n.date,l)&&(n.date=l,S.set(n))}function q(l){t.$$.not_equal(n.link,l)&&(n.link=l,S.set(n))}return t.$$set=l=>{"onSubmit"in l&&s(5,a=l.onSubmit),"initialValues"in l&&s(6,Q=l.initialValues),"submitText"in l&&s(0,u=l.submitText)},t.$capture_state=()=>({createForm:ct,validator:ut,svelteReporter:ft,ValidationMessage:re,trimNonSchema:$t,markdown:Je,smlVersionSchema:Ce,Textfield:xe,Button:pt,VersionStabilities:mt,Select:dt,Option:Ee,onSubmit:a,initialValues:Q,submitText:u,form:p,data:S,preview:i,$data:n}),t.$inject_state=l=>{"onSubmit"in l&&s(5,a=l.onSubmit),"initialValues"in l&&s(6,Q=l.initialValues),"submitText"in l&&s(0,u=l.submitText),"preview"in l&&s(2,i=l.preview)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&2&&s(2,i=n.changelog||"")},[u,n,i,p,S,a,Q,B,Se,L,T,ke,_e,q]}class ss extends Lt{constructor(e){super(e),Tt(this,e,Kt,Ke,qt,{onSubmit:5,initialValues:6,submitText:0}),G("SvelteRegisterComponent",{component:this,tagName:"SMLVersionForm",options:e,id:Ke.name});const{ctx:s}=this.$$,i=e.props||{};s[5]===void 0&&!("onSubmit"in i)&&console.warn("<SMLVersionForm> was created without expected prop 'onSubmit'")}get onSubmit(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<SMLVersionForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<SMLVersionForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ss as S};
//# sourceMappingURL=SMLVersionForm-0afdc47a.js.map
