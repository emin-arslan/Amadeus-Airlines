import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FlyingPlane from "../../assests/flyingPlane.svg";

const Input = ({ title, onChange, additionalClasses, name, flightRoute, setFlightRoute, flightType }) => {
  const airportNames = require("./airportNames.json");
  const [findedAirports, setFindedAirports] = useState([]);
  const [selectedAirportIndex, setSelectedAirportIndex] = useState(-1);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isAirportOptionsOpened, setIsAirportOptionsOpened] = useState(false);
  console.log(flightType)
  const handleKeyDown = (e) => {

    if(e.key === 'ArrowDown')
    {
      if( selectedAirportIndex >= findedAirports.length - 1 || selectedAirportIndex >= 4)
      {
        setSelectedAirportIndex(0);
      }
      else if( selectedAirportIndex < findedAirports.length - 1)
      {
        setSelectedAirportIndex(selectedAirportIndex + 1);
      }
    }
    else if(e.key === 'ArrowUp'){
      if(selectedAirportIndex <= 0)
      {
        if(findedAirports.length - 1 > 4 )
          setSelectedAirportIndex(4);
        else
        setSelectedAirportIndex(findedAirports.length-1);
      }
      else if(selectedAirportIndex > -1)
      {
        setSelectedAirportIndex(selectedAirportIndex - 1)
      }
    }
    else if(e.key === 'Enter'){
      if(isAirportOptionsOpened)
      {
        handleSelectAirport(findedAirports[selectedAirportIndex]);
      }
    }
    else if(e.key === 'Tab'){
      setIsAirportOptionsOpened(false);
    }

  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedAirportIndex, findedAirports]);


  useEffect(() => {
    window.addEventListener('click', handleVisibiltyAirportOptions);

    return () => {
      window.removeEventListener('click', handleVisibiltyAirportOptions);
    };
  }, []);

  const handleVisibiltyAirportOptions = (e) => {

    if(e.target.id != 'airportOptions' || e.target.id != 'airportInput')
    {
      setIsAirportOptionsOpened(false)
    }
  }

  const handleSelectAirport = (e) => {
    setFlightRoute({ ...flightRoute, [flightType]: e });
    setIsAirportOptionsOpened(false);
  }
  const handleOnChange = (text) => {
    setIsAirportOptionsOpened(true);
    setFlightRoute({ ...flightRoute, [flightType]: {} });
    text = text.toUpperCase();
    if (text !== " " && text !== null && text !== undefined && text !== "") {
      const result = airportNames
        .filter(
          (airport) =>
            airport["code"].toUpperCase().includes(text) ||
            airport["city"].toUpperCase().includes(text)
        )
        .map((airport) => ({
          name: airport["name"],
          city: airport["city"],
          country: airport["country"],
          code: airport["code"],
        }));

      setFindedAirports([...result]);
      setSelectedAirportIndex(-1)
    } else setFindedAirports([]);
  };

  return (
    <div>
      <label className="flex-1 relative block">
        <input
          id="airportInput"
          onChange={(e) => handleOnChange(e.target.value)}
          required
          className={`h-14 px-4 rounded w-full transition-colors outline-none peer text-sm ${additionalClasses}`}
          value={flightRoute[flightType]['name']?.length > 0 ? flightRoute[flightType]['city'] : null}
        ></input>
        <span className="absolute top-0 left-0 h-full px-4 flex items-center font-semibold text-sm text-[#818e95] transition-all peer-focus:h-4 peer-focus:text-[10px] peer-valid:h-4 peer-valid:text-[10px]">
          {title}
        </span>
        <span className="absolute bottom-0 left-0 w-48 text-xs text-[#818e95] font-semibold px-4 line-clamp-1">
          {
            flightRoute[flightType]['name']?.length > 0 && flightRoute[flightType]['name']
          }
        </span>
      </label>
      <div id='airportOptions' className={`absolute z-50 bg-white shadow-xl h-auto w-96 ${!isAirportOptionsOpened && 'hidden'}`}>
        <span className='block px-5 py-3 font-semibold'>
          {findedAirports.length === 0 ? "Tüm Havalimanlarımız" : "HAVALİMANI"}
        </span>
        {findedAirports.slice(0,5).map((e, index) => {
            return (
              <div key={index} onClick={()=> handleSelectAirport(e)} className={`flex flex-wrap ${selectedAirportIndex == index && 'bg-[#3685e7] text-white'} items-center px-5 py-2 hover:bg-[#3685e7] group hover:text-white text-[15px] hover:cursor-pointer font-semibold`}>
                <img className="pr-2" alt="flyingPlane" src={FlyingPlane}></img>
                <span className="line-clamp-1">{e["name"]}</span>
                <span className="px-2">{`(${e["code"]}),`}</span>
                <span className="px-2">{e["city"]}</span>
                <span className="text-gray-500 group-hover:text-white italic">
                  {e["country"]}
                </span>
              </div>
            );
        })}
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  additionalClasses: PropTypes.string,
};

Input.defaultProps = {
  name: "",
  title: "DefaultValue",
  onChange: () => {},
  additionalClasses: "",
};

export default Input;
