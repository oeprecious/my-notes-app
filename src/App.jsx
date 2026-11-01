import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteCard from "./Components/NoteCard";
import NoteForm from "./Components/NoteForm";

const App = () => {

  // Notes state.
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ?
      JSON.parse(savedNotes) : [];
  })

  const [editingNote, setEditingNote] = useState(null)

  const editNote = (note) => {
    setEditingNote(note)
  }

  const updateNote = (title, description) => {
   setNotes(notes.map(n => n.id === editingNote.id ? {...n, title, description} : n))
    setEditingNote(null)
  }

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
        <NoteForm addNote={addNote} editingNote={editingNote} updateNote={updateNote} />

        {/* Passed notes to NoteCard which is an empty array holidng the note. */}
        <NoteCard notes={notes} deleteNote={deleteNote} editNote={editNote} />
      </main>
    </>
  );
};

export default App;
