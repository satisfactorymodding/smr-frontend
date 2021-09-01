<script lang="ts">
  import type { User } from '$lib/generated';

  export let user!: Pick<User, 'created_at'>;
</script>

<div class="text-lg">
  <h3 class="text-2xl my-4 font-bold">Info</h3>
  <!-- TODO Nice Date -->
  <span><strong>Created:</strong> {user.created_at}</span><br />
</div>
