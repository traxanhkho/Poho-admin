import Link from "next/link";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Avatar from "../common/Avatar";
import Check from "../common/Check";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TableCensorshipProduct(props) {
  const { censorshipProduct } = useContext(AdminContext);

  useEffect(() => {}, [censorshipProduct]);

  if (censorshipProduct) {
    return (
      <table className="min-w-full c-table">
        <thead>
          <tr>
            {censorshipProduct.dataHead.map((item) => (
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
          {censorshipProduct.dataBody.map((product) => (
            <tr key={product._id}>
              <td className="whitespace-nowrap px-3 py-4 font-medium text-sm">
                <p className="truncate">{product.dateInitial}</p>
              </td>
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
                <Check check={product.seen} />
              </td>
              <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                <Link href={"#checking"}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.29492 16.59L12.8749 12L8.29492 7.41L9.70492 6L15.7049 12L9.70492 18L8.29492 16.59Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableCensorshipProduct;
