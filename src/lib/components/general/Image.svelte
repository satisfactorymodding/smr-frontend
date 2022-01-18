<script lang="ts">
  import { browser } from '$app/env';
  import { imageCache } from '$lib/utils/image-cache';

  export let src: string;

  let realSrc = src;

  $: {
    if (browser) {
      const tempSrc = src;
      if (imageCache.has(tempSrc)) {
        realSrc = imageCache.get(tempSrc);
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
          realSrc = dataURL;
          imageCache.set(tempSrc, dataURL);
        };
        img.src = tempSrc;
      }
    }
  }

  $: sourceLess = {
    ...$$props,
    src: undefined
  };
</script>

<img {...sourceLess} alt={$$props['alt']} src={realSrc} />
