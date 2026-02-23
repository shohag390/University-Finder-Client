import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/image/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const navbarLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "about-us",
    name: "About Us",
  },
  {
    path: "/all-universities",
    name: "All Universities",
  },
  {
    path: "/events",
    name: "Events",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#ffff] flex items-center justify-between px-5 md:px-13 lg:px-25 2xl:px-35 h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] sticky top-0 z-50 shadow">
      {/* Logo */}
      <Link to={"/"}>
        <img className="h-[4vh] md:h-[5vh] lg:h-[6vh]" src={logo} alt="logo" />
      </Link>
      {/* Large Screen Menu*/}
      <ul className="lg:flex lg:items-center lg:gap-5 hidden">
        {navbarLinks?.map((link, index) => (
          <li key={index}>
            <NavLink
              className={(className) =>
                className?.isActive
                  ? "text-[#033264] font-medium"
                  : "text-gray-600 hover:text-[#033264] duration-300 ease-in-out font-medium"
              }
              to={link?.path}
            >
              {link?.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            className="bg-[#033264] py-3 px-5 text-[#ffff] rounded-full hover:bg-[#04274d] duration-300 ease-in-out flex items-center gap-1 group"
            to={"/registration"}
          >
            <span>Registration</span>
            <MdOutlineKeyboardDoubleArrowRight className="group-hover:translate-x-1 duration-300" />
          </NavLink>
        </li>
      </ul>
      {/* Small Screen Menu bar*/}
      <button
        className="lg:hidden text-[25px] md:text-[30px] text-[#033264]"
        onClick={() => setOpen(!open)}
      >
        {!open ? <IoMenu /> : <IoClose />}
      </button>

      {/* Small Screen Menu */}
      <ul
        className={`lg:hidden bg-[#ffff] w-full h-[92vh] md:h-[91vh] absolute top-[8vh] md:top-[9vh] flex flex-col gap-5 items-center justify-center ${open ? "left-0" : "-left-full"} duration-500`}
      >
        {navbarLinks?.map((link, index) => (
          <li key={index}>
            <NavLink
              className={(className) =>
                className?.isActive
                  ? "text-[#033264] font-medium"
                  : "text-gray-600 hover:text-[#033264] duration-300 ease-in-out font-medium"
              }
              onClick={() => setOpen(!open)}
              to={link?.path}
            >
              {link?.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            onClick={() => setOpen(!open)}
            to={"/registration"}
            className="bg-[#033264] py-3 px-5 text-[#ffff] rounded-full hover:bg-[#04274d] duration-300 ease-in-out flex items-center gap-1 group"
          >
            <span>Registration</span>
            <MdOutlineKeyboardDoubleArrowRight className="group-hover:translate-x-1 duration-300" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
