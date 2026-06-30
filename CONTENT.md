# Content Guide

Every editable fact on this site lives in plain TypeScript/Markdown files —
no CMS, no database. This document maps what you see on the site to the file
you'd edit to change it.

## Site-wide facts

**File:** `src/content/site.ts`

| What | Field |
|---|---|
| School name, tagline, mission | `siteConfig` |
| Phone numbers, emails, address | `siteConfig.phones`, `siteConfig.emails`, `siteConfig.address` |
| "24 Years Of Experience" badge | `siteConfig.yearsOfExperience` |
| Header navigation + dropdown | `navigation` |
| Partner/affiliation logo strip | `partners` — currently rendered as text wordmarks; drop real logo files into `public/images/partners/` and swap the `<span>` in `src/components/sections/Hero.tsx` for an `<Image>` once you have them |
| Homepage "Pourquoi nous choisir" section | `whyChooseUs` |
| Rector quote block | `rector` |
| Homepage CTA banner copy | `ctaBanner` |
| About page stat counters | `aboutStats` — values are sensible placeholders (350 students, 4 programs, 28 teachers, 12 partner institutions); update with real figures any time |
| About page body copy + infrastructure blocks | `aboutContent` |
| The 4 programs (Infirmiers Principaux, Kinésithérapie, Sages-femmes, Techniciens Médico-Sanitaires) | `programs` — each entry drives both the homepage cards and the full `/programmes/[slug]/` detail page (overview + career outcomes) |
| Faculty directory | `staff` |
| Admissions requirements, uniform list, dossier checklist, document downloads | `admissions` — **the legal/admissions text is reproduced verbatim from the source site; do not lightly edit it without checking with the school administration** |
| Contact page copy | `contactContent` |
| Footer links and blurb | `footerContent` |

## Admissions documents

**Folder:** `public/documents/`

`fiche-identification.pdf` and `fiche-engagement.pdf` are currently
**placeholder PDFs** generated for development — they say so on the page.
Replace them with the real, signed documents before launch. Keep the
filenames the same, or update the `file` paths in `admissions.documents`
in `src/content/site.ts`.

## Images

**Folder:** `public/images/`

All photos (hero, program cards, staff portraits, blog covers, OG image)
are currently **SVG color-block placeholders** with a text label, generated
during the rebuild since no real photo assets were available. Replace them
with real photography:

- Keep the same file paths referenced in `src/content/site.ts` (just replace
  the file — `.jpg`/`.webp` works fine, `next/image` is configured with
  `unoptimized: true` so any standard web image format is accepted as-is).
- Recommended sizes: hero/program/blog images ~1200×900 (4:3) or ~1200×700
  (16:10) before upload, since `unoptimized: true` means no automatic
  resizing happens at build time — pre-optimize/compress images yourself
  (e.g. with Squoosh or `sharp`) to keep the static export fast.
- Staff portraits: square, ~600×600.

## Blog posts

**Folder:** `content/blog/` (Markdown with frontmatter)

Each `.md` file becomes a post at `/blog/<slug>/`. Three seed posts are
included as examples. To add a new post, copy one and edit the frontmatter:

```md
---
title: "Post title"
slug: post-slug          # must match the filename (without .md)
date: "2026-07-01"        # YYYY-MM-DD
category: Education       # or Activity — used as the badge on the card
excerpt: "One or two sentences shown on the blog listing."
image: /images/blog/your-image.svg
---

Body content in Markdown below the frontmatter.
```

No build step or CMS is required — new files are picked up automatically
on the next `npm run build`.

## i18n scaffold

**File:** `src/lib/i18n.ts`

Generic UI strings (buttons, form labels, "students", "duration", etc.) are
centralized in a small `fr`/`en` dictionary. French is wired in everywhere
today. To add English: fill in/extend the `en` entries, then build a locale
switcher that calls `getDictionary("en")` — no routing changes are required
to start, since this scaffold deliberately avoids next-intl/next-i18next to
keep the static export simple. Note that substantive content (programs,
staff, admissions text) lives in `src/content/site.ts` and would need its
own English variants added separately when you're ready to translate it.

## Contact form

**File:** `.env.local` (copy from `.env.example`, not committed)

The contact form submits to [Web3Forms](https://web3forms.com/) — get a
free access key tied to `ems@ztfuniversity.com` and set
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. See `DEPLOY.md` for the full setup.
