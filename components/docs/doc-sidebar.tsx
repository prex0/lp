"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LeftSidebar } from "./navigation/left-sidebar";

export function DocSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="mt-2">
        <a
          href="/"
          className="mx-2 text-xl font-light tracking-wide font-inter"
        >
          PREX
        </a>
      </SidebarHeader>
      <SidebarContent>
        <LeftSidebar />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
