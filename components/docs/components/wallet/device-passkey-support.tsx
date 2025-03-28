"use client";
import { PreviewComponent } from "../../preview/preview";
import { DevicePasskeySupport, openChrome } from "@prex0/uikit/wallet";
import { ComponentDetail } from "../common/ComponentDetail";
import { Button } from "@/components/ui/button";

const Code = `import { DevicePasskeySupport, openChrome } from "@prex0/uikit/wallet";

export function DevicePasskeySupportExample() {
  return (
  <DevicePasskeySupport
    notSupportedComponent={
      <div className="flex flex-col items-center gap-4">
        <p>Not supported</p>
        <Button onClick={openChrome}>Open Chrome</Button>
      </div>
    }
  >
    <div>Supported</div>
  </DevicePasskeySupport>
  )
}`;

export default function DevicePasskeySupportExample() {
  return (
    <ComponentDetail
      id="device-passkey-support"
      title="Device Passkey Support"
      description="The Device Passkey Support component allows you to check if the device supports passkeys. (In the example below, we are simulating a situation where the device does not support passkeys.)"
    >
      <PreviewComponent code={Code}>
        <DevicePasskeySupport
          notSupportedComponent={
            <div className="flex flex-col items-center gap-4">
              <p>Not supported</p>
              <Button onClick={openChrome}>Open Chrome</Button>
            </div>
          }
        >
          <div>Supported</div>
        </DevicePasskeySupport>
      </PreviewComponent>
    </ComponentDetail>
  );
}
