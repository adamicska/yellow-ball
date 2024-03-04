import { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(AuthContext);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
