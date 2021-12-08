<script lang="ts">
  import { assets } from '$app/paths';

  export let avatar!: string;
  export let username!: string;

  $: userAvatar = avatar || assets + '/images/no_image.png';

  // TODO Outdated Flag
</script>

<div>
  <!-- TODO Fallback to default Logo -->
  <img class="rounded-lg sm:max-w-lg max-w-full" src={userAvatar} alt="Avatar for {username}" />
</div>
