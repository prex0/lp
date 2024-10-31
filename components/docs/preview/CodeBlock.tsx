import * as React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyButton from "./CopyButton";
import {
  vsDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative">
      <CopyButton code={code} />
      <SyntaxHighlighter
        language={"jsx"}
        style={vscDarkPlus}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        showInlineLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
