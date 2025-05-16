import React, { useEffect, useLayoutEffect, useState } from "react";
import myObject from "../../../data/json/myObject.json";
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
  FlightDetialButton,
  FlightLogo,
  FlightMainHeader,
  FlightResultContent,
  FlightResultHeader,
  FlightResultMain,
  FlightResultSideBar,
  FlightResultWrapper,
  FlightTitleWrapper,
  LayoverWrapper,
  MdFlightStyled,
  ResultCounter,
  ResultCounterLeft,
  ResultCounterRight,
  ResultSidebar,
  ResultSideBar,
} from "./FlightResult.style";
import { MdFlight, MdFlightTakeoff, MdHotel } from "react-icons/md";
import flightLogo from "../../../images/aire-peace.png";
import { FaCircle, FaTimes } from "react-icons/fa";
import Button from "../../../components/button/Button";
import FlightIcon from "../../../components/flight_icon/FlightIcon";
import FlightResultForDepartandReturn from "../../../components/Flight/FlightResultForDepartandReturn";
import { useNavigate } from "react-router-dom";
import {
  FlightType,
  FormWrapper,
  RadioCheck,
  RadioItem,
  RadioItemWrapper,
} from "../flight_booking/FlightBooking.style";
import SingleSearchCityForm from "../flight_booking/single_city/SingleSearchCityForm";
import MulticitySearchForm from "../flight_booking/multi_city/MulticitySearchForm";
import { LiaCcVisa } from "react-icons/lia";

import AirlineCodeLookup from "../../../components/Flight/AirlineCodeLookup";
import AirlineFlightLogo from "../../../components/Flight/AirlineFlightLogo";
import { useAuthStore } from "../../../store/store";
import iataAirports from "../../../flightDB/IATA_airports.json";
import NoResult from "../../../components/no_result/NoResult";
import Sidebar from "../../../components/sidebar/Sidebar";
import {
  ArilineListItems,
  DepartFlightTime,
  ReturnFlightTime,
  StopsItems,
} from "../../../data/object/flight_sidebar/FlightResultSidebar";
import { MdDateRange } from "react-icons/md";
import FlexibleCalender from "../../../components/Flight/flexible_Calender/FlexibleCalender";
import { mockFlightData } from "../../../data/object/FlexibleCalenderItems";
import PriceMatrix from "../../../components/Flight/price_matrix/PriceMatrix";
import FlightFare from "../../../components/Flight/flight_fare/FlightFare";
import FlightResultForm from "../flight_booking/single_city/single_resultform/FlightResultForm";

const filterIataAirport = (iataCode) => {
  const newFilterData = iataAirports.find((item) => {
    return (
      item?.IATA && item?.IATA?.toLowerCase()?.includes(iataCode?.toLowerCase())
    );
  });

  return newFilterData;
};

const calculateLayoverInfo = (prevSegment, nextSegment) => {
  console.log(prevSegment?.arrival?.at);
  console.log("nextSegment", nextSegment);
  if (!prevSegment || !nextSegment) return "Layover data not available";
  const arrivalTime = new Date(prevSegment?.arrival?.at);
  const departureTime = new Date(nextSegment?.departure?.at);
  const layoverMinutes = Math.floor((departureTime - arrivalTime) / 60000);

  const hours = Math.floor(layoverMinutes / 60);
  const minutes = layoverMinutes % 60;

  const iata = nextSegment.departure.iataCode;
  const city = filterIataAirport(iata)?.Location_served;

  return `${hours}h ${minutes}m Layover in ${city}`;
};

