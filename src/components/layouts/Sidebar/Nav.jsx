import React from "react";

function Nav({ navigation }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <nav className="flex-1 space-y-1 px-2 pb-4">
      {navigation.map((item) => {
        if (item.title)
          return (
            <h4 key={item.title} className="text-primary">
              {item.title}
            </h4>
          );
        return (
          <a
            key={item.name}
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
          </a>
        );
      })}
    </nav>
  );
}

export default Nav;
