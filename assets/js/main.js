/* theme toggle + bio language switch */

(function () {
  "use strict";

  /* ---------- theme ---------- */

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }

  function apply(dark) {
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  apply(isDark());

  toggle.addEventListener("click", function () {
    var dark = !isDark();
    apply(dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {}
  });

  /* follow the OS until the visitor makes an explicit choice */
  media.addEventListener("change", function (e) {
    var chosen;
    try {
      chosen = localStorage.getItem("theme");
    } catch (err) {}
    if (!chosen) apply(e.matches);
  });

  /* ---------- bio language ---------- */

  var buttons = Array.prototype.slice.call(
    document.querySelectorAll(".langbar button")
  );

  function setLang(lang) {
    buttons.forEach(function (btn) {
      var on = btn.dataset.lang === lang;
      btn.setAttribute("aria-selected", on ? "true" : "false");
      document.getElementById(btn.getAttribute("aria-controls")).hidden = !on;
    });
    try {
      localStorage.setItem("bio_lang", lang);
    } catch (e) {}
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.dataset.lang);
    });
  });

  var stored;
  try {
    stored = localStorage.getItem("bio_lang");
  } catch (e) {}

  if (stored && buttons.some(function (b) { return b.dataset.lang === stored; })) {
    setLang(stored);
  }
})();
