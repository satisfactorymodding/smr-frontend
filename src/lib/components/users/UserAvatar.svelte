<script lang="ts">
  import { assets } from '$app/paths';

  export let avatar!: string;
  export let username!: string;

  $: userAvatar = avatar || assets + '/images/no_image.webp';
</script>

<div>
  <img class="w-full max-w-full rounded-lg sm:max-w-lg" src={userAvatar} alt="Avatar for {username}" />
</div>
