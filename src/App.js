import './App.css';
import {useState} from 'react'

export default function App() {
  const [noteInput, setNoteinput] = useState("")
  const [notes, setNotes] = useState([])

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
      <header className="header">
        <h1>Josephine Leow's React Notes</h1>
        <p>Day 14: Add + Delete Notes</p>
      </header>
      <main className="main">
        <section className="card">  
          <h2>Notes</h2>
          <div className="row"> 
            <input className="input" value={noteInput} onChange={(e)=> setNoteinput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a note and press Enter"/>
            <button className="button" onClick={addNote}>Add Note</button>
          </div>

          {notes.length === 0 ? (
            <p className="empty">No notes yet. Add one above</p>
          ) : (
            <ul className="notes-list">
              {notes.map((note, index) => (
                <li key={index} className="listItem">
                  <span>{note}</span>
                  <button className="deleteBtn" onClick={() => deleteNote(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
