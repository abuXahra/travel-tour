import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LocationDropdown from "./LocationDropdown";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import {
  DestinationWrapper,
  FlightDepartWrapper,
  FlightDepatWrapContent,
  FlightInputAndDropDown,
  FlightInputContainer,
  FlightInputWrapper,
  Label,
  RoundTripImg,
  TakeOffWrapper,
} from "../../FlightBooking.style";
import roundtrip from "../../../../../images/svg-icon/flight-return-round-svgrepo-com.svg";
import {
  DeleteDestination,
  InputWrapper,
  MulticCityContent,
  MultiFlightClass,
  MultiFlightClassDropdown,
  MultiFlightClassTitle,
} from "./MultiCityInput.style";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { useDebounce } from "../../../../../components/dalay";
import { FaTimes } from "react-icons/fa";
import iataAirports from "../../../../../flightDB/IATA_airports.json";
import { flightClassItems } from "../../../../../data/object/flightClass";
import DateSinglePickerCalender from "../../../../../components/DateSingle";

const defaultCityList = [
  {
    IATA: "LOS",
    ICAO: "DNMM",
    Airport_name: "Murtala Muhammed International Airport",
    Location_served: "Lagos,\u00a0Nigeria",
    Time: "UTC+01:00",
    DST: null,
  },
  {
    IATA: "ABV",
    ICAO: "DNAA",
    Airport_name: "Nnamdi Azikiwe International Airport",
    Location_served: "Abuja,\u00a0Nigeria",
    Time: "UTC+01:00",
    DST: null,
  },
  {
    IATA: "DXB",
    ICAO: "OMDB",
    Airport_name: "Dubai International Airport",
    Location_served: "Dubai,\u00a0United Arab Emirates",
    Time: "UTC+04:00",
    DST: null,
  },
  {
    IATA: "LHR",
    ICAO: "EGLL",
    Airport_name: "Heathrow Airport",
    Location_served: "London,\u00a0England, United Kingdom",
    Time: "UTC\u00b100:00",
    DST: "Mar-Oct",
  },
  {
    IATA: "KAN",
    ICAO: "DNKN",
    Airport_name: "Mallam Aminu Kano International Airport",
    Location_served: "Kano,\u00a0Nigeria",
    Time: "UTC+01:00",
    DST: null,
  },
  {
    IATA: "LGA",
    ICAO: "KLGA",
    Airport_name: "LaGuardia Airport",
    Location_served: "New York City,\u00a0New York, United States",
    Time: "UTC\u221205:00",
    DST: "Mar-Nov",
  },
];

