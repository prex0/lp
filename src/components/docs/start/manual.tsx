export function GettingStartedManualPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Manual Installation
        </h1>
        <p className="text-gray-400 text-lg">
          Install and configure Prex with Next.js.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="setup-shadcn">
          Set up shadcn.ui
        </h2>
        <p className="text-gray-300">
          Set up shadcn and add the components you need:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg">
          <code className="text-gray-300">
            {`npx shadcn@latest init
npx shadcn@latest add button select input label dialog tooltip`}
          </code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="prex-install">
          Install Prex
        </h2>
        <p className="text-gray-300">
          Run the following command to create a tailwind.config.js file:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg">
          <code className="text-gray-300">npm install @prex0/uikit</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="add-providers">
          Add Providers
        </h2>
        <p className="text-gray-300">
          Add the following to your ./app/providers.tsx file:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg">
          <code className="text-gray-300">
            {`'use client';
import { PrexUIKitProvider, USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM } from "@prex0/uikit";

const TOKENS = [USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM];

/**
 * Providers are used to wrap the app in the PrexUIKitProvider
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrexUIKitProvider
      // Arbitrum
      chainId={42161}
      policyId={process.env.NEXT_PUBLIC_POLICY_ID || 'test'}
      apiKey={process.env.NEXT_PUBLIC_API_KEY || 'test'}
      tokens={TOKENS}
      dryRun={process.env.NEXT_PUBLIC_DRY_RUN === 'true'}
  >
      {children}
    </PrexUIKitProvider>
  );
}
`}
          </code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="update-layout">
          Update layout
        </h2>
        <p className="text-gray-300">
          Update the following in your ./app/layout.tsx file:
        </p>
        <pre className="bg-gray-900 p-4 rounded-lg">
          <code className="text-gray-300">
            {`
import { Providers } from './providers';

...

<html lang="en">
  <body
    className={\`\${geistSans.variable} \${geistMono.variable} antialiased dark\`}
  >
    <Providers>
      {children}
    </Providers>
  </body>
</html>
`}
          </code>
        </pre>
      </div>
    </div>
  );
}
