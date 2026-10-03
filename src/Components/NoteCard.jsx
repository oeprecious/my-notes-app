 import './NoteCard.css'

const NoteCard = ({notes}) => {
  return (
    <>
      <div className="noteContainer">
        <h2>Your Notes</h2>
        <div className="notes">
         
          {notes.map((note) => (
            <div className="noteCard" key={note.id}>
              <h3 id="cardDescription">{note.title}</h3>
              <p>{note.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default NoteCard;
