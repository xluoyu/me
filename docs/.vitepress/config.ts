export default {
  title: 'Corgi笔记小站',
  description: 'Just playing around.',
  lastUpdated: true,
  themeConfig: {
    logo: 'https://corgi-icode.netlify.app/logo.png',
    lastUpdatedText: 'Updated Date',
    nav: [
      { text: '笔记', link: '/guide/' },
      { text: '面试篇', link: '/interview/'},
      { text: '代码块', link: '/code/' },
      { text: '关于我', link: '/about' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xluoyu/corgi-docs'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '读Vue.js设计与实现',
          items: [
            {text: '01.框架设计的核心要素', link: '/guide/vue/01.框架设计的核心要素.md'},
            {text: '02.响应式数据的基本实现', link: '/guide/vue/02.响应式数据的基本实现.md'},
            {text: '03.进一步完善', link: '/guide/vue/03.进一步完善.md'},
            {text: '04.computed&watch', link: '/guide/vue/04.computed&watch.md'},
            {text: '05.watch', link: '/guide/vue/05.watch.md'},
            {text: '06.响应系统篇章总结', link: '/guide/vue/06.响应系统篇章总结.md'},
            {text: '07.渲染器的设计', link: '/guide/vue/07.渲染器的设计.md'},
            {text: '08.diff', link: '/guide/vue/08.diff.md'}
          ]
        },
        {
          text: '算法',
          collapsible: true,
          items: [
            {text: '路径总和', link: '/guide/leetcode/路径总和.md'},
            {text: '路径总和 Ⅱ', link: '/guide/leetcode/路径总和Ⅱ.md'},
            {text: '路径总和 Ⅲ', link: '/guide/leetcode/路径总和Ⅲ.md'},
          ]
        },
        {
          text: '随笔',
          link: '/guide/',
          collapsible: true,
          items: [
            {text: '记录一个刹车交互', link: '/guide/other/pixi_gsap.md'},
            {text: 'web中的点九图', link: '/guide/other/9.png.md'},
          ]
        },
      ],
      '/interview/': [
        {
          text: 'HTML',
          collapsible: true,
          items: [
            {text: '地址栏输入 URL 敲下回车后发生了什么', link: '/interview/html/after_url.md'}
          ]
        },
        {
          text: 'Vue篇',
          collapsible: true,
          items: [
            {text: 'v-show与v-if', link: '/interview/vue/v-show&v-if.md'},
            {text: 'vue中的diff算法', link: '/interview/vue/vue-diff.md'},
            {text: 'Vue3的性能提升', link: '/interview/vue/vue3.md'}
          ]
        }
      ],
      '/code/': [
        {
          text: '常用代码',
          link: '/code/',
          items: [
            {text: '大屏适配', link: '/code/大屏适配.md'},
            {text: '常用的字符串方法', link: '/code/string.md'}
          ]
        }
      ]
    }
  }
}