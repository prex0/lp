import React from "react";
import { SwapExample } from "@/components/docs/components/swap";
import { ComponentGroup } from "../../../../components/docs/components/common/ComponentGroup";

export default function Page() {
  return (
    <ComponentGroup
      title="Swap"
      description="This is an example of displaying a form for swapping tokens."
    >
      <SwapExample />
    </ComponentGroup>
  );
}
