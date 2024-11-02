"use client";
import {
  Swap,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapBalance,
  SwapTokenSelector,
  SwapAmountForm,
} from "@prex0/uikit/swap";

import {
  AmountFormInput,
  AmountFormMaxButton,
  USDC_TOKEN_ARBITRUM,
  WETH_TOKEN_ARBITRUM,
} from "@prex0/uikit";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ArrowDown, Info, Zap } from "lucide-react";
import { PreviewComponent } from "../preview/preview";
import { useCallback } from "react";

const SwapCode = `"use client";
import { Swap, SwapToggleButton, SwapButton, SwapMessage, SwapBalance, SwapTokenSelector, SwapAmountForm } from "@prex0/uikit/swap"
import { AmountFormInput, AmountFormMaxButton, USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM } from "@prex0/uikit";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ArrowDown, Info, Zap } from "lucide-react"


export function SwapExample() {
  const { toast } = useToast();
  const onSuccess = useCallback((e: any) => {
    toast({
      title: "Swap successful",
      description: (<p>Succeed to Swap! check <a href={e.explorerUrl} className="underline pointer-cursor">explorer</a></p>),
    })
  }, [toast])
  return (
    <Swap onSuccess={onSuccess}>
      <div className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="from-amount" className="text-gray-400">
              You pay
            </Label>
            <div className="flex space-x-2">
              <SwapAmountForm type="from" amount="0">
                <div className="w-full flex items-center space-x-2 relative">
                  <AmountFormInput>
                    <Input />
                  </AmountFormInput>
                  <AmountFormMaxButton asChild>
                    <span className="w-10 absolute right-0 text-xs cursor-pointer">
                      Max
                    </span>
                  </AmountFormMaxButton>
                </div>
              </SwapAmountForm>
              <div className="w-[148px]">
                <SwapTokenSelector type="from" token={USDC_TOKEN_ARBITRUM} showImage={false}/>
              </div>
            </div>
            <div>
              <SwapBalance
                type="from"
                className="text-gray-400 text-sm"
                showSymbol
              />
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <SwapToggleButton className="h-6 w-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/30 hover:bg-black/50"
              >
                <ArrowDown className="h-4 w-4 text-gray-500" />
                <span className="sr-only">Switch tokens</span>
              </Button>
            </SwapToggleButton>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                    <span>No</span>
                    <Zap className="h-3 w-3" />
                    <span>with Intent Order</span>
                    <Info className="h-3 w-3" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    This transaction uses Intent Orders, eliminating gas fees
                    for users.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to-amount" className="text-gray-400">
              You receive
            </Label>
            <div className="flex space-x-2">
              <SwapAmountForm type="to" amount="0">
                <AmountFormInput>
                  <Input />
                </AmountFormInput>
              </SwapAmountForm>
              <div className="w-[148px]">
                <SwapTokenSelector type="to" token={WETH_TOKEN_ARBITRUM} showImage={false}/>
              </div>

            </div>
            <div>
              <SwapBalance
                type="to"
                className="text-gray-400 text-sm"
                showSymbol
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <SwapMessage className="text-xs text-gray-500" />
          <SwapButton>Swap</SwapButton>
        </div>
        <Toaster />
      </div>
    </Swap>
  )
}
`;

export function SwapExample() {
  const { toast } = useToast();
  const onSuccess = useCallback(
    (e: any) => {
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
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="from-amount" className="text-gray-400">
                You pay
              </Label>
              <div className="flex space-x-2">
                <SwapAmountForm type="from" amount="0">
                  <div className="w-full flex items-center space-x-2 relative">
                    <AmountFormInput>
                      <Input />
                    </AmountFormInput>
                    <AmountFormMaxButton asChild>
                      <span className="w-10 absolute right-0 text-xs cursor-pointer">
                        Max
                      </span>
                    </AmountFormMaxButton>
                  </div>
                </SwapAmountForm>
                <div className="w-[148px]">
                  <SwapTokenSelector
                    type="from"
                    token={USDC_TOKEN_ARBITRUM}
                    showImage={false}
                  />
                </div>
              </div>
              <div>
                <SwapBalance
                  type="from"
                  className="text-gray-400 text-sm"
                  showSymbol
                />
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <SwapToggleButton className="h-6 w-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 hover:bg-black/50"
                >
                  <ArrowDown className="h-4 w-4 text-gray-500" />
                  <span className="sr-only">Switch tokens</span>
                </Button>
              </SwapToggleButton>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center space-x-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                      <span>No</span>
                      <Zap className="h-3 w-3" />
                      <span>with Intent Order</span>
                      <Info className="h-3 w-3" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      This transaction uses Intent Orders, eliminating gas fees
                      for users.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-y-2">
              <Label htmlFor="to-amount" className="text-gray-400">
                You receive
              </Label>
              <div className="flex space-x-2">
                <SwapAmountForm type="to" amount="0">
                  <AmountFormInput>
                    <Input />
                  </AmountFormInput>
                </SwapAmountForm>
                <div className="w-[148px]">
                  <SwapTokenSelector
                    type="to"
                    token={WETH_TOKEN_ARBITRUM}
                    showImage={false}
                  />
                </div>
              </div>
              <div>
                <SwapBalance
                  type="to"
                  className="text-gray-400 text-sm"
                  showSymbol
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <SwapMessage className="text-xs text-gray-500" />
            <SwapButton>Swap</SwapButton>
          </div>
          <Toaster />
        </div>
      </Swap>
    </PreviewComponent>
  );
}
