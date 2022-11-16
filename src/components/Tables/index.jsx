import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import Pagination from "../common/Pagination";
import Search from "../common/Search";

export default function Tables({ children }) {
  const router = useRouter();
  const [search, setSearch] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") setSearch(false);
  });
  return (
    <>
      <div className="px-4 sm:p-4 bg-[#fff] rounded-2xl">
        <div className="sm:flex sm:items-center sm:h-10">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Danh Sách</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:flex-none">
            {search ? (
              <Search />
            ) : (
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="capitalize font-medium text-[#fff] hover:opacity-80  h-10 w-40 rounded-[30px] bg-primary"
              >
                Thêm danh mục
              </button>
            )}
          </div>
        </div>
        <div className="my-4 flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                {children}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}
