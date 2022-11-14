export default function Avatar({ avtUrl }) {
  return (
    <span className="relative inline-block">
      <img
        className="h-12 w-12 rounded-full"
        src={avtUrl}
        alt="poho - avatar người dùng"
      />
    </span>
  );
}
