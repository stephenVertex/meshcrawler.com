# MeshCrawler document template

The proposal master is provided in two forms:

- `meshcrawler-proposal-template.html` is the editable source.
- `meshcrawler-proposal-template.pdf` is the ready-to-review PDF.
- `meshcrawler-one-pager-template.html` is a compact executive brief source.
- `meshcrawler-one-pager-template.pdf` is its rendered one-page PDF.

Rendered PNG examples are in `previews/`.

## Create a proposal

1. Copy the HTML file and rename it for the client.
2. Replace every bracketed placeholder, such as `[Client Name]` and `[$XX,XXX]`.
3. Remove any sections that are not relevant.
4. Regenerate both PDFs from the repository root:

```bash
documents/render-documents.sh
```

The renderer uses Google Chrome for faithful CSS, SVG, and local-font output. If Chrome is installed elsewhere, set `CHROME_BIN` before running the script:

```bash
CHROME_BIN=/path/to/chromium documents/render-documents.sh
```

The templates use US Letter pages and embed the same Manrope and DM Mono fonts used on the MeshCrawler website. They do not need a network connection when rendering. Font licenses are included in `assets/fonts/`.
