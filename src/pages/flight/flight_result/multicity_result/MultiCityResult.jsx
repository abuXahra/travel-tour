import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DateFlight,
  DnRBody,
  DnRBodyChildA,
  DnRBodyChildB,
  DnRBodyChildC,
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
  PriceWrapper,
  ResultCounter,
  ResultCounterLeft,
  ResultCounterRight,
} from "../FlightResult.style";
import { MdDateRange, MdFlight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";
import Button from "../../../../components/button/Button";
import flightLogo from "../../../../images/aire-peace.png";
import SingleSearchCityForm from "../../flight_booking/single_city/SingleSearchCityForm";
import { MultiCityFormWrapper } from "./MultiCityResult.style";
import { useAuthStore } from "../../../../store/store";
import iataAirports from "../../../../flightDB/IATA_airports.json";
import AirlineFlightLogo from "../../../../components/Flight/AirlineFlightLogo";
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
import PriceMatrix from "../../../../components/Flight/price_matrix/PriceMatrix";
import FlightFare from "../../../../components/Flight/flight_fare/FlightFare";
import { FormWrapper } from "../../flight_booking/FlightBooking.style";
import FlightResultForm from "../../flight_booking/single_city/single_resultform/FlightResultForm";

const filterIataAirport = (iataCode) => {
  const newFilterData = iataAirports?.find((item) => {
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

  const iata = nextSegment?.departure.iataCode;
  const city = filterIataAirport(iata)?.Location_served;

  return `${hours}h ${minutes}m Layover in ${city}`;
};

export default function FlightResult() {
  const [data, setData] = useState([]);
  const [fIndex, setFIndex] = useState(0);
  const { multiCityFlightResult } = useAuthStore();

  // const flightData = JSON.parse(myObject);

  // user defined variable for stopover   ===============================================================
  const [flightStopOver, setFlightStopOver] = useState(1);

  const navigate = useNavigate();
  let location = multiCityFlightResult[0];
  // console.log(location);

  // useEffect(() => {
  //   if (!multiCityFlightResult[1] || multiCityFlightResult[1]?.length === 0) {
  //     navigate("/flight-booking");
  //   } else {
  //     location = multiCityFlightResult[0];
  //   }
  // }, [multiCityFlightResult, navigate]);
  // This is the Show View Detail Variable index

  // const getCityName = (locationString) => {
  //   const parts = locationString?.split(",");
  //   return parts?.length >= 2 ? parts[1]?.trim() : "";
  // };

  // const fromCityName = getCityName(multiCityFlightResult[0]);
  // const toCityName = getCityName(multiCityFlightResult[1]);
  const [takeOffAirport, setTakeOffAirport] = useState("fromCityName");
  const [destinationAirport, setDestinationAirport] = useState("toCityName");
  const todayDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD (2025-02-29)
  const [departDate, setDepartDate] = useState(todayDate);
  const [returnDate, setReturnDate] = useState(todayDate);
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [showOnewayDate, setShowOnewayDate] = useState(true);

  const [index, setIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });
  useEffect(() => {
    setData(multiCityFlightResult?.[1]);
  }, [data]);
  useEffect(() => {
    if (currentIndex < multiCityFlightResult[1]?.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 50); // Delay of 1 second for each item
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

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
    navigate(`/multicity-trip-info/${fIndex - 1}`);
    setShowViewDetailCard(false);
  };

  // ===========Show/Hide Single City and Multi City Search Form
  const [tripType, setTripType] = useState("One Way");

  const [roundTrip, setRroundTrip] = useState("Round Trip");
  const [oneWay, setOneWay] = useState("One Way");
  const [multiCity, setMultiCity] = useState("Multi City");

  const [showSingleForm, setShowSingleForm] = useState(false);
  const [showMultiCityForm, setShowMultiCityForm] = useState(true);

  // ===========Show/Hide Single City and Multi City Search Form

  const [rtBrColor, setRtBrColor] = useState("grey");
  const [rtCheckColor, setRtCheckColor] = useState("white");

  const [owBrColor, setOwBrColor] = useState("gre");
  const [owCheckColor, setOwCheckColor] = useState("white");

  const [mcBrColor, setMcBrColor] = useState("#2563eb");
  const [mcCheckColor, setMcCheckColor] = useState("#2563eb");

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

  const [showFlexibleDate, setShowFlexibleDate] = useState(false);
  console.log(data);
  return (
    <FlightResultWrapper>
      {/* dklfj;ldfjkv n;kld;jjfldfjslk */}
      {multiCityFlightResult[1]?.length === 0 ? (
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
            {/* SideBar */}
            <Sidebar
              Items={ArilineListItems}
              flightDepartItem={DepartFlightTime}
              flightReturnItem={ReturnFlightTime}
              StopsItems={StopsItems}
              flightSearchResultData={data}
              dictionaries={multiCityFlightResult?.[2]?.dictionaries}
              onFilterChange={(flight) => {
                setData(flight);
              }}
            />

            {/* Flight Result Main Content */}
            <FlightResultMain>
              {/* Counter Summary */}
              {/* <ResultCounter>
            <ResultCounterLeft>
              <h3>{multiCityFlightResult[1]?.length} results</h3>
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
                <h3> </h3>
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
                flightSearchResultData={multiCityFlightResult[1]}
                dictionaries={multiCityFlightResult?.[2]?.dictionaries}
              />

              {/* Flight Fare: Cheapest, Fastest, Recommeded */}
              <FlightFare
                flightSearchResultData={data}
                onFlightSelect={(flight) => {
                  setData(flight);
                }}
              />

              {/* Flight Result Card  1*/}

              {multiCityFlightResult[1]
                ?.slice(0, currentIndex)
                .map((data, index) => (
                  <FlightCard key={index}>
                    {/* flight logo */}

                    <AirlineFlightLogo
                      keyWord={data?.validatingAirlineCodes[0]}
                      data={multiCityFlightResult[1][index]}
                      dictionaries={multiCityFlightResult?.[2]?.dictionaries}
                      index={index}
                      setIndex={setIndex}
                      showViewDetail={showViewDetail}
                    />
                    {/* <div onClick={showViewDetail}>View Flight Detail</div> */}

                    {data.itineraries
                      .slice(0, data.length)
                      .map((data, index) => (
                        <FlightCardContent>
                          <DnRWrapper>
                            <DnRHeader>
                              <h5>Depart</h5>{" "}
                              <p>
                                {new Date(
                                  data.segments[0].departure.at
                                ).toLocaleString()}
                              </p>
                              <p>
                                {data.segments?.[0]?.operating
                                  ? multiCityFlightResult?.[2]?.dictionaries
                                      ?.carriers[
                                      data.segments?.[0]?.operating?.carrierCode
                                    ]
                                  : ""}
                              </p>
                            </DnRHeader>
                            <DnRBody>
                              <DnRBodyChildA>
                                <h3>
                                  {new Date(
                                    data.segments[0].departure.at
                                  ).toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </h3>
                                {location[index]?.from}
                              </DnRBodyChildA>
                              <DnRBodyChildB>
                                {data.segments[0].numberOfStops}-Stopover
                                {"\n"}
                                {data.segments.length - 1}-Layover
                                <MdFlightStyled
                                  rotateIcon={"90deg"}
                                  IconColor={"#0D3984"}
                                >
                                  <MdFlight />
                                </MdFlightStyled>
                                {`${
                                  parseDuration(data.segments[0].duration).hours
                                }hr ${
                                  parseDuration(data.segments[0].duration)
                                    .minutes
                                }min`}
                              </DnRBodyChildB>
                              <DnRBodyChildC>
                                <h3>
                                  {" "}
                                  {new Date(
                                    data.segments[0].arrival.at
                                  ).toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </h3>
                                {location[index]?.to}
                              </DnRBodyChildC>
                            </DnRBody>
                          </DnRWrapper>

                          {/* <DnRWrapper>
                      <DnRHeader>
                        <h5>Return</h5> <p>15:45</p> <p>Arik Air</p>
                      </DnRHeader>
                      <div>
                        <span>
                          <h3>19:45</h3>
                          Lagos
                        </span>
                        <span>
                          0-Stop
                          <MdFlightStyled
                            rotateIcon={"270deg"}
                            IconColor={"#FF6805"}
                          >
                            <MdFlight />
                          </MdFlightStyled>
                          1hr 30min
                        </span>
                        <span>
                          <h3>19:45</h3>
                          Abuja
                        </span>
                      </div>
                    </DnRWrapper> */}
                        </FlightCardContent>
                      ))}
                    <PriceWrapper>
                      <p>Price: {money.format(data.price.total)}</p>
                      {data?.fareRules?.rules?.[1]?.category === "REFUND" ? (
                        <>
                          {data?.fareRules?.rules?.[1]?.notApplicable ? (
                            <span>(Non Refundable)</span>
                          ) : (
                            <span>(Refundable, Penalty Applies )</span>
                          )}
                        </>
                      ) : (
                        <span>(Non Refundable)</span>
                      )}
                    </PriceWrapper>
                  </FlightCard>
                ))}
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
                {multiCityFlightResult[1][index].itineraries.map(
                  (data, index) => (
                    <FlightDetailDNR>
                      {data.segments?.map((flightData, Index, arr) => {
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
                              <p>Outbound</p>
                            </span>
                            <DNRDetail>
                              <DNRDetailFlightImage>
                                <img
                                  src={`https://images.wakanow.com/Images/flight-logos/${
                                    flightData?.operating?.carrierCode
                                      ? flightData?.operating?.carrierCode
                                      : multiCityFlightResult[1][index]
                                          .validatingAirlineCodes[0]
                                  }.gif`}
                                  alt={
                                    multiCityFlightResult[1][index]
                                      ?.validatingAirlineCodes[0]
                                  }
                                />
                              </DNRDetailFlightImage>

                              <DNRDetailTime>
                                  <DNRDetailTimeSec>
                                  <h5>
                                    {new Date(
                                      flightData?.departure.at
                                    ).toLocaleTimeString("en-US", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </h5>
                                  {/* Lagos */}                          
                                  <p>{`${
                                    filterIataAirport(
                                      flightData?.departure?.iataCode
                                    )?.Airport_name
                                  },  ${
                                    filterIataAirport(
                                      flightData?.departure?.iataCode
                                    )?.Location_served
                                  }`}
                                </p>
                                   </DNRDetailTimeSec>
                                  <DNRDetailTimeSec>
                                    <p>
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
                                    <p>{flightData?.numberOfStops}-Stop</p>
                                </DNRDetailTimeSec>
                                <DNRDetailTimeSec>
                                  <h5>
                                    {new Date(
                                      flightData?.arrival.at
                                    ).toLocaleTimeString("en-US", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </h5>
                              
                                <p>
                                  {`${
                                    filterIataAirport(
                                      flightData?.arrival?.iataCode
                                    )?.Airport_name
                                  },  ${
                                    filterIataAirport(
                                      flightData?.arrival?.iataCode
                                    )?.Location_served
                                  }`}
                                </p>

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
                                      dictionaries={
                                        multiCityFlightResult?.[2]?.dictionaries
                                      }
                                      data={multiCityFlightResult[1][index]}
                                      keyWord={
                                        flightData?.operating?.carrierCode
                                          ? flightData?.operating?.carrierCode
                                          : multiCityFlightResult[1][index]
                                              .validatingAirlineCodes[0]
                                      }
                                      only={true}
                                    />
                                    {`
                            - ${flightData?.number} - ${multiCityFlightResult[1][index]?.travelerPricings[0]?.fareDetailsBySegment[Index]?.cabin} - Class ${multiCityFlightResult[1][index]?.travelerPricings[0]?.fareDetailsBySegment[Index]?.class} `}
                                  </div>
                                </span>
                                <span>
                                  <h3>Baggage</h3>
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
                      })}
                    </FlightDetailDNR>
                  )
                )}

                {/* flight return */}
                {/* <FlightDetailDNR>
              <span>
                <div>
                  <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                  <h3>Flight From Lagos - Abuja</h3>
                </div>
                <b>Inbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img src={flightLogo} alt="" srcset="" />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h3>19:45</h3>
                    Lagos
                  </span>
                  <span>
                    1hr 30min
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                    0-Stop
                  </span>
                  <span>
                    <h3>00:05</h3>
                    Abuja
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h3>Airline</h3>
                    Air Peace - 727 - Class W
                  </span>
                  <span>
                    <h3>Baggage</h3>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>
            </FlightDetailDNR> */}

                {/* Departure */}
                {/* <FlightDetailDNR>
              <span>
                <div>
                  <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                  <h3>Flight From Lagos - Abuja</h3>
                </div>
                <b>Inbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img src={flightLogo} alt="" srcset="" />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h3>19:45</h3>
                    Lagos
                  </span>
                  <span>
                    1hr 30min
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                    0-Stop
                  </span>
                  <span>
                    <h3>00:05</h3>
                    Abuja
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h3>Airline</h3>
                    Air Peace - 727 - Class W
                  </span>
                  <span>
                    <h3>Baggage</h3>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>
            </FlightDetailDNR> */}

                {/* Departure */}
                {/* <FlightDetailDNR>
              <span>
                <div>
                  <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                  <h3>Flight From Lagos - Abuja</h3>
                </div>
                <b>Inbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img src={flightLogo} alt="" srcset="" />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h3>19:45</h3>
                    Lagos
                  </span>
                  <span>
                    1hr 30min
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                    0-Stop
                  </span>
                  <span>
                    <h3>00:05</h3>
                    Abuja
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h3>Airline</h3>
                    Air Peace - 727 - Class W
                  </span>
                  <span>
                    <h3>Baggage</h3>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>
            </FlightDetailDNR> */}
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
