import{S as Ze,i as en,d as b,s as nn,F as W,v as tn,G as sn,b as M,e as d,H as on,I as an,j as u,k as S,g as p,h as y,J as P,K as g,m,L as ln,n as C,M as h,N as _e,O as Be,P as se,r as rn,t as cn,Q as hn,R as un,f as V,u as c,T as Pe,U as ge,V as we,W as dn}from"../chunks/vendor.DAJNVlIF.js";import{m as K}from"../chunks/markdown.wycmwlAd.js";import{v as Ae}from"../chunks/uplugin.BiLtEESB.js";import{M as Ne}from"../chunks/MetaDescriptors.Dnhe40e_.js";const f="src/routes/help/+page.svelte";function Oe(t,e,i){const n=t.slice();return n[9]=e[i],n}function Ue(t){const e={c,l:c,m:c,p:c,d:c};return b("SvelteRegisterBlock",{block:e,id:Ue.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function qe(t){let e,i=t[13]+"",n;const a={c:function(){e=new ge(!1),n=V(),this.h()},l:function(s){e=we(s,!1),n=V(),this.h()},h:function(){e.a=n},m:function(s,o){e.m(i,s,o),C(s,n,o)},p:c,d:function(s){s&&(u(n),e.d())}};return b("SvelteRegisterBlock",{block:a,id:qe.name,type:"then",source:"(409:79)              <!-- eslint-disable -->             {@html exampleUPluginJsonRendered}",ctx:t}),a}function De(t){const e={c,l:c,m:c,p:c,d:c};return b("SvelteRegisterBlock",{block:e,id:De.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function pe(t){let e,i,n={ctx:t,current:null,token:null,hasCatch:!1,pending:We,then:Ge,catch:Ve,value:8};W(i=t[1],n);const a={c:function(){e=V(),n.block.c()},l:function(s){e=V(),n.block.l(s)},m:function(s,o){C(s,e,o),n.block.m(s,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e},p:function(s,o){t=s,n.ctx=t,o&2&&i!==(i=t[1])&&W(i,n)||se(n,t,o)},d:function(s){s&&u(e),n.block.d(s),n.token=null,n=null}};return b("SvelteRegisterBlock",{block:a,id:pe.name,type:"if",source:"(425:8) {#if uPluginJsonInput !== ''}",ctx:t}),a}function Ve(t){const e={c,l:c,m:c,p:c,d:c};return b("SvelteRegisterBlock",{block:e,id:Ve.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function Ge(t){let e;function i(s,o){return s[8].length===0?Je:je}let n=i(t),a=n(t);const l={c:function(){a.c(),e=V()},l:function(o){a.l(o),e=V()},m:function(o,r){a.m(o,r),C(o,e,r)},p:function(o,r){n===(n=i(o))&&a?a.p(o,r):(a.d(1),a=n(o),a&&(a.c(),a.m(e.parentNode,e)))},d:function(o){o&&u(e),a.d(o)}};return b("SvelteRegisterBlock",{block:l,id:Ge.name,type:"then",source:"(428:10) {:then errors}",ctx:t}),l}function je(t){let e,i=Pe(t[8]),n=[];for(let l=0;l<i.length;l+=1)n[l]=me(Oe(t,i,l));const a={c:function(){e=d("ul");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l:function(s){e=p(s,"UL",{});var o=y(e);for(let r=0;r<n.length;r+=1)n[r].l(o);o.forEach(u),this.h()},h:function(){m(e,f,441,14,12270)},m:function(s,o){C(s,e,o);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null)},p:function(s,o){if(o&2){i=Pe(s[8]);let r;for(r=0;r<i.length;r+=1){const w=Oe(s,i,r);n[r]?n[r].p(w,o):(n[r]=me(w),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=i.length}},d:function(s){s&&u(e),dn(n,s)}};return b("SvelteRegisterBlock",{block:a,id:je.name,type:"else",source:"(431:12) {:else}",ctx:t}),a}function Je(t){let e,i="<mod>.uplugin valid!";const n={c:function(){e=d("h3"),e.textContent=i,this.h()},l:function(l){e=p(l,"H3",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-mymn8n"&&(e.textContent=i),this.h()},h:function(){g(e,"class","my-4 text-2xl font-bold"),m(e,f,439,14,12168)},m:function(l,s){C(l,e,s)},p:c,d:function(l){l&&u(e)}};return b("SvelteRegisterBlock",{block:n,id:Je.name,type:"if",source:"(429:12) {#if errors.length === 0}",ctx:t}),n}function Fe(t){const e={c,l:c,m:c,p:c,d:c};return b("SvelteRegisterBlock",{block:e,id:Fe.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function ze(t){let e,i,n=t[12]+"",a;const l={c:function(){e=d("li"),i=new ge(!1),a=M(),this.h()},l:function(o){e=p(o,"LI",{class:!0});var r=y(e);i=we(r,!1),r.forEach(u),a=S(o),this.h()},h:function(){i.a=null,g(e,"class","markdown-content"),m(e,f,445,20,12435)},m:function(o,r){C(o,e,r),i.m(n,e),C(o,a,r)},p:function(o,r){r&2&&n!==(n=o[12]+"")&&i.p(n)},d:function(o){o&&(u(e),u(a))}};return b("SvelteRegisterBlock",{block:l,id:ze.name,type:"then",source:'(434:57)                      <!-- eslint-disable -->                     <li class=\\"markdown-content\\">{@html errRendered}',ctx:t}),l}function Ye(t){const e={c,l:c,m:c,p:c,d:c};return b("SvelteRegisterBlock",{block:e,id:Ye.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function me(t){let e,i,n={ctx:t,current:null,token:null,hasCatch:!1,pending:Ye,then:ze,catch:Fe,value:12};W(i=K(t[9]),n);const a={c:function(){e=V(),n.block.c()},l:function(s){e=V(),n.block.l(s)},m:function(s,o){C(s,e,o),n.block.m(s,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e},p:function(s,o){t=s,n.ctx=t,o&2&&i!==(i=K(t[9]))&&W(i,n)||se(n,t,o)},d:function(s){s&&u(e),n.block.d(s),n.token=null,n=null}};return b("SvelteRegisterBlock",{block:a,id:me.name,type:"each",source:"(433:16) {#each errors as err}",ctx:t}),a}function We(t){let e,i="Loading...";const n={c:function(){e=d("p"),e.textContent=i,this.h()},l:function(l){e=p(l,"P",{"data-svelte-h":!0}),P(e)!=="svelte-qdsr2u"&&(e.textContent=i),this.h()},h:function(){m(e,f,436,12,12073)},m:function(l,s){C(l,e,s)},p:c,d:function(l){l&&u(e)}};return b("SvelteRegisterBlock",{block:n,id:We.name,type:"pending",source:"(426:32)              <p>Loading...</p>           {:then errors}",ctx:t}),n}function Qe(t){const e={c,l:c,m:c,p:c,d:c};return b("SvelteRegisterBlock",{block:e,id:Qe.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function Ke(t){let e,i,n=t[7]+"";const a={c:function(){e=d("p"),i=new ge(!1),this.h()},l:function(s){e=p(s,"P",{});var o=y(e);i=we(o,!1),o.forEach(u),this.h()},h:function(){i.a=null,m(e,f,462,10,12889)},m:function(s,o){C(s,e,o),i.m(n,e)},p:c,d:function(s){s&&u(e)}};return b("SvelteRegisterBlock",{block:a,id:Ke.name,type:"then",source:"(451:55)            <!-- eslint-disable -->           <p>{@html markdownHtmlRendered}",ctx:t}),a}function Xe(t){const e={c,l:c,m:c,p:c,d:c};return b("SvelteRegisterBlock",{block:e,id:Xe.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function fe(t){let e,i,n,a,l="Get Help Using Mods",s,o,r,w,L,X="Visit the Welcome Guide",Q,k,ke="waving_hand",oe,A,be="Mod Developer Resources",ae,_,G,B,O,ye="<mod>.uplugin format",le,N,ie,j,H,U,ve="Validate your <mod>.uplugin",re,E,ce,he,q,xe="Markdown",ue,J,F,D,Z,de,He;e=new Ne({props:{description:"Help using the Satisfactory Mod Repository",title:"Help"},$$inline:!0});let R={ctx:t,current:null,token:null,hasCatch:!1,pending:De,then:qe,catch:Ue,value:13};W(K(t[2]),R);let v=t[0]!==""&&pe(t),$={ctx:t,current:null,token:null,hasCatch:!1,pending:Xe,then:Ke,catch:Qe,value:7};W(t[3],$);const Te={c:function(){sn(e.$$.fragment),i=M(),n=d("div"),a=d("h1"),a.textContent=l,s=M(),o=d("div"),r=d("section"),w=d("button"),L=d("span"),L.textContent=X,Q=M(),k=d("span"),k.textContent=ke,oe=M(),A=d("h1"),A.textContent=be,ae=M(),_=d("div"),G=d("div"),B=d("section"),O=d("h3"),O.textContent=ye,le=M(),N=d("div"),R.block.c(),ie=M(),j=d("div"),H=d("section"),U=d("h3"),U.textContent=ve,re=M(),E=d("textarea"),ce=M(),v&&v.c(),he=M(),q=d("h1"),q.textContent=xe,ue=M(),J=d("div"),F=d("section"),D=d("div"),$.block.c(),this.h()},l:function(x){const I=on("svelte-1lit1wy",document.head);an(e.$$.fragment,I),I.forEach(u),i=S(x),n=p(x,"DIV",{});var T=y(n);a=p(T,"H1",{class:!0,"data-svelte-h":!0}),P(a)!=="svelte-185qwnx"&&(a.textContent=l),s=S(T),o=p(T,"DIV",{class:!0});var Me=y(o);r=p(Me,"SECTION",{class:!0});var Se=y(r);w=p(Se,"BUTTON",{class:!0});var ee=y(w);L=p(ee,"SPAN",{"data-svelte-h":!0}),P(L)!=="svelte-1kf0g8e"&&(L.textContent=X),Q=S(ee),k=p(ee,"SPAN",{class:!0,"data-svelte-h":!0}),P(k)!=="svelte-bq7kzx"&&(k.textContent=ke),ee.forEach(u),Se.forEach(u),Me.forEach(u),oe=S(T),A=p(T,"H1",{class:!0,"data-svelte-h":!0}),P(A)!=="svelte-1cbfn14"&&(A.textContent=be),ae=S(T),_=p(T,"DIV",{class:!0});var ne=y(_);G=p(ne,"DIV",{class:!0});var Ce=y(G);B=p(Ce,"SECTION",{class:!0});var te=y(B);O=p(te,"H3",{class:!0,"data-svelte-h":!0}),P(O)!=="svelte-1fp9ebh"&&(O.textContent=ye),le=S(te),N=p(te,"DIV",{class:!0});var Ee=y(N);R.block.l(Ee),Ee.forEach(u),te.forEach(u),Ce.forEach(u),ie=S(ne),j=p(ne,"DIV",{class:!0});var Re=y(j);H=p(Re,"SECTION",{class:!0});var Y=y(H);U=p(Y,"H3",{class:!0,"data-svelte-h":!0}),P(U)!=="svelte-1a1ovhf"&&(U.textContent=ve),re=S(Y),E=p(Y,"TEXTAREA",{placeholder:!0,rows:!0,class:!0}),y(E).forEach(u),ce=S(Y),v&&v.l(Y),Y.forEach(u),Re.forEach(u),ne.forEach(u),he=S(T),q=p(T,"H1",{class:!0,"data-svelte-h":!0}),P(q)!=="svelte-1k1b7be"&&(q.textContent=xe),ue=S(T),J=p(T,"DIV",{class:!0});var $e=y(J);F=p($e,"SECTION",{class:!0});var Ie=y(F);D=p(Ie,"DIV",{class:!0});var Le=y(D);$.block.l(Le),Le.forEach(u),Ie.forEach(u),$e.forEach(u),T.forEach(u),this.h()},h:function(){document.title="Help - SMR",g(a,"class","my-4 text-4xl font-bold"),m(a,f,399,2,10668),m(L,f,406,8,10997),g(k,"class","material-icons"),m(k,f,407,8,11042),g(w,"class","variant-ghost-primary btn btn-sm text-2xl"),m(w,f,402,6,10786),g(r,"class","p-4"),m(r,f,401,4,10758),g(o,"class","card p-4"),m(o,f,400,2,10731),g(A,"class","my-4 text-4xl font-bold"),m(A,f,412,2,11133),g(O,"class","my-4 text-2xl font-bold"),m(O,f,416,8,11356),g(N,"class","markdown-content"),m(N,f,417,8,11432),g(B,"class","p-4"),m(B,f,415,6,11326),g(G,"class","card p-4"),m(G,f,414,4,11297),g(U,"class","my-4 text-2xl font-bold"),m(U,f,428,8,11752),g(E,"placeholder","enter your <mod>.uplugin"),g(E,"rows","23"),g(E,"class","markdownEditor"),m(E,f,429,8,11835),g(H,"class","p-4"),m(H,f,427,6,11722),g(j,"class","card p-4"),m(j,f,426,4,11693),g(_,"class","grid grid-flow-row grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1"),m(_,f,413,2,11200),g(q,"class","my-4 text-4xl font-bold"),m(q,f,456,2,12651),g(D,"class","markdown-content"),m(D,f,459,6,12758),g(F,"class","p-4"),m(F,f,458,4,12730),g(J,"class","card p-4"),m(J,f,457,2,12703),m(n,f,398,0,10660)},m:function(x,I){ln(e,document.head,null),C(x,i,I),C(x,n,I),h(n,a),h(n,s),h(n,o),h(o,r),h(r,w),h(w,L),h(w,Q),h(w,k),h(n,oe),h(n,A),h(n,ae),h(n,_),h(_,G),h(G,B),h(B,O),h(B,le),h(B,N),R.block.m(N,R.anchor=null),R.mount=()=>N,R.anchor=null,h(_,ie),h(_,j),h(j,H),h(H,U),h(H,re),h(H,E),_e(E,t[0]),h(H,ce),v&&v.m(H,null),h(n,he),h(n,q),h(n,ue),h(n,J),h(J,F),h(F,D),$.block.m(D,$.anchor=null),$.mount=()=>D,$.anchor=null,Z=!0,de||(He=[Be(w,"click",t[4],!1,!1,!1,!1),Be(E,"input",t[5])],de=!0)},p:function(x,[I]){t=x,se(R,t,I),I&1&&_e(E,t[0]),t[0]!==""?v?v.p(t,I):(v=pe(t),v.c(),v.m(H,null)):v&&(v.d(1),v=null),se($,t,I)},i:function(x){Z||(rn(e.$$.fragment,x),Z=!0)},o:function(x){cn(e.$$.fragment,x),Z=!1},d:function(x){x&&(u(i),u(n)),hn(e),R.block.d(),R.token=null,R=null,v&&v.d(),$.block.d(),$.token=null,$=null,de=!1,un(He)}};return b("SvelteRegisterBlock",{block:Te,id:fe.name,type:"component",source:"",ctx:t}),Te}function pn(t,e,i){let n,{$$slots:a={},$$scope:l}=e;tn("Page",a,[]);const s="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",GameVersion:">=368883",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",o=`
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
`,r=K(o);let w="";const L=[];Object.keys(e).forEach(k=>{!~L.indexOf(k)&&k.slice(0,2)!=="$$"&&k!=="slot"&&console.warn(`<Page> was created with unknown prop '${k}'`)});const X=()=>window.location.href="https://docs.ficsit.app/satisfactory-modding/latest/ForUsers/Welcome.html";function Q(){w=this.value,i(0,w)}return t.$capture_state=()=>({markdown:K,validateUPluginJson:Ae,MetaDescriptors:Ne,exampleUPluginJson:s,typescriptMarkdown:o,markdownHtml:r,uPluginJsonInput:w,upluginErrors:n}),t.$inject_state=k=>{"uPluginJsonInput"in k&&i(0,w=k.uPluginJsonInput),"upluginErrors"in k&&i(1,n=k.upluginErrors)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&i(1,n=Ae(w))},[w,n,s,r,X,Q]}class kn extends Ze{constructor(e){super(e),en(this,e,pn,fe,nn,{}),b("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:fe.name})}}export{kn as component};
//# sourceMappingURL=15.B4UgRebk.js.map
