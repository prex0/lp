import React from "react";
import { TransferHistoryExample } from "@/components/docs/components/history/transfers";
import { CustomTransferHistoryExample } from "@/components/docs/components/history/custom-transfers";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";

const description = `History component is a component for displaying the user's transaction history. You can also customize the display.`;

export default function Page() {
  return (
    <ComponentGroup title="History" description={description}>
      <TransferHistoryExample />
      <CustomTransferHistoryExample />
    </ComponentGroup>
  );
}
