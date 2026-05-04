<script lang="ts">
  import { assets } from '$app/paths';

  export let modpackLogo!: string;
  export let modpackName!: string;

  $: logo = modpackLogo || assets + '/images/no_image.webp';
</script>

<div class="relative overflow-hidden">
  <div class="w-full max-w-full sm:max-w-lg">
    <img class="rounded-lg" src={logo} alt="Logo for {modpackName}" />
  </div>
</div>
