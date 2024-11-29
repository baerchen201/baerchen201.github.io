#!/bin/bash
set -e

echo "Installing dependencies from npm..."
npm i

echo "Building typescript..."
node ./node_modules/typescript/bin/tsc
bash ./www/ts/postbuild.sh

echo "Building scss..."
node ./node_modules/sass/sass.js .
bash ./www/scss/postbuild.sh
