"use client";

import {
  Transfer,
  TransferAmountForm,
  TransferMessage,
  TransferCreateLinkButton,
  TransferAmount,
  TransferTokenName,
} from "@prex0/uikit/transfer";
import { AmountFormSimpleInput, USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { PreviewComponent } from "../preview/preview";

const TransferCode = `import {
  Transfer,
  TransferAmountForm,
  TransferMessage,
  TransferCreateLinkButton,
  TransferAmount,
  TransferTokenName,
} from "@prex0/uikit/transfer";
import { AmountFormSimpleInput, USDC_TOKEN_ARBITRUM } from "@prex0/uikit";

export function LinkTransferExample() {
  return (
    <div className="w-[316px]">
      <Transfer
        token={USDC_TOKEN_ARBITRUM}
        toAddress="0xa234567890123000000000000000000000000002"
        amount=""
        mode="link"
        getURL={() => \`\${window.location.origin}/claim\`}
      >
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Token</div>
            <div className="flex justify-end items-center gap-2">
              <TransferTokenName />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">Amount</div>
            <TransferAmountForm>
              <AmountFormSimpleInput />
            </TransferAmountForm>
          </div>

          <TransferCreateLinkButton>
            Create Link for <TransferAmount showSymbol />
          </TransferCreateLinkButton>
          <TransferMessage />
        </div>
      </Transfer>
    </div>
  );
}`;

export function LinkTransferExample() {
  return (
    <PreviewComponent code={TransferCode}>
      <div className="w-[316px]">
        <Transfer
          token={USDC_TOKEN_ARBITRUM}
          toAddress="0xa234567890123000000000000000000000000002"
          amount=""
          mode="link"
          getURL={() => `${window.location.origin}/docs/components/link-transfer`}
        >
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Token</div>
              <div className="flex justify-end items-center gap-2">
                <TransferTokenName />
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Amount</div>
              <TransferAmountForm>
                <AmountFormSimpleInput />
              </TransferAmountForm>
            </div>

            <TransferCreateLinkButton>
              Create Link for <TransferAmount showSymbol />
            </TransferCreateLinkButton>
            <TransferMessage />
          </div>
        </Transfer>
      </div>
    </PreviewComponent>
  );
}
