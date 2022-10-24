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
          text: '随笔',
          link: '/guide/',
          collapsible: true,
          items: [
            {text: '这是一个标题党哈哈哈哈哈哈', link: '/guide/第一篇笔记.md'}
          ]
        }
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
            {text: 'v-show与v-if', link: '/interview/vue/v-show&v-if.md'}
          ]
        }
      ],
      '/code/': [
        {
          text: '常用代码',
          link: '/code/',
          items: [
            {text: '大屏适配', link: '/code/大屏适配.md'}
          ]
        }
      ]
    }
  }
}