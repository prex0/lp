"use client";
import { CreateSharedWallet } from "@prex0/uikit/wallet";
import { PreviewComponent } from "../../preview/preview";
import { ComponentDetail } from "../common/ComponentDetail";

const Code = `import { CreateSharedWallet } from "@prex0/uikit/wallet";

export function CreateSharedWalletExample() {
  return (
    <CreateSharedWallet buttonText="Create Shared Wallet" />
  )
}`;

export function CreateSharedWalletExample() {
  return (
    <ComponentDetail
      id="create-shared-wallet"
      title="Create Shared Wallet"
      description="This is a form to create a Shared Wallet by setting a name and owner list"
    >
      <PreviewComponent code={Code}>
        <div className="w-full">
          <CreateSharedWallet buttonText="Create Shared Wallet" />
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}
