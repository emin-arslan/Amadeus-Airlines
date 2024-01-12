import React, { useCallback, useMemo, useState } from "react";
import Input from "./Input";
import FlightReservation from "./FlightReservation";
import FlightCard from "./FlightCard";

const Container = () => {
  const allList =  require("./flights.json")
  const [findedFlightList, setFindedFlightList] = useState(allList);
  const [sortedType, setSortedType] = useState(-1);
  const sortList = [{name:'Kalkış saati', sortType:'departureDate' }, {name:'Dönüş saati', sortType:'arrivalDate' }, {name:'Uçuş uzunluğu', sortType:'duration' }, {name:'Ücret', sortType:'price' }];
  const [isSortedReverse, setIsSortedReverse] = useState(true);

  const sortedButtonClick = (fieldName) => {
    console.log(fieldName)
    let isReverseSort = isSortedReverse;
    if(sortedType == fieldName){
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
    console.log(isSortedReverse)
    let sortedArray = findedFlightList;
    if(!isReverseSort && (fieldName === 'duration')){
      console.log('girdi..false')
      sortedArray = findedFlightList.sort((current,next) => (  new Date(current['departureDate']) - new Date(current['arrivalDate']) ) - 
                                                  (  new Date(next['departureDate']) - new Date(next['arrivalDate']) ) )
    }
    else if(isReverseSort && (fieldName == 'duration')){
      console.log('girdi..true')
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
    return findedFlightList
      .slice(0, 15)
      .map((flight) => <FlightCard key={flight.id} flight={flight} />);
  };
  return (
    <div className="flex flex-col h-[450px] w-full items-center justify-center bg-[url('https://cdn.turkishairlines.com/m/6761929144cccc1e/original/anasayfa-1400.webp')] bg-cover bg-no-repeat ">
      <div className="flex flex-col h-full w-3/6 justify-center text-white -ml-4">
        <span className="block text-2xl mt-20">HELLO,</span>
        <span className="text-4xl font-semibold">
          Where would you like to explore?
        </span>
      </div>
      <div className="flex-col items-end h-1/6 w-3/6">
        <FlightReservation setFindedFlightList={setFindedFlightList} />
        <div className="w-full flex items-end justify-end mt-10 mb-5 ">
          <div className="w-6/12">
            <span className="font-semibold text-sm text-gray-500">Sıralama kriterleri</span>
            <div className="flex space-x-5">
              {
                sortList.map((button, index) =>
                  <button key={index} id={index} onClick={(e) => sortedButtonClick(button['sortType'])}
                    className={`w-28 h-10 bg-white drop-shadow-xl text-sm font-semibold rounded-lg transition-colors duration-100 ${sortedType == button['sortType'] && 'border-blue-400 border text-blue-600'} `}>
                    {button['name']}
                  </button>
                )
              }
            </div>
          </div>
        </div>
        <div className="flex flex-col h-auto w-full border-2 border-gray-200 rounded bg-[#f9f9f9] p-2">
          {
          findedFlightList.length == 0 ? <div>Hiç Sonuç bulunmadı. Rastgele Uçuşlar Listeleniyor...{showFlights()}</div> : showFlights()
          }
        </div>
      </div>
    </div>
  );
};

export default Container;
