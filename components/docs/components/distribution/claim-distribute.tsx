"use client";

import {
  DistributionReceive,
  DistributionReceiveAmount,
  DistributionReceiveButton,
  DistributionReceiveName,
  DistributionReceiveExpiration,
  DistributionReceiveCheckLocation,
  DistributionReceiveMessage,
} from "@prex0/uikit/distribute";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../../preview/preview";
import { ComponentDetail } from "../common/ComponentDetail";

const ClaimDistributeCode = `import {
  DistributionReceive,
  DistributionReceiveAmount,
  DistributionReceiveButton,
  DistributionReceiveName,
  DistributionReceiveExpiration,
  DistributionReceiveCheckLocation,
  DistributionReceiveMessage
} from '@prex0/uikit/distribute'
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";

export function ClaimDistributeExample() {
  const { toast } = useToast();

  const onSuccess = useCallback(() => {
    toast({
      title: "Claim successful",
      description: <p>Claim successful</p>,
    });
  }, [toast]);

  return (
    <div className="w-[316px]">
      <DistributionReceive
        claimParams={{
          id: 'test-id',
          secret: 'test-secret',
        }}
        onSuccess={onSuccess}
      >
        <div className="flex flex-col gap-4">
          <div>
            <DistributionReceiveName />
          </div>
          <div>
            <DistributionReceiveAmount showSymbol/>
          </div>
          <div>
            Expiration:
            <DistributionReceiveExpiration />
          </div>
        </div>
        <DistributionReceiveCheckLocation>
          <div className='flex flex-col gap-4'>
            <div>
              <DistributionReceiveMessage />
            </div>
            <div>
              <DistributionReceiveButton />
            </div>
          </div>
        </DistributionReceiveCheckLocation>
      </DistributionReceive>
      <Toaster />
    </div>
  );
}
`;

const description = `This is an example of actually receiving tokens from a drop link.`;

export function ClaimDistributeExample() {
  const { toast } = useToast();

  const onSuccess = useCallback(() => {
    toast({
      title: "Claim successful",
      description: <p>Claim successful</p>,
    });
  }, [toast]);

  return (
    <ComponentDetail
      id="claim-distribute"
      title="Claim Distribute"
      description={description}
    >
      <PreviewComponent code={ClaimDistributeCode}>
        <div className="w-[316px]">
          <DistributionReceive
            claimParams={{
              id: "test-id",
              secret: "test-secret",
            }}
            onSuccess={onSuccess}
          >
            <div className="flex flex-col gap-4">
              <div>
                <DistributionReceiveName />
              </div>
              <div>
                <DistributionReceiveAmount showSymbol />
              </div>
              <div>
                Expiration:
                <DistributionReceiveExpiration />
              </div>
            </div>
            <DistributionReceiveCheckLocation>
              <div className="flex flex-col gap-4">
                <div>
                  <DistributionReceiveMessage />
                </div>
                <div>
                  <DistributionReceiveButton />
                </div>
              </div>
            </DistributionReceiveCheckLocation>
          </DistributionReceive>
          <Toaster />
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}
