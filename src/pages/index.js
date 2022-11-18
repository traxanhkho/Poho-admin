import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AdminContext } from "../context/AdminContext";
import { getCategory } from "../services/fakeServices";
import Modal from "../components/common/Modal";
import Sidebar from "../components/layouts/Sidebar";
import SlideOver from "../components/SlideOver";
import Tables from "../components/Tables";

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

  useEffect(() => {
    setTopbar([{ name: "Danh Mục", href: "#", isChildren: false }]);
  }, [dataModal]);

  const handleDataModal = (id) => {
    setDataModal(getCategory(id));
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
        <button onClick={() => handleDataModal(item._id)}>chỉnh sửa</button>
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

  if (currentUser) {
    return (
      <>
        <Head>
          <title>Dashboard Admin</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://rsms.me/inter/inter.css" />
        </Head>
        <Sidebar>
          <Tables data={data} columns={columns} />
          <Modal
            open={modalOpen}
            setOpen={setModalOpen}
            dataModal={dataModal}
          />
          <SlideOver button="hidden" open={open} setOpen={setOpen} />
        </Sidebar>
      </>
    );
  }
}
