import { createContext, useEffect, useState } from "react";
import { getDataUi } from "../services/fakeServices";

export const AdminContext = createContext();

function UseAdminContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [navigation, setNavigation] = useState([]);
  const [userNavigation, setUserNavigation] = useState([]);
  const [topbar, setTopbar] = useState([]);

  const data = {
    currentUser: currentUser,
    setCurrentUser,
    navigation,
    setNavigation,
    userNavigation,
    topbar,
    setTopbar,
  };

  useEffect(() => {
    setNavigation(getDataUi().navigation);
    setUserNavigation(getDataUi().userNavigation);
    setTopbar(getDataUi().topbar);
  }, []);

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default UseAdminContext;
