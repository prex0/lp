import CodeBlock from "../preview/code-block";

const code = `'use client';
import { PrexUIKitProvider, CHAIN_ID_ARBITRUM } from "@prex0/uikit";
import { Token } from '@prex0/prex-client';

const YOUR_TOKEN_ARBITRUM: Token = {
  chainId: CHAIN_ID_ARBITRUM,
  name: 'YOUR_TOKEN',
  address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  symbol: 'YOUR_TOKEN',
  decimals: 6,
  precision: 2,
};

/**
 * Providers are used to wrap the app in the PrexUIKitProvider
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrexUIKitProvider
      // Arbitrum
      chainId={CHAIN_ID_ARBITRUM}
      policyId={process.env.NEXT_PUBLIC_POLICY_ID || 'test'}
      apiKey={process.env.NEXT_PUBLIC_API_KEY || 'test'}
      defaultTokens={[YOUR_TOKEN_ARBITRUM]}
      dryRun={process.env.NEXT_PUBLIC_DRY_RUN === 'true'}
    >
      {children}
    </PrexUIKitProvider>
  );
}
`;

export function GettingStartedUseYourTokenPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Use your token
        </h1>
        <p className="text-gray-400 text-lg">
          Prex UI Kit supports original tokens.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          How to add your token
        </h2>
        <p className="text-gray-300">
          Add your token details to the PrexUIKitProvider.
        </p>
        <CodeBlock language="tsx" code={code} showLineNumbers={false} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          Supported tokens
        </h2>
        <p className="text-gray-300">
          Prex supports ERC20 tokens with{" "}
          <a
            className="underline"
            href="https://github.com/ethereum/ercs/blob/master/ERCS/erc-2612.md"
          >
            ERC2612 permit
          </a>{" "}
          functionality. This allows for gasless transactions and seamless
          integration with the Prex UI Kit. Ensure your token contract
          implements the permit function to take full advantage of these
          features.
        </p>
      </div>
    </div>
  );
}
