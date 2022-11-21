import React, { useRef } from "react";

function CategoryModal({ setOpen, dataModal , title }) {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <h2 className="capitalize text-[18px] leading-[28px] font-bold pb-4 border-b border-solid border-c-white-1">
        { title }
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
              src={
                dataModal
                  ? dataModal.icon
                  : "/assets/images/icon/IconCategory.svg"
              }
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
    </>
  );
}

export default CategoryModal;
