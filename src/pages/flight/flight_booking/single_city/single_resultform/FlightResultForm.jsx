import React, { useState, useEffect } from "react";

import {
  MdFlightLand,
  MdFlightTakeoff,
  MdHotel,
  MdLocalHotel,
} from "react-icons/md";
import LocationDropdown from "../../../../../components/booking_icons/location_dropdow/LocationDropdown";
import PassengerCard from "../../multi_city/components/PassengerCard";
import FlightClass from "../../../../../components/booking_icons/flight_class/FlightClass";
import Button from "../../../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { LiaCcVisa } from "react-icons/lia";
import { useDebounce } from "../../../../../components/dalay";
import roundtrip from "../../../../../images/svg-icon/flight-return-round-svgrepo-com.svg";
import PassengerData from "../../../../../components/booking_icons/passenger_data/PassengerData";
import { FaCircle } from "react-icons/fa";
import { useAuthStore } from "../../../../../store/store";
// import MulticitySearchForm from "../../multi_city/MulticitySearchForm";
import cityList from "../../../../../flightDB/airports.json";
import iataAirports from "../../../../../flightDB/IATA_airports.json";
import { SingleAndMulticityWrapper } from ".././SingleSearchCityForm.style";
import FlightRadioHeader from "../../../../../components/booking_icons/flight_radio_header/FlightRadioHeader";
import FlightSlide from "../../../../../components/Flight/flight_packages/flight_slider/FlightSlider";
import Loader from "../../../../../components/loader/Loader";
import DateRangePickerCalender from "../../../../../components/DateRangePickerCalender";

import DateSinglePickerCalender from "../../../../../components/DateSingle";
import { DestinationWrapper, FlightDepartWrapper, FlightDepatWrapContent, FlightForm, FlightInputAndDropDown, FlightInputContainer, FlightInputWrapper, FlightPassengerClass, FlightPassengerContent, FlightPassengerWrapper, FormInputs, Label, PassengerWrapper, RoundTripImg, SubmitButtonWrapper, TakeOffWrapper } from "./FlightResultForm.style";
// import { CheckboxWrapper } from "../../../multi_city/MultiCity.style";
import { toast } from "react-toastify";
import MulticitySearchForm from "../../multi_city/MulticitySearchForm";
import { CheckboxWrapper } from "../../multi_city/MultiCity.style";
import DateSingleReturnCalender from "../../../../../components/DateSingleReturn";

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

