import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DateFlight,
  DNRDetail,
  DNRDetailAirport,
  DNRDetailBaggage,
  DNRDetailFlightImage,
  DNRDetailTime,
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
  FlightResultContent,
  FlightResultHeader,
  FlightResultMain,
  FlightResultWrapper,
  MdFlightStyled,
  ResultCounter,
  ResultCounterLeft,
  ResultCounterRight,
} from "../FlightResult.style";
import { MdFlight } from "react-icons/md";
import { FaCircle, FaTimes } from "react-icons/fa";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";
import Button from "../../../../components/button/Button";
import flightLogo from "../../../../images/aire-peace.png";
// import FormWrapper from '../../../../components/booking_icons/form_wrapper/FormWrapper';
import {
  FlightType,
  RadioCheck,
  RadioItem,
  RadioItemWrapper,
} from "../../flight_booking/FlightBooking.style";
import SingleSearchCityForm from "../../flight_booking/single_city/SingleSearchCityForm";
import MulticitySearchForm from "../../flight_booking/multi_city/MulticitySearchForm";
import FormWrapper from "../../../../pages/flight/flight_booking/FlightBooking.style";
import { OneFormWrapper } from "./OneWayResult.style";

import AirlineCodeLookup from "../../../../components/Flight/AirlineCodeLookup";
import AirlineFlightLogo from "../../../../components/Flight/AirlineFlightLogo";
import { useAuthStore } from "../../../../store/store";
import FlightResultForDepart from "../../../../components/Flight/FlightResultForDepart";
import NoResult from "../../../../components/no_result/NoResult";

export default function OneWayResult() {
  const { oneWayFlightResult } = useAuthStore();
  // const flightData = JSON.parse(myObject);

  const navigate = useNavigate();
  console.log(oneWayFlightResult);
  useEffect(() => {
    if (!oneWayFlightResult || oneWayFlightResult?.length === 0) {
      navigate("/flight-booking");
    }
  }, [oneWayFlightResult, navigate]);
  // useEffect(() => {
  //   if (!oneWayFlightResult[0]) {
  //     navigate("/flight-booking");
  //   }
  // }, [oneWayFlightResult, navigate]);

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
    navigate(`/oneway-trip-info/${index}`);
    setShowViewDetailCard(false);
  };

  const [showFlightInputs, setshowFlightInputs] = useState(false);

  const [showReturnDate, setShowReturnDte] = useState(false);

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
      {oneWayFlightResult[2]?.length === 0 && <NoResult />}
      {/* flight header section */}
      <FlightResultHeader>
        <DateFlight>Mon, 9 Sep 2024</DateFlight>
        <p>
          Select your departure flight from <span>{oneWayFlightResult[0]}</span>{" "}
          to <span>{oneWayFlightResult[1]}</span>
        </p>
      </FlightResultHeader>

      {/* Flight top level items  such as stopover, manage bookings etc..*/}
      {/* Flight Headers */}

      {/* Flight Modification form */}
      {/* <FlightModification> */}
      <OneFormWrapper>
        {/*======= Flight Search Form =============================== */}

        {/*============================ Single City Search Form =============================== */}

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
      </OneFormWrapper>
      {/* </FlightModification> */}

      {/* flight result section */}
      <FlightResultContent>
        {/* Flight Result Main Content */}
        <FlightResultMain>
          {/* Counter Summary */}
          <ResultCounter>
            <ResultCounterLeft>
              <h3>{oneWayFlightResult[2]?.length} results</h3>
              <p>Fares displayed are for all passengers.</p>
            </ResultCounterLeft>

            <ResultCounterRight>
              <span onClick={() => {}}>See more dates</span>
              <span onClick={() => {}}>USD - US Dollar ($)</span>
              <span onClick={() => {}}>Sort and Filter</span>
            </ResultCounterRight>
          </ResultCounter>

          {/* Flight Result Card  1*/}
          <FlightResultForDepart
            dictionaries={oneWayFlightResult[9]}
            flightSearchResultData={oneWayFlightResult[2]}
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
              <span>
                <div>
                  <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                  <h3>{`Flight From ${oneWayFlightResult[0]} - ${oneWayFlightResult[1]}`}</h3>
                </div>
                <b>Outbound</b>
              </span>
              <DNRDetail>
                <DNRDetailFlightImage>
                  <img
                    src={`https://images.wakanow.com/Images/flight-logos/${oneWayFlightResult[2][index].validatingAirlineCodes[0]}.gif`}
                    alt={oneWayFlightResult[2][index].validatingAirlineCodes[0]}
                  />
                </DNRDetailFlightImage>

                <DNRDetailTime>
                  <span>
                    <h3>
                      {new Date(
                        oneWayFlightResult[2][
                          index
                        ].itineraries[0].segments[0].departure.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h3>
                    <p style={{ width: 150, fontSize: 10 }}>
                      {oneWayFlightResult[0]}
                    </p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        oneWayFlightResult[2][index].itineraries[0].segments[0]
                          .departure.iataCode
                      }
                    /> */}
                  </span>
                  <span>
                    {`${
                      parseDuration(
                        oneWayFlightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).hours
                    }hr ${
                      parseDuration(
                        oneWayFlightResult[2][index].itineraries[0].segments[0]
                          .duration
                      ).minutes
                    }min`}
                    <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                    {
                      oneWayFlightResult[2][index].itineraries[0].segments[0]
                        .numberOfStops
                    }
                    -Stop
                  </span>
                  <span>
                    <h3>
                      {" "}
                      {new Date(
                        oneWayFlightResult[2][
                          index
                        ].itineraries[0].segments[0].arrival.at
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h3>
                    <p style={{ width: 150, fontSize: 10 }}>
                      {oneWayFlightResult[1]}
                    </p>
                    {/* <AirlineCodeLookup
                      keyWord={
                        oneWayFlightResult[2][index].itineraries[0].segments[0]
                          .arrival.iataCode
                      }
                    /> */}
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>Airport ({oneWayFlightResult[3]})</div>
                  <div>Airport ({oneWayFlightResult[4]})</div>
                </DNRDetailAirport>
                <DNRDetailBaggage>
                  <span>
                    <h3>Airline</h3>

                    <AirlineFlightLogo
                      dictionaries={oneWayFlightResult[9]}
                      data={oneWayFlightResult[2][index]}
                      keyWord={
                        oneWayFlightResult[2][index].validatingAirlineCodes[0]
                      }
                      only={true}
                    />
                  </span>
                  <span>
                    <h3>Baggage</h3>
                    100kg
                  </span>
                </DNRDetailBaggage>
              </DNRDetail>
            </FlightDetailDNR>
          </FLightDetailContent>

          <FlightDetailButton>
            <Button text={"Continue Booking"} onClick={continueBooking} />
          </FlightDetailButton>
        </FLightDetail>
      )}
    </FlightResultWrapper>
  );
}
