import React, { useState } from "react";
import MultiCityInput from "./components/MultiCityInput";
import { FlightForm, FlightWrapper } from "../FlightBooking.style";
import Button from "../../../../components/button/Button";
import PassengerCard from "./components/PassengerCard";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../store/store";
import { CheckboxWrapper } from "./MultiCity.style";

const MulticitySearchForm = () => {
  
  
    // Checkbox Validation: Terms and Agreement
    // State for form values
    const [isChecked, setIsChecked] = useState(false);
  
  
    // Handler for checkbox change
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
  
  const maxCities = 4; // Maximum number of city inputs
  const { setMultiCityFlightResult, flightOffersSearchMultiCity, setLoader } =
    useAuthStore();

    const todayDate = new Date().toISOString().split('T')[0]; 

  const [cities, setCities] = useState([
    { id: 1, from: "", to: "", departureDate: todayDate },
    { id: 2, from: "", to: "", departureDate: todayDate },
  ]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigate = useNavigate();
  console.log(cities);

  const addCity = (e) => {
    e.preventDefault();
    if (cities.length < maxCities) {
      const newCity = {
        id: cities.length + 1,
        from: "",
        to: "",
        departureDate: "",
      };
      setCities([...cities, newCity]);
    }
  };

  const handleIncrement = (type) => {
    if (type === "adults" && adults < 9) {
      totalPassengers <= 8 && setAdults(adults + 1);
    } else if (type === "children" && children < 4) {
      totalPassengers <= 8 && setChildren(children + 1);
    } else if (type === "infants" && infants < 2) {
      totalPassengers <= 8 && setInfants(infants + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    } else if (type === "infants" && infants > 0) {
      setInfants(infants - 1);
    }
  };

  const totalPassengers = adults + children + infants;

  const handleCityChange = (index, key, value) => {
    const updatedCities = [...cities];
    updatedCities[index][key] = value;
    setCities(updatedCities);
  };

  const removeCity = (index) => {
    const updatedCities = cities.filter((city, i) => i !== index);
    setCities(updatedCities);
  };

  const [showFlightButton, setShowFlightButton] = useState(false);

  const flightSearch = async () => {

    setLoader(true);
    // console.log();
    // console.log();
    // console.log(adults, children, infants);
    const res = await flightOffersSearchMultiCity({
      passenger: {
        adults: adults,
        children: children,
        infants: infants,
      },
      flightSearch: cities,
    });

    if (res) {
      setLoader(false);
      setMultiCityFlightResult([
        cities,
        res.data,
        {
          adults: adults,
          children: children,
          infants: infants,
          dictionaries: res?.dictionaries,
        },
      ]);

      navigate("/multi-city-result");

      // setHotelResult([queryParams, res.data.data]);
    } else {
      setLoader(false);
    }
  };

  return (
    <FlightForm>

      {/* Passenger component */}
      <PassengerCard
        totalPassenger={totalPassengers}
        adultCount={adults}
        handleAdultReduce={() => handleDecrement("adults")}
        handleAdultAdd={() => handleIncrement("adults")}
        childrenCount={children}
        handleChildrenReduce={() => handleDecrement("children")}
        handleChildrenAdd={() => handleIncrement("children")}
        infantCount={infants}
        handleInfantReduce={() => handleDecrement("infants")}
        handleInfantAdd={() => handleIncrement("infants")}
        pWidth="40%"
        containerContent={
          cities.length < maxCities && (
            <div>
              <Button onClick={addCity} text={"Add Another Destination"} />
            </div>
          )
        }
      />

      {/* Multi City Input Components */}
      {cities.map((city, index) => (
        <MultiCityInput
          key={city.id}
          index={index}
          city={city}
          onCityChange={handleCityChange}
          onRemove={removeCity}
          setShowFlightButton={setShowFlightButton}
        />
      ))}

      {/* Checkbox for flight result multiple date */}
      <CheckboxWrapper>
        <input
           type="checkbox"
           id="terms"
           checked={isChecked}
           onChange={handleCheckboxChange}
        />
        <p>My dates are flexible(+/- 3days)</p>
      </CheckboxWrapper>

      {/* flight search button */}
      {showFlightButton && (
        <div>
          {" "}
          <Button
            onClick={() => {
              flightSearch();
            }}
            text={"Search Flight"}
          />
        </div>
      )}
    </FlightForm>
  );
};

export default MulticitySearchForm;
