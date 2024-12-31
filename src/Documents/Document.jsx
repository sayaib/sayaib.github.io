import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import DocumentSidebar from "./Sidebar/DocumentSidebar";
import WhatIsDevSnip from "./Data/WhatIsDevSnip";
import WhyDevSnip from "./Data/WhyDevSnip";
import Installation from "./Data/Installation";
import PrismSnippetsLoggerInstallation from "./Data/PrismSnippetsLoggerInstallation";
import CustomSnippets from "./Data/CustomSnippets";
import UnderDevelopment from "./Data/UnderDevelopment.jsx";
import CodeSnippets from "./Data/CodeSnippets.jsx";
import FAQ from "./Data/FAQ/FAQ.jsx";
import CodeOfConduct from "./Data/CodeOfConduct/CodeOfConduct.jsx";
import HowToContribute from "./Data/HowToContribute.jsx";
import "./Document.css";

import Header from "./Header/Header";
import ViewCustomSnippets from "./Data/ViewCustomSnippets.jsx";

export default function Document() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="document">
        {/* Static Header */}
        <div className="header_docs">
          <Header />
        </div>

        {/* Hamburger menu for mobile */}
        <div
          className={`hamburger ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          ☰
        </div>

        {/* Sidebar */}
        <div className={`sidebar_doc ${isSidebarOpen ? "open" : ""}`}>
          <DocumentSidebar closeSidebar={closeSidebar} />
        </div>

        {/* Main content */}
        <div className="body_doc">
          <Routes>
            <Route path="/" element={<WhatIsDevSnip />} />
            <Route path="why-dev-snip" element={<WhyDevSnip />} />
            <Route path="installations" element={<Installation />} />
            <Route
              path="cli-installations"
              element={<PrismSnippetsLoggerInstallation />}
            />
            <Route path="custom-snippets" element={<CustomSnippets />} />
            <Route
              path="view-custom-snippets"
              element={<ViewCustomSnippets />}
            />

            <Route path="code-snippets/:item" element={<CodeSnippets />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="code-of-conduct" element={<CodeOfConduct />} />
            <Route path="how-to-contribute" element={<HowToContribute />} />

            <Route path="under-development" element={<UnderDevelopment />} />
          </Routes>
        </div>
        <Outlet />
      </div>
    </>
  );
}
