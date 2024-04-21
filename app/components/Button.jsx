import React from "react";

const Button = ({ btnText, icon, reverse }) => {
  return (
    <button
      className={`flex items-center ${
        icon && "gap-2"
      } px-3.5 py-2 w-full justify-center rounded-lg shadow-md font-[450] text-white bg-[#01a35a]`}
    >
      <span className=" text-2xl">{icon}</span>
      <p>{btnText}</p>
    </button>
  );
};

export default Button;
