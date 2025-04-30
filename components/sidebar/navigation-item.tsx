import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { SidebarItem } from '../types/sidebar'

interface NavigationItemProps {
  item: SidebarItem
  isActive: boolean
}

export function NavigationItem({ item, isActive }: NavigationItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className="flex items-center gap-3"
      >
        {item.external ? (
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center"
          >
            <span>{item.title}</span>
            <ExternalLink className="ml-auto h-3 w-3" />
          </a>
        ) : (
          <Link href={item.path || '#'} className="flex w-full items-center">
            <span>{item.title}</span>
          </Link>
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
} 