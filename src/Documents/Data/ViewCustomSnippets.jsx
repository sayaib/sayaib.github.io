import React from "react";
import TitleDoc from "../../components/index/TitleDoc";
import viewcustom from "../../assets/snippets/doc_gif/viewcustom.gif";
import "./style.css";
import NavHub from "../../components/index/NavHub";
const ViewCustomSnippets = () => {
  return (
    <>
      <div className="main_container_doc">
        <div className="contain_docs">
          <TitleDoc title="View and Delete Custom Snippets of DevSnip Pro Added By Users" />

          <section>
            <h2 className="header_doc" id="install-devsnip-pro">
              Step 1: Install DevSnip Pro
            </h2>
            <ol>
              <li className="description_doc">
                Open <strong>Visual Studio Code</strong>.
              </li>
              <li className="description_doc">
                Go to the <strong>Extensions</strong> view by clicking on the
                Extensions icon in the Activity Bar on the side of the window.
              </li>
              <li className="description_doc">
                Search for <strong>DevSnip Pro</strong> and click{" "}
                <strong>Install</strong>.
              </li>
            </ol>
            <h2 className="header_doc" id="create-custom-snippets">
              Step 2: View Created Custom Snippets
            </h2>
            <ol>
              <li className="description_doc">
                ● Right-Click on the Editor: Open the context menu by
                right-clicking on the editor.
              </li>
              <br />
              <li className="description_doc">
                ● Choose "🚀 DevSnip Pro: Show Custom Snippet": Select this
                option from the context menu.
              </li>
              <br />
              <li className="description_doc">
                ● View and Delete Snippets: Now user can view and delete the
                custom added snippets from the table.
              </li>
              <br />
            </ol>
            <h3 className="title_doc" id="use-example">
              Example View Custom Snippet:
            </h3>

            <img src={viewcustom} alt="" srcset="" />
          </section>
        </div>
        <div className="index_doc">
          <NavHub />
          <ul>
            <li>
              <a href="#install-devsnip-pro">Step 1: Install DevSnip Pro</a>
            </li>
            <li>
              <a href="#create-custom-snippets">
                Step 2: View Created Custom Snippets
              </a>
            </li>
            <li>
              <a href="#use-example">
                {" "}
                Step 3: Example How to view and delete custom snippets added by
                user demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewCustomSnippets;
