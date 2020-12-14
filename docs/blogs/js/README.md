---
title: 手写系列
lang: zh-CN
date: 2020-12-14
categories:
 - 前端
tags:
 - js
 - 手写
publish: true
---
## 手写防抖
```js
 function debounce(fn, time = 300) {
      let timer = null;
      return function (...val) {
        if (timer) clearTimeout(timer); // 和节流的区别，防抖是 清除上一次的定时。但是一直会有一个新的定时。
        timer = setTimeout(function (){
          fn.apply(this, val);
          timer = null;
        }, time);
      }
    }
```
## 手写节流
```js
function throttle(fn, time) {
  let timer = null;
  return function (...val) {
    if(timer) return; // 和防抖的区别，节流是 直接中止程序执行，但是上一次的结果依然是执行的。
    timer = setTimeout(function (){
      fn.apply(this, val);
      timer = null;
    }, time)
  }
}
```