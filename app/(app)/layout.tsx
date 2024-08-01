"use client";
import { AuthProvider } from "@/context/AuthContext";
import { QueryProvider } from "@/tanstack/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface LayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>{children}</AuthProvider>
    </QueryProvider>
  );
}
