import { GoHome } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { FaFacebookSquare, FaGitAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiCsharp } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import img1 from '../public/project1.jpg'

export const navItems = [
  {
    id: 1,
    name: "Home",
    path: "#home",
    icon: <GoHome className="text-lg " />,
  },
  {
    id: 2,
    name: "About",
    path: "#about",
    icon: <FiUser className="text-lg " />,
  },
  {
    id: 3,
    name: "Projects",
    path: "#projects",
    icon: <IoGameControllerOutline className="text-lg " />,
  },
  {
    id: 4,
    name: "Experience",
    path: "#experience",
    icon: <IoBagOutline className="text-lg " />,
  },
];

export const socialItems = [
  {
    id: 1,
    name: "Twitter",
    path: "",
    icon: <FaTwitter className="" />,
  },
  {
    id: 2,
    name: "Instagram",
    path: "",
    icon: <AiFillInstagram className=" " />,
  },
  {
    id: 3,
    name: "LinkedIn",
    path: "",
    icon: <FaLinkedin className=" " />,
  },
  {
    id: 4,
    name: "Facebook",
    path: "",
    icon: <FaFacebookSquare className=" " />,
  },
]

export const skills = [
  {
    id: 1,
    name: "Unity",
    icon: <FaUnity className="" />,
  },
  {
    id: 2,
    name: "C#",
    icon: <SiCsharp className="" />,
  },
  {
    id: 3,
    name: "Git",
    icon: <FaGitAlt className="" />,
  },
  {
    id: 4,
    name: "Github",
    icon: <FaGithub className="" />,
  },
  {
    id: 5,
    name: "C#",
    icon: <SiCsharp className="" />,
  },
]

export const projects = [
  {
    id: 1,
    name: 'Dumb Guys',
    description: `This game is a tricky one, where the character crosses a river by jumping on stones, but
    some of the stones are fake, A player should find the real stones and cross the river in the
    least time.`,
    techUsed: ['Unity', 'C#', '3D'],
    img: img1,
    githubLink: 'a',
    downloadLink: 'a',
  },
  {
    id: 2,
    name: 'Ball Runway',
    description: `This is an endless ball running game with some advance features & powerups. A player
    has to collect coins and use them to unlock new skins.`,
    techUsed: ['Unity', 'C#', '3D'],
    img: img1,
    githubLink: 'a',
    downloadLink: 'a',
  },
  {
    id: 3,
    name: 'Bhul Bhulaiyya',
    description: `This is a 3D maze game with some features like Power-ups, with some attractive game
    board, Character Skins, etc.`,
    techUsed: ['Unity', 'C#', '3D'],
    img: img1,
    githubLink: 'a',
    downloadLink: 'a',
  }
]
