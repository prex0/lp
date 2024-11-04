import React from "react";
import { Metadata, Viewport } from "next";
import { DocsLayout } from "./docs-layout";

export const metadata: Metadata = {
  title: "Docs - Prex -",
  description:
    "Prex is a platform for building decentralized applications (DApps) on the Ethereum blockchain. It provides a suite of tools and services to streamline the development process and make it more efficient.",
  icons: {
    icon: "/assets/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout>{children}</DocsLayout>;
}
