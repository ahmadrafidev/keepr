import { ReactNode } from 'react';
import CustomSidebar from '@/components/custom-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

interface WithSidebarLayoutProps {
  children: ReactNode;
}

export default function WithSidebarLayout({ children }: WithSidebarLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        <CustomSidebar />
        <div className="flex-1 transition-all duration-300">
          <main className="p-6 max-w-6xl mx-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

