import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  function signIn(email, passsword) {
    console.log(email);
    console.log(passsword);
    alert("LOGADO COM SUCESOOOOO");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
