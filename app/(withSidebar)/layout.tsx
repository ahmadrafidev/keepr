'use client';

import { ReactNode, useState, useCallback, useMemo } from 'react';
import CustomSidebar from '@/components/sidebar/custom-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

interface WithSidebarLayoutProps {
  children: ReactNode;
}

export default function WithSidebarLayout({ children }: WithSidebarLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebarCollapse = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev);
  }, []);

  const mainContentClasses = useMemo(() => 
    "flex-1 transition-all duration-300",
    []
  );

  const mainContent = useMemo(() => (
    <div className={mainContentClasses}>
      <main className="p-6 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  ), [children, mainContentClasses]);

  return (
    <SidebarProvider defaultOpen={!isSidebarCollapsed}>
      <div className="flex min-h-screen">
        <CustomSidebar 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={handleToggleSidebarCollapse}
        />
        {mainContent}
      </div>
    </SidebarProvider>
  );
}

