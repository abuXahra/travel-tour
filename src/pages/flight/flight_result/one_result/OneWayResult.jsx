
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DateFlight,
  DNRDetail,
  DNRDetailAirport,
  DNRDetailBaggage,
  DNRDetailFlightImage,
  DNRDetailTime,
  DNRDetailTimeSec,
  DnRHeader,
  DnRWrapper,
  FlightCard,
  FlightCardContent,
  FLightDetail,
  FlightDetailButton,
  FlightDetailClose,
  FLightDetailContent,
  FlightDetailDNR,
  FlightLogo,
  FlightMainHeader,
  FlightResultContent,
  FlightResultHeader,
  FlightResultMain,
  FlightResultWrapper,
  FlightTitleWrapper,
  LayoverWrapper,
  MdFlightStyled,
  ResultCounter,
  ResultCounterLeft,
  ResultCounterRight,
  ResultSidebar,
} from "../FlightResult.style";
import { MdDateRange, MdFlight } from "react-icons/md";
import { FaCircle, FaTimes } from "react-icons/fa";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";
import Button from "../../../../components/button/Button";
import flightLogo from "../../../../images/aire-peace.png";
// import FormWrapper from '../../../../components/booking_icons/form_wrapper/FormWrapper';
import {
  FlightType,
  FormWrapper,
  RadioCheck,
  RadioItem,
  RadioItemWrapper,
} from "../../flight_booking/FlightBooking.style";
import SingleSearchCityForm from "../../flight_booking/single_city/SingleSearchCityForm";
import MulticitySearchForm from "../../flight_booking/multi_city/MulticitySearchForm";
import { OneFormWrapper } from "./OneWayResult.style";

import AirlineCodeLookup from "../../../../components/Flight/AirlineCodeLookup";
import AirlineFlightLogo from "../../../../components/Flight/AirlineFlightLogo";
import { useAuthStore } from "../../../../store/store";
import iataAirports from "../../../../flightDB/IATA_airports.json";
import FlightResultForDepart from "../../../../components/Flight/FlightResultForDepart";
import NoResult from "../../../../components/no_result/NoResult";
import Sidebar from "../../../../components/sidebar/Sidebar";
import {
  ArilineListItems,
  DepartFlightTime,
  ReturnFlightTime,
  StopsItems,
} from "../../../../data/object/flight_sidebar/FlightResultSidebar";
import FlexibleCalender from "../../../../components/Flight/flexible_Calender/FlexibleCalender";
import { mockFlightData } from "../../../../data/object/FlexibleCalenderItems";
import FlightFare from "../../../../components/Flight/flight_fare/FlightFare";
import PriceMatrix from "../../../../components/Flight/price_matrix/PriceMatrix";
import FlightResultForm from "../../flight_booking/single_city/single_resultform/FlightResultForm";

