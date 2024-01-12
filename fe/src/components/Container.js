import React from "react";
import Input from "./Input";
import FlightReservation from "./FlightReservation";
import FlightCard from "./FlightCard";


const Container = () => {
  return (
    <div className="flex flex-col h-[450px] w-full items-center justify-center bg-[url('https://cdn.turkishairlines.com/m/6761929144cccc1e/original/anasayfa-1400.webp')] bg-cover bg-no-repeat ">
      <div className="flex flex-col h-full w-3/6 justify-center text-white -ml-4">
        <span className="block text-2xl mt-20">HELLO,</span>
        <span className="text-4xl font-semibold">Where would you like to explore?</span>
        
      </div>
      <div className="flex-col h-1/6 w-3/6">
        
        <FlightReservation />
        <div className="flex h-auto w-full border-2 border-gray-200 rounded bg-[#f9f9f9] mt-10 p-2">
        <FlightCard />
        
        </div>
      </div>
    </div>
  );
};

export default Container;
