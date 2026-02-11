import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const { name } = useContext(ProfileContext);

  return (
    <>
      <h2>Profile</h2>
      <p>Nama: {name}</p>
    </>
  );
}
