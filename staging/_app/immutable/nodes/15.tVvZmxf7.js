import{S as _e,i as Ae,d as f,s as Oe,a7 as D,v as Pe,J as Ne,b as B,e as d,K as Ue,L as qe,j as h,k as _,g as p,h as y,M as j,N as k,m,O as De,n as T,Q as u,a5 as ge,Z as Ve,a8 as z,r as je,t as Je,R as Ge,f as A,u as c,U as fe,a9 as oe,aa as se,V as Fe}from"../chunks/vendor.NxVab9sX.js";import{m as J}from"../chunks/markdown.Z_xBtuQ-.js";import{v as we}from"../chunks/uplugin.U14GCw9e.js";import{M as be}from"../chunks/MetaDescriptors.Shi-Pmo6.js";const g="src/routes/help/+page.svelte";function ke(t,e,r){const n=t.slice();return n[8]=e[r],n}function ye(t){const e={c,l:c,m:c,p:c,d:c};return f("SvelteRegisterBlock",{block:e,id:ye.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function ve(t){let e,r=t[12]+"",n;const i={c:function(){e=new oe(!1),n=A(),this.h()},l:function(o){e=se(o,!1),n=A(),this.h()},h:function(){e.a=n},m:function(o,s){e.m(r,o,s),T(o,n,s)},p:c,d:function(o){o&&(h(n),e.d())}};return f("SvelteRegisterBlock",{block:i,id:ve.name,type:"then",source:"(394:79)              <!-- eslint-disable -->             {@html exampleUPluginJsonRendered}",ctx:t}),i}function xe(t){const e={c,l:c,m:c,p:c,d:c};return f("SvelteRegisterBlock",{block:e,id:xe.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function ee(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!1,pending:Ce,then:Te,catch:He,value:7};D(r=t[1],n);const i={c:function(){e=A(),n.block.c()},l:function(o){e=A(),n.block.l(o)},m:function(o,s){T(o,e,s),n.block.m(o,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e},p:function(o,s){t=o,n.ctx=t,s&2&&r!==(r=t[1])&&D(r,n)||z(n,t,s)},d:function(o){o&&h(e),n.block.d(o),n.token=null,n=null}};return f("SvelteRegisterBlock",{block:i,id:ee.name,type:"if",source:"(410:8) {#if uPluginJsonInput !== ''}",ctx:t}),i}function He(t){const e={c,l:c,m:c,p:c,d:c};return f("SvelteRegisterBlock",{block:e,id:He.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function Te(t){let e;function r(o,s){return o[7].length===0?Se:Me}let n=r(t),i=n(t);const a={c:function(){i.c(),e=A()},l:function(s){i.l(s),e=A()},m:function(s,l){i.m(s,l),T(s,e,l)},p:function(s,l){n===(n=r(s))&&i?i.p(s,l):(i.d(1),i=n(s),i&&(i.c(),i.m(e.parentNode,e)))},d:function(s){s&&h(e),i.d(s)}};return f("SvelteRegisterBlock",{block:a,id:Te.name,type:"then",source:"(413:10) {:then errors}",ctx:t}),a}function Me(t){let e,r=fe(t[7]),n=[];for(let a=0;a<r.length;a+=1)n[a]=ne(ke(t,r,a));const i={c:function(){e=d("ul");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l:function(o){e=p(o,"UL",{});var s=y(e);for(let l=0;l<n.length;l+=1)n[l].l(s);s.forEach(h),this.h()},h:function(){m(e,g,426,14,11683)},m:function(o,s){T(o,e,s);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null)},p:function(o,s){if(s&2){r=fe(o[7]);let l;for(l=0;l<r.length;l+=1){const v=ke(o,r,l);n[l]?n[l].p(v,s):(n[l]=ne(v),n[l].c(),n[l].m(e,null))}for(;l<n.length;l+=1)n[l].d(1);n.length=r.length}},d:function(o){o&&h(e),Fe(n,o)}};return f("SvelteRegisterBlock",{block:i,id:Me.name,type:"else",source:"(416:12) {:else}",ctx:t}),i}function Se(t){let e,r="<mod>.uplugin valid!";const n={c:function(){e=d("h3"),e.textContent=r,this.h()},l:function(a){e=p(a,"H3",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-mymn8n"&&(e.textContent=r),this.h()},h:function(){k(e,"class","my-4 text-2xl font-bold"),m(e,g,424,14,11581)},m:function(a,o){T(a,e,o)},p:c,d:function(a){a&&h(e)}};return f("SvelteRegisterBlock",{block:n,id:Se.name,type:"if",source:"(414:12) {#if errors.length === 0}",ctx:t}),n}function $e(t){const e={c,l:c,m:c,p:c,d:c};return f("SvelteRegisterBlock",{block:e,id:$e.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function Re(t){let e,r,n=t[11]+"",i;const a={c:function(){e=d("li"),r=new oe(!1),i=B(),this.h()},l:function(s){e=p(s,"LI",{class:!0});var l=y(e);r=se(l,!1),l.forEach(h),i=_(s),this.h()},h:function(){r.a=null,k(e,"class","markdown-content"),m(e,g,430,20,11848)},m:function(s,l){T(s,e,l),r.m(n,e),T(s,i,l)},p:function(s,l){l&2&&n!==(n=s[11]+"")&&r.p(n)},d:function(s){s&&(h(e),h(i))}};return f("SvelteRegisterBlock",{block:a,id:Re.name,type:"then",source:'(419:57)                      <!-- eslint-disable -->                     <li class=\\"markdown-content\\">{@html errRendered}',ctx:t}),a}function Ie(t){const e={c,l:c,m:c,p:c,d:c};return f("SvelteRegisterBlock",{block:e,id:Ie.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function ne(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!1,pending:Ie,then:Re,catch:$e,value:11};D(r=J(t[8]),n);const i={c:function(){e=A(),n.block.c()},l:function(o){e=A(),n.block.l(o)},m:function(o,s){T(o,e,s),n.block.m(o,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e},p:function(o,s){t=o,n.ctx=t,s&2&&r!==(r=J(t[8]))&&D(r,n)||z(n,t,s)},d:function(o){o&&h(e),n.block.d(o),n.token=null,n=null}};return f("SvelteRegisterBlock",{block:i,id:ne.name,type:"each",source:"(418:16) {#each errors as err}",ctx:t}),i}function Ce(t){let e,r="Loading...";const n={c:function(){e=d("p"),e.textContent=r,this.h()},l:function(a){e=p(a,"P",{"data-svelte-h":!0}),j(e)!=="svelte-qdsr2u"&&(e.textContent=r),this.h()},h:function(){m(e,g,421,12,11486)},m:function(a,o){T(a,e,o)},p:c,d:function(a){a&&h(e)}};return f("SvelteRegisterBlock",{block:n,id:Ce.name,type:"pending",source:"(411:32)              <p>Loading...</p>           {:then errors}",ctx:t}),n}function Ee(t){const e={c,l:c,m:c,p:c,d:c};return f("SvelteRegisterBlock",{block:e,id:Ee.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function Le(t){let e,r,n=t[6]+"";const i={c:function(){e=d("p"),r=new oe(!1),this.h()},l:function(o){e=p(o,"P",{});var s=y(e);r=se(s,!1),s.forEach(h),this.h()},h:function(){r.a=null,m(e,g,447,10,12302)},m:function(o,s){T(o,e,s),r.m(n,e)},p:c,d:function(o){o&&h(e)}};return f("SvelteRegisterBlock",{block:i,id:Le.name,type:"then",source:"(436:55)            <!-- eslint-disable -->           <p>{@html markdownHtmlRendered}",ctx:t}),i}function Be(t){const e={c,l:c,m:c,p:c,d:c};return f("SvelteRegisterBlock",{block:e,id:Be.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:t}),e}function te(t){let e,r,n,i,a,o,s,l="<mod>.uplugin format",v,R,V,w,H,C,ae="Validate your <mod>.uplugin",Q,M,K,W,E,ie="Markdown",X,O,P,L,G,Z,re;e=new be({props:{description:"Help for submitting modules to the Satsifactory Mod Repository",title:"Help"},$$inline:!0});let S={ctx:t,current:null,token:null,hasCatch:!1,pending:xe,then:ve,catch:ye,value:12};D(J(t[2]),S);let b=t[0]!==""&&ee(t),$={ctx:t,current:null,token:null,hasCatch:!1,pending:Be,then:Le,catch:Ee,value:6};D(t[3],$);const le={c:function(){Ne(e.$$.fragment),r=B(),n=d("div"),i=d("div"),a=d("div"),o=d("section"),s=d("h3"),s.textContent=l,v=B(),R=d("div"),S.block.c(),V=B(),w=d("div"),H=d("section"),C=d("h3"),C.textContent=ae,Q=B(),M=d("textarea"),K=B(),b&&b.c(),W=B(),E=d("h1"),E.textContent=ie,X=B(),O=d("div"),P=d("section"),L=d("div"),$.block.c(),this.h()},l:function(x){const I=Ue("svelte-13ontw3",document.head);qe(e.$$.fragment,I),I.forEach(h),r=_(x),n=p(x,"DIV",{});var U=y(n);i=p(U,"DIV",{class:!0});var F=y(i);a=p(F,"DIV",{class:!0});var ce=y(a);o=p(ce,"SECTION",{class:!0});var Y=y(o);s=p(Y,"H3",{class:!0,"data-svelte-h":!0}),j(s)!=="svelte-1fp9ebh"&&(s.textContent=l),v=_(Y),R=p(Y,"DIV",{class:!0});var he=y(R);S.block.l(he),he.forEach(h),Y.forEach(h),ce.forEach(h),V=_(F),w=p(F,"DIV",{class:!0});var ue=y(w);H=p(ue,"SECTION",{class:!0});var q=y(H);C=p(q,"H3",{class:!0,"data-svelte-h":!0}),j(C)!=="svelte-1a1ovhf"&&(C.textContent=ae),Q=_(q),M=p(q,"TEXTAREA",{placeholder:!0,rows:!0,class:!0}),y(M).forEach(h),K=_(q),b&&b.l(q),q.forEach(h),ue.forEach(h),F.forEach(h),W=_(U),E=p(U,"H1",{class:!0,"data-svelte-h":!0}),j(E)!=="svelte-1k1b7be"&&(E.textContent=ie),X=_(U),O=p(U,"DIV",{class:!0});var de=y(O);P=p(de,"SECTION",{class:!0});var pe=y(P);L=p(pe,"DIV",{class:!0});var me=y(L);$.block.l(me),me.forEach(h),pe.forEach(h),de.forEach(h),U.forEach(h),this.h()},h:function(){document.title="Help - SMR",k(s,"class","my-4 text-2xl font-bold"),m(s,g,401,8,10769),k(R,"class","markdown-content"),m(R,g,402,8,10845),k(o,"class","p-4"),m(o,g,400,6,10739),k(a,"class","card p-4"),m(a,g,399,4,10710),k(C,"class","my-4 text-2xl font-bold"),m(C,g,413,8,11165),k(M,"placeholder","enter your <mod>.uplugin"),k(M,"rows","23"),k(M,"class","markdownEditor"),m(M,g,414,8,11248),k(H,"class","p-4"),m(H,g,412,6,11135),k(w,"class","card p-4"),m(w,g,411,4,11106),k(i,"class","grid grid-flow-col grid-cols-2 gap-4"),m(i,g,398,2,10655),k(E,"class","my-4 text-4xl font-bold"),m(E,g,441,2,12064),k(L,"class","markdown-content"),m(L,g,444,6,12171),k(P,"class","p-4"),m(P,g,443,4,12143),k(O,"class","card p-4"),m(O,g,442,2,12116),m(n,g,397,0,10647)},m:function(x,I){De(e,document.head,null),T(x,r,I),T(x,n,I),u(n,i),u(i,a),u(a,o),u(o,s),u(o,v),u(o,R),S.block.m(R,S.anchor=null),S.mount=()=>R,S.anchor=null,u(i,V),u(i,w),u(w,H),u(H,C),u(H,Q),u(H,M),ge(M,t[0]),u(H,K),b&&b.m(H,null),u(n,W),u(n,E),u(n,X),u(n,O),u(O,P),u(P,L),$.block.m(L,$.anchor=null),$.mount=()=>L,$.anchor=null,G=!0,Z||(re=Ve(M,"input",t[4]),Z=!0)},p:function(x,[I]){t=x,z(S,t,I),I&1&&ge(M,t[0]),t[0]!==""?b?b.p(t,I):(b=ee(t),b.c(),b.m(H,null)):b&&(b.d(1),b=null),z($,t,I)},i:function(x){G||(je(e.$$.fragment,x),G=!0)},o:function(x){Je(e.$$.fragment,x),G=!1},d:function(x){x&&(h(r),h(n)),Ge(e),S.block.d(),S.token=null,S=null,b&&b.d(),$.block.d(),$.token=null,$=null,Z=!1,re()}};return f("SvelteRegisterBlock",{block:le,id:te.name,type:"component",source:"",ctx:t}),le}function Ye(t,e,r){let n,{$$slots:i={},$$scope:a}=e;Pe("Page",i,[]);const o="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",s=`
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
`,l=J(s);let v="";const R=[];Object.keys(e).forEach(w=>{!~R.indexOf(w)&&w.slice(0,2)!=="$$"&&w!=="slot"&&console.warn(`<Page> was created with unknown prop '${w}'`)});function V(){v=this.value,r(0,v)}return t.$capture_state=()=>({markdown:J,validateUPluginJson:we,MetaDescriptors:be,exampleUPluginJson:o,typescriptMarkdown:s,markdownHtml:l,uPluginJsonInput:v,upluginErrors:n}),t.$inject_state=w=>{"uPluginJsonInput"in w&&r(0,v=w.uPluginJsonInput),"upluginErrors"in w&&r(1,n=w.upluginErrors)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&r(1,n=we(v))},[v,n,o,l,V]}class Xe extends _e{constructor(e){super(e),Ae(this,e,Ye,te,Oe,{}),f("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:te.name})}}export{Xe as component};
//# sourceMappingURL=15.tVvZmxf7.js.map
