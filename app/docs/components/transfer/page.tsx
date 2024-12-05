import React from "react";
import { TransferExample } from "@/components/docs/components/transfer/transfer";
import { TransferWithMessageExample } from "@/components/docs/components/transfer/transfer-with-message";

export default function Page() {
  return (
    <div className="w-full space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Transfer
        </h1>
        <p className="text-gray-400 text-lg">
          Transfer component. Transfer feature is only available in paid plans.
          You need to configure ERC20 token addresses in the dashboard.
        </p>
      </div>
      <TransferExample />
      <TransferWithMessageExample />
    </div>
  );
}
