import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "个人网站",
  description: "计算机专业学生 · 全栈开发爱好者",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "学习路线", link: "/studymap/roadmap" },
      { text: "学习笔记", link: "/studynote/JAVA" },
    ],
    sidebar: {
      '/studymap/': [
        {
          text: '学习路线',
          collapsed: false,
          items: [
            { text: '学习路线汇总', link: '/studymap/roadmap' }
          ],
        }
      ],
      '/studynote/': [
        {
          text: '学习笔记',
          collapsed: false,
          items: [
            { text: '数据结构', link: '/studynote/数据结构' },
            { text: 'JAVA', link: '/studynote/JAVA' },
          ],
        }
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/yangzihan-2007/yangzihan-2007" },
    ],
  },
})
