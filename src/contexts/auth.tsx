import { useState, useEffect, createContext, FC, ReactNode } from "react";
import { auth, db } from "../firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { toast } from "react-toastify";

export interface UserInterface {
  uid: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthContextInterface {
  signed: boolean;
  user: UserInterface | null;
  loadingAuth: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("@AuthUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  async function signIn(email: string, password: string) {
    try {
      setLoadingAuth(true);

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

      localStorage.setItem("@AuthUser", JSON.stringify(userData));

      toast.success("Bem vindo ao sistema!");
    } finally {
      setLoadingAuth(false);
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("@AuthUser");
    toast.info("Você saiu do sistema.");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        signOut,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
