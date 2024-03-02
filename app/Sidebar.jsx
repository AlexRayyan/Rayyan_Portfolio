"use client";
import React, { useState } from "react";
import { sidebarItems } from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const location = usePathname();
  const [activeLink, setActiveLink] = useState(location);

  return (
    <aside className="w-full h-screen bg-green-100 ">
      <div className="flex flex-col w-full ">
        <span className="w-full py-2.5 text-lg font-bold text-center border-b ">
          Rayyan.Dev
        </span>
        <div className="flex flex-col w-full gap-3 px-3 py-3 ">
          {sidebarItems.map((item) => {
            const { id, name, icon, path } = item;
            return (
              <Link
                href={path}
                key={id}
                onClick={() => setActiveLink(path)}
                className={`${
                  activeLink === path
                    ? " bg-blue-950 rounded-md hover:bg-none text-white"
                    : " hover:bg-gray-100 border bg-white"
                } flex items-center shadow-md w-full gap-3 rounded-md px-3 py-2 text-sm font-medium cursor-pointer `}
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
