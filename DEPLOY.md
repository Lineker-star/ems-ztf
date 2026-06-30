# Deployment Guide

This is a fully static site (`next.config.js` sets `output: 'export'`). There
is no Node.js server to run in production — `npm run build` produces a
self-contained `/out` folder of plain HTML/CSS/JS that can be uploaded to any
static host, including Hostinger shared hosting over FTP.

## 1. Before you deploy

- [ ] Replace placeholder images in `public/images/` with real photos (see `CONTENT.md`)
- [ ] Replace placeholder PDFs in `public/documents/` with the real admissions documents
- [ ] Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (see step 2)
- [ ] Update `siteConfig`/`aboutStats` figures in `src/content/site.ts` if they've changed

## 2. Configure the contact form (Web3Forms)

1. Go to [web3forms.com](https://web3forms.com/) and create a free access key
   using `ems@ztfuniversity.com`.
2. Copy `.env.example` to `.env.local` and paste the key:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. If deploying via GitHub Actions (see below), add the same value as a
   repository secret named `WEB3FORMS_ACCESS_KEY` instead.

## 3. Build the static export

```bash
npm install
npm run build
```

This runs `next build` (which performs the static export into `/out`
because of `output: 'export'`), then `next-sitemap` as a `postbuild` step to
generate `sitemap.xml`, `sitemap-0.xml` and `robots.txt` inside `/out`.

Verify locally before uploading:

```bash
npx serve out
```

## 4. Manual FTP upload to Hostinger

1. Log into **hPanel** → **Files** → **FTP Accounts**, and note the host,
   username, password and port (usually port 21, or use SFTP/port 22 if
   available).
2. Connect with an FTP client (FileZilla, Cyberduck, WinSCP).
3. Navigate to `public_html/` (or the subfolder configured for
   `www.ems-ztf.site` if it's an addon domain).
4. Upload the **entire contents of `/out`** (not the `out` folder itself —
   its contents) into `public_html/`, overwriting existing files.
5. Confirm `index.html`, `_next/`, `images/`, `documents/`, `sitemap.xml`
   and `robots.txt` are all present at the domain root.
6. Visit `https://www.ems-ztf.site/` and spot-check a few pages.

## 5. Automated deploys via GitHub Actions (optional)

A workflow is included at `.github/workflows/deploy.yml`. It builds the site
and FTP-uploads `/out` to Hostinger on every push to `main`.

Add these repository secrets (**Settings → Secrets and variables → Actions**):

| Secret | Value |
|---|---|
| `FTP_SERVER` | Your Hostinger FTP host (e.g. `ftp.ems-ztf.site` or the IP from hPanel) |
| `FTP_USERNAME` | FTP username from hPanel |
| `FTP_PASSWORD` | FTP password from hPanel |
| `WEB3FORMS_ACCESS_KEY` | The key from step 2 |

Once the secrets are set, pushing to `main` will build and deploy
automatically. You can still deploy manually (step 4) at any time.

## Notes for static export

- No server-side rendering, API routes, or middleware are available — every
  page is pre-rendered at build time (`generateStaticParams` is used for
  `/programmes/[slug]/` and `/blog/[slug]/`).
- `trailingSlash: true` is set so links resolve correctly when served as
  static files with no rewrite rules (Hostinger serves `/path/index.html`
  for `/path/`).
- Images use `next/image` with `unoptimized: true` — there is no image
  optimization server in static export, so pre-compress source images
  before adding them (see `CONTENT.md`).
