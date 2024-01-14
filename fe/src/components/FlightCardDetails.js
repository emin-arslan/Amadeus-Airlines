import React from "react";
import AmadeusLogo from "../assests/amadeusLogo.png";

const FlightCardDetails = ({ flight, setSelectedRoute, selectedRoute, isSecondPart, setIsSecondPart, isSelected, setDetailsOpenedIndex }) => {
  const handleSelectRoute = () =>{
    if(isSecondPart)
    {
      setDetailsOpenedIndex(-1);
      setSelectedRoute({...selectedRoute, returnTicket: flight});
    }
    else
    {
      setDetailsOpenedIndex(-1);
      setIsSecondPart(true)
      setSelectedRoute({...selectedRoute, departureTicket: flight});
    }
  }

  return (
    <div className="flex-col flex md:h-auto h-full w-full items-baseline justify-center mt-2 border-t">
      <div className="w-full">
        <span className="text-xl font-semibold sm:text-sm">Flight Details</span>
      </div>
      <div className="flex sm:flex-col sm:items-center w-full h-full">
        <div className="flex w-4/12 sm:w-full">
          <div className="w-6/12 flex items-center sm:w-4/6 sm:items-start sm:h-5/6 justify-center md:justify-start sm:justify-between">
            <span className="-ml-[15px] sm:text-sm mr-5 sm:ml-0 font-semibold text-gray-500">
              1s 15dk
            </span>
            <div className="relative md:h-5/6 sm:h-5/6 sm:after:hidden sm:before:hidden  h-full border-l border-l-black before:border before:rounded-full before:absolute before:-left-[9px] before:w-4 before:h-4 before:border-gray-500 before:bg-white 0 after:border after:rounded-full after:absolute after:bottom-0 after:-left-[9px]  after:w-4 after:h-4 after:border-gray-500 after:bg-white">
              <ul className="absolute sm:w-full flex md:text-sm sm:text-xs items-center top-0 left-5">
                <li className="mr-5 font-semibold text-xl md:text-sm sm:text-xs">23:55</li>
                <li className="font-semibold sm:text-xs">ISTANBUL</li>
              </ul>
              <ul className="absolute flex items-center bottom-0 left-5 sm:text-xs">
                <li className="mr-5 font-semibold text-xl md:text-sm sm:text-xs">01:00</li>
                <li className="font-semibold">ISPARTA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-7/12 flex justify-end md:text-sm sm:text-xs sm:justify-start sm:w-full">
          <ul className="text-md font-semibold space-y-4">
            <li className="font-bold line-clamp-1">Istanbul Havalimanı (IST)</li>
            <li className="font-bold line-clamp-1">Isparta Süleyman Demiral Havalimanı (ISE)</li>
            <li className="flex items-center line-clamp-1 "><img src={AmadeusLogo} className="w-5 h-5 mr-2 sm:m-0" ></img> Amadeus Airlines - AS2860</li>
            <li>Airbus A319-100 Dar gövde</li>
            <li>10 OCAK 2019 ÇARŞAMBA</li>
          </ul>
        </div>
        <div className="flex justify-end items-end sm:justify-end sm:w-full w-2/12 space-x-2">
          <button onClick={handleSelectRoute} className={` ${isSelected && 'hidden'} w-20 absolute h-10 text-sm font-semibold text-white bg-[#e81932] hover:bg-[#ff3545]`}>SEÇ</button>
        </div>
        {}
      </div>
    </div>
  );
};

export default FlightCardDetails;
