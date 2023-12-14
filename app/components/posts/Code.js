"use client";

import React, { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyIcon from "../icons/CopyIcon";
import CopyToClipboard from "react-copy-to-clipboard";
import CopiedIcon from "../icons/CopiedIcon";

//The component that let us show code in our blog
function Code({ children, language }) {
  //A state to change the icon of copy
  const [copied, setCopied] = useState(false);

  //Function to handle when the users click the copy button
  const handleCopySuccess = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="code_container">
      <CopyToClipboard text={children} onCopy={handleCopySuccess}>
        <button className="code_copy">
          {copied ? <CopiedIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter style={materialDark} language={language}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
