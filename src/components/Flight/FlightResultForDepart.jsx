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
import AirlineCodeLookup from "./AirlineCodeLookup";
import AirlineFlightLogo from "./AirlineFlightLogo";

const FlightResultForDepart = ({
  dictionaries,
  flightSearchResultData,
  setIndex,
  locationName,
  showViewDetail,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });
  useEffect(() => {
    if (currentIndex < flightSearchResultData?.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 2000); // Delay of 1 second for each item
      return () => clearTimeout(timer);
    }
  }, [currentIndex, flightSearchResultData?.length]);

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
        <FlightCard>
          {/* flight logo */}
          <AirlineFlightLogo
            dictionaries={dictionaries}
            keyWord={data.validatingAirlineCodes[0]}
            index={index}
            data={data}
            setIndex={setIndex}
            showViewDetail={showViewDetail}
          />

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
                <p>
                  {data.itineraries[0].segments[0].operating
                    ? dictionaries.carriers[
                        data.itineraries[0].segments[0].operating.carrierCode
                      ]
                    : ""}
                </p>
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
                  <p style={{ width: 150, fontSize: 10 }}>{locationName[0]}</p>
                  {/* <AirlineCodeLookup
                    keyWord={data.itineraries[0].segments[0].departure.iataCode}
                  /> */}
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
                  <p style={{ width: 150, fontSize: 10 }}>{locationName[1]}</p>
                  {/* <AirlineCodeLookup
                    keyWord={data.itineraries[0].segments[0].arrival.iataCode}
                  /> */}
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

export default FlightResultForDepart;