const MultiCityInput = ({
  index,
  city,
  onCityChange,
  onRemove,
  setShowFlightButton,
  locationError,
}) => {
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showFlightInputs, setshowFlightInputs] = useState(false);
  const [showClass, setShowClass] = useState(false);

  const [originLocationCode, setOriginLocationCode] = useState("");
  const [destinationLocationCode, setDestinationLocationCode] = useState("");
  const [searchTakeOffInputValue, setSearchTakeOffInputValue] = useState("");
  const [searchDestinationInputValue, setSearchDestinationInputValue] =
    useState("");
  const originLocation = useDebounce(searchTakeOffInputValue);
  const destinationLocation = useDebounce(searchDestinationInputValue);

  useEffect(() => {
    if (originLocation !== "") {
      // airports(originLocation, 0);
      const searchTerm = originLocation.toLowerCase();
      // First, try to match IATA codes
      let newFilterData = iataAirports.filter((item) =>
        item.IATA?.toLowerCase().startsWith(searchTerm)
      );

      // If no IATA matches, fall back to other fields
      if (newFilterData.length === 0) {
        newFilterData = iataAirports.filter((item) =>
          ["Location_served", "Airport_name"].some((key) =>
            item[key]?.toLowerCase().startsWith(searchTerm)
          )
        );
      }
      setTakeOffAportList(newFilterData);
    }
  }, [originLocation]);
  useEffect(() => {
    if (destinationLocation !== "") {
      const searchTerm = destinationLocation.toLowerCase();
      // First, try to match IATA codes
      let newFilterData = iataAirports.filter((item) =>
        item.IATA?.toLowerCase().startsWith(searchTerm)
      );

      // If no IATA matches, fall back to other fields
      if (newFilterData.length === 0) {
        newFilterData = iataAirports.filter((item) =>
          ["Location_served", "Airport_name"].some((key) =>
            item[key]?.toLowerCase().startsWith(searchTerm)
          )
        );
      }
      setDestinationAriporList(newFilterData);
    }
  }, [destinationLocation]);
  const handleInputChange = (key, value) => {
    onCityChange(index, key, value);
  };

  const [classSelect, setClassSelect] = useState(flightClassItems[0].value);

  useEffect(() => {
    handleInputChange("originLocationCode", originLocationCode);
    handleInputChange("destinationLocationCode", destinationLocationCode);
    handleInputChange("tripClass", classSelect);
  }, [originLocationCode, destinationLocationCode, classSelect]);

  const toggleFromDropdown = () => {
    setShowFromDropdown(!showFromDropdown);
    setShowToDropdown(false); // Close 'To' dropdown if open
    setshowFlightInputs(true);
    setShowFlightButton(true);
  };

  const toggleToDropdown = () => {
    setShowToDropdown(!showToDropdown);
    setShowFromDropdown(false); // Close 'From' dropdown if open
    setshowFlightInputs(true);
    setShowFlightButton(true);
  };

  const handleFromSelect = (value) => {
    handleInputChange("from", value);
    // setShowFromDropdown(false);
  };

  const handleToSelect = (value) => {
    handleInputChange("to", value);
    // setShowToDropdown(false);
  };

  const handleDepartureDateChange = (e) => {
    handleInputChange("departureDate", e.target.value);
  };

  const handleReturnDateChange = (e) => {
    handleInputChange("returnDate", e.target.value);
  };

  const [takeOffAportList, setTakeOffAportList] = useState(defaultCityList);
  const [destinationAriporList, setDestinationAriporList] =
    useState(defaultCityList);

  const handSelect = (e) => {
    setClassSelect(e);
    handleInputChange("tripClass", classSelect);
  };

  // handle the switch button
  const handleSwitchInput = () => {
    // Store current values before updating anything
    const fromValue = city.from;
    const toValue = city.to;
    const fromCode = originLocationCode;
    const toCode = destinationLocationCode;

    // Swap input values
    setSearchTakeOffInputValue(toValue);
    setSearchDestinationInputValue(fromValue);

    // Update bound city object
    handleInputChange("from", toValue);
    handleInputChange("to", fromValue);

    // Swap airport codes
    setOriginLocationCode(toCode);
    setDestinationLocationCode(fromCode);
  };

  const setDepartDate = (formattedDate) => {
    handleInputChange("departureDate", formattedDate);
  };

  const labelTopFrom = city.from ? "10px" : "35px";
  const labelTopTo = city.to ? "10px" : "35px";

  const getCityName = (locationString) => {
    const parts = locationString.split(",");
    return parts.length >= 2 ? parts[1].trim() : "";
    // const parts = locationString.split(',');
    // return parts.length >= 1 ? parts[0].trim() : '';
  };

  const fromCityName = getCityName(city.from);
  const toCityName = getCityName(city.to);

  return (
    <InputWrapper>
      <FlightInputContainer>
        {/* takeoff input */}
        <FlightInputAndDropDown>
          <FlightInputWrapper onClick={toggleFromDropdown}>
            <Label top={labelTopFrom} for="depart">
              From where?
            </Label>
            <p>{city.from}</p>
            <input
              type="text"
              // placeholder="From"
              value={fromCityName ? fromCityName : city.from}
              // value={city.from}
              onChange={(e) => {
                handleInputChange("from", e.target.value);
                setSearchTakeOffInputValue(e.target.value);
                handleFromSelect(e.target.value);
                if (e.target.value.length > 0) {
                  setShowFromDropdown(true);
                } else {
                  setShowFromDropdown(false);
                }
              }}
            />
            <span>
              <MdFlightTakeoff />
            </span>
          </FlightInputWrapper>

          {/*  Takeoff Airport Dropdown*/}
          {showFromDropdown && (
            <TakeOffWrapper>
              <LocationDropdown
                // onChange={(e) => {
                //   handleFromSelect(e.target.value);
                //   setSearchTakeOffInputValue(e.target.value);
                // }}
                items={takeOffAportList} //{/* Pass items for 'From' location dropdown */}
                // searchInputValue={searchTakeOffInputValue} //{/* Manage search input state */}
                setAirportSelected={(airport) => handleFromSelect(airport)}
                setCityCode={setOriginLocationCode}
                onCloseDropdown={() => setShowFromDropdown(false)}
                Icon={MdFlightTakeoff} //{/* Example icon */}
              />
            </TakeOffWrapper>
          )}
        </FlightInputAndDropDown>
        <RoundTripImg onClick={handleSwitchInput}>
          <img src={roundtrip} alt="trip icon" />
        </RoundTripImg>

        {/*Destination input  */}
        <FlightInputAndDropDown>
          <FlightInputWrapper onClick={toggleToDropdown}>
            <Label top={labelTopTo} for="depart">
              To where?
            </Label>
            <p>{city.to}</p>
            <input
              type="text"
              // placeholder="To"
              value={toCityName ? toCityName : city.to}
              onChange={(e) => {
                handleInputChange("to", e.target.value);
                handleToSelect(e.target.value);
                setSearchDestinationInputValue(e.target.value);
                if (e.target.value.length > 0) {
                  setShowToDropdown(true);
                } else {
                  setShowToDropdown(false);
                }
              }}
            />
            <span>
              <MdFlightLand />
            </span>
          </FlightInputWrapper>

          {index > 0 && (
            <DeleteDestination>
              <FaTimes onClick={() => onRemove(index)} />
            </DeleteDestination>
          )}

          {/* dropdown */}
          {showToDropdown && (
            <DestinationWrapper>
              <LocationDropdown
                items={destinationAriporList} //{/* Pass items for 'To' location dropdown */}
                setCityCode={setDestinationLocationCode}
                setAirportSelected={(airport) => handleToSelect(airport)}
                onCloseDropdown={() => setShowToDropdown(false)}
                Icon={MdFlightLand} //{/* Example icon */}
                // onChange={(e) => {
                //   handleToSelect(e.target.value);
                //   setSearchDestinationInputValue(e.target.value);
                // }}
                // searchInputValue={searchDestinationInputValue} // {/* Manage search input state */}
              />
            </DestinationWrapper>
          )}
        </FlightInputAndDropDown>
      </FlightInputContainer>

      {/* <!-- Depature and destination container --> */}
      {showFlightInputs && (
        <FlightDepartWrapper>
          {/* <FlightDepatWrapContent>
            <Label for="depart">Departure</Label>
            <input
              type="date"
              placeholder="Departure Date"
              value={city.departureDate}
              onChange={handleDepartureDateChange}
            />
          </FlightDepatWrapContent> */}

          <FlightDepatWrapContent
            contWidth={"100%"}
            bgColor={"#0d398428"}
            borderRadius={"10px"}
          >
            <Label for="depart">Departure Date</Label>
            <DateSinglePickerCalender setDepartDate={setDepartDate} />
          </FlightDepatWrapContent>

          {/* <FlightDepatWrapContent>
        <Label for="depart">Returning</Label>
        <input
        type="date"
        placeholder="Return Date"
        value={city.returnDate}
        onChange={handleReturnDateChange}
      />
    </FlightDepatWrapContent> */}

          <FlightDepatWrapContent>
            <Label for="depart">Class</Label>
            <MultiFlightClass
              onClick={() => {
                setShowClass(!showClass);
              }}
            >
              <MultiFlightClassTitle>
                {/* <span style={{fontSize: "10px"}}>Class</span> */}
                <span>
                  {classSelect} <IoMdArrowDropdown />
                </span>
              </MultiFlightClassTitle>

              {/* Class drop down */}
              {showClass && (
                <MultiFlightClassDropdown>
                  {flightClassItems.map((item, i) => (
                    <span
                      key={i}
                      onClick={() => {
                        handSelect(item.title);
                        handleInputChange("tripClass", classSelect);
                      }}
                    >
                      <IoMdArrowDropright />
                      {item.title}
                    </span>
                  ))}
                </MultiFlightClassDropdown>
              )}
            </MultiFlightClass>
          </FlightDepatWrapContent>
        </FlightDepartWrapper>
      )}
    </InputWrapper>
  );
};

export default MultiCityInput;
