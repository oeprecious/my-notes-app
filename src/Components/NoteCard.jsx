const NoteCard = ({notes}) => {
  return (
    <>
      <div className="noteContainer">
        <h2>Your Notes</h2>
        <div className="notes">
         
          {notes.map((note) => (
            <div key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default NoteCard;
