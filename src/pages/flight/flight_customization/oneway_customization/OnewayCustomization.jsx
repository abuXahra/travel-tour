import React, { useState, useEffect } from "react";
import {
  AddonCard,
  AddonCardButton,
  AddonCardHeader,
  AddonIcon,
  CustomizeAddonWrapper,
  CustomizeBody,
  CustomizeContent,
  CustomizeHeader,
  CustomizeHeaderItems,
  CustomizeHeaderTitle,
  CustomizeSideBar,
  CustomizeSideContent,
  CustomizeWrapper,
  FlightDetailWrapper,
  SideFlightAirport,
  SideFlightSummary,
  TotalTrip,
  TripAirport,
  TripDetailBody,
  TripDetailClass,
  TripDetailTile,
  TripDetailTime,
  TripHour,
  TripMinContent,
  TermsDetail,
  TermsDetailHeader,
  TermStyled,
  CustomizeTripDetail,
  EditIcon,
} from "./OnewayCustomization.style";

import { useNavigate, useParams } from "react-router-dom";

import flightLogo from "../../../../images/aire-peace.png";
import { FaTimes } from "react-icons/fa";
import { FaTruckFieldUn } from "react-icons/fa6";

import { IoIosArrowDown } from "react-icons/io";
import Button from "../../../../components/button/Button";
import Timeline from "../../../../components/timeline/Timeline";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";
import { FlightAddons } from "../../../../data/object/flightAddons";
import { FiEdit } from "react-icons/fi";
import AirlineFlightLogo from "../../../../components/Flight/AirlineFlightLogo";
import iataAirports from "../../../../flightDB/IATA_airports.json";
import { useAuthStore } from "../../../../store/store";

