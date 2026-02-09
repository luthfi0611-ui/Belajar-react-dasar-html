import { useImmerReducer } from "use-immer";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

let idCounter = 1;

const initialState = [];

function reducer(draft, action) {
  switch (action.type) {
    case "ADD_DATA":
      draft.push({
        id: idCounter++,
        nama: action.payload.nama,
        umur: action.payload.umur,
        kelas: action.payload.kelas,
      });
      break;

    case "DELETE_DATA":
      return draft.filter(item => item.id !== action.payload);

    case "EDIT_DATA":
      const student = draft.find(item => item.id === action.payload.id);
      if (student) {
        student.nama = action.payload.nama;
        student.umur = action.payload.umur;
        student.kelas = action.payload.kelas;
      }
      break;

    default:
      break;
  }
}

export default function StudentApp(     ) {
  const [students, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>Data Siswa</h1>

      <StudentForm dispatch={dispatch} />
      <StudentTable students={students} dispatch={dispatch} />
    </div>
  );
}
