"use client";

import {
  Transfer,
  TransferAmountForm,
  TransferMessage,
  TransferButton,
  TransferAmount,
  TransferTokenName,
  TransferSuccess,
  TransferRecipientInput,
} from "@prex0/uikit/transfer";
import { AmountFormSimpleInput, USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../preview/preview";

const TransferCode = `import {
  Transfer,
  TransferAmountForm,
  TransferError,
  TransferButton,
  TransferAmount,
  TransferTokenName,
  TransferSuccess,
  TransferRecipientInput,
} from "@prex0/uikit/transfer";
import { AmountFormSimpleInput, USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
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
      <Transfer
        token={USDC_TOKEN_ARBITRUM}
        defaultToAddress="0xa234567890123000000000000000000000000002"
        defaultAmount=""
        onSuccess={onSuccess}
      >
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground">To Address</div>
            <TransferRecipientInput />
          </div>
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

          <TransferButton>
            Transfer <TransferAmount showSymbol />
          </TransferButton>
          <TransferError />
        </div>
      </Transfer>
      <Toaster />
    </div>
  );`;

export function TransferExample() {
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
      <div className="w-[316px]">
        <Transfer
          token={USDC_TOKEN_ARBITRUM}
          defaultToAddress="0xa234567890123000000000000000000000000002"
          defaultAmount=""
          onSuccess={onSuccess}
        >
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">To Address</div>
              <TransferRecipientInput />
            </div>
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

            <TransferButton>
              Transfer <TransferAmount showSymbol />
            </TransferButton>
            <TransferMessage />
          </div>
        </Transfer>
        <Toaster />
      </div>
    </PreviewComponent>
  );
}
