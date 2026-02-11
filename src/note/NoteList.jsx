import Note from "./Note";
import { useContext } from "react";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NotesContext);

  return (
    <>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          component={note.text}
        />
      ))}
    </>
  );
}
