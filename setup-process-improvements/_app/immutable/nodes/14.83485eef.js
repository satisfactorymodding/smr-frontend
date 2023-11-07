import{S as vn,i as Hn,d as p,s as Tn,bo as J,v as Mn,bp as V,a8 as _,a6 as B,x as k,L as D,bi as Sn,ab as I,q as d,a9 as L,y as w,z as b,N as G,ac as T,C as y,ae as P,l as f,ad as M,p as A,t as U,aj as N,bq as O,br as z,k as S,an as X,af as Rn,P as h,a$ as K,bx as Bn,by as Ln,b0 as Cn}from"../chunks/vendor.4a364ea3.js";import{m as j}from"../chunks/markdown.eff218db.js";import{v as Z}from"../chunks/uplugin.b5835a48.js";import{M as en}from"../chunks/MetaDescriptors.48975de2.js";const $="src/routes/help/+page.svelte";function nn(s,n,r){const t=s.slice();return t[8]=n[r],t}function tn(s){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:tn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:s}),n}function on(s){let n,r=s[12]+"",t;const i={c:function(){n=new Bn(!1),t=S(),this.h()},l:function(o){n=Ln(o,!1),t=S(),this.h()},h:function(){n.a=t},m:function(o,a){n.m(r,o,a),f(o,t,a)},p:h,d:function(o){o&&d(t),o&&n.d()}};return p("SvelteRegisterBlock",{block:i,id:on.name,type:"then",source:"(395:79)              {@html exampleUPluginJsonRendered}",ctx:s}),i}function sn(s){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:sn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:s}),n}function rn(s){let n,r,t,i,e={ctx:s,current:null,token:null,hasCatch:!1,pending:sn,then:on,catch:tn,value:12};O(j(s[2]),e);const o={c:function(){n=k("h3"),r=D("<mod>.uplugin format"),t=B(),i=k("div"),e.block.c(),this.h()},l:function(l){n=w(l,"H3",{class:!0});var c=b(n);r=G(c,"<mod>.uplugin format"),c.forEach(d),t=L(l),i=w(l,"DIV",{class:!0});var v=b(i);e.block.l(v),v.forEach(d),this.h()},h:function(){T(n,"class","text-2xl my-4 font-bold"),y(n,$,392,8,10785),T(i,"class","markdown-content"),y(i,$,393,8,10861)},m:function(l,c){f(l,n,c),M(n,r),f(l,t,c),f(l,i,c),e.block.m(i,e.anchor=null),e.mount=()=>i,e.anchor=null},p:function(l,c){s=l,z(e,s,c)},d:function(l){l&&d(n),l&&d(t),l&&d(i),e.block.d(),e.token=null,e=null}};return p("SvelteRegisterBlock",{block:o,id:rn.name,type:"slot",source:"(392:6) <Content>",ctx:s}),o}function an(s){let n,r;n=new V({props:{$$slots:{default:[rn]},$$scope:{ctx:s}},$$inline:!0});const t={c:function(){_(n.$$.fragment)},l:function(e){I(n.$$.fragment,e)},m:function(e,o){P(n,e,o),r=!0},p:function(e,o){const a={};o&8192&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i:function(e){r||(A(n.$$.fragment,e),r=!0)},o:function(e){U(n.$$.fragment,e),r=!1},d:function(e){N(n,e)}};return p("SvelteRegisterBlock",{block:t,id:an.name,type:"slot",source:"(391:4) <Card>",ctx:s}),t}function F(s){let n,r,t={ctx:s,current:null,token:null,hasCatch:!1,pending:fn,then:cn,catch:ln,value:7};O(r=s[1],t);const i={c:function(){n=S(),t.block.c()},l:function(o){n=S(),t.block.l(o)},m:function(o,a){f(o,n,a),t.block.m(o,t.anchor=a),t.mount=()=>n.parentNode,t.anchor=n},p:function(o,a){s=o,t.ctx=s,a&2&&r!==(r=s[1])&&O(r,t)||z(t,s,a)},d:function(o){o&&d(n),t.block.d(o),t.token=null,t=null}};return p("SvelteRegisterBlock",{block:i,id:F.name,type:"if",source:"(410:8) {#if uPluginJsonInput !== ''}",ctx:s}),i}function ln(s){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:ln.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:s}),n}function cn(s){let n;function r(o,a){return o[7].length===0?hn:un}let t=r(s),i=t(s);const e={c:function(){i.c(),n=S()},l:function(a){i.l(a),n=S()},m:function(a,l){i.m(a,l),f(a,n,l)},p:function(a,l){t===(t=r(a))&&i?i.p(a,l):(i.d(1),i=t(a),i&&(i.c(),i.m(n.parentNode,n)))},d:function(a){i.d(a),a&&d(n)}};return p("SvelteRegisterBlock",{block:e,id:cn.name,type:"then",source:"(413:10) {:then errors}",ctx:s}),e}function un(s){let n,r=s[7];K(r);let t=[];for(let e=0;e<r.length;e+=1)t[e]=Y(nn(s,r,e));const i={c:function(){n=k("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l:function(o){n=w(o,"UL",{});var a=b(n);for(let l=0;l<t.length;l+=1)t[l].l(a);a.forEach(d),this.h()},h:function(){y(n,$,416,14,11636)},m:function(o,a){f(o,n,a);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,null)},p:function(o,a){if(a&2){r=o[7],K(r);let l;for(l=0;l<r.length;l+=1){const c=nn(o,r,l);t[l]?t[l].p(c,a):(t[l]=Y(c),t[l].c(),t[l].m(n,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},d:function(o){o&&d(n),Cn(t,o)}};return p("SvelteRegisterBlock",{block:i,id:un.name,type:"else",source:"(416:12) {:else}",ctx:s}),i}function hn(s){let n,r;const t={c:function(){n=k("h3"),r=D("<mod>.uplugin valid!"),this.h()},l:function(e){n=w(e,"H3",{class:!0});var o=b(n);r=G(o,"<mod>.uplugin valid!"),o.forEach(d),this.h()},h:function(){T(n,"class","text-2xl my-4 font-bold"),y(n,$,414,14,11534)},m:function(e,o){f(e,n,o),M(n,r)},p:h,d:function(e){e&&d(n)}};return p("SvelteRegisterBlock",{block:t,id:hn.name,type:"if",source:"(414:12) {#if errors.length === 0}",ctx:s}),t}function dn(s){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:dn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:s}),n}function pn(s){let n,r=s[11]+"",t;const i={c:function(){n=k("li"),t=B(),this.h()},l:function(o){n=w(o,"LI",{class:!0});var a=b(n);a.forEach(d),t=L(o),this.h()},h:function(){T(n,"class","markdown-content"),y(n,$,419,20,11757)},m:function(o,a){f(o,n,a),n.innerHTML=r,f(o,t,a)},p:function(o,a){a&2&&r!==(r=o[11]+"")&&(n.innerHTML=r)},d:function(o){o&&d(n),o&&d(t)}};return p("SvelteRegisterBlock",{block:i,id:pn.name,type:"then",source:'(419:57)                      <li class=\\"markdown-content\\">{@html errRendered}',ctx:s}),i}function mn(s){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:mn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:s}),n}function Y(s){let n,r,t={ctx:s,current:null,token:null,hasCatch:!1,pending:mn,then:pn,catch:dn,value:11};O(r=j(s[8]),t);const i={c:function(){n=S(),t.block.c()},l:function(o){n=S(),t.block.l(o)},m:function(o,a){f(o,n,a),t.block.m(o,t.anchor=a),t.mount=()=>n.parentNode,t.anchor=n},p:function(o,a){s=o,t.ctx=s,a&2&&r!==(r=j(s[8]))&&O(r,t)||z(t,s,a)},d:function(o){o&&d(n),t.block.d(o),t.token=null,t=null}};return p("SvelteRegisterBlock",{block:i,id:Y.name,type:"each",source:"(418:16) {#each errors as err}",ctx:s}),i}function fn(s){let n,r;const t={c:function(){n=k("p"),r=D("Loading..."),this.h()},l:function(e){n=w(e,"P",{});var o=b(n);r=G(o,"Loading..."),o.forEach(d),this.h()},h:function(){y(n,$,411,12,11439)},m:function(e,o){f(e,n,o),M(n,r)},p:h,d:function(e){e&&d(n)}};return p("SvelteRegisterBlock",{block:t,id:fn.name,type:"pending",source:"(411:32)              <p>Loading...</p>           {:then errors}",ctx:s}),t}function gn(s){let n,r,t,i,e,o,a,l,c=s[0]!==""&&F(s);const v={c:function(){n=k("h3"),r=D("Validate your <mod>.uplugin"),t=B(),i=k("textarea"),e=B(),c&&c.c(),o=S(),this.h()},l:function(u){n=w(u,"H3",{class:!0});var g=b(n);r=G(g,"Validate your <mod>.uplugin"),g.forEach(d),t=L(u),i=w(u,"TEXTAREA",{placeholder:!0,rows:!0,class:!0}),b(i).forEach(d),e=L(u),c&&c.l(u),o=S(),this.h()},h:function(){T(n,"class","text-2xl my-4 font-bold"),y(n,$,403,8,11118),T(i,"placeholder","enter your <mod>.uplugin"),T(i,"rows","23"),T(i,"class","markdownEditor"),y(i,$,404,8,11201)},m:function(u,g){f(u,n,g),M(n,r),f(u,t,g),f(u,i,g),X(i,s[0]),f(u,e,g),c&&c.m(u,g),f(u,o,g),a||(l=Rn(i,"input",s[4]),a=!0)},p:function(u,g){g&1&&X(i,u[0]),u[0]!==""?c?c.p(u,g):(c=F(u),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},d:function(u){u&&d(n),u&&d(t),u&&d(i),u&&d(e),c&&c.d(u),u&&d(o),a=!1,l()}};return p("SvelteRegisterBlock",{block:v,id:gn.name,type:"slot",source:"(403:6) <Content>",ctx:s}),v}function kn(s){let n,r;n=new V({props:{$$slots:{default:[gn]},$$scope:{ctx:s}},$$inline:!0});const t={c:function(){_(n.$$.fragment)},l:function(e){I(n.$$.fragment,e)},m:function(e,o){P(n,e,o),r=!0},p:function(e,o){const a={};o&8195&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i:function(e){r||(A(n.$$.fragment,e),r=!0)},o:function(e){U(n.$$.fragment,e),r=!1},d:function(e){N(n,e)}};return p("SvelteRegisterBlock",{block:t,id:kn.name,type:"slot",source:"(402:4) <Card>",ctx:s}),t}function wn(s){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:wn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:s}),n}function bn(s){let n,r=s[6]+"";const t={c:function(){n=k("p"),this.h()},l:function(e){n=w(e,"P",{});var o=b(n);o.forEach(d),this.h()},h:function(){y(n,$,435,10,12150)},m:function(e,o){f(e,n,o),n.innerHTML=r},p:h,d:function(e){e&&d(n)}};return p("SvelteRegisterBlock",{block:t,id:bn.name,type:"then",source:"(435:55)            <p>{@html markdownHtmlRendered}",ctx:s}),t}function yn(s){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:yn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:s}),n}function $n(s){let n,r={ctx:s,current:null,token:null,hasCatch:!1,pending:yn,then:bn,catch:wn,value:6};O(s[3],r);const t={c:function(){n=k("div"),r.block.c(),this.h()},l:function(e){n=w(e,"DIV",{class:!0});var o=b(n);r.block.l(o),o.forEach(d),this.h()},h:function(){T(n,"class","markdown-content"),y(n,$,433,6,12053)},m:function(e,o){f(e,n,o),r.block.m(n,r.anchor=null),r.mount=()=>n,r.anchor=null},p:function(e,o){s=e,z(r,s,o)},d:function(e){e&&d(n),r.block.d(),r.token=null,r=null}};return p("SvelteRegisterBlock",{block:t,id:$n.name,type:"slot",source:"(433:4) <Content>",ctx:s}),t}function xn(s){let n,r;n=new V({props:{$$slots:{default:[$n]},$$scope:{ctx:s}},$$inline:!0});const t={c:function(){_(n.$$.fragment)},l:function(e){I(n.$$.fragment,e)},m:function(e,o){P(n,e,o),r=!0},p:function(e,o){const a={};o&8192&&(a.$$scope={dirty:o,ctx:e}),n.$set(a)},i:function(e){r||(A(n.$$.fragment,e),r=!0)},o:function(e){U(n.$$.fragment,e),r=!1},d:function(e){N(n,e)}};return p("SvelteRegisterBlock",{block:t,id:xn.name,type:"slot",source:"(432:2) <Card>",ctx:s}),t}function Q(s){let n,r,t,i,e,o,a,l,c,v,H,u,g;n=new en({props:{description:"Help for submitting modules to the Satsifactory Mod Repository",title:"Help"},$$inline:!0}),e=new J({props:{$$slots:{default:[an]},$$scope:{ctx:s}},$$inline:!0}),a=new J({props:{$$slots:{default:[kn]},$$scope:{ctx:s}},$$inline:!0}),u=new J({props:{$$slots:{default:[xn]},$$scope:{ctx:s}},$$inline:!0});const W={c:function(){_(n.$$.fragment),r=B(),t=k("div"),i=k("div"),_(e.$$.fragment),o=B(),_(a.$$.fragment),l=B(),c=k("h1"),v=D("Markdown"),H=B(),_(u.$$.fragment),this.h()},l:function(m){const x=Sn("svelte-13ontw3",document.head);I(n.$$.fragment,x),x.forEach(d),r=L(m),t=w(m,"DIV",{});var R=b(t);i=w(R,"DIV",{class:!0});var E=b(i);I(e.$$.fragment,E),o=L(E),I(a.$$.fragment,E),E.forEach(d),l=L(R),c=w(R,"H1",{class:!0});var q=b(c);v=G(q,"Markdown"),q.forEach(d),H=L(R),I(u.$$.fragment,R),R.forEach(d),this.h()},h:function(){document.title="Help - SMR",T(i,"class","grid gap-4 grid-flow-col grid-cols-2"),y(i,$,389,2,10699),T(c,"class","text-4xl my-4 font-bold"),y(c,$,430,2,11974),y(t,$,388,0,10691)},m:function(m,x){P(n,document.head,null),f(m,r,x),f(m,t,x),M(t,i),P(e,i,null),M(i,o),P(a,i,null),M(t,l),M(t,c),M(c,v),M(t,H),P(u,t,null),g=!0},p:function(m,[x]){const R={};x&8192&&(R.$$scope={dirty:x,ctx:m}),e.$set(R);const E={};x&8195&&(E.$$scope={dirty:x,ctx:m}),a.$set(E);const q={};x&8192&&(q.$$scope={dirty:x,ctx:m}),u.$set(q)},i:function(m){g||(A(n.$$.fragment,m),A(e.$$.fragment,m),A(a.$$.fragment,m),A(u.$$.fragment,m),g=!0)},o:function(m){U(n.$$.fragment,m),U(e.$$.fragment,m),U(a.$$.fragment,m),U(u.$$.fragment,m),g=!1},d:function(m){N(n),m&&d(r),m&&d(t),N(e),N(a),N(u)}};return p("SvelteRegisterBlock",{block:W,id:Q.name,type:"component",source:"",ctx:s}),W}function En(s,n,r){let t,{$$slots:i={},$$scope:e}=n;Mn("Page",i,[]);const o="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",a=`
## Headers

\`\`\`markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
\`\`\`

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

## Emphasis

\`\`\`markdown
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
\`\`\`

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


## Lists

\`\`\`markdown
1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
\`\`\`

1. First ordered list item
2. Another item
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
  1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.
   Note that this line is separate, but within the same paragraph.
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Links

There are two ways to create links.

\`\`\`markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
\`\`\`

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

\`\`\`markdown
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
\`\`\`

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

\`\`\`markdown
Inline \`code\` has \`back-ticks around\` it.
\`\`\`

Inline \`code\` has \`back-ticks around\` it.

Blocks of code are either fenced by lines with three back-ticks <code>\`\`\`</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

<pre lang="markdown"><code>\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a &lt;b&gt;tag&lt;/b&gt;.
\`\`\`
</code></pre>



\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
But let's throw in a <b>tag</b>.
\`\`\`


## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

\`\`\`markdown
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

## Blockquotes

\`\`\`markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
\`\`\`

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

\`\`\`html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
\`\`\`

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Horizontal Rule

\`\`\`markdown
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
\`\`\`

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens.
To add more than 1 empty line, use the html break tag.

Here are some things to try out:

\`\`\`html
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

<br><br><br>

This line is way far down
\`\`\`

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

<br><br><br>

This line is way far down

(Technical note: *Markdown Here* uses GFM line breaks, so there's no need to use MD's two-space line breaks.)
`,l=j(a);let c="";const v=[];Object.keys(n).forEach(u=>{!~v.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<Page> was created with unknown prop '${u}'`)});function H(){c=this.value,r(0,c)}return s.$capture_state=()=>({markdown:j,validateUPluginJson:Z,MetaDescriptors:en,Card:J,Content:V,exampleUPluginJson:o,typescriptMarkdown:a,markdownHtml:l,uPluginJsonInput:c,upluginErrors:t}),s.$inject_state=u=>{"uPluginJsonInput"in u&&r(0,c=u.uPluginJsonInput),"upluginErrors"in u&&r(1,t=u.upluginErrors)},n&&"$$inject"in n&&s.$inject_state(n.$$inject),s.$$.update=()=>{s.$$.dirty&1&&r(1,t=Z(c))},[c,t,o,l,H]}class Un extends vn{constructor(n){super(n),Hn(this,n,En,Q,Tn,{}),p("SvelteRegisterComponent",{component:this,tagName:"Page",options:n,id:Q.name})}}export{Un as component};
//# sourceMappingURL=14.83485eef.js.map
