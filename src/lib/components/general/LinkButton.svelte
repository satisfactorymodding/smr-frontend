<script lang="ts">
  interface Props {
    url: string;
    icon: string;
    extraCss?: string;
    children?: import('svelte').Snippet;
  }

  let { url, icon, extraCss = '', children }: Props = $props();
</script>

<a href={url} target="_blank" rel="noopener" class={`variant-ghost-primary btn btn-sm ${extraCss}`}>
  <span
    >{#if children}{@render children()}{:else}Unset button text!{/if}</span>
  <span class="material-icons">{icon}</span>
</a>
