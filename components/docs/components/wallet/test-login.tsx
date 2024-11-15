"use client";
import CodeBlock from "../../preview/code-block";
import { ComponentDetail } from "../common/ComponentDetail";

const code = `'use client';
import { PrexUIKitProvider, USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM } from "@prex0/uikit";

const TOKENS = [USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM];

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrexUIKitProvider
      // Arbitrum
      chainId={42161}
      policyId={process.env.NEXT_PUBLIC_POLICY_ID || 'test'}
      apiKey={process.env.NEXT_PUBLIC_API_KEY || 'test'}
      tokens={TOKENS}
      dryRun
      dryRunInitialState={'loggedOut'}
  >
      {children}
    </PrexUIKitProvider>
  );
}
`;

export default function LoginExample() {
  return (
    <ComponentDetail
      id="test-login"
      title="Test Login View"
      description="By using dryRunInitialState, you can test the login screen by setting the client to a logged-out state. You can also use 'passkeyNotAvailable' to check the display on browsers where passkeys are not available."
    >
      <CodeBlock code={code} language="tsx" />
    </ComponentDetail>
  );
}
