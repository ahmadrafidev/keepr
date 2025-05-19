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
        path: '/',
        icon: 'Home',
        description: 'Your dashboard'
      },
      { 
        title: 'Writing', 
        path: '/writing',
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
      },
      { 
        title: 'AMA', 
        path: '/ama',
        icon: 'MessageCircle',
      },
      { 
        title: 'Stack', 
        path: '/stack',
        icon: 'Layers',
      },
    ],
  },
  {
    title: 'Projects',
    items: [
      { title: 'Campsite', path: 'https://campsite.design', icon: 'Tent', external: true },
      { title: 'Design Details', path: 'https://designdetails.fm', icon: 'ListChecks', external: true },
      { title: 'Staff Design', path: 'https://staff.design', icon: 'Users', external: true },
      { title: 'Figma Plugins', path: 'https://figma.com/@brian', icon: 'Figma', external: true },
      { title: 'Security Checklist', path: 'https://securitychecklist.org', icon: 'ShieldCheck', external: true },
      { title: 'Hacker News', path: 'https://news.ycombinator.com', icon: 'Newspaper', external: true },
      { title: 'App Dissection', path: 'https://appdissection.com', icon: 'Microscope', external: true },
    ],
  },
  {
    title: 'Online',
    items: [
      { title: 'Twitter', path: 'https://twitter.com', icon: 'Twitter', external: true },
      { title: 'YouTube', path: 'https://youtube.com', icon: 'Youtube', external: true },
      { title: 'GitHub', path: 'https://github.com', icon: 'Github', external: true },
      { title: 'Figma', path: 'https://figma.com', icon: 'Figma', external: true },
    ],
  },
] 