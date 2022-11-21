import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "../common/Modal";
import Pagination from "../common/Pagination";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableHeading from "./TableHeading";

export default function Tables({ children, data, columns }) {
  const router = useRouter();
  const [search, setSearch] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") setSearch(false);
  });

  return (
    <>
      <div className="px-4 sm:p-4 bg-[#fff] rounded-2xl">
        {/* <TableHeading search={search} setOpen={setOpen} open={open} /> */}
        <div className=" flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                <table className="min-w-full c-table">
                  <TableHeader data={data} columns={columns} />
                  <TableBody data={data} columns={columns} />
                </table>
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
