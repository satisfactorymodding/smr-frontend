#!/usr/bin/env sh

display_error() {
    echo "$1 is not defined, are you sure you correctly loaded the environment variables for the environment you wish to download translations for?"
    exit 1
}

if [ -z "${PUBLIC_TOLGEE_API_URL}" ]; then
    display_error "PUBLIC_TOLGEE_API_URL"
else
    echo "Using PUBLIC_TOLGEE_API_URL of ${PUBLIC_TOLGEE_API_URL}"
fi

if [ -z "${PUBLIC_TOLGEE_API_KEY}" ]; then
    display_error "PUBLIC_TOLGEE_API_KEY"
else
  echo "Using PUBLIC_TOLGEE_API_KEY of ${PUBLIC_TOLGEE_API_KEY}"
fi

CURL_URL="${PUBLIC_TOLGEE_API_URL}/v2/projects/export"

if ! curl $CURL_URL -H "X-API-Key: ${PUBLIC_TOLGEE_API_KEY}" --output translations.zip; then
    echo "Failed to download translation zip file? Tried using URL:"
    echo $CURL_URL
    exit 1
fi

unzip -o translations.zip -d src/i18n/

rm translations.zip

echo "Translation download appears to have succeeded. Be sure to check above for error messages anyways."
