import * as React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyButton from "./copy-button";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("bash", bash);

export default function CodeBlock({
  code,
  language = "jsx",
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
          borderRadius: "10px",
        }}
        lineProps={{
          style: {
            wordBreak: "break-all",
            whiteSpace: "pre-wrap",
          },
        }}
        language={language}
        style={vscDarkPlus}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={false}
        showInlineLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
