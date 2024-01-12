import React, { useState } from "react";
import AmadeusLogo from "../assests/amadeusLogo.png";
import DownArrow from "../assests/downArrow.svg";
import UpArrow from "../assests/upArrow.svg";
import FlightCardDetails from "./FlightCardDetails";

const FlightCard = () => {
  const [ detailsOpened, setDetailsOpened ] = useState(false)
  return (
    <div className={`relative flex-col flex items-baseline mt-5 p-5 drop-shadow-xl ${detailsOpened ? 'h-80':'h-24'} w-full bg-white transition-all duration-200`}>
      <div className="absolute flex items-center justify-center right-0 top-0 bg-green-400 h-8 w-20 rounded-bl shadow-md">
        <span className="text-white font-semibold">953 ₺</span>
      </div>
     <div className="flex w-full">
     <div className="flex items-center w-4/6">
        <ul className="flex flex-col items-baseline">
          <li className="font-bold">12:25</li>
          <li className="text-gray-500 font-semibold text-sm">ABD</li>
          <li className="text-xs">İzmir</li>
        </ul>
        <div className="flex flex-col items-center space-y-1 w-full ml-5 mr-5">
          <span className="text-xs">Direct</span>
          <div className="relative w-full border-t-[1px] border-gray-400 after:absolute after:rounded-full after:-top-[4px] after:h-[7px] after:w-[7px] after:bg-black before:absolute before:rounded-full before:right-0 before:-top-[4px] before:h-[7px] before:w-[7px] before:bg-black"></div>
          <span className="">
            <img src={AmadeusLogo} width={20} height={20} alt="amadeusLogo"></img>
          </span>
        </div>
        <ul className="flex flex-col items-end">
          <li className="font-bold">12:25</li>
          <li className="text-gray-500 font-semibold text-sm">ABD</li>
          <li className="text-xs">İzmir</li>
        </ul>
        
      </div>
      <div onClick={()=>setDetailsOpened(!detailsOpened)} className="flex w-2/6 items-center justify-center hover:cursor-pointer">
        <span className="font-semibold mr-2 select-none">Seyahat detayları</span>
        <img src={detailsOpened ? UpArrow:DownArrow} alt="downArrow"></img>
      </div>
     </div>
      {
        detailsOpened && (
          <div className="h-full w-full mt-2"> <FlightCardDetails /> </div>
        )
      }
    </div>
  );
};

export default FlightCard;
