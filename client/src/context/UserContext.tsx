import { createContext, useState } from "react";

export const userContext = createContext({});
export const UserContext = ({ children }) => {
  const [userData, setUserData] = useState("");

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
};
