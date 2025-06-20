import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'aaa',
  description: 'xxx',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: {
    hostname: 'https://xiaoxiaowuji.github.io'
  },
  srcDir: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '目录'
    },
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '关于', link: '/docs/about' }
    ],
    sidebar: [
      {
        text: 'xxx',
        collapsed: false,
        items: [
          { text: '前言', link: '/docs/side-hustle/preface' },
          { text: 'xxx', link: '/docs/side-hustle/projects-done' }
        ]
      }
    ]
  }
});
