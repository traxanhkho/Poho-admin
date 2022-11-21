export default function Checkboxs({ list }) {
  const renderCheckbox = (name, label) => (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          id={name}
          aria-describedby={`${name}-description`}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded hover:cursor-pointer border-c-gray-4 text-indigo-600 focus:ring-indigo-500"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={name} className="font-normal text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );

  const renderLabel = (label) => (
    <h2>
      Bạn đã chọn nội dung :
      <span className="font-medium capitalize">{label}</span>
    </h2>
  );

  console.log(typeof list);
  return (
    <form>
      <fieldset className="space-y-5">
        <legend className="sr-only">Notifications</legend>

        {typeof list === "string"
          ? renderLabel(list)
          : list.map((item) => {
              return renderCheckbox(item.name, item.label);
            })}

        <button
          type="button"
          className="flex items-center justify-center text-[white] w-full rounded-md  bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Gửi báo cáo
        </button>
      </fieldset>
    </form>
  );
}
