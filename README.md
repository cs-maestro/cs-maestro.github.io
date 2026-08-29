# mdanish.net

Personal site of [Muhammad Danish](https://mdanish.net), a PhD student in Computer Science at the University of New Mexico. Built with [Astro](https://astro.build).

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Content

- `src/content/news/` — news items (one Markdown file per announcement)
- `src/content/publications/` — publications (one Markdown file per paper)
- `src/data/cv.ts` — structured CV data (education, experience, honors, skills)
- `src/data/coauthors.ts` — coauthor name → profile URL lookup, used to auto-link citations

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages via the repo's Pages "GitHub Actions" source.
