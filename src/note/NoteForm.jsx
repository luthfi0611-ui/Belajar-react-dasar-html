import { useState, useContext } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      text,
    });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
