import { useState, createContext, useEffect, FC, ReactNode } from "react";
import { auth, db } from "../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { toast } from "react-toastify";
export interface UserInterface {
  uid: string;
  name: string;
  email: string;
}
export interface AuthContextInterface {
  signed: boolean;
  user: UserInterface | null;
  loadingAuth: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}
export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  async function signIn(email: string, password: string) {
    console.log(email);
    console.log(password);
    toast.success("LOGADO COM SUCESSO");
    console.log("Tentando redirecionar para home");
  }

  async function signUp(email: string, password: string, name: string) {
    try {
      setLoadingAuth(true);

      const userResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userResponse.user.uid), {
        uid: userResponse.user.uid,
        name: name,
        email: userResponse.user.email,
      });

      setUser({ name, email, uid: userResponse.user.uid });
    } catch {
      toast.error("Cadastro não realizado!");
    } finally {
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