export default function FlightResultForm({
    takeOffAirport, 
    destinationAirport, 
    setTakeOffAirport, 
    setDestinationAirport, 
    departDate, 
    setDepartDate,
    returnDate, 
    setreturnDate,
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
    showOnewayDate,
    p,
}) {
  const navigate = useNavigate();

  const getCityName = (locationString) => {
  const parts = locationString.split(',');
  return parts.length >= 2 ? parts[1].trim() : '';
};

const fromCityName = getCityName(takeOffAirport);
const toCityName = getCityName(destinationAirport);

  // const [showRoundTripDates, setShowRoundTripDates] = useState(true);

  //  query parameters
  let queryParams;
  let searchParams;


  // roundTrip is selected by default
  const [kickOff, setKickOff] = useState("");
  const [destination, setDestination] = useState();

  const [flightClass, setFlightClass] = useState("ECONOMY");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  // Mr Bobai - >
  const {
    setSingleFlightResult,
    setOneWayFlightResult,
    flightOffersSearch,
    airportAndCitySearch,
    setLoader,
  } = useAuthStore();

  const [originLocationCode, setOriginLocationCode] = useState("");
  const [destinationLocationCode, setDestinationLocationCode] = useState("");

  const currencyCode = "NGN"; // default currency code
  

  //DROPDOWN VARIABLES
//   const [takeOffAirport, setTakeOffAirport] = useState("");
//   const [destinationAirport, setDestinationAirport] = useState("");

  const [showFlightType, setShowFlightType] = useState(false);
  const [showFlightInputs, setshowFlightInputs] = useState(false);

// switch the inputs
  const handleSwitchInput = () => {
    setTakeOffAirport((prevTakeOff) => {
      setDestinationAirport(prevDestination => prevTakeOff);
      return destinationAirport;
    });

    setOriginLocationCode((prevOriginCode) => {
      setDestinationLocationCode(prevDestinationCode => prevOriginCode);
      return destinationLocationCode;
    });
  };
  // passange count event handler Event handler
  // const handleKickOff = (e) => {
  //   setKickOff(e.target.value);
  // };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleDepartureDate = (e) => {
    setDepartDate(e.target.value);
  };

  const handleReturnDate = (e) => {
    setreturnDate(e.target.value);
  };

 // Error Message if the depart and destination location is the same
  const locationError = (toastMessage) => toast.error('Change destination location')


  console.log('==============================\n Depart Date: ', departDate, '\n Depart Date: ' , returnDate, '\n====================================')

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
  const airports = async (keyWord, num) => {
    const res = await airportAndCitySearch(keyWord);

    if (res) {
      console.log(res);

      // setOptions(res.data.data);
      // console.log(num);
      if (num === 0) {
        setTakeOffAportList(res);
      } else {
        setDestinationAriporList(res);
      }

      //navigate("/verification");
    }
  };
  // Mr Bobai - <

  // TakeOff Search airport handler
  const onChangeTakeOffHandler = (e) => {
    setSearchTakeOffInputValue(e.target.value);
    setTakeOffAirport(e.target.value);

    if (e.target.value.length > 0) {
      setShowTakeOffAirports(true);
    } else {
      setShowTakeOffAirports(false);
    }
  };

  // destination Search airport handler
  const onChangeDestinationHandler = (e) => {
    setSearchDestinationInputValue(e.target.value);
    setDestinationAirport(e.target.value);

    if (e.target.value.length > 0) {
      setShowDestinationAirports(true);
    } else {
      setShowDestinationAirports(false);
    }
  };

  // show/hide takeoff and destination down airport Lists
  const [showTakeOffAirports, setShowTakeOffAirports] = useState(false);
  const [showDestinationAirports, setShowDestinationAirports] = useState(false);
  const [showFlexibleDate, setShowFlexibleDate] = useState(false);
  const [displayButton, setDisplayButton] = useState('none')


  
  const onCloseTakOffDropdwon = () => {
    setShowTakeOffAirports(false);
  };

  const onCloseDestinationDropdwon = () => {
    setShowDestinationAirports(false);
  };

  // show/hide flightInputs
  const handleShowFlightInputsA = () => {
    setShowTakeOffAirports(!showTakeOffAirports);
    setShowDestinationAirports(false);
    setshowFlightInputs(true);
    setShowFlightType(true);
    setShowFlexibleDate(true);
    setDisplayButton('flex')
  };

  const handleShowFlightInputsB = () => {
    setShowDestinationAirports(!showDestinationAirports);
    setShowTakeOffAirports(false);
    setshowFlightInputs(true);
    setShowFlightType(true);
    setShowFlexibleDate(true);
    setDisplayButton('flex')
  };


  if (showReturnDate) {
    searchParams = {
      passenger: {
        adults: adults,
        children: children,
        infants: infants,
        travelClass: flightClass,
      },
      flightSearch: [
        {
          id: 1,
          originLocationCode: originLocationCode,
          destinationLocationCode: destinationLocationCode,
          departureDateTimeRange: departDate,
        },
        {
          id: 2,
          originLocationCode: destinationLocationCode,
          destinationLocationCode: originLocationCode,
          departureDateTimeRange: returnDate,
        },
      ],
    };

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
    searchParams = {
      passenger: {
        adults: adults,
        children: children,
        infants: infants,
        travelClass: flightClass,
      },
      flightSearch: [
        {
          id: 1,
          originLocationCode: originLocationCode,
          destinationLocationCode: destinationLocationCode,
          departureDateTimeRange: departDate,
        },
      ],
    };

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
    // destination location
    if (takeOffAirport === destinationAirport) {
      locationError();
      return;
    }

    setLoader(true);
    console.log(searchParams);
    const res = await flightOffersSearch(searchParams);
    console.log(res);
    if (res) {
      setLoader(false);
      setSingleFlightResult([
        takeOffAirport,
        destinationAirport,
        res.flightRights,
        queryParams.originLocationCode,
        queryParams.destinationLocationCode,
        queryParams,
        adults,
        children,
        infants,
        res.flightRightsDictionaries,
        flightClass,
      ]);
      // setFlightSearch(res.data.data);
      if (showReturnDate) {
        navigate("/flight-result");
      } else if (!showReturnDate) {
        setOneWayFlightResult([
          takeOffAirport,
          destinationAirport,
          res.flightRights,
          queryParams.originLocationCode,
          queryParams.destinationLocationCode,
          queryParams,
          adults,
          children,
          infants,
          res.flightRightsDictionaries,
        ]);
        navigate("/oneway-result");
      }
    } else {
      setLoader(false);
    }
  };





  // Checkbox Validation: Terms and Agreement
      // State for form values
      const [isChecked, setIsChecked] = useState(false);
    
    
      // Handler for checkbox change
      const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
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
                <FormInputs>
                <FlightInputContainer>
                    {/* takeoff input */}
                    <FlightInputAndDropDown>
                    <FlightInputWrapper onClick={handleShowFlightInputsA}>
                        <Label for="depart">From Where?</Label>
                        <input
                        type="text"
                        placeholder="From"
                        value={fromCityName? fromCityName : takeOffAirport}
                        onChange={(e) => onChangeTakeOffHandler(e)}
                        />
                         <p>{p ? p[0] : takeOffAirport}</p>
                    </FlightInputWrapper>

                    {/*  Takeoff Airport Dropdown*/}
                    {showTakeOffAirports && (
                        <TakeOffWrapper>
                        <LocationDropdown
                            // onChange={onChangeTakeOffHandler}
                            // searchInputValue={searchTakeOffInputValue}
                            items={takeOffAportList}
                            setAirportSelected={setTakeOffAirport}
                            setCityCode={setOriginLocationCode}
                            onCloseDropdwon={onCloseTakOffDropdwon}
                            Icon={<MdFlightTakeoff />}
                        />
                        </TakeOffWrapper>
                    )}
                    </FlightInputAndDropDown>

                    <RoundTripImg onClick={handleSwitchInput}>
                    <img src={roundtrip} alt="trip icon" />
                    </RoundTripImg>

                    {/*Destination input  */}
                    <FlightInputAndDropDown>
                    <FlightInputWrapper onClick={handleShowFlightInputsB}>
                        <Label for="depart">To Where?</Label>
                        <input
                        type="text"
                        placeholder="To"
                        value={toCityName ? toCityName : destinationAirport}
                        onChange={(e) => onChangeDestinationHandler(e)}
                        />
                         <p>{p ? p[1] : destinationAirport}</p>
                    </FlightInputWrapper>

                    {/* dropdown */}
                    {showDestinationAirports && (
                        <DestinationWrapper>
                        <LocationDropdown
                            // onChange={onChangeDestinationHandler}
                            items={destinationAriporList}
                            // searchInputValue={searchDestinationInputValue}
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




       <FlightDepatWrapContent 
                     contWidth={"100%"} 
                     bgColor={'#0d398428'}
                     borderRadius={"10px"}
                             >
                           <Label for="depart">Depart Date</Label>
                           <DateSinglePickerCalender setDepartDate={setDepartDate}/>
                     </FlightDepatWrapContent>
                               
     
                { showReturnDate &&      
                     <FlightDepatWrapContent  
                         contWidth={"100%"} 
                         bgColor={'#0d398428'}
                         borderRadius={"10px"}
                     >
                         <Label for="depart">Return Date</Label>
                          <DateSingleReturnCalender setReturnDate={setreturnDate}/>
                      </FlightDepatWrapContent>
               }
                
                    <FlightDepatWrapContent 
                        contWidth={"100%"} 
                        bgColor={'#0d398428'}
                        borderRadius={"10px"}
                    >
                      <Label>Passenger/Class</Label>
                        <FlightPassengerWrapper>
                        <FlightPassengerClass
                            onClick={() => setShowPassenger(!showPassenger)}
                        >
                          <div>
                              <span id="passengerValue">{totalPassengers}</span>{" "}
                              passenger and <span id="classValue">{flightClass}</span>{" "}
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
                                <h4>Class</h4>
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
                </FlightDepartWrapper>
                )}
        </FormInputs>
      <SubmitButtonWrapper displayButton={displayButton}>
            {/* Checkbox for flight result multiple date */}
            {
              showFlexibleDate &&
                <CheckboxWrapper>
                            <input
                              type="checkbox"
                              id="terms"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                            <p>My dates are flexible(+/- 3days)</p>
                    </CheckboxWrapper>
            }        

               { showFlexibleDate &&
                      <Button onClick={() => bookflights()} text={"Search Flight"} />
                }
        </SubmitButtonWrapper>


        </FlightForm>
      )}
      {showMultiCityForm && <MulticitySearchForm />}
    </SingleAndMulticityWrapper>
  );
}








//  { showReturnDate &&      
//                 <FlightDepatWrapContent  
//                     contWidth={"100%"} 
//                     bgColor={'#0d398428'}
//                     borderRadius={"10px"}
//                 >
//                     <Label for="depart">Return Date</Label>
//                      <DateSingleReturnCalender setReturnDate={setreturnDate}/>
//                  </FlightDepatWrapContent>
//           }

//                 {/* Date range picker round trip*/}
//                 { showReturnDate &&      
//                         <FlightDepatWrapContent  
//                             contWidth={"100%"} 
//                             bgColor={'#0d398428'}
//                             borderRadius={"10px"}
//                         >
//                             <Label for="depart">Depart/Return Date</Label>
//                             <DateRangePickerCalender setDepartDate={setDepartDate} setReturnDate={setreturnDate}/>
//                         </FlightDepatWrapContent>
//                 }