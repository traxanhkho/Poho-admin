import { useContext, useEffect } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { AdminContext } from "../../context/AdminContext";
import Badge from "../../components/common/Badge";
import Check from "../../components/common/Check";
import Dropdown from "../../components/common/Dropdown";
import Sidebar from "../../components/layouts/Sidebar";
import Tables from "../../components/Tables";
import Heading from "../../components/common/Heading";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
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
];

const columns = [
  {
    path: "mst",
    label: "Mã Số Thuế",
  },
  {
    path: "name",
    label: "Tên Doanh Nghiệp",
  },
  {
    path: "representative",
    label: "Người Đại Diện",
  },
  {
    path: "numberPhone",
    label: "Số Điện Thoại",
  },
  {
    path: "valid",
    label: "DN Hợp Lệ",
    content: (item) => <Check check={item.valid} />,
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

function CompanyProfile(props) {
  const { setTopbar } = useContext(AdminContext);
  useEffect(() => {
    setTopbar([{ name: "Hồ sơ doanh nghiệp", href: "#", isChildren: false }]);
  }, []);
  return (
    <Sidebar>
      <div className="px-4 pt-4">
        <Heading />
      </div>
      <Tables data={data} columns={columns}></Tables>
    </Sidebar>
  );
}

export default CompanyProfile;
