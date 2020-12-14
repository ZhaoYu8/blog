module.exports = {
  title: '清风望月',
  description: '这是我的个人博客',
  base: '/blog/',
  theme: 'reco',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    type: 'blog', // vuepress-theme-reco 的blog模式
    author: '赵宇', // 全局作者
    subSidebar: 'auto', // 全局默认 有右侧侧边栏
    authorAvatar: '/logo.jpg', // 作者头像
    noFoundPageByTencent: false, // 关闭腾讯公益
    nav: [{
        text: '首页',
        link: '/',
        icon: 'reco-home'
      }, {
        text: '目录索引',
        icon: 'reco-home',
        items: [{
            text: 'js',
            link: '/categories/前端/'
          },
          {
            text: 'vue',
            link: '/blogs/vue/'
          }
        ]
      },
      {
        text: '常用链接',
        items: [{
            text: 'vuepress文档',
            link: 'https://www.vuepress.cn/guide/'
          },
          {
            text: 'reco 插件文档',
            link: 'https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html'
          }
        ]
      },
    ],
    sidebar: {
      "/blogs/blog/": [{
        title: "搭建个人博客",
        collapsable: true,
        path: '/blogs/blog/',
        children: [{
          title: "1. 搭建一个漂亮的个人博客",
          path: "/blogs/blog/"
        }, {
          title: "2. 编写第一篇博客",
          path: "/blogs/blog/Blog_2"
        }],
      }, ],
      "/blogs/js": [{
        title: "1.ceshi",
        collapsable: true,
        path: '/blogs/js/',
        children: [{
          title: "内置功能",
          path: "/blogs/js/"
        }],
      }],
    },
  },
}