import Link from "next/link";
import { useContext, useEffect } from "react";
import Avatar from "../../components/common/Avatar";
import Check from "../../components/common/Check";
import Heading from "../../components/common/Heading";
import Sidebar from "../../components/layouts/Sidebar";
import Tables from "../../components/Tables";
import { AdminContext } from "../../context/AdminContext";

const data = [
  {
    _id: 1,
    imgURL:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    dateInitial: "12/02/2022",
    name: "Nước hoa bỏ túi Xmen for boss intense 18ml ",
    category: "Điện tử  - Công nghệ",
    seen: true,
  },
  {
    _id: 2,
    imgURL: "https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9",
    dateInitial: "12/02/2022",
    name: "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type C Chip DSP TWS lên 200W cao cấp Hàng ...",
    category: "Điện tử  - Công nghệ",
    seen: true,
  },
  {
    _id: 3,
    imgURL:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    dateInitial: "12/02/2022",
    name: "Nước hoa bỏ túi Xmen for boss intense 18ml ",
    category: "Điện tử  - Công nghệ",
    seen: false,
  },
  {
    _id: 4,
    imgURL: "https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9",
    dateInitial: "12/02/2022",
    name: "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type C Chip DSP TWS lên 200W cao cấp Hàng ...",
    category: "Điện tử  - Công nghệ",
    seen: false,
  },
  {
    _id: 5,
    imgURL:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    dateInitial: "12/02/2022",
    name: "Nước hoa bỏ túi Xmen for boss intense 18ml ",
    category: "Điện tử  - Công nghệ",
    seen: true,
  },
  {
    _id: 6,
    imgURL: "https://cf.shopee.vn/file/3bf98a971a93bda6053cac1c572247f9",
    dateInitial: "12/02/2022",
    name: "Loa Bluetooth nghe nhạc không dây 100W công suất lớn Super Bass có cổng usb, thẻ nhớ, line 3.5mm pin 10400MAH sạc Type C Chip DSP TWS lên 200W cao cấp Hàng ...",
    category: "Điện tử  - Công nghệ",
    seen: true,
  },
];

const columns = [
  {
    path: "dateInitial",
    label: "Ngày",
  },
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
    path: "seen",
    label: "Đã xem",
    content: (item) => <Check check={item.seen} />,
  },
  {
    key: "checking",
    content: (item) => (
      <Link href={"#checking"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z"
            fill="black"
          />
        </svg>
      </Link>
    ),
  },
];

function CensorshipProduct(props) {
  const { setTopbar } = useContext(AdminContext);

  useEffect(() => {
    setTopbar([{ name: "Kiểm duyệt sản phẩm", href: "#", isChildren: false }]);
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

export default CensorshipProduct;
