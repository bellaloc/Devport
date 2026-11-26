# Devport

Developer portfolio built with Next.js, React, TypeScript and Tailwind CSS, using the existing Creavolio template. The application lives in `creavolio/`; original template documentation is retained in `documentation/`.

## Local development

Use a supported Node.js LTS release (Node 22 recommended).

```sh
cd creavolio
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks

From `creavolio/`:

```sh
npm run lint
npm run typecheck
npm run build
```

The existing Next configuration skips lint during the build, so run lint separately. The build uses next/font with Google Fonts and may require network access.

## Contact form

Set `APP_EMAIL` and `APP_PASSWORD` in the local `.env.local` file or the hosting provider's server-side environment variables. Use a dedicated Gmail app password and never commit real credentials. See `creavolio/.env.example` for variable names. Without configuration, the form returns an unavailable message. Production email delivery needs an end-to-end check and abuse protection (rate limiting or an equivalent control).

## Hosting

For Vercel, set the root directory to `creavolio` and use the Next.js framework preset. Check existing hosting settings before changing production. No hosting account settings are changed by this repository.

## Portfolio content and attribution

Project entries are in `creavolio/src/data/projects.ts`. Retain the original template license and documentation; distinguish original engineering, third-party design, prototypes and verified live features. Do not redistribute licensed assets outside the applicable terms.

## Security maintenance

Do not commit private keys, passwords, API tokens, or local environment files. Removing files from the latest version does not remove them from Git history. Rotate any previously exposed credentials at their provider before considering the incident resolved.
