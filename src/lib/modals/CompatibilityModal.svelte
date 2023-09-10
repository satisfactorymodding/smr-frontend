<script lang="ts">
  import CompatibilityInfo from "$lib/components/mods/compatibility/CompatibilityInfo.svelte";
  import type { CompatibilityInfoInput } from "$lib/generated";
  import { getTranslate } from "@tolgee/svelte";

  export let compatibility: CompatibilityInfoInput;

  export const { t } = getTranslate();
</script>

<div class="card p-4 flex flex-col gap-2">
  <h2 class="text-2xl">{$t('compatibility-info')}</h2>
  <div>
    <CompatibilityInfo {compatibility} />
  </div>
</div>
