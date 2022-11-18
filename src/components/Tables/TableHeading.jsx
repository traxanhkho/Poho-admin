import { useRouter } from "next/router";
import DatePicker from "../DatePicker";
import Search from "../common/Search";

function TableHeading({ search , setOpen , open }) {
  const router = useRouter();
  return (
    <div className="sm:flex sm:items-center sm:h-10">
      <div className="sm:flex-auto flex items-center mt-2 gap-4">
        <h1 className="text-xl font-semibold text-gray-900">Danh Sách</h1>
        {router.pathname == "/censorshipProduct" ? <DatePicker /> : null}
      </div>
      <div className="mt-4 sm:mt-0 sm:flex-none">
        {search ? (
          <Search />
        ) : (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="capitalize font-medium text-[#fff] hover:opacity-80  h-10 w-40 rounded-[30px] bg-primary"
          >
            Thêm danh mục
          </button>
        )}
      </div>
    </div>
  );
}

export default TableHeading;
