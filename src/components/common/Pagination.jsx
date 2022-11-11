import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between bg-white mx-auto px-4 py-3 sm:pt-12  sm:pb-0">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex gap-4 -space-x-px rounded-md "
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-sm font-medium hover:bg-primary hover:text-[#fff] "
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5 font-bold"
                aria-hidden="true"
              />
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative inline-flex w-8 h-8 justify-center bg-primary text-[#fff] items-center hover:bg-primary hover:text-[#fff] rounded-lg text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex w-8 h-8 justify-center items-center hover:bg-primary hover:text-[#fff] bg-c-gray-5 rounded-lg text-sm font-medium"
            >
              2
            </a>
            <span className="relative inline-flex w-8 h-8 justify-center items-center hover:bg-primary hover:text-[#fff] bg-c-gray-5 rounded-lg text-sm font-medium">
              <svg
                width="18"
                height="4"
                viewBox="0 0 18 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#545454" />
                <circle cx="9" cy="2" r="2" fill="#545454" />
                <circle cx="16" cy="2" r="2" fill="#545454" />
              </svg>
            </span>

            <a
              href="#"
              className="relative inline-flex w-8 h-8 justify-center items-center hover:bg-primary hover:text-[#fff] bg-c-gray-5 rounded-lg text-sm font-medium"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md   px-2 py-2 text-sm font-medium hover:bg-primary hover:text-[#fff]"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
