import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (item.trim() === "") return; // biar gak kosong
    onSubmit(item);
    setItem("");
  }

  return (
    <>
      <h1>Create Task</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Tambah task..."
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

