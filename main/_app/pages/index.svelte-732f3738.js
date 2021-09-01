import{N as s,S as a,i as r,s as t,j as e,k as o,e as n,t as c,$ as l,m as f,d as i,n as d,c as m,a as h,g as u,b as g,o as p,f as $,R as v,W as E,u as x,w as b,x as w,v as M,Y as S,ac as k,O as j,r as y,X as N,h as P,l as D,ad as A}from"../chunks/vendor-717a693c.js";import{l as I}from"../chunks/gql-8d1c163c.js";import{d as V,e as B}from"../chunks/graphql-7c12eb8b.js";import{M as O}from"../chunks/ModCard-8aafd976.js";import{a as R,b as F}from"../chunks/paths-6758d194.js";import{M as C,L as _,S as q,F as L}from"../chunks/Footer-f1b4077d.js";import{M as T}from"../chunks/ModGrid-5e2bb721.js";import{g as G}from"../chunks/navigation-51f4a605.js";import{M as H}from"../chunks/MetaDescriptors-a7f74224.js";import"../chunks/image-d3b102c7.js";import"../chunks/stores-ef71dba6.js";import"../chunks/global-fd234a29.js";import"../chunks/user-9208d706.js";import"../chunks/PageControls-bebdb22a.js";import"../chunks/FakeCard-56038b35.js";import"../chunks/singletons-12a22614.js";function W(s,a,r){const t=s.slice();return t[6]=a[r],t}function X(s){let a,r,t=s[2].data.getMods.count+"";return{c(){a=n("span"),r=c(t),this.h()},l(s){a=m(s,"SPAN",{class:!0});var e=h(a);r=u(e,t),e.forEach(i),this.h()},h(){g(a,"class","text-lime-500")},m(s,t){$(s,a,t),v(a,r)},p(s,a){4&a&&t!==(t=s[2].data.getMods.count+"")&&P(r,t)},d(s){s&&i(a)}}}function Y(s){let a,r,t,e=s[2].error.message+"";return{c(){a=n("span"),r=c("Oh no... "),t=c(e),this.h()},l(s){a=m(s,"SPAN",{class:!0});var o=h(a);r=u(o,"Oh no... "),t=u(o,e),o.forEach(i),this.h()},h(){g(a,"class","text-lime-500")},m(s,e){$(s,a,e),v(a,r),v(a,t)},p(s,a){4&a&&e!==(e=s[2].error.message+"")&&P(t,e)},d(s){s&&i(a)}}}function z(s){let a,r;return{c(){a=n("span"),r=c("..."),this.h()},l(s){a=m(s,"SPAN",{class:!0});var t=h(a);r=u(t,"..."),t.forEach(i),this.h()},h(){g(a,"class","text-lime-500")},m(s,t){$(s,a,t),v(a,r)},p:N,d(s){s&&i(a)}}}function J(s){let a,r,t=s[3].data.getMods.mods,e=[];for(let n=0;n<t.length;n+=1)e[n]=U(W(s,t,n));const o=s=>x(e[s],1,1,(()=>{e[s]=null}));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();a=D()},l(s){for(let a=0;a<e.length;a+=1)e[a].l(s);a=D()},m(s,t){for(let a=0;a<e.length;a+=1)e[a].m(s,t);$(s,a,t),r=!0},p(s,r){if(8&r){let n;for(t=s[3].data.getMods.mods,n=0;n<t.length;n+=1){const o=W(s,t,n);e[n]?(e[n].p(o,r),w(e[n],1)):(e[n]=U(o),e[n].c(),w(e[n],1),e[n].m(a.parentNode,a))}for(y(),n=t.length;n<e.length;n+=1)o(n);b()}},i(s){if(!r){for(let s=0;s<t.length;s+=1)w(e[s]);r=!0}},o(s){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)x(e[a]);r=!1},d(s){A(e,s),s&&i(a)}}}function K(s){let a,r,t,e=s[3].error.message+"";return{c(){a=n("p"),r=c("Oh no... "),t=c(e)},l(s){a=m(s,"P",{});var o=h(a);r=u(o,"Oh no... "),t=u(o,e),o.forEach(i)},m(s,e){$(s,a,e),v(a,r),v(a,t)},p(s,a){8&a&&e!==(e=s[3].error.message+"")&&P(t,e)},i:N,o:N,d(s){s&&i(a)}}}function Q(s){let a,r;return{c(){a=n("p"),r=c("Loading...")},l(s){a=m(s,"P",{});var t=h(a);r=u(t,"Loading..."),t.forEach(i)},m(s,t){$(s,a,t),v(a,r)},p:N,i:N,o:N,d(s){s&&i(a)}}}function U(s){let a,r;return a=new O({props:{mod:s[6],expanded:!0}}),{c(){e(a.$$.fragment)},l(s){f(a.$$.fragment,s)},m(s,t){p(a,s,t),r=!0},p(s,r){const t={};8&r&&(t.mod=s[6]),a.$set(t)},i(s){r||(w(a.$$.fragment,s),r=!0)},o(s){x(a.$$.fragment,s),r=!1},d(s){M(a,s)}}}function Z(s){let a,r,t,e,o=s[2].data.getMods.count+"";return{c(){a=n("span"),r=c("Browse all "),t=c(o),e=c(" mods"),this.h()},l(s){a=m(s,"SPAN",{class:!0});var n=h(a);r=u(n,"Browse all "),t=u(n,o),e=u(n," mods"),n.forEach(i),this.h()},h(){g(a,"class","text-3xl")},m(s,o){$(s,a,o),v(a,r),v(a,t),v(a,e)},p(s,a){4&a&&o!==(o=s[2].data.getMods.count+"")&&P(t,o)},d(s){s&&i(a)}}}function ss(s){let a,r,t,e=s[2].error.message+"";return{c(){a=n("span"),r=c("Oh no... "),t=c(e),this.h()},l(s){a=m(s,"SPAN",{class:!0});var o=h(a);r=u(o,"Oh no... "),t=u(o,e),o.forEach(i),this.h()},h(){g(a,"class","text-3xl")},m(s,e){$(s,a,e),v(a,r),v(a,t)},p(s,a){4&a&&e!==(e=s[2].error.message+"")&&P(t,e)},d(s){s&&i(a)}}}function as(s){let a,r;return{c(){a=n("span"),r=c("Browse all ... mods"),this.h()},l(s){a=m(s,"SPAN",{class:!0});var t=h(a);r=u(t,"Browse all ... mods"),t.forEach(i),this.h()},h(){g(a,"class","text-3xl")},m(s,t){$(s,a,t),v(a,r)},p:N,d(s){s&&i(a)}}}function rs(s){let a,r,t,k,j,N,P,D,A,I,V,B,O,F,G,W,U,rs,ts,os,ns,cs,ls,fs,is,ds,ms,hs,us,gs,ps,$s,vs,Es,xs,bs,ws,Ms,Ss,ks,js,ys,Ns,Ps,Ds,As,Is,Vs,Bs,Os,Rs,Fs,Cs,_s,qs,Ls;a=new H({props:{description:"Satisfactory Mod Repository",title:"Home"}}),k=new C({});let Ts=""!==es;function Gs(s,a){return s[2].fetching?z:s[2].error?Y:X}os=new _({}),cs=new q({});let Hs=Gs(s),Ws=Hs(s);const Xs=[Q,K,J],Ys=[];function zs(s,a){return s[3].fetching?0:s[3].error?1:2}function Js(s,a){return s[2].fetching?as:s[2].error?ss:Z}Ps=zs(s),Ds=Ys[Ps]=Xs[Ps](s);let Ks=Js(s),Qs=Ks(s);return Rs=new T({props:{colCount:5}}),Cs=new L({}),{c(){e(a.$$.fragment),r=o(),t=n("div"),e(k.$$.fragment),j=o(),N=n("div"),P=n("div"),D=n("span"),A=c("SMR"),I=o(),V=n("span"),B=c("Satisfactory Mod Repository"),O=o(),F=n("div"),G=n("span"),W=c("The unofficially official source for Satisfactory mods"),U=o(),rs=o(),ts=n("div"),e(os.$$.fragment),ns=o(),e(cs.$$.fragment),ls=o(),fs=n("div"),is=n("div"),ds=n("div"),ms=n("div"),hs=n("span"),us=c("Featured mods:"),gs=o(),ps=n("span"),$s=c("Newest"),vs=o(),Es=n("div"),xs=n("span"),bs=n("span"),ws=c("Browse all"),Ms=o(),Ws.c(),Ss=o(),ks=n("span"),js=c("mods"),ys=o(),Ns=n("div"),Ds.c(),As=o(),Is=n("div"),Qs.c(),Vs=o(),Bs=n("div"),Os=n("div"),e(Rs.$$.fragment),Fs=o(),e(Cs.$$.fragment),this.h()},l(s){const e=l('[data-svelte="svelte-uhqw2p"]',document.head);f(a.$$.fragment,e),e.forEach(i),r=d(s),t=m(s,"DIV",{class:!0,style:!0});var o=h(t);f(k.$$.fragment,o),j=d(o),N=m(o,"DIV",{class:!0});var n=h(N);P=m(n,"DIV",{class:!0});var c=h(P);D=m(c,"SPAN",{class:!0});var g=h(D);A=u(g,"SMR"),g.forEach(i),I=d(c),V=m(c,"SPAN",{});var p=h(V);B=u(p,"Satisfactory Mod Repository"),p.forEach(i),c.forEach(i),O=d(n),F=m(n,"DIV",{class:!0});var $=h(F);G=m($,"SPAN",{});var v=h(G);W=u(v,"The unofficially official source for Satisfactory mods"),v.forEach(i),$.forEach(i),U=d(n),n.forEach(i),rs=d(o),ts=m(o,"DIV",{class:!0});var E=h(ts);f(os.$$.fragment,E),ns=d(E),f(cs.$$.fragment,E),E.forEach(i),ls=d(o),fs=m(o,"DIV",{class:!0});var x=h(fs);is=m(x,"DIV",{class:!0});var b=h(is);ds=m(b,"DIV",{class:!0});var w=h(ds);ms=m(w,"DIV",{});var M=h(ms);hs=m(M,"SPAN",{});var S=h(hs);us=u(S,"Featured mods:"),S.forEach(i),gs=d(M),ps=m(M,"SPAN",{class:!0});var y=h(ps);$s=u(y,"Newest"),y.forEach(i),M.forEach(i),vs=d(w),Es=m(w,"DIV",{class:!0});var R=h(Es);xs=m(R,"SPAN",{class:!0});var C=h(xs);bs=m(C,"SPAN",{});var _=h(bs);ws=u(_,"Browse all"),_.forEach(i),Ms=d(C),Ws.l(C),Ss=d(C),ks=m(C,"SPAN",{});var q=h(ks);js=u(q,"mods"),q.forEach(i),C.forEach(i),R.forEach(i),w.forEach(i),ys=d(b),Ns=m(b,"DIV",{class:!0});var L=h(Ns);Ds.l(L),L.forEach(i),b.forEach(i),x.forEach(i),o.forEach(i),As=d(s),Is=m(s,"DIV",{class:!0});var T=h(Is);Qs.l(T),T.forEach(i),Vs=d(s),Bs=m(s,"DIV",{class:!0});var H=h(Bs);Os=m(H,"DIV",{class:!0});var X=h(Os);f(Rs.$$.fragment,X),X.forEach(i),H.forEach(i),Fs=d(s),f(Cs.$$.fragment,s),this.h()},h(){g(D,"class","text-lime-500"),g(P,"class","header text-6xl"),g(F,"class","under-header text-3xl"),g(N,"class","text-center self-center"),g(ts,"class","w-5/6 justify-self-center"),g(ps,"class","text-lime-500"),g(xs,"class","cursor-pointer"),g(Es,"class","text-right"),g(ds,"class","w-5/6 mx-auto grid grid-flow-col mb-3"),g(Ns,"class","featured-mods w-5/6 mx-auto grid grid-flow-col gap-4"),g(is,"class","py-8 bg-black bg-opacity-70"),g(fs,"class","grid"),g(t,"class","h-screen bg-center bg-cover fold grid svelte-cjjnf6"),g(t,"style",'background-image: url("'+R+'/assets/header_bg_image.png")'),g(Is,"class","w-full text-center py-6 bg-lime-600 mb-8 cursor-pointer"),g(Os,"class","w-5/6 mx-auto"),g(Bs,"class","grid")},m(e,o){p(a,document.head,null),$(e,r,o),$(e,t,o),p(k,t,null),v(t,j),v(t,N),v(N,P),v(P,D),v(D,A),v(P,I),v(P,V),v(V,B),v(N,O),v(N,F),v(F,G),v(G,W),v(N,U),v(t,rs),v(t,ts),p(os,ts,null),v(ts,ns),p(cs,ts,null),v(t,ls),v(t,fs),v(fs,is),v(is,ds),v(ds,ms),v(ms,hs),v(hs,us),v(ms,gs),v(ms,ps),v(ps,$s),v(ds,vs),v(ds,Es),v(Es,xs),v(xs,bs),v(bs,ws),v(xs,Ms),Ws.m(xs,null),v(xs,Ss),v(xs,ks),v(ks,js),v(is,ys),v(is,Ns),Ys[Ps].m(Ns,null),$(e,As,o),$(e,Is,o),Qs.m(Is,null),$(e,Vs,o),$(e,Bs,o),v(Bs,Os),p(Rs,Os,null),$(e,Fs,o),p(Cs,e,o),_s=!0,qs||(Ls=[E(xs,"click",s[4]),E(Is,"click",s[5])],qs=!0)},p(s,[a]){Hs===(Hs=Gs(s))&&Ws?Ws.p(s,a):(Ws.d(1),Ws=Hs(s),Ws&&(Ws.c(),Ws.m(xs,Ss)));let r=Ps;Ps=zs(s),Ps===r?Ys[Ps].p(s,a):(y(),x(Ys[r],1,1,(()=>{Ys[r]=null})),b(),Ds=Ys[Ps],Ds?Ds.p(s,a):(Ds=Ys[Ps]=Xs[Ps](s),Ds.c()),w(Ds,1),Ds.m(Ns,null)),Ks===(Ks=Js(s))&&Qs?Qs.p(s,a):(Qs.d(1),Qs=Ks(s),Qs&&(Qs.c(),Qs.m(Is,null)))},i(s){_s||(w(a.$$.fragment,s),w(k.$$.fragment,s),w(Ts),w(os.$$.fragment,s),w(cs.$$.fragment,s),w(Ds),w(Rs.$$.fragment,s),w(Cs.$$.fragment,s),_s=!0)},o(s){x(a.$$.fragment,s),x(k.$$.fragment,s),x(Ts),x(os.$$.fragment,s),x(cs.$$.fragment,s),x(Ds),x(Rs.$$.fragment,s),x(Cs.$$.fragment,s),_s=!1},d(s){M(a),s&&i(r),s&&i(t),M(k),M(os),M(cs),Ws.d(),Ys[Ps].d(),s&&i(As),s&&i(Is),Qs.d(),s&&i(Vs),s&&i(Bs),M(Rs),s&&i(Fs),M(Cs,s),qs=!1,S(Ls)}}}const ts=I({featuredMods:s(V,{offset:0,limit:5}),mods:s(B)});let es="";function os(s,a,r){let t,e,o=N,n=()=>(o(),o=k(i,(s=>r(2,t=s))),i),c=N,l=()=>(c(),c=k(f,(s=>r(3,e=s))),f);s.$$.on_destroy.push((()=>o())),s.$$.on_destroy.push((()=>c()));let{featuredMods:f}=a;l();let{mods:i}=a;n(),j(f),j(i);return s.$$set=s=>{"featuredMods"in s&&l(r(0,f=s.featuredMods)),"mods"in s&&n(r(1,i=s.mods))},[f,i,t,e,()=>G(F+"/mods"),()=>G(F+"/mods")]}class ns extends a{constructor(s){super(),r(this,s,os,rs,t,{featuredMods:0,mods:1})}}export{ns as default,ts as load};
//# sourceMappingURL=index.svelte-732f3738.js.map