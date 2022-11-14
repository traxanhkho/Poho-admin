import { createContext, useContext, useState } from "react";

export const AdminContext = createContext();


function UseAdminContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  
  const data = {
    currentUser: currentUser,
    setCurrentUser 
  };
  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default UseAdminContext;
