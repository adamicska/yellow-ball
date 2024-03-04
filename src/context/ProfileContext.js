import { useState, createContext } from "react";

const ProfileContext = createContext();

const ProfileProvider = (props) => {
  const [profile, setProfile] = useState(ProfileContext);

  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
