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
