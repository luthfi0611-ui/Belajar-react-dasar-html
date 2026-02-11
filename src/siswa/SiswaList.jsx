import { useContext } from "react";
import { SiswaContext } from "./SiswaContext";

export default function SiswaList() {
  const { siswas, dispatch } = useContext(SiswaContext);

  function handleDelete(id) {
    dispatch({
      type: "DELETE_SISWA",
      payload: id
    });
  }

  function handleEdit(siswa) {
    const nama = prompt("Nama baru:", siswa.nama);
    const umur = prompt("Umur baru:", siswa.umur);
    const kelas = prompt("Kelas baru:", siswa.kelas);

    if (nama && umur && kelas) {
      dispatch({
        type: "UPDATE_SISWA",
        payload: { id: siswa.id, nama, umur, kelas }
      });
    }
  }

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {siswas.map(siswa => (
          <tr key={siswa.id}>
            <td>{siswa.nama}</td>
            <td>{siswa.umur}</td>
            <td>{siswa.kelas}</td>
            <td>
             <button className="edit" onClick={() => handleEdit(siswa)}>
  Edit
</button>

<button className="delete" onClick={() => handleDelete(siswa.id)}>
  Hapus
</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
