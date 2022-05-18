import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 10;
  const handleChange = (e) => {
    // setNoteText(e.target.value);
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.length) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className='note new'>
      <textarea
        row='8'
        col='8'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small>{charLimit - noteText.length}</small>
        <button className='save' onClick={handleSaveClick}>
          save
        </button>
      </div>
    </div>
  );
};
export default AddNote;
