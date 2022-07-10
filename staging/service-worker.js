const s = { toString: () => {
  throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
} };
const e = ["/smr-frontend/staging/_app/immutable/start-e233b0e8.js", "/smr-frontend/staging/_app/immutable/pages/__layout.svelte-c538e5c1.js", "/smr-frontend/staging/_app/immutable/assets/pages/__layout.svelte-97f33427.css", "/smr-frontend/staging/_app/immutable/error.svelte-39ea9615.js", "/smr-frontend/staging/_app/immutable/pages/admin/index.svelte-b0f1310d.js", "/smr-frontend/staging/_app/immutable/assets/pages/admin/index.svelte-5626093a.css", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/_smlVersionId_/edit.svelte-33f3f6d0.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/index.svelte-97135a14.js", "/smr-frontend/staging/_app/immutable/pages/admin/sml-versions/new.svelte-bb0d6bd2.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-mods.svelte-0603af46.js", "/smr-frontend/staging/_app/immutable/pages/admin/unapproved-versions.svelte-7c79e8e2.js", "/smr-frontend/staging/_app/immutable/pages/api-docs/index.svelte-77ff1af8.js", "/smr-frontend/staging/_app/immutable/assets/pages/api-docs/index.svelte-78bc10e2.css", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/edit.svelte-2846a09c.js", "/smr-frontend/staging/_app/immutable/pages/guide/_guideId_/index.svelte-a4a116c8.js", "/smr-frontend/staging/_app/immutable/pages/guides/index.svelte-4861e675.js", "/smr-frontend/staging/_app/immutable/pages/help/index.svelte-873bf8dd.js", "/smr-frontend/staging/_app/immutable/pages/index.svelte-618ffd25.js", "/smr-frontend/staging/_app/immutable/assets/pages/index.svelte-26ffeaff.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/edit.svelte-f470ca09.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/index.svelte-47780268.js", "/smr-frontend/staging/_app/immutable/assets/pages/mod/_modId_/index.svelte-b256f0fe.css", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/new-version.svelte-984c6398.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/edit.svelte-11f6c079.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/index.svelte-e4f80baf.js", "/smr-frontend/staging/_app/immutable/pages/mod/_modId_/version/_versionId_/view.svelte-195ba913.js", "/smr-frontend/staging/_app/immutable/pages/mods/index.svelte-e28367fe.js", "/smr-frontend/staging/_app/immutable/assets/pages/mods/index.svelte-e99b51f7.css", "/smr-frontend/staging/_app/immutable/pages/new-guide/index.svelte-1dc018c3.js", "/smr-frontend/staging/_app/immutable/pages/new-mod/index.svelte-ebd49339.js", "/smr-frontend/staging/_app/immutable/pages/privacy-policy/index.svelte-2d71a51e.js", "/smr-frontend/staging/_app/immutable/assets/pages/privacy-policy/index.svelte-84346e15.css", "/smr-frontend/staging/_app/immutable/pages/settings/index.svelte-a58b7416.js", "/smr-frontend/staging/_app/immutable/pages/sml-versions/index.svelte-e0566164.js", "/smr-frontend/staging/_app/immutable/pages/tools/index.svelte-5b9b3709.js", "/smr-frontend/staging/_app/immutable/pages/tos/index.svelte-d43b4e9f.js", "/smr-frontend/staging/_app/immutable/assets/pages/tos/index.svelte-ba1ec5fe.css", "/smr-frontend/staging/_app/immutable/pages/user/_userId_/index.svelte-d207f768.js", "/smr-frontend/staging/_app/immutable/chunks/extras-71f1917d.js", "/smr-frontend/staging/_app/immutable/chunks/forms-a767280e.js", "/smr-frontend/staging/_app/immutable/chunks/jszip-581b0412.js", "/smr-frontend/staging/_app/immutable/chunks/vendor-71586dff.js", "/smr-frontend/staging/_app/immutable/chunks/paths-396f020f.js", "/smr-frontend/staging/_app/immutable/chunks/singletons-d1fb5791.js", "/smr-frontend/staging/_app/immutable/chunks/preload-helper-bb9ec52f.js", "/smr-frontend/staging/_app/immutable/chunks/env-6d58f0dd.js", "/smr-frontend/staging/_app/immutable/chunks/global-12cd1b57.js", "/smr-frontend/staging/_app/immutable/chunks/user-aa766597.js", "/smr-frontend/staging/_app/immutable/chunks/navigation-fe373893.js", "/smr-frontend/staging/_app/immutable/chunks/launcher-330dbfa3.js", "/smr-frontend/staging/_app/immutable/chunks/api-914d5f30.js", "/smr-frontend/staging/_app/immutable/chunks/graphql-587ea9ba.js", "/smr-frontend/staging/_app/immutable/chunks/stores-b24fbbcb.js", "/smr-frontend/staging/_app/immutable/chunks/Toast-a744ab82.js", "/smr-frontend/staging/_app/immutable/chunks/MetaDescriptors-f6373408.js", "/smr-frontend/staging/_app/immutable/chunks/routing-3e924f8c.js", "/smr-frontend/staging/_app/immutable/chunks/SMLVersionForm-3ce73727.js", "/smr-frontend/staging/_app/immutable/assets/SMLVersionForm-676fb2b9.css", "/smr-frontend/staging/_app/immutable/chunks/forms-5941be64.js", "/smr-frontend/staging/_app/immutable/chunks/markdown-bc68363c.js", "/smr-frontend/staging/_app/immutable/chunks/PageControls-bcea2d9e.js", "/smr-frontend/staging/_app/immutable/chunks/formatting-a4ea5227.js", "/smr-frontend/staging/_app/immutable/chunks/GuideForm-7de2a4af.js", "/smr-frontend/staging/_app/immutable/assets/GuideForm-00ff8b80.css", "/smr-frontend/staging/_app/immutable/chunks/gql-815aec37.js", "/smr-frontend/staging/_app/immutable/chunks/GuideCard-9f245da5.js", "/smr-frontend/staging/_app/immutable/chunks/FicsitCard-b74145d9.js", "/smr-frontend/staging/_app/immutable/assets/FicsitCard-760e8774.css", "/smr-frontend/staging/_app/immutable/chunks/uplugin-726ef6b7.js", "/smr-frontend/staging/_app/immutable/chunks/ModCard-38914b8e.js", "/smr-frontend/staging/_app/immutable/chunks/CompatibilityButton-47b89744.js", "/smr-frontend/staging/_app/immutable/chunks/ModForm-a04aa803.js", "/smr-frontend/staging/_app/immutable/assets/ModForm-698dd02f.css", "/smr-frontend/staging/_app/immutable/chunks/VersionForm-d9241568.js", "/smr-frontend/staging/_app/immutable/assets/VersionForm-52f6f248.css", "/smr-frontend/staging/_app/immutable/chunks/custom_protocol-9a42c2ee.js"];
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
