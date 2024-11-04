"use client";

import {
  DistributionReceive,
  DistributionReceiveAmount,
  DistributionReceiveButton,
  DistributionReceiveName,
  DistributionReceiveCheckLocation,
  DistributionReceiveMessage
} from '@prex0/uikit/distribute'
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCallback } from "react";
import { PreviewComponent } from "../preview/preview";

const ClaimDistributeCode = `import {
  DistributionReceive,
  DistributionReceiveAmount,
  DistributionReceiveButton,
  DistributionReceiveName,
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

export function ClaimDistributeExample() {
  const { toast } = useToast();

  const onSuccess = useCallback(() => {
    toast({
      title: "Claim successful",
      description: <p>Claim successful</p>,
    });
  }, [toast]);

  return (
    <PreviewComponent code={ClaimDistributeCode}>
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
    </PreviewComponent>
  );
}
