import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteCard from "./Components/NoteCard";
import NoteForm from "./Components/NoteForm";

const App = () => {

  // Notes state.
  const [notes, setNotes] = useState (() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ?
    JSON.parse(savedNotes) : [];
  })

  
  // function that adds addNote
  const addNote = (title, description) => {

    // note object
    const note = {
      id: Date.now(),
      title: title,
      description: description
    }
    setNotes([...notes, note])
    //"..."This is a spread Operator. Spreads every items into a new array.
  }

  // Delete note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  // LocalStorage

  useEffect(() => {
    // setItem
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <Header />

      <main>
        {/* Passed addNote as a props to NoteForm */}
        <NoteForm addNote={addNote} />

        {/* Passed notes to NoteCard which is an empty array holidng the note. */}
        <NoteCard notes={notes} deleteNote={deleteNote} />
      </main>
    </>
  );
};

export default App;
