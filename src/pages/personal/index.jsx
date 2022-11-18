import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "@headlessui/react";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Sidebar from "../../components/layouts/Sidebar";
import Tables from "../../components/Tables";
import Avatar from "../../components/common/Avatar";
import Badge from "../../components/common/Badge";
import Dropdown from "../../components/common/Dropdown";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const data = [
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
];

const columns = [
  {
    path: "avatar",
    label: "Avatar",
    content: (item) => <Avatar avtUrl={item.avatar} />,
  },
  {
    path: "name",
    label: "Họ và tên",
  },
  {
    path: "numberPhone",
    label: "Số điện thoại",
  },
  {
    path: "email",
    label: "Email",
  },
  {
    path: "isInitial",
    label: "Hồ sơ doanh nghiệp",
    content: (item) => <Badge active={item.isInitial} />,
  },
  {
    path: "active",
    label: "Trạng thái",
    content: (item) => <Badge active={item.active} />,
  },
  {
    key: "dp",
    content: (item) => (
      <Dropdown>
        <Menu.Items className="absolute menu-item top-full right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl overflow-hidden bg-[#fff] border border-c-gray-5 shadow-lg  focus:outline-none">
          <div className="p-2">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/personal/${item._id}`}
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Xem hồ sơ DN
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/personal/${item._id}?update=true`}
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Chỉnh hồ sơ DN
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Khóa tài khoản
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Dropdown>
    ),
  },
];

export default function Home() {
  const router = useRouter();
  const { currentUser , setTopbar } = useContext(AdminContext);

  useEffect(() => {
    if (!currentUser) {
      router.push({
        pathname: "/login",
      });
    }
    setTopbar([{ name: "Hồ sơ cá nhân", href: "#", isChildren: false }]);
  }, []);

  if (currentUser) {
    return (
      <>
        <Head>
          <title>Dashboard Admin</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://rsms.me/inter/inter.css" />
        </Head>
        <Sidebar>
          <Tables columns={columns} data={data} />
        </Sidebar>
      </>
    );
  }
}
