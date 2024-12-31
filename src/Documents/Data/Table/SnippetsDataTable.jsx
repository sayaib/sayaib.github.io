import React, { useState } from "react";
import "./styles.css";
import { Clipboard } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const SnippetsDataTable = ({ snippets }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter templates based on the search term using regex
  const filteredTemplates = Object.entries(snippets).filter(
    ([title, content]) => {
      const regex = new RegExp(searchTerm, "i");
      return regex.test(content.prefix) || regex.test(content.description);
    }
  );

  return (
    <div className="containers">
      <div>
        <Toaster />
      </div>
      <input
        type="text"
        placeholder="Search by prefix or description..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid-container">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map(([title, content]) => (
            <div key={title} className="template-card">
              <h2>{title}</h2>
              <div className="code-div">
                <p>
                  <strong>Prefix:</strong> {content.prefix}
                </p>

                <p>
                  <strong>Description:</strong> {content.description}
                </p>
                <div className="code-block-container">
                  <pre className="code-block">
                    {Array.isArray(content.body)
                      ? content.body.join(" ")
                      : content.body}
                  </pre>
                  <button
                    className="copy-button"
                    onClick={() => {
                      const codeToCopy = Array.isArray(content.body)
                        ? content.body.join("\n")
                        : content.body;
                      navigator.clipboard.writeText(codeToCopy);
                      toast.success(
                        `prefix: "${content.prefix}" \n code: ${
                          Array.isArray(content.body)
                            ? content.body.join(" ")
                            : content.body
                        }\nsnippets copied to clipboard!`
                      );
                    }}
                  >
                    <Clipboard />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No templates found.</p>
        )}
      </div>
    </div>
  );
};

export default SnippetsDataTable;
