const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-3ac98085.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-fb3ee620.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-6fca0ed9.css", "/smr-frontend/staging/_app/immutable/error.svelte-fd92d2cd.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-40b01f48.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-b536fb04.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-b5472fde.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-6404a959.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-4d7cfc41.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-4f674420.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-b789decf.js", "/smr-frontend/staging/_app/immutable/assets/pages/api-docs/index.svelte-1c1e4dfd.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-d83f2a0c.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-aa284406.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-a220d722.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-20457201.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-bca7f89e.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-e3ef700c.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-a1445a8d.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-0abfe292.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-6f4736c5.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-2f3c2f6f.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-bea2e66d.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-b5fa461a.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-bec6b42d.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-104628d8.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-f143a072.js", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-0bf6465a.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-18b8a017.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-35c18c80.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-7eed00ad.js", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-66e3179a.js", "/smr-frontend/staging/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/staging/_app/immutable/chunks/forms-b07cb9c7.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-5142eec8.js", "/smr-frontend/staging/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-b2fcde9f.js", "/smr-frontend/staging/_app/immutable/chunks/global-d21eb674.js", "/smr-frontend/staging/_app/immutable/chunks/user-d4c6e855.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-bc9eb8a9.js", "/smr-frontend/staging/_app/immutable/chunks/api-bb6d5972.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-cad820f4.js", "/smr-frontend/staging/_app/immutable/chunks/stores-8521e192.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-e8354faa.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-2c89eebb.js", "/smr-frontend/staging/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-a831e6e7.js", "/smr-frontend/staging/_app/immutable/assets/SMLVersionForm-1cc6d1a4.css", "/smr-frontend/staging/_app/immutable/chunks/forms-43f5c2ea.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-eeccfc1b.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-b1e7d458.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-cc92d5a7.js", "/smr-frontend/staging/_app/immutable/chunks/gql-a9b1b36c.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-4095afa1.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-cb069a10.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-c48b0124.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-95afee6d.js", "/smr-frontend/staging/_app/immutable/chunks/CompatibilityButton-842fdf46.js", "/smr-frontend/staging/_app/immutable/chunks/ModForm-80332e30.js", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-92d4af65.js", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
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
