import React, { memo, useMemo } from 'react'
import Link from 'next/link'
import * as Icons from 'lucide-react'

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

import type { SidebarItem } from '../types/sidebar'

interface NavigationItemProps {
  item: SidebarItem
  isActive: boolean
}

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

const iconCache = new Map<string, IconType>()

function resolveIcon(name?: string): IconType {
  if (!name) return Icons.Circle
  
  if (iconCache.has(name)) {
    return iconCache.get(name)!
  }

  const key = name
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join('') as keyof typeof Icons

  const icon = (Icons[key] as IconType) ?? Icons.Circle
  
  iconCache.set(name, icon)
  return icon
}

export const NavigationItem = memo<NavigationItemProps>(function NavigationItem({
  item,
  isActive,
}) {
  const IconComponent = useMemo(() => resolveIcon(item.icon), [item.icon])

  const content = useMemo(() => (
    <>
      <IconComponent
        className={`h-5 w-5 transition-colors ${
          isActive
            ? 'text-gray-900 dark:text-gray-100'
            : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'
        }`}
      />
      <span className="ml-2">{item.title}</span>
      {item.external && (
        <Icons.ExternalLink className="ml-auto h-3 w-3 text-gray-400 dark:text-gray-500" />
      )}
    </>
  ), [IconComponent, isActive, item.title, item.external])

  const buttonClasses = useMemo(() => 
    `group flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      isActive
        ? 'bg-gray-100 text-gray-900 dark:bg-zinc-800 dark:text-gray-100'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800/50 hover:text-gray-900 dark:hover:text-gray-100'
    }`,
    [isActive]
  )

  const linkClasses = useMemo(() => 
    'flex w-full items-center',
    []
  )

  const button = useMemo(() => (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      className={buttonClasses}
    >
      {item.external ? (
        <Link
          href={item.path || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses}
        >
          {content}
        </Link>
      ) : (
        <Link
          href={item.path || '#'}
          className={linkClasses}
        >
          {content}
        </Link>
      )}
    </SidebarMenuButton>
  ), [isActive, buttonClasses, item.external, item.path, linkClasses, content])

  return <SidebarMenuItem>{button}</SidebarMenuItem>
})

NavigationItem.displayName = 'NavigationItem'
