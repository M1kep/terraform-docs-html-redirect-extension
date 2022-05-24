# Copied and modified from https://github.dev/tilfinltd/aws-extend-switch-roles/tree/main/bin
mkdir -p dist/chrome/js
mkdir -p dist/firefox/js

rollup src/chrome/worker.js --file dist/chrome/js/worker.js
rollup src/firefox/background.js --file dist/firefox/js/background.js

jq -s '.[0] * .[1]' manifest.json manifest_chrome.json > dist/chrome/manifest.json
jq -s '.[0] * .[1]' manifest.json manifest_firefox.json > dist/firefox/manifest.json

echo "build done"
