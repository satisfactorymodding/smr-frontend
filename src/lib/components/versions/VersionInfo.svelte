<script lang="ts">
  import type {Version} from "$lib/generated";

  export let version!: Pick<Version, 'created_at' | 'sml_version' | 'size' | 'stability' | 'downloads' | 'hash'>;
</script>

<div class="text-lg">
  <h3 class="text-2xl my-4 font-bold">Info</h3>
  <!-- TODO Nice Date -->
  <span><strong>Created:</strong> {version.created_at}</span><br/>
  <span><strong>Downloads:</strong> {version.downloads}</span><br/>
  <span><strong>SML Version:</strong> {version.sml_version}</span><br/>
  <span><strong>Stability:</strong> {version.stability}</span><br/>
  <!-- TODO Pretty Bytes -->
  <span><strong>Size:</strong> {version.size}</span><br/>
  <span><strong>Hash:</strong> {version.hash}</span>
</div>
