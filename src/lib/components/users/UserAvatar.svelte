<script lang="ts">
  import { assets } from '$app/paths';

  interface Props {
    avatar: string;
    username: string;
  }

  let { avatar, username }: Props = $props();

  let userAvatar = $derived(avatar || assets + '/images/no_image.webp');
</script>

<div>
  <img class="w-full max-w-full rounded-lg sm:max-w-lg" src={userAvatar} alt="Avatar for {username}" />
</div>
