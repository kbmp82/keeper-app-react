import React from "react"

function Note(props) {
    return (
        <div id="note">
            <div class="note"><h1>{props.title}</h1><p>{props.body}</p></div>
            </div>
    )
}


export {Note as default}