import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteCard from "./Components/NoteCard";
import NoteForm from "./Components/NoteForm";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <NoteForm />
        <NoteCard />
      </main>
    </>
  );
};

export default App;
