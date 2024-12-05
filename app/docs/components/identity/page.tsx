import React from "react";
import { IdentityAddressExample } from "@/components/docs/components/identity/address";
import { IdentityHooksAddressExample } from "@/components/docs/components/identity/hooks-address";
import { IdentityCodeExample } from "@/components/docs/components/identity/code";
import { IdentityNameExample } from "@/components/docs/components/identity/name";
import { AvatarExample } from "@/components/docs/components/identity/avatar";
import { AvatarSimpleUploaderExample } from "@/components/docs/components/identity/avatar-uploader";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";

export default function Page() {
  return (
    <ComponentGroup
      title="Identity"
      description="Components for managing user identities, including displaying the user's address."
    >
      <IdentityAddressExample />
      <IdentityHooksAddressExample />
      <IdentityCodeExample />
      <IdentityNameExample />
      <AvatarExample />
      <AvatarSimpleUploaderExample />
    </ComponentGroup>
  );
}
