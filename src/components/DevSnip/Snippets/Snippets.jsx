import React from "react";
import "./Snippets.css";
import CodeViewer from "./CodeViewer ";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

const Snippets = ({ jsonData, name, languages }) => {
  // Convert JSON into an array of objects, handling null or undefined
  const tableData = jsonData
    ? Object.entries(jsonData).map(([key, value]) => ({
        ...value,
        tag: key,
      }))
    : [];

  return (
    <div className="snippets-container">
      <div className="snippets-card">
        <div className="snippets-header">
          <h2 className="snippets-title">{name}</h2>
        </div>
        <div className="snippets-content">
          {tableData.length > 0 ? (
            <div className="table-container">
              <table className="snippets-table">
                <thead>
                  <tr>
                    <th>Tag</th>
                    <th>Prefix</th>
                    <th>Body</th>
                    <th>Description</th>
                    <th>Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.tag}</td>
                      <td>{row.prefix}</td>
                      <td style={{ maxWidth: "30rem" }}>
                        {/* {Array.isArray(row.body)
                          ? row.body.join(" ")
                          : row.body} */}
                        <CodeViewer
                          code={
                            Array.isArray(row.body)
                              ? row.body.join(" ")
                              : row.body
                          }
                          language={languages}
                        />
                      </td>
                      <td>{row.description}</td>
                      <td>{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="no-data-message">No snippet data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Snippets;
