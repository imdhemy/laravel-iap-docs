// @ts-check
const {themes} = require('prism-react-renderer');
const createRegistryConfig = require('./versioned-docs/registry/registry');

const siteUrl = process.env.SITE_URL ?? 'https://imdhemy.github.io';
const registryConfig = createRegistryConfig();

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    v4: true,
    experimental_faster: true,
  },
  title: 'Laravel In-App Purchases',
  tagline: 'The top-notch php receipt validator!',
  url: siteUrl,
  baseUrl: '/laravel-iap-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'imdhemy',
  projectName: 'laravel-iap-docs',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: registryConfig.customFields,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-WG1WZ488DX',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    ...registryConfig.docsPlugins,
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        hashed: true,
        language: ['en'],
        docsRouteBasePath: registryConfig.search.docsRouteBasePath,
        searchContextByPaths: registryConfig.search.searchContextByPaths,
        hideSearchBarWithNoSearchContext: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'LIAP',
          src: 'img/logo.png',
          href: '/',
        },
        items: [
          {
            href: registryConfig.customFields.docsIntroPath,
            label: 'Documentation',
            position: 'left',
          },
          {
            type: 'custom-version-switcher',
            position: 'right',
          },
          {
            href: 'https://github.com/imdhemy/laravel-iap-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: registryConfig.customFields.docsIntroPath,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/liap',
              },
              {
                label: 'Laravel Discussions',
                href: 'https://github.com/imdhemy/laravel-in-app-purchases/discussions',
              },
              {
                label: 'App Store Discussions',
                href: 'https://github.com/imdhemy/appstore-iap/discussions',
              },
              {
                label: 'Google Play Discussions',
                href: 'https://github.com/imdhemy/google-play-billing/discussions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Buy me a coffee',
                href: 'https://github.com/sponsors/imdhemy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LIAP.`,
      },
      prism: {
        additionalLanguages: ['php'],
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
