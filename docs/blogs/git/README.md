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

<!-- more -->

## 1. git 初始化操作

### 1.1 初始化操作

```sh
git init
```

### 1.2 设置用户名 和 用户邮箱 去除--global 针对单个项目

```js
git config --global user.name 'zhaoyu'
git config --global user.email 995680821@qq.com
```

### 1.3 关联远程仓库 push 提交到远程仓库

```js
git remote add origin https://gitee.com/zhaoyu8/xxx.git
git push -u origin master
```

### 1.4 拷贝远程仓库代码

```js
git clone https://gitee.com/zhaoyu8/xxx.git
```

::: tip
如果拷贝不下来，请参考[github 链接不上](https://zhaoyu8.github.io/blog/blogs/practical/#_1-1-%E6%89%8B%E5%8A%A8%E4%BF%AE%E6%94%B9-%E6%88%90%E5%8A%9F%E7%8E%87%E9%AB%98)
:::

## 2. git reset 回退 跃进

```js
git reset [--soft | --mixed | --hard] [HEAD]
--mixed 为默认，重置暂存区的文件与上一次的提交保持一致，工作区文件内容保持不变
--hard 版本区到工作区 会导致工作区内容也会撤销。谨慎使用
--soft 版本区到暂存区

git reset -–hard HEAD~3  # 回退上上上一个版本
git reset -–hard bae128  # 回退、跃进 到指定版本
git reset --hard origin/master    # 将本地的状态回退到和远程的一样

```

### 2.1 git add 撤销

```js
  git reset HEAD # 撤销到当前版本区的内容 工作区改动不会消失
  git reset --soft HEAD # 无变化
  git reset --hard HEAD # 撤销当前版本区的内容 工作区改动消失
```

### 2.2 git commit 撤销

```js
  git reset HEAD^ # 撤销commit行为 代码内容不会变 并且状态是工作区未提交状态
  git reset --soft HEAD^ # 撤销commit行为 代码内容不会变 状态到缓存区
  git reset --hard HEAD^ # 撤销commit行为 代码内容变成上一个版本区的内容
```

## 3 git checkout 拉取误删除的文件

```js
  git checkout --a.txt # 拉取误删除的文件 但是必须是已提交的
```

## 4 git rm 删除文件

```js
  git rm a.txt # 删除文件，版本区的也会删除
```

## 5 shh-keygen -t rsa -c 'email.com' 生成公钥秘钥

生成地址 c:/user/Administrator/.ssh/id_rsa.pub # pub 是公钥

### 5.1 ssh -T git@github.com 验证公钥是否配对成功

## 6 git branch 分支管理

### 6.1 git branch 查看分支

```js
  git branch # 查看本地分支
  git branch -a # 查看本地以及远程分支
```

### 6.2 创建分支

```js
  git branch branchName # 查看分支后面加名称也可以创建分支
  git checkout -b branchName # 创建分支 并且会切换到新建的分支
```

### 6.3 切换分支

```js
  git checkout branchName
```

### 6.4 合并分支

```js
  git merge branchName # 当前分支 合并 branchName
```

### 6.5 删除分支

```js
  git branch -d branchName
```

### 6.6 分支重命名

```js
  git branch -m newName # 如果分支名已存在，需要 -M
```

## 7. push pull clone

```js
  git push origin branchName # 推送本地分支到远程
  git push origin --delete branchName # 删除远程分支 并且本地分支依旧存在
  git clone -b branchName https://gitee.com/zhaoyu8/xxx.git # 拉取远程指定分支
  git checkout -b localName origin/branchName # 拉取远程指定分分支。并在本地创建分支
  git pull origin master # 拉取远程分支与当前分支合并（merge）
  git branch --set-upstream-to origin/branchName # 已有本地分支创建关联
```

## 8. yarn 升级依赖项

```js
  yarn upgrade-interactive --latest # 空格选择依赖性 回车确认
```
