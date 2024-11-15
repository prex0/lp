"use client";
import { PreviewComponent } from "../../preview/preview";
import { TokenBalance } from "@prex0/uikit/identity";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { ComponentDetail } from "../common/ComponentDetail";

const code = `<TokenBalance token={USDC_TOKEN_ARBITRUM} />`;

export function TokenBalanceExample() {
  return (
    <ComponentDetail
      id="token-balance"
      title="Token Balance"
      description="Token balance component."
    >
      <PreviewComponent code={code}>
        <div>
          <TokenBalance token={USDC_TOKEN_ARBITRUM} />
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}
