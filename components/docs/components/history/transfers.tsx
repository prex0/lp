"use client";

import {
  TransferHistory,
  TransferHistoryItemCustom,
  TransferHistoryItems,
  TransferHistoryLoadMore,
} from "@prex0/uikit/history";
import { PreviewComponent } from "../../preview/preview";
import { ComponentDetail } from "../common/ComponentDetail";
import { Button } from "../../../ui/button";

const Code = `import {
  TransferHistory,
  TransferHistoryItemCustom,
  TransferHistoryItems
} from "@prex0/uikit/history";

export function TransfersExample() {
  return (
    <TransferHistory pageSize={5}>
      <TransferHistoryItems>
        <TransferHistoryItemCustom />
      </TransferHistoryItems>
      <TransferHistoryLoadMore>
        <Button>Load more</Button>
      </TransferHistoryLoadMore>
    </TransferHistory>
  );
}
`;

const description = `This is an example of displaying a list of user transfers.
The list is paginated and the user can load more items by clicking the "Load more" button.`;

export function TransferHistoryExample() {
  return (
    <ComponentDetail
      id="transfer-history"
      title="Transfer History"
      description={description}
    >
      <PreviewComponent code={Code}>
        <TransferHistory pageSize={5}>
          <div>
            <TransferHistoryItems>
              <TransferHistoryItemCustom />
            </TransferHistoryItems>
            <TransferHistoryLoadMore>
              <Button>Load more</Button>
            </TransferHistoryLoadMore>
          </div>
        </TransferHistory>
      </PreviewComponent>
    </ComponentDetail>
  );
}
