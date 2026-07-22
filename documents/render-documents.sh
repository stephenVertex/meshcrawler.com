#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
chrome_bin="${CHROME_BIN:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

if [[ ! -x "$chrome_bin" ]]; then
  echo "Google Chrome was not found at: $chrome_bin" >&2
  echo "Set CHROME_BIN to the path of a Chromium-compatible browser." >&2
  exit 1
fi

"$chrome_bin" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$script_dir/meshcrawler-proposal-template.pdf" \
  "file://$script_dir/meshcrawler-proposal-template.html"

"$chrome_bin" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$script_dir/meshcrawler-one-pager-template.pdf" \
  "file://$script_dir/meshcrawler-one-pager-template.html"

echo "Rendered MeshCrawler proposal and one-pager PDFs."
