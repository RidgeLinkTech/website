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

## Notes

- Security and cache headers are defined in `public/_headers`.
- Sitemap generation is enabled via `@astrojs/sitemap`.
