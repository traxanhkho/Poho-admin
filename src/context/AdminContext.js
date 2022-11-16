import { createContext, useContext, useEffect, useState } from "react";
import {
  getDataCompanies,
  getDataListCategory,
  getDataUi,
  getDataUsers,
} from "../components/services/fakeServices";

export const AdminContext = createContext();

function UseAdminContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [navigation, setNavigation] = useState([]);
  const [userNavigation, setUserNavigation] = useState([]);
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [listCategory, setListCategory] = useState([]);

  const data = {
    currentUser: currentUser,
    setCurrentUser,
    navigation,
    setNavigation,
    userNavigation,
    users,
    companies,
    listCategory,
  };

  useEffect(() => {
    setNavigation(getDataUi().navigation);
    setUserNavigation(getDataUi().userNavigation);
    setUsers(getDataUsers());
    setCompanies(getDataCompanies());
    setListCategory(getDataListCategory());
  }, []);

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default UseAdminContext;
