import { useEffect, useState } from "react";
import MenuSidebar from "./MenuSidebar";
import TopBar from "./TopBar";
import MenuDialog from "./MenuDialog";

const dataUI = {
  navigation: [
    { _id : 1,  title: "Quản lý" },
    {
      _id : 2 , 
      name: "Doanh mục",
      href: "/",
      iconLink: "./assets/images/icon/Category.svg",
      current: true,
    },
    {
      _id : 3 , 
      name: "Doanh Nghiệp",
      href: "/business",
      iconLink: "./assets/images/icon/Work.svg",
      current: false,
    },
    {
      _id : 4 , 
      name: "Cá Nhân",
      href: "/users",
      iconLink: "./assets/images/icon/Profile.svg",
      current: false,
    },
    { _id : 5 ,  title: "Kiểm Duyệt" },
    {
      _id : 6 , 
      name: "Sản Phẩm",
      href: "/products",
      iconLink: "./assets/images/icon/Product.svg",
      current: false,
    },
    {
      _id : 7 , 
      name: "Thông báo",
      href: "/notication",
      iconLink: "./assets/images/icon/Notification.svg",
      current: false,
    },
    {
      _id : 8 , 
      name: "Báo cáo",
      href: "/report",
      iconLink: "./assets/images/icon/Warning.svg",
      current: false,
    },
  ],
  userNavigation: [
    { _id : 1 ,  name: "Hồ sơ của bạn", href: "/personFile" },
    { _id : 2 , name: "Cài đặt", href: "/setting" },
    { _id : 3 , name: "Đăng xuất", href: "#", logout: true },
  ],
};

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState();
  const [userNavigation, setUserNavigation] = useState();

  useEffect(() => {
    setNavigation(dataUI.navigation);
    setUserNavigation(dataUI.userNavigation);
  }, []);

  if (navigation && userNavigation) {
    return (
      <>
        <div className="sidebar-section sm:min-h-screen ">
          <MenuDialog
            navigation={navigation}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          <MenuSidebar navigation={navigation} />
          <div className="flex flex-1 flex-col md:pl-64">
            <TopBar
              userNavigation={userNavigation}
              setSidebarOpen={setSidebarOpen}
            />

            <main>{children}</main>
          </div>
        </div>
      </>
    );
  }
}
