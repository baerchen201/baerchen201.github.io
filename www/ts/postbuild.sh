#!/bin/false
set -e

shopt -s globstar dotglob

cd "$(dirname $0)"
rm -rf **.ts .gitignore postbuild.sh

exit 0
