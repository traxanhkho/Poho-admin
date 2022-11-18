import _ from "lodash";


function TableBody({ columns , data }) {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return <p className="truncate">{_.get(item, column.path)}</p>;
  };

  return (
    <tbody className="bg-white">
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td
              key={column._id || column.key}
              className="whitespace-nowrap px-3 py-4 font-medium text-sm max-w-[400px]"
            >
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
