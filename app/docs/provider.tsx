"use client";

import React from "react";
import {
  PrexUIKitProvider,
  USDC_TOKEN_ARBITRUM,
  WETH_TOKEN_ARBITRUM,
} from "@prex0/uikit";

export function PrexProvider({
  children,
  initialState = "loggedIn",
}: {
  children: React.ReactNode;
  initialState?: "loggedOut" | "loggedIn" | "passkeyNotAvailable";
}) {
  return (
    <PrexUIKitProvider
      chainId={42161}
      policyId="prex-ui-kit"
      apiKey="prex-ui-kit"
      tokens={[USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM]}
      dryRun
      dryRunInitialState={initialState}
    >
      {children}
    </PrexUIKitProvider>
  );
}
