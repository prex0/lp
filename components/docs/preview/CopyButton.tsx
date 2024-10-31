import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCheckCircle, FaRegCopy } from "react-icons/fa";

type Props = {
  code: string;
};
function CopyButton({ code }: Props) {
  const [copied, setCopied] = React.useState(false);
  return (
    <button className="absolute top-4 right-10 cursor-pointer">
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <div>{copied ? <FaRegCheckCircle /> : <FaRegCopy />}</div>
      </CopyToClipboard>
    </button>
  );
}

export default CopyButton;
