import React, { useEffect, useState } from 'react'
import PlaneSvg from '../assests/plane.svg'
import Input from "./Input"
import Checkbox from './Input/Checkbox'
import RightArrow from '../assests/rightArrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getFlightRoutesSelector } from '../selectors/uiSelectors'
import {getAirportNames, getFlightRoutes} from "../actions/uiActions"

const FlightReservation = ({setFindedFlightList,isOneWay, setIsOneWay, isSecondPart, setSectionIndex, setSelectedRoute, setIsSecondPart}) => {
  const [ticketDates, setTicketDates] = useState({
    departureDate:'',
    returnDate:''
  })
  const [flightRoute, setFlightRoute] = useState({
    departureAirport: {name: '',city: '', code: '', country: ''},
    destinationAirport: {name: '',city: '', code: '', country: ''},
    departureDate: '',
    arrivalDate: '',
  })
  const [info, setInfo] = useState({
    text:'',
    color:'red'
  });

  const dispatch = useDispatch();
  const flightRoutes= useSelector(getFlightRoutesSelector)

  function isValidDateInput(dateString) {
    var selectedDate = new Date(dateString);

    var minDate = new Date();
    minDate.setHours(0,0,0,0);
    var maxDate =new Date("2100-12-31");
    if( !isNaN(selectedDate.getFullYear()) && minDate <= selectedDate && maxDate >= selectedDate )
    return true
    return false;
  }

  const inputValidation = () => {
    const departureAirportDateCheck = isValidDateInput(ticketDates['departureDate'])
    const returnAirportDateCheck = isValidDateInput(ticketDates['returnDate'])
    const ticketDatesCheck = isOneWay ? departureAirportDateCheck : (departureAirportDateCheck && returnAirportDateCheck && ticketDates['departureDate'] <= ticketDates['returnDate'])

    if(!flightRoute['departureAirport']['code'] || !flightRoute['destinationAirport']['code'] || flightRoute['departureAirport']['code'] === flightRoute['destinationAirport']['code']){
      setInfo({text: 'Departure airport & arrival airport values are not valid.', color:'text-red-400'});
      return false
    }
    else if(!ticketDatesCheck){
      setInfo({text: 'Dates are not valid.', color:'text-red-400'});
      return false
    }
    setInfo({text: '', color:'text-green-400'});
    return true
  }


  const secondPartList = () =>{
    const findedFlights = flightRoutes
      .filter((flight) => {
        const flightDepartureDate = new Date(flight['departureDate']);
        const flightRouteDepartureDate = new Date(flightRoute['returnDate']);
        const areDatesEqual = flightDepartureDate.toISOString().slice(0, 10) === flightRouteDepartureDate.toISOString().slice(0, 10);
        return (
          flight['departureAirport']['code'] === flightRoute['destinationAirport']['code'] &&
          flight['destinationAirport']['code'] === flightRoute['departureAirport']['code'] &&
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
      if(flightRoutes.length > 0 && findedFlights.length <= 0){
        setSectionIndex(-2);
       }
      setFindedFlightList(findedFlights);
  }

  useEffect(()=>{
    if(!isOneWay && isSecondPart)
    {
      secondPartList()
    }
  },[isOneWay,isSecondPart])

  useEffect(()=>{
      if(!isSecondPart)
      {
      const findedFlights = flightRoutes
      .filter((flight) => {
        const flightDepartureDate = new Date(flight['departureDate']);
        const flightRouteDepartureDate = new Date(flightRoute['departureDate']);
        const areDatesEqual = flightDepartureDate.toISOString().slice(0, 10) === flightRouteDepartureDate.toISOString().slice(0, 10);
        return (
          flight['departureAirport']['code'] === flightRoute['departureAirport']['code'] &&
          flight['destinationAirport']['code'] === flightRoute['destinationAirport']['code'] &&
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
      
    if(flightRoutes.length > 0 && findedFlights.length <= 0){
      setSectionIndex(-1);
     }
    setFindedFlightList(findedFlights);
  }
  else if(isSecondPart) secondPartList()
  },[flightRoutes])

  useEffect(()=>{
    if(isSecondPart === false) searchFlight('edit')
  },[isSecondPart])

  const searchFlight = (type = '') => {
    if(!inputValidation()) return;
    if(type !== 'edit') setSelectedRoute({
      departureTicket: {},
      returnTicket: {}
    })
    setIsSecondPart(false)
    setFindedFlightList([])
    dispatch(getAirportNames())
    dispatch(getFlightRoutes())
    setSectionIndex(0);
}

  const handleInputDateChange = (e) => {
    setFlightRoute({ ...flightRoute, [e.target.id]: e.target.value})
    setTicketDates({...ticketDates, [e.target.id]: e.target.value})
  }
  return (
    <div className="h-auto">
      <div className="flex w-24 h-10 items-center justify-center rounded-t bg-white">
        <img src={PlaneSvg} className="mr-2" alt="plane"></img>
        <span className="text-[#ef2636] font-semibold ">Airplane</span>
      </div>
      <div className="flex-col flex w-full items bg-white shadow-xl h-auto rounded-b rounded-tr p-3 pl-3 space-y-2 transition-all">
        <Checkbox isOneWay={isOneWay} setIsOneWay={setIsOneWay} />
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          <Input
            id="fromAirport"
            name="fromAirportInput"
            flightRoute={flightRoute}
            setFlightRoute={setFlightRoute}
            flightType="departureAirport"
            additionalClasses="w-48 bg-[#f4f6f8]"
            title="FROM"
          ></Input>
          <Input
            id="toAirport"
            name="toAirportInput"
            flightRoute={flightRoute}
            setFlightRoute={setFlightRoute}
            flightType="destinationAirport"
            additionalClasses="w-48 bg-[#f4f6f8] "
            title="TO"
          ></Input>

          <div className="flex flex-col h-14 items-center justify-center bg-[#f4f6f8]">
            <span className="text-md font-semibold h-fit tracking-wide ">
              Departure
            </span>
            <input
              id="departureDate"
              onChange={handleInputDateChange}
              value={ticketDates["departureDate"]}
              type="date"
              className="bg-[#f4f6f8] lg:w-48 sm:w-[147px] sm:text-sm px-5 outline-none disabled:opacity-50 hover:cursor-pointer h-fit"
            ></input>
          </div>

          <div
            className={`flex flex-col h-14 items-center justify-center bg-[#f4f6f8] ${
              isOneWay && "opacity-50"
            }`}
          >
            <span className="text-md font-semibold h-fit tracking-wide ">
              Return
            </span>
            <input
              type="date"
              id="returnDate"
              onChange={handleInputDateChange}
              value={ticketDates["returnDate"]}
              disabled={isOneWay}
              className="bg-[#f4f6f8] lg:w-48 md:w-48 sm:w-[147px] sm:text-sm px-5 outline-none disabled:opacity-50 hover:cursor-pointer h-fit"
            ></input>
          </div>
          <button
            onClick={searchFlight}
            className="flex w-32 lg:w-48 md:w-48 h-14 justify-between items-center px-2 text-sm font-semibold text-white bg-[#e81932] hover:bg-[#ff3545]"
          >
            Search Flight
            <img src={RightArrow} width={20} height={20} alt="rightArrow"></img>
          </button>
        </div>
        <span
          className={`${info.color} ${
            info.text.length === 0 && "hidden"
          } text-sm font-semibold `}
        >
          {info.text}
        </span>
      </div>
    </div>
  );
}

export default FlightReservation
