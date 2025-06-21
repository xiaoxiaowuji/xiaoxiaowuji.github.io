import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '寻宝资源库',
  description: '资源宝藏',
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
    ],
    sidebar: [
      {
        text: '资料',
        collapsed: false,
        items: [
          { text: 'PPT', link: '/docs/material/ppt' }
        ]
      }
    ]
  }
});
