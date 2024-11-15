"use client";
import { PreviewComponent } from "../../preview/preview";
import {
  EmbeddedWallet,
  WalletError,
  CreateWalletButton,
  RestoreWalletButton,
} from "@prex0/uikit/wallet";
import { Address } from "@prex0/uikit/identity";
import { ComponentDetail } from "../common/ComponentDetail";
import { Button } from "../../../ui/button";

const Code = `import { Address } from "@prex0/uikit/identity";
import { EmbeddedWallet } from "@prex0/uikit/wallet";

export function LoginExample() {
  return (
    <EmbeddedWallet >
      <Address />
    </EmbeddedWallet>
  )
}`;

export default function LoginCustomExample() {
  return (
    <ComponentDetail
      id="custom-login-component"
      title="Custom Login Component"
      description="The Custom Wallet Creation Component allows you to customize the wallet creation view."
    >
      <PreviewComponent code={Code}>
        <EmbeddedWallet
          walletCreationComponent={<CustomWalletCreationComponent />}
        >
          <Address />
        </EmbeddedWallet>
      </PreviewComponent>
    </ComponentDetail>
  );
}

function CustomWalletCreationComponent() {
  return (
    <div className="p-4 text-center space-y-4">
      <h1 className="font-bold text-2xl">Custom View</h1>
      <p className="text-gray-400 text-base">
        This is a custom wallet creation view.
      </p>
      <WalletError />
      <div>
        <CreateWalletButton asChild>
          <Button className="bg-blue-500 text-white">Create Wallet👛</Button>
        </CreateWalletButton>
      </div>
      <div>
        <RestoreWalletButton asChild>
          <Button className="bg-green-500 text-white">
            Already have a wallet?
          </Button>
        </RestoreWalletButton>
      </div>
    </div>
  );
}
