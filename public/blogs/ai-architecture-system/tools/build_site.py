#!/usr/bin/env python3
"""Build the static docs site from README.md.

Maps the three README heading levels onto the three panes of the site:

    ##   module      -> top navigation bar
    ###  section     -> left sidebar (one page each)
    #### subsection  -> right "On this page" pane

Titles only: pages carry headings and nothing else. Prose written into README.md
beneath the existing headings will be picked up without changing this script.

Stdlib only. Usage: python3 tools/build_site.py
"""
from __future__ import annotations

import html
import json
import re
import shutil
import sys
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
README = ROOT / "README.md"
ASSET_SRC = Path(__file__).resolve().parent / "assets"
OUT = ROOT / "docs"

SITE_TITLE = "AI Architecture &amp; Systems"

# --------------------------------------------------------------------------- parsing

REF_DEF = re.compile(r'^\[([^\]]+)\]:\s*(\S+)(?:\s+"([^"]*)")?\s*$')
H1 = re.compile(r"^# (.+)$")
H2 = re.compile(r"^## (\d+)\.\s+(.+)$")
H3 = re.compile(r"^### (\d+\.\d+)\s+(.+)$")
H4 = re.compile(r"^#### (\d+\.\d+\.\d+)\s+(.+)$")
SUBNOTE = re.compile(r"^<sub>(.*)</sub>\s*$")
ANCHOR = re.compile(r'^<a id="([^"]+)"></a>\s*$')
QUOTE = re.compile(r"^>\s+(.+)$")
TAGLINE = re.compile(r"^\*([^*].*)\*$")


class BuildError(Exception):
    pass


@dataclass
class Sub:
    num: str
    raw: str


@dataclass
class Section:
    num: str
    raw: str
    sources: str | None = None
    subs: list[Sub] = field(default_factory=list)

    @property
    def page(self) -> str:
        return self.num.replace(".", "-") + ".html"


@dataclass
class Module:
    num: str
    raw: str
    slug: str
    note: str | None = None
    sections: list[Section] = field(default_factory=list)

    @property
    def en(self) -> str:
        return self.raw.split("|")[0].strip()

    @property
    def subtitle(self) -> str:
        """The clause after the pipe, where a module title carries one."""
        parts = self.raw.split("|", 1)
        return parts[1].strip() if len(parts) > 1 else ""


@dataclass
class Front:
    title: str = ""
    tagline: str = ""
    meta: str = ""
    intro: list[str] = field(default_factory=list)
    table: list[tuple[str, str, str]] = field(default_factory=list)
    details_summary: str = ""
    details_body: list[str] = field(default_factory=list)


def parse(md: str) -> tuple[Front, list[Module], dict[str, tuple[str, str]]]:
    lines = md.split("\n")

    refs: dict[str, tuple[str, str]] = {}
    for ln in lines:
        m = REF_DEF.match(ln)
        if m:
            refs[m.group(1)] = (m.group(2), m.group(3) or "")

    front = Front()
    modules: list[Module] = []
    pending_anchor: str | None = None
    mod: Module | None = None
    sec: Section | None = None
    in_details = False

    for ln in lines:
        if REF_DEF.match(ln) or ln.startswith("<!--"):
            continue

        m = ANCHOR.match(ln)
        if m:
            pending_anchor = m.group(1)
            continue

        m = H2.match(ln)
        if m:
            mod = Module(num=m.group(1), raw=m.group(2), slug=pending_anchor or f"module-{m.group(1)}")
            modules.append(mod)
            sec = None
            pending_anchor = None
            continue

        if mod is None:  # front matter
            if not ln.strip() or ln.strip() == "---":
                continue
            m = H1.match(ln)
            if m:
                front.title = m.group(1)
                continue
            if ln.startswith("<details>"):
                in_details = True
                continue
            if ln.startswith("</details>"):
                in_details = False
                continue
            if ln.startswith("<summary>"):
                front.details_summary = re.sub(r"</?summary>", "", ln).strip()
                continue
            if ln.startswith("|"):
                cells = [c.strip() for c in ln.strip().strip("|").split("|")]
                if all(set(c) <= set("-: ") for c in cells) or cells[0] == "Module":
                    continue
                if len(cells) >= 3:
                    front.table.append((cells[0], cells[1], cells[2]))
                continue
            m = TAGLINE.match(ln.strip())
            if m and not front.tagline:
                front.tagline = m.group(1)
                continue
            if ln.startswith("**Revision:**"):
                front.meta = ln
                continue
            (front.details_body if in_details else front.intro).append(ln)
            continue

        m = H3.match(ln)
        if m:
            sec = Section(num=m.group(1), raw=m.group(2))
            mod.sections.append(sec)
            continue

        m = H4.match(ln)
        if m:
            if sec is None:
                raise BuildError(f"subsection {m.group(1)} has no parent section")
            sec.subs.append(Sub(num=m.group(1), raw=m.group(2)))
            continue

        m = SUBNOTE.match(ln)
        if m:
            if sec is not None:
                sec.sources = m.group(1)
            continue

        m = QUOTE.match(ln)
        if m and sec is None:
            mod.note = m.group(1)
            continue

    validate(modules, refs)
    return front, modules, refs


