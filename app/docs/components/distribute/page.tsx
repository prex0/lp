import React from "react";
import { DistributeSubmitExample } from "@/components/docs/components/distribution/distribute-submit";
import { ClaimDistributeExample } from "@/components/docs/components/distribution/claim-distribute";
import { RequestListExample } from "@/components/docs/components/distribution/request-list";
import { CustomRequestListExample } from "@/components/docs/components/distribution/custom-request-list";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";

const description = `Distribute component is a component for making the link for token airdrop.
You can set the total amount to deposit, expiration, and the amount per withdrawal.`;

export default function Page() {
  return (
    <ComponentGroup title="Distribute" description={description}>
      <DistributeSubmitExample />
      <ClaimDistributeExample />
      <RequestListExample />
      <CustomRequestListExample />
    </ComponentGroup>
  );
}
