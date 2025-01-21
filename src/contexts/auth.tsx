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
}

export interface AuthContextInterface {
  signed: boolean;
  user: UserInterface | null;
  loadingAuth: boolean;
  errors: { email?: string; password?: string; name?: string };
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
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    name?: string;
  }>({});

  useEffect(() => {
    const userData = localStorage.getItem("@AuthUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const validate = (email: string, password: string, name?: string) => {
    setErrors({});
    const newErrors: { email?: string; password?: string; name?: string } = {};

    if (name !== undefined && name.trim() === "") {
      newErrors.name = "Campo obrigatório.";
    }

    if (!email) {
      newErrors.email = "Campo obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido.";
    }

    if (!password) {
      newErrors.password = "Campo obrigatório.";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  async function signIn(email: string, password: string) {
    if (!validate(email, password)) return;
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
    if (!validate(email, password, name)) return;
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
      localStorage.setItem("@AuthUser", JSON.stringify(userData));

      toast.success("Bem vindo ao sistema!");
    } catch {
      toast.error("Erro ao cadastrar. Verifique os dados e tente novamente.");
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
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
