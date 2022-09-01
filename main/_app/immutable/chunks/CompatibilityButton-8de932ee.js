import{S as _,i as j,s as q,b as v,j as m,q as W,f as c,e as B,c as V,d as S,a7 as F,aS as y,aa as k,ab as x,a5 as G,ac as H,m as b,k as R,t as E,l as T,Z as P,a as C,_ as X,g as I,$ as w,a1 as A,aH as U,aA as Y,u as ee,ad as te,h as O,ae as ie,aF as se,aG as ae}from"./vendor-93f46a94.js";import{C as h}from"./graphql-8819e72c.js";function ne(n){let t;return{c(){t=B("div"),this.h()},l(s){t=V(s,"DIV",{class:!0}),S(t).forEach(c),this.h()},h(){F(t,"class","mod-outdated-stripe"),y(t,"mod-damaged",n[1]===h.Damaged),y(t,"mod-broken",n[1]===h.Broken),y(t,"mod-logo-outdated",n[0])},m(s,e){m(s,t,e)},p(s,e){e&2&&y(t,"mod-damaged",s[1]===h.Damaged),e&2&&y(t,"mod-broken",s[1]===h.Broken),e&1&&y(t,"mod-logo-outdated",s[0])},d(s){s&&c(t)}}}function oe(n){let t,s=!n[2]&&ne(n);return{c(){s&&s.c(),t=v()},l(e){s&&s.l(e),t=v()},m(e,i){s&&s.m(e,i),m(e,t,i)},p(e,[i]){e[2]||s.p(e,i)},i:W,o:W,d(e){s&&s.d(e),e&&c(t)}}}function re(n,t,s){let{compatibility:e}=t,{logo:i=!1}=t;function a(l){const f=l.EA.state;return f==h.Broken?f:f==h.Works||l.EXP.state!=h.Works?l.EXP.state:f}let r=h.Works;e&&(r=a(e));const u=r===h.Works;return n.$$set=l=>{"compatibility"in l&&s(3,e=l.compatibility),"logo"in l&&s(0,i=l.logo)},[i,r,u,e]}class Pe extends _{constructor(t){super(),j(this,t,re,oe,q,{compatibility:3,logo:0})}}function fe(n){let t,s,e;return{c(){t=B("p"),s=k(n[0]),this.h()},l(i){t=V(i,"P",{class:!0});var a=S(t);s=x(a,n[0]),a.forEach(c),this.h()},h(){F(t,"class",e=n[1](n[0])+" mod-state")},m(i,a){m(i,t,a),G(t,s)},p(i,[a]){a&1&&H(s,i[0]),a&1&&e!==(e=i[1](i[0])+" mod-state")&&F(t,"class",e)},i:W,o:W,d(i){i&&c(t)}}}function le(n,t,s){let{state:e}=t;const i=a=>`mod-state-${a.toString().toLowerCase()}`;return n.$$set=a=>{"state"in a&&s(0,e=a.state)},[e,i]}class Z extends _{constructor(t){super(),j(this,t,le,fe,q,{state:0})}}function z(n){let t,s,e,i,a,r,u,l,f,p,D;e=new Z({props:{state:n[0].EA.state}});let $=n[0].EA.note&&J(n);l=new Z({props:{state:n[0].EXP.state}});let g=n[0].EXP.note&&K(n);return{c(){t=B("div"),s=k("Early Access: "),P(e.$$.fragment),i=C(),$&&$.c(),a=C(),r=B("div"),u=k("Experimental: "),P(l.$$.fragment),f=C(),g&&g.c(),p=v()},l(o){t=V(o,"DIV",{});var d=S(t);s=x(d,"Early Access: "),X(e.$$.fragment,d),d.forEach(c),i=I(o),$&&$.l(o),a=I(o),r=V(o,"DIV",{});var N=S(r);u=x(N,"Experimental: "),X(l.$$.fragment,N),N.forEach(c),f=I(o),g&&g.l(o),p=v()},m(o,d){m(o,t,d),G(t,s),w(e,t,null),m(o,i,d),$&&$.m(o,d),m(o,a,d),m(o,r,d),G(r,u),w(l,r,null),m(o,f,d),g&&g.m(o,d),m(o,p,d),D=!0},p(o,d){const N={};d&1&&(N.state=o[0].EA.state),e.$set(N),o[0].EA.note?$?$.p(o,d):($=J(o),$.c(),$.m(a.parentNode,a)):$&&($.d(1),$=null);const L={};d&1&&(L.state=o[0].EXP.state),l.$set(L),o[0].EXP.note?g?g.p(o,d):(g=K(o),g.c(),g.m(p.parentNode,p)):g&&(g.d(1),g=null)},i(o){D||(b(e.$$.fragment,o),b(l.$$.fragment,o),D=!0)},o(o){E(e.$$.fragment,o),E(l.$$.fragment,o),D=!1},d(o){o&&c(t),A(e),o&&c(i),$&&$.d(o),o&&c(a),o&&c(r),A(l),o&&c(f),g&&g.d(o),o&&c(p)}}}function J(n){let t,s=n[0].EA.note+"",e;return{c(){t=k("Note: "),e=k(s)},l(i){t=x(i,"Note: "),e=x(i,s)},m(i,a){m(i,t,a),m(i,e,a)},p(i,a){a&1&&s!==(s=i[0].EA.note+"")&&H(e,s)},d(i){i&&c(t),i&&c(e)}}}function K(n){let t,s=n[0].EXP.note+"",e;return{c(){t=k("Note: "),e=k(s)},l(i){t=x(i,"Note: "),e=x(i,s)},m(i,a){m(i,t,a),m(i,e,a)},p(i,a){a&1&&s!==(s=i[0].EXP.note+"")&&H(e,s)},d(i){i&&c(t),i&&c(e)}}}function ce(n){let t,s,e=n[0]&&z(n);return{c(){e&&e.c(),t=v()},l(i){e&&e.l(i),t=v()},m(i,a){e&&e.m(i,a),m(i,t,a),s=!0},p(i,[a]){i[0]?e?(e.p(i,a),a&1&&b(e,1)):(e=z(i),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(R(),E(e,1,1,()=>{e=null}),T())},i(i){s||(b(e),s=!0)},o(i){E(e),s=!1},d(i){e&&e.d(i),i&&c(t)}}}function me(n,t,s){let{compatibility:e}=t;return n.$$set=i=>{"compatibility"in i&&s(0,e=i.compatibility)},[e]}class $e extends _{constructor(t){super(),j(this,t,me,ce,q,{compatibility:0})}}function ue(n){let t,s;return{c(){t=B("p"),s=k(n[1]),this.h()},l(e){t=V(e,"P",{class:!0});var i=S(t);s=x(i,n[1]),i.forEach(c),this.h()},h(){F(t,"class","material-icons text-base"),y(t,"mod-state-works",n[0].state===h.Works),y(t,"mod-state-damaged",n[0].state===h.Damaged),y(t,"mod-state-broken",n[0].state===h.Broken)},m(e,i){m(e,t,i),G(t,s)},p(e,[i]){i&2&&H(s,e[1]),i&1&&y(t,"mod-state-works",e[0].state===h.Works),i&1&&y(t,"mod-state-damaged",e[0].state===h.Damaged),i&1&&y(t,"mod-state-broken",e[0].state===h.Broken)},i:W,o:W,d(e){e&&c(t)}}}function pe(n,t,s){let{compatibility:e}=t,{EXP:i=!1}=t,a="rocket_launch";return i&&(a="science"),n.$$set=r=>{"compatibility"in r&&s(0,e=r.compatibility),"EXP"in r&&s(2,i=r.EXP)},[e,a,i]}class M extends _{constructor(t){super(),j(this,t,pe,ue,q,{compatibility:0,EXP:2})}}function Q(n){let t,s,e,i,a,r;t=new U({props:{class:"min-w-0 m-0",title:"Compatibility information",$$slots:{default:[de]},$$scope:{ctx:n}}}),t.$on("click",n[2]);function u(f){n[3](f)}let l={$$slots:{default:[be]},$$scope:{ctx:n}};return n[1]!==void 0&&(l.open=n[1]),i=new Y({props:l}),ee.push(()=>te(i,"open",u)),{c(){s=B("div"),P(t.$$.fragment),e=C(),P(i.$$.fragment),this.h()},l(f){s=V(f,"DIV",{style:!0});var p=S(s);X(t.$$.fragment,p),e=I(f),X(i.$$.fragment,f),this.h()},h(){O(s,"display","contents"),O(s,"--mdc-text-button-container-height","20px")},m(f,p){m(f,s,p),w(t,s,null),m(f,e,p),w(i,f,p),r=!0},p(f,p){const D={};p&17&&(D.$$scope={dirty:p,ctx:f}),t.$set(D);const $={};p&17&&($.$$scope={dirty:p,ctx:f}),!a&&p&2&&(a=!0,$.open=f[1],ie(()=>a=!1)),i.$set($)},i(f){r||(b(t.$$.fragment,f),b(i.$$.fragment,f),r=!0)},o(f){E(t.$$.fragment,f),E(i.$$.fragment,f),r=!1},d(f){f&&c(s),A(t,f),f&&c(e),A(i,f)}}}function de(n){let t,s,e,i;return t=new M({props:{compatibility:n[0].EA}}),e=new M({props:{compatibility:n[0].EXP,EXP:!0}}),{c(){P(t.$$.fragment),s=C(),P(e.$$.fragment)},l(a){X(t.$$.fragment,a),s=I(a),X(e.$$.fragment,a)},m(a,r){w(t,a,r),m(a,s,r),w(e,a,r),i=!0},p(a,r){const u={};r&1&&(u.compatibility=a[0].EA),t.$set(u);const l={};r&1&&(l.compatibility=a[0].EXP),e.$set(l)},i(a){i||(b(t.$$.fragment,a),b(e.$$.fragment,a),i=!0)},o(a){E(t.$$.fragment,a),E(e.$$.fragment,a),i=!1},d(a){A(t,a),a&&c(s),A(e,a)}}}function ge(n){let t;return{c(){t=k("Compatibility Information")},l(s){t=x(s,"Compatibility Information")},m(s,e){m(s,t,e)},d(s){s&&c(t)}}}function he(n){let t,s;return t=new $e({props:{compatibility:n[0]}}),{c(){P(t.$$.fragment)},l(e){X(t.$$.fragment,e)},m(e,i){w(t,e,i),s=!0},p(e,i){const a={};i&1&&(a.compatibility=e[0]),t.$set(a)},i(e){s||(b(t.$$.fragment,e),s=!0)},o(e){E(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function be(n){let t,s,e,i;return t=new se({props:{$$slots:{default:[ge]},$$scope:{ctx:n}}}),e=new ae({props:{$$slots:{default:[he]},$$scope:{ctx:n}}}),{c(){P(t.$$.fragment),s=C(),P(e.$$.fragment)},l(a){X(t.$$.fragment,a),s=I(a),X(e.$$.fragment,a)},m(a,r){w(t,a,r),m(a,s,r),w(e,a,r),i=!0},p(a,r){const u={};r&16&&(u.$$scope={dirty:r,ctx:a}),t.$set(u);const l={};r&17&&(l.$$scope={dirty:r,ctx:a}),e.$set(l)},i(a){i||(b(t.$$.fragment,a),b(e.$$.fragment,a),i=!0)},o(a){E(t.$$.fragment,a),E(e.$$.fragment,a),i=!1},d(a){A(t,a),a&&c(s),A(e,a)}}}function Ee(n){let t,s,e=n[0]&&Q(n);return{c(){e&&e.c(),t=v()},l(i){e&&e.l(i),t=v()},m(i,a){e&&e.m(i,a),m(i,t,a),s=!0},p(i,[a]){i[0]?e?(e.p(i,a),a&1&&b(e,1)):(e=Q(i),e.c(),b(e,1),e.m(t.parentNode,t)):e&&(R(),E(e,1,1,()=>{e=null}),T())},i(i){s||(b(e),s=!0)},o(i){E(e),s=!1},d(i){e&&e.d(i),i&&c(t)}}}function ye(n,t,s){let e=!1,{compatibility:i}=t;const a=()=>{s(1,e=!0)};function r(u){e=u,s(1,e)}return n.$$set=u=>{"compatibility"in u&&s(0,i=u.compatibility)},[i,e,a,r]}class Xe extends _{constructor(t){super(),j(this,t,ye,Ee,q,{compatibility:0})}}export{Xe as C,Pe as O};
//# sourceMappingURL=CompatibilityButton-8de932ee.js.map
