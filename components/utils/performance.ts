import { useEffect, useRef } from 'react'

export function useRenderTracking(componentName: string) {
  const renderCount = useRef(0)
  const lastRenderTime = useRef(Date.now())

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      renderCount.current += 1
      const now = Date.now()
      const timeSinceLastRender = now - lastRenderTime.current
      
      console.log(`🔄 ${componentName} render #${renderCount.current} (${timeSinceLastRender}ms since last)`)
      lastRenderTime.current = now
    }
  })

  return renderCount.current
}

export class SidebarPerformanceMonitor {
  private static instance: SidebarPerformanceMonitor
  private metrics: Map<string, number[]> = new Map()

  static getInstance(): SidebarPerformanceMonitor {
    if (!SidebarPerformanceMonitor.instance) {
      SidebarPerformanceMonitor.instance = new SidebarPerformanceMonitor()
    }
    return SidebarPerformanceMonitor.instance
  }

  startMeasurement(operationName: string): () => void {
    const startTime = performance.now()
    
    return () => {
      const endTime = performance.now()
      const duration = endTime - startTime
      
      if (!this.metrics.has(operationName)) {
        this.metrics.set(operationName, [])
      }
      
      this.metrics.get(operationName)!.push(duration)
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`⏱️ ${operationName}: ${duration.toFixed(2)}ms`)
      }
    }
  }

  getAverageTime(operationName: string): number {
    const times = this.metrics.get(operationName)
    if (!times || times.length === 0) return 0
    
    return times.reduce((sum, time) => sum + time, 0) / times.length
  }

  getMetrics(): Record<string, { average: number; count: number; total: number }> {
    const result: Record<string, { average: number; count: number; total: number }> = {}
    
    this.metrics.forEach((times, operationName) => {
      const total = times.reduce((sum, time) => sum + time, 0)
      result[operationName] = {
        average: total / times.length,
        count: times.length,
        total
      }
    })
    
    return result
  }

  reset(): void {
    this.metrics.clear()
  }
}

export function useComponentPerformance(componentName: string) {
  const monitor = SidebarPerformanceMonitor.getInstance()
  
  useEffect(() => {
    const endMeasurement = monitor.startMeasurement(`${componentName}_mount`)
    
    return () => {
      endMeasurement()
    }
  }, [componentName, monitor])
} 