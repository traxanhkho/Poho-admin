import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";


export default function Modal({open , setOpen , dataModal}) {
  // const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open || false} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-c-gray-7 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#fff] px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <h2 className="capitalize text-[18px] leading-[28px] font-bold pb-4 border-b border-solid border-c-white-1">
                    Thêm danh mục
                  </h2>
                  <div>
                    <h4 className="text-4 font-medium capitalize py-4 leading-[20px]">
                      Icon danh mục
                    </h4>
                    <span className="flex">
                      <label
                        htmlFor="chossesImg"
                        className="inline-flex w-12 h-12 mx-auto cursor-pointer overflow-hidden bg-c-white-1 rounded-full"
                      >
                        <img
                          src={dataModal ? dataModal.icon : "/assets/images/icon/IconCategory.svg"}
                          alt="icon danh mục - Poho"
                          className="m-auto"
                        />
                      </label>
                      <input
                        type="file"
                        id="chossesImg"
                        className="hidden"
                        accept="image/*"
                      />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-4 font-medium capitalize py-4 leading-[20px]">
                      Tên danh mục
                    </h4>
                    <input
                      type="text"
                      className="block w-full px-3 py-2.5  rounded-xl bg-c-white-1 shadow-sm border-none sm:text-sm"
                      placeholder="Nhập tên danh mục..."
                      defaultValue={dataModal ? dataModal.name : ""}
                    />
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center h-10 items-center rounded-[30px]  bg-c-white-1 px-2.5 py-1.5 text-4 leading-[22px] font-medium text-c-gray-3 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Hủy
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center h-10 items-center rounded-[30px]  bg-primary px-2.5 py-1.5 text-4 leading-[22px] font-medium text-[#fff] shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      Lưu
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
