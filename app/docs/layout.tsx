"use client";

import React from "react";
import { DocsLayout } from "./docs-layout";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { DocSidebar } from "../../components/docs/doc-sidebar";
import "@prex0/uikit/styles.css";
import "../global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocSidebar />
      <main className="w-full">
        <SidebarTrigger className="sticky top-16" />
        <DocsLayout>{children}</DocsLayout>
      </main>
    </SidebarProvider>
  );
}
