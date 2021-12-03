import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { browser } from '$app/env';

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

export const markdown = (md: string): Promise<string> => {
  return sanitizer.then((s) => s(marked(md)));
};
