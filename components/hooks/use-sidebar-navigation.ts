import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import type { SidebarItem } from '../types/sidebar'

/**
 * Custom hook to optimize sidebar navigation state calculation
 * Reduces re-renders by memoizing active states and pathname comparisons
 */
export function useSidebarNavigation(items: SidebarItem[]) {
  const pathname = usePathname()

  // Memoize active states for all items to avoid recalculation on every render
  const activeStates = useMemo(() => {
    const states = new Map<string, boolean>()
    
    items.forEach((item, index) => {
      const key = `${item.path}-${index}`
      states.set(key, item.path === pathname)
    })
    
    return states
  }, [items, pathname])

  // Return a function to check if an item is active
  const isItemActive = useMemo(() => 
    (item: SidebarItem, index: number) => {
      const key = `${item.path}-${index}`
      return activeStates.get(key) ?? false
    },
    [activeStates]
  )

  return {
    pathname,
    isItemActive,
    activeStates
  }
}

/**
 * Lightweight hook for single item active state
 * Use this when you only need to check one item's active state
 */
export function useItemActiveState(itemPath?: string) {
  const pathname = usePathname()
  
  return useMemo(() => 
    itemPath === pathname,
    [itemPath, pathname]
  )
} 