import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import UserMenu from "./UserMenu";

function TopBar({ setSidebarOpen }) {
  const router = useRouter();
  const [title, setTitle] = useState("");

  useEffect(() => {
    let str = "/";
    for (let i = 1; i < router.asPath.length; i++) {
      let path = router.asPath.charAt(i);
      if (path === "/") break;
      str += path;
    }
    
    switch (str) {
      case "/": {
        setTitle("Danh Mục");
        break;
      }
      case "/business": {
        setTitle("Hồ sơ doanh nghiệp");
        break;
      }
      case "/personal": {
        setTitle("Hồ sơ cá nhân");
        break;
      }
      default:
        setTitle("Danh mục");
    }
  }, []);

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-[#fff] shadow">
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
          <h4 className="font-bold capitalize">{title}</h4>
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
