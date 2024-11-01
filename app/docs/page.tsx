import React from "react";
import { DocsLayout } from "./docs-layout";
import { IntroductionPage } from "@/components/docs/introduction";

export default function Page() {
  return (
    <DocsLayout>
      <IntroductionPage />
    </DocsLayout>
  );
}
