"use client";
import { SwapCard, SwapSuccess } from "@prex0/uikit/swap";
import { USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM } from "@prex0/uikit";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { PreviewComponent } from "../preview/preview";
import { useCallback } from "react";

const SwapCode = `
import {
  SwapCard,
  SwapSuccess,
} from "@prex0/uikit/swap";
import {
  USDC_TOKEN_ARBITRUM,
  WETH_TOKEN_ARBITRUM,
} from "@prex0/uikit";
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
      <SwapCard
        onSuccess={onSuccess}
        initialFromToken={USDC_TOKEN_ARBITRUM}
        initialToToken={WETH_TOKEN_ARBITRUM}
      />
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
      <SwapCard
        onSuccess={onSuccess}
        initialFromToken={USDC_TOKEN_ARBITRUM}
        initialToToken={WETH_TOKEN_ARBITRUM}
      />
      <Toaster />
    </PreviewComponent>
  );
}
