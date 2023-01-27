import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar  w-full py-6 flex justify-between items-center">
      <div className="app__navbar-image">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </div>
      <ul className="app__navbar-links list-none sm:flex justify-end items-center hidden flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-white text-[16px] font-normal capitalize ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.title}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prevState) => !prevState)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } py-6 px-10 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
        >
          <ul className="app__navbar-links list-none flex flex-col justify-end items-center  flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-white text-[16px] font-normal capitalize ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.title}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
