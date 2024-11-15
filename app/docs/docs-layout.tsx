"use client";
import React from "react";
import { PrexProvider } from "./provider";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { DocSidebar } from "../../components/docs/doc-sidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocSidebar />
      <main className="w-full">
        <SidebarTrigger className="sticky top-16" />
        <div className="min-h-screen bg-black">
          <div className="p-8 container mx-auto">
            <PrexProvider>{children}</PrexProvider>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
