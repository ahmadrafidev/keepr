import React from 'react'
import Link from 'next/link'
import * as Icons from 'lucide-react'

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import type { SidebarItem } from '../types/sidebar'

interface NavigationItemProps {
  item: SidebarItem
  isActive: boolean
  isCollapsed: boolean
}

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

function resolveIcon(name?: string): IconType {
  if (!name) return Icons.Circle

  const key = name
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join('') as keyof typeof Icons

  return (Icons[key] as IconType) ?? Icons.Circle
}

export function NavigationItem({
  item,
  isActive,
  isCollapsed,
}: NavigationItemProps) {
  const IconComponent = resolveIcon(item.icon)

  const content = (
    <>
      <IconComponent
        className={`h-5 w-5 transition-colors ${
          isActive
            ? 'text-inherit'
            : 'text-muted-foreground group-hover:text-foreground'
        }`}
      />
      {!isCollapsed && <span className="ml-2">{item.title}</span>}
      {!isCollapsed && item.external && (
        <Icons.ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
      )}
    </>
  )

  const button = (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      className={`group flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground hover:bg-accent hover:text-accent-foreground'
      } ${isCollapsed ? 'justify-center' : ''}`}
    >
      {item.external ? (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          {content}
        </a>
      ) : (
        <Link
          href={item.path || '#'}
          className={`flex w-full items-center ${
            isCollapsed ? 'justify-center' : ''
          }`}
        >
          {content}
        </Link>
      )}
    </SidebarMenuButton>
  )

  return isCollapsed ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <SidebarMenuItem>{button}</SidebarMenuItem>
        </TooltipTrigger>
        <TooltipContent 
          side="right" 
          className="bg-popover text-popover-foreground"
        >
          {item.title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <SidebarMenuItem>{button}</SidebarMenuItem>
  )
}
