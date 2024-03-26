import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tuist",
  description: "Scale your Xcode app development",
  srcDir: "docs",
  lastUpdated: true,  
  locales: {
    root: {
      label: "English",
      lange: "en"
    }
  },
  themeConfig: {
    logo: "/logo.png",
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    editLink: {
      pattern: 'https://github.com/tuist/docs/edit/main/docs/:path'
    },
    sidebar: [
      {
        text: 'Tuist',
        items: [
          {
            text: "Users",
            items: [
              { text: 'Installation', link: 'tuist/users/installation' },
              { text: 'Project structure', link: 'tuist/users/project-structure' },
              { text: 'CLI', link: 'tuist/users/cli' },
              { text: 'Dependencies', link: 'tuist/users/dependecies' }
            ]
          }
        ]
      },
      {
        text: "Tuist Cloud",
        items: [
          {
            text: "Users",
            items: [
              { text: 'What is Tuist Cloud', link: '/tuist-cloud/users/index' },
              { text: 'Binary caching', link: '/tuist-cloud/users/binary-caching' },
              { text: 'Selective testing', link: '/tuist-cloud/users/selective-testing' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tuist/tuist' },
      { icon: 'x', link: 'https://x.com/tuistio' },
      { icon: 'mastodon', link: 'https://fosstodon.org/@tuist' },
      { icon: 'slack', link: 'https://join.slack.com/t/tuistapp/shared_invite/zt-1y667mjbk-s2LTRX1YByb9EIITjdLcLw' }
    ]
  }
})
