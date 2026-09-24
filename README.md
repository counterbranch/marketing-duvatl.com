# DUVATL, Inc. site

Static site for [duvatl.com](https://duvatl.com/), built with Vite, React 19, TypeScript, and MUI. It uses the same stack and deploy setup as [marketing-counterbranch.com](https://github.com/counterbranch/marketing-counterbranch.com).

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The build prerenders the page into `dist/index.html` (`src/entry-server.tsx` and `scripts/prerender.mjs`), so it paints before any JavaScript loads; the browser then hydrates it. The dev server renders client-side as usual.

Deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Custom domain

Until DNS is set up, the site is served from the repository's github.io path, and the workflow builds with that base path. `public/CNAME` already names `duvatl.com`. To switch over:

1. Point `duvatl.com` at GitHub Pages: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` (and `AAAA` to `2606:50c0:8000::153` through `2606:50c0:8003::153`), plus a `CNAME` for `www` to `counterbranch.github.io`.
2. Set the custom domain in the repository's Pages settings (a workflow deploy does not read `public/CNAME`), then enforce HTTPS once the certificate is issued.
3. Re-run the deploy workflow so the site is built for the root path.
