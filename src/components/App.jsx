import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../scripts/notes";

function App() {
  return (
    <div id="main">
      <Header />
      <div id="notes">
        {notes.map(note => (
          <Note key={note.id} title={note.title} body={note.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export { App as default };
