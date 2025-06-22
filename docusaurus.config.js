// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Under Construction',
  tagline: '공사중입니다',
  favicon: 'img/favicon_sms.ico',

  // 에러 발생했던 내용 추가
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://AntisFSM.github.io', // 당신의 GitHub Pages 주소
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AntisFSM', // Usually your GitHub org/user name.
  projectName: 'AntisFSM.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
  // /blog/project 경로용
  [
    '@docusaurus/plugin-content-blog',
    {
      id: 'project',
      routeBasePath: 'blog/project',
      path: './blog/project',
      authorsMapPath: './blog/authors.yml'
    },
  ],
  // /blog/think 경로용
  [
    '@docusaurus/plugin-content-blog',
    {
      id: 'think',
      routeBasePath: 'blog/think',
      path: './blog/think',
      authorsMapPath: './blog/authors.yml'
    },
  ],
  //이미지 누르면 줌되는 기능
  require.resolve('docusaurus-plugin-image-zoom')
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
      // 확대를 적용할 셀렉터
        selector: '.markdown img',

      // 확대 시 배경. light/dark 모드를 모두 지정해 줄 수 있습니다.
        background: {
          light: 'rgba(255, 255, 255, 0.8)',
          dark:  'rgba(0, 0, 0, 0.8)',
        },

      // medium-zoom 에 전달할 옵션
        config: {
          margin: 24,
          scrollOffset: 0,
          },
      },
      // Replace with your project's social card
      image: 'img/soomaksae_social_card.png',
      blog: {
        sidebar: {
          groupByYear: false,
        },
      },
      navbar: {
        title: 'Antis, the GameMaker',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_SMS.svg',
          //src: 'img/soomaksae_social_card.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Project',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gamedesignSidebar',
            position: 'left',
            label: 'Game Design',
          },
          //블로그 같은 글 쓰기 전까지는 꺼놓기.
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },           

            {
              href: 'https://github.com/AntisFSM/AntisFSM.github.io',
              label: 'GitHub',
              position: 'right',
            },
        ],
      },
      
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'X',
        //         href: 'https://x.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/AntisFSM',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} AntisFSM.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
