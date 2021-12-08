<script lang="ts">
  import { assets } from '$app/paths';

  export let modLogo!: string;
  export let modName!: string;

  $: logo = modLogo || assets + '/images/no_image.png';

  // TODO Outdated Flag
</script>

<div>
  <img class="rounded-lg sm:max-w-lg max-w-full" src={logo} alt="Logo for {modName}" />
</div>
