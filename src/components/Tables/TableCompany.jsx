import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import Badge from "../common/Badge";
import Check from "../common/Check";
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
                  <Check check={company.valid} />
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
                          <Link
                            href={`/business/${company._id}/companyProduct`}
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Xem sản phẩm
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
