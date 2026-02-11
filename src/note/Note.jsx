import { useState, useContext } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const dispatch = useContext(NotesDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeText(e) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: e.target.value,
    });
  }

  function handleChangeDone(e) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      done: e.target.checked,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  let component;
  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
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
