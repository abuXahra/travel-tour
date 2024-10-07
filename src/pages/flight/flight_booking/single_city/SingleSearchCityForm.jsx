import React, { useState, useEffect } from "react";
import {
  DestinationWrapper,
  FlightDepartWrapper,
  FlightDepatWrapContent,
  FlightForm,
  FlightInputAndDropDown,
  FlightInputContainer,
  FlightInputWrapper,
  FlightPassengerClass,
  FlightPassengerContent,
  FlightPassengerWrapper,
  FlightType,
  Label,
  PassengerWrapper,
  RadioCheck,
  RadioItem,
  RadioItemWrapper,
  RoundTripImg,
  TakeOffWrapper,
} from "../FlightBooking.style";
import {
  MdFlightLand,
  MdFlightTakeoff,
  MdHotel,
  MdLocalHotel,
} from "react-icons/md";
import LocationDropdown from "../../../../components/booking_icons/location_dropdow/LocationDropdown";
import PassengerCard from "../multi_city/components/PassengerCard";
import FlightClass from "../../../../components/booking_icons/flight_class/FlightClass";
import Button from "../../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { LiaCcVisa } from "react-icons/lia";
import { useDebounce } from "../../../../components/dalay";
import roundtrip from "../../../../images/svg-icon/flight-return-round-svgrepo-com.svg";
import PassengerData from "../../../../components/booking_icons/passenger_data/PassengerData";
import { FaCircle } from "react-icons/fa";
import axios from "axios";
import { useAuthStore } from "../../../../store/store";
import MulticitySearchForm from "../multi_city/MulticitySearchForm";
import cityList from "../../../../flightDB/airports.json";
import { SingleAndMulticityWrapper } from "./SingleSearchCityForm.style";
import FlightRadioHeader from "../../../../components/booking_icons/flight_radio_header/FlightRadioHeader";

const defaultCityList = [
  {
    code: "LOS",
    lat: "6.575",
    lon: "3.3222",
    name: "Lagos Murtala Muhammed Airport",
    city: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
    woeid: "12515073",
    tz: "Africa/Lagos",
    phone: "",
    type: "Airports",
    email: "",
    url: "",
    runway_length: "12795",
    elev: "135",
    icao: "DNMM",
    direct_flights: "42",
    carriers: "37",
  },
  {
    code: "ABV",
    lat: "9.0056",
    lon: "7.2661",
    name: "Abuja International Airport",
    city: "Gwagwa",
    state: "Abuja Capital Territory",
    country: "Nigeria",
    woeid: "12515056",
    tz: "Africa/Lagos",
    phone: "",
    type: "Airports",
    email: "",
    url: "",
    runway_length: "11808",
    elev: "1122",
    icao: "DNAA",
    direct_flights: "9",
    carriers: "12",
  },
];

