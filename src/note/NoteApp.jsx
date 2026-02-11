import { useContext } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note, component }) {
  const dispatch = useContext(NotesDispatchContext);

  function handleChangeDone() {
    dispatch({
      type: "TOGGLE_NOTE",
      id: note.id,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}

