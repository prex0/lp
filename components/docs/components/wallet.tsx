"use client";
import { PreviewComponent } from "../preview";
import { EmbeddedWallet } from "@prex0/uikit/wallet";
import { Address } from "@prex0/uikit/identity";

const WalletCode = `<EmbeddedWallet>
  <Address />
</EmbeddedWallet>`;

export function ComponentsWalletPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Wallet
        </h1>
        <p className="text-gray-400 text-lg">Embedded wallet component.</p>
      </div>

      <PreviewComponent code={WalletCode}>
        <EmbeddedWallet>
          <Address />
        </EmbeddedWallet>
      </PreviewComponent>
    </div>
  );
}
