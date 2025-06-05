'use client'

import { useMemo, memo } from 'react'
import { usePathname } from 'next/navigation'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { ThemeToggle } from '@/components/theme-toggle'
import { TooltipProvider } from '@/components/ui/tooltip'

import { CustomSidebarProps, DEFAULT_SIDEBAR_CONFIG } from '../types/sidebar'
import { NavigationItem } from './navigation-item'

const SidebarSection = memo<{
  section: NonNullable<CustomSidebarProps['sidebarConfig']>[0]
  sectionIndex: number
  pathname: string
}>(function SidebarSection({ section, sectionIndex, pathname }) {
  const navigationItems = useMemo(() => 
    section.items.map((item, itemIndex) => {
      const isActive = item.path === pathname
      return (
        <NavigationItem 
          key={`${item.path}-${itemIndex}`}
          item={item} 
          isActive={isActive} 
        />
      )
    }),
    [section.items, pathname]
  )

  return (
    <SidebarGroup key={`section-${sectionIndex}`} className="mb-4">
      {section.title && (
        <SidebarGroupLabel 
          className="px-4 text-sm font-semibold uppercase tracking-normal text-muted-foreground mb-1"
          aria-hidden="true"
        >
          {section.title}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {navigationItems}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
})

const SidebarHeader = memo(function SidebarHeader() {
  return (
    <div className="p-6 flex items-center font-semibold text-2xl text-foreground">
      Keepr
    </div>
  )
})

const SidebarFooter = memo(function SidebarFooter() {
  return (
    <div className="p-1 border-t bg-background">
      <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-accent transition-colors">
        <ThemeToggle align="start" />
        <span className="text-sm text-muted-foreground flex-1">
          Switch theme
        </span>
      </div>
    </div>
  )
})

const SidebarClient = memo<{
  sections: NonNullable<CustomSidebarProps['sidebarConfig']>
}>(function SidebarClient({ sections }) {
  const pathname = usePathname()

  const sidebarSections = useMemo(() => 
    sections.map((section, sectionIndex) => (
      <SidebarSection
        key={`section-${sectionIndex}-${section.title}`}
        section={section}
        sectionIndex={sectionIndex}
        pathname={pathname}
      />
    )),
    [sections, pathname]
  )

  return (
    <TooltipProvider delayDuration={300}>
      <Sidebar 
        className="transition-all duration-300 flex flex-col bg-background border-r h-screen"
        aria-label="Main navigation"
      >
        <SidebarHeader />
        <SidebarContent className="flex-1">
          {sidebarSections}
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </TooltipProvider>
  )
})

export default function CustomSidebar({ 
  sidebarConfig
}: CustomSidebarProps) {  
  const sections = useMemo<NonNullable<CustomSidebarProps['sidebarConfig']>>(() => 
    sidebarConfig?.length ? sidebarConfig : DEFAULT_SIDEBAR_CONFIG,
    [sidebarConfig]
  )

  return (
    <SidebarClient 
      sections={sections}
    />
  )
}
