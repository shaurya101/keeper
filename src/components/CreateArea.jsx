import React, { useState } from "react";

function CreateArea(props) {
    const [ note, setNote ] = useState({
        title: "",
        content: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;   // destructuring event

        setNote((prevNote)=>{
            return {...prevNote, [name]: value};  // enclose name in [] else it will read it as a String and not the destrucctured variable!
        })
    }
    function submitNote(event) {
        props.onAdd(note);       // to call onAdd prop which calls addNote() in App.js
        event.preventDefault();  // to prevent refreshing of page everytime when we submit node
        setNote({                // to resent textArea for next Note to be written
            title: "",
            content: ""
        })
    }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} style={{fontWeight : "bold"}} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
