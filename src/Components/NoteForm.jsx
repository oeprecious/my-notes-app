import { useState } from "react";
import "./NoteForm.css";

const NoteForm = () => {
  // Title state
  const [title, setTitle] = useState("");

  //   Description state.
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Intro Text */}
        <h2 id="introText">Create your note</h2>

      <div className="formContainer">
      
        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />

          <textarea
            name="text"
            id="text"
            placeholder="Description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
          <button id="btn">Submit</button>
        </form>
        
      </div>
    </>
  );
};
export default NoteForm;
