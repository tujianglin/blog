import { defineConfig } from 'vitepress'
import sidebar from './sidebar/index'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: 'Tu',
  description: '',
  lang: 'zh',
  base: '/blog/',
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    outlineTitle: '页面导航',
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/tujianglin/blog' }],
    nav: [
      { text: '首页', link: '/' },
      { text: '学习', link: '/study/vue/0' },
    ],
    sidebar,
  },
})