def validate(modules: list[Module], refs: dict[str, tuple[str, str]]) -> None:
    seen: dict[str, str] = {}
    for mod in modules:
        for sec in mod.sections:
            if sec.num in seen:
                raise BuildError(f"duplicate section number {sec.num}")
            seen[sec.num] = sec.raw
            if not sec.num.startswith(mod.num + "."):
                raise BuildError(f"section {sec.num} sits under module {mod.num}")
            for sub in sec.subs:
                if sub.num in seen:
                    raise BuildError(f"duplicate subsection number {sub.num}")
                seen[sub.num] = sub.raw
                if not sub.num.startswith(sec.num + "."):
                    raise BuildError(f"subsection {sub.num} sits under section {sec.num}")

    missing = set()
    for mod in modules:
        blobs = [mod.raw, mod.note or ""]
        for sec in mod.sections:
            blobs += [sec.raw, sec.sources or ""]
            blobs += [s.raw for s in sec.subs]
        for blob in blobs:
            for _, key in re.findall(r"\[([^\]]+)\]\[([^\]]+)\]", blob):
                if key not in refs:
                    missing.add(key)
    if missing:
        raise BuildError("unresolved reference keys: " + ", ".join(sorted(missing)))


# --------------------------------------------------------------------------- inline rendering

CODE = re.compile(r"`([^`]+)`")
REFLINK = re.compile(r"\[([^\]]+)\]\[([^\]]+)\]")
URLLINK = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
BOLD = re.compile(r"\*\*([^*]+)\*\*")
ITALIC = re.compile(r"\*([^*]+)\*")


INLINE_HTML = re.compile(r"</?(strong|em|code|b|i)>")
_HTML_TO_MD = {"strong": "**", "b": "**", "em": "*", "i": "*", "code": "`"}


def _demote_html(text: str) -> str:
    """Fold the handful of raw inline HTML tags in README.md back into markdown,
    so they survive escaping instead of showing up as literal &lt;strong&gt;."""
    return INLINE_HTML.sub(lambda m: _HTML_TO_MD[m.group(1)], text)


def inline(text: str, refs: dict[str, tuple[str, str]]) -> str:
    """Render README inline markdown to HTML. Escapes first, so link text is safe."""
    out = html.escape(_demote_html(text), quote=False)
    out = CODE.sub(lambda m: f"<code>{m.group(1)}</code>", out)

    def ref(m: re.Match[str]) -> str:
        url, title = refs[m.group(2)]
        t = f' title="{html.escape(title, quote=True)}"' if title else ""
        return (
            f'<a class="ext" href="{html.escape(url, quote=True)}"{t}'
            f' target="_blank" rel="noopener">{m.group(1)}</a>'
        )

    out = REFLINK.sub(ref, out)
    out = URLLINK.sub(
        lambda m: f'<a href="{html.escape(m.group(2), quote=True)}">{m.group(1)}</a>', out
    )
    out = BOLD.sub(lambda m: f"<strong>{m.group(1)}</strong>", out)
    out = ITALIC.sub(lambda m: f"<em>{m.group(1)}</em>", out)
    return out


def plain(text: str) -> str:
    """Markdown stripped to bare text, for nav labels, <title> and the search index."""
    out = REFLINK.sub(r"\1", _demote_html(text))
    out = URLLINK.sub(r"\1", out)
    out = out.replace("`", "").replace("**", "").replace("*", "")
    return out.strip()


def esc(text: str) -> str:
    return html.escape(text, quote=True)


def anchor(num: str) -> str:
    return "s" + num.replace(".", "-")


# --------------------------------------------------------------------------- page shell

THEME_BOOT = (
    "<script>(function(){try{var t=localStorage.getItem('theme');"
    "if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>"
)


def topbar(modules: list[Module], prefix: str, active: str | None) -> str:
    tabs = []
    for mod in modules:
        cls = "tab tab--active" if mod.slug == active else "tab"
        tabs.append(
            f'<a class="{cls}" href="{prefix}{mod.slug}/index.html">'
            f'<span class="tab-n">{mod.num}</span>{esc(mod.en)}</a>'
        )
    return f"""<header class="topbar">
  <button class="menu-btn" id="menu-btn" aria-label="Toggle section list" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <a class="brand" href="{prefix}index.html">{SITE_TITLE}</a>
  <nav class="tabs">{"".join(tabs)}</nav>
  <div class="search">
    <input id="search-input" type="search" placeholder="Search    /" autocomplete="off"
           aria-label="Search the outline" />
    <div class="search-results" id="search-results" hidden></div>
  </div>
  <button class="theme-btn" id="theme-btn" aria-label="Toggle dark mode">
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>
  </button>
</header>"""


