import './App.css';
import {useState, useEffect, useRef} from 'react'
import NotesList from './components/NotesList';
import Header from './components/header';

export default function App() {
  const [noteInput, setNoteinput] = useState("")
  const [notes, setNotes] = useState([])
  const didMountRef = useRef(false);
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme") || "light"
  });
  // Load notes from localStorage on component mount
useEffect(() => {
  try {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  } catch (e) {
    setNotes([]);
  }
}, []);


  
// Save notes whenever notes state changes
useEffect(() => {
    if(!didMountRef.current){
    didMountRef.current = true;
    return
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);

useEffect(()=>{
    localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
}, [theme])

  function toggleTheme(){
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function addNote(){
    const text = noteInput.trim()
    if(!text) return;
    setNotes([...notes, text])
    setNoteinput("")
  }

  function deleteNote(indexToDelete){
    setNotes(notes.filter((_, index) => index !== indexToDelete) )
  }

  function handleKeyDown(event){
    if(event.key === "Enter"){
      addNote()
    }
  }

  return (
    <div className="container">
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="main">
        <section className="card">  
          <h2>Notes</h2>
          <div className="row"> 
            {notes.length > 0 && (
              <button className="clearBtn" onClick={()=>{if(window.confirm("Clear all notes?")) setNotes([])}}>Clear All</button>
            )}<br/>
            <input className="input" value={noteInput} onChange={(e)=> setNoteinput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a note and press Enter"/>
            <button className="button" onClick={addNote} disabled={!noteInput.trim()}>Add Note</button>
          </div>

         <NotesList notes={notes} deleteNote={deleteNote} />
        </section>
      </main>
    </div>
  );
}
