import { useState, createContext, FC, ReactNode, useEffect } from "react";
import { auth, db } from "../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
  const saveUserToLocalStorage = (userData: UserInterface) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const loadUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

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
      const userData = {
        uid: userResponse.user.uid,
        name,
        email: userResponse.user.email!,
      };

      await setDoc(doc(db, "users", userResponse.user.uid), userData);

      setUser(userData);
      saveUserToLocalStorage(userData);
      toast.success("Cadastro realizado com sucesso!");
    } catch {
      toast.error("Erro ao cadastrar!");
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
