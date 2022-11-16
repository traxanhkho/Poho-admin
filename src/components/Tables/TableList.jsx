import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import Avatar from "../common/Avatar";
import Modal from "../common/Modal";
import { getCategory } from "../services/fakeServices";
import SlideOver from "../SlideOver";

function TableList(props) {
  const { listCategory } = useContext(AdminContext);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  useEffect(() => {}, [dataModal]);

  const handleDataModal = (id) => {
    setDataModal(getCategory(id));
    setModalOpen(true);
  };

  return (
    <>
      <table className="min-w-full c-table">
        <thead>
          <tr>
            {listCategory.dataHead.map((item) => (
              <th
              key={item}
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold capitalize text-c-gray-3 sm:pl-3"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {listCategory.dataBody.map((category) => (
            <tr key={category._id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  sm:pl-4">
                <div className="inline-flex w-12 h-12 mx-auto bg-c-white-1 rounded-full">
                  <img
                    src={category.icon}
                    className="m-auto"
                    alt="icon danh mục - Poho"
                  />
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 sm:w-[68%] font-medium text-sm">
                {category.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                <button onClick={() => handleDataModal(category._id)}>
                  chỉnh sửa
                </button>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                <button className="text-primary" onClick={() => setOpen(true)}>
                  xem
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={modalOpen} setOpen={setModalOpen} dataModal={dataModal} />
      <SlideOver button="hidden" open={open} setOpen={setOpen} />
    </>
  );
}

export default TableList;
