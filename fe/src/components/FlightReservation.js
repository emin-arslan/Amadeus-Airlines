import React, { useState } from 'react'
import PlaneSvg from '../assests/plane.svg'
import Input from "./Input"
import Checkbox from './Input/Checkbox'
import RightArrow from '../assests/rightArrow.svg'

const FlightReservation = ({setFindedFlightList}) => {
  const [isOneWay, setIsOneWay] = useState(false);
  const [flightRoute, setFlightRoute] = useState({
    departureAirPort: {name: '',city: '', code: '', country: ''},
    destinationAirPort: {name: '',city: '', code: '', country: ''},
    departureDate: '',
    arrivalDate: '',
  })

  const flights = require("./flights.json");

  const searchFlight = () => {
    const findedFlights = flights
    .filter((flight) => {
      const flightDepartureDate = new Date(flight['departureDate']);
      const flightRouteDepartureDate = new Date(flightRoute['departureDate']);
      const areDatesEqual = flightDepartureDate.toISOString().slice(0, 10) === flightRouteDepartureDate.toISOString().slice(0, 10);
      return (
        flight['departureAirport']['code'] == flightRoute['departureAirPort']['code'] &&
        flight['destinationAirport']['code'] == flightRoute['destinationAirPort']['code'] &&
        areDatesEqual
      );
    })
    .map((resultFlight) => ({
      id: resultFlight.id,
      airline: resultFlight.airline,
      departureAirport: resultFlight.departureAirport,
      destinationAirport: resultFlight.destinationAirport,
      departureDate: resultFlight.departureDate,
      arrivalDate: resultFlight.arrivalDate,
      duration: resultFlight.duration,
      price: resultFlight.price
    }));
    setFindedFlightList(findedFlights);
  }
  return (
    <div className='h-auto'>
      
       <div className='flex w-24 h-10 items-center justify-center rounded-t bg-white'>
       
        <img src={PlaneSvg} className='mr-2' alt='plane' ></img>
        <span className='text-[#ef2636] font-semibold mr-1'>Uçak</span>
       </div>
      <div className='flex-col flex w-full items bg-white shadow-xl h-40 rounded-b rounded-tr p-3 pl-3 space-y-2'>
        <Checkbox isOneWay = {isOneWay} setIsOneWay = {setIsOneWay} />
        <div className='flex space-x-4'>
        <Input flightRoute = {flightRoute} setFlightRoute = {setFlightRoute} flightType = 'departureAirPort' additionalClasses='w-48 bg-[#f4f6f8]' title='NEREDEN'></Input>
        <Input flightRoute = {flightRoute} setFlightRoute = {setFlightRoute} flightType = 'destinationAirPort' additionalClasses='w-48 bg-[#f4f6f8] ' title='NEREYE'></Input> 
        <div className='flex flex-col h-14 items-center justify-center bg-[#f4f6f8]'>
        <span className='text-md font-semibold h-fit tracking-wide '>Gidiş</span>
        <input onChange={(e)=>setFlightRoute({ ...flightRoute, ['departureDate']: e.target.value })} type='date' className='bg-[#f4f6f8] px-5 outline-none disabled:opacity-50 hover:cursor-pointer h-fit'></input>
        </div>
        <div className={`flex flex-col h-14 items-center justify-center bg-[#f4f6f8] ${isOneWay && 'opacity-50'}`}>
          <span className='text-md font-semibold h-fit tracking-wide '>Dönüş</span>
        <input type='date' disabled={isOneWay} className='bg-[#f4f6f8] px-5 outline-none disabled:opacity-50 hover:cursor-pointer h-fit'></input>
        </div>
        <div>
          <button onClick={searchFlight} className="flex w-32 h-14 justify-between items-center px-2 text-sm font-semibold text-white bg-[#e81932] hover:bg-[#ff3545]">Search Flight
          <img src={RightArrow} width={20} height={20} alt='rightArrow'></img>
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default FlightReservation
