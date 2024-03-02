import { GoHome } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

export const sidebarItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <GoHome className="text-lg " />,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: <FiUser className="text-lg " />,
  },
  {
    id: 3,
    name: "Projects",
    path: "/projects",
    icon: <IoGameControllerOutline className="text-lg " />,
  },
  {
    id: 4,
    name: "Experience",
    path: "/experience",
    icon: <IoBagOutline className="text-lg " />,
  },
];
