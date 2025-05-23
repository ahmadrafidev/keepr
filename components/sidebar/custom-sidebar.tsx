'use client'

import { useMemo, memo } from 'react'
import { usePathname } from 'next/navigation'
import { PanelLeft } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { TooltipProvider } from '@/components/ui/tooltip'

import { CustomSidebarProps, DEFAULT_SIDEBAR_CONFIG } from '../types/sidebar'
import { NavigationItem } from './navigation-item'

const SidebarSection = memo<{
  section: NonNullable<CustomSidebarProps['sidebarConfig']>[0]
  sectionIndex: number
  isCollapsed: boolean
  pathname: string
}>(function SidebarSection({ section, sectionIndex, isCollapsed, pathname }) {
  const navigationItems = useMemo(() => 
    section.items.map((item, itemIndex) => {
      const isActive = item.path === pathname
      return (
        <NavigationItem 
          key={`${item.path}-${itemIndex}`}
          item={item} 
          isActive={isActive} 
          isCollapsed={isCollapsed}
        />
      )
    }),
    [section.items, isCollapsed, pathname]
  )

  return (
    <SidebarGroup key={`section-${sectionIndex}`} className="mb-4">
      {!isCollapsed && section.title && (
        <SidebarGroupLabel 
          className="px-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1"
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

const SidebarHeader = memo<{
  isCollapsed: boolean
  onToggleCollapse: () => void
}>(function SidebarHeader({ isCollapsed, onToggleCollapse }) {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className={`font-semibold text-2xl text-foreground ${isCollapsed ? 'hidden' : 'block'}`}>
        Keepr
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 hover:bg-accent hover:text-accent-foreground"
        onClick={onToggleCollapse}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <PanelLeft 
          className={`h-4 w-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
          aria-hidden="true"
        />
      </Button>
    </div>
  )
})

const SidebarFooter = memo<{
  isCollapsed: boolean
}>(function SidebarFooter({ isCollapsed }) {
  return (
    <div className="p-1 border-t bg-background">
      <div className={`
        flex items-center gap-2
        ${isCollapsed ? 'justify-center' : 'px-2 py-1 rounded-md hover:bg-accent transition-colors'}
      `}>
        <ThemeToggle align={isCollapsed ? "end" : "start"} />
        {!isCollapsed && (
          <span className="text-sm text-muted-foreground flex-1">
            Switch theme
          </span>
        )}
      </div>
    </div>
  )
})

const SidebarClient = memo<{ 
  sections: NonNullable<CustomSidebarProps['sidebarConfig']>
  isCollapsed: boolean
  onToggleCollapse: () => void
}>(function SidebarClient({ sections, isCollapsed, onToggleCollapse }) {
  const pathname = usePathname()

  const sidebarSections = useMemo(() => 
    sections.map((section, sectionIndex) => (
      <SidebarSection
        key={`section-${sectionIndex}-${section.title}`}
        section={section}
        sectionIndex={sectionIndex}
        isCollapsed={isCollapsed}
        pathname={pathname}
      />
    )),
    [sections, isCollapsed, pathname]
  )

  const sidebarClasses = useMemo(() => 
    `fixed top-0 left-0 h-screen z-50 transition-all duration-300 flex flex-col bg-background border-r ${
      isCollapsed ? 'w-[70px]' : 'w-[240px]'
    }`,
    [isCollapsed]
  )

  return (
    <TooltipProvider delayDuration={300}>
      <Sidebar 
        className={sidebarClasses}
        aria-label="Main navigation"
      >
        <SidebarHeader 
          isCollapsed={isCollapsed} 
          onToggleCollapse={onToggleCollapse} 
        />

        <SidebarContent className="flex-1">
          {sidebarSections}
        </SidebarContent>

        <SidebarFooter isCollapsed={isCollapsed} />
      </Sidebar>
    </TooltipProvider>
  )
})

export default function CustomSidebar({ 
  sidebarConfig,
  isCollapsed,
  onToggleCollapse
}: CustomSidebarProps & {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}) {  
  const sections = useMemo<NonNullable<CustomSidebarProps['sidebarConfig']>>(() => 
    sidebarConfig?.length ? sidebarConfig : DEFAULT_SIDEBAR_CONFIG,
    [sidebarConfig]
  )

  return (
    <SidebarClient 
      sections={sections}
      isCollapsed={isCollapsed}
      onToggleCollapse={onToggleCollapse}
    />
  )
}
