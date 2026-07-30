---
title: 这个网站是怎么搭起来的
date: 2026-07-19
category: 技术
tags: [Astro, 建站]
excerpt: 记录这个博客的技术选型：Astro 静态生成、Markdown 内容集合、Decap CMS 后台。
---

这个博客的技术栈很简单：

- **Astro**：静态站点生成，构建时把 Markdown 渲染成 HTML
- **Markdown**：文章就是纯文本文件，用 Git 管理版本
- **Decap CMS**：一个网页后台，写文章后自动提交回仓库

## 为什么不用 WordPress

静态站不需要数据库和服务器维护，打开速度快，也不用担心被入侵。
