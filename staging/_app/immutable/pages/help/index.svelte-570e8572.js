import{S as vn,i as Hn,d as p,bf as G,s as Tn,bg as J,a7 as C,f as B,e as k,af as D,b0 as Mn,a8 as I,k as d,l as L,h as w,j as b,ag as V,ac as T,n as y,a9 as A,p as f,ad as M,u as P,t as U,ab as O,v as Sn,bh as N,bi as Y,g as S,Y as X,W as Rn,x as h,aV as K,bl as Bn,bm as Ln,aW as En}from"../../chunks/vendor-71586dff.js";import{m as q}from"../../chunks/markdown-f8c8918c.js";import{v as Z}from"../../chunks/uplugin-730f616e.js";import{M as en}from"../../chunks/MetaDescriptors-51ef3627.js";import"../../chunks/extras-71f1917d.js";import"../../chunks/api-914d5f30.js";import"../../chunks/user-aa766597.js";import"../../chunks/stores-b24fbbcb.js";import"../../chunks/paths-396f020f.js";const $="src/routes/help/index.svelte";function nn(r,n,s){const o=r.slice();return o[8]=n[s],o}function tn(r){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:tn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),n}function on(r){let n,s=r[12]+"",o;const i={c:function(){n=new Bn(!1),o=S(),this.h()},l:function(t){n=Ln(t,!1),o=S(),this.h()},h:function(){n.a=o},m:function(t,a){n.m(s,t,a),f(t,o,a)},p:h,d:function(t){t&&d(o),t&&n.d()}};return p("SvelteRegisterBlock",{block:i,id:on.name,type:"then",source:"(395:79)              {@html exampleUPluginJsonRendered}",ctx:r}),i}function rn(r){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:rn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),n}function sn(r){let n,s,o,i,e={ctx:r,current:null,token:null,hasCatch:!1,pending:rn,then:on,catch:tn,value:12};N(q(r[2]),e);const t={c:function(){n=k("h3"),s=D("<mod>.uplugin format"),o=B(),i=k("div"),e.block.c(),this.h()},l:function(l){n=w(l,"H3",{class:!0});var c=b(n);s=V(c,"<mod>.uplugin format"),c.forEach(d),o=L(l),i=w(l,"DIV",{class:!0});var v=b(i);e.block.l(v),v.forEach(d),this.h()},h:function(){T(n,"class","text-2xl my-4 font-bold"),y(n,$,392,8,10785),T(i,"class","markdown-content"),y(i,$,393,8,10861)},m:function(l,c){f(l,n,c),M(n,s),f(l,o,c),f(l,i,c),e.block.m(i,e.anchor=null),e.mount=()=>i,e.anchor=null},p:function(l,c){r=l,Y(e,r,c)},d:function(l){l&&d(n),l&&d(o),l&&d(i),e.block.d(),e.token=null,e=null}};return p("SvelteRegisterBlock",{block:t,id:sn.name,type:"slot",source:"(392:6) <Content>",ctx:r}),t}function an(r){let n,s;n=new J({props:{$$slots:{default:[sn]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){C(n.$$.fragment)},l:function(e){I(n.$$.fragment,e)},m:function(e,t){A(n,e,t),s=!0},p:function(e,t){const a={};t&8192&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i:function(e){s||(P(n.$$.fragment,e),s=!0)},o:function(e){U(n.$$.fragment,e),s=!1},d:function(e){O(n,e)}};return p("SvelteRegisterBlock",{block:o,id:an.name,type:"slot",source:"(391:4) <Card>",ctx:r}),o}function F(r){let n,s,o={ctx:r,current:null,token:null,hasCatch:!1,pending:fn,then:cn,catch:ln,value:7};N(s=r[1],o);const i={c:function(){n=S(),o.block.c()},l:function(t){n=S(),o.block.l(t)},m:function(t,a){f(t,n,a),o.block.m(t,o.anchor=a),o.mount=()=>n.parentNode,o.anchor=n},p:function(t,a){r=t,o.ctx=r,a&2&&s!==(s=r[1])&&N(s,o)||Y(o,r,a)},d:function(t){t&&d(n),o.block.d(t),o.token=null,o=null}};return p("SvelteRegisterBlock",{block:i,id:F.name,type:"if",source:"(411:8) {#if uPluginJsonInput !== ''}",ctx:r}),i}function ln(r){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:ln.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),n}function cn(r){let n;function s(t,a){return t[7].length===0?hn:un}let o=s(r),i=o(r);const e={c:function(){i.c(),n=S()},l:function(a){i.l(a),n=S()},m:function(a,l){i.m(a,l),f(a,n,l)},p:function(a,l){o===(o=s(a))&&i?i.p(a,l):(i.d(1),i=o(a),i&&(i.c(),i.m(n.parentNode,n)))},d:function(a){i.d(a),a&&d(n)}};return p("SvelteRegisterBlock",{block:e,id:cn.name,type:"then",source:"(414:10) {:then errors}",ctx:r}),e}function un(r){let n,s=r[7];K(s);let o=[];for(let e=0;e<s.length;e+=1)o[e]=z(nn(r,s,e));const i={c:function(){n=k("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){n=w(t,"UL",{});var a=b(n);for(let l=0;l<o.length;l+=1)o[l].l(a);a.forEach(d),this.h()},h:function(){y(n,$,417,14,11644)},m:function(t,a){f(t,n,a);for(let l=0;l<o.length;l+=1)o[l].m(n,null)},p:function(t,a){if(a&2){s=t[7],K(s);let l;for(l=0;l<s.length;l+=1){const c=nn(t,s,l);o[l]?o[l].p(c,a):(o[l]=z(c),o[l].c(),o[l].m(n,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=s.length}},d:function(t){t&&d(n),En(o,t)}};return p("SvelteRegisterBlock",{block:i,id:un.name,type:"else",source:"(417:12) {:else}",ctx:r}),i}function hn(r){let n,s;const o={c:function(){n=k("h3"),s=D("<mod>.uplugin valid!"),this.h()},l:function(e){n=w(e,"H3",{class:!0});var t=b(n);s=V(t,"<mod>.uplugin valid!"),t.forEach(d),this.h()},h:function(){T(n,"class","text-2xl my-4 font-bold"),y(n,$,415,14,11542)},m:function(e,t){f(e,n,t),M(n,s)},p:h,d:function(e){e&&d(n)}};return p("SvelteRegisterBlock",{block:o,id:hn.name,type:"if",source:"(415:12) {#if errors.length === 0}",ctx:r}),o}function dn(r){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:dn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),n}function pn(r){let n,s=r[11]+"",o;const i={c:function(){n=k("li"),o=B(),this.h()},l:function(t){n=w(t,"LI",{class:!0});var a=b(n);a.forEach(d),o=L(t),this.h()},h:function(){T(n,"class","markdown-content"),y(n,$,420,20,11765)},m:function(t,a){f(t,n,a),n.innerHTML=s,f(t,o,a)},p:function(t,a){a&2&&s!==(s=t[11]+"")&&(n.innerHTML=s)},d:function(t){t&&d(n),t&&d(o)}};return p("SvelteRegisterBlock",{block:i,id:pn.name,type:"then",source:'(420:57)                      <li class=\\"markdown-content\\">{@html errRendered}',ctx:r}),i}function mn(r){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:mn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),n}function z(r){let n,s,o={ctx:r,current:null,token:null,hasCatch:!1,pending:mn,then:pn,catch:dn,value:11};N(s=q(r[8]),o);const i={c:function(){n=S(),o.block.c()},l:function(t){n=S(),o.block.l(t)},m:function(t,a){f(t,n,a),o.block.m(t,o.anchor=a),o.mount=()=>n.parentNode,o.anchor=n},p:function(t,a){r=t,o.ctx=r,a&2&&s!==(s=q(r[8]))&&N(s,o)||Y(o,r,a)},d:function(t){t&&d(n),o.block.d(t),o.token=null,o=null}};return p("SvelteRegisterBlock",{block:i,id:z.name,type:"each",source:"(419:16) {#each errors as err}",ctx:r}),i}function fn(r){let n,s;const o={c:function(){n=k("p"),s=D("Loading..."),this.h()},l:function(e){n=w(e,"P",{});var t=b(n);s=V(t,"Loading..."),t.forEach(d),this.h()},h:function(){y(n,$,412,12,11447)},m:function(e,t){f(e,n,t),M(n,s)},p:h,d:function(e){e&&d(n)}};return p("SvelteRegisterBlock",{block:o,id:fn.name,type:"pending",source:"(412:32)              <p>Loading...</p>           {:then errors}",ctx:r}),o}function gn(r){let n,s,o,i,e,t,a,l,c=r[0]!==""&&F(r);const v={c:function(){n=k("h3"),s=D("Validate your <mod>.uplugin"),o=B(),i=k("textarea"),e=B(),c&&c.c(),t=S(),this.h()},l:function(u){n=w(u,"H3",{class:!0});var g=b(n);s=V(g,"Validate your <mod>.uplugin"),g.forEach(d),o=L(u),i=w(u,"TEXTAREA",{placeholder:!0,rows:!0,class:!0}),b(i).forEach(d),e=L(u),c&&c.l(u),t=S(),this.h()},h:function(){T(n,"class","text-2xl my-4 font-bold"),y(n,$,403,8,11118),T(i,"placeholder","enter your <mod>.uplugin"),T(i,"rows","23"),T(i,"class","markdownEditor"),y(i,$,404,8,11201)},m:function(u,g){f(u,n,g),M(n,s),f(u,o,g),f(u,i,g),X(i,r[0]),f(u,e,g),c&&c.m(u,g),f(u,t,g),a||(l=Rn(i,"input",r[4]),a=!0)},p:function(u,g){g&1&&X(i,u[0]),u[0]!==""?c?c.p(u,g):(c=F(u),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null)},d:function(u){u&&d(n),u&&d(o),u&&d(i),u&&d(e),c&&c.d(u),u&&d(t),a=!1,l()}};return p("SvelteRegisterBlock",{block:v,id:gn.name,type:"slot",source:"(403:6) <Content>",ctx:r}),v}function kn(r){let n,s;n=new J({props:{$$slots:{default:[gn]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){C(n.$$.fragment)},l:function(e){I(n.$$.fragment,e)},m:function(e,t){A(n,e,t),s=!0},p:function(e,t){const a={};t&8195&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i:function(e){s||(P(n.$$.fragment,e),s=!0)},o:function(e){U(n.$$.fragment,e),s=!1},d:function(e){O(n,e)}};return p("SvelteRegisterBlock",{block:o,id:kn.name,type:"slot",source:"(402:4) <Card>",ctx:r}),o}function wn(r){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:wn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),n}function bn(r){let n,s=r[6]+"";const o={c:function(){n=k("p"),this.h()},l:function(e){n=w(e,"P",{});var t=b(n);t.forEach(d),this.h()},h:function(){y(n,$,436,10,12158)},m:function(e,t){f(e,n,t),n.innerHTML=s},p:h,d:function(e){e&&d(n)}};return p("SvelteRegisterBlock",{block:o,id:bn.name,type:"then",source:"(436:55)            <p>{@html markdownHtmlRendered}",ctx:r}),o}function yn(r){const n={c:h,l:h,m:h,p:h,d:h};return p("SvelteRegisterBlock",{block:n,id:yn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:r}),n}function $n(r){let n,s={ctx:r,current:null,token:null,hasCatch:!1,pending:yn,then:bn,catch:wn,value:6};N(r[3],s);const o={c:function(){n=k("div"),s.block.c(),this.h()},l:function(e){n=w(e,"DIV",{class:!0});var t=b(n);s.block.l(t),t.forEach(d),this.h()},h:function(){T(n,"class","markdown-content"),y(n,$,434,6,12061)},m:function(e,t){f(e,n,t),s.block.m(n,s.anchor=null),s.mount=()=>n,s.anchor=null},p:function(e,t){r=e,Y(s,r,t)},d:function(e){e&&d(n),s.block.d(),s.token=null,s=null}};return p("SvelteRegisterBlock",{block:o,id:$n.name,type:"slot",source:"(434:4) <Content>",ctx:r}),o}function xn(r){let n,s;n=new J({props:{$$slots:{default:[$n]},$$scope:{ctx:r}},$$inline:!0});const o={c:function(){C(n.$$.fragment)},l:function(e){I(n.$$.fragment,e)},m:function(e,t){A(n,e,t),s=!0},p:function(e,t){const a={};t&8192&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i:function(e){s||(P(n.$$.fragment,e),s=!0)},o:function(e){U(n.$$.fragment,e),s=!1},d:function(e){O(n,e)}};return p("SvelteRegisterBlock",{block:o,id:xn.name,type:"slot",source:"(433:2) <Card>",ctx:r}),o}function W(r){let n,s,o,i,e,t,a,l,c,v,H,u,g;n=new en({props:{description:"Help for submitting modules to the Satsifactory Mod Repository",title:"Help"},$$inline:!0}),e=new G({props:{$$slots:{default:[an]},$$scope:{ctx:r}},$$inline:!0}),a=new G({props:{$$slots:{default:[kn]},$$scope:{ctx:r}},$$inline:!0}),u=new G({props:{$$slots:{default:[xn]},$$scope:{ctx:r}},$$inline:!0});const Q={c:function(){C(n.$$.fragment),s=B(),o=k("div"),i=k("div"),C(e.$$.fragment),t=B(),C(a.$$.fragment),l=B(),c=k("h1"),v=D("Markdown"),H=B(),C(u.$$.fragment),this.h()},l:function(m){const x=Mn('[data-svelte="svelte-13ontw3"]',document.head);I(n.$$.fragment,x),x.forEach(d),s=L(m),o=w(m,"DIV",{});var R=b(o);i=w(R,"DIV",{class:!0});var _=b(i);I(e.$$.fragment,_),t=L(_),I(a.$$.fragment,_),_.forEach(d),l=L(R),c=w(R,"H1",{class:!0});var j=b(c);v=V(j,"Markdown"),j.forEach(d),H=L(R),I(u.$$.fragment,R),R.forEach(d),this.h()},h:function(){document.title="Help - SMR",T(i,"class","grid gap-4 grid-flow-col grid-cols-2"),y(i,$,389,2,10699),T(c,"class","text-4xl my-4 font-bold"),y(c,$,431,2,11982),y(o,$,388,0,10691)},m:function(m,x){A(n,document.head,null),f(m,s,x),f(m,o,x),M(o,i),A(e,i,null),M(i,t),A(a,i,null),M(o,l),M(o,c),M(c,v),M(o,H),A(u,o,null),g=!0},p:function(m,[x]){const R={};x&8192&&(R.$$scope={dirty:x,ctx:m}),e.$set(R);const _={};x&8195&&(_.$$scope={dirty:x,ctx:m}),a.$set(_);const j={};x&8192&&(j.$$scope={dirty:x,ctx:m}),u.$set(j)},i:function(m){g||(P(n.$$.fragment,m),P(e.$$.fragment,m),P(a.$$.fragment,m),P(u.$$.fragment,m),g=!0)},o:function(m){U(n.$$.fragment,m),U(e.$$.fragment,m),U(a.$$.fragment,m),U(u.$$.fragment,m),g=!1},d:function(m){O(n),m&&d(s),m&&d(o),O(e),O(a),O(u)}};return p("SvelteRegisterBlock",{block:Q,id:W.name,type:"component",source:"",ctx:r}),Q}function _n(r,n,s){let o,{$$slots:i={},$$scope:e}=n;Sn("Help",i,[]);const t="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",a=`
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
`,l=q(a);let c="";const v=[];Object.keys(n).forEach(u=>{!~v.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<Help> was created with unknown prop '${u}'`)});function H(){c=this.value,s(0,c)}return r.$capture_state=()=>({markdown:q,validateUPluginJson:Z,MetaDescriptors:en,Card:G,Content:J,exampleUPluginJson:t,typescriptMarkdown:a,markdownHtml:l,uPluginJsonInput:c,upluginErrors:o}),r.$inject_state=u=>{"uPluginJsonInput"in u&&s(0,c=u.uPluginJsonInput),"upluginErrors"in u&&s(1,o=u.upluginErrors)},n&&"$$inject"in n&&r.$inject_state(n.$$inject),r.$$.update=()=>{r.$$.dirty&1&&s(1,o=Z(c))},[c,o,t,l,H]}class Dn extends vn{constructor(n){super(n),Hn(this,n,_n,W,Tn,{}),p("SvelteRegisterComponent",{component:this,tagName:"Help",options:n,id:W.name})}}export{Dn as default};
//# sourceMappingURL=index.svelte-570e8572.js.map
