import { useEffect, useState } from "react";

const status = [
  {
    active: "active",
    label: "Đang hoạt động",
    class: " bg-c-blue-1 text-primary ",
  },
  {
    active: "lock",
    label: "Tạm khóa",
    class: " bg-c-white-1 text-c-gray-4 ",
  },
  {
    active: "uninitial",
    label: "Chưa tạo",
    class: " bg-c-white-1 text-c-gray-4 ",
  },
  {
    active: "initial",
    label: "Đã tạo",
    class: " bg-c-blue-1 text-primary ",
  },
];

function Badge({ active }) {
  const [data, setData] = useState({
    active: "active",
    label: "Đang hoạt động",
    class: " bg-c-blue-1 text-primary ",
  });

  useEffect(() => {
    for (let index in status) {
      if (status[index].active === active) return setData(status[index]);
    }
  }, []);

  return (
    <span
      className={`w-32 h-6 inline-flex items-center justify-center rounded-full ${data.class} px-3 py-0.5 text-sm font-normal  `}
    >
      {data.label}
    </span>
  );
}

export default Badge;
