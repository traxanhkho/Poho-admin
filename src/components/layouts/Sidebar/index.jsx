import { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import TopBar from "./TopBar";
import MenuDialog from "./MenuDialog";

const navigation = [
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

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#", logout: true },
];

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
