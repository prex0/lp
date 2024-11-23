import React from "react";
import { DistributeSubmitExample } from "@/components/docs/components/distribution/distribute-submit";
import { ClaimDistributeExample } from "@/components/docs/components/distribution/claim-distribute";
import { ComponentDistributeList } from "@/components/docs/components/distribution/list";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";
import { ComponentDistributeGenerateSecret } from "@/components/docs/components/distribution/generate-secret";
import { ComponentDistributeWithoutLocation } from "@/components/docs/components/distribution/distribution-without-location";

const description = `Distribute component is a component for making the link for token airdrop.
You can set the total amount to deposit, expiration, and the amount per withdrawal.`;

export default function Page() {
  return (
    <ComponentGroup title="Distribute" description={description}>
      <DistributeSubmitExample />
      <ClaimDistributeExample />
      <ComponentDistributeWithoutLocation />
      <ComponentDistributeList />
      <ComponentDistributeGenerateSecret />
    </ComponentGroup>
  );
}
