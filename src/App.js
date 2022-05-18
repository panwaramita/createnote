import { useEffect, useState } from "react";
import NodeList from "./components/nodeslist";
import { nanoid } from "nanoid";
import Search from "./components/search";
import Header from "./components/header";
const App = () => {
  const [notes, setNotes] = useState([
    {
      text: "This is my first notes",
      date: "15/04/2021",
      id: nanoid(),
    },
    {
      text: "This is my second notes",
      date: "05/04/2021",
      id: nanoid(),
    },
    {
      text: "This is my thrid notes",
      date: "19/12/2021",
      id: nanoid(),
    },
    {
      text: "This is my fourth notes",
      date: "15/04/2021",
      id: nanoid(),
    },
  ]);
  const addNote = (text) => {
    const newNote = {
      text: text,
      date: new Date().toLocaleDateString(),
      id: nanoid(),
    };
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    localStorage.setItem("react-app-data", JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-app-data"));
    setNotes(savedNotes);
  }, []);
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <Search handleSearchText={setSearchText}></Search>
        <NodeList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
