import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tuist",
  titleTemplate: ':title | Tuist',
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
    search: {
      provider: 'local'
    },
    nav: [
      { text: "Tuist Cloud", link: "/guide/scale/cloud"},
      { text: 'Guide', link: '/guide/introduction/what-is-tuist' },
      { text: 'Reference', link: '/reference/cli' },
      { text: 'Changelog', link: 'https://github.com/tuist/tuist/releases' }
    ],
    editLink: {
      pattern: 'https://github.com/tuist/docs/edit/main/docs/:path'
    },
    sidebar: {
      '/guide/': [
        {
          text: "Introduction",
          items: [
            {
              text: "What is Tuist?",
              link: "/guide/introduction/what-is-tuist"
            },
            {
              text: "The cost of convenience",
              link: "/guide/introduction/cost-of-convenience"
            },
            {
              text: "Installation",
              link: "/guide/introduction/installation",
            },
            {
              text: "Adopting Tuist",
              collapsed: true,
              items: [
                {
                  text: "Create a project",
                  link: "/guide/introduction/adopting-tuist/new-project"
                },
                {
                  text: "Use it with a Swift Package",
                  link: "/guide/introduction/adopting-tuist/swift-package"
                },
                {
                  text: "Migrate from .xcodeproj",
                  link: "/guide/introduction/adopting-tuist/swift-package"
                },
                {
                  text: "Migrate local Swift Packages"
                },
                {
                  text: "Migrate from XcodeGen",
                  link: "/guide/introduction/adopting-tuist/migrate-from-xcodegen"
                },
                {
                  text: "Migrate from Bazel",
                  link: "/guide/introduction/adopting-tuist/migrate-from-xcodegen"
                }
              ]
            }
          ]
        },
        {
          text: "Generation",
          items: [
            {text: "Directory structure", link: '/guide/generation/directory-structure'},
            {text: "Editing", link: "/guide/generation/editing"},
            {text: "Dependencies"},
            {text: "Code sharing"},
            {text: "Graph visualization"}
          ]
        },
        {
          text: "Automation",
          items: [
            { text: "Build" },
            { text: "Test" },
            { text: "Run" },
            { text: "Clean" }
          ]
        },
        {
          text: "Working at scale",
          items: [
            {
              text: "Xcode",
              link: "/guide/scale/xcode"
            },
            {
              text: "µFeatures architecture",
              link: "/guide/scale/ufeatures-architecture"
            },
            {
              text: "Tuist Cloud",
              link: "/guide/scale/cloud",
              items: [
                {
                  text: "Get started",
                  link: "/guide/scale/cloud/get-started"
                },
                {
                  text: "Binary caching",
                  link: "/guide/scale/cloud/binary-caching"
                },
                {
                  text: "Selective testing",
                  link: "/guide/scale/cloud/selective-testing"
                },
                {
                  text: "On-premise hosting"
                }
              ]
            }
          ]
        },
        {
          text: "Extensions",
          items: [
            {
              text: "Types",
              collapsed: true,
              items: [
                { text: "Tasks"},
                { text: "Templates" },
                { text: "Resource synthesizers" }
              ]
            },
            {
              text: "Sharing (plugins)"
            }
          ]
        }
      ],
      '/reference/': [
        {
          text: "Reference",
          items: [
            {
              text: "CLI",
              link: "/reference/cli"
            },
            {
              text: "Manifests",
              link: "/reference/manifests/index"
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tuist/tuist' },
      { icon: 'x', link: 'https://x.com/tuistio' },
      { icon: 'mastodon', link: 'https://fosstodon.org/@tuist' },
      { icon: 'slack', link: 'https://join.slack.com/t/tuistapp/shared_invite/zt-1y667mjbk-s2LTRX1YByb9EIITjdLcLw' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Tuist GmbH'
    }
  }
})
