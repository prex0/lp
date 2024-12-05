"use client";
import { PreviewComponent } from "../../preview/preview";
import { Avatar } from "@prex0/uikit/identity";
import { ComponentDetail } from "../common/ComponentDetail";

const Code = `import { Avatar } from "@prex0/uikit/identity";

export function IdentityNameExample() {
  return (
    <Avatar className="rounded-full" size={256} />
  )
}`;

export function AvatarExample() {
  return (
    <ComponentDetail
      id="avatar"
      title="Avatar"
      description="The Avatar component displays the user's avatar."
    >
      <PreviewComponent code={Code}>
        <Avatar
          address="0x8438499b959b40a4dcb421f357eee4a551900a92"
          className="rounded-full"
          size={128}
        />
      </PreviewComponent>
    </ComponentDetail>
  );
}
