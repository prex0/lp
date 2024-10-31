import React from "react";
import { DocsLayout } from "../../docs-layout";
import { ComponentsWalletPage } from "@/components/docs/components/wallet";
import "../../../global.css";

export default function Page() {
  return (
    <DocsLayout>
      <ComponentsWalletPage />
    </DocsLayout>
  );
}
