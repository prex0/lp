import React from "react";
import { DocsLayout } from "../docs-layout";
import { GettingStartedPage } from "@/components/docs/gettingstarted";

export default function Page() {
  return (
    <DocsLayout>
      <GettingStartedPage />
    </DocsLayout>
  );
}
