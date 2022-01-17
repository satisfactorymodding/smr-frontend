import satisfies from 'semver/functions/satisfies.js';
import minVersion from 'semver/ranges/min-version.js';
import type { Maybe, Version } from '$lib/generated';

export const modStatus = (latestVersions?: {
  alpha?: Maybe<Pick<Version, 'sml_version'>>;
  beta?: Maybe<Pick<Version, 'sml_version'>>;
  release?: Maybe<Pick<Version, 'sml_version'>>;
}) => {
  if (!latestVersions) {
    return 'outdated';
  }

  let result: 'outdated' | 'own-risk' = 'outdated';
  for (const releaseType of Object.keys(latestVersions)) {
    const version = latestVersions[releaseType];
    if (version && version.sml_version) {
      try {
        if (satisfies(minVersion(version.sml_version), '>=3.0.0')) {
          if (satisfies(minVersion(version.sml_version), '>=3.2.0')) {
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
