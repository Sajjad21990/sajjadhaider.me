#!/usr/bin/env bash
# Builds two PDFs from src/data/profile.ts:
#   public/Sajjad-Haider-Sayed-Resume.pdf  public resume, linked from the site
#   cv/Sajjad-Haider-Sayed-CV.pdf          private CV with phone and numbers (git-ignored)
set -euo pipefail
cd "$(dirname "$0")/.."
# Any Chromium-based browser works. Override with CHROME=/path/to/binary.
if [ -z "${CHROME:-}" ]; then
  for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
           "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
           "/Applications/Chromium.app/Contents/MacOS/Chromium" \
           "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"; do
    [ -x "$c" ] && CHROME="$c" && break
  done
fi
[ -n "${CHROME:-}" ] || { echo "No Chromium-based browser found. Set CHROME=/path/to/binary." >&2; exit 1; }
print() { # $1 = html file, $2 = output pdf
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$2" "file://$1" >/dev/null 2>&1
}
mkdir -p cv
npx astro build --outDir .cv-build >/dev/null
print "$PWD/.cv-build/resume/index.html" "$PWD/public/Sajjad-Haider-Sayed-Resume.pdf"
CV_FULL=1 npx astro build --outDir .cv-build >/dev/null
print "$PWD/.cv-build/resume/index.html" "$PWD/cv/Sajjad-Haider-Sayed-CV.pdf"
rm -rf .cv-build
echo "Wrote public/Sajjad-Haider-Sayed-Resume.pdf and cv/Sajjad-Haider-Sayed-CV.pdf"
