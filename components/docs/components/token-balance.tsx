"use client";
import { PreviewComponent } from "../preview/preview";
import { TokenBalance } from "@prex0/uikit/identity";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";

const code = `<TokenBalance token={USDC_TOKEN_ARBITRUM} />`;

export function TokenBalanceExample() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Token Balance
        </h1>
        <p className="text-gray-400 text-lg">Token balance component.</p>
      </div>

      <PreviewComponent code={code}>
        <div>
          <TokenBalance token={USDC_TOKEN_ARBITRUM} />
        </div>
      </PreviewComponent>
    </div>
  );
}
