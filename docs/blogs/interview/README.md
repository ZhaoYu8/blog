---
title: 题目
date: 2020-12-14
categories:
  - 前端
tags:
  - 面试
---
<!-- more -->
## 1. 从输入url 到渲染出整个页面
1. 加载过程
    - DNS 解析： 域名 -> IP 地址
    - 浏览器根据IP地址像服务器发起 http 请求
    - 服务器处理http请求，并返回给浏览器
2. 解析过程
    - 根据 HTML 代码生成DOM Tree
    - 根据 CSS 代码生成CSSOM
    - 将DOM tree 和 CSSOM 整合行程 Render Tree
    - 根据 Render Tree 渲染页面
    - 遇到 `<script>` 则暂停渲染，优先加载并执行js代码，完成再继续
    - 直至把Render Tree 渲染完成
## 2. window.onload 和 DOMContentLoaded 的区别
```js
  window.addEventListener("load", function () {
       console.log("load 需要等待图片和视频等资源加载完成才执行");
   }, false);

   window.addEventListener("DOMContentLoaded", function () {
       console.log("DOMContentLoaded 在dom树渲染完成之后就可以触发，不需要等待图片,视频资源加载");
   }, false)
```
## 3. 前端安全
1. XSS
   - `<script>` 标签内的内容，会被浏览器认为，是需要执行的代码。从而获取到个人信息
   - 解决方法就是：< 替换成 `&lt;` > 替换成 `&gt;`;
2. XSRF
   - 伪造用户调用接口
   - 解决方法：后台返回唯一的token,存储 localStorage 中。 在请求头里添加这个token。 或者使用短信验证码 密码 等。