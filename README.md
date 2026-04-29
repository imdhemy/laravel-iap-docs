# Laravel In-App Purchases Docs

This repository contains the Laravel In-App Purchases documentation website.

The site is generated with Docusaurus and published as one static site. Released documentation versions live side by side in this repository under `docs/<version>`.

## Public URL Contract

- `/laravel-iap-docs/` serves the shared homepage
- `/laravel-iap-docs/docs/1.x` serves the `1.x` documentation
- future releases follow `/laravel-iap-docs/docs/<version>`

`/laravel-iap-docs/docs` is a version selector entry point, not the canonical route for the latest version. The latest version is linked explicitly from the homepage and navbar.

## Local Development

Requirements:

- Node.js 24.x
- npm 11.x

Install dependencies:

```bash
npm install
```

Run the docs locally:

```bash
npm run start
```

Build static files:

```bash
npm run build
```

Run validation:

```bash
npm run validate
```
