"use client";

import {
  Swap,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapBalance,
  SwapTokenSelector,
  SwapAmountForm,
  SwapAmountSimpleInput,
  SwapSuccess,
} from "@prex0/uikit/swap";
import {
  AmountFormInput,
  USDC_TOKEN_ARBITRUM,
  WETH_TOKEN_ARBITRUM,
} from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { PreviewComponent } from "../preview/preview";
import { useCallback } from "react";

const SwapCode = `
import { Swap, SwapToggleButton, SwapButton, SwapMessage, SwapBalance, SwapTokenSelector, SwapAmountForm, SwapAmountSimpleInput, SwapSuccess } from "@prex0/uikit/swap"
import { AmountFormInput, USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";

export function SwapExample() {
  const { toast } = useToast();
  const onSuccess = useCallback(
    (e: SwapSuccess) => {
      toast({
        title: "Swap successful",
        description: (
          <p>
            Succeed to Swap! check{" "}
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
    <>
      <Swap onSuccess={onSuccess}>
        <div className="space-y-4">
          <div className="space-y-2">
            <div>You pay</div>
            <div className="flex space-x-2">
              <SwapAmountSimpleInput type="from" amount="0" />
              <div className="w-[152px]">
                <SwapTokenSelector
                  type="from"
                  token={USDC_TOKEN_ARBITRUM}
                  showImage={false}
                />
              </div>
              </div>
            <div>
              <SwapBalance type="from" className="text-sm"/>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <SwapToggleButton className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <div >You receive</div>
            <div className="flex space-x-2">
              <SwapAmountForm type="to" amount="0" >
                <AmountFormInput />
              </SwapAmountForm>
              <div className="w-[152px]">
                <SwapTokenSelector
                  type="to"
                  token={WETH_TOKEN_ARBITRUM}
                />
              </div>
            </div>
            <div>
              <SwapBalance type="to" className="text-sm"/>
            </div>
          </div>
        </div>
        <SwapMessage className="text-xs"/>
        <SwapButton>
          Swap
        </SwapButton>
      </Swap>
      <Toaster />
    </>
  );
}
`;

export function SwapExample() {
  const { toast } = useToast();
  const onSuccess = useCallback(
    (e: SwapSuccess) => {
      toast({
        title: "Swap successful",
        description: (
          <p>
            Succeed to Swap! check{" "}
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
    <PreviewComponent code={SwapCode}>
      <Swap onSuccess={onSuccess}>
        <div className="space-y-4">
          <div className="space-y-2">
            <div>You pay</div>
            <div className="flex space-x-2">
              <SwapAmountSimpleInput type="from" amount="0" />
              <div className="w-[152px]">
                <SwapTokenSelector
                  type="from"
                  token={USDC_TOKEN_ARBITRUM}
                  showImage={false}
                />
              </div>
            </div>
            <div>
              <SwapBalance type="from" className="text-sm" />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <SwapToggleButton className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <div>You receive</div>
            <div className="flex space-x-2">
              <SwapAmountForm type="to" amount="0">
                <AmountFormInput />
              </SwapAmountForm>
              <div className="w-[152px]">
                <SwapTokenSelector type="to" token={WETH_TOKEN_ARBITRUM} />
              </div>
            </div>
            <div>
              <SwapBalance type="to" className="text-sm" />
            </div>
          </div>
        </div>
        <SwapMessage className="text-xs" />
        <SwapButton>Swap</SwapButton>
      </Swap>
      <Toaster />
    </PreviewComponent>
  );
}
