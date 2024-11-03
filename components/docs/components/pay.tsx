"use client";

import {
  Transfer,
  TransferError,
  TransferButton,
  TransferAmount,
  TransferSuccess,
} from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../preview/preview";
import { Spinner } from "../../common/spinner";

const TransferCode = `"use client";

import {
  Transfer,
  TransferError,
  TransferButton,
  TransferAmount,
  TransferSuccess,
} from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";

export function PayExample() {
  const { toast } = useToast();

  const onSuccess = useCallback((e: TransferSuccess) => {
    toast({
      title: "Transfer successful",
      description: <p>Succeed to Pay \${e.amount} \${e.token.symbol} to \${e.toAddress}, check <a href={e.explorerUrl} className="underline pointer-cursor">explorer</a></p>,
    })
  }, [toast])
  
  return (
    <div>
      <Transfer
        token={USDC_TOKEN_ARBITRUM}
        toAddress="0x0000000000000000000000000000000000000000"
        amount="10"
        onSuccess={onSuccess}
      >
        <TransferButton>
          Pay <TransferAmount showSymbol />
        </TransferButton>
        <TransferError />
      </Transfer>
      <Toaster />
    </div>
  )
}`;

export function PayExample() {
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
      <div className="w-80">
        <Transfer
          token={USDC_TOKEN_ARBITRUM}
          toAddress="0x0000000000000000000000000000000000000000"
          amount="10"
          onSuccess={onSuccess}
        >
          <TransferButton>
            Pay <TransferAmount showSymbol />
          </TransferButton>
          <TransferError />
        </Transfer>
        <Toaster />
      </div>
      <div className="hidden">
        <Spinner />
      </div>
    </PreviewComponent>
  );
}
