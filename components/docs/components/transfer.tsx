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

export function ComponentsTransferPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Wallet
        </h1>
        <p className="text-gray-400 text-lg">Embedded wallet component.</p>
      </div>

      <PreviewComponent>
        <Transfer
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
            <Button>Transfer</Button>
          </TransferButton>
        </Transfer>
      </PreviewComponent>
    </div>
  );
}
