import{S as q,i as z,s as G,Z as b,_ as w,$ as x,m as $,t as d,a1 as v,aR as B,e as E,aa as I,a as M,c as k,d as D,ab as N,f as n,g as O,a7 as A,j as V,a5 as y,ac as R,k as H,l as J,b1 as K}from"./vendor-93f46a94.js";import{b as Z}from"./paths-1c47712a.js";import{F as L}from"./FicsitCard-e155e469.js";import{i as Q}from"./launcher-0869f499.js";import{a as S}from"./formatting-b1e7d458.js";import{C as T,O as U}from"./CompatibilityButton-8de932ee.js";function W(r){let e;return{c(){e=I("visibility")},l(i){e=N(i,"visibility")},m(i,t){V(i,e,t)},d(i){i&&n(e)}}}function X(r){let e;return{c(){e=I("download")},l(i){e=N(i,"download")},m(i,t){V(i,e,t)},d(i){i&&n(e)}}}function Y(r){let e,i,t,s=S(r[0].views)+"",a,f,u,c,_=S(r[0].downloads)+"",P,j,m,p;return t=new B({props:{class:"material-icons align-middle text-sm mr-1",$$slots:{default:[W]},$$scope:{ctx:r}}}),c=new B({props:{class:"material-icons align-middle text-sm mr-1",$$slots:{default:[X]},$$scope:{ctx:r}}}),m=new T({props:{compatibility:r[0].compatibility}}),{c(){e=E("div"),i=E("span"),b(t.$$.fragment),a=I(s),f=M(),u=E("span"),b(c.$$.fragment),P=I(_),j=M(),b(m.$$.fragment),this.h()},l(o){e=k(o,"DIV",{slot:!0});var l=D(e);i=k(l,"SPAN",{});var g=D(i);w(t.$$.fragment,g),a=N(g,s),g.forEach(n),f=O(l),u=k(l,"SPAN",{});var h=D(u);w(c.$$.fragment,h),P=N(h,_),h.forEach(n),j=O(l),w(m.$$.fragment,l),l.forEach(n),this.h()},h(){A(e,"slot","stats")},m(o,l){V(o,e,l),y(e,i),x(t,i,null),y(i,a),y(e,f),y(e,u),x(c,u,null),y(u,P),y(e,j),x(m,e,null),p=!0},p(o,l){const g={};l&8&&(g.$$scope={dirty:l,ctx:o}),t.$set(g),(!p||l&1)&&s!==(s=S(o[0].views)+"")&&R(a,s);const h={};l&8&&(h.$$scope={dirty:l,ctx:o}),c.$set(h),(!p||l&1)&&_!==(_=S(o[0].downloads)+"")&&R(P,_);const F={};l&1&&(F.compatibility=o[0].compatibility),m.$set(F)},i(o){p||($(t.$$.fragment,o),$(c.$$.fragment,o),$(m.$$.fragment,o),p=!0)},o(o){d(t.$$.fragment,o),d(c.$$.fragment,o),d(m.$$.fragment,o),p=!1},d(o){o&&n(e),v(t),v(c),v(m)}}}function C(r){let e,i;return e=new K({props:{class:"material-icons",title:"Install",$$slots:{default:[tt]},$$scope:{ctx:r}}}),e.$on("click",r[2]),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){x(e,t,s),i=!0},p(t,s){const a={};s&8&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||($(e.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),i=!1},d(t){v(e,t)}}}function tt(r){let e;return{c(){e=I("download")},l(i){e=N(i,"download")},m(i,t){V(i,e,t)},d(i){i&&n(e)}}}function et(r){let e,i,t=r[1]&&C(r);return{c(){e=E("div"),t&&t.c(),this.h()},l(s){e=k(s,"DIV",{slot:!0});var a=D(e);t&&t.l(a),a.forEach(n),this.h()},h(){A(e,"slot","actions")},m(s,a){V(s,e,a),t&&t.m(e,null),i=!0},p(s,a){s[1]?t?(t.p(s,a),a&2&&$(t,1)):(t=C(s),t.c(),$(t,1),t.m(e,null)):t&&(H(),d(t,1,1,()=>{t=null}),J())},i(s){i||($(t),i=!0)},o(s){d(t),i=!1},d(s){s&&n(e),t&&t.d()}}}function it(r){let e,i,t;return i=new U({props:{compatibility:r[0].compatibility}}),{c(){e=E("div"),b(i.$$.fragment),this.h()},l(s){e=k(s,"DIV",{slot:!0});var a=D(e);w(i.$$.fragment,a),a.forEach(n),this.h()},h(){A(e,"slot","outer")},m(s,a){V(s,e,a),x(i,e,null),t=!0},p(s,a){const f={};a&1&&(f.compatibility=s[0].compatibility),i.$set(f)},i(s){t||($(i.$$.fragment,s),t=!0)},o(s){d(i.$$.fragment,s),t=!1},d(s){s&&n(e),v(i)}}}function st(r){let e,i;return e=new L({props:{name:r[0].name,link:Z+"/mod/"+r[0].mod_reference,logo:r[0].logo,description:r[0].short_description,$$slots:{outer:[it],actions:[et],stats:[Y]},$$scope:{ctx:r}}}),{c(){b(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){x(e,t,s),i=!0},p(t,[s]){const a={};s&1&&(a.name=t[0].name),s&1&&(a.link=Z+"/mod/"+t[0].mod_reference),s&1&&(a.logo=t[0].logo),s&1&&(a.description=t[0].short_description),s&11&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){i||($(e.$$.fragment,t),i=!0)},o(t){d(e.$$.fragment,t),i=!1},d(t){v(e,t)}}}function at(r,e,i){let t,{mod:s}=e;const a=()=>Q(s.mod_reference);return r.$$set=f=>{"mod"in f&&i(0,s=f.mod)},r.$$.update=()=>{r.$$.dirty&1&&i(1,t="latestVersions"in s?s.latestVersions.alpha||s.latestVersions.beta||s.latestVersions.release:!1)},[s,t,a]}class ct extends q{constructor(e){super(),z(this,e,at,st,G,{mod:0})}}export{ct as M};
//# sourceMappingURL=ModCard-a30b1cd8.js.map
