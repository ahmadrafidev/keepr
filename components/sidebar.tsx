'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
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
      <div className="p-4 flex items-center justify-between border-b">
        <Link href="/" className="font-semibold text-lg hover:opacity-80 transition-opacity">
          Keepr
        </Link>
        <ManageDialog sections={sections} onSectionsChange={setSections} />
      </div>

      <SidebarContent className="py-4">
        {sections.map((section, sIdx) => (
          <SidebarGroup key={sIdx} className="mb-4">
            {section.title && (
              <SidebarGroupLabel className="px-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {section.title}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item, iIdx) => {
                  const isActive = item.path === pathname
                  return (
                    <NavigationItem key={iIdx} item={item} isActive={isActive} />
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
