export type SidebarItem = {
  title: string
  path?: string
  external?: boolean
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
      { title: 'Home', path: '/' },
      { title: 'Writing', path: '/writing' },
    ],
  },
] 