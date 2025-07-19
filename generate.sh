#!/usr/bin/env bash
set -e

if [ $# -lt 1 ]; then
  echo "Usage: $0 <entity1> [entity2 …]"
  exit 1
fi

for name in "$@"; do
  echo "⟳ Generating module, controller & service for '$name'…"
  nest generate module    "$name"
  nest generate controller "$name/$name" --flat
  nest generate service    "$name"
done
