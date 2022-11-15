import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../context/AdminContext";

function Nav() {
  const { navigation, setNavigation } = useContext(AdminContext);
  const router = useRouter();
  const allNav = [...navigation];

  useEffect(() => {
    let str = "/";
    for (let i = 1; i < router.asPath.length; i++) {
      let path = router.asPath.charAt(i);
      if(path === "/") return ; 
      str += path;
    }
    console.log(str)
    switch (str) {
      case "/": {
        setCurrentLink(2);
        break;
      }
      case "/business": {
        setCurrentLink(3);
        break;
      }
      case "/personal": {
        setCurrentLink(4);
        break;
      }
      default:
        setCurrentLink(2);
    }
  }, []);

  const setCurrentLink = (id) => {
    const newList = allNav.map((item) =>
      item._id == id ? { ...item, current: true } : { ...item, current: false }
    );

    setNavigation(newList);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <nav className="flex-1 space-y-1 px-2 pb-4">
      {navigation.map((item) => {
        if (item.title)
          return (
            <h4 key={item._id} className="text-primary">
              {item.title}
            </h4>
          );

        return (
          <Link
            key={item._id}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-c-gray-2 text-[#fff]"
                : "text-indigo-100 text-c-gray-1 hover:bg-c-gray-2",
              "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            )}
          >
            <img
              src={item.iconLink}
              className={`mr-3 h-6 w-6 flex-shrink-0 + ${
                item.current ? "" : "opacity-50"
              }`}
              aria-hidden="true"
              alt="Poho - icon dashboard"
            />

            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
