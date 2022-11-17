import { createContext, useContext, useEffect, useState } from "react";
import {
  getCensorshipProduct,
  getDataCompanies,
  getDataCompanyProducts,
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
  const [companyProducts, setCompanyProducts] = useState(null);
  const [censorshipProduct, setCensorshipProduct] = useState(null);

  const data = {
    currentUser: currentUser,
    setCurrentUser,
    navigation,
    setNavigation,
    userNavigation,
    users,
    companies,
    listCategory,
    companyProducts,
    censorshipProduct,
  };

  useEffect(() => {
    setNavigation(getDataUi().navigation);
    setUserNavigation(getDataUi().userNavigation);
    setUsers(getDataUsers());
    setCompanies(getDataCompanies());
    setListCategory(getDataListCategory());
    setCompanyProducts(getDataCompanyProducts());
    setCensorshipProduct(getCensorshipProduct());
  }, []);

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default UseAdminContext;
