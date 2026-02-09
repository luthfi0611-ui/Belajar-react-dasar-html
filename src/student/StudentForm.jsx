import { useState } from "react";

export default function StudentForm({ dispatch }) {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "ADD_DATA",
      payload: { nama, umur, kelas },
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        placeholder="Umur"
        value={umur}
        onChange={(e) => setUmur(e.target.value)}
      />
      <input
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
}
