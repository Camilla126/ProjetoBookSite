import { useState, useEffect, FC, ReactNode } from "react";
import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Private: FC<{ children: ReactNode }> = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
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
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (!signed) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default Private;
