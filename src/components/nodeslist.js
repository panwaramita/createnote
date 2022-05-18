import Note from "./note";
import AddNote from "./addNote";
const NodeList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className='note-list'>
      {notes.map((note) => (
        <Note note={note} key={note.id} handledelete={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NodeList;
