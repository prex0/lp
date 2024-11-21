import CodeBlock from "../preview/code-block";

const code = `'use client';
import { PrexUIKitProvider, CHAIN_ID_ARBITRUM, USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM } from "@prex0/uikit";
import { en } from "./lang/en";

const TOKENS = [USDC_TOKEN_ARBITRUM, WETH_TOKEN_ARBITRUM];

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
      tokens={TOKENS}
      dryRun={process.env.NEXT_PUBLIC_DRY_RUN === 'true'}
      localization={{
        defaultLocale: 'en',
        variables: {
          "en": en
        }
      }}
    >
      {children}
    </PrexUIKitProvider>
  );
}
`;

const langCode = `export const en = {
  approve: 'Approve',
  transfer: 'Transfer',
  receive: 'Receive',
  tryAgain: 'Try again',
  submitted: 'Submitted',
  transferred: 'View on explorer',
  linkCreated: 'Share link',
  max: 'Max',
  // Generic
  GENERIC_ERROR_MESSAGE: 'Something went wrong. Please try again.',
  FETCH_ERROR: 'There might be an issue with your internet connection',
  WALLET_NOT_FOUND: 'Wallet not found',
  PASSKEY_NOT_ALLOWED: 'Passkey usage was cancelled',
  INSUFFICIENT_CREDIT: 'Insufficient credit',
  INSUFFICIENT_FUNDS_IN_DISTRIBUTION_REQUEST:
    'Insufficient funds in distribution request',
  NO_ENOUGH_COOL_TIME: 'No enough cool time',
  EXCEED_MAX_DISTRIBUTE_AMOUNT: 'Exceed max distribute amount',
  POLICY_VIOLATION: 'ERC20 is not allowed',
  PERMISSION_DENIED: 'API key or origin is not allowed',
  API_RATE_LIMIT_EXCEEDED: 'API rate limit exceeded',
  // Link Transfer
  TOKEN_NOT_SET: 'Token not set',
  INVALID_AMOUNT: 'Invalid amount',
  INCOMPLETE_FIELD: 'Please fill in all required fields to proceed',
  INSUFFICIENT_BALANCE: 'Insufficient balance',
  // Identity
  NICKNAME_TOO_SHORT: 'Nickname is too short',
  NICKNAME_TOO_LONG: 'Nickname is too long',
  // Distribute
  DISTRIBUTE_EXCEED_MAX_AMOUNT: 'Already claimed',
  DISTRIBUTE_INVALID_LOCATION: 'Not in the circle',
  DISTRIBUTE_NO_TOKENS: 'No tokens in distribution request',
  DISTRIBUTE_RECIPIENT_NOT_ALLOWED:
    'Distribution to non-SmartWallet recipients is not allowed',
  DISTRIBUTE_INVALID_REQUEST:
    'Invalid request(invalid amount, amountPerWithdrawal or expiry)',
  // Geolocation
  GEOLOCATION_PERMISSION_DENIED: 'User denied the request for Geolocation.',
  GEOLOCATION_POSITION_UNAVAILABLE: 'Location information is unavailable.',
  GEOLOCATION_TIMEOUT: 'The request to get user location timed out.',
  GEOLOCATION_UNKNOWN_ERROR: 'An unknown error occurred.',
  // Status
  STATUS_NOT_FOUND: 'Not found',
  STATUS_PENDING: 'Pending',
  STATUS_COMPLETED: 'Completed',
  STATUS_EXPIRED: 'Expired',
  STATUS_CANCELLED: 'Cancelled',
  STATUS_COOLTIME: 'Cool time',
};`;

export function GettingStartedLocalizationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Localization
        </h1>
        <p className="text-gray-400 text-lg">
          Prex UI Kit supports localization.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          How to add localization
        </h2>
        <p className="text-gray-300">Set language data in PrexUIKitProvider.</p>
        <CodeBlock language="tsx" code={code} showLineNumbers={false} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          Add localization file
        </h2>
        <p className="text-gray-300">
          Add your localization file to the project. For example, place it in
          "lang/en.ts".
        </p>
        <CodeBlock language="tsx" code={langCode} showLineNumbers={false} />
      </div>
    </div>
  );
}
