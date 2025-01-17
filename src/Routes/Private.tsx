import { useState, useEffect, FC, ReactNode } from "react";
import { auth } from "../firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Private: FC<{ children: ReactNode }> = ({ children }) => {
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        localStorage.setItem("@detailUser", JSON.stringify(userData));
        setSigned(true);
      } else {
        setSigned(false);
      }
    });

    return () => unsub();
  }, []);

  if (!signed) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default Private;
