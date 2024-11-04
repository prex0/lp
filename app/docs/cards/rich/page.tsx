import React from "react";
import { RichTransferCardExample } from "@/components/docs/cards/rich";

export default function Page() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Rich Transfer
        </h1>
        <p className="text-gray-400 text-lg">
          Rich transfer component is a component for sending tokens.
        </p>
      </div>
      <RichTransferCardExample />
    </div>
  );
}
