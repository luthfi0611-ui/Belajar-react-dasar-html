import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList";

let id = 4;

const initialNotes = [
  { id: 0, text: "Learn HTML", done: false },
  { id: 1, text: "Learn CSS", done: false },
  { id: 2, text: "Learn Javascript", done: false },
  { id: 3, text: "Learn React", done: false }
];

function notesReducer(draft, action) {
  if (action.type === "ADD_NOTE") {
    draft.push({
      id: id++,
      text: action.text,
      done: false
    });

  } else if (action.type === "CHANGE_NOTE") {
    const index = draft.findIndex(
      note => note.id === action.id
    );

    if (index !== -1) {
      draft[index].text = action.text;
      draft[index].done = action.done;
    }

  } else if (action.type === "DELETE_NOTE") {
    const index = draft.findIndex(
      note => note.id === action.id
    );

    if (index !== -1) {
      draft.splice(index, 1);
    }
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(
    notesReducer,
    initialNotes
  );

  function handleAddNote(text) {  
    dispatch({
      type: "ADD_NOTE",
      text
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAdd={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
