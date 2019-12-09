import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div id="main">
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export { App as default };
