import './NoteCard.css'
import { FaTrash } from "react-icons/fa"

const NoteCard = ({ notes, deleteNote }) => {
  return (
    <>
      <div className="noteContainer">
        <h2 style={{ marginTop: "6px" }}>Your Notes</h2>
        <div className="notes">

          {notes.map((note) => (
            <div className="noteCard" key={note.id}>
              <h3 id="cardDescription">{note.title}</h3>
              <p>{note.description}</p>

              <div className="deleteBtn">
                <FaTrash onClick={() => { deleteNote(note.id) }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default NoteCard;