export default function FlightResult() {
  const [data, setData] = useState([]);
  const { singleFlightResult, FData } = useAuthStore();

  console.log(
    "=================\n",
    singleFlightResult.departDate,
    "\n========================"
  );

  const getCityName = (locationString) => {
    const parts = locationString.split(",");
    return parts.length >= 2 ? parts[1].trim() : "";
  };

  const fromCityName = getCityName(singleFlightResult[0]);
  const toCityName = getCityName(singleFlightResult[1]);

  const [takeOffAirport, setTakeOffAirport] = useState(fromCityName);
  const [destinationAirport, setDestinationAirport] = useState(toCityName);
  // const todayDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD (2025-02-29)
  const [departDate, setDepartDate] = useState();
  const [returnDate, setReturnDate] = useState();

  const [showReturnDate, setShowReturnDate] = useState(true);
  const [showOnewayDate, setShowOnewayDate] = useState(false);

  // ===========Show/Hide Single City and Multi City Search Form
  const [tripType, setTripType] = useState("One Way");

  const [roundTrip, setRroundTrip] = useState("Round Trip");
  const [oneWay, setOneWay] = useState("One Way");
  const [multiCity, setMultiCity] = useState("Multi City");

  const [showSingleForm, setShowSingleForm] = useState(true);
  const [showMultiCityForm, setShowMultiCityForm] = useState(false);
  // ===========Show/Hide Single City and Multi City Search Form

  const [rtBrColor, setRtBrColor] = useState("#2563eb");
  const [rtCheckColor, setRtCheckColor] = useState("#2563eb");

  const [owBrColor, setOwBrColor] = useState("grey");
  const [owCheckColor, setOwCheckColor] = useState("white");

  const [mcBrColor, setMcBrColor] = useState("grey");
  const [mcCheckColor, setMcCheckColor] = useState("white");

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

  // const flightData = JSON.parse(myObject);

  const navigate = useNavigate();

  // user defined variable for stopover   ===============================================================
  const [flightStopOver, setFlightStopOver] = useState(0);

  useEffect(() => {
    if (!FData) {
      navigate("/flight-booking");
    }
    setData(singleFlightResult?.[2]);
  }, [FData, navigate]);

  // Show View Detail Variable
  const [showViewDetailCard, setShowViewDetailCard] = useState(false);

  //show view detail handler
  const showViewDetail = () => {
    setShowViewDetailCard(true);
  };

  //hide view detail handler
  const closeViewDetail = () => {
    setShowViewDetailCard(false);
  };

  // continue Booking Handler
  const continueBooking = () => {
    navigate(`/trip-info/${index}`);
    setShowViewDetailCard(false);
  };

  // FlightItems
  const FlightItems = [
    {
      title: "Flight",
      link: "#",
      Icon: <MdFlightTakeoff />,
      bgColor: "",
      border: "",
    },
    {
      title: "Hotel",
      link: "/hotel-reservation",
      Icon: <MdHotel />,
      bgColor: "none",
      border: "none",
    },
    {
      title: "Visa",
      link: "/visa",
      Icon: <LiaCcVisa />,
      bgColor: "none",
      border: "none",
    },
  ];

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

  // console.log(filterIataAirport("LOS"));

  const [showFlexibleDate, setShowFlexibleDate] = useState(false);

  return (
    <FlightResultWrapper>
      {singleFlightResult[2]?.length === 0 ? (
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
                p={singleFlightResult}
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
              dictionaries={singleFlightResult[9]}
              onFilterChange={(bool, flight) => {
                if (bool === 0) {
                  setData(singleFlightResult?.[2]);
                } else {
                  setData(flight);
                }
              }}
            />

            <FlightResultMain>
              {/* Counter Summary */}

              {/* show flexible calender */}
              <FlightMainHeader>
                <h3>
                  From {fromCityName} to {toCityName}
                </h3>
                <Button
                  btnBorder={"1px solid white"}
                  bgColor={"#FF6805"}
                  textColor={"black"}
                  onClick={() => setShowFlexibleDate(true)}
                  text={"Flexible Dates"}
                  rightIcon={<MdDateRange />}
                  fontSize={"12px"}
                />
              </FlightMainHeader>

              {/* Price matrix with regards to stops */}
              <PriceMatrix
                flightSearchResultData={data}
                dictionaries={singleFlightResult[9]}
              />

              {/* Flight Fare: Cheapest, Fastest, Recommeded */}
              <FlightFare
                flightSearchResultData={data}
                onFlightSelect={(flight) => {
                  setData(flight);
                }}
              />

              {/* Flight Result Card  1*/}
              <FlightResultForDepartandReturn
                dictionaries={singleFlightResult[9]}
                flightSearchResultData={data}
                locationName={[singleFlightResult[0], singleFlightResult[1]]}
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
                              <FlightIcon
                                rotate={"90deg"}
                                iconColor={"#0D3984"}
                              />
                              <h5>
                                {
                                  filterIataAirport(
                                    flightData?.departure?.iataCode
                                  )?.Airport_name
                                }
                                {/*                           
                          {`Flight From ${` ${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Location_served
                        }`} -- ${`${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Location_served
                        }`}`} */}
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
                                <h5>
                                  {new Date(
                                    flightData?.departure?.at
                                  ).toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </h5>
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
                        singleFlightResult[2][index].itineraries[0].segments[0]
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
                                  }min`}{" "}
                                </p>
                                <FlightIcon
                                  rotate={"90deg"}
                                  iconColor={"#0D3984"}
                                />
                              </DNRDetailTimeSec>
                              <DNRDetailTimeSec>
                                <h5>
                                  {new Date(
                                    flightData?.arrival?.at
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
                        singleFlightResult[2][index].itineraries[1].segments[0]
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
                                    dictionaries={singleFlightResult[9]}
                                    data={data[index]}
                                    keyWord={
                                      flightData?.operating?.carrierCode
                                        ? flightData?.operating?.carrierCode
                                        : data[index].validatingAirlineCodes[0]
                                    }
                                    only={true}
                                  />
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

                {/* flight return */}
                <FlightDetailDNR>
                  {data[index].itineraries[1].segments?.map(
                    (flightData, Index, arr) => {
                      const isLastSegment = Index === arr.length - 1;
                      const nextSegment = !isLastSegment
                        ? arr[Index + 1]
                        : null;

                      return (
                        <>
                          <span>
                            <FlightTitleWrapper>
                              <FlightIcon
                                rotate={"270deg"}
                                iconColor={"#FF6805"}
                              />
                              <h5>
                                {
                                  filterIataAirport(
                                    flightData?.departure?.iataCode
                                  )?.Airport_name
                                }
                                ,
                                {/* {`Flight From ${` ${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Location_served
                        }`} -- ${`${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Location_served
                        }`}`} */}
                              </h5>
                            </FlightTitleWrapper>
                            <p>Inbound</p>
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
                              <span>
                                <h5>
                                  {new Date(
                                    flightData?.departure.at
                                  ).toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </h5>
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
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .departure.iataCode
                      }
                    /> */}
                              </span>
                              <span>
                                <p style={{ fontSize: "8px" }}>
                                  {" "}
                                  {`${
                                    parseDuration(flightData?.duration).hours
                                  }hr ${
                                    parseDuration(flightData?.duration).minutes
                                  }min`}{" "}
                                </p>
                                <FlightIcon
                                  rotate={"270deg"}
                                  iconColor={"#FF6805"}
                                />
                                {flightData?.numberOfStops}
                                -Stop
                              </span>
                              <span>
                                <h5>
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
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .arrival.iataCode
                      }
                    /> */}
                              </span>
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
                                    dictionaries={singleFlightResult[9]}
                                    data={data[index]}
                                    keyWord={
                                      flightData?.operating?.carrierCode
                                        ? flightData?.operating?.carrierCode
                                        : data[index].validatingAirlineCodes[0]
                                    }
                                    only={true}
                                  />
                                  {`
                                - ${flightData?.number} - ${
                                    data[index]?.travelerPricings[0]
                                      ?.fareDetailsBySegment[
                                      data[index].itineraries[0].segments
                                        .length + Index
                                    ]?.cabin
                                  } - Class ${
                                    data[Index]?.travelerPricings[0]
                                      ?.fareDetailsBySegment[
                                      data[index].itineraries[0].segments
                                        .length + Index
                                    ]?.class
                                  } `}
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

                <FlightDetailButton>
                  <Button text={"Continue Booking"} onClick={continueBooking} />
                </FlightDetailButton>
              </FLightDetailContent>
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
