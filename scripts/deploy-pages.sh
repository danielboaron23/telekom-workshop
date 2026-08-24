#!/bin/bash
# Build the app + Storybook as a static site and publish to GitHub Pages.
#
#   ./scripts/deploy-pages.sh          # build + verify locally only
#   ./scripts/deploy-pages.sh --push   # build + push to the gh-pages branch
#
# Live URLs:
#   app       → https://danielboaron23.github.io/telekom-workshop/
#   storybook → https://danielboaron23.github.io/telekom-workshop/storybook/
set -euo pipefail
cd "$(dirname "$0")/.."

BASE=/telekom-workshop

rm -rf out storybook-static

echo "▸ Building app (static export, basePath $BASE)…"
GITHUB_PAGES=1 npx next build

echo "▸ Building Storybook…"
npx storybook build

# Plain <img src="/icons/…"> and "/images/…" don't get Next's basePath —
# rewrite them in the exported text files (guard against double-prefixing).
echo "▸ Rewriting absolute asset paths…"
find out -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.txt' -o -name '*.json' \) \
  -exec perl -pi -e "s{(?<!$(basename $BASE))(/(?:icons|images)/)}{$BASE\$1}g" {} +
find storybook-static -type f \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.json' \) \
  -exec perl -pi -e "s{(?<!storybook)(/(?:icons|images)/)}{$BASE/storybook\$1}g" {} +

cp -R storybook-static out/storybook
touch out/.nojekyll   # keep Pages from ignoring _next/

echo "▸ Static site ready in out/ ($(du -sh out | cut -f1))"

if [[ "${1:-}" == "--push" ]]; then
  echo "▸ Publishing to gh-pages…"
  REMOTE=$(git remote get-url origin)
  (
    cd out
    git init -q -b gh-pages
    git add -A
    git -c core.hooksPath=/dev/null commit -qm "Deploy $(git -C .. rev-parse --short HEAD)"
    git push -f -q "$REMOTE" gh-pages
  )
  rm -rf out/.git
  echo "✓ Pushed. App: https://danielboaron23.github.io$BASE/  ·  Storybook: https://danielboaron23.github.io$BASE/storybook/"
fi
