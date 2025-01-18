import { useState, useEffect, FC, ReactNode } from "react";
import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Private: FC<{ children: ReactNode }> = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("Userrr", user);
      if (user) {
        setSigned(true);
      } else {
        setSigned(false);
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!signed) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default Private;
