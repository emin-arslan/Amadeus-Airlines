import React, { useCallback, useState } from "react";
import FlightReservation from "./FlightReservation";
import FlightCard from "./FlightCard";
import LoadingSvg from "../assests/loading.svg"
import EditSvg from "../assests/edit.svg"

const Container = () => {
  const [selectedRoute, setSelectedRoute] = useState({
    departureTicket: {},
    returnTicket: {}
  })

  const [isOneWay, setIsOneWay] = useState(false);
  const [isSecondPart, setIsSecondPart] = useState(undefined);
  const [detailsOpenedIndex, setDetailsOpenedIndex] = useState(-1)
  const [selectedAirportDetailsOpenedIndex, setSelectedAirportDetailsOpenedIndex ] = useState(-1);
  const [findedFlightList, setFindedFlightList] = useState([]);
  const [sectionIndex, setSectionIndex] = useState(0)
  const [sortedType, setSortedType] = useState(-1);
  const sortList = [{name: isSecondPart ?  'Return time':'Departure time', sortType:'departureDate' }, {name:'Flight duration', sortType:'duration' }, {name:'Cost', sortType:'price' }];
  const [isSortedReverse, setIsSortedReverse] = useState(true);

  const sortedButtonClick = (fieldName) => {
    let isReverseSort = isSortedReverse;
    if(sortedType === fieldName){
      isReverseSort = !isReverseSort
    }
    else{
      isReverseSort = false;
    }
    setSortedType(fieldName)
    setIsSortedReverse(isReverseSort)
    sortArray(fieldName,isReverseSort)

  }

  const sortArray = useCallback( (fieldName, isReverseSort) => {
    let sortedArray = findedFlightList;
    if(!isReverseSort && (fieldName === 'duration')){
      sortedArray = findedFlightList.sort((current,next) => (  new Date(current['departureDate']) - new Date(current['arrivalDate']) ) - 
                                                  (  new Date(next['departureDate']) - new Date(next['arrivalDate']) ) )
    }
    else if(isReverseSort && (fieldName === 'duration')){
      sortedArray = findedFlightList.sort((current,next) => (  new Date(next['departureDate']) - new Date(next['arrivalDate']) ) - 
                                                  (  new Date(current['departureDate']) - new Date(current['arrivalDate']) ) )
    }
    else if(!isReverseSort && (fieldName === 'departureDate' || fieldName === 'arrivalDate')){
      sortedArray = findedFlightList.sort((current,next) => new Date(current[fieldName]) - new Date(next[fieldName]))
    }
    else if(isReverseSort && (fieldName === 'departureDate' || fieldName === 'arrivalDate')){
      sortedArray = findedFlightList.sort((current,next) => new Date(next[fieldName]) - new Date(current[fieldName]))
    }
    else if(!isReverseSort && fieldName === 'price'){
      sortedArray = findedFlightList.sort((current,next) => current[fieldName] - next[fieldName])
    }
    else if(isReverseSort && fieldName === 'price'){
      sortedArray = findedFlightList.sort((current,next) =>  next[fieldName] - current[fieldName] )
    }
    setFindedFlightList(sortedArray)
  },[findedFlightList]
  )

  const showFlights = (count) => {
    return findedFlightList.map((flight) => <FlightCard key={flight.id} index={flight.id} flight={flight} setSelectedRoute = {setSelectedRoute} selectedRoute = {selectedRoute}  isSecondPart = {isSecondPart} setIsSecondPart ={setIsSecondPart} setDetailsOpenedIndex={setDetailsOpenedIndex} detailsOpenedIndex={detailsOpenedIndex}/>);
  };
  return (
    <div className="flex flex-col h-[450px] w-full items-center justify-center bg-[url('https://cdn.turkishairlines.com/m/6761929144cccc1e/original/anasayfa-1400.webp')] bg-cover bg-no-repeat ">
      <div className="flex flex-col h-full w-[50%] lg:w-[80%] md:w-[90%] xl:w-[60%] sm:w-[90%] justify-center text-white -ml-4">
        <span className="block text-2xl mt-20">HELLO,</span>
        <span className="text-4xl font-semibold">
          Where would you like to explore?
        </span>
        
      </div>
      <div className="flex-col items-end h-1/6 w-[50%] lg:w-[80%] md:w-[90%] xl:w-[60%] sm:w-[90%]">
        <FlightReservation setSectionIndex = {setSectionIndex} isOneWay={isOneWay} isSecondPart={isSecondPart} setIsSecondPart = {setIsSecondPart} setIsOneWay={setIsOneWay} setFindedFlightList={setFindedFlightList} setSelectedRoute = {setSelectedRoute} />
        {selectedRoute.departureTicket["id"] > -1 && (
          <>
            <div className="flex-col h-fit font-semibold text-white py-2 mt-5">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-20 bg-[#e81932] px-2 py-1">
                  Departure
                </span>
                <div className="flex space-x-1 hover:cursor-pointer">
                  <img src={EditSvg} alt="editSVG" />
                  <span onClick={() => setIsSecondPart(false)} className="text-blue-600"> Edit Flight</span>
                </div>
              </div>
              <div>
                <span className="text-black">{` ${selectedRoute.departureTicket['departureAirport']['city'].toUpperCase()} - 
                ${selectedRoute.departureTicket['destinationAirport']['city'].toUpperCase()} ${new Date(selectedRoute.departureTicket['departureDate']).toLocaleDateString()} `}</span>
              </div>
            </div>
            <FlightCard
              key={selectedRoute.departureTicket["id"]}
              flight={selectedRoute.departureTicket}
              setDetailsOpenedIndex={setDetailsOpenedIndex}
              detailsOpenedIndex={detailsOpenedIndex}
              isSelected = {true}
            />
          </>
        )}
        {selectedRoute.returnTicket["id"] > -1 && (
          <>
            <div className="flex-col h-fit font-semibold text-white py-2 mt-5">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-20 bg-[#2073e3] px-2 py-1">
                  Return
                </span>
                <div className="flex space-x-1 hover:cursor-pointer">
                  <img src={EditSvg} alt="editSVG" />
                  <span onClick={() => setIsSecondPart(true)} className="text-blue-600"> Edit Flight</span>
                </div>
              </div>
              <div>
              <span className="text-black">{` ${selectedRoute.returnTicket['departureAirport']['city'].toUpperCase()} - 
                ${selectedRoute.returnTicket['destinationAirport']['city'].toUpperCase()} ${new Date(selectedRoute.returnTicket['departureDate']).toLocaleDateString()} `}</span>
              </div>
            </div>
            <FlightCard
              key={selectedRoute.returnTicket["id"]}
              flight={selectedRoute.returnTicket}
              setDetailsOpenedIndex={setSelectedAirportDetailsOpenedIndex}
              detailsOpenedIndex={selectedAirportDetailsOpenedIndex}
              isSelected = {true}
            />
          </>
        )}
        <div className="w-full flex items-end justify-end mt-10 mb-5">
          <div className="w-auto sm:w-full">
            <span className="font-semibold text-sm text-gray-500">
              Sorting criteria
            </span>
            <div className="flex space-x-5 items-end justify-end sm:items-start sm:justify-start">
              {sortList.map((button, index) => (
                <button
                  key={index}
                  id={index}
                  disabled={findedFlightList.length === 0 && true}
                  onClick={(e) => sortedButtonClick(button["sortType"])}
                  className={`w-32 h-10 bg-white disabled:opacity-30 drop-shadow-xl text-sm font-semibold rounded-lg transition-colors duration-100 ${
                    sortedType === button["sortType"] &&
                    "border-blue-400 border text-blue-600"
                  } `}
                >
                  {button["name"]}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex flex-col h-auto w-full border-2 border-gray-200 rounded bg-[#f9f9f9] p-2">
          {findedFlightList === undefined ? (
            <div className="flex items-center justify-center w-full"></div>
          ) : findedFlightList.length === 0 ? (
            <div className="">
              {sectionIndex === 0 ? 'The found results will be listed here':
              sectionIndex === 1 ? <img src={LoadingSvg} width={100} alt="loadingSVG" />:
              sectionIndex === -1 ? 'No suitable results found for departure.':
              sectionIndex === -2 && 'No suitable results found for the return.'
              }
              {showFlights()}
            </div>
          ) : (
            <div className="space-y-5">
              {isSecondPart && !isOneWay ? "Suitable tickets for the return are listed.":
                "Suitable tickets for the departure are listed"}
              {showFlights()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