def sidebar(mod: Module, current: str | None) -> str:
    items = [
        f'<li><a class="sb-link{" sb-link--active" if current is None else ""}"'
        f' href="index.html">Overview</a></li>'
    ]
    for sec in mod.sections:
        cls = "sb-link sb-link--active" if sec.num == current else "sb-link"
        items.append(
            f'<li><a class="{cls}" href="{sec.page}">'
            f'<span class="sb-n">{sec.num}</span>'
            f'<span class="sb-t">{esc(plain(sec.raw))}</span></a></li>'
        )
    return f"""<aside class="sidebar" id="sidebar">
  <div class="sb-head">{esc(mod.en)}</div>
  <ul class="sb-list">{"".join(items)}</ul>
</aside>"""


def page(
    *,
    modules: list[Module],
    depth: int,
    title: str,
    layout: str,
    main: str,
    active: str | None = None,
    left: str = "",
    right: str = "",
) -> str:
    prefix = "../" * depth
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>{title}</title>
{THEME_BOOT}
<link rel="stylesheet" href="{prefix}assets/site.css" />
<script>window.SITE_ROOT={json.dumps(prefix)};</script>
</head>
<body>
{topbar(modules, prefix, active)}
<div class="layout layout--{layout}">
{left}
<main class="content">
{main}
</main>
{right}
</div>
<div class="scrim" id="scrim" hidden></div>
<script src="{prefix}assets/site.js" defer></script>
</body>
</html>
"""


# --------------------------------------------------------------------------- pages


def render_home(front: Front, modules: list[Module], refs: dict[str, tuple[str, str]]) -> str:
    by_slug = {m.slug: m for m in modules}
    cards = []
    for cell, question, scope in front.table:
        m = URLLINK.match(cell.strip())
        if not m:
            continue
        label, href = m.group(1), m.group(2).lstrip("#")
        mod = by_slug.get(href)
        if mod is None:
            continue
        sub = f'<div class="card-sub">{esc(mod.subtitle)}</div>' if mod.subtitle else ""
        cards.append(
            f'<a class="card" href="{mod.slug}/index.html">'
            f'<div class="card-h">{esc(label)}</div>'
            f'{sub}'
            f'<div class="card-q">{inline(question, refs)}</div>'
            f'<div class="card-s">{inline(scope, refs)}</div>'
            f'<div class="card-n">{len(mod.sections)} sections · '
            f'{sum(len(s.subs) for s in mod.sections)} topics</div></a>'
        )

    intro = "".join(f"<p>{inline(p, refs)}</p>" for p in front.intro)
    details = "".join(f"<p>{inline(p, refs)}</p>" for p in front.details_body)

    main = f"""<h1 class="home-h1">{inline(front.title, refs)}</h1>
<p class="tagline">{inline(front.tagline, refs)}</p>
<p class="meta">{inline(front.meta, refs)}</p>
<div class="prose">{intro}</div>
<div class="cards">{"".join(cards)}</div>
<details class="src-map" open>
  <summary>{inline(front.details_summary, refs)}</summary>
  <div class="prose">{details}</div>
</details>"""
    return page(
        modules=modules,
        depth=0,
        title=esc(plain(front.title)),
        layout="home",
        main=main,
    )


def render_module(mod: Module, modules: list[Module], refs: dict[str, tuple[str, str]]) -> str:
    note = f'<blockquote class="note">{inline(mod.note, refs)}</blockquote>' if mod.note else ""
    sub_html = f'<span class="h1-sub">{esc(mod.subtitle)}</span>' if mod.subtitle else ""
    rows = "".join(
        f'<a class="row" href="{sec.page}">'
        f'<span class="row-n">{sec.num}</span>'
        f'<span class="row-t">{inline(sec.raw, refs)}</span>'
        f'<span class="row-c">{len(sec.subs)}</span></a>'
        for sec in mod.sections
    )
    main = f"""<nav class="crumbs"><span>{esc(mod.en)}</span></nav>
