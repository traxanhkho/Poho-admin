import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AdminContext } from "../../../context/AdminContext";
import { useRouter } from "next/router";

function UserMenu({ userNavigation }) {
  const router = useRouter(AdminContext);
  const { currentUser, setCurrentUser } = useContext(AdminContext);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const onLogout = () => {
    setCurrentUser(null);
    router.push("/login");
  };

  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none">
        <span className="sr-only">Open user menu</span>
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src={currentUser.avatar}
            alt="ảnh đại diện"
          />
          <h4 className="capitalize font-bold">{currentUser.name}</h4>
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
            <a
              href={item.href}
              className={
                "block px-4 py-2 text-md text-gray-700 hover:bg-c-blue-1 "
              }
              onClick={item.logout && (() => onLogout())}
            >
              {item.name}
            </a>
            // <Menu.Item key={item.name}>
            //   {({ active }) => (
            //     <a
            //       href={item.href}
            //       className={classNames(
            //         active ? "bg-c-gray-2" : "",
            //         "block px-4 py-2 text-md text-gray-700 hover:bg-c-blue-1 "
            //       )}
            //       onClick={() => onLogout()}
            //     >
            //       {item.name}
            //     </a>
            //   )}
            // </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserMenu;

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
// }
