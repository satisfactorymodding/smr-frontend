<script lang="ts">
  import { valueForUnspecifiedDisclosure, valueForNoUsageDisclosure } from '$lib/utils/mod';
  import { getTolgee, getTranslate, T } from '@tolgee/svelte';

  // eslint bug? https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
  // eslint-disable-next-line no-shadow
  enum NetworkDisclosureState {
    Unspecified = 'Unspecified',
    NoNetworkUsage = 'Does not contact external networks',
    YesNetworkUsage = 'Contacts external networks'
  }

  const networkDisclosureStateDescriptionKeys: Record<NetworkDisclosureState, string> = {
    Unspecified: 'mod.network_disclosure.state.unspecified.description',
    'Does not contact external networks': 'mod.network_disclosure.state.no_network_usage.description',
    'Contacts external networks': 'mod.network_disclosure.state.yes_network_usage.description'
  };

  export let disclosure: string | null = null;

  let disclosureState = NetworkDisclosureState.Unspecified;
  disclosureState =
    disclosure === null
      ? NetworkDisclosureState.Unspecified
      : disclosure.length === 0
        ? NetworkDisclosureState.NoNetworkUsage
        : NetworkDisclosureState.YesNetworkUsage;

  let oldDisclosure: string | null = null;
  oldDisclosure = disclosure;

  const onStatePickerChange = () => {
    if (disclosure?.length > 0) {
      // Hold onto the user's previously entered value if they explore other dropdown options.
      oldDisclosure = disclosure;
    }

    disclosure = {
      [NetworkDisclosureState.Unspecified]: valueForUnspecifiedDisclosure,
      [NetworkDisclosureState.NoNetworkUsage]: valueForNoUsageDisclosure,
      [NetworkDisclosureState.YesNetworkUsage]: oldDisclosure
    }[disclosureState];
  };

  export const { t } = getTranslate();
  export const tolgee = getTolgee().value;
</script>

<label class="label">
  <span class="underline decoration-dotted" title={$t('mod.network_disclosure.header.tooltip')}
    ><T keyName="mod.network_disclosure.header" /></span>
  <select class="select" style="margin-bottom: 10px" bind:value={disclosureState} on:change={onStatePickerChange}>
    {#each Object.values(NetworkDisclosureState) as state}
      <option value={state}>{state}</option>
    {/each}
  </select>
  <p
    class="compatibility-state-description pb-4 {disclosureState === NetworkDisclosureState.Unspecified
      ? 'text-warning-500'
      : ''}">
    <T keyName={networkDisclosureStateDescriptionKeys[disclosureState]} />
  </p>
</label>
{#if disclosureState == NetworkDisclosureState.YesNetworkUsage}
  <label class="label">
    <span><T keyName="mod.network_disclosure.developer.description.header" /></span>
    <textarea
      class="textarea p-4"
      bind:value={disclosure}
      placeholder={$t('mod.network_disclosure.developer.description.placeholder')} />
  </label>
{/if}
