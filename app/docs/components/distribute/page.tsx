import React from "react";
import { DistributeSubmitExample } from "@/components/docs/components/distribute-submit";
import { ClaimDistributeExample } from "../../../../components/docs/components/claim-distribute";

export default function Page() {
  return (
    <div className="w-full space-y-20">
      <div className="w-full space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
            Distribute
          </h1>
          <p className="text-gray-400 text-lg">
            Distribute component is a component for making the link for token
            airdrop. You can set the total amount to deposit, expiration, and
            the amount per withdrawal.
          </p>
        </div>
        <DistributeSubmitExample />
      </div>

      <div className="w-full space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
            Claim
          </h1>
          <p className="text-gray-400 text-lg">
            This is an example of actually receiving tokens from a distribution
            link.
          </p>
        </div>
        <ClaimDistributeExample />
      </div>
    </div>
  );
}
