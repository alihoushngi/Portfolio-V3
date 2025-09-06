"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "javascript" }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      customStyle={{
        margin: 0,
        padding: "16px",
        fontSize: "14px",
        backgroundColor: "#020618",
        borderRadius: "0 0 8px 8px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
      }}
    >
      {code.trim()}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
