const e = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const s = ["/smr-frontend/main/_app/immutable/start-e0d2af66.js", "/smr-frontend/main/_app/immutable/pages/__layout.svelte-c1ee05d4.js", "/smr-frontend/main/_app/immutable/assets/pages/__layout.svelte-c5e39dfd.css", "/smr-frontend/main/_app/immutable/error.svelte-741545aa.js", "/smr-frontend/main/_app/immutable/pages/admin/index.svelte-844042e7.js", "/smr-frontend/main/_app/immutable/assets/pages/admin/index.svelte-dfc5337c.css", "/smr-frontend/main/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-76cb3552.js", "/smr-frontend/main/_app/immutable/pages/admin/sml-versions/index.svelte-229acee5.js", "/smr-frontend/main/_app/immutable/pages/admin/sml-versions/new.svelte-da1b99c1.js", "/smr-frontend/main/_app/immutable/pages/admin/unapproved-mods.svelte-d948d1e0.js", "/smr-frontend/main/_app/immutable/pages/admin/unapproved-versions.svelte-28a2dcac.js", "/smr-frontend/main/_app/immutable/pages/api-docs/index.svelte-1dac813a.js", "/smr-frontend/main/_app/immutable/assets/pages/api-docs/index.svelte-1c1e4dfd.css", "/smr-frontend/main/_app/immutable/pages/content-policy/index.svelte-60ccf8e6.js", "/smr-frontend/main/_app/immutable/pages/guide/_guideId_/edit.svelte-87d0a158.js", "/smr-frontend/main/_app/immutable/pages/guide/_guideId_/index.svelte-e269758b.js", "/smr-frontend/main/_app/immutable/pages/guides/index.svelte-07a6ea76.js", "/smr-frontend/main/_app/immutable/pages/help/index.svelte-97aee063.js", "/smr-frontend/main/_app/immutable/pages/index.svelte-875ee04f.js", "/smr-frontend/main/_app/immutable/assets/pages/index.svelte-fe20af75.css", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/edit.svelte-33e1e8db.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/index.svelte-ecd6149f.js", "/smr-frontend/main/_app/immutable/assets/pages/mod/_modId_/index.svelte-1e2ec0d7.css", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/new-version.svelte-85ca9fa4.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-677575da.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-b4a8d493.js", "/smr-frontend/main/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-4f64cedd.js", "/smr-frontend/main/_app/immutable/pages/mods/index.svelte-ce9f0d36.js", "/smr-frontend/main/_app/immutable/assets/pages/mods/index.svelte-07b34bd3.css", "/smr-frontend/main/_app/immutable/pages/new-guide/index.svelte-b0a56e09.js", "/smr-frontend/main/_app/immutable/pages/new-mod/index.svelte-d38c3ab7.js", "/smr-frontend/main/_app/immutable/pages/privacy-policy/index.svelte-e826fd08.js", "/smr-frontend/main/_app/immutable/pages/settings/index.svelte-a33ca1a0.js", "/smr-frontend/main/_app/immutable/pages/sml-versions/index.svelte-cdab9c54.js", "/smr-frontend/main/_app/immutable/pages/tools/index.svelte-58ca9cf0.js", "/smr-frontend/main/_app/immutable/pages/tos/index.svelte-23a4c596.js", "/smr-frontend/main/_app/immutable/pages/user/_userId_/index.svelte-4571d2fc.js", "/smr-frontend/main/_app/immutable/chunks/extras-8984d02f.js", "/smr-frontend/main/_app/immutable/chunks/forms-5fcb6172.js", "/smr-frontend/main/_app/immutable/chunks/jszip-0721729d.js", "/smr-frontend/main/_app/immutable/chunks/vendor-93f46a94.js", "/smr-frontend/main/_app/immutable/chunks/paths-1c47712a.js", "/smr-frontend/main/_app/immutable/chunks/singletons-cdeec3fd.js", "/smr-frontend/main/_app/immutable/chunks/preload-helper-f72398ae.js", "/smr-frontend/main/_app/immutable/chunks/global-98137ee8.js", "/smr-frontend/main/_app/immutable/chunks/user-bfea9258.js", "/smr-frontend/main/_app/immutable/chunks/navigation-ce539261.js", "/smr-frontend/main/_app/immutable/chunks/launcher-0869f499.js", "/smr-frontend/main/_app/immutable/chunks/api-0a391947.js", "/smr-frontend/main/_app/immutable/chunks/graphql-f19d0585.js", "/smr-frontend/main/_app/immutable/chunks/stores-84e1d086.js", "/smr-frontend/main/_app/immutable/chunks/Toast-a853093a.js", "/smr-frontend/main/_app/immutable/chunks/MetaDescriptors-5ea9952a.js", "/smr-frontend/main/_app/immutable/chunks/routing-c6322149.js", "/smr-frontend/main/_app/immutable/chunks/SMLVersionForm-de4f067b.js", "/smr-frontend/main/_app/immutable/assets/GuideForm-81c8f5a1.css", "/smr-frontend/main/_app/immutable/chunks/forms-2903de53.js", "/smr-frontend/main/_app/immutable/chunks/markdown-6a2ff7f0.js", "/smr-frontend/main/_app/immutable/chunks/PageControls-1c8f4bc9.js", "/smr-frontend/main/_app/immutable/chunks/formatting-b1e7d458.js", "/smr-frontend/main/_app/immutable/chunks/GuideForm-d1f26ca2.js", "/smr-frontend/main/_app/immutable/chunks/gql-d96f7ff1.js", "/smr-frontend/main/_app/immutable/chunks/GuideCard-3eaa8d92.js", "/smr-frontend/main/_app/immutable/chunks/FicsitCard-e155e469.js", "/smr-frontend/main/_app/immutable/assets/FicsitCard-4de49b41.css", "/smr-frontend/main/_app/immutable/chunks/uplugin-ea22b63e.js", "/smr-frontend/main/_app/immutable/chunks/ModCard-33b7b4a1.js", "/smr-frontend/main/_app/immutable/chunks/CompatibilityButton-ebac6b6a.js", "/smr-frontend/main/_app/immutable/chunks/ModForm-b21c0d5a.js", "/smr-frontend/main/_app/immutable/chunks/ModCompatibilityEdit-13c30fdc.js", "/smr-frontend/main/_app/immutable/chunks/VersionForm-62ee3168.js", "/smr-frontend/main/_app/immutable/assets/VersionForm-a85b24ef.css", "/smr-frontend/main/_app/immutable/chunks/custom_protocol-9a0f337a.js"];
const n = ["/smr-frontend/main/assets/android-chrome-192x192.png", "/smr-frontend/main/assets/android-chrome-512x512.png", "/smr-frontend/main/assets/apple-touch-icon.png", "/smr-frontend/main/assets/browserconfig.xml", "/smr-frontend/main/assets/favicon-16x16.png", "/smr-frontend/main/assets/favicon-32x32.png", "/smr-frontend/main/assets/favicon.ico", "/smr-frontend/main/assets/fonts/flow-rounded.woff", "/smr-frontend/main/assets/mstile-150x150.png", "/smr-frontend/main/assets/safari-pinned-tab.svg", "/smr-frontend/main/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp", "/smr-frontend/main/images/bg_nologo.webp", "/smr-frontend/main/images/dog_aw_yis_pats.gif", "/smr-frontend/main/images/dog_boing.gif", "/smr-frontend/main/images/dog_stand.gif", "/smr-frontend/main/images/mods_mobile.webp", "/smr-frontend/main/images/no_image.webp", "/smr-frontend/main/images/satisfactory_logo_full_color_small.webp", "/smr-frontend/main/images/sf_modding_logo.webp", "/smr-frontend/main/images/smm_background.webp", "/smr-frontend/main/images/smm_hand.webp", "/smr-frontend/main/images/smm_icon_white.webp", "/smr-frontend/main/manifest.json", "/smr-frontend/main/robots.txt", "/smr-frontend/main/smui.css"];
const a = self;
const m = `cache${e}`;
const t = s.concat(n);
const i = new Set(t);
a.addEventListener("install", (e2) => {
  e2.waitUntil(caches.open(m).then((e3) => e3.addAll(t)).then(() => {
    a.skipWaiting();
  }));
});
a.addEventListener("activate", (e2) => {
  e2.waitUntil(caches.keys().then(async (e3) => {
    for (const s2 of e3) {
      if (s2 !== m) {
        await caches.delete(s2);
      }
    }
    a.clients.claim();
  }));
});
async function r(s2) {
  const n2 = await caches.open(`offline${e}`);
  try {
    const e2 = await fetch(s2);
    n2.put(s2, e2.clone());
    return e2;
  } catch (e2) {
    const a2 = await n2.match(s2);
    if (a2) {
      return a2;
    }
    throw e2;
  }
}
a.addEventListener("fetch", (e2) => {
  if (e2.request.method !== "GET" || e2.request.headers.has("range")) {
    return;
  }
  const s2 = new URL(e2.request.url);
  const n2 = s2.protocol.startsWith("http");
  const a2 = s2.hostname === self.location.hostname && s2.port !== self.location.port;
  const m2 = s2.host === self.location.host && i.has(s2.pathname);
  const t2 = e2.request.cache === "only-if-cached" && !m2;
  if (n2 && !a2 && !t2 && m2 && !e2.request.url.includes("start")) {
    e2.respondWith((async () => {
      const s3 = m2 && await caches.match(e2.request);
      return s3 || r(e2.request);
    })());
  }
});
//# sourceMappingURL=service-worker.js.map
