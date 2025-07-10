import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '寻宝资源库',
  description: '资源宝藏',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-E923H5FS25'
      }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-E923H5FS25');"
    ]
  ],
  sitemap: {
    hostname: 'https://xiaoxiaowuji.github.io'
  },
  srcDir: './',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: '目录'
    },
    nav: [{ text: '🏠 首页', link: '/' }],
    sidebar: [
      {
        text: '资料',
        collapsed: false,
        items: [
          { text: 'PPT', link: '/docs/material/ppt' },
          { text: '合同/协议 模板', link: '/docs/material/contract' }
        ]
      }
    ]
  }
});
