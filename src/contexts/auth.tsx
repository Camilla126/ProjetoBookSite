import { useState, useEffect, createContext, FC, ReactNode } from "react";
import { auth, db } from "../firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
  logOut: () => void;
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

  useEffect(() => {
    const userData = localStorage.getItem("@AuthUser");

    try {
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch {
      console.error("erro ao passar dados do usuario");
      localStorage.removeItem("@AuthUser");
    }
  }, []);

  async function signIn(email: string, password: string) {
    setLoadingAuth(true);

    try {
      const userResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docRef = doc(db, "users", userResponse.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data() as UserInterface;
        setUser(userData);
        localStorage.setItem("@AuthUser", JSON.stringify(userData));

        toast.success("Bem vindo ao BookWorms!");
      }
    } catch {
      toast.error("Email ou senha incorretos. Tente novamente.");
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signUp(email: string, password: string, name: string) {
    setLoadingAuth(true);

    try {
      const userResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = {
        uid: userResponse.user.uid,
        name,
        email: userResponse.user.email || "",
      };

      if (!userData.email) {
        throw new Error("O email do usuário não foi retornado.");
      }

      await setDoc(doc(db, "users", userResponse.user.uid), userData);

      setUser(userData);
      localStorage.setItem("@AuthUser", JSON.stringify(userData));

      toast.success("Bem vindo ao sistema!");
    } catch {
      toast.error("Erro ao cadastrar. Verifique os dados e tente novamente.");
    } finally {
      setLoadingAuth(false);
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("@AuthUser");
      toast.info("Você saiu do sistema.");
    } catch {
      toast.error("Erro ao sair do sistema. Tente novamente.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        logOut,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
