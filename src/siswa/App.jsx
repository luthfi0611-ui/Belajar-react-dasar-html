import { SiswaProvider } from "./SiswaContext";
import SiswaForm from "./SiswaForm";
import SiswaList from "./SiswaList";
import "./App.css";

export default function App() {
  return (
    <SiswaProvider>
      <div className="container">
        <h1>Manajemen Data Siswa Kece 😎</h1>
        <SiswaForm />
        <SiswaList />
      </div>
    </SiswaProvider>
  );
}
