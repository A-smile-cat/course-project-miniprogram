# course-project-miniprogram

<!-- Shields -->

<p align="center">
  <a href="https://github.com/smile-cat/course-project-miniprogram/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  </a>
  <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/" target="_blank">
    <img src="https://img.shields.io/badge/platform-WeChat%20Mini%20Program-green.svg" alt="WeChat Mini Program" />
  </a>
  <a href="https://github.com/smile-cat/course-project-miniprogram/commits/main" target="_blank">
    <img src="https://img.shields.io/github/last-commit/smile-cat/course-project-miniprogram.svg" alt="Last Commit" />
  </a>
  <a href="https://github.com/smile-cat/course-project-miniprogram/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/smile-cat/course-project-miniprogram.svg" alt="Issues" />
  </a>
</p>

<p align="center">
  <a href="README.md">English</a> ·
  <a href="#中文">中文</a>
</p>

<p align="center">
  <em>A static WeChat Mini Program template — built as a course project to practice Mini Program development.</em>
</p>

---

## About This Project

This is a **static WeChat Mini Program** developed as part of a course project. It serves as:

- **A learning exercise** in WeChat Mini Program development
- **A starter template** showcasing basic Mini Program structure and page navigation
- **A course project deliverable** demonstrating practical application of course concepts

The project covers core Mini Program fundamentals including multi-page navigation, tabBar setup, image carousels, rich text rendering, video embedding, interactive quizzes, and conditional rendering.

> **Note:** This Mini Program was originally developed as a course assignment. The content displayed is for demonstration purposes only.

## Screenshots

<p align="center">
  <strong>Tab 1</strong> — Carousel &amp; Rich Text &nbsp;&nbsp;
  <strong>Tab 2</strong> — Video &amp; Article &nbsp;&nbsp;
  <strong>Tab 3</strong> — Quotes &amp; Quiz Entry &nbsp;&nbsp;
  <strong>Tab 4</strong> — Interactive Content &nbsp;&nbsp;
</p>

## Features

| Feature | Description |
|---------|-------------|
| **Multi-page Navigation** | 4-tab tabBar with independent page controllers |
| **Image Carousel** | `swiper` component with auto-play and circular scrolling |
| **Rich Text Display** | Dynamic text rendering with `rich-text` and custom styles |
| **Video Embedding** | Remote video playback support |
| **Interactive Quiz** | Timed multiple-choice quiz with auto-submit and scoring |
| **Conditional Rendering** | `wx:if` based progressive content disclosure |
| **Auto-resize Images** | Dynamic image scaling based on screen width |

## Project Structure

```
course-project-miniprogram/
├── pages/
│   ├── Page1/          # Home — image carousel + text content
│   ├── Page2/          # Video page — embedded video + article
│   ├── Page3/          # Quotes page — navigation to quiz
│   ├── Page4/          # Interactive content — progressive disclosure
│   └── question/       # Quiz page — timed multiple-choice
├── images/
│   └── icons/          # Tab bar icon assets
├── app.js              # App entry point
├── app.json            # App configuration (pages, tabBar, window)
├── app.wxss            # Global styles
└── project.config.json # WeChat DevTools project settings
```

## Getting Started

### Prerequisites

- [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) (latest stable version)

### Setup

1. Open **WeChat DevTools**
2. Click **+** → **Import Mini Program**
3. Select this project directory
4. The project will compile and preview automatically

No build tools or package managers required — this is a vanilla Mini Program with no dependencies.

### App Configuration

Key settings in `app.json`:

- **Pages**: 5 pages across 4 tabBar tabs + 1 quiz page
- **TabBar**: Custom icon-based tabBar (text hidden, icons only)
- **Window**: Standard navigation bar with pull-to-refresh enabled

## Tech Stack

| Technology | Usage |
|------------|-------|
| WXML | Page structure & templating |
| WXSS | Styling (global + per-page) |
| JavaScript | Page logic, event handling, state management |
| WeChat API | Navigation, system info, storage, modal dialogs |

## What You'll Learn

Working through this project helps practice:

1. **Mini Program lifecycle** — `App.onLaunch`, `Page.onLoad`, `Page.onShow`
2. **TabBar navigation** — configuring bottom tabs with icons
3. **Component usage** — `swiper`, `image`, `video`, `rich-text`, `radio-group`
4. **Data binding** — two-way binding with `setData`
5. **Event handling** — tap, change, and custom events
6. **Conditional rendering** — `wx:if` / `wx:for` directives
7. **Local storage** — `wx.getStorageSync` / `wx.setStorageSync`
8. **Responsive images** — dynamic scaling via `wx.getSystemInfo`

