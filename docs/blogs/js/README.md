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
## 1 防抖
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
## 2 节流
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
## 3 深度拷贝
```js
function copy(val) {
  if (typeof val !== 'object' || val === null) return val;
  let options = Array.isArray(val) ? [] : {};
  for (const key in val) {
    if (Object.hasOwnProperty.call(val, key)) {
      options[key] = copy(val[key])
    }
  }
  return options;
}
```
## 4 深度比较
```js
function isObj(r) {
  return typeof r !== 'object' || r === null
}
function isEqual(obj1, obj2) {
  if (isObj(obj1) || isObj(obj2)) { // 除了 数组和对象 其他的都直接返回比较结果
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  if (obj1 === obj2) return true;
  for (const key in obj1) {
    let res = isEqual(obj1[key], obj2[key]);
    if (!res) return false;
  }
  return true;
}
```
