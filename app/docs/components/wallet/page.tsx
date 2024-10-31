import React from "react";
import { DocsLayout } from "../../docs-layout";
import { ComponentsWalletPage } from "@/components/docs/components/wallet";
import "@prex0/uikit/styles.css";
import "../../../global.css"

export default function Page() {
  return (
    <DocsLayout>
      <ComponentsWalletPage />
    </DocsLayout>
  );
}