import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "schrun",
  description: "A small, straightforward task runner for your terminal.",
  cleanUrls: true,
  themeConfig: {
    siteTitle: "schrun",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Reference", link: "/reference/" },
      {
        text: "GitHub",
        link: "https://github.com/nazozokc/schrun",
        target: "_blank",
        rel: "noreferrer",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Introduction", link: "/guide/" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Your first task", link: "/guide/first-task" },
            { text: "Scheduling tasks", link: "/guide/scheduling" },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "CLI", link: "/reference/cli" },
            { text: "Task configuration", link: "/reference/task-config" },
            { text: "Limitations", link: "/reference/limitations" },
          ],
        },
      ],
    },
    search: { provider: "local" },
    editLink: {
      pattern: "https://github.com/nazozokc/schrun/edit/main/apps/schrun/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/nazozokc/schrun" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © nazoozokc",
    },
  },
  markdown: {
    theme: { light: "github-light", dark: "github-dark" },
  },
});
