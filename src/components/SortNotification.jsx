import { useState } from "react";

function SortNotification(props) {
  const [buttons, setButtons] = useState([
    { id: 1, name: "Tất cả", current: true },
    { id: 2, name: "Chưa xem", current: false },
    { id: 3, name: "Đã xem", current: false },
  ]);

  const onSorting = (id) => {
    const newButtons = buttons.map((btn) =>
      btn.id !== id ? { ...btn, current: false } : { ...btn, current: true }
    );

    setButtons(newButtons);
  };

  return (
    <span>
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className={`${
            btn.current ? "bg-c-blue-1 text-primary" : "bg-c-white-1"
          } font-medium  px-3 py-2 rounded-[30px] mr-2`}
          onClick={() => onSorting(btn.id)}
        >
          {btn.name}
        </button>
      ))}
    </span>
  );
}

export default SortNotification;
