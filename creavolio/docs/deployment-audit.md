# Featured project deployment audit — 2026-11-26

Public read-only retrieval checks (not full browser interaction or end-to-end verification):

| Project / URL | Result | Next action |
| --- | --- | --- |
| [Production portfolio](https://bellaloc.com) | Loads; redirects to Netlify | Keep production unchanged until approved |
| [Portfolio preview](https://deploy-preview-2--christalococo.netlify.app) | Loads | Complete responsive CI |
| [Ymmy storefront](https://ymmy-grocery-store-ecommerce.vercel.app) | Catalog and cart pages load | Verify cart/checkout, authentication and remove demo contact details |
| [Ymmy admin](https://ymmy-grocery-store-ecommerce.vercel.app/admin) | Dashboard and product table accessible without login | Verify demo-only data and authorization of write operations; profile output sparse |
| [Alucres](https://alucres-stocks.vercel.app) | HTTP 404 | Restore deployment after locating source; hide broken external link in preview |
| [Real Estate AI](https://realestateai.vercel.app) | Landing page loads; /login HTTP 500 | Diagnose authentication/environment logs with source access |
| [Job Tracker](https://jobtracker.vercel.app) | Headings render, no populated stats observed | Verify input, persistence and authentication |
| Centsei | No URL configured | Locate original case study assets |
| Los Angelust | Excluded by owner | No changes |

GitHub installation searches for Ymmy, Alucres, Real Estate, Job Tracker and Centsei returned no matching source repositories. Do not assume similarly named repositories are the source. Request exact repository or Vercel project mapping before changing code. Tech-Finance is a separately accessible candidate for the stock analytics project, not a confirmed Alucres source.

CI: dependency installation, typecheck, lint and build passed on commit 10a6962. Browser installation failed because ubuntu-latest resolves to an unsupported Ubuntu 26.04 runner for Playwright 1.51.1. Pin ubuntu-24.04 and rerun. Browser and production functionality remain unverified. No live transactions or write operations performed.
