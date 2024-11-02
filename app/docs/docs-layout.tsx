"use client";
import React from "react";
import {
  PrexUIKitProvider,
  USDC_TOKEN_ARBITRUM,
  WETH_TOKEN_ARBITRUM,
} from "@prex0/uikit";
import { RightSidebar } from "@/components/docs/navigation/right-sidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="p-8 container mx-auto">
        <div className="flex gap-6">
          <div className="flex-1 max-w-3xl">
            <div className="prose prose-invert prose-headings:text-white prose-p:text-gray-300">
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
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
