import React, { useState } from 'react'
import PlaneSvg from '../assests/plane.svg'
import Input from "./Input"
import Checkbox from './Input/Checkbox'
import RightArrow from '../assests/rightArrow.svg'

const FlightReservation = () => {
  const [isOneWay, setIsOneWay] = useState(false);
  const [flightRoute, setFlightRoute] = useState({
    departureAirPort: [],
    destinationAirPort: [],
    departureDate: '',
    destinationDate: Date.now()+1
  })
  console.log(flightRoute.departureDate.toLocaleString())
  return (
    <div className='h-auto'>
      
       <div className='flex w-24 h-10 items-center justify-center rounded-t bg-white'>
       
        <img src={PlaneSvg} className='mr-2' alt='plane' ></img>
        <span className='text-[#ef2636] font-semibold mr-1'>Uçak</span>
       </div>
      <div className='flex-col flex w-full items bg-white shadow-xl h-40 rounded-b rounded-tr p-3 pl-3 space-y-2'>
        <Checkbox isOneWay = {isOneWay} setIsOneWay = {setIsOneWay} />
        <div className='flex space-x-4'>
        <Input additionalClasses='w-48 bg-[#f4f6f8]' title='NEREDEN'></Input>
        <Input additionalClasses='w-48 bg-[#f4f6f8] ' title='NEREYE'></Input>
        <div className='flex flex-col h-14 items-center justify-center bg-[#f4f6f8]'>
        <span className='text-md font-semibold h-fit tracking-wide '>Gidiş</span>
        <input type='date' className='h-full bg-[#f4f6f8] px-5 outline-none hover:cursor-pointer'></input>
        </div>
        <div className={`flex flex-col h-14 items-center justify-center bg-[#f4f6f8] ${isOneWay && 'opacity-50'}`}>
          <span className='text-md font-semibold h-fit tracking-wide '>Dönüş</span>
        <input type='date' disabled={isOneWay} className='bg-[#f4f6f8] px-5 outline-none disabled:opacity-50 hover:cursor-pointer h-fit'></input>
        </div>
        <div>
          <button onClick={()=>{console.log('Ticket booked')}} className="flex w-32 h-14 justify-between items-center px-2 text-sm font-semibold text-white bg-[#e81932] hover:bg-[#ff3545]">Search Flight
          <img src={RightArrow} width={20} height={20}></img>
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FlightReservation
