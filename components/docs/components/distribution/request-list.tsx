"use client";

import {
  DistributionHistory,
  DistributionHistoryItemCustom,
  DistributionHistoryItems,
} from "@prex0/uikit/history";
import { PreviewComponent } from "../../preview/preview";
import { ComponentDetail } from "../common/ComponentDetail";

const Code = `import {
  DistributionHistory,
  DistributionHistoryItemCustom,
  DistributionHistoryItems
} from "@prex0/uikit/history";

export function RequestListExample() {
  return (
    <DistributionHistory>
      <DistributionHistoryItems>
        <DistributionHistoryItemCustom />
      </DistributionHistoryItems>
    </DistributionHistory>
  );
}
`;

const description = `This is an example of displaying a list of requests`;

export function RequestListExample() {
  return (
    <ComponentDetail
      id="request-list"
      title="Request List"
      description={description}
    >
      <PreviewComponent code={Code}>
        <div className="px-5 w-full">
          <DistributionHistory>
            <DistributionHistoryItems>
              <DistributionHistoryItemCustom />
            </DistributionHistoryItems>
          </DistributionHistory>
        </div>
      </PreviewComponent>
    </ComponentDetail>
  );
}
