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

const dataUsers = {
  dataHead: [
    "Avatar",
    "Họ và tên",
    "Số điện thoại",
    "Email",
    "Hồ sơ doanh nghiệp",
    "Trạng thái",
    "",
  ],
  dataBody: [
    {
      _id: 1,
      avatar:
        "https://hinhgaixinh.com/wp-content/uploads/2021/05/20210415-thai-thao-nguyen-1-835x1113.jpg",
      name: "Ngọc Bích",
      numberPhone: "0322334455",
      email: "lindsay.walton@example.com",
      isInitial: "initial",
      active: "active",
    },
    {
      _id: 2,
      avatar:
        "https://image-us.eva.vn/upload/1-2021/images/2021-03-02/hot-girl-2k2-so-huu-ngoai-hinh-long-lanh-than-hinh-phong-phao-lam-chang-ai-doan-duoc-tuoi-photo-1-16145812247111241076972-1614698938-787-width600height800.jpg",
      name: "Minh Châu",
      numberPhone: "0322334455",
      email: "lindsay.walton@example.com",
      isInitial: "uninitial",
      active: "active",
    },
    {
      _id: 3,
      avatar:
        "https://hinhgaixinh.com/wp-content/uploads/2021/05/20210415-thai-thao-nguyen-1-835x1113.jpg",
      name: "Ái Nhi",
      numberPhone: "0322334455",
      email: "lindsay.walton@example.com",
      isInitial: "initial",
      active: "active",
    },
    {
      _id: 4,
      avatar:
        "https://image-us.eva.vn/upload/1-2021/images/2021-03-02/hot-girl-2k2-so-huu-ngoai-hinh-long-lanh-than-hinh-phong-phao-lam-chang-ai-doan-duoc-tuoi-photo-1-16145812247111241076972-1614698938-787-width600height800.jpg",
      name: "Quỳnh Hương",
      numberPhone: "0322334455",
      email: "lindsay.walton@example.com",
      isInitial: "uninitial",
      active: "active",
    },
    {
      _id: 5,
      avatar:
        "https://hinhgaixinh.com/wp-content/uploads/2021/05/20210415-thai-thao-nguyen-1-835x1113.jpg",
      name: "Bảo Ngọc",
      numberPhone: "0322334455",
      email: "lindsay.walton@example.com",
      isInitial: "initial",
      active: "active",
    },
    {
      _id: 6,
      avatar:
        "https://image-us.24h.com.vn/upload/1-2021/images/2021-03-18/gia-nhap-duong-dua-bikini-tieu-thu-ha-noi-chiem-tron-song-bb9-5639403-1616037657-573-width800height999.jpg",
      name: "Bích Thảo",
      numberPhone: "0322334455",
      email: "lindsay.walton@example.com",
      isInitial: "uninitial",
      active: "active",
    },
  ],
};

const dataCompanies = {
  dataHead: [
    "Mã số thuế",
    "Tên doanh nghiệp",
    "Người đại diện",
    "Số điện thoại",
    "DN hợp lệ",
    "Trạng thái",
    "",
  ],
  dataBody: [
    {
      _id: 1,
      mst: "MST13123214",
      name: "Công ty sản xuất thiết bị bảo hộ S2B",
      representative: "lindsay",
      numberPhone: "(702) 555-0122",
      valid: false,
      status: "active",
      dropdown: true,
    },
    {
      _id: 2,
      mst: "MST13123214",
      name: "Công ty sản xuất thiết bị bảo hộ S2B",
      representative: "lindsay",
      numberPhone: "(702) 555-0122",
      valid: true,
      status: "lock",
      dropdown: true,
    },
    {
      _id: 3,
      mst: "MST13123214",
      name: "Công ty sản xuất thiết bị bảo hộ S2B",
      representative: "lindsay",
      numberPhone: "(702) 555-0122",
      valid: true,
      status: "active",
      dropdown: true,
    },
    {
      _id: 4,
      mst: "MST13123214",
      name: "Công ty sản xuất thiết bị bảo hộ S2B",
      representative: "lindsay",
      numberPhone: "(702) 555-0122",
      valid: true,
      status: "lock",
      dropdown: true,
    },
    {
      _id: 5,
      mst: "MST13123214",
      name: "Công ty sản xuất thiết bị bảo hộ S2B",
      representative: "lindsay",
      numberPhone: "(702) 555-0122",
      valid: false,
      status: "lock",
      dropdown: true,
    },
    {
      _id: 6,
      mst: "MST13123214",
      name: "Công ty sản xuất thiết bị bảo hộ S2B",
      representative: "lindsay",
      numberPhone: "(702) 555-0122",
      valid: false,
      status: "active",
      dropdown: true,
    },
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

export const getDataUi = () => {
  const data = produce(dataUI, (draft) => draft);

  return data;
};

export const getDataUsers = () => {
  const data = produce(dataUsers, (draft) => draft);

  return data;
};

export const getDataCompanies = () => {
  const data = produce(dataCompanies, (draft) => draft);

  return data;
};

export const getDataListCategory = () => {
  const data = produce(listCategory, (draft) => draft);

  return data;
};

export const getCategory = (id) => {
  const index = listCategory.dataBody.findIndex((item) => item._id === id);
  
  return produce(listCategory.dataBody[index], (draft) => draft);
};