export default function OnewayCustomization() {
  // user defined variable for stopover   ===============================================================
  const [flightStopOver, setFlightStopOver] = useState(1);

  const navigate = useNavigate();
  const { oneWayFlightResult, travelDetail, flightPriceLookup } =
    useAuthStore();
  const [FResult, setFResult] = useState("");
  //let FResult;
  const { oneWayFlightResultIndex } = useParams();
  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });

  const filterIataAirport = (iataCode) => {
    const newFilterData = iataAirports.find((item) => {
      return (
        item.IATA && item.IATA.toLowerCase().includes(iataCode.toLowerCase())
      );
    });

    return newFilterData;
  };

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
  useEffect(() => {
    const bookflights = async () => {
      try {
        const res = await flightPriceLookup(
          oneWayFlightResult[2][oneWayFlightResultIndex]
        );

        if (res) {
          console.log(res);
          setFResult(res?.flightOffers[0]);
        }
      } catch (err) {
        console.log(err?.response?.data);
      }
    };

    bookflights();
  }, [oneWayFlightResult, oneWayFlightResultIndex]);

  useEffect(() => {
    if (!oneWayFlightResult || oneWayFlightResult?.length === 0) {
      navigate("/flight-booking");
    }
  }, [oneWayFlightResult, navigate]);

  const [showTripSummary, setShowTripSummary] = useState(false);
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsTitle, setTermsTitle] = useState("");
  const [termsBody, setTermsBody] = useState("");

  // Terms and Condition click handler
  const handleTermClick = ({ title, terms }) => {
    setShowTerms(true);
    setTermsTitle(title);
    setTermsBody(terms);
  };

  return (
    <CustomizeWrapper>
      {/* Header */}
      <CustomizeHeader>
        <CustomizeHeaderItems>
          <CustomizeHeaderTitle>
            <span>
              <Button
                text={"Back"}
                onClick={() =>
                  navigate(`/oneway-trip-info/${oneWayFlightResultIndex}`)
                }
              />
            </span>
            <h4>Proceed with your booking</h4>
          </CustomizeHeaderTitle>
          {/* Timeline: Trip info steps */}
          <Timeline currentStep={3} />
        </CustomizeHeaderItems>
      </CustomizeHeader>

      {/* Body */}
      <CustomizeBody>
        {/* Sidebar */}
        <CustomizeSideBar>
          <CustomizeSideContent>
            <h2>My Cart</h2>
            <h4>Flight</h4>
            <SideFlightAirport>
              <span>
                <FlightIcon
                  IconSize={"14px"}
                  rotate={"45deg"}
                  iconColor={"#4a4a4a"}
                />
                <div>
                  <p>
                    <b>
                      {oneWayFlightResult[0]} ({oneWayFlightResult[3]}) TO{" "}
                      {oneWayFlightResult[1]} ({oneWayFlightResult[4]})
                    </b>
                  </p>
                  <p>
                    {" "}
                    {
                      oneWayFlightResult[2][oneWayFlightResultIndex]
                        .travelerPricings[0].fareDetailsBySegment[0].cabin
                    }{" "}
                    Round Trip
                  </p>
                </div>
              </span>
            </SideFlightAirport>
            <h4>Flight Fare Summary</h4>
            <SideFlightSummary>
              <div>
                <span>Adult X 1</span>
                <span></span>
              </div>
              <div>
                <span>Base Fee</span>
                <span>{money.format(FResult?.price?.base)}</span>
              </div>
              <div>
                <span>Discount</span>
                <span>0</span>
              </div>
              <div>
                <span>Service Charge</span>
                <span>0</span>
              </div>
              <div>
                <span>
                  <b>Total Fare</b>
                </span>
                <span>{money.format(FResult?.price?.total)}</span>
              </div>
            </SideFlightSummary>
            <TotalTrip>
              <div>
                <span>Trip Total</span>
                <span>{money.format(FResult?.price?.total)}</span>
              </div>
            </TotalTrip>
          </CustomizeSideContent>
        </CustomizeSideBar>

        {/* Main Content */}
        <TripMinContent>
          {/* User info content */}
          <CustomizeContent>
            {/* Flight Detail section */}
            <FlightDetailWrapper>
              {/* Title */}
              <TripDetailTile
                onClick={() => setShowTripSummary(!showTripSummary)}
              >
                <span>
                  <h4>Trip Summary</h4>
                </span>
                <span>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </span>
              </TripDetailTile>
              {/* Body */}
              {showTripSummary && (
                <div>
                  {oneWayFlightResult[2][
                    oneWayFlightResultIndex
                  ].itineraries[0].segments?.map((flightData, Index) => (
                    <TripDetailBody mb={"20px"}>
                      <TripDetailClass>
                        <span>
                          <AirlineFlightLogo
                            dictionaries={oneWayFlightResult[9]}
                            data={
                              oneWayFlightResult[2][oneWayFlightResultIndex]
                            }
                            keyWord={
                              flightData?.operating?.carrierCode
                                ? flightData?.operating?.carrierCode
                                : oneWayFlightResult[2][oneWayFlightResultIndex]
                                    .validatingAirlineCodes[0]
                            }
                            detail={true}
                          />
                        </span>
                        <span>
                          {
                            oneWayFlightResult[2][oneWayFlightResultIndex]
                              .travelerPricings[0].fareDetailsBySegment[0].cabin
                          }
                        </span>
                      </TripDetailClass>
                      <TripDetailTime>
                        <TripHour>
                          <span>
                            <div>
                              <h5>
                                {new Date(
                                  flightData?.departure?.at
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h5>
                              <h5>
                                {" "}
                                {new Date(
                                  flightData?.arrival.at
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h5>
                            </div>
                            <div>
                              <hr />
                              <FlightIcon
                                rotate={"180deg"}
                                iconColor={"#0D3984"}
                              />
                              <hr />
                            </div>
                          </span>
                        </TripHour>
                        <TripAirport>
                          <div>
                            <p>
                              {`${
                                filterIataAirport(
                                  flightData?.departure?.iataCode
                                )?.Airport_name
                              },  ${
                                filterIataAirport(
                                  flightData?.departure?.iataCode
                                )?.Location_served
                              }`}{" "}
                              <b>({flightData?.departure?.iataCode})</b>
                            </p>
                            <p>
                              {`${
                                parseDuration(flightData?.duration).hours
                              }hr ${
                                parseDuration(flightData?.duration).minutes
                              }min`}
                            </p>
                            <p>
                              {`${
                                filterIataAirport(flightData?.arrival?.iataCode)
                                  ?.Airport_name
                              },  ${
                                filterIataAirport(flightData?.arrival?.iataCode)
                                  ?.Location_served
                              }`}{" "}
                              <b>({flightData?.arrival?.iataCode})</b>
                            </p>
                          </div>
                          <div>
                            <span>
                              <h4>BAGGAGE:</h4> <p>ADULT</p>
                            </span>
                            <span>
                              <h4>CHECK IN:</h4> <p>20KG</p>
                            </span>
                          </div>
                          <div style={{ fontSize: "12px" }}>
                            <p>
                              {" "}
                              {new Date(
                                flightData?.departure?.at
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                            <p>
                              {" "}
                              {flightData?.numberOfStops} Stops.{" "}
                              {`${
                                parseDuration(flightData?.duration).hours
                              }hr ${
                                parseDuration(flightData?.duration).minutes
                              }min`}
                            </p>
                          </div>
                        </TripAirport>
                      </TripDetailTime>
                    </TripDetailBody>
                  ))}
                </div>
              )}
            </FlightDetailWrapper>

            {/* For flight return */}
            <FlightDetailWrapper>
              {/* Title */}
              <TripDetailTile
                onClick={() => setShowTravelDetail(!showTravelDetail)}
              >
                <span>
                  <h4>Travel Detail</h4>
                </span>
                <span>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </span>
              </TripDetailTile>
              {/* Body */}
              {showTravelDetail && (
                <TripDetailBody>
                  {/* <TripDetailClass>
                    <span>
                      <img src={flightLogo} alt="" /> <h4>Air Peace</h4>{" "}
                      <p>73G</p>
                    </span>
                    <span>Economy</span>
                  </TripDetailClass> */}
                  <TripDetailTime>
                    <CustomizeTripDetail>
                      <h4>(1) {travelDetail?.AdultData[0]?.firstName}</h4>
                      <p>ADULT</p>
                      <span>{travelDetail?.AdultData[0]?.selectedGender}</span>
                      <span>{travelDetail?.AdultData[0]?.email}</span>
                      <EditIcon
                        onClick={() =>
                          navigate(
                            `/oneway-trip-info/${oneWayFlightResultIndex}`
                          )
                        }
                      >
                        <FiEdit />
                      </EditIcon>
                    </CustomizeTripDetail>
                  </TripDetailTime>
                </TripDetailBody>
              )}
            </FlightDetailWrapper>
          </CustomizeContent>

          {/* Trip Addons */}
          <CustomizeContent>
            <h2>Manzo Travel Addons Services</h2>
            <p>Include manzo addon services in your trip</p>
          </CustomizeContent>

          {FlightAddons.map((addon, i) => (
            <CustomizeContent key={i}>
              <CustomizeAddonWrapper>
                <AddonCard>
                  <AddonCardHeader>
                    <AddonIcon>
                      <FaTruckFieldUn />
                    </AddonIcon>
                    <span>
                      <h2>{addon.title}</h2>
                      <p>{addon.description}</p>
                      <TermStyled
                        onClick={() =>
                          handleTermClick({
                            title: addon.title,
                            terms: addon.terms,
                          })
                        }
                      >
                        <p>Terms and Conditions</p> <IoIosArrowDown />
                      </TermStyled>
                    </span>
                  </AddonCardHeader>
                  <AddonCardButton>
                    <h3>{addon.price}</h3>
                    <p>{addon.numberOfPerson}</p>
                    <Button text={"ADD ADDON"} />
                  </AddonCardButton>
                </AddonCard>
              </CustomizeAddonWrapper>
            </CustomizeContent>
          ))}
          <div>
            <Button
              onClick={() =>
                navigate(`/oneway-overview/${oneWayFlightResultIndex}`)
              }
              text={"Continue to payment"}
            />
          </div>
        </TripMinContent>
      </CustomizeBody>

      {showTerms && (
        <TermsDetail>
          <CustomizeContent wd={"50%"}>
            <CustomizeAddonWrapper>
              <AddonCard flexDir="column">
                <TermsDetailHeader>
                  <h2>{termsTitle}</h2>
                  <span onClick={() => setShowTerms(false)}>
                    <FaTimes />
                  </span>
                </TermsDetailHeader>
                <p>{termsBody}</p>
                <span>
                  <button onClick={() => setShowTerms(false)}>Continue</button>
                </span>
              </AddonCard>
            </CustomizeAddonWrapper>
          </CustomizeContent>
        </TermsDetail>
      )}
    </CustomizeWrapper>
  );
}
