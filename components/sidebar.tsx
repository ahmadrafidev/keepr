'use client'

import { useCallback, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

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
      className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ${
        isCollapsed ? 'w-[70px]' : 'w-[240px]'
      }`}
      aria-label="Main navigation"
    >
      <div className="p-4 flex items-center justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronLeft 
            className={`h-4 w-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
            aria-hidden="true"
          />
        </Button>
      </div>

      <SidebarContent className="py-4">
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
    </Sidebar>
  )
}

export default function CustomSidebar({ sidebarConfig }: CustomSidebarProps) {
  const [sections] = useState<NonNullable<CustomSidebarProps['sidebarConfig']>>(
    sidebarConfig?.length ? sidebarConfig : DEFAULT_SIDEBAR_CONFIG
  )
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed(prev => !prev)
  }, [])

  return (
    <SidebarClient 
      sections={sections}
      isCollapsed={isCollapsed}
      onToggleCollapse={handleToggleCollapse}
    />
  )
}
