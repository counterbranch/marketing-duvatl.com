# DUVATL, Inc. site

Static site for [duvatl.com](https://www.duvatl.com/), built with Vite, React 19, TypeScript, and MUI. It uses the same stack and deploy setup as [marketing-counterbranch.com](https://github.com/counterbranch/marketing-counterbranch.com).

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

The site is served at [www.duvatl.com](https://www.duvatl.com/), set as the custom domain in the repository's Pages settings (a workflow deploy does not read `public/CNAME`; the file only records it). DNS is at iwantmyname:

- `www.duvatl.com`: `CNAME` to `counterbranch.github.io`. GitHub Pages picks the repository by domain, so no path is needed.
- `duvatl.com`: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` (and `AAAA` to `2606:50c0:8000::153` through `2606:50c0:8003::153`). GitHub Pages then redirects it to `www`.

The workflow builds for the root path whenever a custom domain is set, and for the repository's github.io path otherwise.
