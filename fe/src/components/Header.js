import React from "react";
import PersonLogo from "../assests/person.svg";
import HamburgerMenu from "./HamburgerMenu";
import { useSelector } from "react-redux";
import {getIsMobile} from "../selectors/appSelectors"

const Header = () => {
  const logo = require("../assests/amadeusLogo.png")
  const menuList = ["PLANLA & UÇ", "SEYAHAT DENEYİMİ", "KEŞFET", "MILES&SMILES", "YARDIM", "Üye ol"];
  const isMobile = useSelector(getIsMobile)


  return (
    <div className="fixed h-[60px] w-full bg-[#232b38] items-center">
      <div className="flex h-full w-full text-white justify-between items-center px-5">
        <div className="flex h-full items-center space-x-2">
          <span><img width={50} height={50} src={logo} alt="amadeusLogo"></img></span>
          <span className="font-bold tracking-wide md:hidden">AMADEUS AIRLINES</span>
          {
            isMobile && (<HamburgerMenu/>)
          }
        </div>
        <div className="flex h-full tracking-wide">
          <ul className="flex h-full text-[12px] lg:text-[11px] font-extrabold items-center">
            {menuList.map((menu, index) => {
              return (
                <li
                  className="relative flex h-full items-center select-none hover:bg-[#1a202a] hover:cursor-pointer hover:after:flex after:hidden after:absolute after:h-[68px] after:border-[#e81932] md:after:border-b-0 after:w-full after:border-b-4 transition-colors ease-in-out duration-500"
                  key={index}
                >
                  <span className={`${index !== 5 ? 'border-r border-dotted md:hidden' : 'lg:px-3 font-normal text-sm'} px-4 lg:px-1`}>{menu}</span>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center">
            <div className="flex items-center justify-center px-2 rounded-2xl border p-1 font-semibold text-[13px] hover:cursor-pointer hover:bg-[#444b56]">
            <span className="select-none mr-1 md:hidden">
              GİRİŞ YAP
            </span>
            <img src={PersonLogo} alt="person-logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
