"use client";
import React, { useState } from "react";
import { sidebarItems } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const location = usePathname();
  console.log(location);
  const [activeLink, setActiveLink] = useState(location);

  return (
    <aside className="w-full h-screen ">
      <div className="flex flex-col w-full ">
        <span className="w-full py-2.5 text-lg font-bold text-center border-b">
          Rayyan.Dev
        </span>
        <div className="flex flex-col w-full">
          {sidebarItems.map((item) => {
            const { id, name, icon, path } = item;
            return (
              <Link
                href={path}
                key={id}
                onClick={() => setActiveLink(path)}
                className={`${
                  activeLink === path
                    ? " navlink-bg hover:bg-transparent text-white"
                    : ""
                } flex items-center w-full gap-3 shadow-sm px-3 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100`}
              >
                {icon} {name}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
