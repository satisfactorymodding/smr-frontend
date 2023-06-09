const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-2313672a.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-14c9fb62.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-aeed605c.css", "/smr-frontend/staging/_app/immutable/error.svelte-d35a6d97.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-aae00f17.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-d48bf212.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-007f751b.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-1d89f48f.js", "/smr-frontend/staging/_app/immutable/pages/admin/tag-manager.svelte-fd11d09a.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-85222389.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-f06c291a.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-f66b645a.js", "/smr-frontend/staging/_app/immutable/assets/pages/privacy-policy/index.svelte-bcc48566.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-8c1bbb05.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-f12dd2d9.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-ca87e38a.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-ecb63ef4.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-6ae68010.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-57a00c6c.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-ec6fe127.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-f2bd54c5.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-73c2bdb4.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-d7d685ac.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-9faedf57.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-7d1c3f70.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-bac81cb8.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-c6354747.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-3c0eab11.js", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-ade0c1ad.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-f3d36521.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-8ee65f02.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-9c3dab43.js", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-854d7cb4.js", "/smr-frontend/staging/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/staging/_app/immutable/chunks/forms-a09581a5.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-5faff0be.js", "/smr-frontend/staging/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-b2fcde9f.js", "/smr-frontend/staging/_app/immutable/chunks/global-fb89089b.js", "/smr-frontend/staging/_app/immutable/chunks/user-cee14147.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-aafc45b7.js", "/smr-frontend/staging/_app/immutable/chunks/api-bb6d5972.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-39b507e4.js", "/smr-frontend/staging/_app/immutable/chunks/stores-a6f790a9.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-13eea52f.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-5e0585a5.js", "/smr-frontend/staging/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-ba209b96.js", "/smr-frontend/staging/_app/immutable/assets/ModForm-cc1db5c2.css", "/smr-frontend/staging/_app/immutable/chunks/forms-694c548d.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-3bf45888.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-d1753ec3.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-a3c2486b.js", "/smr-frontend/staging/_app/immutable/chunks/gql-24499839.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-4391f7c1.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-c800fd7d.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-ba5939c1.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-c811f0b6.js", "/smr-frontend/staging/_app/immutable/chunks/CompatibilityButton-c8bdfabe.js", "/smr-frontend/staging/_app/immutable/chunks/TagList-f09044fd.js", "/smr-frontend/staging/_app/immutable/assets/TagList-92a9d7da.css", "/smr-frontend/staging/_app/immutable/chunks/ModForm-5978db4c.js", "/smr-frontend/staging/_app/immutable/chunks/ModCompatibilityEdit-ff23b44f.js", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-6618f253.js", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
const n = ["/smr-frontend/staging/assets/android-chrome-192x192.png", "/smr-frontend/staging/assets/android-chrome-512x512.png", "/smr-frontend/staging/assets/apple-touch-icon.png", "/smr-frontend/staging/assets/browserconfig.xml", "/smr-frontend/staging/assets/favicon-16x16.png", "/smr-frontend/staging/assets/favicon-32x32.png", "/smr-frontend/staging/assets/favicon.ico", "/smr-frontend/staging/assets/fonts/flow-rounded.woff", "/smr-frontend/staging/assets/mstile-150x150.png", "/smr-frontend/staging/assets/safari-pinned-tab.svg", "/smr-frontend/staging/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp", "/smr-frontend/staging/images/bg_nologo.webp", "/smr-frontend/staging/images/dog_aw_yis_pats.gif", "/smr-frontend/staging/images/dog_boing.gif", "/smr-frontend/staging/images/dog_stand.gif", "/smr-frontend/staging/images/mods_mobile.webp", "/smr-frontend/staging/images/no_image.webp", "/smr-frontend/staging/images/satisfactory_logo_full_color_small.webp", "/smr-frontend/staging/images/sf_modding_logo.webp", "/smr-frontend/staging/images/smm_background.webp", "/smr-frontend/staging/images/smm_hand.webp", "/smr-frontend/staging/images/smm_icon_white.webp", "/smr-frontend/staging/manifest.json", "/smr-frontend/staging/robots.txt", "/smr-frontend/staging/smui.css"];
const t = self;
const a = `cache${s}`;
const i = e.concat(n);
const m = new Set(i);
t.addEventListener("install", (s2) => {
  s2.waitUntil(caches.open(a).then((s3) => s3.addAll(i)).then(() => {
    t.skipWaiting();
  }));
});
t.addEventListener("activate", (s2) => {
  s2.waitUntil(caches.keys().then(async (s3) => {
    for (const e2 of s3) {
      if (e2 !== a) {
        await caches.delete(e2);
      }
    }
    t.clients.claim();
  }));
});
async function r(e2) {
  const n2 = await caches.open(`offline${s}`);
  try {
    const s2 = await fetch(e2);
    n2.put(e2, s2.clone());
    return s2;
  } catch (s2) {
    const t2 = await n2.match(e2);
    if (t2) {
      return t2;
    }
    throw s2;
  }
}
t.addEventListener("fetch", (s2) => {
  if (s2.request.method !== "GET" || s2.request.headers.has("range")) {
    return;
  }
  const e2 = new URL(s2.request.url);
  const n2 = e2.protocol.startsWith("http");
  const t2 = e2.hostname === self.location.hostname && e2.port !== self.location.port;
  const a2 = e2.host === self.location.host && m.has(e2.pathname);
  const i2 = s2.request.cache === "only-if-cached" && !a2;
  if (n2 && !t2 && !i2 && a2 && !s2.request.url.includes("start")) {
    s2.respondWith((async () => {
      const e3 = a2 && await caches.match(s2.request);
      return e3 || r(s2.request);
    })());
  }
});
//# sourceMappingURL=service-worker.js.map
