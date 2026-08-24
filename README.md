# Shwe Nwar Lay Expo Invitation 2026

This repository contains the web invitation for **Shwe Nwar Lay** at the Myanmar Business Trade Show & Travel Expo 2026. The site is a lightweight, static-first **Next.js** application designed to deploy automatically through Vercel’s GitHub integration.

## Event details

| Item | Detail |
|---|---|
| Dates | 4–6 September 2026 |
| Venue | Pan Pacific Yangon Hotel, Ballroom, R-Floor |
| Booth | No. 13 |

## Local development

Use Node.js 22.13 or later. Install dependencies and start the local development server with the following commands.

```bash
npm install
npm run dev
```

The production build can be verified locally with:

```bash
npm run build
npm run start
```

## Deployment

The repository is configured as a standard Next.js project. Import `shwenwarlay-pixel/expo.invitation` into Vercel and retain the default build settings. Vercel will install dependencies with `npm install` and build the project with `npm run build`.

| Setting | Value |
|---|---|
| Framework Preset | Next.js |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | Default (automatic) |
| Root Directory | Repository root |

No environment variables, database, or Cloudflare bindings are required for the current invitation site.

## Project structure

```text
app/        Application routes, interactive components, and global styles
public/     Logos, invitation imagery, icons, and social sharing image
```

The invitation content and event details are defined in `app/page.tsx`. Visual styling and the opening-envelope animation are in `app/globals.css` and `app/OpeningExperience.tsx`.
