import React from "react";
import { LinkTransferExample } from "@/components/docs/components/link-transfer";
import { ClaimExample } from "../../../../components/docs/components/claim";
import CodeBlock from "../../../../components/docs/preview/code-block";

const GetURLCode = `function getURL() {
  return \`\${window.location.origin}/docs/components/link-transfer\`
}`;

export default function Page() {
  return (
    <div className="w-full space-y-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white">Link Transfer</h1>
          <p className="text-gray-400 text-lg">
            Link transfer component is a component for sending tokens via
            message apps.
          </p>
        </div>
        <LinkTransferExample />
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Get URL</h2>
          <p className="text-gray-400 text-lg">
            The getURL function returns the URL of the claim page.
          </p>
        </div>
        <CodeBlock code={GetURLCode} />
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Claim</h2>
          <p className="text-gray-400 text-lg">
            This is an example of actually receiving tokens from a link created
            by link transfer.
          </p>
        </div>
        <ClaimExample />
      </div>
    </div>
  );
}
