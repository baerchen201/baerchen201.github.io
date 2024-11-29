#!/bin/false
set -e

shopt -s globstar dotglob

cd "$(dirname $0)"
rm -rf **.scss **.sass .gitignore postbuild.sh

exit 0
