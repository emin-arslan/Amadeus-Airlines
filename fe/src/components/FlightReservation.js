import React, { useState } from 'react'
import PlaneSvg from '../assests/plane.svg'
import Input from "./Input"
const FlightReservation = () => {
  const [flightRoute, setFlightRoute] = useState({
    departureAirPort: [],
    destinationAirPort: []
  })
  return (
    <div className='h-auto'>
       <div className='flex w-24 h-10 items-center justify-center rounded-t bg-white'>
        <img src={PlaneSvg} className='mr-2' alt='plane' ></img>
        <span className='text-[#ef2636] font-semibold mr-1'>Uçak</span>
       </div>
      <div className='flex w-full items bg-white shadow-xl h-40 rounded-b rounded-tr space-x-4 p-3 pl-3'>
        <Input additionalClasses='w-48 bg-[#f4f6f8]' title='NEREDEN'></Input>
        <Input additionalClasses='w-48 bg-[#f4f6f8] ' title='NEREYE'></Input>
        <div className='h-14 bg-[#f4f6f8]'>
        <input type='datetime-local' className='h-full bg-[#f4f6f8] px-5 outline-none hover:cursor-pointer'  ></input>
        </div>
      </div>
    </div>
  )
}

export default FlightReservation
