# Deployment

## Platform

GitHub Pages via `.github/workflows/deploy-pages.yml`.

## Production URL

GitHub Pages publishes from the `main` branch workflow. The expected project URL is:

https://nuestlux.github.io/htsc-website/

If the repository has a custom domain configured in GitHub Pages settings, use that domain as the production URL.

## Deploy Command

```powershell
node --check generate-site.js
node --check assets/js/main.js
node generate-site.js
git push origin main
```

The push to `main` triggers the GitHub Pages workflow.

## Environment Variables

None. This is a static HTML/CSS/JS site.

## Rollback

Revert the deployed commit and push `main` again, or rerun a previous successful GitHub Pages workflow from GitHub Actions.

## Notes

Local image paths use relative `assets/...` URLs so the site works when served from a GitHub Pages project subpath.
