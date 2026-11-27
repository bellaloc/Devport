# Christa Lococo — Developer Portfolio

A Next.js App Router portfolio customized from the Creavolio commercial theme. Personal content is maintained by Christa Lococo; third-party code and assets retain their original licensing.

## Development
Use Node.js 22 LTS. From the repository root:
```sh
cd creavolio
npm ci
npm run dev
```
Visit http://localhost:3000. Run npm run lint, npm run typecheck and npm run build before deployment.

## Contact and deployment
Copy .env.example to .env.local and configure APP_EMAIL and APP_PASSWORD using an authorized Gmail app password. Never commit secrets. Without credentials, the form reports that it is unavailable. Deploy with Next.js server support, e.g. Vercel with project root creavolio. Configure production rate limiting or CAPTCHA before exposing the form.

## Content
Maintain featured projects in src/data/projects.ts. Verify demo URLs and implementation claims before publishing. The CV link is disabled until a current PDF is provided; testimonials are omitted pending verification. The homepage and about card use the original local portrait assets.

## License and security
Confirm the ThemeForest license permits public source distribution and the intended deployment. No third-party code is relicensed here. If an SSH private key was committed, revoke it immediately; removing a file does not purge historical copies.

## Responsive and accessibility verification
The original portraits and theme are preserved. Layout adapts using viewport size, touch/hover capabilities, reduced-motion preference and device safe areas. Review the preview at 320, 375, 390, 768, 1024 and 1440 CSS pixels, including landscape and keyboard-only navigation. Check both portraits, section navigation, project details, contact inputs and theme controls. Automated build checks are not a substitute for actual browser and device testing.
