---
title: VuePress 搭建个人博客(1)
lang: zh-CN
date: 2020-12-10
sidebar: true
subSidebar: true
categories:
  - 博客
tags:
  - blog
publish: true
---

从0开始教你如何 搭建你的个人博客

<!-- more -->

## 1. 安装 [VuePress](https://www.vuepress.cn/guide/getting-started.html)

```sh
# 初始化项目一直默认回车
npm init

# 后面 --xxx 是淘宝源 不拷贝也可以 (提示: 这里会有点慢，耐心等待)
npm i vuepress -D --registry=https://registry.npm.taobao.org
```

::: details 查看目录结构
![vuepress.png](https://s3.ax1x.com/2020/12/11/rAkGOe.png)
:::

## 2. 新建 docs 目录

```sh
# 新建一个 docs 文件夹
mkdir docs

# 在docs文件夹里，新建一个 markdown 文件，名字叫README.md
内容可以随便填

```

::: details 查看目录结构
![rAVWtA.png](https://s3.ax1x.com/2020/12/11/rAVWtA.png)
:::

1. 接着，在 `packjson.json` `scripts` 里 **加二行**脚本

```json
{
  "scripts": {
    "dev": "vuepress dev docs  --temp .temp",
    "build": "vuepress build docs"
  }
}
```
:::tip 提示
自带的 test 可以删除，也可以在 test 后面追加 dev 和 build。

加 --temp .temp 是因为有的时候热更新会有问题。
:::

```sh
# 现在，你可以在命令行启动你的项目了。
npm run dev
```

2. 成功之后打开[8080](http://localhost:8080/)就可以看到你的项目了。（提示：默认 8080，以你命令行显示的为准！）

## 3. 新增 vuepress-theme-reco 插件

1. 自带的首页是满足不了我们的，这里我用了 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html)

```sh
npm install vuepress-theme-reco --save-dev
```
成功之后

1. 在`docs`文件夹下新建，`.vuepress` 文件夹。
2. `.vuepress`文件夹下新建 `config.js` 文件，以及 `piblic` 文件夹。
3. 在 `piblic` 文件夹下添加了一张图片（提示：这张图片等会我们会用到）。

::: details 查看目录结构
![rA7oDS.png](https://s3.ax1x.com/2020/12/11/rA7oDS.png)
:::

## 4. 调整首页

1. 首先我们打开 `docs/README.md` 内容调整成如下

```js
---
home: true
---
```

:::tip 提示
home: true 表示这个 md 文件为首页，全局应该只有一处地方写这个,默认也会找到页面。不建议调整。
:::

2. 再去 `.vuepress/config.js` 内容调整成如下

```js
module.exports = {
  title: "xxx", // 博客名称
  description: "这是我的个人博客", // 描述
  theme: "reco", // 使用 vuepress-theme-reco 主题 reco是缩写
  themeConfig: {
    type: "blog", // vuepress-theme-reco 的blog模式
    author: "xxx", // 全局作者姓名 你填你的名字就好了
    subSidebar: "auto", // 全局默认 有右侧侧边栏
    authorAvatar: "/logo.jpg", // 这里不需要写 public, 你也可以再加一层目录，在 public 新建 img 文件夹 那么这里应该写成 img/logo.jpg
  },
};
```
3. 现在可以在你的命令行重新启动项目了。
```sh
# ctrl + c 输入 y
npm run dev
```
:::details 查看生成的页面
![rAbv0U.png](https://s3.ax1x.com/2020/12/11/rAbv0U.png)
:::
:::tip 提示
如果刷新页面是空白，一定要重新 npm run dev 启动。 如果你打开的页面和我一样，证明你的配置是正确的。
:::