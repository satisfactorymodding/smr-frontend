<script lang="ts">
  import type { Guide } from '$lib/generated';
  import Card, { Content } from '@smui/card';
  import { prettyDate } from '$lib/utils/formatting';

  export let guide!: Pick<Guide, 'created_at'>;
</script>

<Card>
  <Content>
    <div class="text-lg">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <span><strong>Created:</strong> {prettyDate(guide.created_at)}</span><br />
    </div>
  </Content>
</Card>