<h1>{esc(mod.num)}. {esc(mod.en)}{sub_html}</h1>
{note}
<div class="rows">{rows}</div>"""
    return page(
        modules=modules,
        depth=1,
        title=f"{esc(mod.en)} · {SITE_TITLE}",
        layout="module",
        main=main,
        active=mod.slug,
        left=sidebar(mod, None),
    )


def render_section(
    mod: Module,
    sec: Section,
    modules: list[Module],
    refs: dict[str, tuple[str, str]],
    prev: tuple[str, str, str] | None,
    nxt: tuple[str, str, str] | None,
) -> str:
    sources = (
        f'<div class="sources"><span class="sources-k">Sources</span>'
        f'{inline(sec.sources, refs).replace("Sources: ", "", 1)}</div>'
        if sec.sources
        else ""
    )

    subs = "".join(
        f'<h2 class="sub" id="{anchor(sub.num)}">'
        f'<span class="sub-n">{sub.num}</span>'
        f'<span class="sub-t">{inline(sub.raw, refs)}</span>'
        f'<a class="hash" href="#{anchor(sub.num)}" aria-label="Link to {esc(plain(sub.raw))}">#</a>'
        f"</h2>"
        for sub in sec.subs
    )

    def link(side: str, item: tuple[str, str, str] | None) -> str:
        if item is None:
            return '<span class="pn-empty"></span>'
        href, num, label = item
        arrow = "←" if side == "prev" else "→"
        return (
            f'<a class="pn pn--{side}" href="{href}">'
            f'<span class="pn-k">{arrow} {"Previous" if side == "prev" else "Next"}</span>'
            f'<span class="pn-t">{num} {esc(label)}</span></a>'
        )

    main = f"""<nav class="crumbs"><a href="index.html">{esc(mod.en)}</a><span class="sep">/</span><span>§{sec.num}</span></nav>
<h1>{inline(sec.raw, refs)}</h1>
{sources}
<div class="subs">{subs}</div>
<nav class="prevnext">{link("prev", prev)}{link("next", nxt)}</nav>"""

    toc = "".join(
        f'<li><a href="#{anchor(sub.num)}" data-toc="{anchor(sub.num)}">'
        f'<span class="toc-n">{sub.num}</span>{esc(plain(sub.raw))}</a></li>'
        for sub in sec.subs
    )
    right = f"""<aside class="toc" id="toc">
  <div class="toc-head">On this page</div>
  <ul class="toc-list">{toc}</ul>
</aside>"""

    return page(
        modules=modules,
        depth=1,
        title=f"{sec.num} {esc(plain(sec.raw))} · {esc(mod.en)}",
        layout="section",
        main=main,
        active=mod.slug,
        left=sidebar(mod, sec.num),
        right=right,
    )


# --------------------------------------------------------------------------- build


def build() -> int:
    md = README.read_text(encoding="utf-8")
    front, modules, refs = parse(md)

    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "assets").mkdir(parents=True)
    (OUT / ".nojekyll").write_text("", encoding="utf-8")
    for name in ("site.css", "site.js"):
        shutil.copyfile(ASSET_SRC / name, OUT / "assets" / name)

    flat: list[tuple[Module, Section]] = [(m, s) for m in modules for s in m.sections]

    pages = 0
    (OUT / "index.html").write_text(render_home(front, modules, refs), encoding="utf-8")
    pages += 1

    for mod in modules:
        (OUT / mod.slug).mkdir(parents=True, exist_ok=True)
        (OUT / mod.slug / "index.html").write_text(
            render_module(mod, modules, refs), encoding="utf-8"
        )
        pages += 1

    for i, (mod, sec) in enumerate(flat):
        def ref_to(j: int) -> tuple[str, str, str] | None:
            if not 0 <= j < len(flat):
                return None
            m2, s2 = flat[j]
            href = s2.page if m2 is mod else f"../{m2.slug}/{s2.page}"
            return href, s2.num, plain(s2.raw)

        (OUT / mod.slug / sec.page).write_text(
            render_section(mod, sec, modules, refs, ref_to(i - 1), ref_to(i + 1)),
            encoding="utf-8",
        )
        pages += 1

    index = []
    for mod in modules:
        index.append({"n": mod.num, "t": plain(mod.raw), "u": f"{mod.slug}/index.html",
                      "m": mod.en, "k": "module"})
        for sec in mod.sections:
            index.append({"n": sec.num, "t": plain(sec.raw), "u": f"{mod.slug}/{sec.page}",
                          "m": mod.en, "k": "section"})
            for sub in sec.subs:
                index.append({"n": sub.num, "t": plain(sub.raw),
                              "u": f"{mod.slug}/{sec.page}#{anchor(sub.num)}",
                              "m": mod.en, "k": "sub"})
    (OUT / "assets" / "search.json").write_text(
        json.dumps(index, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
    )

    n_sec = len(flat)
    n_sub = sum(len(s.subs) for _, s in flat)
    print(f"modules:     {len(modules)}")
    print(f"sections:    {n_sec}")
    print(f"subsections: {n_sub}")
    print(f"pages:       {pages}")
    print(f"search:      {len(index)} entries")
    print(f"output:      {OUT}")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(build())
    except BuildError as exc:
        print(f"build_site: {exc}", file=sys.stderr)
        sys.exit(1)
