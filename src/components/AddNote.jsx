import React, {useState} from "react"
import notes from "../scripts/notes";

function AddNote(props) {

    const [note, setNote] = useState({
        noteTitle: "",
        noteContent: ""
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setNote(prev => {
           return {
               ...prev,
               [name]: value
           }
        })
    }

    function newNote(e) {
        e.preventDefault()
        if(note.noteTitle.length > 0 && note.noteContent.length > 0) props.addNote(note)
    }

return (
   
            <div className="add-note">
                <form>
            <input 
            id="noteTitle" 
            name="noteTitle"
            placeholder="Title"
            className="add-note__title"
            onChange={handleChange}
            value={note.noteTitle}
           />
            <textarea 
            id="noteContent"
            name="noteContent"
            placeholder="Write note here..." 
            onChange={handleChange}
            className="add-note__content"
            />
            <button onClick={newNote} className="add-note__btn">+</button>
            </form>
            </div>
            
)
}

export {AddNote as default}