export default function OneWayResult() {
  const [data, setData] = useState([]);
  const [fIndex, setFIndex] = useState(0);
  const { oneWayFlightResult, FData } = useAuthStore();
  // const flightData = JSON.parse(myObject);

  const getCityName = (locationString) => {
    const parts = locationString?.split(",");
    return parts?.length >= 2 ? parts[1].trim() : "";
  };

  const fromCityName = getCityName(oneWayFlightResult[0]);
  const toCityName = getCityName(oneWayFlightResult[1]);

  // user defined variable for stopover   ===============================================================
  const [flightStopOver, setFlightStopOver] = useState(1);

  const navigate = useNavigate();
  console.log(oneWayFlightResult);
  useEffect(() => {
    if (!oneWayFlightResult || oneWayFlightResult?.length === 0) {
      navigate("/flight-booking");
    }
  }, [oneWayFlightResult, navigate]);
  useEffect(() => {
    if (!FData) {
      navigate("/flight-booking");
    }
    setData(oneWayFlightResult?.[2]);
  }, [FData, navigate]);

  // Show View Detail Variable
  const [showViewDetailCard, setShowViewDetailCard] = useState(false);

  //show view detail handler
  const showViewDetail = (i) => {
    setFIndex(Number(i));
    setShowViewDetailCard(true);
  };

  //hide view detail handler
  const closeViewDetail = () => {
    setShowViewDetailCard(false);
  };

  // continue Booking Handler
  const continueBooking = () => {
    navigate(`/oneway-trip-info/${fIndex - 1}`);
    setShowViewDetailCard(false);
  };

  const filterIataAirport = (iataCode) => {
    const newFilterData = iataAirports.find((item) => {
      return (
        item.IATA && item.IATA.toLowerCase().includes(iataCode.toLowerCase())
      );
    });

    return newFilterData;
  };
  const calculateLayoverInfo = (prevSegment, nextSegment) => {
    console.log(prevSegment.arrival.at);
    console.log("nextSegment", nextSegment);
    if (!prevSegment || !nextSegment) return "Layover data not available";
    const arrivalTime = new Date(prevSegment.arrival.at);
    const departureTime = new Date(nextSegment.departure.at);
    const layoverMinutes = Math.floor((departureTime - arrivalTime) / 60000);

    const hours = Math.floor(layoverMinutes / 60);
    const minutes = layoverMinutes % 60;

    const iata = nextSegment.departure.iataCode;
    const city = filterIataAirport(iata).Location_served;

    return `${hours}h ${minutes}m Layover in ${city}`;
  };

  const [takeOffAirport, setTakeOffAirport] = useState(fromCityName);
  const [destinationAirport, setDestinationAirport] = useState(toCityName);
  const todayDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD (2025-02-29)
  const [departDate, setDepartDate] = useState(todayDate);
  const [returnDate, setReturnDate] = useState(todayDate);

  const [showReturnDate, setShowReturnDate] = useState(false);
  const [showOnewayDate, setShowOnewayDate] = useState(true);

  // ===========Show/Hide Single City and Multi City Search Form
  const [tripType, setTripType] = useState("One Way");

  const [roundTrip, setRroundTrip] = useState("Round Trip");
  const [oneWay, setOneWay] = useState("One Way");
  const [multiCity, setMultiCity] = useState("Multi City");

  const [showSingleForm, setShowSingleForm] = useState(true);
  const [showMultiCityForm, setShowMultiCityForm] = useState(false);

  // ===========Show/Hide Single City and Multi City Search Form

  const [rtBrColor, setRtBrColor] = useState("grey");
  const [rtCheckColor, setRtCheckColor] = useState("white");

  const [owBrColor, setOwBrColor] = useState("#2563eb");
  const [owCheckColor, setOwCheckColor] = useState("#2563eb");

  const [mcBrColor, setMcBrColor] = useState("grey");
  const [mcCheckColor, setMcCheckColor] = useState("white");

  // This is the Show View Detail Variable index
  const [index, setIndex] = useState(0);

  // Cacula for duration
  function parseDuration(duration) {
    const regex = /PT(\d+H)?(\d+M)?/;
    const matches = duration.match(regex);

    let hours = 0;
    let minutes = 0;

    if (matches[1]) {
      hours = parseInt(matches[1].replace("H", ""));
    }
    if (matches[2]) {
      minutes = parseInt(matches[2].replace("M", ""));
    }

    return { hours, minutes };
  }

  const handleRoundTrip = () => {
    setTripType(roundTrip);
    setShowReturnDate(true);
    setShowOnewayDate(false);
    setShowMultiCityForm(false);
    setShowSingleForm(true);
    setRtBrColor("#2563eb");
    setRtCheckColor("#2563eb");
    setOwBrColor("grey");
    setOwCheckColor("white");
    setMcBrColor("grey");
    setMcCheckColor("white");
  };

  const handleOneWay = () => {
    setTripType(oneWay);
    setShowReturnDate(false);
    setShowOnewayDate(true);
    setShowSingleForm(true);
    setShowMultiCityForm(false);
    setRtBrColor("grey");
    setRtCheckColor("white");
    setOwBrColor("#2563eb");
    setOwCheckColor("#2563eb");
    setMcBrColor("grey");
    setMcCheckColor("white");
  };

  const handleMulticity = () => {
    setTripType(multiCity);
    setShowSingleForm(false);
    setShowMultiCityForm(true);
    setRtBrColor("grey");
    setRtCheckColor("white");
    setMcBrColor("#2563eb");
    setMcCheckColor("#2563eb");
    setOwBrColor("grey");
    setOwCheckColor("white");
  };

  console.log(data);
  const [showFlexibleDate, setShowFlexibleDate] = useState(false);
  return (
    <FlightResultWrapper>
      {data?.length === 0 ? (
        <NoResult />
      ) : (
        <>
          {/* flight header section */}
          <FlightResultHeader resultHeaderbgColor={""}>
            {/* Flight Modification form */}
            <FormWrapper formWrapperbgColor={""}>
              <FlightResultForm
                takeOffAirport={takeOffAirport}
                destinationAirport={destinationAirport}
                setTakeOffAirport={setTakeOffAirport}
                setDestinationAirport={setDestinationAirport}
                departDate={departDate}
                setDepartDate={setDepartDate}
                returnDate={returnDate}
                setreturnDate={setReturnDate}
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
                showSingleForm={showSingleForm}
                showMultiCityForm={showMultiCityForm}
                showReturnDate={showReturnDate}
                showOnewayDate={showOnewayDate}
              />
            </FormWrapper>
            {/* Flight Modification form */}
          </FlightResultHeader>

          {/* flight result section */}
          <FlightResultContent>
            {/* Flight Result Main Content */}

            {/* SideBar */}
            <Sidebar
              Items={ArilineListItems}
              flightDepartItem={DepartFlightTime}
              flightReturnItem={ReturnFlightTime}
              StopsItems={StopsItems}
              flightSearchResultData={data}
              dictionaries={oneWayFlightResult[9]}
              onFilterChange={(flight) => {
                setData(flight);
              }}
            />

            <FlightResultMain>
              {/* Counter Summary */}
              {/* <ResultCounter>
            <ResultCounterLeft>
              <h3>{oneWayFlightResult[2]?.length} results</h3>
              <p>Fares displayed are for all passengers.</p>
            </ResultCounterLeft>

            <ResultCounterRight>
              <span onClick={() => {}}>See more dates</span>
              <span onClick={() => {}}>USD - US Dollar ($)</span>
              <span onClick={() => {}}>Sort and Filter</span>
            </ResultCounterRight>
          </ResultCounter> */}

              {/* show flexible calender */}
              <FlightMainHeader>
                <h3>
                  From {fromCityName} to {toCityName}
                </h3>
                <Button
                  btnBorder={"1px solid white"}
                  bgColor={"#FF6805"}
                  textColor={"white"}
                  onClick={() => setShowFlexibleDate(true)}
                  text={"Flexible Dates"}
                  rightIcon={<MdDateRange />}
                  fontSize={"12px"}
                />
              </FlightMainHeader>

              {/* Price matrix with regards to stops */}
              <PriceMatrix
                flightSearchResultData={data}
                dictionaries={oneWayFlightResult[9]}
              />

              {/* Flight Fare: Cheapest, Fastest, Recommeded */}
              <FlightFare
                flightSearchResultData={data}
                onFlightSelect={(flight) => {
                  setData(flight);
                }}
              />

              {/* Flight Result Card  1*/}
              <FlightResultForDepart
                dictionaries={oneWayFlightResult[9]}
                flightSearchResultData={data}
                locationName={[oneWayFlightResult[0], oneWayFlightResult[1]]}
                setIndex={setIndex}
                showViewDetail={showViewDetail}
              />
            </FlightResultMain>
          </FlightResultContent>

          {/* FLIGHT DETAIL SECTION */}
          {showViewDetailCard && (
            <FLightDetail>
              {/* close icon */}
              <FlightDetailClose>
                <FaTimes onClick={closeViewDetail} />
              </FlightDetailClose>

              {/* flight detail content */}
              <FLightDetailContent>
                {/* flight departure */}
                <FlightDetailDNR>
                  {data[index].itineraries[0].segments?.map(
                    (flightData, Index, arr) => {
                      const isLastSegment = Index === arr.length - 1;
                      const nextSegment = !isLastSegment
                        ? arr[Index + 1]
                        : null;

                      return (
                        <>
                          <span>
                            <FlightTitleWrapper>
                              {/* <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} /> */}
                              <h5>{`Flight From ${` ${
                                  filterIataAirport(
                                    flightData?.departure?.iataCode
                                  )?.Airport_name
                                },  ${
                                  filterIataAirport(
                                    flightData?.departure?.iataCode
                                  )?.Location_served
                                }`} -- ${`${
                                  filterIataAirport(
                                    flightData?.arrival?.iataCode
                                  )?.Airport_name
                                },  ${
                                  filterIataAirport(
                                    flightData?.arrival?.iataCode
                                  )?.Location_served
                                }`}`}
                                </h5>
                            </FlightTitleWrapper>
                                 
                            <p>Outbound</p>
                          </span>

                          <DNRDetail>
                            <DNRDetailFlightImage>
                              <img
                                src={`https://images.wakanow.com/Images/flight-logos/${
                                  flightData?.operating?.carrierCode
                                    ? flightData?.operating?.carrierCode
                                    : data[index].validatingAirlineCodes[0]
                                }.gif`}
                                alt={data[index].validatingAirlineCodes[0]}
                              />
                            </DNRDetailFlightImage>

                            <DNRDetailTime>
                              <DNRDetailTimeSec>
                                <h4>
                                  {new Date(
                                    flightData?.departure.at
                                  ).toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </h4>
                                <p>{`${
                                  filterIataAirport(
                                    flightData?.departure?.iataCode
                                  )?.Airport_name
                                },  ${
                                  filterIataAirport(
                                    flightData?.departure?.iataCode
                                  )?.Location_served
                                }`}</p>
                                {/* <AirlineCodeLookup
                      keyWord={
                        oneWayFlightResult[2][index].itineraries[0].segments[0]
                          .departure.iataCode
                      }
                    /> */}
                              </DNRDetailTimeSec>
                              <DNRDetailTimeSec>
                                <p>
                                  {" "}
                                  {`${
                                    parseDuration(flightData?.duration).hours
                                  }hr ${
                                    parseDuration(flightData?.duration).minutes
                                  }min`}
                                </p>
                                <FlightIcon
                                  rotate={"90deg"}
                                  iconColor={"#0D3984"}
                                />
                                
                                  {flightData?.numberOfStops}
                                  -Stop
                                
                              </DNRDetailTimeSec>
                              <DNRDetailTimeSec>
                                <h5>
                                  {" "}
                                  {new Date(
                                    flightData?.arrival.at
                                  ).toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </h5>
                                <p>{`${
                                  filterIataAirport(
                                    flightData?.arrival?.iataCode
                                  )?.Airport_name
                                },  ${
                                  filterIataAirport(
                                    flightData?.arrival?.iataCode
                                  )?.Location_served
                                }`}</p>
                                {/* <AirlineCodeLookup
                      keyWord={
                        oneWayFlightResult[2][index].itineraries[0].segments[0]
                          .arrival.iataCode
                      }
                    /> */}
                              </DNRDetailTimeSec>
                            </DNRDetailTime>

                            <DNRDetailAirport>
                              <div>
                                Airport ({flightData?.departure?.iataCode})
                              </div>
                              <div>
                                Airport ({flightData?.arrival?.iataCode})
                              </div>
                            </DNRDetailAirport>
                            <DNRDetailBaggage>
                              <span>
                                <h5>Airline</h5>
                                <div style={{ display: "flex", gap: "5px" }}>
                                  <AirlineFlightLogo
                                    dictionaries={oneWayFlightResult[9]}
                                    data={data[index]}
                                    keyWord={
                                      flightData?.operating?.carrierCode
                                        ? flightData?.operating?.carrierCode
                                        : data[index].validatingAirlineCodes[0]
                                    }
                                    only={true}
                                  />{" "}
                                  {`
                            - ${flightData?.number} - ${data[index]?.travelerPricings[0]?.fareDetailsBySegment[Index]?.cabin} - Class ${data[Index]?.travelerPricings[0]?.fareDetailsBySegment[Index]?.class} `}
                                </div>
                              </span>
                              <span>
                                <h5>Baggage</h5>
                                100kg
                              </span>
                            </DNRDetailBaggage>
                          </DNRDetail>
                          <br />
                          {nextSegment && (
                            <LayoverWrapper>
                              <strong>Change of planes</strong>{" "}
                              {calculateLayoverInfo(flightData, nextSegment)}
                            </LayoverWrapper>
                          )}
                          <br />
                        </>
                      );
                    }
                  )}
                </FlightDetailDNR>
              </FLightDetailContent>

              <FlightDetailButton>
                <Button text={"Continue Booking"} onClick={continueBooking} />
              </FlightDetailButton>
            </FLightDetail>
          )}

          {showFlexibleDate && (
            <FlexibleCalender
              overlayButtonClick={() => setShowFlexibleDate(false)}
              closeOverlayOnClick={() => setShowFlexibleDate(false)}
              selectedDate={""}
              flightData={mockFlightData}
            />
          )}
        </>
      )}
    </FlightResultWrapper>
  );
}
