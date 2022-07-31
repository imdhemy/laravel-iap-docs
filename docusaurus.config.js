// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laravel In-App Purchases',
  tagline: 'The top-notch php receipt validator!',
  url: 'https://imdhemy.github.io',
  baseUrl: '/laravel-iap-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'imdhemy', // Usually your GitHub org/user name.
  projectName: 'laravel-iap-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/imdhemy/laravel-iap-docs/blob/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/imdhemy/laravel-iap-docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            href: 'https://github.com/imdhemy/laravel-in-app-purchases',
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
                to: '/docs/intro',
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
              }
            ],
          },
        ],
        copyright:  `Copyright © ${new Date().getFullYear()} LIAP. Built with Love ❤ ️and PHP 🐘.`,
      },
      prism: {
        additionalLanguages: ['php'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