## License

This project is released under the [MIT License](LICENSE).

> The content displayed within this Mini Program (images, text, videos) is for educational and demonstration purposes only. All third-party content belongs to their respective owners.

## Acknowledgements

Built as a course project to practice and apply WeChat Mini Program development skills.

---

<h2 id="中文">关于本项目</h2>

本项目是一个**静态微信小程序**，作为课程项目的一部分开发。它用于：

- **学习实践** — 微信小程序开发的入门练习
- **入门模板** — 展示基本的小程序结构与页面导航
- **课程作业成果** —  demonstrating 课程知识的实际应用

项目涵盖了小程序核心基础功能，包括多页面导航、TabBar 配置、图片轮播、富文本渲染、视频嵌入、互动测验和条件渲染。

> **说明：** 本小程序最初为课程作业开发，其中展示的内容仅用于演示目的。

## 截图

<p align="center">
  <strong>Tab 1</strong> — 轮播 &amp; 富文本 &nbsp;&nbsp;
  <strong>Tab 2</strong> — 视频 &amp; 文章 &nbsp;&nbsp;
  <strong>Tab 3</strong> — 名言 &amp; 测验入口 &nbsp;&nbsp;
  <strong>Tab 4</strong> — 互动内容 &nbsp;&nbsp;
</p>

## 功能特性

| 功能 | 说明 |
|------|------|
| **多页面导航** | 4 标签页 TabBar，各页面独立控制 |
| **图片轮播** | `swiper` 组件，支持自动播放和循环滚动 |
| **富文本展示** | 使用 `rich-text` 组件动态渲染文本与自定义样式 |
| **视频嵌入** | 支持远程视频播放 |
| **互动测验** | 限时选择题，支持自动提交与评分 |
| **条件渲染** | 基于 `wx:if` 的内容渐进式展示 |
| **自适应图片** | 根据屏幕宽度动态缩放图片 |

## 项目结构

```
course-project-miniprogram/
├── pages/
│   ├── Page1/          # 首页 — 图片轮播 + 文字内容
│   ├── Page2/          # 视频页 — 嵌入视频 + 文章
│   ├── Page3/          # 名言页 — 导航至测验页
│   ├── Page4/          # 互动内容 — 渐进式展示
│   └── question/       # 测验页 — 限时选择题
├── images/
│   └── icons/          # TabBar 图标资源
├── app.js              # 小程序入口文件
├── app.json            # 小程序配置（页面、TabBar、窗口）
├── app.wxss            # 全局样式
└── project.config.json # 微信开发者工具项目配置
```

## 快速开始

### 环境要求

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)（最新稳定版）

### 导入步骤

1. 打开 **微信开发者工具**
2. 点击 **+** → **导入小程序**
3. 选择本项目所在目录
4. 项目将自动编译并预览

无需构建工具或包管理器 — 本小程序为原生微信小程序，无任何外部依赖。

### 应用配置

`app.json` 中的关键设置：

- **页面**: 5 个页面（4 个 TabBar 页面 + 1 个测验页面）
- **TabBar**: 自定义图标式底部导航栏（隐藏文字，仅显示图标）
- **窗口**: 标准导航栏，启用下拉刷新

## 技术栈

| 技术 | 用途 |
|------|------|
| WXML | 页面结构与模板 |
| WXSS | 样式（全局 + 页面级） |
| JavaScript | 页面逻辑、事件处理、状态管理 |
| 微信 API | 导航、系统信息、存储、弹窗 |

## 你将学到

通过本项目的实践，可以掌握：

1. **小程序生命周期** — `App.onLaunch`、`Page.onLoad`、`Page.onShow`
2. **TabBar 导航** — 配置带图标的底部导航
3. **组件使用** — `swiper`、`image`、`video`、`rich-text`、`radio-group`
4. **数据绑定** — 使用 `setData` 双向绑定
5. **事件处理** — tap、change 和自定义事件
6. **条件渲染** — `wx:if` / `wx:for` 指令
7. **本地存储** — `wx.getStorageSync` / `wx.setStorageSync`
8. **响应式图片** — 通过 `wx.getSystemInfo` 动态缩放

## 许可证

本项目基于 [MIT 许可证](LICENSE) 发布。

> 本小程序内展示的内容（图片、文字、视频）仅用于教育与演示目的。所有第三方内容归其各自所有者所有。

## 致谢

作为课程项目构建，用于实践和应用微信小程序开发技能。
