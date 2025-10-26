import{I as le,a as de,p as he,J as D,f as ce,g as m,K as pe,L as a,m as n,M as me,u as r,q as i,r as ue,N as ge,O as we,$ as ke,k as d,P as y,D as b,h as v,Q as L,n as F,A as E,R as t,F as h,y as u,S as ye,T as be,U as ve,z as fe}from"../chunks/CVeMU510.js";import{m as A}from"../chunks/CkAV2acv.js";import{v as _e}from"../chunks/DI9gJERE.js";import{M as xe}from"../chunks/BAbZjgJD.js";e[h]="src/routes/help/+page.svelte";var He=m(u('<h3 class="my-4 text-2xl font-bold"><mod>.uplugin valid!</mod></h3>'),e[h],[[437,14,[[437,50]]]]),Te=m(u('<li class="markdown-content"><!></li>'),e[h],[[443,20]]),Me=m(u("<ul></ul>"),e[h],[[439,14]]),Le=m(u("<p>Loading...</p>"),e[h],[[434,12]]),Ae=m(u("<p><!></p>"),e[h],[[460,10]]),Se=m(u('<div><h1 class="my-4 text-4xl font-bold">Get Help Using Mods</h1> <div class="card preset-filled-surface-100-900 p-4"><section class="p-4"><button class="btn border border-primary-500 preset-tonal-primary btn-sm text-2xl"><span>Visit the Welcome Guide</span> <span class="material-icons">waving_hand</span></button></section></div> <h1 class="my-4 text-4xl font-bold">Mod Developer Resources</h1> <div class="grid grid-flow-row grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1"><div class="card preset-filled-surface-100-900 p-4"><section class="p-4"><h3 class="my-4 text-2xl font-bold"><mod>.uplugin format</mod></h3> <div class="markdown-content"><!></div></section></div> <div class="card preset-filled-surface-100-900 p-4"><section class="p-4"><h3 class="my-4 text-2xl font-bold">Validate your <mod>.uplugin</mod></h3> <textarea placeholder="enter your &lt;mod>.uplugin" rows="23" class="markdownEditor"></textarea> <!></section></div></div> <h1 class="my-4 text-4xl font-bold">Markdown</h1> <div class="card preset-filled-surface-100-900 p-4"><section class="p-4"><div class="markdown-content"><!></div></section></div></div>'),e[h],[[399,0,[[400,2],[401,2,[[402,4,[[403,6,[[407,8],[408,8]]]]]]],[413,2],[414,2,[[415,4,[[416,6,[[417,8,[[417,44]]],[418,8]]]]],[427,4,[[428,6,[[429,8,[[429,58]]],[430,8]]]]]]],[454,2],[455,2,[[456,4,[[457,6]]]]]]]]);function e(J,$){de(new.target),he($,!0,e);const z="```json\n"+JSON.stringify({CanContainContent:!0,FileVersion:3,SemVersion:"1.0.0",GameVersion:">=368883",Version:1,Modules:[{LoadingPhase:"PostDefault",Name:"testmod",Type:"Runtime"}],Plugins:[{Name:"SML",SemVersion:"^3.0.0"}]},null,2)+"\n```",B=A(`
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
`);let w=D(ge(""),"uPluginJsonInput"),V=D(we(()=>_e(r(w))),"upluginErrors");var Y={...ce()},f=Se();pe(s=>{ke.title="Help - SMR",n(()=>xe(s,{description:"Help using the Satisfactory Mod Repository",title:"Help"}),"component",e,396,2,{componentTag:"MetaDescriptors"})});var _=d(a(f),2),S=a(_),j=a(S);j.__click=()=>window.location.href="https://docs.ficsit.app/satisfactory-modding/latest/ForUsers/Welcome.html",t(S),t(_);var x=d(_,4),H=a(x),I=a(H),U=d(a(I),2),Q=a(U);n(()=>y(Q,()=>A(z),null,(s,c)=>{var o=b(),l=v(o);L(l,()=>r(c)),i(s,o)}),"await",e,419,10),t(U),t(I),t(H);var q=d(H,2),O=a(q),T=d(a(O),2);ye(T);var W=d(T,2);{var K=s=>{var c=b(),o=v(c);n(()=>y(o,()=>r(V),l=>{var k=Le();i(l,k)},(l,k)=>{var C=b(),Z=v(C);{var ee=p=>{var g=He();i(p,g)},te=p=>{var g=Me();n(()=>be(g,21,()=>r(k),ve,(ae,se)=>{var N=b(),re=v(N);n(()=>y(re,()=>A(r(se)),null,(ie,oe)=>{var M=Te(),ne=a(M);L(ne,()=>r(oe)),t(M),i(ie,M)}),"await",e,441,18),i(ae,N)}),"each",e,440,16),t(g),i(p,g)};n(()=>F(Z,p=>{E(r(k).length,0)?p(ee):p(te,!1)}),"if",e,436,12)}i(l,C)}),"await",e,433,10),i(s,c)};n(()=>F(W,s=>{E(r(w),"",!1)&&s(K)}),"if",e,432,8)}t(O),t(q),t(x);var G=d(x,4),P=a(G),R=a(P),X=a(R);return n(()=>y(X,()=>B,null,(s,c)=>{var o=Ae(),l=a(o);L(l,()=>r(c)),t(o),i(s,o)}),"await",e,458,8),t(R),t(P),t(G),t(f),me(T,()=>r(w),s=>fe(w,s)),i(J,f),ue(Y)}le(["click"]);export{e as component};
//# sourceMappingURL=15.BRN57Tin.js.map
