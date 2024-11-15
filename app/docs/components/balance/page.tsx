import React from "react";
import { TokenBalanceExample } from "@/components/docs/components/balance/token-balance";
import { CustomTokenBalanceExample } from "@/components/docs/components/balance/custom";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";

export default function Page() {
  return (
    <ComponentGroup
      title="Balance"
      description="Components for displaying balances."
    >
      <TokenBalanceExample />
      <CustomTokenBalanceExample />
    </ComponentGroup>
  );
}
