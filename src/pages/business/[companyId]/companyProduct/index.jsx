import Link from "next/link";
import { Menu } from "@headlessui/react";
import Tables from "../../../../components/Tables/index";
import Sidebar from "../../../../components/layouts/Sidebar";
import Avatar from "../../../../components/common/Avatar";
import Badge from "../../../../components/common/Badge";
import Dropdown from "../../../../components/common/Dropdown";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../../../context/AdminContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    _id: 1,
    imgURL:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    name: "Nước hoa bỏ túi Xmen for boss intense 18ml ",
    category: "Điện tử  - Công nghệ",
    status: "active",
  },
  {
    _id: 2,
    imgURL: "https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9",
    name: "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type C Chip DSP TWS lên 200W cao cấp Hàng ...",
    category: "Điện tử  - Công nghệ",
    status: "active",
  },
  {
    _id: 3,
    imgURL:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    name: "Nước hoa bỏ túi Xmen for boss intense 18ml ",
    category: "Điện tử  - Công nghệ",
    status: "lock",
  },
  {
    _id: 4,
    imgURL: "https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9",
    name: "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type C Chip DSP TWS lên 200W cao cấp Hàng ...",
    category: "Điện tử  - Công nghệ",
    status: "active",
  },
  {
    _id: 5,
    imgURL:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    name: "Nước hoa bỏ túi Xmen for boss intense 18ml ",
    category: "Điện tử  - Công nghệ",
    status: "lock",
  },
  {
    _id: 6,
    imgURL: "https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9",
    name: "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type C Chip DSP TWS lên 200W cao cấp Hàng ...",
    category: "Điện tử  - Công nghệ",
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
    label: "Tên sản phẩm",
  },
  {
    path: "category",
    label: "Danh mục",
  },
  {
    path: "status",
    label: "Trạng thái",
    content: (item) => <Badge active={item.status} />,
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
                  href={`/business/${item._id}/companyProduct/${item._id}`}
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Đi đến sản phẩm
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={`#`}
                  className={classNames(
                    active
                      ? " rounded-[30px] bg-c-blue-1 text-primary"
                      : "text-[black]",
                    "block px-[20px] py-[10px] text-[16px]"
                  )}
                >
                  Khóa sản phẩm
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
                  Đưa top đề xuất
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Dropdown>
    ),
  },
];

function CompanyProduct(props) {
  const { setTopbar } = useContext(AdminContext);
  useEffect(() => {
    setTopbar([
      { name: "Hồ sơ doanh nghiệp", href: "/business", isChildren: false },
      { name: "Danh sách sản phẩm", href: "#", isChildren: true },
    ]);
  }, []);
  return (
    <Sidebar>
      <Tables columns={columns} data={data} />
    </Sidebar>
  );
}

export default CompanyProduct;
