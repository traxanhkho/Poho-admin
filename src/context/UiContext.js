import { createContext, useContext, useEffect, useState } from "react";

export const uiContext = createContext();

const navigationData = [
  { title: "Quản lý" },
  {
    name: "Doanh mục",
    href: "#",
    iconLink: "./assets/images/icon/Category.svg",
    current: true,
  },
  {
    name: "Doanh Nghiệp",
    href: "#",
    iconLink: "./assets/images/icon/Work.svg",
    current: false,
  },
  {
    name: "Cá Nhân",
    href: "#",
    iconLink: "./assets/images/icon/Profile.svg",
    current: false,
  },
  { title: "Kiểm Duyệt" },
  {
    name: "Sản Phẩm",
    href: "#",
    iconLink: "./assets/images/icon/Product.svg",
    current: false,
  },
  {
    name: "Thông báo",
    href: "#",
    iconLink: "./assets/images/icon/Notification.svg",
    current: false,
  },
  {
    name: "Báo cáo",
    href: "#",
    iconLink: "./assets/images/icon/Warning.svg",
    current: false,
  },
];

const userNavigationData = [
  { name: "Hồ sơ của bạn", href: "#" },
  { name: "Cài đặt", href: "#" },
  { name: "Đăng xuất", href: "#", logout: true },
];

export default function useUiContext({ children }) {
  // const ui = useContext(uiContext) ;
  const [navigation, setNavigation] = useState();
  const [userNavigation, setUserNavigation] = useState();

  useEffect(()=>{
    setNavigation(navigationData) ; 
    setUserNavigation(userNavigationData) ; 
  },[])

  const data = {
    navigation,
    setNavigation,
    userNavigation,
  };

  return <uiContext.Provider value={data}>{children}</uiContext.Provider>;
}
