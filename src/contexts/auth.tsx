import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  function signIn(email, password) {
    console.log(email);
    console.log(password);
    alert("LOGADO COM SUCESOOOOO");
  }

  function signUp(email, password, name) {
    console.log(name);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
