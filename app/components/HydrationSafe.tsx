"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// A more robust hydration-safe wrapper
export function HydrationSafe({
  children,
  fallback = null,
  className = "",
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  className?: string;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className={className} suppressHydrationWarning>
        {fallback}
      </div>
    );
  }

  return (
    <div className={className} suppressHydrationWarning>
      {children}
    </div>
  );
}

// Dynamic import wrapper to completely avoid SSR for problematic components
export const NoSSR = dynamic(
  () =>
    Promise.resolve(({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    )),
  { ssr: false }
);
