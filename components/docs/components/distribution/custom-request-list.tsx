"use client";

import {
  DistributionHistory,
  DistributionHistoryItemCustom,
  DistributionHistoryItemCustomComponentReact,
  DistributionHistoryItems,
} from "@prex0/uikit/history";
import { PreviewComponent } from "../../preview/preview";
import { ComponentDetail } from "../common/ComponentDetail";
import { DistributionRequestStatus } from "@prex0/prex-client";
import { formatUnits } from "viem";

const Code = `import {
  DistributionHistory,
  DistributionHistoryItemCustom,
  DistributionHistoryItemCustomComponentReact,
  DistributionHistoryItems
} from "@prex0/uikit/history";
import { DistributionRequestStatus } from "@prex0/prex-client";
import { formatUnits } from "viem";

export function RequestListExample() {
  return (
    <DistributionHistory>
      <DistributionHistoryItems>
        <DistributionHistoryItemCustom>
          <CustomDistributionHistoryItemContent />
        </DistributionHistoryItemCustom>
      </DistributionHistoryItems>
    </DistributionHistory>
  );
}


function getFormattedDate(date: number) {
  return new Date(date * 1000).toLocaleDateString();
}

const CustomDistributionHistoryItemContent = ({
  className,
  item,
  token
}: DistributionHistoryItemCustomComponentReact) =>  {
  if(token === undefined) {
    return null;
  }

  if(item === undefined) {
    return null;
  }
  
  function getStatusName(status: DistributionRequestStatus) {
    if(status === 'EMPTY') {
      return 'Not Found';
    }
    if(status === 'CANCELLED') {
      return 'Cancelled';
    }
    if(status === 'COMPLETED') {
      return 'Completed';
    }
    return 'Live';
  }

  const status = getStatusName(item.status);

  return (
    <div className={className}>
      <div className="flex justify-between">
        <div>
        {item.name}({status})
        </div>
        <div>{formatUnits(BigInt(item.amount), token.decimals)} / {formatUnits(BigInt(item.totalAmount), token.decimals)} {token.symbol}</div>
      </div>
      <div className="flex justify-start">
        <div>
          <div className="text-xs">
            created at {getFormattedDate(item.createdAt)}
          </div>
          <div className="text-xs">
            expires at {getFormattedDate(item.expiry)}
          </div>
        </div>
      </div>
    </div>
  )
}
`;

const description = `This is an example of displaying a list of requests with custom content`;

export function CustomRequestListExample() {
  return (
    <ComponentDetail
      id="custom-request-list"
      title="Custom Request List"
      description={description}
    >
      <PreviewComponent code={Code}>
        <div className="px-5 w-full">
          <DistributionHistory>
            <DistributionHistoryItems>
              <DistributionHistoryItemCustom>
                <CustomDistributionHistoryItemContent />
              </DistributionHistoryItemCustom>
            </DistributionHistoryItems>
          </DistributionHistory>
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}

function getFormattedDate(date: number) {
  return new Date(date * 1000).toLocaleDateString();
}

const CustomDistributionHistoryItemContent = ({
  className,
  item,
  token,
}: DistributionHistoryItemCustomComponentReact) => {
  if (token === undefined) {
    return null;
  }

  if (item === undefined) {
    return null;
  }

  function getStatusName(status: DistributionRequestStatus) {
    if (status === "EMPTY") {
      return "Not Found";
    }
    if (status === "CANCELLED") {
      return "Cancelled";
    }
    if (status === "COMPLETED") {
      return "Completed";
    }
    return "Live";
  }

  const status = getStatusName(item.status);

  return (
    <div className={className}>
      <div className="flex justify-between">
        <div>
          {item.name}({status})
        </div>
        <div>
          {formatUnits(BigInt(item.amount), token.decimals)} /{" "}
          {formatUnits(BigInt(item.totalAmount), token.decimals)} {token.symbol}
        </div>
      </div>
      <div className="flex justify-start">
        <div>
          <div className="text-xs">
            created at {getFormattedDate(item.createdAt)}
          </div>
          <div className="text-xs">
            expires at {getFormattedDate(item.expiry)}
          </div>
        </div>
      </div>
    </div>
  );
};
