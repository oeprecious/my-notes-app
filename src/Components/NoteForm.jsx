import { useState } from "react";
import "./NoteForm.css";

const NoteForm = ({ addNote }) => {
  // Title state
  const [title, setTitle] = useState("");

  //   Description state.
  const [description, setDescription] = useState("");

  // Error state
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    const titleInput = title.trim()
    const descriptionInput = description.trim()

    if (titleInput === "" || descriptionInput === "") {
      setErrorMessage("Both fields are required")
      return
    } else {
      addNote(titleInput, descriptionInput)
      setErrorMessage("")
      setTitle("")
      setDescription("")
    }
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
          <p style={{ marginTop: "5px" }}>{errorMessage}</p>

          <textarea
            name="text"
            id="text"
            placeholder="Note something down"
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
