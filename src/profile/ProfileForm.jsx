import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileForm() {
  const { name, setName, address, setAddress } =
    useContext(ProfileContext);

  return (
    <>
      <h2>Profile Form</h2>

      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Alamat"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </>
  );
}

