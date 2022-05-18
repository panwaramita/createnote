import React from "react";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <h1>Notesssssssssssss</h1>
      <button
        onClick={(e) => handleToggleDarkMode((previous) => !previous)}
        className='save'
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
