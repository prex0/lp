export function GettingStartedEIP1193Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white" id="create-project">
          MetaMask support (EIP1193 support)
        </h2>
        <p className="text-gray-300">
          Prex primarily operates with passkey wallets. However, in the{" "}
          <a className="underline" href="https://app.predy.finance/">
            Predy Demo
          </a>
          , it also works with MetaMask wallet. This is because Prex supports
          the{" "}
          <a
            className="underline"
            href="https://eips.ethereum.org/EIPS/eip-1193"
          >
            EIP1193 Ethereum Provider JavaScript API
          </a>
          . This means Prex works with any wallet that supports EIP1193, not
          just MetaMask.
        </p>
        <p className="text-gray-300">
          Currently, this feature in Prex is in alpha version, and the interface
          specifications may change in the future. You can find implementation
          examples in the{" "}
          <a
            className="underline"
            href="https://github.com/predyprotocol/predy-powered-by-prex/blob/main/src/main.tsx#L71-L102"
          >
            Example code
          </a>
          . The example implementation uses RainbowKit to enable operation with
          wallets other than MetaMask.
        </p>
      </div>
    </div>
  );
}
