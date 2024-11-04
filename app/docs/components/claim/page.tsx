import React from "react";
import { ClaimExample } from "@/components/docs/components/claim";

export default function Page() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Claim
        </h1>
        <p className="text-gray-400 text-lg">
          This is an example of actually receiving tokens from a link created by
          link transfer.
        </p>
      </div>
      <ClaimExample />
    </div>
  );
}
