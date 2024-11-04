import React from "react";
import { PayExample } from "@/components/docs/components/pay";

export default function Page() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Payment
        </h1>
        <p className="text-gray-400 text-lg">
          This is an example of sending a specific amount of tokens to a
          specific recipient.
        </p>
      </div>
      <PayExample />
    </div>
  );
}
