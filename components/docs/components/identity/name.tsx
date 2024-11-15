"use client";
import { PreviewComponent } from "../../preview/preview";
import {
  Identity,
  NicknameInput,
  UpdateNicknameButton,
} from "@prex0/uikit/identity";
import { ComponentDetail } from "../common/ComponentDetail";
import { Input } from "../../../ui/input";

const Code = `import { Identity, NicknameInput, UpdateNicknameButton } from "@prex0/uikit/identity";
import { Input } from "@components/ui/input";

export function IdentityNameExample() {
  return (
    <Identity>
      <div className="space-y-3">
        <NicknameInput >
          <Input />
        </NicknameInput>
        <UpdateNicknameButton className="w-full" />
      </div>
    </Identity>
  )
}`;

export function IdentityNameExample() {
  return (
    <ComponentDetail
      id="nickname"
      title="Nickname"
      description="The Nickname component allows you to update the user's nickname."
    >
      <PreviewComponent code={Code}>
        <Identity>
          <div className="space-y-3">
            <NicknameInput>
              <Input />
            </NicknameInput>
            <UpdateNicknameButton className="w-full" />
          </div>
        </Identity>
      </PreviewComponent>
    </ComponentDetail>
  );
}
