<script lang="ts">
  import {generateIcon} from "./generate-icon";

  let data: { attributes: { [key: string]: unknown }, body: string };
  $: data = generateIcon($$props);
</script>

<svg {...data.attributes}>
  {@html data.body}
</svg>
