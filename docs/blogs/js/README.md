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
  return function(...val) {
    let _this = this;
    if (timer) clearTimeout(timer); // 和节流的区别，防抖是 清除上一次的定时。但是一直会有一个新的定时。
    timer = setTimeout(function() {
      fn.apply(_this, val);
      timer = null;
    }, time);
  };
}
```

## 2 节流

```js
// 定时器 缺点 最后一次也执行了。
function throttle(fn, time) {
  let timer = null;
  return function(...val) {
    let _this = this;
    if (timer) return; // 和防抖的区别，节流是 直接中止程序执行，但是上一次的结果依然是执行的。
    timer = setTimeout(function() {
      fn.apply(_this, val);
      timer = null;
    }, time);
  };
}
// 时间戳 缺点 第一次就执行了方法
function throttle(fn, time) {
  let startDate = 0;
  return function(...val) {
    let _this = this;
    let nowDate = Date.now();
    if (nowDate - startDate > time) {
      fn.apply(_this, val);
      startDate = nowDate;
    }
  };
}
let fn = throttle(() => {
  console.log(1);
}, 1000);
fn();
fn();
fn();
```

## 3 深度拷贝

```js
function copy(val) {
  if (typeof val !== 'object' || val === null) return val;
  let options = Array.isArray(val) ? [] : {};
  for (const key in val) {
    if (Object.hasOwnProperty.call(val, key)) {
      options[key] = copy(val[key]);
    }
  }
  return options;
}
```

## 4 深度比较

```js
function isObj(r) {
  return typeof r !== 'object' || r === null;
}
function isEqual(obj1, obj2) {
  if (isObj(obj1) || isObj(obj2)) {
    // 除了 数组和对象 其他的都直接返回比较结果
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

## 5 拍平多维数组

```js
// 利用flat方法
[].flat();

// 利用递归
function flatten(...val) {
  let arr = [];
  val.map((r) => {
    if (Array.isArray(r)) {
      arr.push(...flatten(...r)); // 主要是这用递归传递数组，然后返回数组用扩展符拍平
    } else {
      arr.push(r);
    }
  });
  return arr;
}

// 利用 toString() 方法
function flat(...arr) {
  if (arr.length > 1) {
    let _arr = [];
    arr.map((r) => {
      _arr = _arr.concat(
        r
          .toString()
          .split(',')
          .map((n) => +n)
      );
    });
    return _arr;
  }
  return arr
    .toString()
    .split(',')
    .map((val) => +val); // 主要是arr.toString() 将数组转为字符串，无论多少层
}
console.log(flatten([1, [2, 3]], [2, [3, [4, 5, [1, [3, [5, [6, [7, [10]]]]]]]], [5]]));
// [1, 2, 3, 2, 3, 4, 5, 1, 3, 5, 6, 7, 10, 5]
```

## 6 一维转多维

```js
 dataBase(data = []) {
    let _data = JSON.parse(JSON.stringify(data));
    let Obj = {};
    _data.map((item) => (Obj[item.id] = item));
    _data.map((item) => {
      if (item.parentId !== 0 && Obj[item.parentId]) {
        Obj[item.parentId].children ? Obj[item.parentId].children.push(item) : (Obj[item.parentId].children = [item]);
      }
    });
    return _data.filter((item) => item.parentId === 0);
  }
```

## 7 手写 call aplly bind 同理

```js
Object.prototype.myCall = function(...val) {
  val[0].fn = this;
  val[0].fn(...val.slice(1));
};
Object.prototype.myApply = function(...val) {
  val[0].fn = this;
  val[0].fn(...val[1]);
};
Object.prototype.myBind = function(...val) {
  val[0].fn = this;
  return function() {
    val[0].fn(...val.slice(1));
  };
};
```

## 8 js 原生 copy 的实现

```js
let element = document.createElement('textarea');
element.innerText = `动态拷贝的内容`;
document.body.appendChild(element);
element.select();
document.execCommand('Copy');
element.remove();
```

## 9 取 url 参数

```js
  // name='id' str = 'id=1&name=小青'
  getStringVal(name, str) {
    let arr = str
      .split("&")
      .map((r) => r.split("="))
      .flat(); // 二维拍成一维 ['id',1,'name', '小青']
    return arr[arr.findIndex((r) => r === name) + 1]; // findIndex + 1 得出结果
  }
```

## 10 快速生成数组

```js
Array.from(new Array(100).keys());
```

## 11 正则最多几位小数 小数点未超过，也不补充

```js
'123.123'.replace(/([0-9]+.[0-9]{2})[0-9]*/, '$1');
// '123.12'
```
## 12 yarn 升级依赖包
```js
  yarn upgrade-interactive --latest
```