import { MdDeleteForever } from "react-icons/md";
const Note = ({ note, handledelete }) => {
  return (
    <div className='note'>
      <span>{note.text}</span>
      <div className='note-footer'>
        <small>{note.date}</small>
        <MdDeleteForever
          onClick={() => handledelete(note.id)}
          className='delete-icon'
          size='1.3em'
        />
      </div>
    </div>
  );
};

export default Note;
