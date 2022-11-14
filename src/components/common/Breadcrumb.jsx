import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/20/solid";

const pages = [
  { name: "Cty sản xuất thiết bị công nghệ T2T", href: "#", current: false },
];

export default function Breadcrumb({ type, children, classNames }) {
  return (
    <nav
      className={`flex items-center gap-2 ${classNames}`}
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronLeftIcon
                className="h-8 w-8 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-1 text-[18px] leading-7 font-bold hover:text-c-gray-3"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
      {children}
    </nav>
  );
}
