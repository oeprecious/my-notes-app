import './NoteCard.css'
import { FaTrash } from "react-icons/fa"

const NoteCard = ({ notes, deleteNote }) => {
  return (
    <>
      <div className="noteContainer">
        <h3 style={{ marginTop: "6px" }}>Your Notes</h3>
        {notes.length === 0 && "No notes yet. Create your first note!"}

        <div className="notes">

          {notes.map((note) => (
            <div className="noteCard" key={note.id}>
              <h4 id="cardDescription">{note.title}</h4>
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
