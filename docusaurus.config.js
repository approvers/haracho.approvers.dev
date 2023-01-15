// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require('prism-react-renderer/themes/github');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OreOreBot2 Documents',
  tagline: '限界開発鯖民が愛するDiscord Bot',
  url: 'https://haracho.approvers.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'approvers',
  projectName: 'OreOreBot2',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/approvers/haracho.approvers.dev/edit/main',
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
        title: 'OreOreBot2 Documents',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dev_docs',
            position: 'left',
            label: 'Development',
          },
          {
            href: 'https://github.com/approvers/OreOreBot2',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/approvers/haracho.approvers.dev',
            label: 'Source',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '限界開発鯖',
            items: [
              {
                label: '公式サイト',
                href: 'https://approvers.dev/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/approvers',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UFIApprovers',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://github.com/approvers/OreOreBot2',
                label: 'GitHub (approvers/OreOreBot2)',
              },
              {
                href: 'https://github.com/approvers/haracho.approvers.dev',
                label: 'GitHub (approvers/haracho.approvers.dev)',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} approvers`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
