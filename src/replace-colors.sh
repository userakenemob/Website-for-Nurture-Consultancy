#!/bin/bash
# Script to replace emerald and teal colors with prime green (primary)

# Replace gradients
find . -name "*.tsx" -type f -exec sed -i '' \
  -e 's/from-emerald-600 to-teal-600/from-primary-500 to-primary-600/g' \
  -e 's/from-emerald-500 to-teal-500/from-primary-500 to-primary-600/g' \
  -e 's/from-emerald-400 to-teal-400/from-primary-400 to-primary-500/g' \
  -e 's/from-teal-400 to-emerald-400/from-primary-400 to-primary-500/g' \
  -e 's/from-emerald-500\/10 to-teal-500\/10/from-primary-500\/10 to-primary-600\/10/g' \
  {} \;

# Replace solid colors
find . -name "*.tsx" -type f -exec sed -i '' \
  -e 's/emerald-600/primary-500/g' \
  -e 's/emerald-500/primary-500/g' \
  -e 's/emerald-400/primary-400/g' \
  -e 's/emerald-200/primary-200/g' \
  -e 's/emerald-100/primary-100/g' \
  -e 's/emerald-50/primary-50/g' \
  -e 's/emerald-700/primary-700/g' \
  -e 's/teal-600/primary-600/g' \
  -e 's/teal-500/primary-500/g' \
  -e 's/teal-200/primary-200/g' \
  -e 's/teal-50/primary-50/g' \
  {} \;

echo "Color replacement complete!"
