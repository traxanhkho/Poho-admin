import { useContext } from "react";
import Link from "next/link";
import { AdminContext } from "../../../context/AdminContext";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

import UserMenu from "./UserMenu";

function TopBar({ setSidebarOpen }) {
  const { topbar } = useContext(AdminContext);

  return (
    <div className="sticky top-0 z-[2] flex h-16 flex-shrink-0 bg-[#fff] shadow">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between items-center px-4">
        <div>
          {topbar.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                item.isChildren ? "text-c-gray-3" : "text-[#000] font-bold "
              } capitalize mr-2 pr-2 border-r border-solid border-c-gray-4 last:border-none hover:opacity-70`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          {/* Profile dropdown */}
          <UserMenu />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
