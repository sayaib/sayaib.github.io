import React from "react";
import SnippetsDataTable from "./Table/SnippetsDataTable";
import { useParams } from "react-router-dom";

import { snippetsLinkName } from "../../function/function";

import code_folder from "../../assets/icon/folder.png";

import html_snippets from "./Json/snippets_html.json";
import javascript_snippets from "./Json/snippets_javascript.json";
import flutter_snippets from "./Json/snippets_flutter.json";
import nodejs_snippets from "./Json/snippets_nodejs.json";
import js_snippets from "./Json/snippets_javascript.json";
import ts_snippets from "./Json/snippets_typescript.json";
import react_snippets from "./Json/snippets_react.json";
import react_query_snippets from "./Json/snippets_react_query.json";
import react_redux_snippets from "./Json/snippets_react_redux.json";
import react_router_snippets from "./Json/snippets_react_router.json";
import python_snippets from "./Json/snippets_python.json";
import php_snippets from "./Json/snippets_php.json";
import mongoaggr_snippets from "./Json/snippets_mongoaggr.json";
import mongodb_snippets from "./Json/snippets_mongodb.json";

const CodeSnippets = () => {
  const { item } = useParams();

  return (
    <>
      <div>
        <h4
          className="header_doc_snipp"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span>
            <img
              style={{ width: "30px", marginRight: "0.5rem" }}
              src={code_folder}
              alt=""
              srcset=""
            />
          </span>{" "}
          Supported Preloaded Snippets for {snippetsLinkName(item)}:
        </h4>
        <SnippetsDataTable
          snippets={
            item === "html"
              ? html_snippets
              : item === "javascript"
              ? javascript_snippets
              : item === "flutter"
              ? flutter_snippets
              : item === "nodejs"
              ? nodejs_snippets
              : item === "ES6"
              ? js_snippets
              : item === "typescript"
              ? ts_snippets
              : item === "react"
              ? react_snippets
              : item === "python"
              ? python_snippets
              : item === "php"
              ? php_snippets
              : item === "react-router"
              ? react_router_snippets
              : item === "react-redux"
              ? react_redux_snippets
              : item === "react-query"
              ? react_query_snippets
              : item === "mongo-aggregation"
              ? mongoaggr_snippets
              : item === "mongodb"
              ? mongodb_snippets
              : ""
          }
        />
      </div>
    </>
  );
};

export default CodeSnippets;
