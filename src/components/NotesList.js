import NoteItem from "./NoteItem";

export default function NotesList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <p className="empty">No notes yet. Add one above 👆</p>;
  }

  return (

  <ul className="list">
    {notes.map((note, index) => (
      <NoteItem
        key={index}
        note={note}
        onDelete={() => deleteNote(index)}
      />
    ))}
  </ul>
);

}
