export default function NotesList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <p className="empty">No notes yet. Add one above 👆</p>;
  }

  return (
    <ul className="list">
      {notes.map((note, index) => (
        <li className="listItem" key={index}>
          <span>{note}</span>
          <button
            className="deleteBtn"
            onClick={() => deleteNote(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
