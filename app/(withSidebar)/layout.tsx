'use client';

import { ReactNode } from 'react';
import CustomSidebar from '@/components/sidebar/custom-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

interface WithSidebarLayoutProps {
  children: ReactNode;
}

export default function WithSidebarLayout({ children }: WithSidebarLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-background">
        <CustomSidebar />
        <div className="flex-1 min-h-screen">
          <main className="h-full p-6 max-w-6xl mx-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

