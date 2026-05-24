import { ControllerCompatibilityState, type CompatibilityState } from '$lib/generated';
import type { TFnType } from '@tolgee/svelte';

export const compatibilityStateDescriptions: Record<CompatibilityState | 'Unknown', string> = {
  Unknown: 'compatibility-info.state.unknown.description',
  Broken: 'compatibility-info.state.broken.description',
  Damaged: 'compatibility-info.state.damaged.description',
  Works: 'compatibility-info.state.works.description'
};

export const controllerCompatibilityStateDescriptions: Record<ControllerCompatibilityState, string> = {
  Untested: 'controller-compatibility-info.state.untested.description',
  Unsupported: 'controller-compatibility-info.state.unsupported.description',
  Partial: 'controller-compatibility-info.state.partial.description',
  Implicit: 'controller-compatibility-info.state.implicit.description',
  Supported: 'controller-compatibility-info.state.supported.description'
};

export const getCompatibilityStateDescriptionFor = ($t: TFnType, state?: CompatibilityState | 'Unknown'): string =>
  $t(compatibilityStateDescriptions[state ?? 'Unknown']);

export const getControllerCompatibilityStateDescriptionFor = (
  $t: TFnType,
  state?: ControllerCompatibilityState
): string => $t(controllerCompatibilityStateDescriptions[state ?? ControllerCompatibilityState.Untested]);
