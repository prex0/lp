import React from "react";
import { DistributeSubmitExample } from "@/components/docs/components/distribution/distribute-submit";
import { ClaimDistributeExample } from "@/components/docs/components/distribution/claim-distribute";
import { ComponentDistributeList } from "@/components/docs/components/distribution/list";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";
import { ComponentDistributeGenerateSecret } from "@/components/docs/components/distribution/generate-secret";
import { ComponentDistributeWithoutLocation } from "@/components/docs/components/distribution/distribution-without-location";

const description = `Drop link is a URL for distributing tokens to a large number of wallets.`;

export default function Page() {
  return (
    <ComponentGroup title="Drop link" description={description}>
      <DistributeSubmitExample />
      <ClaimDistributeExample />
      <ComponentDistributeWithoutLocation />
      <ComponentDistributeList />
      <ComponentDistributeGenerateSecret />
    </ComponentGroup>
  );
}
