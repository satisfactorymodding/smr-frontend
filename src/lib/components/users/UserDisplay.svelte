<script lang="ts">
  import { base, assets } from '$app/paths';

  interface Props {
    user: { id: string; username: string; avatar: string };
    size?: 'small' | 'large';
    role?: string;
    showLink?: boolean;
    gap?: 'small' | 'large';
  }

  let { user, size = 'large', role, showLink = true, gap = 'large' }: Props = $props();

  const avatarSize = size === 'small' ? 'h-7 w-7' : 'h-14 w-14';
  const gapSize = gap === 'small' ? 'gap-x-2' : 'gap-x-4';
  const avatarUrl = user.avatar || assets + '/images/no_image.webp';
</script>

<div class="grid auto-cols-max grid-flow-col {gapSize}">
  <div class="{avatarSize} rounded-full bg-cover" style={`background-image: url("${avatarUrl}")`}></div>
  <div class="grid grid-flow-row">
    {#if showLink}
      <a href="{base}/user/{user.id}/" class="text-yellow-500 underline">{user.username}</a>
    {:else}
      <span class="text-yellow-500">{user.username}</span>
    {/if}
    {#if role}
      <div>{role}</div>
    {/if}
  </div>
</div>
