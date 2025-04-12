import satisfies from 'semver/functions/satisfies.js';
import minVersion from 'semver/ranges/min-version.js';
import type { Maybe, Version } from '$lib/generated';

export const valueForUnspecifiedDisclosure: null = null;
export const valueForNoUsageDisclosure = '';

export const modStatus = (latestVersions?: {
  alpha?: Maybe<Pick<Version, 'game_version'>>;
  beta?: Maybe<Pick<Version, 'game_version'>>;
  release?: Maybe<Pick<Version, 'game_version'>>;
}) => {
  if (!latestVersions) {
    return 'outdated';
  }

  let result: 'outdated' | 'own-risk' = 'outdated';
  for (const releaseType of Object.keys(latestVersions)) {
    const version = latestVersions[releaseType];
    if (version && version.game_version) {
      try {
        if (satisfies(minVersion(version.game_version), '>=150216')) {
          if (satisfies(minVersion(version.game_version), '>=173618')) {
            return undefined;
          }
          result = 'own-risk';
        }
      } catch (e) {
        // Ignored
      }
    }
  }

  return result;
};
