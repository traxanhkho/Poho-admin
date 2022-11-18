
function TableHeader({columns}) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path}
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold capitalize text-c-gray-3 sm:pl-3"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
