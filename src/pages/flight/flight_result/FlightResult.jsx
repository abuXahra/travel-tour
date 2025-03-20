import React, { useEffect, useState } from "react";
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
  FlightResultContent,
  FlightResultHeader,
  FlightResultMain,
  FlightResultSideBar,
  FlightResultWrapper,
  FlightTitleWrapper,
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
import NoResult from "../../../components/no_result/NoResult";

export default function FlightResult() {
  const { singleFlightResult } = useAuthStore();

  // const flightData = JSON.parse(myObject);

  const navigate = useNavigate();

  // user defined variable for stopover   ===============================================================
  const [flightStopOver, setFlightStopOver] = useState(1);
  

  useEffect(() => {
    if (!singleFlightResult[0]) {
      navigate("/flight-booking");
    }
  }, [singleFlightResult, navigate]);

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

  const [showFlightInputs, setshowFlightInputs] = useState(false);

  const [showReturnDate, setShowReturnDte] = useState(true);

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
    setShowReturnDte(true);
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
    setShowReturnDte(false);
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

  return (
    <FlightResultWrapper>
      {singleFlightResult[2]?.length === 0 && <NoResult />}
      {/* flight header section */}
      <FlightResultHeader>
        <DateFlight>Mon, 9 Sep 2024</DateFlight>
        <p>
          Select your departure flight from <span>{singleFlightResult[0]}</span>{" "}
          to <span>{singleFlightResult[1]}</span>
        </p>
      </FlightResultHeader>
      {/* Flight Modification form */}
      {/* <FlightModification> */}
      <FormWrapper>
        <SingleSearchCityForm
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
        />
      </FormWrapper>
      {/* </FlightModification> */}

      {/* flight result section */}
      {/* flight result section */}
      <FlightResultContent>
        {/* Flight Result Main Content */}
        <FlightResultMain>
          {/* Counter Summary */}
          <ResultCounter>
            <ResultCounterLeft>
              <h3>{singleFlightResult[2]?.length} results</h3>
              <p>Fares displayed are for all passengers.</p>
            </ResultCounterLeft>

            <ResultCounterRight>
              <span onClick={() => {}}>See more dates</span>
              <span onClick={() => {}}>NGN - NG Nairas (₦)</span>
              <span onClick={() => {}}>Sort and Filter</span>
            </ResultCounterRight>
          </ResultCounter>

          {/* Flight Result Card  1*/}
          <FlightResultForDepartandReturn
            dictionaries={singleFlightResult[9]}
            flightSearchResultData={singleFlightResult[2]}
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
            <span>
                <FlightTitleWrapper>
                  <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                  <h5>{`Flight From ${singleFlightResult[0]} - ${singleFlightResult[1]}`}</h5>
                </FlightTitleWrapper>
                <b>Outbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                <img
                    src={`https://images.wakanow.com/Images/flight-logos/${singleFlightResult[2][index].validatingAirlineCodes[0]}.gif`}
                    alt={singleFlightResult[2][index].validatingAirlineCodes[0]}
                  />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <DNRDetailTimeSec>
                  <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[0].segments[0].departure.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>
                      {singleFlightResult[0]}
                    </p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[0].segments[0]
                          .departure.iataCode
                      }
                    /> */}
                  </DNRDetailTimeSec>
                  <DNRDetailTimeSec>
                  <p>  {`${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).hours
                    }hr ${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).minutes
                    }min`} </p>
                    <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                  <p> {
                      singleFlightResult[2][index].itineraries[0].segments[0]
                        .numberOfStops
                    }
                    -Stop</p>
                  </DNRDetailTimeSec>
                  <DNRDetailTimeSec>
                    <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[0].segments[0].arrival.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>{singleFlightResult[1]}</p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .arrival.iataCode
                      }
                    /> */}
                  </DNRDetailTimeSec>
                </DNRDetailTime>

                <DNRDetailAirport>
                <div>Airport ({singleFlightResult[3]})</div>
                <div>Airport ({singleFlightResult[4]})</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h5>Airline</h5>
                    <AirlineFlightLogo
                      dictionaries={singleFlightResult[9]}
                      data={singleFlightResult[2][index]}
                      keyWord={
                        singleFlightResult[2][index].validatingAirlineCodes[0]
                      }
                      only={true}
                    />
                  </span>
                  <span>
                    <h5>Baggage</h5>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>

          {/* if there is stop then show this ui (stopover UI) */}
          { flightStopOver === 1 &&
               <DNRDetail>
                <DNRDetailFlightImage>
                <img
                    src={`https://images.wakanow.com/Images/flight-logos/${singleFlightResult[2][index].validatingAirlineCodes[0]}.gif`}
                    alt={singleFlightResult[2][index].validatingAirlineCodes[0]}
                  />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <DNRDetailTimeSec>
                  <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[0].segments[0].departure.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>
                      {singleFlightResult[0]}
                    </p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[0].segments[0]
                          .departure.iataCode
                      }
                    /> */}
                  </DNRDetailTimeSec>
                  <DNRDetailTimeSec>
                  <p>  {`${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).hours
                    }hr ${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).minutes
                    }min`} </p>
                    <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                  <p> {
                      singleFlightResult[2][index].itineraries[0].segments[0]
                        .numberOfStops
                    }
                    -Stop</p>
                  </DNRDetailTimeSec>
                  <DNRDetailTimeSec>
                    <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[0].segments[0].arrival.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>{singleFlightResult[1]}</p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .arrival.iataCode
                      }
                    /> */}
                  </DNRDetailTimeSec>
                </DNRDetailTime>

                <DNRDetailAirport>
                <div>Airport ({singleFlightResult[3]})</div>
                <div>Airport ({singleFlightResult[4]})</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h5>Airline</h5>
                    <AirlineFlightLogo
                      dictionaries={singleFlightResult[9]}
                      data={singleFlightResult[2][index]}
                      keyWord={
                        singleFlightResult[2][index].validatingAirlineCodes[0]
                      }
                      only={true}
                    />
                  </span>
                  <span>
                    <h5>Baggage</h5>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail> }
            </FlightDetailDNR>





            {/* flight return */}
            <FlightDetailDNR>
              <span>
                <FlightTitleWrapper>
                  <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                  <h5>
                    Flight From {singleFlightResult[1]} -{" "}
                    {singleFlightResult[0]}
                  </h5>
                </FlightTitleWrapper>
                <b>Inbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img
                    src={`https://images.wakanow.com/Images/flight-logos/${singleFlightResult[2][index].validatingAirlineCodes[0]}.gif`}
                    alt={singleFlightResult[2][index].validatingAirlineCodes[0]}
                  />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[1].segments[0].departure.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>{singleFlightResult[1]}</p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .departure.iataCode
                      }
                    /> */}
                  </span>
                  <span>
                  <p style={{fontSize: "8px"}}>  {`${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .duration
                      ).hours
                    }hr ${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .duration
                      ).minutes
                    }min`} </p>
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                    {
                      singleFlightResult[2][index].itineraries[1].segments[0]
                        .numberOfStops
                    }
                    -Stop
                  </span>
                  <span>
                    <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[1].segments[0].arrival.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>{singleFlightResult[0]}</p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .arrival.iataCode
                      }
                    /> */}
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>({singleFlightResult[4]})</div>
                  <div>({singleFlightResult[3]})</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h5>Airline</h5>
                    <AirlineFlightLogo
                      dictionaries={singleFlightResult[9]}
                      data={singleFlightResult[2][index]}
                      keyWord={
                        singleFlightResult[2][index].validatingAirlineCodes[0]
                      }
                      only={true}
                    />
                  </span>
                  <span>
                    <h5>Baggage</h5>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>

              {/* if there is stop over then show this ui */}
             { flightStopOver === 1  &&
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img
                    src={`https://images.wakanow.com/Images/flight-logos/${singleFlightResult[2][index].validatingAirlineCodes[0]}.gif`}
                    alt={singleFlightResult[2][index].validatingAirlineCodes[0]}
                  />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[1].segments[0].departure.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>{singleFlightResult[1]}</p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .departure.iataCode
                      }
                    /> */}
                  </span>
                  <span>
                  <p style={{fontSize: "8px"}}>  {`${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .duration
                      ).hours
                    }hr ${
                      parseDuration(
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .duration
                      ).minutes
                    }min`} </p>
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                    {
                      singleFlightResult[2][index].itineraries[1].segments[0]
                        .numberOfStops
                    }
                    -Stop
                  </span>
                  <span>
                    <h5>
                      {new Date(
                        singleFlightResult[2][
                          index
                        ].itineraries[1].segments[0].arrival.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <p>{singleFlightResult[0]}</p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        singleFlightResult[2][index].itineraries[1].segments[0]
                          .arrival.iataCode
                      }
                    /> */}
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>({singleFlightResult[4]})</div>
                  <div>({singleFlightResult[3]})</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h5>Airline</h5>
                    <AirlineFlightLogo
                      dictionaries={singleFlightResult[9]}
                      data={singleFlightResult[2][index]}
                      keyWord={
                        singleFlightResult[2][index].validatingAirlineCodes[0]
                      }
                      only={true}
                    />
                  </span>
                  <span>
                    <h5>Baggage</h5>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>}
            </FlightDetailDNR>

          <FlightDetailButton>
            <Button text={"Continue Booking"} onClick={continueBooking} />
          </FlightDetailButton>
          </FLightDetailContent>

        </FLightDetail>
      )}
    </FlightResultWrapper>
  );
}
