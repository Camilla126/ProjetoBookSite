import { FC, ReactNode } from "react";
import styles from "./style.module.scss";

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.Main}>{children}</div>;
};

export default AppContainer;
