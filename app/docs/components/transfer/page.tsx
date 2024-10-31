import React from "react";
import { DocsLayout } from "../../docs-layout";
import { ComponentsTransferPage } from "@/components/docs/components/transfer";
import "../../../global.css";

export default function Page() {
  return (
    <DocsLayout>
      <ComponentsTransferPage />
    </DocsLayout>
  );
}
