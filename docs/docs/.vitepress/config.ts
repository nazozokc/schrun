import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "schrun",
  description: "Documentation for the schrun task runner",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/" },
      { text: "CLI reference", link: "/cli" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting started", link: "/" },
          { text: "Task files", link: "/tasks" },
          { text: "CLI reference", link: "/cli" },
        ],
      },
    ],
  },
})
