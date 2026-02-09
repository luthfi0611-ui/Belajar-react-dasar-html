    import Swal from "sweetalert2";
    export default function StudentTable({ students, dispatch }) {
    function handleEdit(student) {
        Swal.fire({
        title: "Edit Data Siswa",
        html: `
            <input id="nama" class="swal2-input" value="${student.nama}">
            <input id="umur" type="number" class="swal2-input" value="${student.umur}">
            <input id="kelas" class="swal2-input" value="${student.kelas}">
        `,
        showCancelButton: true,
        confirmButtonText: "Simpan",
        cancelButtonText: "Batal",
        preConfirm: () => ({
            nama: document.getElementById("nama").value,
            umur: document.getElementById("umur").value,
            kelas: document.getElementById("kelas").value,
        }),
        }).then(res => {
        if (res.isConfirmed) {
            dispatch({
            type: "EDIT_DATA",
            payload: { id: student.id, ...res.value },
            });

            Swal.fire({
            icon: "success",
            title: "Data diperbarui",
            timer: 1200,
            showConfirmButton: false,
            });
        }
        });
    }

    function handleDelete(id) {
        Swal.fire({
        title: "Yakin hapus?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        confirmButtonText: "Hapus",
        }).then(res => {
        if (res.isConfirmed) {
            dispatch({ type: "DELETE_DATA", payload: id });
            Swal.fire({
            icon: "success",
            title: "Terhapus",
            timer: 1000,
            showConfirmButton: false,
            });
        }
        });
    }

    return (
        <table>
        <thead>
            <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kelas</th>
            <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            {students.map((s, i) => (
            <tr key={s.id}>
                <td>{i + 1}</td>
                <td>{s.nama}</td>
                <td>{s.umur}</td>
                <td>{s.kelas}</td>
                <td>
                <button className="edit" onClick={() => handleEdit(s)}>
                    Edit
                </button>
                <button className="delete" onClick={() => handleDelete(s.id)}>
                    Hapus
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
    }
