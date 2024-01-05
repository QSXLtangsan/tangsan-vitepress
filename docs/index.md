---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 小唐三
  text: 
  tagline: 知识是进步的阶梯，争取每天都有知识点更新
  image:
    src: /logo.png
    alt: 程序员小唐三
  actions:
    - text: 前端物语
      link: /Document/
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: Github 网站
      link: https://github.com/QSXLtangsan/vitepress
      theme: alt
features:
  - icon:
      src : "/icons/icon_js.svg"
    title: JavaScript
    details: JavaScript 是一种解释型语言
    link: /Document/JavaScript/
    linkText: 开始阅读
  - icon:
      src : "/icons/icon_node.svg"
    title: Node.js
    details: 掌握它成为全栈大神
    link: /Document/Nodejs/
    linkText: 开始阅读
  - icon:
      src : "/icons/icon_vue.svg"
    title: Vue.js
    details: 轻松构建响应式界面，Vue.js是你的前端开发选择
    link: /Document/Vue/
    linkText: 开始阅读
  - icon:
      src : "/icons/icon_react.svg"
    title: React.js
    details: 来自另一颗星球的JavaScript库
    link: /Document/React/
    linkText: 开始阅读
  - icon:
      src : "/icons/icon_git.svg"
    title: git
    details: 版本管理再无烦恼，Git让代码更加明晰，团队协作无障碍
    link: /Document/Git/
    linkText: 开始阅读
  - icon:
      src : "/icons/icon_Examination-paper.svg"
    title: 模拟面试题
    details: 掌握它，帮助你顺利通过面试，早日早到满意的工作
    link: /Document/interview-questions/
    linkText: 开始阅读
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
