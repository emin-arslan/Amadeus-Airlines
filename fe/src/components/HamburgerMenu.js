import React, { useState } from "react";
import HamburgerSvg from "../assests/hamburgerMenu.svg";

const HamburgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleButton() {
    setToggleMenu(!toggleMenu);
  }

  const menuList = [
    "PLAN & FLY",
    "TRAVEL EXPERIENCE",
    "DISCOVER",
    "MILES&SMILES",
    "YARDIM",
  ];
  return (
    <div className="">
      <img
        src={HamburgerSvg}
        height={22}
        width={22}
        onClick={handleToggleButton}
        alt="hamburgersvg"
        className="hover:cursor-pointer"
      ></img>
      <ul
        className={`absolute ${
          !toggleMenu && "hidden"
        } left-0 top-[60px] text-white items-center text-[15px] font-semibold h-auto w-[100%] border-t-[#e81932] border-t-2 pl-20 pr-10 py-[2px] bg-[#232b38]`}
      >
        {menuList.map((menu, index) => {
          return (
            <li
              className="relative flex-col items-center h-full select-none hover:bg-[#1a202a] hover:cursor-pointer py-5 border-b border-b-gray-500"
              key={index}
            >
              <span>{menu}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
