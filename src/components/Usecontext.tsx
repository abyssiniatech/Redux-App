import { createContext, useState } from "react";
import UserProfile from "./Context";

type UserContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = () => {
  const [name, setName] = useState("surafel");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <UserProfile />
    </UserContext.Provider>
  );
};

export default UserProvider;
