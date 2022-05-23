# Copied and modified from https://github.dev/tilfinltd/aws-extend-switch-roles/tree/main/bin
mkdir -p dist/chrome/js
mkdir -p dist/firefox/js

worker=dist/chrome/js/worker.js

rollup src/worker.js --file $worker

\cp -f $worker dist/firefox/js/worker.js

jq -s '.[0] * .[1]' manifest.json manifest_chrome.json > dist/chrome/manifest.json
jq -s '.[0] * .[1]' manifest.json manifest_firefox.json > dist/firefox/manifest.json

echo "build done"
