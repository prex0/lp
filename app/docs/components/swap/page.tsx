import React from "react";
import { SwapExample } from "@/components/docs/components/swap";

export default function Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Swap
        </h1>
        <p className="text-gray-400 text-lg">
          This is an example of displaying a form for swapping tokens.
        </p>
      </div>
      <SwapExample />
    </div>
  );
}
