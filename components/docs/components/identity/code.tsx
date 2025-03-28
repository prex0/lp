"use client";
import { PreviewComponent } from "../../preview/preview";
import { Address, MyCode } from "@prex0/uikit/identity";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ComponentDetail } from "../common/ComponentDetail";

const IdentityCode = `import { Address } from "@prex0/uikit/identity";
import { EmbeddedWallet } from "@prex0/uikit/wallet";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export function AddressExample() {
  const { toast } = useToast();
  return (
    <div>
      <div className="space-y-3">
        <MyCode />
        <div className="flex justify-center items-center">
          <Address
            onCopied={() => toast({ title: "Copied to clipboard" })}
          />
        </div>
      </div>
      <Toaster />
    </div>
  )
}`;

export function IdentityCodeExample() {
  const { toast } = useToast();

  return (
    <ComponentDetail
      id="code"
      title="Code"
      description="The Code component displays the user's code."
    >
      <PreviewComponent code={IdentityCode}>
        <div>
          <div className="space-y-3">
            <MyCode />
            <div className="flex justify-center items-center">
              <Address
                onCopied={() => toast({ title: "Copied to clipboard" })}
              />
            </div>
          </div>
          <Toaster />
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}
