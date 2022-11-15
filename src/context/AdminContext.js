import { current } from "@tailwindcss/ui/colors";
import { createContext, useContext, useEffect, useState } from "react";

export const AdminContext = createContext();

const dataUI = {
  navigation: [
    { _id: 1, title: "Quản lý" },
    {
      _id: 2,
      name: "Danh mục",
      href: "/",
      iconLink: "/assets/images/icon/Category.svg",
      current: false,
    },
    {
      _id: 3,
      name: "Doanh Nghiệp",
      href: "/business",
      iconLink: "/assets/images/icon/Work.svg",
      current: true,
    },
    {
      _id: 4,
      name: "Cá Nhân",
      href: "/personal",
      iconLink: "/assets/images/icon/Profile.svg",
      current: false,
    },
    { _id: 5, title: "Kiểm Duyệt" },
    {
      _id: 6,
      name: "Sản Phẩm",
      href: "/products",
      iconLink: "/assets/images/icon/Product.svg",
      current: false,
    },
    {
      _id: 7,
      name: "Thông báo",
      href: "/notication",
      iconLink: "/assets/images/icon/Notification.svg",
      current: false,
    },
    {
      _id: 8,
      name: "Báo cáo",
      href: "/report",
      iconLink: "/assets/images/icon/Warning.svg",
      current: false,
    },
  ],
  userNavigation: [
    { _id: 1, name: "Hồ sơ của bạn", href: "/personFile" },
    { _id: 2, name: "Cài đặt", href: "/setting" },
    { _id: 3, name: "Đăng xuất", href: "#", logout: true },
  ],
};

const dataUsers = [
  {
    _id: 1,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "nguyễn văn A",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 2,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "đặng Tất",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: false,
      label: "Chưa tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 3,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Phạm văn Đồng",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: false,
      label: "Chưa tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 4,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 6,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
];

const dataCompanies = [
  {
    _id: 1,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "nguyễn văn A",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 2,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "đặng Tất",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: false,
      label: "Chưa tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 3,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Phạm văn Đồng",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: false,
      label: "Chưa tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 4,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
  {
    _id: 6,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Nguyễn văn Bưởi",
    numberPhone: "0322334455",
    email: "lindsay.walton@example.com",
    profileBusiness: {
      isActive: true,
      label: "Đã tạo",
    },
    active: {
      isActive: true,
      label: "Đang hoạt động",
    },
  },
];

function UseAdminContext({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [navigation, setNavigation] = useState([]);
  const [userNavigation, setUserNavigation] = useState([]);
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);

  const data = {
    currentUser: currentUser,
    setCurrentUser,
    navigation,
    setNavigation,
    userNavigation,
    users,
    companies,
  };

  useEffect(() => {
    setNavigation(dataUI.navigation);
    setUserNavigation(dataUI.userNavigation);
    setUsers(dataUsers);
    setCompanies(dataCompanies);
  }, []);

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default UseAdminContext;
