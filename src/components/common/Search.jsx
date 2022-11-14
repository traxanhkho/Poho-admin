export default function Search(props) {
  return (
    <div className="sm:w-96 flex items-center relative px-2 mt-2 border-none bg-c-gray-5 rounded-full ">
      <input
        type="text"
        name="search"
        id="search"
        className="w-full mr-6 outline-none border-none focus:ring-0 rounded-full bg-c-gray-5 "
        placeholder="Tìm kiếm"
      />
      <label
        htmlFor="search"
        className="flex items-center justify-center absolute top-0 bottom-0 right-0 w-8 h-8 mr-1 my-auto rounded-full text-[#fff] bg-primary"
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </label>
    </div>
  );
}
