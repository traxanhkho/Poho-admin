import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useHistory } from "../../context/History";

export default function Breadcrumb({  children, classNames , pages }) {
  const { back } = useHistory() ; 

  return (
    <nav
      className={`flex items-center gap-2 ${classNames}`}
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <h4
                onClick={() => back()}
                className="ml-1 flex text-[18px] cursor-pointer leading-7 font-bold hover:text-c-gray-3"
                aria-current={page.current ? "page" : undefined}
              >
                <ChevronLeftIcon
                  className="h-8 w-8 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {page.name}
              </h4>
            </div>
          </li>
        ))}
      </ol>
      {children}
    </nav>
  );
}
