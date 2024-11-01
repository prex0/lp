"use client";
import { PreviewComponent } from "../preview";
import { Address, MyCode } from "@prex0/uikit/identity";
import { EmbeddedWallet } from "@prex0/uikit/wallet";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const WalletCode = `import { Address } from "@prex0/uikit/identity";
import { EmbeddedWallet } from "@prex0/uikit/wallet";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export function AddressExample() {
  const { toast } = useToast();
  return (
    <div>
      <EmbeddedWallet>
        <Address onCopied={() => toast({ title: 'Copied to clipboard' })} />
      </EmbeddedWallet>
      <Toaster />
    </div>
  )
}`;

export function AddressExample() {
  const { toast } = useToast();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white" id="installation">
          Address
        </h1>
        <p className="text-gray-400 text-lg">Embedded wallet component.</p>
      </div>

      <PreviewComponent code={WalletCode}>
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
    </div>
  );
}
