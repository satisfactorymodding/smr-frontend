import{S as Bn,i as In,s as Mn,d as F,v as Nn,aa as $t,H as Wt,F as vn,G as bn,ae as Yt,f as yn,n as X,u as ee,j as c,x as Jt,e as p,g as h,R as Tn,N as d,m as g,b as V,X as I,h as b,k as B,Y as M,U as a,Z as j,a6 as wn,y as vt,a3 as bt,aH as cn,I as ii,aI as Zt,O as xn,P as re,Q as le,$ as se,T as ae,V as Re,ad as oi,aA as Rn,a7 as si,a5 as yt,r as O,p as wt,t as W,q as xt,W as ce,a0 as ri,_ as li,a8 as ai,a9 as ci}from"./vendor.DD_stces.js";import{o as tt,s as ge,a as nt,b as ui,l as fi,f as kn,g as di,V as Te,c as En,v as Sn,r as _n}from"./forms.CVTh2xnS.js";import{t as An}from"./forms.BaRfCqwi.js";import{m as Kt}from"./markdown.BKfQximI.js";import{B as Pn,t as Gt}from"./graphql.DSJZyne3.js";import{T as Dn}from"./TagList.CX90afeh.js";import{M as Un}from"./ModCompatibilityEdit.CUfKEy81.js";const Qt=tt({name:ge().min(3).max(32),mod_reference:ge().min(3).max(32).regex(/^([a-zA-Z][a-zA-Z0-9_]*)$/).refine(async()=>!0),short_description:ge().min(16).max(128),full_description:nt(ge()),logo:nt(ui().refine(t=>"name"in t&&"size"in t&&"type"in t)),source_url:ge().url().optional().or(fi("")),authors:nt(tt({role:ge(),user_id:ge()}).array()),compatibility:nt(tt({EA:tt({state:ge(),note:kn()}),EXP:tt({state:ge(),note:kn()})})),hidden:di(),tagIDs:nt(ge().array())}),Xe="src/lib/components/mods/ModAuthor.svelte";function Cn(t){let e,n="Unknown User ID";const l={c:function(){e=p("p"),e.textContent=n,this.h()},l:function(r){e=h(r,"P",{class:!0,"data-svelte-h":!0}),Tn(e)!=="svelte-12dp6bw"&&(e.textContent=n),this.h()},h:function(){d(e,"class","mr-2 whitespace-nowrap"),g(e,Xe,33,2,952)},m:function(r,i){X(r,e,i)},p:ee,d:function(r){r&&c(e)}};return F("SvelteRegisterBlock",{block:l,id:Cn.name,type:"else",source:"(28:0) {:else}",ctx:t}),l}function Fn(t){let e,n,l,s,r,i,o=t[2].data.getUser.username+"",f;const S={c:function(){e=p("div"),n=p("div"),s=V(),r=p("div"),i=p("span"),f=I(o),this.h()},l:function(_){e=h(_,"DIV",{class:!0});var w=b(e);n=h(w,"DIV",{class:!0,style:!0}),b(n).forEach(c),s=B(w),r=h(w,"DIV",{class:!0});var R=b(r);i=h(R,"SPAN",{class:!0});var x=b(i);f=M(x,o),x.forEach(c),R.forEach(c),w.forEach(c),this.h()},h:function(){d(n,"class","h-7 w-7 rounded-full bg-cover"),d(n,"style",l=`background-image: url("${t[2].data.getUser.avatar||Yt+"/images/no_image.webp"}")`),g(n,Xe,25,4,654),d(i,"class","text-yellow-500"),g(i,Xe,29,6,855),d(r,"class","grid grid-flow-row"),g(r,Xe,28,4,816),d(e,"class","mr-2 grid auto-cols-max grid-flow-col gap-x-2"),g(e,Xe,24,2,590)},m:function(_,w){X(_,e,w),a(e,n),a(e,s),a(e,r),a(r,i),a(i,f)},p:function(_,w){w&4&&l!==(l=`background-image: url("${_[2].data.getUser.avatar||Yt+"/images/no_image.webp"}")`)&&d(n,"style",l),w&4&&o!==(o=_[2].data.getUser.username+"")&&j(f,o)},d:function(_){_&&c(e)}};return F("SvelteRegisterBlock",{block:S,id:Fn.name,type:"if",source:"(19:29) ",ctx:t}),S}function Ln(t){let e,n=t[3]("error.oh-no")+"",l,s,r=t[2].error.message+"",i;const o={c:function(){e=p("p"),l=I(n),s=I("... "),i=I(r),this.h()},l:function(S){e=h(S,"P",{class:!0});var $=b(e);l=M($,n),s=M($,"... "),i=M($,r),$.forEach(c),this.h()},h:function(){d(e,"class","mr-2"),g(e,Xe,22,2,493)},m:function(S,$){X(S,e,$),a(e,l),a(e,s),a(e,i)},p:function(S,$){$&8&&n!==(n=S[3]("error.oh-no")+"")&&j(l,n),$&4&&r!==(r=S[2].error.message+"")&&j(i,r)},d:function(S){S&&c(e)}};return F("SvelteRegisterBlock",{block:o,id:Ln.name,type:"if",source:"(17:22) ",ctx:t}),o}function jn(t){let e,n=t[3]("loading")+"",l,s;const r={c:function(){e=p("p"),l=I(n),s=I("..."),this.h()},l:function(o){e=h(o,"P",{class:!0});var f=b(e);l=M(f,n),s=M(f,"..."),f.forEach(c),this.h()},h:function(){d(e,"class","mr-2"),g(e,Xe,20,2,429)},m:function(o,f){X(o,e,f),a(e,l),a(e,s)},p:function(o,f){f&8&&n!==(n=o[3]("loading")+"")&&j(l,n)},d:function(o){o&&c(e)}};return F("SvelteRegisterBlock",{block:r,id:jn.name,type:"if",source:"(15:0) {#if $user.fetching}",ctx:t}),r}function en(t){let e;function n(i,o){return i[2].fetching?jn:i[2].error?Ln:i[2].data.getUser?Fn:Cn}let l=n(t),s=l(t);const r={c:function(){s.c(),e=yn()},l:function(o){s.l(o),e=yn()},m:function(o,f){s.m(o,f),X(o,e,f)},p:function(o,[f]){l===(l=n(o))&&s?s.p(o,f):(s.d(1),s=l(o),s&&(s.c(),s.m(e.parentNode,e)))},i:ee,o:ee,d:function(o){o&&c(e),s.d(o)}};return F("SvelteRegisterBlock",{block:r,id:en.name,type:"component",source:"",ctx:t}),r}function mi(t,e,n){let l,s,r=ee,i=()=>(r(),r=Jt(l,m=>n(2,s=m)),l),o,f=ee,S=()=>(f(),f=Jt(R,m=>n(3,o=m)),R);t.$$.on_destroy.push(()=>r()),t.$$.on_destroy.push(()=>f());let{$$slots:$={},$$scope:_}=e;Nn("ModAuthor",$,[]);let{id:w}=e;const{t:R}=$t();Wt(R,"t"),S();const x=vn();t.$$.on_mount.push(function(){w===void 0&&!("id"in e||t.$$.bound[t.$$.props.id])&&console.warn("<ModAuthor> was created without expected prop 'id'")});const q=["id"];return Object.keys(e).forEach(m=>{!~q.indexOf(m)&&m.slice(0,2)!=="$$"&&m!=="slot"&&console.warn(`<ModAuthor> was created with unknown prop '${m}'`)}),t.$$set=m=>{"id"in m&&n(4,w=m.id)},t.$capture_state=()=>({queryStore:bn,getContextClient:vn,GetUserDocument:Pn,assets:Yt,getTranslate:$t,id:w,t:R,client:x,user:l,$user:s,$t:o}),t.$inject_state=m=>{"id"in m&&n(4,w=m.id),"user"in m&&i(n(1,l=m.user))},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&16&&i(n(1,l=bn({query:Pn,client:x,variables:{user:w}})))},[R,l,s,o,w]}class qn extends Bn{constructor(e){super(e),In(this,e,mi,en,Mn,{id:4,t:0}),F("SvelteRegisterComponent",{component:this,tagName:"ModAuthor",options:e,id:en.name})}get id(){throw new Error("<ModAuthor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set id(e){throw new Error("<ModAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<ModAuthor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const v="src/lib/components/mods/ModForm.svelte";function Vn(t,e,n){const l=t.slice();return l[27]=e[n],l[28]=e,l[29]=n,l}function On(t){let e,n=(t[30]||"")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{class:!0});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){d(e,"class","validation-message"),g(e,v,90,8,2575)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:On.name,type:"slot",source:'(78:6) <ValidationMessage for=\\"name\\" let:messages={message}>',ctx:t}),s}function tn(t){let e,n=t[7]("mod.reference-warning")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){g(e,v,99,10,2928)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&128&&n!==(n=i[7]("mod.reference-warning")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:tn.name,type:"if",source:"(87:8) {#if !editing}",ctx:t}),s}function Xn(t){let e,n=(t[30]||"")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{class:!0});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){d(e,"class","validation-message"),g(e,v,103,8,3077)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:Xn.name,type:"slot",source:'(91:6) <ValidationMessage for=\\"mod_reference\\" let:messages={message}>',ctx:t}),s}function zn(t){let e,n=(t[30]||"")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{class:!0});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){d(e,"class","validation-message"),g(e,v,113,8,3488)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:zn.name,type:"slot",source:'(101:6) <ValidationMessage for=\\"short_description\\" let:messages={message}>',ctx:t}),s}function Hn(t){let e,n=(t[30]||"")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{class:!0});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){d(e,"class","validation-message"),g(e,v,124,10,3981)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:Hn.name,type:"slot",source:'(112:8) <ValidationMessage for=\\"full_description\\" let:messages={message}>',ctx:t}),s}function Zn(t){const e={c:ee,l:ee,m:ee,p:ee,d:ee};return F("SvelteRegisterBlock",{block:e,id:Zn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Gn(t){let e,n,l=t[31]+"";const s={c:function(){e=p("div"),n=new ai(!1),this.h()},l:function(i){e=h(i,"DIV",{class:!0});var o=b(e);n=ci(o,!1),o.forEach(c),this.h()},h:function(){n.a=null,d(e,"class","markdown-content right svelte-k92wki"),g(e,v,131,10,4276)},m:function(i,o){X(i,e,o),n.m(l,e)},p:function(i,o){o[0]&64&&l!==(l=i[31]+"")&&n.p(l)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:Gn.name,type:"then",source:'(118:55)            <!-- eslint-disable -->           <div class=\\"markdown-content right\\">{@html previewRendered}',ctx:t}),s}function Qn(t){const e={c:ee,l:ee,m:ee,p:ee,d:ee};return F("SvelteRegisterBlock",{block:e,id:Qn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { createForm }',ctx:t}),e}function Wn(t){let e,n=(t[30]||"")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{class:!0});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){d(e,"class","validation-message"),g(e,v,150,8,4816)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:Wn.name,type:"slot",source:'(138:6) <ValidationMessage for=\\"logo\\" let:messages={message}>',ctx:t}),s}function Yn(t){let e,n=(t[30]||"")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{class:!0});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){d(e,"class","validation-message"),g(e,v,160,8,5204)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:Yn.name,type:"slot",source:'(148:6) <ValidationMessage for=\\"source_url\\" let:messages={message}>',ctx:t}),s}function Jn(t){let e=t[7]("entry.hidden")+"",n;const l={c:function(){n=I(e)},l:function(r){n=M(r,e)},m:function(r,i){X(r,n,i)},p:function(r,i){i[0]&128&&e!==(e=r[7]("entry.hidden")+"")&&j(n,e)},d:function(r){r&&c(n)}};return F("SvelteRegisterBlock",{block:l,id:Jn.name,type:"slot",source:'(154:6) <SlideToggle name=\\"slider-label\\" bind:checked={$data.hidden}>',ctx:t}),l}function Kn(t){let e,n=(t[30]||"")+"",l;const s={c:function(){e=p("span"),l=I(n),this.h()},l:function(i){e=h(i,"SPAN",{class:!0});var o=b(e);l=M(o,n),o.forEach(c),this.h()},h:function(){d(e,"class","validation-message"),g(e,v,169,8,5530)},m:function(i,o){X(i,e,o),a(e,l)},p:function(i,o){o[0]&1073741824&&n!==(n=(i[30]||"")+"")&&j(l,n)},d:function(i){i&&c(e)}};return F("SvelteRegisterBlock",{block:s,id:Kn.name,type:"slot",source:'(157:6) <ValidationMessage for=\\"hidden\\" let:messages={message}>',ctx:t}),s}function nn(t){let e,n,l,s,r,i,o,f,S=t[7]("authors")+"",$,_,w,R,x=t[7]("add")+"",q,m,z,Y,Z;function T(N){t[22](N)}let L={name:"slider-label",$$slots:{default:[ei]},$$scope:{ctx:t}};t[5]!==void 0&&(L.checked=t[5]),n=new cn({props:L,$$inline:!0}),vt.push(()=>bt(n,"checked",T)),n.$on("change",t[23]);let U=t[5]&&on(t),ne=xn(t[4].authors),A=[];for(let N=0;N<ne.length;N+=1)A[N]=ln(Vn(t,ne,N));const De=N=>W(A[N],1,1,()=>{A[N]=null}),te={c:function(){e=p("div"),re(n.$$.fragment),s=V(),U&&U.c(),r=V(),i=p("div"),o=p("div"),f=p("h4"),$=I(S),_=V(),w=p("button"),R=p("span"),q=I(x),m=V();for(let k=0;k<A.length;k+=1)A[k].c();this.h()},l:function(k){e=h(k,"DIV",{});var P=b(e);le(n.$$.fragment,P),P.forEach(c),s=B(k),U&&U.l(k),r=B(k),i=h(k,"DIV",{class:!0});var G=b(i);o=h(G,"DIV",{class:!0});var C=b(o);f=h(C,"H4",{class:!0});var ue=b(f);$=M(ue,S),ue.forEach(c),_=B(C),w=h(C,"BUTTON",{class:!0,type:!0});var J=b(w);R=h(J,"SPAN",{});var _e=b(R);q=M(_e,x),_e.forEach(c),J.forEach(c),C.forEach(c),m=B(G);for(let u=0;u<A.length;u+=1)A[u].l(G);G.forEach(c),this.h()},h:function(){g(e,v,173,6,5648),d(f,"class","mr-4"),g(f,v,190,10,6171),g(R,v,192,12,6309),d(w,"class","variant-ghost-primary btn"),d(w,"type","button"),g(w,v,191,10,6219),d(o,"class","flex items-center"),g(o,v,189,8,6129),d(i,"class","grid grid-flow-row gap-2"),g(i,v,188,6,6082)},m:function(k,P){X(k,e,P),ae(n,e,null),X(k,s,P),U&&U.m(k,P),X(k,r,P),X(k,i,P),a(i,o),a(o,f),a(f,$),a(o,_),a(o,w),a(w,R),a(R,q),a(i,m);for(let G=0;G<A.length;G+=1)A[G]&&A[G].m(i,null);z=!0,Y||(Z=Re(w,"click",t[10],!1,!1,!1,!1),Y=!0)},p:function(k,P){const G={};if(P[0]&128|P[1]&2&&(G.$$scope={dirty:P,ctx:k}),!l&&P[0]&32&&(l=!0,G.checked=k[5],yt(()=>l=!1)),n.$set(G),k[5]?U?(U.p(k,P),P[0]&32&&O(U,1)):(U=on(k),U.c(),O(U,1),U.m(r.parentNode,r)):U&&(wt(),W(U,1,1,()=>{U=null}),xt()),(!z||P[0]&128)&&S!==(S=k[7]("authors")+"")&&j($,S),(!z||P[0]&128)&&x!==(x=k[7]("add")+"")&&j(q,x),P[0]&2192){ne=xn(k[4].authors);let C;for(C=0;C<ne.length;C+=1){const ue=Vn(k,ne,C);A[C]?(A[C].p(ue,P),O(A[C],1)):(A[C]=ln(ue),A[C].c(),O(A[C],1),A[C].m(i,null))}for(wt(),C=ne.length;C<A.length;C+=1)De(C);xt()}},i:function(k){if(!z){O(n.$$.fragment,k),O(U);for(let P=0;P<ne.length;P+=1)O(A[P]);z=!0}},o:function(k){W(n.$$.fragment,k),W(U),A=A.filter(Boolean);for(let P=0;P<A.length;P+=1)W(A[P]);z=!1},d:function(k){k&&(c(e),c(s),c(r),c(i)),ce(n),U&&U.d(k),li(A,k),Y=!1,Z()}};return F("SvelteRegisterBlock",{block:te,id:nn.name,type:"if",source:"(161:4) {#if editing}",ctx:t}),te}function ei(t){let e=t[7]("compatibility-info.edit")+"",n;const l={c:function(){n=I(e)},l:function(r){n=M(r,e)},m:function(r,i){X(r,n,i)},p:function(r,i){i[0]&128&&e!==(e=r[7]("compatibility-info.edit")+"")&&j(n,e)},d:function(r){r&&c(n)}};return F("SvelteRegisterBlock",{block:l,id:ei.name,type:"slot",source:'(163:8) <SlideToggle           name=\\"slider-label\\"           bind:checked={editCompatibility}           on:change={() => {             $data.compatibility = editCompatibility ? originalCompatibility : undefined;           }}>',ctx:t}),l}function on(t){let e,n,l;function s(o){t[24](o)}let r={};t[4].compatibility!==void 0&&(r.compatibilityInfo=t[4].compatibility),e=new Un({props:r,$$inline:!0}),vt.push(()=>bt(e,"compatibilityInfo",s));const i={c:function(){re(e.$$.fragment)},l:function(f){le(e.$$.fragment,f)},m:function(f,S){ae(e,f,S),l=!0},p:function(f,S){const $={};!n&&S[0]&16&&(n=!0,$.compatibilityInfo=f[4].compatibility,yt(()=>n=!1)),e.$set($)},i:function(f){l||(O(e.$$.fragment,f),l=!0)},o:function(f){W(e.$$.fragment,f),l=!1},d:function(f){ce(e,f)}};return F("SvelteRegisterBlock",{block:i,id:on.name,type:"if",source:"(173:6) {#if editCompatibility}",ctx:t}),i}function sn(t){let e,n,l;n=new qn({props:{id:t[4].authors[t[29]].user_id},$$inline:!0});const s={c:function(){e=p("div"),re(n.$$.fragment),this.h()},l:function(i){e=h(i,"DIV",{class:!0});var o=b(e);le(n.$$.fragment,o),o.forEach(c),this.h()},h:function(){d(e,"class","p-2"),g(e,v,198,14,6508)},m:function(i,o){X(i,e,o),ae(n,e,null),l=!0},p:function(i,o){const f={};o[0]&16&&(f.id=i[4].authors[i[29]].user_id),n.$set(f)},i:function(i){l||(O(n.$$.fragment,i),l=!0)},o:function(i){W(n.$$.fragment,i),l=!1},d:function(i){i&&c(e),ce(n)}};return F("SvelteRegisterBlock",{block:s,id:sn.name,type:"if",source:"(186:12) {#if $data.authors[i].user_id}",ctx:t}),s}function rn(t){let e,n,l=t[7]("remove")+"",s,r,i;function o(){return t[26](t[29])}const f={c:function(){e=p("button"),n=p("span"),s=I(l),this.h()},l:function($){e=h($,"BUTTON",{class:!0,type:!0});var _=b(e);n=h(_,"SPAN",{});var w=b(n);s=M(w,l),w.forEach(c),_.forEach(c),this.h()},h:function(){g(n,v,213,16,7097),d(e,"class","variant-ghost-primary btn"),d(e,"type","button"),g(e,v,212,14,6991)},m:function($,_){X($,e,_),a(e,n),a(n,s),r||(i=Re(e,"click",o,!1,!1,!1,!1),r=!0)},p:function($,_){t=$,_[0]&128&&l!==(l=t[7]("remove")+"")&&j(s,l)},d:function($){$&&c(e),r=!1,i()}};return F("SvelteRegisterBlock",{block:f,id:rn.name,type:"if",source:"(200:12) {#if author.role !== 'creator'}",ctx:t}),f}function ln(t){let e,n,l,s,r="User ID",i,o,f,S,$,_,w,R,x=t[4].authors[t[29]].user_id&&sn(t);function q(){t[25].call(o,t[29])}let m=t[27].role!=="creator"&&rn(t);const z={c:function(){e=p("div"),x&&x.c(),n=V(),l=p("label"),s=p("span"),s.textContent=r,i=V(),o=p("input"),S=V(),m&&m.c(),$=V(),this.h()},l:function(Z){e=h(Z,"DIV",{class:!0});var T=b(e);x&&x.l(T),n=B(T),l=h(T,"LABEL",{class:!0});var L=b(l);s=h(L,"SPAN",{"data-svelte-h":!0}),Tn(s)!=="svelte-5fmcbq"&&(s.textContent=r),i=B(L),o=h(L,"INPUT",{type:!0,class:!0}),L.forEach(c),S=B(T),m&&m.l(T),$=B(T),T.forEach(c),this.h()},h:function(){g(s,v,203,14,6673),d(o,"type","text"),o.required=!0,d(o,"class","input p-2"),o.disabled=f=t[27].role==="creator",g(o,v,204,14,6708),d(l,"class","label"),g(l,v,202,12,6637),d(e,"class","flex items-end"),g(e,v,196,10,6422)},m:function(Z,T){X(Z,e,T),x&&x.m(e,null),a(e,n),a(e,l),a(l,s),a(l,i),a(l,o),se(o,t[4].authors[t[29]].user_id),a(e,S),m&&m.m(e,null),a(e,$),_=!0,w||(R=Re(o,"input",q),w=!0)},p:function(Z,T){t=Z,t[4].authors[t[29]].user_id?x?(x.p(t,T),T[0]&16&&O(x,1)):(x=sn(t),x.c(),O(x,1),x.m(e,n)):x&&(wt(),W(x,1,1,()=>{x=null}),xt()),(!_||T[0]&16&&f!==(f=t[27].role==="creator"))&&Rn(o,"disabled",f),T[0]&16&&o.value!==t[4].authors[t[29]].user_id&&se(o,t[4].authors[t[29]].user_id),t[27].role!=="creator"?m?m.p(t,T):(m=rn(t),m.c(),m.m(e,$)):m&&(m.d(1),m=null)},i:function(Z){_||(O(x),_=!0)},o:function(Z){W(x),_=!1},d:function(Z){Z&&c(e),x&&x.d(),m&&m.d(),w=!1,R()}};return F("SvelteRegisterBlock",{block:z,id:ln.name,type:"each",source:"(184:8) {#each $data.authors as author, i}",ctx:t}),z}function an(t){let e,n,l,s,r,i=t[7]("entry.name")+"",o,f,S,$,_,w,R,x,q,m,z=t[7]("mod.reference")+"",Y,Z,T,L,U,ne,A,De,te,N,k,P=t[7]("entry.short-description")+"",G,C,ue,J,_e,u,We,$e,ve,be,Ue,Ye=t[7]("entry.full-description")+"",it,kt,Et,fe,St,Ae,_t,pe,Ce,Je=t[7]("preview")+"",ot,At,Pt,st,Vt,Fe,ye,Bt,It,de,Pe,Ke=t[7]("logo")+"",rt,Mt,Nt,he,Tt,Ve,Rt,we,xe,ze,et=t[7]("entry.source-url")+"",lt,Dt,me,Ut,Be,Ct,ke,Ee,Ft,Lt,Ie,jt,at,He,Me,ct,ie,qt,un;w=new Te({props:{for:"name",$$slots:{default:[On,({messages:E})=>({30:E}),({messages:E})=>[E?1073741824:0]]},$$scope:{ctx:t}},$$inline:!0});let K=!t[2]&&tn(t);A=new Te({props:{for:"mod_reference",$$slots:{default:[Xn,({messages:E})=>({30:E}),({messages:E})=>[E?1073741824:0]]},$$scope:{ctx:t}},$$inline:!0}),u=new Te({props:{for:"short_description",$$slots:{default:[zn,({messages:E})=>({30:E}),({messages:E})=>[E?1073741824:0]]},$$scope:{ctx:t}},$$inline:!0}),Ae=new Te({props:{for:"full_description",$$slots:{default:[Hn,({messages:E})=>({30:E}),({messages:E})=>[E?1073741824:0]]},$$scope:{ctx:t}},$$inline:!0});let oe={ctx:t,current:null,token:null,hasCatch:!1,pending:Qn,then:Gn,catch:Zn,value:31};wn(st=Kt(t[6]),oe);function ti(E){t[19](E)}let fn={editable:!0};t[3]!==void 0&&(fn.tags=t[3]),ye=new Dn({props:fn,$$inline:!0}),vt.push(()=>bt(ye,"tags",ti)),Ve=new Te({props:{for:"logo",$$slots:{default:[Wn,({messages:E})=>({30:E}),({messages:E})=>[E?1073741824:0]]},$$scope:{ctx:t}},$$inline:!0}),Be=new Te({props:{for:"source_url",$$slots:{default:[Yn,({messages:E})=>({30:E}),({messages:E})=>[E?1073741824:0]]},$$scope:{ctx:t}},$$inline:!0});function ni(E){t[21](E)}let dn={name:"slider-label",$$slots:{default:[Jn]},$$scope:{ctx:t}};t[4].hidden!==void 0&&(dn.checked=t[4].hidden),Ee=new cn({props:dn,$$inline:!0}),vt.push(()=>bt(Ee,"checked",ni)),Ie=new Te({props:{for:"hidden",$$slots:{default:[Kn,({messages:E})=>({30:E}),({messages:E})=>[E?1073741824:0]]},$$scope:{ctx:t}},$$inline:!0});let Q=t[2]&&nn(t);const mn={c:function(){e=p("form"),n=p("div"),l=p("div"),s=p("label"),r=p("span"),o=I(i),f=I(" *"),S=V(),$=p("input"),_=V(),re(w.$$.fragment),R=V(),x=p("div"),q=p("label"),m=p("span"),Y=I(z),Z=I(" *"),T=V(),L=p("input"),U=V(),K&&K.c(),ne=V(),re(A.$$.fragment),De=V(),te=p("div"),N=p("label"),k=p("span"),G=I(P),C=I(" *"),ue=V(),J=p("input"),_e=V(),re(u.$$.fragment),We=V(),$e=p("div"),ve=p("div"),be=p("label"),Ue=p("span"),it=I(Ye),kt=I(" *"),Et=V(),fe=p("textarea"),St=V(),re(Ae.$$.fragment),_t=V(),pe=p("div"),Ce=p("span"),ot=I(Je),At=I(":"),Pt=V(),oe.block.c(),Vt=V(),Fe=p("div"),re(ye.$$.fragment),It=V(),de=p("div"),Pe=p("label"),rt=I(Ke),Mt=I(":"),Nt=V(),he=p("input"),Tt=V(),re(Ve.$$.fragment),Rt=V(),we=p("div"),xe=p("label"),ze=p("span"),lt=I(et),Dt=V(),me=p("input"),Ut=V(),re(Be.$$.fragment),Ct=V(),ke=p("div"),re(Ee.$$.fragment),Lt=V(),re(Ie.$$.fragment),jt=V(),Q&&Q.c(),at=V(),He=p("div"),Me=p("button"),ct=I(t[1]),this.h()},l:function(D){e=h(D,"FORM",{});var y=b(e);n=h(y,"DIV",{class:!0});var H=b(n);l=h(H,"DIV",{class:!0});var Le=b(l);s=h(Le,"LABEL",{class:!0});var je=b(s);r=h(je,"SPAN",{});var Ze=b(r);o=M(Ze,i),f=M(Ze," *"),Ze.forEach(c),S=B(je),$=h(je,"INPUT",{type:!0,class:!0}),je.forEach(c),_=B(Le),le(w.$$.fragment,Le),Le.forEach(c),R=B(H),x=h(H,"DIV",{class:!0});var qe=b(x);q=h(qe,"LABEL",{class:!0});var Se=b(q);m=h(Se,"SPAN",{});var Ge=b(m);Y=M(Ge,z),Z=M(Ge," *"),Ge.forEach(c),T=B(Se),L=h(Se,"INPUT",{type:!0,class:!0}),U=B(Se),K&&K.l(Se),Se.forEach(c),ne=B(qe),le(A.$$.fragment,qe),qe.forEach(c),De=B(H),te=h(H,"DIV",{class:!0});var Ne=b(te);N=h(Ne,"LABEL",{class:!0});var Oe=b(N);k=h(Oe,"SPAN",{});var Ot=b(k);G=M(Ot,P),C=M(Ot," *"),Ot.forEach(c),ue=B(Oe),J=h(Oe,"INPUT",{type:!0,class:!0}),Oe.forEach(c),_e=B(Ne),le(u.$$.fragment,Ne),Ne.forEach(c),We=B(H),$e=h(H,"DIV",{class:!0});var ut=b($e);ve=h(ut,"DIV",{class:!0});var ft=b(ve);be=h(ft,"LABEL",{class:!0});var dt=b(be);Ue=h(dt,"SPAN",{});var Xt=b(Ue);it=M(Xt,Ye),kt=M(Xt," *"),Xt.forEach(c),Et=B(dt),fe=h(dt,"TEXTAREA",{class:!0,rows:!0}),b(fe).forEach(c),dt.forEach(c),St=B(ft),le(Ae.$$.fragment,ft),ft.forEach(c),_t=B(ut),pe=h(ut,"DIV",{class:!0});var mt=b(pe);Ce=h(mt,"SPAN",{});var zt=b(Ce);ot=M(zt,Je),At=M(zt,":"),zt.forEach(c),Pt=B(mt),oe.block.l(mt),mt.forEach(c),ut.forEach(c),Vt=B(H),Fe=h(H,"DIV",{class:!0});var pn=b(Fe);le(ye.$$.fragment,pn),pn.forEach(c),It=B(H),de=h(H,"DIV",{class:!0});var Qe=b(de);Pe=h(Qe,"LABEL",{for:!0});var Ht=b(Pe);rt=M(Ht,Ke),Mt=M(Ht,":"),Ht.forEach(c),Nt=B(Qe),he=h(Qe,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),Tt=B(Qe),le(Ve.$$.fragment,Qe),Qe.forEach(c),Rt=B(H),we=h(H,"DIV",{class:!0});var pt=b(we);xe=h(pt,"LABEL",{class:!0});var ht=b(xe);ze=h(ht,"SPAN",{});var hn=b(ze);lt=M(hn,et),hn.forEach(c),Dt=B(ht),me=h(ht,"INPUT",{type:!0,class:!0}),ht.forEach(c),Ut=B(pt),le(Be.$$.fragment,pt),pt.forEach(c),Ct=B(H),ke=h(H,"DIV",{class:!0});var gt=b(ke);le(Ee.$$.fragment,gt),Lt=B(gt),le(Ie.$$.fragment,gt),gt.forEach(c),jt=B(H),Q&&Q.l(H),at=B(H),He=h(H,"DIV",{});var gn=b(He);Me=h(gn,"BUTTON",{class:!0,type:!0});var $n=b(Me);ct=M($n,t[1]),$n.forEach(c),gn.forEach(c),H.forEach(c),y.forEach(c),this.h()},h:function(){g(r,v,86,8,2377),d($,"type","text"),$.required=!0,d($,"class","input p-2"),g($,v,87,8,2419),d(s,"class","label"),g(s,v,85,6,2347),d(l,"class","grid grid-flow-row gap-2"),g(l,v,84,4,2302),g(m,v,96,8,2749),d(L,"type","text"),L.required=!0,d(L,"class","input p-2"),L.disabled=t[2],g(L,v,97,8,2794),d(q,"class","label"),g(q,v,95,6,2719),d(x,"class","grid grid-flow-row gap-2"),g(x,v,94,4,2674),g(k,v,109,8,3251),d(J,"type","text"),J.required=!0,d(J,"class","input p-2"),g(J,v,110,8,3306),d(N,"class","label"),g(N,v,108,6,3221),d(te,"class","grid grid-flow-row gap-2"),g(te,v,107,4,3176),g(Ue,v,120,10,3717),d(fe,"class","vertical-textarea textarea p-2"),fe.required=!0,d(fe,"rows",10),g(fe,v,121,10,3773),d(be,"class","label"),g(be,v,119,8,3685),d(ve,"class","grid grid-flow-row auto-rows-max gap-2"),g(ve,v,118,6,3624),g(Ce,v,128,8,4146),d(pe,"class","grid grid-flow-row auto-rows-max gap-2"),g(pe,v,127,6,4085),d($e,"class","split grid gap-6 svelte-k92wki"),g($e,v,117,4,3587),d(Fe,"class","grid grid-flow-row gap-2"),g(Fe,v,136,4,4388),d(Pe,"for","logo"),g(Pe,v,141,6,4532),d(he,"id","logo"),d(he,"class","base-input"),d(he,"name","logo"),d(he,"type","file"),d(he,"accept","image/png,image/jpeg,image/gif"),d(he,"placeholder","Logo"),g(he,v,142,6,4578),d(de,"class","grid grid-flow-row gap-2"),g(de,v,140,4,4487),g(ze,v,156,8,4990),d(me,"type","text"),me.required=!0,d(me,"class","input p-2"),g(me,v,157,8,5036),d(xe,"class","label"),g(xe,v,155,6,4960),d(we,"class","grid grid-flow-row gap-2"),g(we,v,154,4,4915),d(ke,"class","grid grid-flow-row gap-2"),g(ke,v,164,4,5303),d(Me,"class","variant-ghost-primary btn"),d(Me,"type","submit"),g(Me,v,222,6,7240),g(He,v,221,4,7228),d(n,"class","grid grid-flow-row gap-6"),g(n,v,83,2,2259),g(e,v,82,0,2241)},m:function(D,y){X(D,e,y),a(e,n),a(n,l),a(l,s),a(s,r),a(r,o),a(r,f),a(s,S),a(s,$),se($,t[4].name),a(l,_),ae(w,l,null),a(n,R),a(n,x),a(x,q),a(q,m),a(m,Y),a(m,Z),a(q,T),a(q,L),se(L,t[4].mod_reference),a(q,U),K&&K.m(q,null),a(x,ne),ae(A,x,null),a(n,De),a(n,te),a(te,N),a(N,k),a(k,G),a(k,C),a(N,ue),a(N,J),se(J,t[4].short_description),a(te,_e),ae(u,te,null),a(n,We),a(n,$e),a($e,ve),a(ve,be),a(be,Ue),a(Ue,it),a(Ue,kt),a(be,Et),a(be,fe),se(fe,t[4].full_description),a(ve,St),ae(Ae,ve,null),a($e,_t),a($e,pe),a(pe,Ce),a(Ce,ot),a(Ce,At),a(pe,Pt),oe.block.m(pe,oe.anchor=null),oe.mount=()=>pe,oe.anchor=null,a(n,Vt),a(n,Fe),ae(ye,Fe,null),a(n,It),a(n,de),a(de,Pe),a(Pe,rt),a(Pe,Mt),a(de,Nt),a(de,he),a(de,Tt),ae(Ve,de,null),a(n,Rt),a(n,we),a(we,xe),a(xe,ze),a(ze,lt),a(xe,Dt),a(xe,me),se(me,t[4].source_url),a(we,Ut),ae(Be,we,null),a(n,Ct),a(n,ke),ae(Ee,ke,null),a(ke,Lt),ae(Ie,ke,null),a(n,jt),Q&&Q.m(n,null),a(n,at),a(n,He),a(He,Me),a(Me,ct),ie=!0,qt||(un=[Re($,"input",t[15]),Re(L,"input",t[16]),Re(J,"input",t[17]),Re(fe,"input",t[18]),Re(me,"input",t[20]),oi(t[8].call(null,e))],qt=!0)},p:function(D,y){t=D,(!ie||y[0]&128)&&i!==(i=t[7]("entry.name")+"")&&j(o,i),y[0]&16&&$.value!==t[4].name&&se($,t[4].name);const H={};y[0]&1073741824|y[1]&2&&(H.$$scope={dirty:y,ctx:t}),w.$set(H),(!ie||y[0]&128)&&z!==(z=t[7]("mod.reference")+"")&&j(Y,z),(!ie||y[0]&4)&&Rn(L,"disabled",t[2]),y[0]&16&&L.value!==t[4].mod_reference&&se(L,t[4].mod_reference),t[2]?K&&(K.d(1),K=null):K?K.p(t,y):(K=tn(t),K.c(),K.m(q,null));const Le={};y[0]&1073741824|y[1]&2&&(Le.$$scope={dirty:y,ctx:t}),A.$set(Le),(!ie||y[0]&128)&&P!==(P=t[7]("entry.short-description")+"")&&j(G,P),y[0]&16&&J.value!==t[4].short_description&&se(J,t[4].short_description);const je={};y[0]&1073741824|y[1]&2&&(je.$$scope={dirty:y,ctx:t}),u.$set(je),(!ie||y[0]&128)&&Ye!==(Ye=t[7]("entry.full-description")+"")&&j(it,Ye),y[0]&16&&se(fe,t[4].full_description);const Ze={};y[0]&1073741824|y[1]&2&&(Ze.$$scope={dirty:y,ctx:t}),Ae.$set(Ze),(!ie||y[0]&128)&&Je!==(Je=t[7]("preview")+"")&&j(ot,Je),oe.ctx=t,y[0]&64&&st!==(st=Kt(t[6]))&&wn(st,oe)||si(oe,t,y);const qe={};!Bt&&y[0]&8&&(Bt=!0,qe.tags=t[3],yt(()=>Bt=!1)),ye.$set(qe),(!ie||y[0]&128)&&Ke!==(Ke=t[7]("logo")+"")&&j(rt,Ke);const Se={};y[0]&1073741824|y[1]&2&&(Se.$$scope={dirty:y,ctx:t}),Ve.$set(Se),(!ie||y[0]&128)&&et!==(et=t[7]("entry.source-url")+"")&&j(lt,et),y[0]&16&&me.value!==t[4].source_url&&se(me,t[4].source_url);const Ge={};y[0]&1073741824|y[1]&2&&(Ge.$$scope={dirty:y,ctx:t}),Be.$set(Ge);const Ne={};y[0]&128|y[1]&2&&(Ne.$$scope={dirty:y,ctx:t}),!Ft&&y[0]&16&&(Ft=!0,Ne.checked=t[4].hidden,yt(()=>Ft=!1)),Ee.$set(Ne);const Oe={};y[0]&1073741824|y[1]&2&&(Oe.$$scope={dirty:y,ctx:t}),Ie.$set(Oe),t[2]?Q?(Q.p(t,y),y[0]&4&&O(Q,1)):(Q=nn(t),Q.c(),O(Q,1),Q.m(n,at)):Q&&(wt(),W(Q,1,1,()=>{Q=null}),xt()),(!ie||y[0]&2)&&j(ct,t[1])},i:function(D){ie||(O(w.$$.fragment,D),O(A.$$.fragment,D),O(u.$$.fragment,D),O(Ae.$$.fragment,D),O(ye.$$.fragment,D),O(Ve.$$.fragment,D),O(Be.$$.fragment,D),O(Ee.$$.fragment,D),O(Ie.$$.fragment,D),O(Q),ie=!0)},o:function(D){W(w.$$.fragment,D),W(A.$$.fragment,D),W(u.$$.fragment,D),W(Ae.$$.fragment,D),W(ye.$$.fragment,D),W(Ve.$$.fragment,D),W(Be.$$.fragment,D),W(Ee.$$.fragment,D),W(Ie.$$.fragment,D),W(Q),ie=!1},d:function(D){D&&c(e),ce(w),K&&K.d(),ce(A),ce(u),ce(Ae),oe.block.d(),oe.token=null,oe=null,ce(ye),ce(Ve),ce(Be),ce(Ee),ce(Ie),Q&&Q.d(),qt=!1,ri(un)}};return F("SvelteRegisterBlock",{block:mn,id:an.name,type:"component",source:"",ctx:t}),mn}function pi(t,e,n){let l,s,r,i=ee,o=()=>(i(),i=Jt($,u=>n(7,r=u)),$);t.$$.on_destroy.push(()=>i());let{$$slots:f={},$$scope:S}=e;Nn("ModForm",f,[]);const{t:$}=$t();Wt($,"t"),o();let{onSubmit:_}=e,{initialValues:w={full_description:"",mod_reference:"",name:"",short_description:"",source_url:"",hidden:!1,tagIDs:[],compatibility:{EA:{state:Gt.Works,note:""},EXP:{state:Gt.Works,note:""}}}}=e,{submitText:R=r("entry.create")}=e,{editing:x=!1}=e;const{form:q,data:m}=En({initialValues:w,extend:[Sn({schema:Qt}),_n],onSubmit:u=>_(An(u,Qt))});Wt(m,"data"),ii(t,m,u=>n(4,s=u));let z=[];const Y=()=>{s.authors.push({role:"editor",user_id:"",key:""}),m.set(s)},Z=u=>{s.authors.splice(u,1),m.set(s)};let T=!1;const L=s.compatibility;t.$$.on_mount.push(function(){_===void 0&&!("onSubmit"in e||t.$$.bound[t.$$.props.onSubmit])&&console.warn("<ModForm> was created without expected prop 'onSubmit'")});const U=["onSubmit","initialValues","submitText","editing"];Object.keys(e).forEach(u=>{!~U.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<ModForm> was created with unknown prop '${u}'`)});function ne(){s.name=this.value,m.set(s)}function A(){s.mod_reference=this.value,m.set(s)}function De(){s.short_description=this.value,m.set(s)}function te(){s.full_description=this.value,m.set(s)}function N(u){z=u,n(3,z),n(4,s)}function k(){s.source_url=this.value,m.set(s)}function P(u){t.$$.not_equal(s.hidden,u)&&(s.hidden=u,m.set(s))}function G(u){T=u,n(5,T)}const C=()=>{Zt(m,s.compatibility=T?L:void 0,s)};function ue(u){t.$$.not_equal(s.compatibility,u)&&(s.compatibility=u,m.set(s))}function J(u){s.authors[u].user_id=this.value,m.set(s)}const _e=u=>Z(u);return t.$$set=u=>{"onSubmit"in u&&n(13,_=u.onSubmit),"initialValues"in u&&n(14,w=u.initialValues),"submitText"in u&&n(1,R=u.submitText),"editing"in u&&n(2,x=u.editing)},t.$capture_state=()=>({createForm:En,validator:Sn,reporter:_n,ValidationMessage:Te,modSchema:Qt,trimNonSchema:An,markdown:Kt,ModAuthor:qn,TagList:Dn,CompatibilityState:Gt,ModCompatibility:Un,getTranslate:$t,SlideToggle:cn,t:$,onSubmit:_,initialValues:w,submitText:R,editing:x,form:q,data:m,tags:z,addAuthor:Y,removeAuthor:Z,editCompatibility:T,originalCompatibility:L,preview:l,$data:s,$t:r}),t.$inject_state=u=>{"onSubmit"in u&&n(13,_=u.onSubmit),"initialValues"in u&&n(14,w=u.initialValues),"submitText"in u&&n(1,R=u.submitText),"editing"in u&&n(2,x=u.editing),"tags"in u&&n(3,z=u.tags),"editCompatibility"in u&&n(5,T=u.editCompatibility),"preview"in u&&n(6,l=u.preview)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{if(t.$$.dirty[0]&24){const u=s;u.tags&&(n(3,z=u.tags),delete u.tags),Zt(m,s.tagIDs=z.map(We=>We.id),s)}t.$$.dirty[0]&16&&Zt(m,s.compatibility=s.compatibility?s.compatibility:void 0,s),t.$$.dirty[0]&20&&(x||delete s.compatibility),t.$$.dirty[0]&16&&n(6,l=s.full_description||"")},[$,R,x,z,s,T,l,r,q,m,Y,Z,L,_,w,ne,A,De,te,N,k,P,G,C,ue,J,_e]}class xi extends Bn{constructor(e){super(e),In(this,e,pi,an,Mn,{t:0,onSubmit:13,initialValues:14,submitText:1,editing:2},null,[-1,-1]),F("SvelteRegisterComponent",{component:this,tagName:"ModForm",options:e,id:an.name})}get t(){return this.$$.ctx[0]}set t(e){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get onSubmit(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set onSubmit(e){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get initialValues(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set initialValues(e){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get submitText(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set submitText(e){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get editing(){throw new Error("<ModForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set editing(e){throw new Error("<ModForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{xi as M};
//# sourceMappingURL=ModForm.CY3FfP3g.js.map
