"use client";

import { useEffect } from "react";
import { setupInterceptors } from "@/shared/api/interceptors";
import ReactQueryProvider from "@/shared/providers/ReactQueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setupInterceptors();
  }, []);

  return <>
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  </>;
}