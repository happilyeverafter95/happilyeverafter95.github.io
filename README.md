# Personal site

Astro + Tailwind + markdown blog. Posts live in `src/content/blog/`.

**Repository:** [happilyeverafter95/happilyeverafter95.github.io](https://github.com/happilyeverafter95/happilyeverafter95.github.io)  
**Live site (GitHub Pages):** https://happilyeverafter95.github.io

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm install`     | Install dependencies            |
| `npm run dev`     | Dev server at localhost:4321    |
| `npm run build`   | Build to `./dist/`              |
| `npm run preview` | Preview production build        |

## GitHub Pages

Use **GitHub Actions**, not “Deploy from a branch” with Jekyll. Jekyll will try to parse `.astro` files and fail on the `---` front matter.

1. Repo: **`happilyeverafter95.github.io`**
2. **Settings → Pages → Build and deployment → Source:** **GitHub Actions**
3. Push to `main`; the workflow in `.github/workflows/deploy.yml` builds Astro and publishes `dist/` (includes `.nojekyll` so Jekyll never touches the built output).

If you ever change the site URL, update **`PUBLIC_SITE_URL`** in the workflow and in `astro.config.mjs`.
