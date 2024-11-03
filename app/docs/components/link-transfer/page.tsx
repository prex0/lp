import React from "react";
import { LinkTransferExample } from "@/components/docs/components/link-transfer";

export default function Page() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Link Transfer
        </h1>
        <p className="text-gray-400 text-lg">Link transfer component.</p>
      </div>
      <LinkTransferExample />
    </div>
  );
}
