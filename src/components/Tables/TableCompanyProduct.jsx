import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import CompanyProduct from "../../pages/business/[companyId]/companyProduct";
import Avatar from "../common/Avatar";
import Badge from "../common/Badge";
import Dropdown from "../common/Dropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TableCompanyProduct(props) {
  const { companyProducts } = useContext(AdminContext);

  useEffect(() => {}, [companyProducts]);

  if (companyProducts) {
    return (
      <table className="min-w-full c-table">
        <thead>
          <tr>
            {companyProducts.dataHead.map((item) => (
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
          {companyProducts.dataBody.map((product) => (
            <tr key={product._id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-4">
                <div className="w-12 h-12 bg-c-white-1 overflow-hidden rounded-lg">
                  <Avatar avtUrl={product.imgURL} classNames="rounded-lg" />
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 content-wrap font-medium text-sm">
                <p className="truncate">{product.name}</p>
              </td>
              <td className="whitespace-nowrap px-3 py-4 font-medium text-sm">
                {product.category}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm font-medium">
                {<Badge active={product.status} />}
              </td>
              <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                <Dropdown>
                  <Menu.Items className="absolute menu-item top-full right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl overflow-hidden bg-[#fff] border border-c-gray-5 shadow-lg  focus:outline-none">
                    <div className="p-2">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={`/business/${product._id}`}
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Đi đến sản phẩm
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={`/business/${product._id}?update=true`}
                            className={classNames(
                              active
                                ? " rounded-[30px] bg-c-blue-1 text-primary"
                                : "text-[black]",
                              "block px-[20px] py-[10px] text-[16px]"
                            )}
                          >
                            Khóa sản phẩm
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
                            Đưa top đề xuất
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

export default TableCompanyProduct;
