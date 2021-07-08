/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\git\\personalBlog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-ea6ed3cc",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-ea6ed3cc").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-6fcd6e3e",
    path: "/blogs/blog/Blog_2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6fcd6e3e").then(next)
    },
  },
  {
    name: "v-15ff5a6a",
    path: "/blogs/blog/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-15ff5a6a").then(next)
    },
  },
  {
    path: "/blogs/blog/index.html",
    redirect: "/blogs/blog/"
  },
  {
    name: "v-1769d22a",
    path: "/blogs/git/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1769d22a").then(next)
    },
  },
  {
    path: "/blogs/git/index.html",
    redirect: "/blogs/git/"
  },
  {
    name: "v-22311868",
    path: "/blogs/interview/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-22311868").then(next)
    },
  },
  {
    path: "/blogs/interview/index.html",
    redirect: "/blogs/interview/"
  },
  {
    name: "v-138220a4",
    path: "/blogs/practical/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-138220a4").then(next)
    },
  },
  {
    path: "/blogs/practical/index.html",
    redirect: "/blogs/practical/"
  },
  {
    name: "v-7d15af6c",
    path: "/blogs/js/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7d15af6c").then(next)
    },
  },
  {
    path: "/blogs/js/index.html",
    redirect: "/blogs/js/"
  },
  {
    name: "v-74056dc2",
    path: "/blogs/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-74056dc2").then(next)
    },
  },
  {
    path: "/blogs/vue/index.html",
    redirect: "/blogs/vue/"
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-1559f73a",
    path: "/tag/blog/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-1559f73a").then(next)
    },
    meta: {"pid":"tags","id":"blog"}
  },
  {
    path: "/tag/blog/index.html",
    redirect: "/tag/blog/"
  },
  {
    name: "v-32383f72",
    path: "/tag/git/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-32383f72").then(next)
    },
    meta: {"pid":"tags","id":"git"}
  },
  {
    path: "/tag/git/index.html",
    redirect: "/tag/git/"
  },
  {
    name: "v-6018b856",
    path: "/tag/面试/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-6018b856").then(next)
    },
    meta: {"pid":"tags","id":"面试"}
  },
  {
    path: "/tag/面试/index.html",
    redirect: "/tag/面试/"
  },
  {
    name: "v-d2283362",
    path: "/tag/实用/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-d2283362").then(next)
    },
    meta: {"pid":"tags","id":"实用"}
  },
  {
    path: "/tag/实用/index.html",
    redirect: "/tag/实用/"
  },
  {
    name: "v-e8d86dc8",
    path: "/tag/js/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-e8d86dc8").then(next)
    },
    meta: {"pid":"tags","id":"js"}
  },
  {
    path: "/tag/js/index.html",
    redirect: "/tag/js/"
  },
  {
    name: "v-de8294a6",
    path: "/tag/手写/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-de8294a6").then(next)
    },
    meta: {"pid":"tags","id":"手写"}
  },
  {
    path: "/tag/手写/index.html",
    redirect: "/tag/手写/"
  },
  {
    name: "v-322a45da",
    path: "/tag/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-322a45da").then(next)
    },
    meta: {"pid":"tags","id":"vue"}
  },
  {
    path: "/tag/vue/index.html",
    redirect: "/tag/vue/"
  },
  {
    name: "v-42aee080",
    path: "/categories/博客/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-42aee080").then(next)
    },
    meta: {"pid":"categories","id":"博客"}
  },
  {
    path: "/categories/博客/index.html",
    redirect: "/categories/博客/"
  },
  {
    name: "v-7f0f18bb",
    path: "/categories/git/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-7f0f18bb").then(next)
    },
    meta: {"pid":"categories","id":"git"}
  },
  {
    path: "/categories/git/index.html",
    redirect: "/categories/git/"
  },
  {
    name: "v-14bbbf36",
    path: "/categories/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-14bbbf36").then(next)
    },
    meta: {"pid":"categories","id":"前端"}
  },
  {
    path: "/categories/前端/index.html",
    redirect: "/categories/前端/"
  },
  {
    name: "v-6202375b",
    path: "/categories/实用/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-6202375b").then(next)
    },
    meta: {"pid":"categories","id":"实用"}
  },
  {
    path: "/categories/实用/index.html",
    redirect: "/categories/实用/"
  },
  {
    name: "v-afeae2e8",
    path: "/categories/vue修饰符/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-afeae2e8").then(next)
    },
    meta: {"pid":"categories","id":"vue修饰符"}
  },
  {
    path: "/categories/vue修饰符/index.html",
    redirect: "/categories/vue修饰符/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]