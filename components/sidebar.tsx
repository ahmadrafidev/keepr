'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { CustomSidebarProps, DEFAULT_SIDEBAR_CONFIG } from './types/sidebar'
import { ManageDialog } from './sidebar/manage-dialog'
import { NavigationItem } from './sidebar/navigation-item'

export default function CustomSidebar({ sidebarConfig }: CustomSidebarProps) {
  const pathname = usePathname()
  const [sections, setSections] = useState(
    sidebarConfig?.length ? sidebarConfig : DEFAULT_SIDEBAR_CONFIG
  )

  return (
    <Sidebar className="border-r">
      <div className="p-4 flex items-center justify-between">
        <span className="font-medium">Keepr</span>
        <ManageDialog sections={sections} onSectionsChange={setSections} />
      </div>

      <SidebarContent>
        {sections.map((section, sIdx) => (
          <SidebarGroup key={sIdx}>
            {section.title && (
              <SidebarGroupLabel className="text-xs uppercase text-muted-foreground">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item, iIdx) => (
                  <NavigationItem
                    key={iIdx}
                    item={item}
                    isActive={item.path === pathname}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
