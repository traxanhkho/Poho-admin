import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


export default function Breadcrumb({ type, children, classNames , pages }) {
  return (
    <nav
      className={`flex items-center gap-2 ${classNames}`}
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <Link
                href={page.href}
                className="ml-1 flex text-[18px] leading-7 font-bold hover:text-c-gray-3"
                aria-current={page.current ? "page" : undefined}
              >
                <ChevronLeftIcon
                  className="h-8 w-8 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
      {children}
    </nav>
  );
}
