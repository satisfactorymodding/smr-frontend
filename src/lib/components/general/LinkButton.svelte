<script lang="ts">
  export let url: string;
  export let icon: string;
  export let extraCss = '';
</script>

<a href={url} target="_blank" rel="noopener" class={`variant-ghost-primary btn btn-sm ${extraCss}`}>
  <span><slot>Unset button text!</slot></span>
  <span class="material-icons">{icon}</span>
</a>
