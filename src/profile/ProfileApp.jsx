import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import ProfileForm from "./ProfileForm";
import { ProfileContext } from "./ProfileContext";

export default function ProfileApp() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <ProfileContext.Provider value={{ name, setName, address, setAddress }}>
      <h1>Profile App</h1>

      <ProfileForm />
      <Profile />
      <ProfileAddress />
    </ProfileContext.Provider>
  );
}

