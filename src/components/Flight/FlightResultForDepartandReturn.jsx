import React, { useState, useEffect } from "react";
import {
  DnRBody,
  DnRBodyChildA,
  DnRBodyChildB,
  DnRBodyChildC,
  DnRHeader,
  DnRWrapper,
  FlightCard,
  FlightCardContent,
  FlightLogo,
  MdFlightStyled,
  PriceWrapper,
} from "../../pages/flight/flight_result/FlightResult.style";
import { MdFlight } from "react-icons/md";
import flightLogo from "../../images/aire-peace.png";
import AirlineFlightLogo from "./AirlineFlightLogo";
import AirlineCodeLookup from "./AirlineCodeLookup";
// import { useAuthStore } from "../../store/store";

const FlightResultForDepartandReturn = ({
  flightSearchResultData,
  dictionaries,
  setIndex,
  locationName,
  showViewDetail,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { filterIataAirport } = useAuthStore();
  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });
  useEffect(() => {
    if (currentIndex < flightSearchResultData?.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 500); // Delay of 1 second for each item
      return () => clearTimeout(timer);
    }
  }, [currentIndex, flightSearchResultData?.length]);

  // Caculate for duration
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

          <AirlineFlightLogo
            dictionaries={dictionaries}
            data={data}
            keyWord={data.validatingAirlineCodes[0]}
            index={index}
            setIndex={setIndex}
            showViewDetail={showViewDetail}
          />

          {/* Depart and Return Wrapper */}
          <FlightCardContent>
            <DnRWrapper>
              <DnRHeader>
                <h5>Depart</h5>
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
              <DnRBody>
                <DnRBodyChildA>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[0].segments[0].departure.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                  </h3>
                  <p>{locationName[0]}</p>

                  {/*                   
                  <AirlineCodeLookup
                    keyWord={data.itineraries[0].segments[0].departure.iataCode}
                  /> */}
                </DnRBodyChildA>
                <DnRBodyChildB style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "8px" }}>
                    {" "}
                    {data.itineraries[0].segments[0].numberOfStops}-Stopover
                  </p>
                  {/* <br /> */}
                  <p style={{ fontSize: "8px" }}>
                    {data.itineraries[0].segments.length - 1}-Layover
                  </p>
                  <MdFlightStyled rotateIcon={"90deg"} IconColor={"#0D3984"}>
                    <MdFlight />
                  </MdFlightStyled>
                  <p style={{ fontSize: "8px" }}>
                    {" "}
                    {`${
                      parseDuration(data.itineraries[0].segments[0].duration)
                        .hours
                    }hr ${
                      parseDuration(data.itineraries[0].segments[0].duration)
                        .minutes
                    }min`}
                  </p>
                </DnRBodyChildB>
                <DnRBodyChildC>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[0].segments[0].arrival.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h3>
                  <p>{locationName[1]}</p>
                  {/* <AirlineCodeLookup
                    keyWord={data.itineraries[0].segments[0].arrival.iataCode}
                  /> */}
                </DnRBodyChildC>
              </DnRBody>
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
                <p>
                  {data.itineraries[1].segments[0].operating
                    ? dictionaries.carriers[
                        data.itineraries[1].segments[0].operating.carrierCode
                      ]
                    : ""}
                </p>
              </DnRHeader>
              <DnRBody>
                <DnRBodyChildA>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[1].segments[0].departure.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h3>
                  <p>{locationName[1]}</p>
                  {/* <AirlineCodeLookup
                    keyWord={data.itineraries[1].segments[0].departure.iataCode}
                  /> */}
                </DnRBodyChildA>
                <DnRBodyChildB style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "8px" }}>
                    {data.itineraries[1].segments[0].numberOfStops}-Stopover
                  </p>
                  <p style={{ fontSize: "8px" }}>
                    {data.itineraries[1].segments.length - 1}-Layover
                  </p>
                  <MdFlightStyled rotateIcon={"270deg"} IconColor={"#FF6805"}>
                    <MdFlight />
                  </MdFlightStyled>
                  <p style={{ fontSize: "8px" }}>
                    {" "}
                    {`${
                      parseDuration(data.itineraries[1].segments[0].duration)
                        .hours
                    }hr ${
                      parseDuration(data.itineraries[1].segments[0].duration)
                        .minutes
                    }min`}{" "}
                  </p>
                </DnRBodyChildB>
                <DnRBodyChildC>
                  <h3>
                    {" "}
                    {new Date(
                      data.itineraries[1].segments[0].arrival.at
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h3>
                  <p>{locationName[0]}</p>
                  {/* <AirlineCodeLookup
                    keyWord={data.itineraries[1].segments[0].arrival.iataCode}
                  /> */}
                </DnRBodyChildC>
              </DnRBody>
            </DnRWrapper>
          </FlightCardContent>

          {/* <FlightLogo>
            <b style={{ color: "black", fontSize: "14px" }}>
              Price: {money.format(data.price.total)}
            </b>
            <span style={{ color: "green", fontSize: "10px" }}>
              (Penalties upon Refunds)
            </span>
          </FlightLogo> */}

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
    </>
  );
};

export default FlightResultForDepartandReturn;
