

function Badge({ active }) {
  return (
    <span
      className={`w-32 h-6 inline-flex items-center justify-center rounded-full ${
        active.isActive
          ? "bg-c-blue-1 text-primary"
          : "bg-c-white-1 text-c-gray-4"
      } px-3 py-0.5 text-sm font-normal  `}
    >
      {active.label}
    </span>
  );
}

export default Badge;
