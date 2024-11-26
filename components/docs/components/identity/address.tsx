"use client";
import { PreviewComponent } from "../../preview/preview";
import { Address } from "@prex0/uikit/identity";
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
        <div className="flex justify-center items-center">
          <Address
            isSliced={true}
            onCopied={() => toast({ title: "Copied to clipboard" })}
          />
        </div>
      </div>
      <Toaster />
    </div>
  )
}`;

export function IdentityAddressExample() {
  const { toast } = useToast();

  return (
    <ComponentDetail
      id="address"
      title="Address"
      description="The Address component displays the user's address."
    >
      <PreviewComponent code={IdentityCode}>
        <div>
          <div className="space-y-3">
            <div className="flex justify-center items-center">
              <Address
                isSliced={true}
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
