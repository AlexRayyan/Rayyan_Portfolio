"use client";

import React, { useState } from "react";
import { navItems } from "../data";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("#home");

  return (
    <div className=" hidden lg:flex z-10  items-center justify-between w-full px-5 py-4 bg-[#262626] border border-gray-700 text-white rounded-xl shadow-lg ">
      <h1 className="text-xl font-extrabold">{`<Rayyan />`}</h1>
      <nav className="flex items-center gap-7 ">
        {navItems.map((item) => {
          const { id, name, path, icon } = item;
          return (
            <a
              onClick={() => setActive(path)}
              key={id}
              href={path}
              className={` ${
                active === path && "border-b-[0.1px]"
              } flex items-center gap-1.5 px-2 py-1`}
            >
              <span className=" text-[#01a35a]">{icon}</span>
              <p
                className={` ${active === path ? "font-bold" : "font-[450]"}  `}
              >
                {name}
              </p>
            </a>
          );
        })}
      </nav>
      <span>
        <Button btnText="Contact Me" />
      </span>
    </div>
  );
};

export default Navbar;
