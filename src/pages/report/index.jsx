import { Menu } from "@headlessui/react";
import Link from "next/link";
import Dropdown from "../../components/common/Dropdown";
import Sidebar from "../../components/layouts/Sidebar";
import Tables from "../../components/Tables";
import Check from "../../components/common/Check";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Heading from "../../components/common/Heading";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    _id: 1,
    dateInitial: "12/02/2022",
    reporter: "Minh Tiến",
    subject:
      "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type",
    content: "Đăng sản phẩm không đúng sự thật",
    handled: true,
  },
  {
    _id: 2,
    dateInitial: "12/02/2022",
    reporter: "Minh Tiến",
    subject:
      "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type",
    content: "Đăng sản phẩm không đúng sự thật",
    handled: false,
  },
  {
    _id: 3,
    dateInitial: "12/02/2022",
    reporter: "Minh Tiến",
    subject:
      "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type",
    content: "Đăng sản phẩm không đúng sự thật",
    handled: true,
  },
  {
    _id: 4,
    dateInitial: "12/02/2022",
    reporter: "Minh Tiến",
    subject:
      "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type",
    content: "Đăng sản phẩm không đúng sự thật",
    handled: false,
  },
  {
    _id: 5,
    dateInitial: "12/02/2022",
    reporter: "Minh Tiến",
    subject:
      "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type",
    content: "Đăng sản phẩm không đúng sự thật",
    handled: true,
  },
  {
    _id: 6,
    dateInitial: "12/02/2022",
    reporter: "Minh Tiến",
    subject:
      "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type",
    content: "Đăng sản phẩm không đúng sự thật",
    handled: false,
  },
];

const columns = [
  {
    path: "dateInitial",
    label: "Ngày",
  },
  {
    path: "reporter",
    label: "Người báo cáo",
  },
  {
    path: "subject",
    label: "Đối tượng",
  },
  {
    path: "content",
    label: "Nội dung",
  },
  {
    path: "handled",
    label: "Xử lý",
    content: (item) => <Check check={item.handled} />,
  },
  {
    key: "checking",
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

function Report() {
  const { setTopbar } = useContext(AdminContext);

  useEffect(() => {
    setTopbar([{ name: "Báo cáo", href: "#", isChildren: false }]);
  }, []);

  return (
    <Sidebar>
      <div className="px-4 pt-4">
        <Heading />
      </div>
      <Tables columns={columns} data={data} />
    </Sidebar>
  );
}

export default Report;
