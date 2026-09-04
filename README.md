# yaramohamadi.github.io

Personal site for Yara M. Bahram — a single hand-written static page, no build step.

```
index.html              everything: bio (EN/FR), publications, teaching
assets/css/main.css     design tokens, light + dark themes
assets/js/main.js       theme toggle, bio language switch
assets/img/profile.png  portrait
assets/img/papers/      paper teaser figures
files/                  CV
.nojekyll               tells GitHub Pages to serve the files as-is
```

**Type** — Space Mono, from Google Fonts.

**Palette** — `#AA453C` brick · `#886655` brown · `#585639` olive · `#5A5A5A` grey ·
`#F8C600` yellow. Defined once as custom properties at the top of `main.css`; the dark theme
re-declares the same hues at higher lightness so they stay legible on a dark ground.

## Editing

Adding a paper: drop the figure in `assets/img/papers/`, then copy an existing
`<article class="pub">` block in `index.html` and edit it. Use `<span class="badge">` for a
published venue and `<span class="badge draft">` for anything unpublished.

## Preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
