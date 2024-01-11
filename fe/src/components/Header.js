import React from "react";
import PersonLogo from "../assests/person.svg";

const Header = () => {
  const logo = require("../assests/amadeusLogo.png")
  const menuList = [
    "PLANLA & UÇ",
    "SEYAHAT DENEYİMİ",
    "KEŞFET",
    "MILES&SMILES",
    "YARDIM",
    "Üye ol"
  ];

  return (
    <div className="flex items-center h-[60px] bg-[#232b38]">
      <div className="flex justify-between items-center h-full w-full px-5 text-white">
        <div className="flex h-full items-center space-x-2">
          <span><img width={50} height={50} src={logo} alt="amadeusLogo"></img></span>
          <span className="font-bold tracking-wide">AMADEUS AIRLINES</span>
        </div>
        <div className="flex h-full tracking-wide">
          <ul className="flex items-center font-bold h-full">
            {menuList.map((menu, index) => {
              return (
                <li
                  className="relative flex items-center h-full text-[12px] select-none hover:bg-[#1a202a] hover:cursor-pointer hover:after:flex after:hidden after:absolute after:h-[68px] after:border-[#e81932] after:w-full after:border-b-4 transition-colors ease-in-out duration-500"
                  key={index}
                >
                  <span className={`${index !== 5 && 'border-r border-dotted'} px-6`}>{menu}</span>
                </li>
              );
            })}
          </ul>
          <div className="items-center flex">
            <div className="flex items-center justify-center space-x-1 px-2 rounded-2xl border p-1 font-semibold text-[13px] hover:cursor-pointer hover:bg-[#444b56]">
            <span className="select-none">
              GİRİŞ YAP
            </span>
            <img src={PersonLogo} alt="person-logo" className="fill-red-400"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
