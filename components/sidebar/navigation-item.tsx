import Link from 'next/link'
import * as Icons from 'lucide-react'
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { SidebarItem } from '../types/sidebar'

interface NavigationItemProps {
  item: SidebarItem
  isActive: boolean
}

export function NavigationItem({ item, isActive }: NavigationItemProps) {
  const Icon = item.icon ? (Icons as any)[item.icon] : null
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={
          'flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors rounded-lg ' +
          (isActive ? 'bg-black text-white' : 'hover:bg-accent hover:text-accent-foreground')
        }
      >
        {item.external ? (
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3"
          >
            {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            <span>{item.title}</span>
            <Icons.ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
          </a>
        ) : (
          <Link href={item.path || '#'} className="flex w-full items-center gap-3">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            <span>{item.title}</span>
          </Link>
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
} 