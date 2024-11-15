"use client";
import { PreviewComponent } from "../../preview/preview";
import { useBalance } from "@prex0/uikit";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { ComponentDetail } from "../common/ComponentDetail";

const code = `import { useBalance } from "@prex0/uikit";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";

function CustomTokenBalance() {
  const balance = useBalance(USDC_TOKEN_ARBITRUM.address);
  
  return <div>custom balance is {balance.data?.balanceString}</div>;
}
`;

export function CustomTokenBalanceExample() {
  return (
    <ComponentDetail
      id="custom-token-balance"
      title="useBalance"
      description="You can use the useBalance hook to get the balance of a token."
    >
      <PreviewComponent code={code}>
        <div>
          <CustomTokenBalance />
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}

function CustomTokenBalance() {
  const balance = useBalance(USDC_TOKEN_ARBITRUM.address);

  return <div>custom balance is {balance.data?.balanceString}</div>;
}
