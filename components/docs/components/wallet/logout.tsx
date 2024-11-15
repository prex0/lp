"use client";
import { PreviewComponent } from "../../preview/preview";
import { EmbeddedWallet, LogoutWalletButton } from "@prex0/uikit/wallet";
import { ComponentDetail } from "../common/ComponentDetail";

const IdentityCode = `import { Address } from "@prex0/uikit/identity";
import { EmbeddedWallet } from "@prex0/uikit/wallet";

export function LoginExample() {
  return (
    <EmbeddedWallet >
      <LogoutWalletButton buttonText="Logout" />
    </EmbeddedWallet>
  )
}`;

export default function LogoutExample() {
  return (
    <ComponentDetail
      id="logout-button"
      title="Logout Button"
      description="The Logout Button component allows you to logout the user."
    >
      <PreviewComponent code={IdentityCode}>
        <EmbeddedWallet>
          <LogoutWalletButton buttonText="Logout" />
        </EmbeddedWallet>
      </PreviewComponent>
    </ComponentDetail>
  );
}
