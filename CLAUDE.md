# mcml-web

Yonsei University MCML research group website.

## Commands

- `yarn dev` - dev server (Turbopack)
- `yarn build` - production build
- `yarn start` - production server (port 4000)
- `yarn lint` - ESLint

## Tech Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui (New York style), Framer Motion, next-themes (dark mode), Lucide icons.

## Project Structure

- `app/(routes)/` - route group for all pages
- `app/components/` - app-specific components
- `app/data/` - static content as typed TS exports and JSON files
- `app/fonts/` - local font files (Pretendard)
- `app/lib/` - utilities (includes shadcn `cn()` helper)
- `components/ui/` - shadcn/ui components

Path alias: `@/*` maps to project root.

## Styling

- Tailwind CSS 4 with CSS variables for theming
- Dark mode via `next-themes`
- Prettier with `prettier-plugin-tailwindcss` for class sorting

## Deployment

GitHub Actions on push to `main` -> self-hosted runner -> `yarn install --frozen-lockfile && yarn build` -> `pm2 reload web`
