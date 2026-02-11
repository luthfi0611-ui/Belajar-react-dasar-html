import { useContext, useState } from "react";
import { SiswaContext } from "./SiswaContext";

export default function SiswaForm() {
  const { dispatch } = useContext(SiswaContext);

  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_SISWA",
      payload: { nama, umur, kelas }
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={e => setNama(e.target.value)}
      />
      <input
        type="number"
        placeholder="Umur"
        value={umur}
        onChange={e => setUmur(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kelas"
        value={kelas}
        onChange={e => setKelas(e.target.value)}
      />
    <button type="submit" className="btn-tambah">
  Tambah
</button>
    </form>
  );
}
