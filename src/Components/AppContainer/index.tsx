import { FC, ReactNode } from "react";

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppContainer;
