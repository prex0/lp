import * as React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyButton from "./CopyButton";
import {
  vsDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("bash", bash);

export default function CodeBlock({
  code,
  language = "jsx",
  showLineNumbers = true,
}: {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}) {
  return (
    <div className="relative">
      <CopyButton code={code} />
      <SyntaxHighlighter
        customStyle={{
          backgroundColor: "rgb(17 24 39)",
        }}
        language={language}
        style={vscDarkPlus}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={showLineNumbers}
        showInlineLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
