/* AI Architecture & Systems — docs site behaviour. No dependencies. */
(function () {
  "use strict";

  var ROOT = window.SITE_ROOT || "";

  /* ------------------------------------------------------------ dark mode */

  var themeBtn = document.getElementById("theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------- mobile sidebar */

  var menuBtn = document.getElementById("menu-btn");
  var scrim = document.getElementById("scrim");

  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    if (scrim) scrim.hidden = !open;
    if (menuBtn) menuBtn.setAttribute("aria-expanded", String(open));
  }

  if (menuBtn) menuBtn.addEventListener("click", function () {
    setNav(!document.body.classList.contains("nav-open"));
  });
  if (scrim) scrim.addEventListener("click", function () { setNav(false); });

  /* ----------------------------------------------- right pane scroll-spy */

  var tocLinks = Array.prototype.slice.call(document.querySelectorAll("[data-toc]"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var byId = {};
    tocLinks.forEach(function (a) { byId[a.getAttribute("data-toc")] = a; });

    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      var active = null;
      for (var i = 0; i < tocLinks.length; i++) {
        var id = tocLinks[i].getAttribute("data-toc");
        if (visible.has(id)) { active = id; break; }
      }
      tocLinks.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("data-toc") === active);
      });
    }, { rootMargin: "-64px 0px -70% 0px", threshold: 0 });

    document.querySelectorAll("h2.sub[id]").forEach(function (h) { observer.observe(h); });
  }

  /* ---------------------------------------------------------------- search */

  var input = document.getElementById("search-input");
  var panel = document.getElementById("search-results");
  if (!input || !panel) return;

  var entries = null;
  var loading = false;
  var selection = -1;
  var hits = [];

  function load() {
    if (entries || loading) return;
    loading = true;
    fetch(ROOT + "assets/search.json")
      .then(function (r) { return r.json(); })
      .then(function (data) { entries = data; loading = false; render(); })
      .catch(function () { loading = false; });
  }

  input.addEventListener("focus", load, { once: true });

  function search(q) {
    var needle = q.trim().toLowerCase();
    if (!needle || !entries) return [];
    var out = [];
    for (var i = 0; i < entries.length && out.length < 60; i++) {
      var e = entries[i];
      if (e.t.toLowerCase().indexOf(needle) !== -1 || e.n.indexOf(needle) === 0) out.push(e);
    }
    return out;
  }

  function render() {
    var q = input.value;
    hits = search(q);
    selection = -1;

    if (!q.trim()) { panel.hidden = true; panel.innerHTML = ""; return; }

    if (!hits.length) {
      panel.innerHTML = '<div class="sr-empty">' +
        (entries ? "No matching topic." : "Loading index…") + "</div>";
      panel.hidden = false;
      return;
    }

    var html = "";
    var group = null;
    hits.forEach(function (e, i) {
      if (e.m !== group) {
        group = e.m;
        html += '<div class="sr-group">' + escapeHtml(group) + "</div>";
      }
      html += '<a class="sr-item" data-i="' + i + '" href="' + ROOT + escapeHtml(e.u) + '">' +
        '<span class="sr-n">' + escapeHtml(e.n) + "</span>" +
        '<span class="sr-t">' + escapeHtml(e.t) + "</span></a>";
    });
    panel.innerHTML = html;
    panel.hidden = false;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function highlight() {
    var items = panel.querySelectorAll(".sr-item");
    items.forEach(function (el, i) { el.classList.toggle("is-sel", i === selection); });
    if (selection >= 0 && items[selection]) {
      items[selection].scrollIntoView({ block: "nearest" });
    }
  }

  input.addEventListener("input", function () { load(); render(); });

  input.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") { input.value = ""; panel.hidden = true; input.blur(); return; }
    var items = panel.querySelectorAll(".sr-item");
    if (!items.length) return;
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      selection = (selection + 1) % items.length;
      highlight();
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      selection = (selection - 1 + items.length) % items.length;
      highlight();
    } else if (ev.key === "Enter" && selection >= 0) {
      ev.preventDefault();
      window.location.href = items[selection].getAttribute("href");
    }
  });

  document.addEventListener("click", function (ev) {
    if (!panel.contains(ev.target) && ev.target !== input) panel.hidden = true;
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "/" && document.activeElement !== input &&
        !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      ev.preventDefault();
      input.focus();
    }
  });
})();
