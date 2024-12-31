import React from "react";
import Main from "./components/Main";

import Document from "./Documents/Document";

/* -------------------------------------------------------------------------- */
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/dev-snip-pro/document/en/*" element={<Document />} />
      </Routes>
    </>
  );
};

export default App;
