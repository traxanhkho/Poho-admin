function Heading({ left, right, title = "Danh Sách" }) {
  return (
    <div className="sm:flex sm:items-center sm:h-10">
      <div className="sm:flex-auto flex items-center  gap-4">
        <h1 className="text-xl font-bold capitalize text-gray-900">{title}</h1>
        {left && left.map((fn) => fn())}
      </div>
      <div className="sm:mt-0 sm:flex-none">
        {right && right.map((fn) => fn())}
      </div>
    </div>
  );
}

export default Heading;
