import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function UserMenu({ userNavigation }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none">
        <span className="sr-only">Open user menu</span>
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg"
            alt="ảnh đại diện"
          />
          <h4 className="capitalize font-bold">admin</h4>
          <i
            className="fa fa-angle-down font-bold text-2xl"
            aria-hidden="true"
          ></i>
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#fff] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? "bg-c-gray-2" : "",
                    "block px-4 py-2 text-md text-gray-700 hover:bg-c-blue-1 "
                  )}
                >
                  {item.name}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;
