import React from "react";
import { DocsLayout } from "../../docs-layout";
import { PayExample } from "@/components/docs/components/pay";
import "../../../global.css";

export default function Page() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
            Transfer
          </h1>
          <p className="text-gray-400 text-lg">Transfer component.</p>
        </div>
        <PayExample />
      </div>
    </DocsLayout>
  );
}
