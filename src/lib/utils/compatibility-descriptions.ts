import type { CompatibilityState, ControllerCompatibilityState } from '$lib/generated';
import type { TolgeeInstance } from '@tolgee/svelte';

export const compatibilityStateDescriptions: Record<CompatibilityState | 'Unknown', string> = {
  Works: 'compatibility-info.state.works.description',
  Damaged: 'compatibility-info.state.damaged.description',
  Broken: 'compatibility-info.state.broken.description',
  Unknown: 'compatibility-info.state.unknown.description'
};

export const controllerCompatibilityStateDescriptions: Record<ControllerCompatibilityState, string> = {
  Untested: 'controller-compatibility-info.state.untested.description',
  Unsupported: 'controller-compatibility-info.state.unsupported.description',
  Partial: 'controller-compatibility-info.state.partial.description',
  Implicit: 'controller-compatibility-info.state.implicit.description',
  Supported: 'controller-compatibility-info.state.supported.description'
};

export const getCompatibilityStateDescriptionFor = (state: CompatibilityState | 'Unknown', tolgee: TolgeeInstance): string =>
  tolgee.t(compatibilityStateDescriptions[state]);

export const getControllerCompatibilityStateDescriptionFor = (
  state: ControllerCompatibilityState,
  tolgee: TolgeeInstance
): string => tolgee.t(controllerCompatibilityStateDescriptions[state]);
