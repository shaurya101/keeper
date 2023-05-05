import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
    const[notes, setNotes] = useState([]); // initialize empty array which storesa all notes
    function addNote(newNote) {
        setNotes(prevNotes=> {
            return [...prevNotes, newNote];
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map(noteItem => {
                return <Note key={1} title={noteItem.title} content={noteItem.content} /> 
            })}
            <Footer />
        </div>
    );
}

export default App;