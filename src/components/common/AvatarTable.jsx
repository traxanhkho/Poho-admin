import React from "react";

function AvatarTable({ avtUrl }) {
  return (
    <img
      className="inline-block h-6 w-6 rounded-full"
      src={avtUrl}
      alt="Poho - avatar người dùng"
    />
  );
}

export default AvatarTable;
