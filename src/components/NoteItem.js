export default function NoteItem({ note, onDelete }) {
    return(
        <li className="listItem">
          <span>{note}</span>
          <button
            className="deleteBtn"
            onClick={onDelete}
          >
            Delete
          </button>
        </li>
    )
}