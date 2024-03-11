import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countires.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // add country
  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  // add flag
  const handleVisitedFlags = (flag) => {
    const newFlag = [...visitedFlags, flag];
    setVisitedFlags(newFlag);
  };

  

  return (
    <>
      <h3>Countries: {countries.length} </h3>
      <div>
        <h3>Visited countries: {visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* ============== */}
      <div className="flag-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      {/* ================ */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
