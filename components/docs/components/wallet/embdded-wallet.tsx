"use client";
import { PreviewComponent } from "../../preview/preview";
import { Address } from "@prex0/uikit/identity";
import { EmbeddedWallet } from "@prex0/uikit/wallet";
import { ComponentDetail } from "../common/ComponentDetail";

const IdentityCode = `import { Address } from "@prex0/uikit/identity";
import { EmbeddedWallet } from "@prex0/uikit/wallet";

export function LoginExample() {
  return (
    <EmbeddedWallet >
      <Address />
    </EmbeddedWallet>
  )
}`;

export default function LoginExample() {
  return (
    <ComponentDetail
      id="embedded-wallet"
      title="Embedded Wallet"
      description="The Embedded Wallet component displays the children for logged-in users and shows a login form for users who are not logged in."
    >
      <PreviewComponent code={IdentityCode}>
        <EmbeddedWallet>
          <Address />
        </EmbeddedWallet>
      </PreviewComponent>
    </ComponentDetail>
  );
}
