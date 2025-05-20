export type SidebarItem = {
  title: string
  path?: string
  external?: boolean
  icon?: string
  description?: string
}

export type SidebarSection = {
  title: string
  items: SidebarItem[]
}

export interface CustomSidebarProps {
  sidebarConfig?: SidebarSection[]
}

export const DEFAULT_SIDEBAR_CONFIG: SidebarSection[] = [
  {
    title: 'Main',
    items: [
      { 
        title: 'Home', 
        path: '/home',
        icon: 'Home',
        description: 'Your dashboard'
      },
      { 
        title: 'Blog', 
        path: '/blog',
        icon: 'PenLine',
        description: 'Your articles and drafts'
      },
    ],
  },
  {
    title: 'Me',
    items: [
      { 
        title: 'Bookmarks', 
        path: '/bookmarks',
        icon: 'Bookmark',
        description: 'Curated collection of interesting finds'
      },
      { 
        title: 'Stack', 
        path: '/stack',
        icon: 'Layers',
        description: 'My technology stack and preferences'
      },
      {
        title: 'Reading List',
        path: '/reading',
        icon: 'BookOpen',
        description: 'Articles, books, and resources that inspire me'
      },
      {
        title: 'Learning',
        path: '/learning',
        icon: 'GraduationCap',
        description: 'Current learning goals and resources'
      },
      {
        title: 'Tools',
        path: '/tools',
        icon: 'Wrench',
        description: 'My development toolkit and configurations'
      },
      {
        title: 'Notes',
        path: '/notes',
        icon: 'StickyNote',
        description: 'Personal knowledge base and quick thoughts'
      },
      {
        title: 'Principles',
        path: '/principles',
        icon: 'Lightbulb',
        description: 'Core development principles and philosophies'
      },
      {
        title: 'Inspirations',
        path: '/inspirations',
        icon: 'Sparkles',
        description: 'People and projects that inspire my work'
      },
      {
        title: 'Experiments',
        path: '/experiments',
        icon: 'Flask',
        description: 'Playground for ideas and proof of concepts'
      },
      {
        title: 'Playlist',
        path: '/playlist',
        icon: 'Music',
        description: 'Development-focused music and podcasts'
      },
      {
        title: 'Setup',
        path: '/setup',
        icon: 'Monitor',
        description: 'My development environment and hardware'
      }
    ],
  },
  {
    title: 'Projects',
    items: [
      {
        title: 'AstraUI',
        path: 'https://www.astraui.design',
        icon: 'LayoutDashboard',
        description: 'A modern, scalable design system for web and mobile.',
        external: true,
      },
      {
        title: 'Lumen',
        path: 'https://luumen.vercel.app',
        icon: 'Eye',
        description: 'Accessibility contrast checker for designers and devs.',
        external: true,
      },
      {
        title: 'Worxshop',
        path: 'https://worxshop.vercel.app/',
        icon: 'Tool',
        description: 'Curated tools for creators, designers, and developers.',
        external: true,
      },
      {
        title: 'DevBook',
        path: 'https://devnook.vercel.app/',
        icon: 'Book',
        description: 'A digital notebook of my software engineering journey.',
        external: true,
      },
      {
        title: 'Keepr',
        path: 'https://keepr-eta.vercel.app/',
        icon: 'BookmarkPlus',
        description: 'A simple bookmarking tool for inspiration.',
        external: true,
      },
      {
        title: 'CV',
        path: 'https://scho.vercel.app/',
        icon: 'FileText',
        description: 'Minimalist template for academic personal websites.',
        external: true,
      },
      {
        title: 'ProFile',
        path: 'https://pro-file-web.vercel.app/',
        icon: 'FileCheck2',
        description: 'Generate ATS-ready resumes instantly.',
        external: true,
      },
      {
        title: 'WHITW',
        path: 'https://whitw.vercel.app/',
        icon: 'Search',
        description: 'Search for news and information worldwide.',
        external: true,
      },
    ],
  },
  {
    title: 'Online',
    items: [
      { title: 'Twitter', path: 'https://x.com/rafiwiranaa', icon: 'Twitter', external: true },
      { title: 'GitHub', path: 'https://github.com/ahmadrafidev', icon: 'Github', external: true },
    ],
  },
];
