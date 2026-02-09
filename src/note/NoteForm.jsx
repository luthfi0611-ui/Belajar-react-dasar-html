import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleClick(e) {
    e.preventDefault();
    onAdd(text);   // ✅ BUKAN onAddNote
    setText("");
  }

  return (
    <form>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </form>
  );
}
