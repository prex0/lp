"use client";
import { PreviewComponent } from "../../preview/preview";
import { SharedWalletSelector } from "@prex0/uikit/wallet";
import { Address, Nickname } from "@prex0/uikit/identity";
import { ComponentDetail } from "../common/ComponentDetail";

const Code = `import { SharedWalletSelector } from "@prex0/uikit/wallet";

export function SharedWalletSelectorExample() {
  return (
    <div className="space-y-3">
      <div>
        <SharedWalletSelector />
      </div>
      <div>
        <Address />
      </div>
    </div>
  )
}`;

export function SharedWalletSelectorExample() {
  return (
    <ComponentDetail
      id="shared-wallet-selector"
      title="Shared Wallet Selector"
      description="The Shared Wallet Selector component allows you to select a shared wallet."
    >
      <PreviewComponent code={Code}>
        <div className="space-y-3 w-max-lg">
          <div className="w-[320px]">
            <SharedWalletSelector />
          </div>
          <div>
            <Address isSliced={false} />
          </div>
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}
