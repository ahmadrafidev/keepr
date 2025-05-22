'use client'

import { useCallback, useState } from 'react'
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

import { CustomSidebarProps, DEFAULT_SIDEBAR_CONFIG } from './types/sidebar'
import { NavigationItem } from './sidebar/navigation-item'

const SidebarClient = ({ 
  sections, 
  isCollapsed, 
  onToggleCollapse 
}: { 
  sections: NonNullable<CustomSidebarProps['sidebarConfig']>
  isCollapsed: boolean
  onToggleCollapse: () => void
}) => {
  const pathname = usePathname()

  return (
    <Sidebar 
      className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 flex flex-col
        bg-background border-r ${
        isCollapsed ? 'w-[70px]' : 'w-[240px]'
      }`}
      aria-label="Main navigation"
    >
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

      <SidebarContent className="flex-1">
        {sections.map((section, sIdx) => (
          <SidebarGroup key={`section-${sIdx}`} className="mb-4">
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
                {section.items.map((item, iIdx) => {
                  const isActive = item.path === pathname
                  return (
                    <NavigationItem 
                      key={`item-${iIdx}`}
                      item={item} 
                      isActive={isActive} 
                      isCollapsed={isCollapsed}
                    />
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

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
    </Sidebar>
  )
}

export default function CustomSidebar({ 
  sidebarConfig,
  isCollapsed,
  onToggleCollapse
}: CustomSidebarProps & {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}) {
  const [sections] = useState<NonNullable<CustomSidebarProps['sidebarConfig']>>(
    sidebarConfig?.length ? sidebarConfig : DEFAULT_SIDEBAR_CONFIG
  )

  return (
    <SidebarClient 
      sections={sections}
      isCollapsed={isCollapsed}
      onToggleCollapse={onToggleCollapse}
    />
  )
}
