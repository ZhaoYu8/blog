---
title: VuePress 搭建个人博客(2)
lang: zh-CN
date: 2020-12-14
categories:
  - 博客
tags:
  - blog
publish: true
---

编写第一篇博客

<!-- more -->
## 1. 编写你的第一篇博客文
1. 我们在 `docs` 文件夹下 新增 `blogs` 文件夹
2. 我们在 `blogs` 文件夹下 新增 `blog` 文件夹
3. 在 `blog` 文件夹下 新增 `README.md` 文件夹
   
:::details 查看目录结构
![rnCVx0.png](https://s3.ax1x.com/2020/12/14/rnCVx0.png)
:::
:::tip 提示
建议所有 博客 都写在`blogs`文件夹下，便于管理
:::

接下来，我们编写 `README.md` 文件。
```yaml
---
title: 你的文章名称
date: 2020-12-10
categories:
  - 博客
tags:
  - blog
publish: true
---

<!-- more -->
## 这是我的第一篇文章
  文章内容
```
1. 这几个常用的变量注释
    - title 博客名称 必填
    - date 日期 必填
    - categories 分类
    - tags 标签
    - publish 文章是否发布
2. 更多变量请 [查看](https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html) 官网

现在我们重新启动 npm run dev, 刷新首页。
:::details 查看gif
![rn8djf.gif](https://s3.ax1x.com/2020/12/14/rn8djf.gif)
:::
## 2. 添加导航栏

1. 打开 `docs/.vuepress/config.js` 文件
在 `themeConfig` 后面追加
```js
  nav: [{
      text: '首页', // 名称
      link: '/', // 导航的路径
      icon: 'reco-home' // icon 图标 reco 自带
    }, {
      text: '目录索引',
      icon: 'reco-home',
      items: [ // 多个就以 items 数组的形势
        {
          text: 'vue',
          link: '/blogs/blog/' // 不带名称就是默认找到文件夹下的 README.md 文件
        }
      ]
    },
    {
      text: 'vuepress文档',
      link: 'https://v0.vuepress.vuejs.org/zh/' // 也可以是外链的方式
    },
  ]
```
再次 npm run dev 之后，你的导航栏就会变成这样。
![rnGSVe.png](https://s3.ax1x.com/2020/12/14/rnGSVe.png)

## 3. 添加左侧导航栏分类
右侧导航栏会自动匹配 ## h2标题，他导航的是当前文章。但是有时候，我们不仅希望导航当前文章，更希望导航几篇文章，成为一个体系。
1. 在`blog` 文件下添加一个`md文件`, 随便什么前缀，我们就叫它 `Blog_2.md`

```yaml
---
title: 第二篇文章
date: 2020-12-14
categories:
  - 博客
tags:
  - blog
publish: true
---

<!-- more -->
## 这是我的第二篇文章
  文章内容
```
:::details 查看目录结构
![rnJSyV.png](https://s3.ax1x.com/2020/12/14/rnJSyV.png)
:::
2. 我们打开 `config.js`, 在 `themeConfig` 后面追加 `sidebar` 对象
```js
sidebar: {
  "/blogs/blog/": [{ // 如果有多个左侧导航栏 就在sidebar 对象后面，再追加一个数组，格式是一样的。
    title: "搭建个人博客",
    collapsable: true, // 默认不折叠
    path: '/blogs/blog/',
    children: [{
      title: "1. 第一篇文章",
      path: "/blogs/blog/"
    }, {
      title: "2. 第二篇文章",
      path: "/blogs/blog/Blog_2"
    }],
  }
  ]
}
```
::: details 查看 config.js
```js
module.exports = {
  title: '清风望月',
  description: '这是我的个人博客',
  base: '/',
  theme: 'reco',
  themeConfig: {
    type: 'blog', // vuepress-theme-reco 的blog模式
    author: '赵宇', // 全局作者
    subSidebar: 'auto', // 全局默认 有右侧侧边栏
    authorAvatar: '/logo.jpg', // 作者头像
    nav: [{
        text: '首页',
        link: '/', // 导航的图标
        icon: 'reco-home' // icon 图标 reco自带
      }, {
        text: '目录索引',
        icon: 'reco-home',
        items: [{
          text: 'vue',
          link: '/blogs/blog/'
        }]
      },
      {
        text: 'vuepress文档',
        link: 'https://v0.vuepress.vuejs.org/zh/'
      },
    ],
    sidebar: {
      "/blogs/blog/": [{
        title: "搭建个人博客",
        collapsable: true,
        path: '/blogs/blog/',
        children: [{
          title: "1. 第一篇文章",
          path: "/blogs/blog/"
        }, {
          title: "2. 第二篇文章",
          path: "/blogs/blog/Blog_2"
        }],
      }]
    }
  },
}
```
:::
重新启动后，查看文章。

![rnYehj.md.png](https://s3.ax1x.com/2020/12/14/rnYehj.png)
现在就有了左侧导航了。是不是很实用了。