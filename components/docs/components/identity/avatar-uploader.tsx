"use client";
import { PreviewComponent } from "../../preview/preview";
import { Identity, AvatarSimpleUploader } from "@prex0/uikit/identity";
import { ComponentDetail } from "../common/ComponentDetail";

const Code = `import { Identity, AvatarSimpleUploader } from "@prex0/uikit/identity";

export function IdentityNameExample() {
  return (
    <Identity>
      <div className="flex flex-col gap-3">
        <AvatarSimpleUploader buttonText="Save"/>
      </div>
    </Identity>
  )
}`;

export function AvatarSimpleUploaderExample() {
  return (
    <ComponentDetail
      id="avatar-uploader"
      title="Avatar Uploader"
      description="The Avatar Uploader component allows you to upload the avatar."
    >
      <PreviewComponent code={Code}>
        <Identity>
          <div className="flex flex-col gap-3">
            <AvatarSimpleUploader buttonText="Save" />
          </div>
        </Identity>
      </PreviewComponent>
    </ComponentDetail>
  );
}
