import{S as z,i as J,s as Q,ba as G,W as _,a as T,e as g,aa as U,aT as W,X as E,f as i,g as M,c as f,d as w,ab as q,a7 as y,Y as A,j as m,a5 as $,m as I,t as S,$ as C,bb as P,bc as N,bd as D,b as x,V as Y,T as X,r as l,bg as K,bh as Z,aM as nn}from"../../chunks/vendor-5142eec8.js";import{m as V}from"../../chunks/markdown-6a2ff7f0.js";import{v as en}from"../../chunks/uplugin-c48b0124.js";import{M as tn}from"../../chunks/MetaDescriptors-2c89eebb.js";import"../../chunks/extras-8984d02f.js";import"../../chunks/api-bb6d5972.js";import"../../chunks/user-d4c6e855.js";import"../../chunks/stores-8521e192.js";import"../../chunks/paths-1c47712a.js";function j(s,t,a){const n=s.slice();return n[8]=t[a],n}function an(s){return{c:l,l,m:l,p:l,d:l}}function rn(s){let t,a=s[12]+"",n;return{c(){t=new K(!1),n=x(),this.h()},l(e){t=Z(e,!1),n=x(),this.h()},h(){t.a=n},m(e,r){t.m(a,e,r),m(e,n,r)},p:l,d(e){e&&i(n),e&&t.d()}}}function sn(s){return{c:l,l,m:l,p:l,d:l}}function on(s){let t,a,n,e,r={ctx:s,current:null,token:null,hasCatch:!1,pending:sn,then:rn,catch:an,value:12};return N(V(s[2]),r),{c(){t=g("h3"),a=U("<mod>.uplugin format"),n=T(),e=g("div"),r.block.c(),this.h()},l(o){t=f(o,"H3",{class:!0});var h=w(t);a=q(h,"<mod>.uplugin format"),h.forEach(i),n=M(o),e=f(o,"DIV",{class:!0});var b=w(e);r.block.l(b),b.forEach(i),this.h()},h(){y(t,"class","text-2xl my-4 font-bold"),y(e,"class","markdown-content")},m(o,h){m(o,t,h),$(t,a),m(o,n,h),m(o,e,h),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null},p(o,h){s=o,D(r,s,h)},d(o){o&&i(t),o&&i(n),o&&i(e),r.block.d(),r.token=null,r=null}}}function ln(s){let t,a;return t=new P({props:{$$slots:{default:[on]},$$scope:{ctx:s}}}),{c(){_(t.$$.fragment)},l(n){E(t.$$.fragment,n)},m(n,e){A(t,n,e),a=!0},p(n,e){const r={};e&8192&&(r.$$scope={dirty:e,ctx:n}),t.$set(r)},i(n){a||(I(t.$$.fragment,n),a=!0)},o(n){S(t.$$.fragment,n),a=!1},d(n){C(t,n)}}}function B(s){let t,a,n={ctx:s,current:null,token:null,hasCatch:!1,pending:fn,then:cn,catch:hn,value:7};return N(a=s[1],n),{c(){t=x(),n.block.c()},l(e){t=x(),n.block.l(e)},m(e,r){m(e,t,r),n.block.m(e,n.anchor=r),n.mount=()=>t.parentNode,n.anchor=t},p(e,r){s=e,n.ctx=s,r&2&&a!==(a=s[1])&&N(a,n)||D(n,s,r)},d(e){e&&i(t),n.block.d(e),n.token=null,n=null}}}function hn(s){return{c:l,l,m:l,p:l,d:l}}function cn(s){let t;function a(r,o){return r[7].length===0?un:dn}let n=a(s),e=n(s);return{c(){e.c(),t=x()},l(r){e.l(r),t=x()},m(r,o){e.m(r,o),m(r,t,o)},p(r,o){n===(n=a(r))&&e?e.p(r,o):(e.d(1),e=n(r),e&&(e.c(),e.m(t.parentNode,t)))},d(r){e.d(r),r&&i(t)}}}function dn(s){let t,a=s[7],n=[];for(let e=0;e<a.length;e+=1)n[e]=F(j(s,a,e));return{c(){t=g("ul");for(let e=0;e<n.length;e+=1)n[e].c()},l(e){t=f(e,"UL",{});var r=w(t);for(let o=0;o<n.length;o+=1)n[o].l(r);r.forEach(i)},m(e,r){m(e,t,r);for(let o=0;o<n.length;o+=1)n[o].m(t,null)},p(e,r){if(r&2){a=e[7];let o;for(o=0;o<a.length;o+=1){const h=j(e,a,o);n[o]?n[o].p(h,r):(n[o]=F(h),n[o].c(),n[o].m(t,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=a.length}},d(e){e&&i(t),nn(n,e)}}}function un(s){let t,a;return{c(){t=g("h3"),a=U("<mod>.uplugin valid!"),this.h()},l(n){t=f(n,"H3",{class:!0});var e=w(t);a=q(e,"<mod>.uplugin valid!"),e.forEach(i),this.h()},h(){y(t,"class","text-2xl my-4 font-bold")},m(n,e){m(n,t,e),$(t,a)},p:l,d(n){n&&i(t)}}}function mn(s){return{c:l,l,m:l,p:l,d:l}}function pn(s){let t,a=s[11]+"",n;return{c(){t=g("li"),n=T(),this.h()},l(e){t=f(e,"LI",{class:!0});var r=w(t);r.forEach(i),n=M(e),this.h()},h(){y(t,"class","markdown-content")},m(e,r){m(e,t,r),t.innerHTML=a,m(e,n,r)},p(e,r){r&2&&a!==(a=e[11]+"")&&(t.innerHTML=a)},d(e){e&&i(t),e&&i(n)}}}function gn(s){return{c:l,l,m:l,p:l,d:l}}function F(s){let t,a,n={ctx:s,current:null,token:null,hasCatch:!1,pending:gn,then:pn,catch:mn,value:11};return N(a=V(s[8]),n),{c(){t=x(),n.block.c()},l(e){t=x(),n.block.l(e)},m(e,r){m(e,t,r),n.block.m(e,n.anchor=r),n.mount=()=>t.parentNode,n.anchor=t},p(e,r){s=e,n.ctx=s,r&2&&a!==(a=V(s[8]))&&N(a,n)||D(n,s,r)},d(e){e&&i(t),n.block.d(e),n.token=null,n=null}}}function fn(s){let t,a;return{c(){t=g("p"),a=U("Loading...")},l(n){t=f(n,"P",{});var e=w(t);a=q(e,"Loading..."),e.forEach(i)},m(n,e){m(n,t,e),$(t,a)},p:l,d(n){n&&i(t)}}}function wn(s){let t,a,n,e,r,o,h,b,d=s[0]!==""&&B(s);return{c(){t=g("h3"),a=U("Validate your <mod>.uplugin"),n=T(),e=g("textarea"),r=T(),d&&d.c(),o=x(),this.h()},l(c){t=f(c,"H3",{class:!0});var p=w(t);a=q(p,"Validate your <mod>.uplugin"),p.forEach(i),n=M(c),e=f(c,"TEXTAREA",{placeholder:!0,rows:!0,class:!0}),w(e).forEach(i),r=M(c),d&&d.l(c),o=x(),this.h()},h(){y(t,"class","text-2xl my-4 font-bold"),y(e,"placeholder","enter your <mod>.uplugin"),y(e,"rows","23"),y(e,"class","markdownEditor")},m(c,p){m(c,t,p),$(t,a),m(c,n,p),m(c,e,p),Y(e,s[0]),m(c,r,p),d&&d.m(c,p),m(c,o,p),h||(b=X(e,"input",s[4]),h=!0)},p(c,p){p&1&&Y(e,c[0]),c[0]!==""?d?d.p(c,p):(d=B(c),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},d(c){c&&i(t),c&&i(n),c&&i(e),c&&i(r),d&&d.d(c),c&&i(o),h=!1,b()}}}function kn(s){let t,a;return t=new P({props:{$$slots:{default:[wn]},$$scope:{ctx:s}}}),{c(){_(t.$$.fragment)},l(n){E(t.$$.fragment,n)},m(n,e){A(t,n,e),a=!0},p(n,e){const r={};e&8195&&(r.$$scope={dirty:e,ctx:n}),t.$set(r)},i(n){a||(I(t.$$.fragment,n),a=!0)},o(n){S(t.$$.fragment,n),a=!1},d(n){C(t,n)}}}function bn(s){return{c:l,l,m:l,p:l,d:l}}function yn(s){let t,a=s[6]+"";return{c(){t=g("p")},l(n){t=f(n,"P",{});var e=w(t);e.forEach(i)},m(n,e){m(n,t,e),t.innerHTML=a},p:l,d(n){n&&i(t)}}}function $n(s){return{c:l,l,m:l,p:l,d:l}}function xn(s){let t,a={ctx:s,current:null,token:null,hasCatch:!1,pending:$n,then:yn,catch:bn,value:6};return N(s[3],a),{c(){t=g("div"),a.block.c(),this.h()},l(n){t=f(n,"DIV",{class:!0});var e=w(t);a.block.l(e),e.forEach(i),this.h()},h(){y(t,"class","markdown-content")},m(n,e){m(n,t,e),a.block.m(t,a.anchor=null),a.mount=()=>t,a.anchor=null},p(n,e){s=n,D(a,s,e)},d(n){n&&i(t),a.block.d(),a.token=null,a=null}}}function vn(s){let t,a;return t=new P({props:{$$slots:{default:[xn]},$$scope:{ctx:s}}}),{c(){_(t.$$.fragment)},l(n){E(t.$$.fragment,n)},m(n,e){A(t,n,e),a=!0},p(n,e){const r={};e&8192&&(r.$$scope={dirty:e,ctx:n}),t.$set(r)},i(n){a||(I(t.$$.fragment,n),a=!0)},o(n){S(t.$$.fragment,n),a=!1},d(n){C(t,n)}}}function Hn(s){let t,a,n,e,r,o,h,b,d,c,p,H,R;return t=new tn({props:{description:"Help for submitting modules to the Satsifactory Mod Repository",title:"Help"}}),r=new G({props:{$$slots:{default:[ln]},$$scope:{ctx:s}}}),h=new G({props:{$$slots:{default:[kn]},$$scope:{ctx:s}}}),H=new G({props:{$$slots:{default:[vn]},$$scope:{ctx:s}}}),{c(){_(t.$$.fragment),a=T(),n=g("div"),e=g("div"),_(r.$$.fragment),o=T(),_(h.$$.fragment),b=T(),d=g("h1"),c=U("Markdown"),p=T(),_(H.$$.fragment),this.h()},l(u){const k=W('[data-svelte="svelte-13ontw3"]',document.head);E(t.$$.fragment,k),k.forEach(i),a=M(u),n=f(u,"DIV",{});var v=w(n);e=f(v,"DIV",{class:!0});var L=w(e);E(r.$$.fragment,L),o=M(L),E(h.$$.fragment,L),L.forEach(i),b=M(v),d=f(v,"H1",{class:!0});var O=w(d);c=q(O,"Markdown"),O.forEach(i),p=M(v),E(H.$$.fragment,v),v.forEach(i),this.h()},h(){document.title="Help - SMR",y(e,"class","grid gap-4 grid-flow-col grid-cols-2"),y(d,"class","text-4xl my-4 font-bold")},m(u,k){A(t,document.head,null),m(u,a,k),m(u,n,k),$(n,e),A(r,e,null),$(e,o),A(h,e,null),$(n,b),$(n,d),$(d,c),$(n,p),A(H,n,null),R=!0},p(u,[k]){const v={};k&8192&&(v.$$scope={dirty:k,ctx:u}),r.$set(v);const L={};k&8195&&(L.$$scope={dirty:k,ctx:u}),h.$set(L);const O={};k&8192&&(O.$$scope={dirty:k,ctx:u}),H.$set(O)},i(u){R||(I(t.$$.fragment,u),I(r.$$.fragment,u),I(h.$$.fragment,u),I(H.$$.fragment,u),R=!0)},o(u){S(t.$$.fragment,u),S(r.$$.fragment,u),S(h.$$.fragment,u),S(H.$$.fragment,u),R=!1},d(u){C(t),u&&i(a),u&&i(n),C(r),C(h),C(H)}}}function Tn(s,t,a){let n;const e="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",o=V(`
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
`);let h="";function b(){h=this.value,a(0,h)}return s.$$.update=()=>{s.$$.dirty&1&&a(1,n=en(h))},[h,n,e,o,b]}class On extends z{constructor(t){super(),J(this,t,Tn,Hn,Q,{})}}export{On as default};
//# sourceMappingURL=index.svelte-20457201.js.map
