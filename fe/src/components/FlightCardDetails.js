import React from "react";
import AmadeusLogo from "../assests/amadeusLogo.png";

const FlightCardDetails = ({ flight, setSelectedRoute, selectedRoute, isSecondPart, setIsSecondPart, isSelected }) => {
  const handleSelectRoute = () =>{
    if(isSecondPart)
    {
      setSelectedRoute({...selectedRoute, returnTicket: flight});
    }
    else
    {
      setIsSecondPart(true)
      setSelectedRoute({...selectedRoute, departureTicket: flight});
    }
  }

  return (
    <div className="flex-col flex md:h-auto h-full w-full items-baseline justify-center mt-2 border-t">
      <div className="w-full">
        <span className="text-xl font-semibold sm:text-base">Flight Details</span>
      </div>
      <div className="flex w-full h-full">
        <div className="flex w-4/12">
          <div className="w-6/12 flex items-center sm:h-5/6 justify-center md:justify-start sm:justify-start">
            <span className="-ml-[15px] mr-5 font-semibold text-gray-500">
              1s 15dk
            </span>
            <div className="relative md:h-5/6 sm:h-5/6 h-full border-l border-l-black before:border before:rounded-full before:absolute before:-left-[9px] before:w-4 before:h-4 before:border-gray-500 before:bg-white 0 after:border after:rounded-full after:absolute after:bottom-0 after:-left-[9px]  after:w-4 after:h-4 after:border-gray-500 after:bg-white">
              <ul className="absolute flex md:text-sm sm:text-sm items-center top-0 left-5">
                <li className="mr-5 font-semibold text-xl md:text-sm sm:text-sm">23:55</li>
                <li className="font-semibold">ISTANBUL</li>
              </ul>
              <ul className="absolute flex items-center bottom-0 left-5">
                <li className="mr-5 font-semibold text-xl md:text-sm sm:text-sm">01:00</li>
                <li className="font-semibold">ISPARTA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-7/12 flex justify-end md:text-sm sm:text-sm">
          <ul className="text-md font-semibold space-y-4">
            <li className="font-bold line-clamp-1">Istanbul Havalimanı (IST)</li>
            <li className="font-bold line-clamp-1">Isparta Süleyman Demiral Havalimanı (ISE)</li>
            <li className="flex items-center line-clamp-1"><img src={AmadeusLogo} className="w-4 h-4 mr-2 ml-2" ></img> Amadeus Airlines - AS2860</li>
            <li>Airbus A319-100 Dar gövde</li>
            <li>10 OCAK 2019 ÇARŞAMBA</li>
          </ul>
        </div>
        <div className="flex justify-end items-end w-2/12 space-x-2">
          <button onClick={handleSelectRoute} className={` ${isSelected && 'hidden'} w-20 absolute h-10 text-sm font-semibold text-white bg-[#e81932] hover:bg-[#ff3545]`}>SEÇ</button>
        </div>
        {}
      </div>
    </div>
  );
};

export default FlightCardDetails;
