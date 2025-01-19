import { useState, createContext, FC, ReactNode } from "react";
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

        toast.success("Bem vindo!");
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

      setUser(userData);

      toast.success("Bem vindo ao sistema!");
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
