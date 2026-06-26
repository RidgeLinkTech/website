# RidgeLink Website

Public-facing Astro website for RidgeLink Technologies.

## Overview

This repository contains the active Astro app deployed as the RidgeLink website.

- Production domain: `https://ridgelink.us`
- Secondary domain: `https://www.ridgelink.us`
- Canonical host: `ridgelink.us` (www redirects to apex)

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Cloudflare Pages Configuration

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## Domain Setup

In Cloudflare Pages custom domains, add both domains:

- `ridgelink.us`
- `www.ridgelink.us`

`www` is redirected to apex by `public/_redirects`:

```text
https://www.ridgelink.us/* https://ridgelink.us/:splat 301!
```

## Notes

- Security and cache headers are defined in `public/_headers`.
- Sitemap generation is enabled via `@astrojs/sitemap`.
