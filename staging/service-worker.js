const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-c6303d68.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-a36ea3c3.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-4724dd38.css", "/smr-frontend/staging/_app/immutable/error.svelte-167c3dc1.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-ac948040.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-6256c3e8.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-5bd56b1e.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-52e6da69.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-14ca5e42.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-aa2066e0.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-89894577.js", "/smr-frontend/staging/_app/immutable/assets/pages/privacy-policy/index.svelte-bcc48566.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-e99dd68c.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-51bf46c3.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-ac6c84e3.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-8007ea41.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-b98cd1d1.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-23074c07.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-32ed828e.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-261ff11c.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-970f423b.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-04dfa5d5.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-bb7e8482.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-f65412d6.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-4b02f666.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-78e3639c.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-3a53a2a5.js", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-407bfb2d.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-a8ff904c.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-bd44fa4b.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-76c8751e.js", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-a2818068.js", "/smr-frontend/staging/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/staging/_app/immutable/chunks/forms-b3413c18.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-d4970a5c.js", "/smr-frontend/staging/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-b2fcde9f.js", "/smr-frontend/staging/_app/immutable/chunks/global-c1cfb5a7.js", "/smr-frontend/staging/_app/immutable/chunks/user-b54187cf.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-3023bd8e.js", "/smr-frontend/staging/_app/immutable/chunks/api-bb6d5972.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-6d78cc7d.js", "/smr-frontend/staging/_app/immutable/chunks/stores-4154e90f.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-02e245a9.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-98c69836.js", "/smr-frontend/staging/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-8c44bb58.js", "/smr-frontend/staging/_app/immutable/assets/ModForm-cc1db5c2.css", "/smr-frontend/staging/_app/immutable/chunks/forms-9bab20ef.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-c0ff9e5d.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-b1e7d458.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-4822f01b.js", "/smr-frontend/staging/_app/immutable/chunks/gql-5e9c2b81.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-db370a66.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-1556e282.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-57fe26ab.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-8589f96c.js", "/smr-frontend/staging/_app/immutable/chunks/CompatibilityButton-0031b3c6.js", "/smr-frontend/staging/_app/immutable/chunks/ModForm-49174953.js", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-3f2349d8.js", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
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
