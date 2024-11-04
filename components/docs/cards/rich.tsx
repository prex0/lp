"use client";

import { RichTransferCard, TransferSuccess } from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../preview/preview";

const TransferCode = `import {
  RichTransferCard,
  TransferSuccess
} from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";

export function RichTransferExample() {
  const { toast } = useToast();

  const onSuccess = useCallback(
    (e: TransferSuccess) => {
      toast({
        title: "Transfer successful",
        description: (
          <p>
            Succeed to Pay \${e.amount} \${e.token.symbol} to \${e.toAddress},
            check{" "}
            <a href={e.explorerUrl} className="underline pointer-cursor">
              explorer
            </a>
          </p>
        ),
      });
    },
    [toast]
  );

  return (
    <div>
      <RichTransferCard
        getURL={() => \`\${window.location.origin}/docs/components/claim?openExternalBrowser=1\`}
        token={USDC_TOKEN_ARBITRUM}
        amount=""
        onSuccess={onSuccess}
      />
      <Toaster />
    </div>
  );`;

export function RichTransferCardExample() {
  const { toast } = useToast();

  const onSuccess = useCallback(
    (e: TransferSuccess) => {
      toast({
        title: "Transfer successful",
        description: (
          <p>
            Succeed to Pay ${e.amount} ${e.token.symbol} to ${e.toAddress},
            check{" "}
            <a href={e.explorerUrl} className="underline pointer-cursor">
              explorer
            </a>
          </p>
        ),
      });
    },
    [toast]
  );

  return (
    <PreviewComponent code={TransferCode}>
      <div className="w-[320px]">
        <RichTransferCard
          getURL={() => `${window.location.origin}/docs/components/claim`}
          token={USDC_TOKEN_ARBITRUM}
          amount=""
          onSuccess={onSuccess}
        />
        <Toaster />
      </div>
    </PreviewComponent>
  );
}
