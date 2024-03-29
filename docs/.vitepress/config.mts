import { defineConfig, PageData } from 'vitepress'
import { head, nav, sidebar } from './configs'


const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []
export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  title: "小唐三",
  description: "小唐三的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等",
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/icons/圣诞冰淇淋.svg',

    nav,
    sidebar,
    search: {
      provider: 'local',
    },
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    socialLinks: [
      { icon: 'github', link: '' }
    ],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present maomao',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },

})
