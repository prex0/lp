import React from "react";
import { DocsLayout } from "../../docs-layout";
import { AddressExample } from "@/components/docs/components/address";
import "../../../global.css";

export default function Page() {
  return (
    <DocsLayout>
      <AddressExample />
    </DocsLayout>
  );
}
