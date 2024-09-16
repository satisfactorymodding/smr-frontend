import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { mangle } from 'marked-mangle';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { browser } from '$app/environment';
import Prism from 'prismjs';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-cpp.js';
import 'prismjs/components/prism-lua.js';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-python.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-markup.js';

marked.use(gfmHeadingId(), mangle());

let resolver;
const sanitizer = new Promise<(string) => string>((r) => (resolver = r));

if (!browser) {
  (async () => {
    const { JSDOM } = await import('jsdom');
    resolver(DOMPurify(new JSDOM('').window).sanitize);
  })();
} else {
  resolver(DOMPurify.sanitize);
}

export const markdown = (md: string, inline = false): Promise<string> =>
  sanitizer.then((s) => {
    const sanitized = s(inline ? marked.parseInline(md) : marked(md));
    const parsed = new DOMParser().parseFromString(sanitized, 'text/html');
    Prism.highlightAllUnder(parsed.body);
    return parsed.body.innerHTML;
  });
