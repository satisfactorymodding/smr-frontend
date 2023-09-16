import{S as On,i as Nn,d as w,s as Un,a6 as V,v as Dn,J as Vn,b as L,e as d,K as j,L as qn,M as jn,j as h,k as _,g as p,h as m,N as J,O as b,m as g,Q as Jn,n as T,R as u,a4 as kn,Y as Gn,a7 as Q,r as Yn,t as Fn,T as zn,f as B,u as l,V as bn,a8 as Qn,a9 as Wn,W as Kn}from"../chunks/vendor.7f7881cb.js";import{m as G}from"../chunks/markdown.92aa67b7.js";import{v as yn}from"../chunks/uplugin.184a5832.js";import{M as xn}from"../chunks/MetaDescriptors.3fc0d18e.js";const f="src/routes/help/+page.svelte";function vn(o,n,i){const e=o.slice();return e[8]=n[i],e}function Hn(o){const n={c:l,l,m:l,p:l,d:l};return w("SvelteRegisterBlock",{block:n,id:Hn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:o}),n}function Tn(o){let n,i=o[12]+"",e;const s={c:function(){n=new Qn(!1),e=B(),this.h()},l:function(t){n=Wn(t,!1),e=B(),this.h()},h:function(){n.a=e},m:function(t,r){n.m(i,t,r),T(t,e,r)},p:l,d:function(t){t&&h(e),t&&n.d()}};return w("SvelteRegisterBlock",{block:s,id:Tn.name,type:"then",source:"(394:79)              {@html exampleUPluginJsonRendered}",ctx:o}),s}function Mn(o){const n={c:l,l,m:l,p:l,d:l};return w("SvelteRegisterBlock",{block:n,id:Mn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:o}),n}function on(o){let n,i,e={ctx:o,current:null,token:null,hasCatch:!1,pending:Bn,then:$n,catch:Sn,value:7};V(i=o[1],e);const s={c:function(){n=B(),e.block.c()},l:function(t){n=B(),e.block.l(t)},m:function(t,r){T(t,n,r),e.block.m(t,e.anchor=r),e.mount=()=>n.parentNode,e.anchor=n},p:function(t,r){o=t,e.ctx=o,r&2&&i!==(i=o[1])&&V(i,e)||Q(e,o,r)},d:function(t){t&&h(n),e.block.d(t),e.token=null,e=null}};return w("SvelteRegisterBlock",{block:s,id:on.name,type:"if",source:"(409:8) {#if uPluginJsonInput !== ''}",ctx:o}),s}function Sn(o){const n={c:l,l,m:l,p:l,d:l};return w("SvelteRegisterBlock",{block:n,id:Sn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:o}),n}function $n(o){let n;function i(t,r){return t[7].length===0?Rn:En}let e=i(o),s=e(o);const a={c:function(){s.c(),n=B()},l:function(r){s.l(r),n=B()},m:function(r,c){s.m(r,c),T(r,n,c)},p:function(r,c){e===(e=i(r))&&s?s.p(r,c):(s.d(1),s=e(r),s&&(s.c(),s.m(n.parentNode,n)))},d:function(r){s.d(r),r&&h(n)}};return w("SvelteRegisterBlock",{block:a,id:$n.name,type:"then",source:"(412:10) {:then errors}",ctx:o}),a}function En(o){let n,i=o[7];bn(i);let e=[];for(let a=0;a<i.length;a+=1)e[a]=an(vn(o,i,a));const s={c:function(){n=d("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l:function(t){n=p(t,"UL",{});var r=m(n);for(let c=0;c<e.length;c+=1)e[c].l(r);r.forEach(h),this.h()},h:function(){g(n,f,415,14,11647)},m:function(t,r){T(t,n,r);for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(n,null)},p:function(t,r){if(r&2){i=t[7],bn(i);let c;for(c=0;c<i.length;c+=1){const x=vn(t,i,c);e[c]?e[c].p(x,r):(e[c]=an(x),e[c].c(),e[c].m(n,null))}for(;c<e.length;c+=1)e[c].d(1);e.length=i.length}},d:function(t){t&&h(n),Kn(e,t)}};return w("SvelteRegisterBlock",{block:s,id:En.name,type:"else",source:"(415:12) {:else}",ctx:o}),s}function Rn(o){let n,i;const e={c:function(){n=d("h3"),i=j("<mod>.uplugin valid!"),this.h()},l:function(a){n=p(a,"H3",{class:!0});var t=m(n);i=J(t,"<mod>.uplugin valid!"),t.forEach(h),this.h()},h:function(){b(n,"class","text-2xl my-4 font-bold"),g(n,f,413,14,11545)},m:function(a,t){T(a,n,t),u(n,i)},p:l,d:function(a){a&&h(n)}};return w("SvelteRegisterBlock",{block:e,id:Rn.name,type:"if",source:"(413:12) {#if errors.length === 0}",ctx:o}),e}function In(o){const n={c:l,l,m:l,p:l,d:l};return w("SvelteRegisterBlock",{block:n,id:In.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:o}),n}function Ln(o){let n,i=o[11]+"",e;const s={c:function(){n=d("li"),e=L(),this.h()},l:function(t){n=p(t,"LI",{class:!0});var r=m(n);r.forEach(h),e=_(t),this.h()},h:function(){b(n,"class","markdown-content"),g(n,f,418,20,11768)},m:function(t,r){T(t,n,r),n.innerHTML=i,T(t,e,r)},p:function(t,r){r&2&&i!==(i=t[11]+"")&&(n.innerHTML=i)},d:function(t){t&&h(n),t&&h(e)}};return w("SvelteRegisterBlock",{block:s,id:Ln.name,type:"then",source:'(418:57)                      <li class=\\"markdown-content\\">{@html errRendered}',ctx:o}),s}function _n(o){const n={c:l,l,m:l,p:l,d:l};return w("SvelteRegisterBlock",{block:n,id:_n.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:o}),n}function an(o){let n,i,e={ctx:o,current:null,token:null,hasCatch:!1,pending:_n,then:Ln,catch:In,value:11};V(i=G(o[8]),e);const s={c:function(){n=B(),e.block.c()},l:function(t){n=B(),e.block.l(t)},m:function(t,r){T(t,n,r),e.block.m(t,e.anchor=r),e.mount=()=>n.parentNode,e.anchor=n},p:function(t,r){o=t,e.ctx=o,r&2&&i!==(i=G(o[8]))&&V(i,e)||Q(e,o,r)},d:function(t){t&&h(n),e.block.d(t),e.token=null,e=null}};return w("SvelteRegisterBlock",{block:s,id:an.name,type:"each",source:"(417:16) {#each errors as err}",ctx:o}),s}function Bn(o){let n,i;const e={c:function(){n=d("p"),i=j("Loading..."),this.h()},l:function(a){n=p(a,"P",{});var t=m(n);i=J(t,"Loading..."),t.forEach(h),this.h()},h:function(){g(n,f,410,12,11450)},m:function(a,t){T(a,n,t),u(n,i)},p:l,d:function(a){a&&h(n)}};return w("SvelteRegisterBlock",{block:e,id:Bn.name,type:"pending",source:"(410:32)              <p>Loading...</p>           {:then errors}",ctx:o}),e}function Pn(o){const n={c:l,l,m:l,p:l,d:l};return w("SvelteRegisterBlock",{block:n,id:Pn.name,type:"catch",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:o}),n}function An(o){let n,i=o[6]+"";const e={c:function(){n=d("p"),this.h()},l:function(a){n=p(a,"P",{});var t=m(n);t.forEach(h),this.h()},h:function(){g(n,f,434,10,12188)},m:function(a,t){T(a,n,t),n.innerHTML=i},p:l,d:function(a){a&&h(n)}};return w("SvelteRegisterBlock",{block:e,id:An.name,type:"then",source:"(434:55)            <p>{@html markdownHtmlRendered}",ctx:o}),e}function Cn(o){const n={c:l,l,m:l,p:l,d:l};return w("SvelteRegisterBlock",{block:n,id:Cn.name,type:"pending",source:'(1:0) <script lang=\\"ts\\">import { markdown }',ctx:o}),n}function sn(o){let n,i,e,s,a,t,r,c,x,E,q,k,H,P,W,K,M,X,Z,A,nn,en,C,O,I,Y,tn,rn;n=new xn({props:{description:"Help for submitting modules to the Satsifactory Mod Repository",title:"Help"},$$inline:!0});let S={ctx:o,current:null,token:null,hasCatch:!1,pending:Mn,then:Tn,catch:Hn,value:12};V(G(o[2]),S);let y=o[0]!==""&&on(o),$={ctx:o,current:null,token:null,hasCatch:!1,pending:Cn,then:An,catch:Pn,value:6};V(o[3],$);const ln={c:function(){Vn(n.$$.fragment),i=L(),e=d("div"),s=d("div"),a=d("div"),t=d("section"),r=d("h3"),c=j("<mod>.uplugin format"),x=L(),E=d("div"),S.block.c(),q=L(),k=d("div"),H=d("section"),P=d("h3"),W=j("Validate your <mod>.uplugin"),K=L(),M=d("textarea"),X=L(),y&&y.c(),Z=L(),A=d("h1"),nn=j("Markdown"),en=L(),C=d("div"),O=d("section"),I=d("div"),$.block.c(),this.h()},l:function(v){const R=qn("svelte-13ontw3",document.head);jn(n.$$.fragment,R),R.forEach(h),i=_(v),e=p(v,"DIV",{});var U=m(e);s=p(U,"DIV",{class:!0});var F=m(s);a=p(F,"DIV",{class:!0});var cn=m(a);t=p(cn,"SECTION",{class:!0});var z=m(t);r=p(z,"H3",{class:!0});var hn=m(r);c=J(hn,"<mod>.uplugin format"),hn.forEach(h),x=_(z),E=p(z,"DIV",{class:!0});var un=m(E);S.block.l(un),un.forEach(h),z.forEach(h),cn.forEach(h),q=_(F),k=p(F,"DIV",{class:!0});var dn=m(k);H=p(dn,"SECTION",{class:!0});var D=m(H);P=p(D,"H3",{class:!0});var pn=m(P);W=J(pn,"Validate your <mod>.uplugin"),pn.forEach(h),K=_(D),M=p(D,"TEXTAREA",{placeholder:!0,rows:!0,class:!0}),m(M).forEach(h),X=_(D),y&&y.l(D),D.forEach(h),dn.forEach(h),F.forEach(h),Z=_(U),A=p(U,"H1",{class:!0});var mn=m(A);nn=J(mn,"Markdown"),mn.forEach(h),en=_(U),C=p(U,"DIV",{class:!0});var gn=m(C);O=p(gn,"SECTION",{class:!0});var fn=m(O);I=p(fn,"DIV",{class:!0});var wn=m(I);$.block.l(wn),wn.forEach(h),fn.forEach(h),gn.forEach(h),U.forEach(h),this.h()},h:function(){document.title="Help - SMR",b(r,"class","text-2xl my-4 font-bold"),g(r,f,391,8,10769),b(E,"class","markdown-content"),g(E,f,392,8,10845),b(t,"class","p-4"),g(t,f,390,6,10739),b(a,"class","card p-4"),g(a,f,389,4,10710),b(P,"class","text-2xl my-4 font-bold"),g(P,f,402,8,11129),b(M,"placeholder","enter your <mod>.uplugin"),b(M,"rows","23"),b(M,"class","markdownEditor"),g(M,f,403,8,11212),b(H,"class","p-4"),g(H,f,401,6,11099),b(k,"class","card p-4"),g(k,f,400,4,11070),b(s,"class","grid gap-4 grid-flow-col grid-cols-2"),g(s,f,388,2,10655),b(A,"class","text-4xl my-4 font-bold"),g(A,f,429,2,11984),b(I,"class","markdown-content"),g(I,f,432,6,12091),b(O,"class","p-4"),g(O,f,431,4,12063),b(C,"class","card p-4"),g(C,f,430,2,12036),g(e,f,387,0,10647)},m:function(v,R){Jn(n,document.head,null),T(v,i,R),T(v,e,R),u(e,s),u(s,a),u(a,t),u(t,r),u(r,c),u(t,x),u(t,E),S.block.m(E,S.anchor=null),S.mount=()=>E,S.anchor=null,u(s,q),u(s,k),u(k,H),u(H,P),u(P,W),u(H,K),u(H,M),kn(M,o[0]),u(H,X),y&&y.m(H,null),u(e,Z),u(e,A),u(A,nn),u(e,en),u(e,C),u(C,O),u(O,I),$.block.m(I,$.anchor=null),$.mount=()=>I,$.anchor=null,Y=!0,tn||(rn=Gn(M,"input",o[4]),tn=!0)},p:function(v,[R]){o=v,Q(S,o,R),R&1&&kn(M,o[0]),o[0]!==""?y?y.p(o,R):(y=on(o),y.c(),y.m(H,null)):y&&(y.d(1),y=null),Q($,o,R)},i:function(v){Y||(Yn(n.$$.fragment,v),Y=!0)},o:function(v){Fn(n.$$.fragment,v),Y=!1},d:function(v){zn(n),v&&h(i),v&&h(e),S.block.d(),S.token=null,S=null,y&&y.d(),$.block.d(),$.token=null,$=null,tn=!1,rn()}};return w("SvelteRegisterBlock",{block:ln,id:sn.name,type:"component",source:"",ctx:o}),ln}function Xn(o,n,i){let e,{$$slots:s={},$$scope:a}=n;Dn("Page",s,[]);const t="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",r=`
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
`,c=G(r);let x="";const E=[];Object.keys(n).forEach(k=>{!~E.indexOf(k)&&k.slice(0,2)!=="$$"&&k!=="slot"&&console.warn(`<Page> was created with unknown prop '${k}'`)});function q(){x=this.value,i(0,x)}return o.$capture_state=()=>({markdown:G,validateUPluginJson:yn,MetaDescriptors:xn,exampleUPluginJson:t,typescriptMarkdown:r,markdownHtml:c,uPluginJsonInput:x,upluginErrors:e}),o.$inject_state=k=>{"uPluginJsonInput"in k&&i(0,x=k.uPluginJsonInput),"upluginErrors"in k&&i(1,e=k.upluginErrors)},n&&"$$inject"in n&&o.$inject_state(n.$$inject),o.$$.update=()=>{o.$$.dirty&1&&i(1,e=yn(x))},[x,e,t,c,q]}class oe extends On{constructor(n){super(n),Nn(this,n,Xn,sn,Un,{}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:n,id:sn.name})}}export{oe as component};
//# sourceMappingURL=14.d62e5629.js.map
