import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [ isExpanded, setExpanded ] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>  {/* We have called submitNote from both <form> and <Fab> so with either action submitnote is called. Issues were there because of fab, it was okay with <button>. However by calling submitNote in both places issues were resolved */}
        {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} /> }
        <textarea name="content" placeholder="Take a note..." rows={isExpanded? 3: 1} onChange={handleChange} value={note.content} onClick={expand} />
        {/* Material UI Zoom API */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>          {/* Material UI floating action button */}
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
