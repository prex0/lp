import React from "react";
import { SharedWalletSelectorExample } from "@/components/docs/components/shared/shared-wallet-selector";
import { CreateSharedWalletExample } from "@/components/docs/components/shared/create-shared-wallet";
import { ComponentGroup } from "@/components/docs/components/common/ComponentGroup";
import { ComponentDetail } from "@/components/docs/components/common/ComponentDetail";

export default function Page() {
  return (
    <ComponentGroup
      title="Shared Wallet"
      description="Components for managing shared wallets."
    >
      <ComponentDetail
        id="shared-wallet-overview"
        title="What are Shared Wallets?"
        description="Shared wallets are useful for managing multiple wallets.
        Each shared wallet can have any passkey wallet added as an owner, and owners can access the assets of the shared wallet with their passkey."
      />
      <SharedWalletSelectorExample />
      <CreateSharedWalletExample />
    </ComponentGroup>
  );
}
