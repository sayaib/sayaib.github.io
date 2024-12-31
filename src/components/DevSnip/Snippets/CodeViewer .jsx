import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeViewer = ({ code, language = "javascript" }) => {
  return (
    <div style={styles.container}>
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    maxHeight: "400px",
    overflowY: "auto",
    fontFamily: "monospace",
  },
};

export default CodeViewer;
