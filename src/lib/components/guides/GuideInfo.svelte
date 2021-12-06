<script lang="ts">
  import type { Guide } from '$lib/generated';
  import Card, { Content } from '@smui/card';

  export let guide!: Pick<Guide, 'created_at'>;
</script>

<Card>
  <Content>
    <div class="text-lg">
      <h3 class="text-2xl my-4 font-bold">Info</h3>
      <!-- TODO Nice Date -->
      <span><strong>Created:</strong> {guide.created_at}</span><br />
    </div>
  </Content>
</Card>
