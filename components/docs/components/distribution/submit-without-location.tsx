"use client";

import {
  AmountFormInput,
  AmountFormSimpleInput,
  USDC_TOKEN_ARBITRUM,
} from "@prex0/uikit";
import {
  DistributionSubmit,
  DistributionSubmitNameInput,
  DistributionSubmitButton,
  DistributionSubmitCode,
  DistributionSubmitError,
  DistributionSubmitExpirationInput,
  DistributionSubmitAmountForm,
  DistributionSubmitAmountPerWithdrawalForm,
  DistributionSubmitShare,
} from "@prex0/uikit/distribute";
import { PreviewComponent } from "../../preview/preview";
import { ComponentDetail } from "../common/ComponentDetail";
import { Button } from "@/components/ui/button";

const DistributeSubmitCode = `import { AmountFormInput, AmountFormSimpleInput, USDC_TOKEN_ARBITRUM } from '@prex0/uikit'
import {
  DistributionSubmit,
  DistributionSubmitNameInput,
  DistributionSubmitButton,
  DistributionSubmitCode,
  DistributionSubmitError,
  DistributionSubmitExpirationInput,
  DistributionSubmitAmountForm,
  DistributionSubmitAmountPerWithdrawalForm,
  DistributionSubmitShare,
} from '@prex0/uikit/distribute'
import { Button } from "@/components/ui/button";

function getURL() {
  return \`\${window.location.origin}/docs/components/distribute\`
}

export const DistributeSubmitExample = () => {
  return (
    <div className='max-w-md mx-auto p-4'>
      <DistributionSubmit token={USDC_TOKEN_ARBITRUM} getURL={getURL}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <DistributionSubmitNameInput className="w-full" />
        </div>
        <div className='flex flex-row gap-2 mb-4'>
        <label className="block text-sm font-medium text-gray-700">Expiration (7 days)</label>
            <DistributionSubmitExpirationInput options={[
              { label: '1 hours', value: '1 hours' },
              { label: '7 days', value: '7 days' },
            ]} />

        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <DistributionSubmitAmountForm>
            <AmountFormSimpleInput/>
          </DistributionSubmitAmountForm>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Amount per drop</label>
          <DistributionSubmitAmountPerWithdrawalForm>
            <AmountFormInput/>
          </DistributionSubmitAmountPerWithdrawalForm>
        </div>
        <DistributionSubmitError className="mb-4" />
        <DistributionSubmitButton text="Submit" />
        <DistributionSubmitShare>
          <Button>Share</Button>
        </DistributionSubmitShare>
        <DistributionSubmitCode className="mt-4" showDownloadButton/>
      </DistributionSubmit>
    </div>
  )
}

`;

const description = `DistributionSubmit component is a component for making the link for token airdrop.
You can set the total amount to deposit, the amount per withdrawal, and the expiration of the link.`;

function getURL() {
  return `${window.location.origin}/distribute/receive`;
}

export const DistributeSubmitExample = () => {
  return (
    <ComponentDetail
      id="distribute-submit"
      title="Distribute Submit"
      description={description}
    >
      <PreviewComponent code={DistributeSubmitCode}>
        <div className="max-w-md mx-auto p-4">
          <DistributionSubmit token={USDC_TOKEN_ARBITRUM} getURL={getURL}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <DistributionSubmitNameInput className="w-full" />
            </div>
            <div className="flex flex-row gap-2 mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Expiration (7 days)
              </label>
              <DistributionSubmitExpirationInput
                options={[
                  { label: "1 day", value: "1 days" },
                  { label: "7 days", value: "7 days" },
                ]}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <DistributionSubmitAmountForm>
                <AmountFormSimpleInput />
              </DistributionSubmitAmountForm>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Amount per drop
              </label>
              <DistributionSubmitAmountPerWithdrawalForm>
                <AmountFormInput />
              </DistributionSubmitAmountPerWithdrawalForm>
            </div>
            <DistributionSubmitError className="mb-4" />
            <DistributionSubmitButton text="Submit" />
            <DistributionSubmitShare>
              <Button>Share</Button>
            </DistributionSubmitShare>
            <DistributionSubmitCode className="mt-4" />
          </DistributionSubmit>
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
};
