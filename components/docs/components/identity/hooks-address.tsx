"use client";
import { PreviewComponent } from "../../preview/preview";
import { useCurrentWalletAddress } from "@prex0/uikit/identity";
import { ComponentDetail } from "../common/ComponentDetail";

const Code = `import { useCurrentWalletAddress } from "@prex0/uikit/identity";

export function IdentityHooksAddressExample() {
  const address = useCurrentWalletAddress();

  return (
    <div>
      <div className="space-y-3">
        <div className="flex justify-center items-center">
          {address}
        </div>
      </div>
      <Toaster />
    </div>
  );
}`;

export function IdentityHooksAddressExample() {
  const address = useCurrentWalletAddress();

  return (
    <ComponentDetail
      id="address"
      title="useCurrentWalletAddress"
      description="The useCurrentWalletAddress hook returns the user's address."
    >
      <PreviewComponent code={Code}>
        <div className="text-xs md:text-base">{address}</div>
      </PreviewComponent>
    </ComponentDetail>
  );
}
