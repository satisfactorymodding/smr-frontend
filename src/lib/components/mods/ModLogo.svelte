<script lang="ts">
  import {assets} from "$app/paths";

  export let modLogo!: string;
  export let modName!: string;

  $: logo = modLogo || assets + '/images/no_image.png'

  // TODO Outdated Flag
</script>

<div>
  <img class="rounded-lg max-w-lg" src={logo} alt="Logo for {modName}"/>
</div>
