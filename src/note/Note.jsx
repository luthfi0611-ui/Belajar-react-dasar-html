import { useState } from "react";
export default function Note({note, onChange, Ondelete}){
    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleChangeText(e) {
        const newNote = { ...note, text: e.target.value };
        onChange(newNote)
    }

    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    function HandleChangeDone(e) {
        const newNote = { ...note, done: e.target.checked };
        onChange(newNote)
    }

    return (
        <div>
            <input type="checkbox" checked={note.done} onChange={HandleChangeDone} />
            {component}
            <button onClick={() => Ondelete(note)}>Delete</button>
        </div>
    )
}