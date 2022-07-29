const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-1decf2bb.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-ff8539b7.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-67dfde20.css", "/smr-frontend/staging/_app/immutable/error.svelte-741545aa.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-844042e7.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-26a10517.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-c69242d2.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-765f34bd.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-7bc103e9.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-49d8099a.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-127f6149.js", "/smr-frontend/staging/_app/immutable/assets/pages/api-docs/index.svelte-1c1e4dfd.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-d8427f03.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-2bd65c25.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-6dfe3439.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-baa8c158.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-175b44e4.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-6d5394a4.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-1408eb7a.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-dca0358e.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-89266833.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-9d8d64fd.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-4f64cedd.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-d168b084.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-ee12e180.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-3ad082fb.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-e826fd08.js", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-5183c420.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-7db6b949.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-58ca9cf0.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-23a4c596.js", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-032eb9cc.js", "/smr-frontend/staging/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/staging/_app/immutable/chunks/forms-5fcb6172.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-93f46a94.js", "/smr-frontend/staging/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-b2fcde9f.js", "/smr-frontend/staging/_app/immutable/chunks/global-98137ee8.js", "/smr-frontend/staging/_app/immutable/chunks/user-bfea9258.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-0869f499.js", "/smr-frontend/staging/_app/immutable/chunks/api-bb6d5972.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-8819e72c.js", "/smr-frontend/staging/_app/immutable/chunks/stores-84e1d086.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-a853093a.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-5ea9952a.js", "/smr-frontend/staging/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-8d28ec3c.js", "/smr-frontend/staging/_app/immutable/assets/SMLVersionForm-1cc6d1a4.css", "/smr-frontend/staging/_app/immutable/chunks/forms-2903de53.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-1c8f4bc9.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-b1e7d458.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-d1f26ca2.js", "/smr-frontend/staging/_app/immutable/chunks/gql-d96f7ff1.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-3eaa8d92.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-e155e469.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-af7ef6f0.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-a30b1cd8.js", "/smr-frontend/staging/_app/immutable/chunks/CompatibilityButton-8de932ee.js", "/smr-frontend/staging/_app/immutable/chunks/ModForm-5ed519eb.js", "/smr-frontend/staging/_app/immutable/chunks/ModCompatibilityEdit-e972ffff.js", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-24b11432.js", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
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
