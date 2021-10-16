<script lang="ts">
  import { assets } from '$app/paths';

  export let avatar!: string;
  export let username!: string;

  $: userAvatar = avatar || assets + '/images/no_image.png';

  // TODO Outdated Flag
</script>

<div>
  <!-- TODO Fallback to default Logo -->
  <img class="rounded-lg max-w-lg" src={userAvatar} alt="Avatar for {username}" />
</div>
