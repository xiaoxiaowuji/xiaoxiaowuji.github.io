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
    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 移动端 - 外观
    darkModeSwitchLabel: '外观',
    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',
    // 移动端 - menu
    sidebarMenuLabel: '菜单',
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
          { text: '合同/协议 模板1', link: '/docs/material/contract1' },
          { text: '合同/协议 模板2', link: '/docs/material/contract2' },
          { text: '合同/协议 模板3', link: '/docs/material/contract3' }
        ]
      }
    ]
  }
});
