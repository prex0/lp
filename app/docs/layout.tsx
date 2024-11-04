import React from "react";
import { Metadata } from "next";
import { DocsLayout } from "./docs-layout";

export const metadata: Metadata = {
  title: "Docs - Prex -",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
  description:
    "Prex is a platform for building decentralized applications (DApps) on the Ethereum blockchain. It provides a suite of tools and services to streamline the development process and make it more efficient.",
  icons: {
    icon: "/assets/icon.png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout>{children}</DocsLayout>;
}
