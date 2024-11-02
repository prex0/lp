"use client";
import React from "react";
import {
  PrexUIKitProvider,
  USDC_TOKEN_ARBITRUM,
  WETH_TOKEN_ARBITRUM,
} from "@prex0/uikit";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="p-8 container mx-auto">
        <PrexUIKitProvider
          chainId={42161}
          policyId="prex-ui-kit"
          apiKey="prex-ui-kit"
          tokens={[USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM]}
          dryRun
        >
          {children}
        </PrexUIKitProvider>
      </div>
    </div>
  );
}
