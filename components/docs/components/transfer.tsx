"use client";
import { PreviewComponent } from "../preview";
import {
  Transfer,
  TransferAmountForm,
  TransferError,
  TransferButton,
} from "@prex0/uikit/transfer";
import { AmountFormInput, USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

const TransferCode = `
import {
  Transfer,
  TransferAmountForm,
  TransferError,
  TransferButton,
} from "@prex0/uikit/transfer";
import { AmountFormInput, USDC_TOKEN_ARBITRUM } from "@prex0/uikit";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
\n
export function TransferComponent() {
  return (<Transfer
    token={USDC_TOKEN_ARBITRUM}
    toAddress="0x0000000000000000000000000000000000000000"
  >
    <TransferAmountForm>
      <AmountFormInput>
        <Input />
      </AmountFormInput>
    </TransferAmountForm>
    <TransferError />
    <TransferButton>
      <CustomButton>Transfer</CustomButton>
    </TransferButton>
  </Transfer>)
}

function CustomButton({ disabled, isLoading, onClick, children }: { disabled?: boolean, isLoading?: boolean, onClick?: () => void, children: React.ReactNode }) {
  return <Button
    disabled={disabled}
    onClick={onClick}
  >{isLoading ? 'Loading...' : children}</Button>
}`;

export function ComponentsTransferPage() {
  const { toast } = useToast()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Wallet
        </h1>
        <p className="text-gray-400 text-lg">Embedded wallet component.</p>
      </div>

      <PreviewComponent code={TransferCode}>
        <Transfer
          token={USDC_TOKEN_ARBITRUM}
          toAddress="0x0000000000000000000000000000000000000000"
          onSuccess={() => {
            console.log("Success!")
            toast({
              title: "Transfer successful",
              description: "Friday, February 10, 2023 at 5:57 PM",
            })            
          }}
        >
          <TransferAmountForm>
            <AmountFormInput>
              <Input />
            </AmountFormInput>
          </TransferAmountForm>
          <TransferError />
          <TransferButton>
            <CustomButton>Transfer</CustomButton>
          </TransferButton>
        </Transfer>
      </PreviewComponent>
      <Toaster />
    </div>
  );
}


export function CustomButton({ disabled, isLoading, onClick, children }: { disabled?: boolean, isLoading?: boolean, onClick?: () => void, children: React.ReactNode }) {
  return <Button
    disabled={disabled}
    onClick={onClick}
  >{isLoading ? 'Loading...' : children}</Button>
}
