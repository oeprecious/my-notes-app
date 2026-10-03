import { useState } from "react";
import "./NoteForm.css";

const NoteForm = ({addNote}) => {
  // Title state
  const [title, setTitle] = useState("");

  //   Description state.
  const [description, setDescription] = useState("");

  // Error state
  const [errorMessage, setErroMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    const titleInput = title.trim()
    const descriptionInput = description.trim()

    if(titleInput === "" || descriptionInput === "") {
      setErroMessage("Both fields are required")
      return
    } else {
    addNote(titleInput, descriptionInput)
    setErroMessage("")
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
          <p style={{marginTop: "5px"}}>{errorMessage}</p>

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
