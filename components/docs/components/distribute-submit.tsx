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
  DistributionSubmitCoolTimeInput,
  DistributionSubmitLocationInput,
  DistributionSubmitAmountForm,
  DistributionSubmitAmountPerWithdrawalForm,
  DistributionSubmitMaxAmountPerAddressForm,
} from "@prex0/uikit/distribute";
import { PreviewComponent } from "../preview/preview";

const DistributeSubmitCode = `import { AmountFormInput, AmountFormSimpleInput, USDC_TOKEN_ARBITRUM } from '@prex0/uikit'
import {
  DistributionSubmit,
  DistributionSubmitNameInput,
  DistributionSubmitButton,
  DistributionSubmitCode,
  DistributionSubmitError,
  DistributionSubmitExpirationInput,
  DistributionSubmitCoolTimeInput,
  DistributionSubmitLocationInput,
  DistributionSubmitAmountForm,
  DistributionSubmitAmountPerWithdrawalForm,
  DistributionSubmitMaxAmountPerAddressForm
} from '@prex0/uikit/distribute'

function getURL() {
  return \`${window.location.origin}/distribute/receive\`
}

export const DistributeSubmitExample = () => {
  return (
    <div className='max-w-md mx-auto p-4'>
      <DistributionSubmit token={USDC_TOKEN_ARBITRUM} getURL={getURL}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">名前</label>
          <DistributionSubmitNameInput className="w-full" />
        </div>
        <div className='flex flex-row gap-2 mb-4'>
        <label className="block text-sm font-medium text-gray-700">有効期限 (7日)</label>
            <DistributionSubmitExpirationInput options={[
              { label: '1日', value: '1 days' },
              { label: '7日', value: '7 days' },
            ]} />

        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">配布量</label>
          <DistributionSubmitAmountForm>
            <AmountFormSimpleInput/>
          </DistributionSubmitAmountForm>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">引き出しごとの配布量</label>
          <DistributionSubmitAmountPerWithdrawalForm>
            <AmountFormInput/>
          </DistributionSubmitAmountPerWithdrawalForm>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">クールタイム</label>
          <DistributionSubmitCoolTimeInput options={[
            { label: '1時間', value: '1 hours' },
            { label: '1日', value: '1 days' },
          ]} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">アドレスごとの最大配布量</label>
          <DistributionSubmitMaxAmountPerAddressForm>
          <AmountFormInput/>
          </DistributionSubmitMaxAmountPerAddressForm>
        </div>
        <div className="mb-4">
          <DistributionSubmitLocationInput googleApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || ''}/>
        </div>
        <DistributionSubmitError className="mb-4" />
        <DistributionSubmitButton text="送信" />
        <DistributionSubmitCode className="mt-4" showDownloadButton/>
      </DistributionSubmit>
    </div>
  )
}

`;

function getURL() {
  return `${window.location.origin}/distribute/receive`;
}

export const DistributeSubmitExample = () => {
  return (
    <PreviewComponent code={DistributeSubmitCode}>
      <div className="max-w-md mx-auto p-4">
        <DistributionSubmit token={USDC_TOKEN_ARBITRUM} getURL={getURL}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              名前
            </label>
            <DistributionSubmitNameInput className="w-full" />
          </div>
          <div className="flex flex-row gap-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">
              有効期限 (7日)
            </label>
            <DistributionSubmitExpirationInput
              options={[
                { label: "1日", value: "1 days" },
                { label: "7日", value: "7 days" },
              ]}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              配布量
            </label>
            <DistributionSubmitAmountForm>
              <AmountFormSimpleInput />
            </DistributionSubmitAmountForm>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              引き出しごとの配布量
            </label>
            <DistributionSubmitAmountPerWithdrawalForm>
              <AmountFormInput />
            </DistributionSubmitAmountPerWithdrawalForm>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              クールタイム
            </label>
            <DistributionSubmitCoolTimeInput
              options={[
                { label: "1時間", value: "1 hours" },
                { label: "1日", value: "1 days" },
              ]}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              アドレスごとの最大配布量
            </label>
            <DistributionSubmitMaxAmountPerAddressForm>
              <AmountFormInput />
            </DistributionSubmitMaxAmountPerAddressForm>
          </div>
          <div className="mb-4">
            <DistributionSubmitLocationInput
              googleApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || ""}
            />
          </div>
          <DistributionSubmitError className="mb-4" />
          <DistributionSubmitButton text="送信" />
          <DistributionSubmitCode className="mt-4" showDownloadButton />
        </DistributionSubmit>
      </div>
    </PreviewComponent>
  );
};
