import React from "react"

function Note(props) {

    return (
        <div id="note">
            <div className="note"><h1>{props.title}</h1><p>{props.body}</p>
            <div onClick={() => props.deleteNote(props.id)} className="note__delete">DELETE</div></div>
            </div>
    )
}


export {Note as default}