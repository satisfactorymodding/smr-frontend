#!/usr/bin/env sh

curl "$PUBLIC_TOLGEE_API_URL/v2/projects/export" -H "X-API-Key: $PUBLIC_TOLGEE_API_KEY" --output translations.zip

unzip -o translations.zip -d src/i18n/

rm translations.zip