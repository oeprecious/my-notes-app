import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteCard from "./Components/NoteCard";
import NoteForm from "./Components/NoteForm";

const App = () => {

  // Notes state.
  const [notes, setNotes] = useState([])

  // function that adds addNote
  const addNote = (title, description) => {

    // note object
    const note = {
      title: title,
      description: description
    }

    setNotes([...notes, note])

    //"..."This is a spread Operator. Spreads every items into a new array.
  }

  return (
    <>
      <Header />

      <main>
        <NoteForm addNote={addNote} />
        <NoteCard />
      </main>
    </>
  );
};

export default App;
