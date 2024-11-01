"use client";

import {
  Transfer,
  TransferError,
  TransferButton,
  TransferAmount,
  TransferRecipient,
  TransferSuccess,
  useTransferContext,
} from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback, useState } from "react";
import { PreviewComponent } from "../preview";
import { Spinner } from "../../common/spinner";

const TransferCode = `"use client";

import {
  Transfer,
  TransferError,
  TransferButton,
  TransferAmount,
  TransferRecipient,
  TransferSuccess,
  useTransferContext
} from "@prex0/uikit/transfer";
import { USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback, useState } from "react";

export function PayExample() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false)

  const onSuccess = useCallback((e: TransferSuccess) => {
    setIsSuccess(true)
    toast({
      title: "Transfer successful",
      description: <p>Succeed to Pay \${e.amount} \${e.token.symbol} to \${e.toAddress}, check <a href={e.explorerUrl} className="underline pointer-cursor">explorer</a></p>,
    })
  }, [setIsSuccess, toast])
  
  return (
    <div>
      <Transfer
        token={USDC_TOKEN_ARBITRUM}
        toAddress="0x0000000000000000000000000000000000000000"
        amount="10"
        onSuccess={onSuccess}
      >
        {
          isSuccess ? (
            <>
              <div>
                Succeed to pay{' '}
                <TransferAmount showSymbol />
                {' '}to{' '}
                <TransferRecipient />
                {' '}check{' '}
                <CustomTransferTxLink />
                </div>
            </>
          ) : (
            <>
              <TransferButton>
                Pay <TransferAmount showSymbol />
              </TransferButton>
              <TransferError />
            </>
          )
        }
      </Transfer>
      <Toaster />
    </div>
  )
}

function CustomTransferTxLink() {
  const { lifeCycleStatus } = useTransferContext()

  if(lifeCycleStatus.statusName !== 'success') {
    return null
  }

  return(
    <a href={lifeCycleStatus.statusData.explorerUrl} className="underline">explorer</a>
  )
}`;

export function PayExample() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSuccess = useCallback(
    (e: TransferSuccess) => {
      setIsSuccess(true);
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
    [setIsSuccess, toast]
  );

  return (
    <PreviewComponent code={TransferCode}>
      <div>
        <Transfer
          token={USDC_TOKEN_ARBITRUM}
          toAddress="0x0000000000000000000000000000000000000000"
          amount="10"
          onSuccess={onSuccess}
        >
          {isSuccess ? (
            <>
              <div onClick={() => setIsSuccess(false)}>
                Succeed to pay <TransferAmount showSymbol /> to{" "}
                <TransferRecipient /> check <CustomTransferTxLink />
              </div>
            </>
          ) : (
            <>
              <TransferButton>
                Pay <TransferAmount showSymbol />
              </TransferButton>
              <TransferError />
            </>
          )}
        </Transfer>
        <Toaster />
      </div>
      <div className="hidden">
        <Spinner />
      </div>
    </PreviewComponent>
  );
}

function CustomTransferTxLink() {
  const { lifeCycleStatus } = useTransferContext();

  if (lifeCycleStatus.statusName !== "success") {
    return null;
  }

  return (
    <a
      href={lifeCycleStatus.statusData.explorerUrl}
      className="underline"
      target="_blank"
      rel="noreferrer"
    >
      explorer
    </a>
  );
}
