"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { PageTransition } from "@/components/layout/page-transition";

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuth = pathname.startsWith("/auth");

  // Auth pages render full-screen without the app sidebar.
  if (isAuth) {
    return <PageTransition>{children}</PageTransition>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex min-h-svh flex-1 flex-col">
        <SidebarTrigger />
        <PageTransition>{children}</PageTransition>
      </main>
    </SidebarProvider>
  );
}
