import Head from "next/head";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { AdminContext } from "../context/AdminContext";
import { getCategory } from "../services/fakeServices";
import Modal from "../components/common/Modal";
import Sidebar from "../components/layouts/Sidebar";
import SlideOver from "../components/SlideOver";
import Tables from "../components/Tables";
import Heading from "../components/common/Heading";
import CategoryModal from "../components/CategoryModal";

const data = [
  {
    _id: 1,
    icon: "/assets/images/icon/IconCategory.svg",
    name: "Tã/bỉm quần Bobby Mega Jumbo XL92 - Lõi nén thần kì 3mm - Siêu mỏng khô thoáng bất ngờ",
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
];

export default function Home() {
  const router = useRouter();
  const { currentUser, setTopbar } = useContext(AdminContext);

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [title,setTitle] = useState("Thêm danh mục") ;

  useEffect(() => {
    setTopbar([{ name: "Danh Mục", href: "#", isChildren: false }]);
  }, [dataModal]);

  const handleDataModal = (id) => {
    setDataModal(getCategory(id));
    setTitle("Chỉnh sửa danh mục") ; 
    setModalOpen(true);
  };

  const columns = [
    {
      path: "icon",
      label: "Hình ảnh",
      content: (item) => (
        <div className="inline-flex w-12 h-12 mx-auto bg-c-white-1 rounded-full">
          <img src={item.icon} className="m-auto" alt="icon danh mục - Poho" />
        </div>
      ),
    },
    {
      path: "name",
      label: "Tên danh mục",
    },
    {
      key: "edit",
      content: (item) => (
        <button onClick={() => handleDataModal(item._id)}>Chỉnh sửa</button>
      ),
    },
    {
      key: "view",
      content: (item) => (
        <button className="text-primary" onClick={() => setOpen(true)}>
          xem
        </button>
      ),
    },
  ];

  useEffect(() => {
    if (!currentUser) {
      router.push({
        pathname: "/login",
      });
    }
  }, []);
  const renderAddCategory = () => (
    <button
      type="button"
      onClick={() => {
        setTitle("Thêm danh mục");
        setModalOpen(true);
      }}
      className="capitalize font-medium text-[#fff] hover:opacity-80  h-10 w-40 rounded-[30px] bg-primary"
    >
      Thêm danh mục
    </button>
  );

  if (currentUser) {
    return (
      <>
        <Head>
          <title>Dashboard Admin</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://rsms.me/inter/inter.css" />
        </Head>
        <Sidebar>
          <div className="px-4 pt-4">
            <Heading right={[renderAddCategory]} />
          </div>
          <Tables data={data} columns={columns} />
          <Modal open={modalOpen}  setOpen={setModalOpen}>
            <CategoryModal title={title} setOpen={setModalOpen} dataModal={dataModal} />
          </Modal>
          <SlideOver button="hidden" open={open} setOpen={setOpen} />
        </Sidebar>
      </>
    );
  }
}
