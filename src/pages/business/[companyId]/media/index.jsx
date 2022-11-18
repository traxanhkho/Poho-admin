import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useContext, useEffect } from "react";
import Avatar from "../../../../components/common/Avatar";
import Badge from "../../../../components/common/Badge";
import Dropdown from "../../../../components/common/Dropdown";
import Sidebar from "../../../../components/layouts/Sidebar";
import Tables from "../../../../components/Tables";
import { AdminContext } from "../../../../context/AdminContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    _id: 1,
    imgURL:
      "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg",
    name: "Công ty sản xuất thiết bị bảo hộ S2B",
    type: "video",
    status: "active",
  },
  {
    _id: 2,
    imgURL:
      "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg",
    name: "Công ty sản xuất thiết bị bảo hộ S2B",
    type: "video",
    status: "active",
  },

  {
    _id: 3,
    imgURL:
      "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg",
    name: "Công ty sản xuất thiết bị bảo hộ S2B",
    type: "video",
    status: "active",
  },

  {
    _id: 4,
    imgURL:
      "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg",
    name: "Công ty sản xuất thiết bị bảo hộ S2B",
    type: "video",
    status: "active",
  },

  {
    _id: 5,
    imgURL:
      "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg",
    name: "Công ty sản xuất thiết bị bảo hộ S2B",
    type: "video",
    status: "active",
  },

  {
    _id: 6,
    imgURL:
      "https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg",
    name: "Công ty sản xuất thiết bị bảo hộ S2B",
    type: "video",
    status: "active",
  },
];

const columns = [
  {
    path: "imgURL",
    label: "Hình ảnh",
    content: (item) => <Avatar avtUrl={item.imgURL} classNames="rounded-lg" />,
  },
  {
    path: "name",
    label: "Tên media",
  },
  {
    path: "type",
    label: "Phân loại",
  },
  {
    path: "status",
    label: "Trạng Thái",
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
                  href={`/business/${item._id}`}
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Xem Thông Tin
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/business/${item._id}/companyProduct`}
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Xem sản phẩm
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`/business/${item._id}/media`}
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Media
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Dropdown>
    ),
  },
];

function Media() {
  const { setTopbar } = useContext(AdminContext);

  useEffect(() => {
    setTopbar([
      { name: "Hồ sơ doanh nghiệp", href: "/business", isChildren: false },
      { name: "Media", href: "#", isChildren: true },
    ]);
  }, []);

  return (
    <Sidebar>
      <Tables data={data} columns={columns} />
    </Sidebar>
  );
}

export default Media;