export default function SingleSearchCityForm({
  handleRoundTrip,
  rtBrColor,
  rtCheckColor,
  roundTrip,
  handleOneWay,
  owBrColor,
  owCheckColor,
  oneWay,
  handleMulticity,
  mcBrColor,
  mcCheckColor,
  multiCity,
  showSingleForm,
  showMultiCityForm,
  showReturnDate,
}) {
  const navigate = useNavigate();

  //  query parameters
  let queryParams;

  // roundTrip is selected by default
  const [kickOff, setKickOff] = useState("");
  const [destination, setDestination] = useState();
  const [departDate, setDepartDate] = useState();
  const [returnDate, setreturnDate] = useState();
  const [flightClass, setFlightClass] = useState("ECONOMY");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  // Mr Bobai - >
  const { setSingleFlightResult } = useAuthStore();

  const [originLocationCode, setOriginLocationCode] = useState("");
  const [destinationLocationCode, setDestinationLocationCode] = useState("");

  const currencyCode = "NGN"; // default currency code
  // Mr Bobai - <

  //DROPDOWN VARIABLES
  const [takeOffAirport, setTakeOffAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");

  const [showFlightType, setShowFlightType] = useState(false);
  const [showFlightInputs, setshowFlightInputs] = useState(false);

  // passange count event handler Event handler
  const handleKickOff = (e) => {
    setKickOff(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleDepartureDate = (e) => {
    setDepartDate(e.target.value);
  };

  const handleReturnDate = (e) => {
    setreturnDate(e.target.value);
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

  // Handler for flight class selection
  const handleFlightClassChange = (event) => {
    setFlightClass(event.target.value);
  };

  const [showPassenger, setShowPassenger] = useState(false);
  // Mr Bobai - >
  // DROPDOWN LOCATION AND DESTINATION AIRPORTS

  // const takeOffAportList = [
  //   {
  //       airportAddress: 'Abuja, Nigeria',
  //       airportName: 'Nnamdi Azikwe Internatinal Airport',
  //       airportAbbreviation: 'ABV'
  //   },
  //   {
  //       airportAddress: 'Lagos, Nigeria',
  //       airportName: 'Murtala Muhammad Internatinal Airport',
  //       airportAbbreviation: 'LOS'
  //   },

  // ]

  // const destinationAriporList = [
  //   {
  //     airportAddress: 'Lagos, Nigeria',
  //     airportName: 'Murtala Muhammad Internatinal Airport',
  //     airportAbbreviation: 'LOS'
  // },
  //   {
  //       airportAddress: 'Abuja, Nigeria',
  //       airportName: 'Nnamdi Azikwe Internatinal Airport',
  //       airportAbbreviation: 'ABV'
  //   },

  // ]

  const [takeOffAportList, setTakeOffAportList] = useState(defaultCityList);
  const [destinationAriporList, setDestinationAriporList] =
    useState(defaultCityList);
  // Mr Bobai - <

  const [searchTakeOffInputValue, setSearchTakeOffInputValue] = useState("");
  const [searchDestinationInputValue, setSearchDestinationInputValue] =
    useState("");
  // Mr Bobai - >
  const originLocation = useDebounce(searchTakeOffInputValue);
  const destinationLocation = useDebounce(searchDestinationInputValue);
  useEffect(() => {
    if (originLocation !== "") {
      // airports(originLocation, 0);
      const newFilterData = cityList.filter((item) => {
        if (item.name.toLowerCase().includes(originLocation.toLowerCase())) {
          // if (item.city.toLowerCase().includes(originLocation.toLowerCase())) {
          //   if (
          //     item.state.toLowerCase().includes(originLocation.toLowerCase())
          //   ) {
          //     if (
          //       item.country
          //         .toLowerCase()
          //         .includes(originLocation.toLowerCase())
          //     ) {
          return item;
          //     }
          //   }
          // }
        }
      });
      setTakeOffAportList(newFilterData);
    }
  }, [originLocation]);
  useEffect(() => {
    if (destinationLocation !== "") {
      const newFilterData = cityList.filter((item) => {
        if (
          item.name.toLowerCase().includes(destinationLocation.toLowerCase())
        ) {
          // airports(destinationLocation, 1);
          return item;
        }
      });
      setDestinationAriporList(newFilterData);
    }
  }, [destinationLocation]);
  const airports = async (keyWord, num) => {
    const res = await axios
      .post("http://localhost:5000/airport", { word: keyWord })
      .catch((err) => {
        console.log(err?.response?.data);
      });

    if (res) {
      console.log(res.data.data);

      // setOptions(res.data.data);
      // console.log(num);
      if (num === 0) {
        setTakeOffAportList(res?.data?.data);
      } else {
        setDestinationAriporList(res?.data?.data);
      }

      //navigate("/verification");
    }
  };
  // Mr Bobai - <

  // TakeOff Search airport handler
  const onChangeTakeOffHandler = (e) => {
    setSearchTakeOffInputValue(e.target.value);
  };

  // destionaton Search airport handler
  const onChangeDestinationHandler = (e) => {
    setSearchDestinationInputValue(e.target.value);
  };

  // show/hide takeoff and destination down airport Lists
  const [showTakeOffAirports, setShowTakeOffAirports] = useState(false);
  const [showDestinationAirports, setShowDestinationAirports] = useState(false);

  // Mr Bobai -

  const onCloseTakOffDropdwon = () => {
    setShowTakeOffAirports(false);
  };

  const onCloseDestinationDropdwon = () => {
    setShowDestinationAirports(false);
  };

  // show/hide flightInputs

  const handleShowFlightInputsA = () => {
    setShowTakeOffAirports(!showTakeOffAirports);
    setshowFlightInputs(true);
    setShowFlightType(true);
  };

  const handleShowFlightInputsB = () => {
    setShowDestinationAirports(!showDestinationAirports);
    setshowFlightInputs(true);
    setShowFlightType(true);
  };
  if (showReturnDate) {
    queryParams = {
      originLocationCode,
      destinationLocationCode,
      departureDate: departDate,
      returnDate,
      adults: adults,
      children: children,
      infants: infants,
      travelClass: flightClass,
      // nonStop,
      currencyCode,
    };
  } else {
    queryParams = {
      originLocationCode,
      destinationLocationCode,
      departureDate: departDate,
      // returnDate,
      adults: adults,
      children: children,
      infants: infants,
      travelClass: flightClass,
      // nonStop,
      currencyCode,
    };
  }
  const bookflights = async () => {
    const res = await axios
      .post("http://localhost:5000/bookflights", queryParams)
      .catch((err) => {
        console.log(err?.response?.data);
      });

    if (res) {
      console.log(res.data.data);
      setSingleFlightResult([
        takeOffAirport,
        destinationAirport,
        res.data.data,
        queryParams.originLocationCode,
        queryParams.destinationLocationCode,
        queryParams,
      ]);
      // setFlightSearch(res.data.data);
      if (showReturnDate) {
        navigate("/flight-result");
      } else if (!showReturnDate) {
        navigate("/oneway-result");
      }
    }
  };
  return (
    <SingleAndMulticityWrapper>
      {showFlightType && (
        // Flight Radion Button Components
        <FlightRadioHeader
          handleRoundTrip={handleRoundTrip}
          rtBrColor={rtBrColor}
          rtCheckColor={rtCheckColor}
          roundTrip={roundTrip}
          handleOneWay={handleOneWay}
          owBrColor={owBrColor}
          owCheckColor={owCheckColor}
          oneWay={oneWay}
          handleMulticity={handleMulticity}
          mcBrColor={mcBrColor}
          mcCheckColor={mcCheckColor}
          multiCity={multiCity}
        />
      )}

      {showSingleForm && (
        <FlightForm>
          <FlightInputContainer>
            {/* takeoff input */}
            <FlightInputAndDropDown>
              <FlightInputWrapper onClick={handleShowFlightInputsA}>
                <input
                  type="text"
                  placeholder="From"
                  value={takeOffAirport}
                  onChange={handleKickOff}
                />
                <span>
                  <MdFlightTakeoff />
                </span>
              </FlightInputWrapper>

              {/*  Takeoff Airport Dropdown*/}
              {showTakeOffAirports && (
                <TakeOffWrapper>
                  <LocationDropdown
                    onChange={onChangeTakeOffHandler}
                    items={takeOffAportList}
                    searchInputValue={searchTakeOffInputValue}
                    setAirportSelected={setTakeOffAirport}
                    setCityCode={setOriginLocationCode}
                    onCloseDropdwon={onCloseTakOffDropdwon}
                    Icon={<MdFlightTakeoff />}
                  />
                </TakeOffWrapper>
              )}
            </FlightInputAndDropDown>

            <RoundTripImg>
              <img src={roundtrip} alt="trip icon" />
            </RoundTripImg>

            {/*Destination input  */}
            <FlightInputAndDropDown>
              <FlightInputWrapper onClick={handleShowFlightInputsB}>
                <input
                  type="text"
                  placeholder="To"
                  value={destinationAirport}
                  onChange={handleDestination}
                />
                <span>
                  <MdFlightLand />
                </span>
              </FlightInputWrapper>

              {/* dropdown */}
              {showDestinationAirports && (
                <DestinationWrapper>
                  <LocationDropdown
                    onChange={onChangeDestinationHandler}
                    items={destinationAriporList}
                    searchInputValue={searchDestinationInputValue}
                    setAirportSelected={setDestinationAirport}
                    setCityCode={setDestinationLocationCode}
                    onCloseDropdwon={onCloseDestinationDropdwon}
                    Icon={<MdFlightLand />}
                  />
                </DestinationWrapper>
              )}
            </FlightInputAndDropDown>
          </FlightInputContainer>

          {/* <!-- Depature and destination container --> */}
          {showFlightInputs && (
            <FlightDepartWrapper>
              <FlightDepatWrapContent>
                <Label for="depart">Departing</Label>
                <input
                  type="date"
                  id="depart"
                  onChange={handleDepartureDate}
                  value={departDate}
                />
              </FlightDepatWrapContent>

              {showReturnDate && (
                <FlightDepatWrapContent>
                  <Label for="depart">Returning</Label>
                  <input
                    type="date"
                    id="return"
                    onChange={handleReturnDate}
                    value={returnDate}
                  />
                </FlightDepatWrapContent>
              )}

              <FlightDepatWrapContent>
                <FlightPassengerWrapper>
                  <FlightPassengerClass
                    onClick={() => setShowPassenger(!showPassenger)}
                  >
                    <span>Passenger and Class</span>
                    <div>
                      <strong>
                        <span id="passengerValue">{totalPassengers}</span>{" "}
                        passenger and <span id="classValue">{flightClass}</span>{" "}
                      </strong>
                    </div>
                  </FlightPassengerClass>
                  {/* Passengers */}{" "}
                  {showPassenger && (
                    <FlightPassengerContent>
                      <PassengerWrapper>
                        <h3>Passenger</h3>
                        <PassengerData
                          title={"Adults"}
                          Subtitle={"12y and up"}
                          value={adults}
                          reduceFunc={() => handleDecrement("adults")}
                          addFunc={() => handleIncrement("adults")}
                        />

                        {/* <!-- number of children --> */}
                        <PassengerData
                          title={"Children"}
                          Subtitle={"Ages (2y-11y)"}
                          value={children}
                          reduceFunc={() => handleDecrement("children")}
                          addFunc={() => handleIncrement("children")}
                        />

                        {/* <!-- number of Infants --> */}
                        <PassengerData
                          title={"Infants"}
                          Subtitle={"Below 2y"}
                          value={infants}
                          reduceFunc={() => handleDecrement("infants")}
                          addFunc={() => handleIncrement("infants")}
                        />

                        <hr />
                        <h3>Class</h3>
                        <FlightClass
                          name="flightClass"
                          value="ECONOMY"
                          isChecked={flightClass === "ECONOMY"}
                          onChange={handleFlightClassChange}
                        />

                        <FlightClass
                          name="flightClass"
                          value="PREMIUM_ECONOMY"
                          isChecked={flightClass === "PREMIUM_ECONOMY"}
                          onChange={handleFlightClassChange}
                        />

                        <FlightClass
                          name="flightClass"
                          value="BUSINESS"
                          isChecked={flightClass === "BUSINESS"}
                          onChange={handleFlightClassChange}
                        />

                        <FlightClass
                          name="flightClass"
                          value="FIRST"
                          isChecked={flightClass === "FIRST"}
                          onChange={handleFlightClassChange}
                        />

                        {/* Continue Button */}
                        <div>
                          <Button
                            text={"Continue"}
                            onClick={() => setShowPassenger(false)}
                          />
                        </div>
                      </PassengerWrapper>
                    </FlightPassengerContent>
                  )}
                </FlightPassengerWrapper>
              </FlightDepatWrapContent>

              <div>
                <Button onClick={() => bookflights()} text={"Search Flight"} />
              </div>
            </FlightDepartWrapper>
          )}
        </FlightForm>
      )}
      {showMultiCityForm && <MulticitySearchForm />}
    </SingleAndMulticityWrapper>
  );
}
