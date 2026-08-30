#!/usr/bin/env bash
# Serve the teaching workspace over http and open a lesson.
#
# Why this exists: WKWebView (cmux's browser) refuses cross-origin subresource
# loads under file://, so a lesson opened as a file gets no stylesheet and no
# quiz JS. Over http the whole directory is one origin and everything loads.
#
#   ./serve-lessons.sh                  # newest lesson
#   ./serve-lessons.sh 0001             # match by prefix
#   ./serve-lessons.sh reference/phase-model.html

set -euo pipefail
cd "$(dirname "$0")"
PORT=${LESSON_PORT:-8777}

curl -sf -o /dev/null "http://localhost:$PORT/" 2>/dev/null || {
  python3 -m http.server "$PORT" >/tmp/sssf-lessons.log 2>&1 &
  sleep 1
}

arg=${1:-}
if [[ -z $arg ]]; then
  path=$(ls lessons/*.html | tail -1)
elif [[ -f $arg ]]; then
  path=$arg
else
  path=$(ls lessons/"$arg"*.html | head -1)
fi

url="http://localhost:$PORT/$path"
echo "$url"

# Inside cmux, open beside the terminal and print the surface ref so the lesson
# can be inspected with `cmux browser <surface> eval`. Otherwise use the system browser.
if [ -n "${CMUX_WORKSPACE_ID:-}" ] && command -v cmux >/dev/null 2>&1; then
  cmux --json browser open "$url" \
    | python3 -c 'import sys,json;print("surface:", json.load(sys.stdin)["surface_ref"])'
else
  open "$url"
fi
