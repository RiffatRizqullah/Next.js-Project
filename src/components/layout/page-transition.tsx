"use client";

import { usePathname } from "next/navigation";

/**
 * Re-mounts children whenever the route changes so the entrance
 * animation (`.vh-page-in`) replays on every navigation.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="vh-page-in flex min-h-full flex-1 flex-col">
      {children}
    </div>
  );
}
