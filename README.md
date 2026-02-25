# Academic Research Group Website

## Quick Start

```sh
npm install
npm run dev
```

## Deploy to GitHub Pages (Free)

### Step 1: Update repo name

Open `vite.config.ts`, replace `REPO_NAME` with your actual GitHub repository name:

```ts
base: process.env.GITHUB_PAGES ? '/your-repo-name/' : '/',
```

### Step 2: Enable GitHub Pages

1. Push code to GitHub
2. Go to repo **Settings → Pages**
3. Under **Build and deployment**, select **Source: GitHub Actions**
4. The included `.github/workflows/deploy.yml` will auto-deploy on push to `main`

Your site will be live at: `https://username.github.io/your-repo-name/`

### How SPA routing works on GitHub Pages

GitHub Pages doesn't support SPA routing natively. This project includes:
- `public/404.html` — redirects unknown paths to `index.html` with query params
- A restore script in `index.html` — converts query params back to the real path
- `BrowserRouter` uses `basename` matching the `base` path

### Local development

```sh
npm run dev
```

No `base` path is applied locally (only when `GITHUB_PAGES=true`).

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- react-router-dom (SPA)

## Customization

Edit files in `src/data/` to update content:
- `siteConfig.ts` — group name, university, metrics
- `people.ts` — team members
- `publications.ts` — papers
- `research.ts` — research areas
- `news.ts` — announcements
- `translations.ts` — bilingual UI strings
