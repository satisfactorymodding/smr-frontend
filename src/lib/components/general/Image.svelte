<script lang="ts">
  import { browser } from '$app/env';
  import { imageCache } from '$lib/utils/image-cache';

  let src = $$props['src'];

  if (browser) {
    if (imageCache.has($$props['src'])) {
      src = imageCache.get($$props['src']);
    } else {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('CANVAS') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL();
        src = dataURL;
        imageCache.set($$props['src'], dataURL);
      };
      img.src = $$props['src'];
    }
  }

  $: sourceLess = {
    ...$$props,
    src: undefined
  };
</script>

<img {...sourceLess} alt={$$props['alt']} {src} />
