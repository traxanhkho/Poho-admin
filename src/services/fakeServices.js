import produce from "immer";

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
      href: "/censorshipProduct",
      iconLink: "/assets/images/icon/Product.svg",
      current: false,
    },
    {
      _id: 7,
      name: "Thông báo",
      href: "/notification",
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
  topbar: [
    { name: 'Danh Mục', href: '#', isChildren: false },
    // { name: 'Danh mục con 1', href: '#children1', isChildren: true },
    // { name: 'Danh mục con 2', href: '#children2', isChildren: true },
  ],
};

const listCategory = {
  dataHead: ["Hình ảnh", "Tên danh mục", "", ""],
  dataBody: [
    {
      _id: 1,
      icon: "/assets/images/icon/IconCategory.svg",
      name: "Đồ chơi - Mẹ & bé",
    },
    {
      _id: 2,
      icon: "/assets/images/icon/IconCategory.svg",
      name: "Đồ chơi - Mẹ & bé",
    },
    {
      _id: 3,
      icon: "/assets/images/icon/IconCategory.svg",
      name: "Đồ chơi - Mẹ & bé",
    },
    {
      _id: 4,
      icon: "/assets/images/icon/IconCategory.svg",
      name: "Đồ chơi - Mẹ & bé",
    },
    {
      _id: 5,
      icon: "/assets/images/icon/IconCategory.svg",
      name: "Đồ chơi - Mẹ & bé",
    },
    {
      _id: 6,
      icon: "/assets/images/icon/IconCategory.svg",
      name: "Đồ chơi - Mẹ & bé",
    },
  ],
};

export const getDataUi = () => produce(dataUI, (draft) => draft);

export const getCategory = (id) => {
  const index = listCategory.dataBody.findIndex((item) => item._id === id);

  return produce(listCategory.dataBody[index], (draft) => draft);
};
