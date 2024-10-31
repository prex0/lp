import React from "react";
import { DocsLayout } from "./docs-layout";
import { IntroductionPage } from "@/components/docs/introduction";
import "@prex0/uikit/styles.css";

export default function Page() {
  return (
    <DocsLayout>
      <IntroductionPage />
    </DocsLayout>
  );
}