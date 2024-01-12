import React, { useState } from "react";
import PropTypes from "prop-types";
import FlyingPlane from "../../assests/flyingPlane.svg";

const Input = ({ title, onChange, additionalClasses, name }) => {
  const airportNames = require("./airportNames.json");
  const [airport, setAirPort] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState([]);

  const handleSelectedAirport = (e) => {
    setSelectedAirport(e);
  }
  const handleOnChange = (text) => {
    setSelectedAirport([])
    text = text.toUpperCase();
    console.log(text);
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

      setAirPort([...result]);
    } else setAirPort([]);
  };

  return (
    <div>
      <label className="flex-1 relative block">
        <input
          onChange={(e) => handleOnChange(e.target.value)}
          required
          className={`h-14 px-4 rounded w-full transition-colors outline-none peer text-sm ${additionalClasses}`}
          value={selectedAirport['name']?.length > 0 ? selectedAirport['city'] : null}
        ></input>
        <span className="absolute top-0 left-0 h-full px-4 flex items-center font-semibold text-sm text-[#818e95] transition-all peer-focus:h-4 peer-focus:text-[10px] peer-valid:h-4 peer-valid:text-[10px]">
          {title}
        </span>
        <span className="absolute bottom-0 left-0 w-48 text-xs text-[#818e95] font-semibold px-4 line-clamp-1">
          {
            selectedAirport['name']?.length > 0 && selectedAirport['name']
          }
        </span>
      </label>
      <div className={`absolute z-50 bg-white shadow-xl h-auto w-96 ${selectedAirport['name']?.length > 0 && 'hidden'}`}>
        <span className={`block px-5 py-3 font-semibold ${airport.length < 1 && 'hidden'}`}>
          {airport.length < 1 ? "Tüm Havalimanlarımız" : "HAVALİMANI"}
        </span>
        {airport.map((e, index) => {
          if (index < 5)
            return (
              <div key={index} id={index} onClick={()=> handleSelectedAirport(e)} className="flex flex-wrap items-center px-5 py-2 hover:bg-[#3685e7] group hover:text-white text-[15px] hover:cursor-pointer font-semibold">
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
