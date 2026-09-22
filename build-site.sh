#!/usr/bin/env bash
set -euo pipefail

repo_root=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
blog_dir="$repo_root/blog"
tutorial_dir="$repo_root/external/ai-architecture-system"
publish_dir="$repo_root/public"

git -C "$repo_root" submodule update --init --recursive

for required in \
  "$blog_dir/config.yml" \
  "$tutorial_dir/tools/build_site.py" \
  "$tutorial_dir/docs/index.html"; do
  if [[ ! -f "$required" ]]; then
    echo "build-site: required file not found: $required" >&2
    exit 1
  fi
done

python3 "$tutorial_dir/tools/build_site.py"

if [[ -n "$(git -C "$tutorial_dir" status --porcelain --untracked-files=all -- docs)" ]]; then
  echo "build-site: tutorial docs differ from the pinned commit; commit them there first" >&2
  exit 1
fi

stage_dir=$(mktemp -d "$repo_root/.site-build.XXXXXX")
cleanup() {
  if [[ "$stage_dir" == "$repo_root"/.site-build.* ]]; then
    rm -rf -- "$stage_dir"
  fi
}
trap cleanup EXIT

hugo \
  --source "$blog_dir" \
  --destination "$stage_dir" \
  --buildDrafts \
  --gc

tutorial_target="$stage_dir/blogs/ai-architecture-system"
mkdir -p "$tutorial_target/docs"
rsync -a --delete "$tutorial_dir/docs/" "$tutorial_target/docs/"

for forbidden in .git README.md tools; do
  if [[ -e "$tutorial_target/$forbidden" ]]; then
    echo "build-site: source-only path leaked into publication: $forbidden" >&2
    exit 1
  fi
done

if [[ ! -f "$tutorial_target/index.html" || ! -f "$tutorial_target/docs/index.html" ]]; then
  echo "build-site: tutorial landing page or documentation index is missing" >&2
  exit 1
fi

if [[ "$publish_dir" != "$repo_root/public" ]]; then
  echo "build-site: refusing unexpected publication path: $publish_dir" >&2
  exit 1
fi

mkdir -p "$publish_dir"
rsync -a --delete "$stage_dir/" "$publish_dir/"

echo "Published site to $publish_dir"
