import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import Badge from "../common/Badge";
import Dropdown from "../common/Dropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TableCompany() {
  const { companies } = useContext(AdminContext);

  if (companies.length !== 0) {
    return (
      <table className="min-w-full c-table">
        <thead>
          <tr>
            {companies.dataHead.map((item) => (
              <th
                key={item}
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold capitalize text-c-gray-3 sm:pl-3"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {companies.dataBody.map((company) => (
            <tr key={company._id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-4">
                {company.mst}
              </td>
              <td className="whitespace-nowrap px-3 py-4 font-medium text-sm">
                {company.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                {company.representative}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                {company.numberPhone}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-center font-medium">
                {company.valid ? (
                  <svg
                    width="23"
                    height="14"
                    className="mx-auto"
                    viewBox="0 0 23 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.765 1.00439C16.375 0.614387 15.745 0.614387 15.355 1.00439L9.71498 6.64439L11.125 8.05439L16.765 2.40439C17.145 2.02439 17.145 1.38439 16.765 1.00439ZM21.005 0.994387L11.125 10.8744L7.64498 7.40439C7.25498 7.01439 6.62498 7.01439 6.23498 7.40439C5.84498 7.79439 5.84498 8.42439 6.23498 8.81439L10.415 12.9944C10.805 13.3844 11.435 13.3844 11.825 12.9944L22.415 2.41439C22.805 2.02439 22.805 1.39439 22.415 1.00439H22.405C22.025 0.604387 21.395 0.604387 21.005 0.994387ZM0.58498 8.82439L4.76498 13.0044C5.15498 13.3944 5.78498 13.3944 6.17498 13.0044L6.87498 12.3044L1.99498 7.40439C1.60498 7.01439 0.97498 7.01439 0.58498 7.40439C0.19498 7.79439 0.19498 8.43439 0.58498 8.82439Z"
                      fill="#1E5BEE"
                    />
                  </svg>
                ) : (
                  <svg
                    width="23"
                    height="14"
                    className="mx-auto"
                    viewBox="0 0 23 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.765 1.00439C16.375 0.614387 15.745 0.614387 15.355 1.00439L9.71498 6.64439L11.125 8.05439L16.765 2.40439C17.145 2.02439 17.145 1.38439 16.765 1.00439ZM21.005 0.994387L11.125 10.8744L7.64498 7.40439C7.25498 7.01439 6.62498 7.01439 6.23498 7.40439C5.84498 7.79439 5.84498 8.42439 6.23498 8.81439L10.415 12.9944C10.805 13.3844 11.435 13.3844 11.825 12.9944L22.415 2.41439C22.805 2.02439 22.805 1.39439 22.415 1.00439H22.405C22.025 0.604387 21.395 0.604387 21.005 0.994387ZM0.58498 8.82439L4.76498 13.0044C5.15498 13.3944 5.78498 13.3944 6.17498 13.0044L6.87498 12.3044L1.99498 7.40439C1.60498 7.01439 0.97498 7.01439 0.58498 7.40439C0.19498 7.79439 0.19498 8.43439 0.58498 8.82439Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                )}
              </td>

              <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                <Badge active={company.active} />
              </td>

              <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                <Dropdown>
                  <Menu.Items className="absolute menu-item top-full right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl overflow-hidden bg-[#fff] border border-c-gray-5 shadow-lg  focus:outline-none">
                    <div className="p-2">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={`/business/${company._id}`}
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Xem Thông Tin
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Xem sản phẩm
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Media
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableCompany;
