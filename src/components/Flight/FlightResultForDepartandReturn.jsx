import React, { useState, useEffect } from "react";
import {
  DnRHeader,
  DnRWrapper,
  FlightCard,
  FlightCardContent,
  FlightLogo,
  MdFlightStyled,
} from "../../pages/flight/flight_result/FlightResult.style";
import { MdFlight } from "react-icons/md";
import flightLogo from "../../images/aire-peace.png";
import AirlineFlightLogo from "./AirlineFlightLogo";
import AirlineCodeLookup from "./AirlineCodeLookup";
const FlightResultForDepartandReturn = ({ flightSearchResultData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });
  useEffect(() => {
    if (currentIndex < flightSearchResultData.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 2000); // Delay of 1 second for each item
      return () => clearTimeout(timer);
    }
  }, [currentIndex, flightSearchResultData.length]);

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

  return (
    <>
      {flightSearchResultData?.slice(0, currentIndex).map((data, index) => (
        <FlightCard key={index}>
          {/* flight logo */}

          <AirlineFlightLogo keyWord={data.validatingAirlineCodes[0]} />

          {/* Depart and Return Wrapper */}
          <FlightCardContent>
            <DnRWrapper>
              <DnRHeader>
                <h5>Depart</h5>{" "}
                <p>
                  {new Date(
                    data.itineraries[0].segments[0].departure.at
                  ).toLocaleString()}
                </p>{" "}
                <p>Arik Air</p>
              </DnRHeader>
              <div>
                <span>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[0].segments[0].departure.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h3>
                  <AirlineCodeLookup
                    keyWord={data.itineraries[0].segments[0].departure.iataCode}
                  />
                </span>
                <span>
                  {data.itineraries[0].segments[0].numberOfStops}-Stop
                  <MdFlightStyled rotateIcon={"90deg"} IconColor={"#0D3984"}>
                    <MdFlight />
                  </MdFlightStyled>
                  {`${
                    parseDuration(data.itineraries[0].segments[0].duration)
                      .hours
                  }hr ${
                    parseDuration(data.itineraries[0].segments[0].duration)
                      .minutes
                  }min`}
                </span>
                <span>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[0].segments[0].arrival.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h3>
                  <AirlineCodeLookup
                    keyWord={data.itineraries[0].segments[0].arrival.iataCode}
                  />
                </span>
              </div>
            </DnRWrapper>

            <DnRWrapper>
              <DnRHeader>
                <h5>Return</h5>{" "}
                <p>
                  {" "}
                  {new Date(
                    data.itineraries[1].segments[0].departure.at
                  ).toLocaleString()}
                </p>{" "}
                <p>Arik Air</p>
              </DnRHeader>
              <div>
                <span>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[1].segments[0].departure.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h3>
                  <AirlineCodeLookup
                    keyWord={data.itineraries[1].segments[0].departure.iataCode}
                  />
                </span>
                <span>
                  {data.itineraries[1].segments[0].numberOfStops}-Stop
                  <MdFlightStyled rotateIcon={"270deg"} IconColor={"#FF6805"}>
                    <MdFlight />
                  </MdFlightStyled>
                  {`${
                    parseDuration(data.itineraries[1].segments[0].duration)
                      .hours
                  }hr ${
                    parseDuration(data.itineraries[1].segments[0].duration)
                      .minutes
                  }min`}
                </span>
                <span>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[1].segments[0].arrival.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h3>
                  <AirlineCodeLookup
                    keyWord={data.itineraries[1].segments[0].arrival.iataCode}
                  />
                </span>
              </div>
            </DnRWrapper>
          </FlightCardContent>

          <FlightLogo>
            <b style={{ color: "black", fontSize: "14px" }}>
              Price: {money.format(data.price.total)}
            </b>
            <span style={{ color: "green", fontSize: "12px" }}>
              (Penalties upon Refunds)
            </span>
          </FlightLogo>
        </FlightCard>
      ))}
    </>
  );
};

export default FlightResultForDepartandReturn;
