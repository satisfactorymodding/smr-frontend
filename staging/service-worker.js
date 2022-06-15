const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-220f6a30.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-e9f81ce3.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-6f184e07.css", "/smr-frontend/staging/_app/immutable/error.svelte-4d615728.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-08639815.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-5626093a.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-d22aaa22.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-1c92060f.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-7a8df9bc.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-17ad74cb.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-c5b4b4fe.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-870fcf1d.js", "/smr-frontend/staging/_app/immutable/assets/pages/api-docs/index.svelte-78bc10e2.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-acdd98cc.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-9bb184c8.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-55f83b88.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-adb9b15f.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-a33bd89b.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-26ffeaff.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-0c0dea0b.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-c12ef378.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-b256f0fe.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-08bd6ac8.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-70cdcae4.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-e2bc5e30.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-a3d8e75a.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-68161c30.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-e99b51f7.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-27fbeec9.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-e215bb03.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-26f92703.js", "/smr-frontend/staging/_app/immutable/assets/pages/privacy-policy/index.svelte-84346e15.css", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-15127bc0.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-06d7e768.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-5cc8c043.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-da286b91.js", "/smr-frontend/staging/_app/immutable/assets/pages/tos/index.svelte-ba1ec5fe.css", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-e182d9a7.js", "/smr-frontend/staging/_app/immutable/chunks/extras-71f1917d.js", "/smr-frontend/staging/_app/immutable/chunks/forms-accbf7c0.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-581b0412.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-856b0c89.js", "/smr-frontend/staging/_app/immutable/chunks/paths-396f020f.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-d1fb5791.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-bb9ec52f.js", "/smr-frontend/staging/_app/immutable/chunks/env-6d58f0dd.js", "/smr-frontend/staging/_app/immutable/chunks/global-cdf1d74f.js", "/smr-frontend/staging/_app/immutable/chunks/user-6cdc3805.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-fe373893.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-75834ab8.js", "/smr-frontend/staging/_app/immutable/chunks/api-914d5f30.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-90c77071.js", "/smr-frontend/staging/_app/immutable/chunks/stores-607bd200.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-5ce16418.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-0fdcf703.js", "/smr-frontend/staging/_app/immutable/chunks/routing-689f9c1f.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-0afdc47a.js", "/smr-frontend/staging/_app/immutable/assets/SMLVersionForm-676fb2b9.css", "/smr-frontend/staging/_app/immutable/chunks/forms-0bb28cc5.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-f8c8918c.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-e87fc2b4.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-f0380eae.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-423d77ac.js", "/smr-frontend/staging/_app/immutable/assets/GuideForm-00ff8b80.css", "/smr-frontend/staging/_app/immutable/chunks/gql-7502c755.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-cff2a052.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-91b64f5c.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-760e8774.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-7155e5d3.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-190d05a9.js", "/smr-frontend/staging/_app/immutable/chunks/mod-27b77630.js", "/smr-frontend/staging/_app/immutable/chunks/ModForm-a8e66241.js", "/smr-frontend/staging/_app/immutable/assets/ModForm-698dd02f.css", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-b352263c.js", "/smr-frontend/staging/_app/immutable/assets/VersionForm-52f6f248.css", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a42c2ee.js"];
const n = ["/smr-frontend/staging/assets/android-chrome-192x192.png", "/smr-frontend/staging/assets/android-chrome-512x512.png", "/smr-frontend/staging/assets/apple-touch-icon.png", "/smr-frontend/staging/assets/browserconfig.xml", "/smr-frontend/staging/assets/favicon-16x16.png", "/smr-frontend/staging/assets/favicon-32x32.png", "/smr-frontend/staging/assets/favicon.ico", "/smr-frontend/staging/assets/fonts/flow-rounded.woff", "/smr-frontend/staging/assets/mstile-150x150.png", "/smr-frontend/staging/assets/safari-pinned-tab.svg", "/smr-frontend/staging/images/Satisfactory_KeyArt_1_1024x1024_NoLogo.webp", "/smr-frontend/staging/images/bg_nologo.webp", "/smr-frontend/staging/images/dog_aw_yis_pats.gif", "/smr-frontend/staging/images/dog_boing.gif", "/smr-frontend/staging/images/dog_stand.gif", "/smr-frontend/staging/images/mods_mobile.webp", "/smr-frontend/staging/images/no_image.webp", "/smr-frontend/staging/images/satisfactory_logo_full_color_small.webp", "/smr-frontend/staging/images/sf_modding_logo.webp", "/smr-frontend/staging/images/smm_background.webp", "/smr-frontend/staging/images/smm_hand.webp", "/smr-frontend/staging/images/smm_icon_white.webp", "/smr-frontend/staging/manifest.json", "/smr-frontend/staging/robots.txt", "/smr-frontend/staging/smui.css"];
const t = self;
const a = `cache${s}`;
const m = e.concat(n);
const i = new Set(m);
t.addEventListener("install", (s2) => {
  s2.waitUntil(caches.open(a).then((s3) => s3.addAll(m)).then(() => {
    t.skipWaiting();
  }));
});
t.addEventListener("activate", (s2) => {
  s2.waitUntil(caches.keys().then(async (s3) => {
    for (const e2 of s3) {
      if (e2 !== a)
        await caches.delete(e2);
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
    if (t2)
      return t2;
    throw s2;
  }
}
t.addEventListener("fetch", (s2) => {
  if (s2.request.method !== "GET" || s2.request.headers.has("range"))
    return;
  const e2 = new URL(s2.request.url);
  const n2 = e2.protocol.startsWith("http");
  const t2 = e2.hostname === self.location.hostname && e2.port !== self.location.port;
  const a2 = e2.host === self.location.host && i.has(e2.pathname);
  const m2 = s2.request.cache === "only-if-cached" && !a2;
  if (n2 && !t2 && !m2 && a2 && !s2.request.url.includes("start")) {
    s2.respondWith((async () => {
      const e3 = a2 && await caches.match(s2.request);
      return e3 || r(s2.request);
    })());
  }
});
//# sourceMappingURL=service-worker.js.map
