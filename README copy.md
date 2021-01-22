---
title: git
lang: zh-CN
date: 2021-01-22
categories:
  - git
tags:
  - git
publish: true
---

## 1 git 拉取远程指定分支代码

```js
  git 拉去远程指定分支代码
  git clone -b 远程分支名 仓库地址

  本地已经仓库,关联远程
  添加远程关联
  git remote add origin 仓库地址
  //查看远程分支
  git branch -r
  拉去远程分支
  git pull origin master --allow-unrelated-histories
  //创建本地分支并关联
  git checkout -b 本地分支 origin/远程分支
  //已有本地分支创建关联
  git branch --set-upstream-to origin/远程分支名 本地分支名
  //拉取
  git pull
```
