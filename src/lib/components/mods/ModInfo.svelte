<script lang="ts">
  import type { Mod } from '$lib/generated';
  import Card, { Content } from '@smui/card';

  export let mod!: Pick<Mod, 'source_url' | 'created_at' | 'views' | 'downloads' | 'mod_reference'>;
</script>

<Card>
  <Content>
    <div class="text-lg">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span
        ><strong>Source:</strong> <a class="underline text-yellow-500" href={mod.source_url}>{mod.source_url}</a></span
      ><br />
      <!-- TODO Nice Date -->
      <span><strong>Created:</strong> {mod.created_at}</span><br />
      <span><strong>Views:</strong> {mod.views}</span><br />
      <span><strong>Downloads:</strong> {mod.downloads}</span><br />
      <span><strong>Reference:</strong> {mod.mod_reference}</span><br />
    </div>
  </Content>
</Card>
