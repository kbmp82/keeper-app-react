import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import AddNote from "./AddNote";
import Footer from "./Footer";
import notes from "../scripts/notes";

function App() {

  const [allNotes, setNotes] = useState(notes)

  function addNote(note) {
    setNotes(prev => {
      return [...prev,{
        key: allNotes.length++,
        title: note.noteTitle,
        content: note.noteContent
      }]
    })
}

function deleteNote(delIndex) {
setNotes(()=>{
  return allNotes.filter((obj,index) => {
    return index !== delIndex
  })
})
}

  return (
    <div id="main">
      <Header />
      <div id="addNote">
      <AddNote addNote={addNote}/>
      </div>
      <div id="notes">
        {allNotes.map((note,index) => (
          <Note deleteNote={deleteNote} id={index} key={note.key} title={note.title} body={note.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export { App as default };
