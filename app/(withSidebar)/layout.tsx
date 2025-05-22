'use client';

import { ReactNode, useState, useCallback } from 'react';
import CustomSidebar from '@/components/custom-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

interface WithSidebarLayoutProps {
  children: ReactNode;
}

export default function WithSidebarLayout({ children }: WithSidebarLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebarCollapse = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev);
  }, []);

  return (
    <SidebarProvider defaultOpen={!isSidebarCollapsed}>
      <div className="flex min-h-screen">
        <CustomSidebar 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={handleToggleSidebarCollapse}
        />
        <div 
          className="flex-1 transition-all duration-300"
        >
          <main className="p-6 max-w-6xl mx-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

