"use client";

import {
  TransferHistory,
  TransferHistoryItemCustom,
  TransferHistoryItemCustomComponentReact,
  TransferHistoryItems,
} from "@prex0/uikit/history";
import { PreviewComponent } from "../../preview/preview";
import { ComponentDetail } from "../common/ComponentDetail";
import { formatUnits, isAddressEqual } from "viem";

const Code = `import {
  TransferHistory,
  TransferHistoryItemCustom,
  TransferHistoryItems
} from "@prex0/uikit/history";
import { formatUnits, isAddressEqual } from "viem";

export function CustomTransferHistoryExample() {
  return (
    <TransferHistory>
      <TransferHistoryItems>
        <TransferHistoryItemCustom>
          <CustomHistoryItemContent />
        </TransferHistoryItemCustom>
      </TransferHistoryItems>
    </TransferHistory>
  );
}

const getFormattedDate = (date: number) => {
  return new Date(date * 1000).toLocaleDateString();
}

const CustomHistoryItemContent = ({
  className,
  item,
  me,
  token,
  explorerURL
}: TransferHistoryItemCustomComponentReact) => {
  if(token === undefined) {
    return null;
  }

  if(item === undefined) {
    return null;
  }

  if(me === undefined) {
    return null;
  }
 
  if (isAddressEqual(item.sender, me)) {
    return (
      <div className={className}>
        <div className="flex justify-between text-foreground">
          <div>Sent to {item.recipientName}.</div>
          <div>{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </div>
        <div className="flex justify-start">
          <div>
            <a className="text-xs" href={explorerURL}>
              {getFormattedDate(item.createdAt)}
            </a>
          </div>
        </div>
      </div>
    )
  } else if (isAddressEqual(item.recipient, me)) {
    return (
      <div className={className}>
        <div className="flex justify-between text-foreground">
          <div>Received from {item.senderName}.</div>
          <div>{formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}</div>
        </div>
        <div className="flex justify-start">
          <div>
            <a className="text-xs" href={explorerURL}>
              {getFormattedDate(item.createdAt)}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
`;

const description = `This is an example of displaying a list of user transfers.
You can customize the display of each item.`;

export function CustomTransferHistoryExample() {
  return (
    <ComponentDetail
      id="custom-transfer-history"
      title="Custom Transfer History"
      description={description}
    >
      <PreviewComponent code={Code}>
        <TransferHistory>
          <TransferHistoryItems>
            <TransferHistoryItemCustom>
              <CustomHistoryItemContent />
            </TransferHistoryItemCustom>
          </TransferHistoryItems>
        </TransferHistory>
      </PreviewComponent>
    </ComponentDetail>
  );
}

const getFormattedDate = (date: number) => {
  return new Date(date * 1000).toLocaleDateString();
};

const CustomHistoryItemContent = ({
  className,
  item,
  me,
  token,
  explorerURL,
}: TransferHistoryItemCustomComponentReact) => {
  if (token === undefined) {
    return null;
  }

  if (item === undefined) {
    return null;
  }

  if (me === undefined) {
    return null;
  }

  if (isAddressEqual(item.sender, me)) {
    return (
      <div
        className={`${className} bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg shadow-lg`}
      >
        <div className="flex justify-between text-white font-bold">
          <div>Enviado a {item.recipientName}.</div>
          <div>
            {formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}
          </div>
        </div>
        <div className="flex justify-start">
          <div>
            <a
              className="text-xs text-yellow-300 hover:underline"
              href={explorerURL}
            >
              {getFormattedDate(item.createdAt)}
            </a>
          </div>
        </div>
      </div>
    );
  } else if (isAddressEqual(item.recipient, me)) {
    return (
      <div
        className={`${className} bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 p-4 rounded-lg shadow-lg`}
      >
        <div className="flex justify-between text-white font-bold">
          <div>Recibido de {item.senderName}.</div>
          <div>
            {formatUnits(BigInt(item.amount), token.decimals)} {token.symbol}
          </div>
        </div>
        <div className="flex justify-start">
          <div>
            <a
              className="text-xs text-yellow-300 hover:underline"
              href={explorerURL}
            >
              {getFormattedDate(item.createdAt)}
            </a>
          </div>
        </div>
      </div>
    );
  }
};
