<script lang="ts">
  import { assets } from '$app/paths';

  export let avatar!: string;
  export let username!: string;

  $: userAvatar = avatar || assets + '/images/no_image.webp';
</script>

<div>
  <img class="rounded-lg sm:max-w-lg max-w-full w-full" src={userAvatar} alt="Avatar for {username}" />
</div>
