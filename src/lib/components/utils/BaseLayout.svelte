<script lang="ts">
  import { assets } from '$app/paths';
  import MenuBar from '$lib/components/general/MenuBar.svelte';
  import SearchBox from '$lib/components/general/SearchBox.svelte';
  import LinksBox from '$lib/components/general/LinksBox.svelte';
  import Footer from '../general/Footer.svelte';
</script>

<div
  class="h-screen bg-center bg-cover grid fold"
  style={'background-image: url("' + assets + '/assets/header_bg_image.png")'}>
  <MenuBar />
  <div class="w-5/6 justify-self-center">
    <LinksBox />
    <SearchBox />
  </div>
  <div class="py-8 bg-black bg-opacity-70">
    <div class="w-5/6 mx-auto">
      <slot />
    </div>
  </div>
  <Footer />
</div>

<style lang="postcss">
  .fold {
    grid-template-rows: 50px min-content auto;
    row-gap: 1.5rem;
  }
</style>
