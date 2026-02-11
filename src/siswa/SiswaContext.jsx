import { createContext } from "react";
import { useImmerReducer } from "use-immer";

export const SiswaContext = createContext();

let id = 0;

function siswaReducer(draft, action) {
    switch(action.type) {
        case "ADD_SISWA":
            draft.push({id: id++, nama: action.payload.nama, umur: action.payload.umur, kelas: action.payload.kelas});
            break;

         case "DELETE_SISWA":
                 return draft.filter(siswa => siswa.id !== action.payload);

         case "UPDATE_SISWA":
            const siswa = draft.find (s => s.id === action.payload.id)
            if (siswa) {
                siswa.nama = action.payload.nama,
                siswa.umur = action.payload.umur,
                siswa.kelas = action.payload.kelas  
            }
            break;

            default:
                break;
    }
}

export function SiswaProvider({ children }) {
  const [siswas, dispatch] = useImmerReducer(siswaReducer, []);

  return (
    <SiswaContext.Provider value={{ siswas, dispatch }}>
      {children}
    </SiswaContext.Provider>
  );
}
