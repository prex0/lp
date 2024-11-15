import React from "react";
import LoginExample from "@/components/docs/components/wallet/embdded-wallet";
import LoginCustomExample from "@/components/docs/components/wallet/login-custom";
import LogoutExample from "@/components/docs/components/wallet/logout";
import DevicePasskeySupportExample from "@/components/docs/components/wallet/device-passkey-support";
import TestLoginExample from "@/components/docs/components/wallet/test-login";
import { PrexProvider } from "../../provider";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";

export default function Page() {
  return (
    <ComponentGroup
      title="Wallet"
      description="Components for managing user wallets, including wallet creation."
    >
      <PrexProvider initialState="loggedOut">
        <>
          <LoginExample />
          <LoginCustomExample />
        </>
      </PrexProvider>
      <LogoutExample />
      <PrexProvider initialState="passkeyNotAvailable">
        <DevicePasskeySupportExample />
      </PrexProvider>
      <TestLoginExample />
    </ComponentGroup>
  );
}
