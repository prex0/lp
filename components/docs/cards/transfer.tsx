"use client";

import { TransferCard, TransferSuccess } from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../preview/preview";

const TransferCode = `import {
  TransferCard,
  TransferSuccess
} from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";

export function TransferExample() {
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
      <TransferCard
        token={USDC_TOKEN_ARBITRUM}
        defaultToAddress="0xa234567890123000000000000000000000000002"
        defaultAmount=""
        onSuccess={onSuccess}
      />
      <Toaster />
    </div>
  );`;

export function TransferCardExample() {
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
        <TransferCard
          token={USDC_TOKEN_ARBITRUM}
          defaultToAddress="0xa234567890123000000000000000000000000002"
          defaultAmount=""
          onSuccess={onSuccess}
        />
        <Toaster />
      </div>
    </PreviewComponent>
  );
}
