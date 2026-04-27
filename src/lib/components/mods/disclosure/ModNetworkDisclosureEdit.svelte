<script lang="ts">
  import { valueForUnspecifiedDisclosure, valueForNoUsageDisclosure } from '$lib/utils/mod';
  import { getTolgee, getTranslate, T } from '@tolgee/svelte';

  // Since network usage disclosure is stored as a null/empty string/non-empty string,
  // the enum of states only exists here on the frontend
  // eslint bug? https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
  // eslint-disable-next-line no-shadow
  enum NetworkDisclosureState {
    Unspecified,
    NoNetworkUsage,
    YesNetworkUsage
  }

  const optionTranslationKeys: Record<NetworkDisclosureState, string> = {
    [NetworkDisclosureState.Unspecified]: 'mod.network_disclosure.state.unspecified.option_name',
    [NetworkDisclosureState.NoNetworkUsage]: 'mod.network_disclosure.state.no_network_usage.option_name',
    [NetworkDisclosureState.YesNetworkUsage]: 'mod.network_disclosure.state.yes_network_usage.option_name'
  };

  const descriptionTranslationKeys: Record<NetworkDisclosureState, string> = {
    [NetworkDisclosureState.Unspecified]: 'mod.network_disclosure.state.unspecified.description',
    [NetworkDisclosureState.NoNetworkUsage]: 'mod.network_disclosure.state.no_network_usage.description',
    [NetworkDisclosureState.YesNetworkUsage]: 'mod.network_disclosure.state.yes_network_usage.description'
  };

  export let disclosure: string | null = null;

  let disclosureState = NetworkDisclosureState.Unspecified;
  // Determine disclosure state from the existing disclosure value
  disclosureState =
    disclosure === null
      ? NetworkDisclosureState.Unspecified
      : disclosure.length === 0
        ? NetworkDisclosureState.NoNetworkUsage
        : NetworkDisclosureState.YesNetworkUsage;

  let oldDisclosure: string | null = null;
  oldDisclosure = disclosure;
  export let canSubmitNetworkUsage = true;

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

    if (disclosureState != NetworkDisclosureState.YesNetworkUsage) {
      canSubmitNetworkUsage = true;
    } else if (disclosure == '') {
      canSubmitNetworkUsage = false;
    }
  };

  const onTextInputChange = () => {
    canSubmitNetworkUsage = disclosure != '';
  };

  export const { t } = getTranslate();
  export const tolgee = getTolgee().value;
</script>

<label class="label">
  <span class="underline decoration-dotted" title={$t('mod.network_disclosure.header.tooltip')}
    ><T keyName="mod.network_disclosure.header" /></span>
  <select class="select" style="margin-bottom: 10px" bind:value={disclosureState} on:change={onStatePickerChange}>
    {#each Object.values(NetworkDisclosureState).filter((v) => typeof v === 'number') as state}
      <option value={state}><T keyName={optionTranslationKeys[state]} /></option>
    {/each}
  </select>
  <p
    class="compatibility-state-description pb-4 {disclosureState === NetworkDisclosureState.Unspecified
      ? 'text-warning-500'
      : ''}">
    <T keyName={descriptionTranslationKeys[disclosureState]} />
  </p>
</label>
{#if disclosureState == NetworkDisclosureState.YesNetworkUsage}
  <label class="label">
    <span><T keyName="mod.network_disclosure.developer.description.header" /> *</span>
    <textarea
      class="textarea p-4"
      bind:value={disclosure}
      on:change={onTextInputChange}
      placeholder={$t('mod.network_disclosure.developer.description.placeholder')} />
  </label>
{/if}
