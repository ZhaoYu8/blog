---
title: 题目
date: 2020-12-14
categories:
  - 前端
tags:
  - 面试
---

<!-- more -->

## 1. 从输入 url 到渲染出整个页面

1. 加载过程
   - DNS 解析： 域名 -> IP 地址
   - 浏览器根据 IP 地址像服务器发起 http 请求
   - 服务器处理 http 请求，并返回给浏览器
2. 解析过程
   - 根据 HTML 代码生成 DOM Tree
   - 根据 CSS 代码生成 CSSOM
   - 将 DOM tree 和 CSSOM 整合行程 Render Tree
   - 根据 Render Tree 渲染页面
   - 遇到 `<script>` 则暂停渲染，优先加载并执行 js 代码，完成再继续
   - 直至把 Render Tree 渲染完成

## 2. window.onload 和 DOMContentLoaded 的区别

```js
window.addEventListener(
  'load',
  function() {
    console.log('load 需要等待图片和视频等资源加载完成才执行');
  },
  false
);

window.addEventListener(
  'DOMContentLoaded',
  function() {
    console.log('DOMContentLoaded 在dom树渲染完成之后就可以触发，不需要等待图片,视频资源加载');
  },
  false
);
```

## 3. 前端安全

1. XSS
   - `<script>` 标签内的内容，会被浏览器认为，是需要执行的代码。从而获取到个人信息
   - 解决方法就是：< 替换成 `&lt;` > 替换成 `&gt;`;
2. XSRF
   - 伪造用户调用接口
   - 解决方法：后台返回唯一的 token,存储 localStorage 中。 在请求头里添加这个 token。 或者使用短信验证码 密码 等。

## 4 常用数组方法

`let arr = [1,2];`

### 4.1 常用方法

```js
// 1. pop
console.log(arr.pop(), arr); // 2 [1]; 返回数组最后一项，原数组被删除了最后一项
// 2. shift
console.log(arr.shift(), arr); // 1 [2]; 返回数组第一项，原数组被删除了第一项
// 3. push
console.log(arr.push(3, 4), arr); // 4 [1,2,3,4]; 返回数组长度，原数组 `尾部` 上添加数据
// 4. unshift
console.log(arr.unshift(3, 4), arr); // 4 [3,4,1,2]; 返回数组长度，原数组 `头部` 上添加数据
// 5. splice
console.log(arr.splice(1, 1), arr); // [2] [1] 返回下表为1的，并且删除原数组下表为1的。
console.log(arr.splice(1, 0, 3), arr); //[] [1,2,3] 第二个数组为0，则可以在数组尾部追加 并且返回结果
```

### 4.2 纯函数方法

```js
// *1.不改变原函数 2. 返回一个数组`*
// 1. concat
console.log(arr.concat([3, 4]), arr); // [1,2,3,4], [1,2]; 二个数组拼接
// 2. map
console.log(
  arr.map((r) => r * 10),
  arr
); // [10, 20] [1,2]; 遍历数组，返回结果
// 3. filter
console.log(
  arr.map((r) => r > 1),
  arr
); // [2] [1,2]; 遍历数组，返回符合条件的数据
// 4. slice
console.log(arr.slice(1, 2), arr); // [2] [1, 2]; 传入二个参数，返回下标 1 到 2的数据
```

## 5 自定义 v-model

```html
<input type="text" @input="$emit('input', $event.target.value)" />
```

```js
model: {
  prop: 'value',
  event: 'input'
},
props: {
  value: String,
  default() {
    return ''
  }
}
```

## 6 动态组件

`<component :is="xxxx" />`

## 7 异步加载组件

`components: { 'my-component': () => import('./my-async-component') }`

## 8 缓存

`<keep-alive> <xxx /> </keep-alive>`

## 9 Object.definePrototype 的实现原理

```js
let obj = {
  age: 20,
  info: {
    address: '北京',
  },
  arr: [10, 20],
};
function update() {
  console.log('更新了');
}
// 借助于 Object.create ，继承 Array 对象的原型;
let arrPrototype = Object.create(Array.prototype);
// 遍历数组方法，在 arrPrototype 对象下面，绑定方法
['push', 'pop'].map((r) => {
  arrPrototype[r] = function(...val) {
    update();
    arrPrototype.__proto__[r].call(this, ...val); // 借助于 原型的方法，最终实现数组方法
    // 因为数组可能会添加对象，所以这里也要执行一下深度监听。
    observer(...val);
  };
});
// 定义 vue2 监听对象的方法
function define(val, key, value) {
  // 深度监听value 一般是对象的值是另一个对象
  observer(value);
  Object.defineProperty(val, key, {
    get() {
      return value;
    },
    set(newVal) {
      // 监听由于替换一个新对象，而导致新对象无法监听的问题。
      observer(newVal);
      value = newVal;
      update();
    },
  });
}
// 定义 对象遍历绑定监听事件
function observer(obj) {
  if (typeof obj !== 'object' || obj == null) return obj;
  if (Array.isArray(obj)) {
    obj.__proto__ = arrPrototype;
    return;
  }
  for (const key in obj) {
    define(obj, key, obj[key]);
  }
}
// 初始化 需要监听的对象
observer(obj);
obj.age = { num: 2 };
obj.info.address = '上海';
obj.age.num = 3;
obj.arr.push({ a: 1 });
console.log(obj.arr);
obj.arr[2].a = 2;
```

::: tip 提示
因为 Object.defineProperty 监听不了数组，所以给数组方法单独写了方法监听
:::

## 10 用 js 模拟 DOM 结构

```html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size: 15px">
    <li>a</li>
  </ul>
</div>
```

```js
let vdom = [
  {
    tag: 'div',
    prop: {
      id: 'div1',
      className: 'container',
    },
    children: [
      { tag: 'p', children: 'vdom' },
      {
        tag: 'ul',
        prop: {
          style: 'font-size:15px',
        },
        children: [{ tag: 'li', children: 'a' }],
      },
    ],
  },
];
```
