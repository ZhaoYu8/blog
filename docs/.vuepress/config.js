module.exports = {
  title: "清风望月",
  description: "这是我的个人博客",
  base: "/blog/",
  theme: "reco",
  dest: 'dist',
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  plugins: [
    [
      "vuepress-plugin-code-copy",
      {
        successText: "复制"
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "G-FKDPSJ47YQ" // UA-00000000-0 ,填入你google账号分析那个ID即可
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    codeTheme: "okaidia", // default 'tomorrow'
    type: "blog", // vuepress-theme-reco 的blog模式
    author: "赵宇", // 全局作者
    subSidebar: "auto", // 全局默认 有右侧侧边栏
    authorAvatar: "/logo.jpg", // 作者头像
    noFoundPageByTencent: false, // 关闭腾讯公益
    repo: "https://github.com/ZhaoYu8/blog.git",
    lastUpdated: "最后更新日期",
    valineConfig: {
      appId: "6ckqcRikE5B7Whz1XOd9vDNI-9Nh9j0Va", // your appId
      appKey: "th9r6f11BRI4ehLHc9vrA9XA", // your appKey
      placeholder: "请输入你的意见",
      avatar: "wavatar",
      enableQQ: true
    },
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "目录索引",
        icon: "reco-home",
        items: [
          {
            text: "js",
            link: "/categories/前端/"
          }
        ]
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "常用链接",
        items: [
          {
            text: "vuepress文档",
            link: "https://www.vuepress.cn/guide/"
          },
          {
            text: "reco 插件文档",
            link: "https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html"
          }
        ]
      }
    ],
    sidebar: {
      "/blogs/blog/": [
        {
          title: "搭建个人博客",
          collapsable: true,
          path: "/blogs/blog/",
          children: [
            {
              title: "1. 搭建一个漂亮的个人博客",
              path: "/blogs/blog/"
            },
            {
              title: "2. 编写第一篇博客",
              path: "/blogs/blog/Blog_2"
            }
          ]
        }
      ],
      "/blogs/js": [
        {
          title: "js",
          collapsable: true,
          path: "/blogs/js/",
          children: [
            {
              title: "手写方法",
              path: "/blogs/js/"
            }
          ]
        }
      ]
    }
  }
};
