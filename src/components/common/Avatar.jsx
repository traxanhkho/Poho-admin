export default function Avatar({ avtUrl, classNames = "rounded-full" }) {
  return (
    <span className="relative inline-block">
      <img
        className={`h-12 w-12 ${classNames}`}
        src={avtUrl}
        alt="poho - avatar người dùng"
      />
    </span>
  );
}
