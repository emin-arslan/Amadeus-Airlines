import React from "react";
import AmadeusLogo from "../assests/amadeusLogo.png";

const FlightCardDetails = ({ departureAirport, destinationAirport }) => {
  return (
    <div className="flex-col flex h-full w-full items-baseline justify-center mt-2">
      <div className="w-full">
        <span className="text-xl font-semibold">Flight Details</span>
      </div>
      <div className="flex w-full h-full">
        <div className="flex w-4/12">
          <div className="w-6/12 flex items-center justify-center">
            <span className="-ml-[15px] mr-5 font-semibold text-gray-500">
              1s 15dk
            </span>
            <div className="relative h-full border-l border-l-black before:border before:rounded-full before:absolute before:-left-[9px] before:w-4 before:h-4 before:border-gray-500 before:bg-white 0 after:border after:rounded-full after:absolute after:bottom-0 after:-left-[9px]  after:w-4 after:h-4 after:border-gray-500 after:bg-white">
              <ul className="absolute flex items-center top-0 left-5">
                <li className="mr-5 font-semibold text-xl">23:55</li>
                <li className="font-semibold">ISTANBUL</li>
              </ul>
              <ul className="absolute flex items-center bottom-0 left-5">
                <li className="mr-5 font-semibold text-xl">01:00</li>
                <li className="font-semibold">ISPARTA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/6">
          <ul className="text-md font-semibold space-y-4">
            <li className="font-bold line-clamp-1">Kalkış Havalimanı: Istanbul Havalimanı (IST)</li>
            <li className="font-bold line-clamp-1">Varış Havalimanı: Isparta Süleyman Demiral Havalimanı (ISE)</li>
            <li className="flex items-center line-clamp-1">Havayolu - Uçuş no: <img src={AmadeusLogo} className="w-4 h-4 mr-2 ml-2" ></img> Amadeus Airlines - AS2860</li>
            <li>Uçak tipi: Airbus A319-100 Dar gövde</li>
            <li>Rezervasyon Tarihi: 10 OCAK 2019 ÇARŞAMBA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlightCardDetails;
