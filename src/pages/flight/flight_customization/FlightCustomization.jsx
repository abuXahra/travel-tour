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
} from "./FlightCustomization.style";
import Button from "../../../components/button/Button";
import Timeline from "../../../components/timeline/Timeline";
import { useNavigate, useParams } from "react-router-dom";
import FlightIcon from "../../../components/flight_icon/FlightIcon";
import flightLogo from "../../../images/aire-peace.png";
import { FaTimes } from "react-icons/fa";
import { FaTruckFieldUn } from "react-icons/fa6";
import { FlightAddons } from "../../../data/object/flightAddons";
import { IoIosArrowDown } from "react-icons/io";
import AirlineCodeLookup from "../../../components/Flight/AirlineCodeLookup";
import AirlineFlightLogo from "../../../components/Flight/AirlineFlightLogo";
import { useAuthStore } from "../../../store/store";
import { EditIcon } from "./multicity_customization/MulticityCustomization.style";
import { FiEdit } from "react-icons/fi";

export default function FlightCustomization() {
  const { singleFlightResult, travelDetail, flightPriceLookup } =
    useAuthStore();
  //let FResult;
  const { flightResultIndex } = useParams();
  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!singleFlightResult || singleFlightResult?.length === 0) {
      navigate("/flight-booking");
    }
  }, [singleFlightResult, navigate]);

  const [showTripSummary, setShowTripSummary] = useState(false);
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsTitle, setTermsTitle] = useState("");
  const [termsBody, setTermsBody] = useState("");
  const [FResult, setFResult] = useState("");

  // Terms and Condition click handler
  const handleTermClick = ({ title, terms }) => {
    setShowTerms(true);
    setTermsTitle(title);
    setTermsBody(terms);
  };

  useEffect(() => {
    const bookflights = async () => {
      try {
        const res = await flightPriceLookup(
          singleFlightResult[2][flightResultIndex]
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
  }, [singleFlightResult, flightResultIndex]);

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
  if (!singleFlightResult || singleFlightResult?.length === 0) {
    navigate("/flight-booking");
  } else {
    return (
      <CustomizeWrapper>
        {/* Header */}
        <CustomizeHeader>
          <CustomizeHeaderItems>
            <CustomizeHeaderTitle>
              <span>
                <Button
                  text={"Back"}
                  onClick={() => navigate("/flight-result")}
                />
              </span>
              <h2>Proceed with your booking</h2>
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
                        {" "}
                        {singleFlightResult[0]} ({singleFlightResult[3]}) TO{" "}
                        {singleFlightResult[1]} ({singleFlightResult[4]})
                      </b>
                    </p>
                    <p>
                      {
                        singleFlightResult[2][flightResultIndex]
                          .travelerPricings[0].fareDetailsBySegment[0].cabin
                      }{" "}
                      Round Trip
                    </p>
                  </div>
                </span>
                <span>
                  <FlightIcon
                    IconSize={"14px"}
                    rotate={"45deg"}
                    iconColor={"#4a4a4a"}
                  />
                  <div>
                    <p>
                      <b>
                        {" "}
                        {singleFlightResult[1]} ({singleFlightResult[4]}) TO{" "}
                        {singleFlightResult[0]} ({singleFlightResult[3]})
                      </b>
                    </p>
                    <p>
                      {
                        singleFlightResult[2][flightResultIndex]
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
                    <h2>Trip Summary</h2>
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
                    <TripDetailBody mb={"20px"}>
                      <TripDetailClass>
                        <span>
                          <AirlineFlightLogo
                            dictionaries={singleFlightResult[9]}
                            data={singleFlightResult[2][flightResultIndex]}
                            keyWord={
                              singleFlightResult[2][flightResultIndex]
                                .validatingAirlineCodes[0]
                            }
                            detail={true}
                          />
                        </span>
                        <span>
                          <a href="#">
                            {
                              singleFlightResult[2][flightResultIndex]
                                .travelerPricings[0].fareDetailsBySegment[0]
                                .cabin
                            }
                          </a>
                        </span>
                      </TripDetailClass>
                      <TripDetailTime>
                        <TripHour>
                          <span>
                            <div>
                              <h4>
                                {new Date(
                                  singleFlightResult[2][
                                    flightResultIndex
                                  ].itineraries[0].segments[0].departure.at
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h4>
                              <h4>
                                {" "}
                                {new Date(
                                  singleFlightResult[2][
                                    flightResultIndex
                                  ].itineraries[0].segments[0].arrival.at
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h4>
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
                              {singleFlightResult[0]}{" "}
                              <b>({singleFlightResult[3]})</b>
                            </p>
                            <p>
                              {singleFlightResult[1]}{" "}
                              <b>({singleFlightResult[4]})</b>
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
                                singleFlightResult[2][
                                  flightResultIndex
                                ].itineraries[0].segments[0].departure.at
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                            <p>
                              {
                                singleFlightResult[2][flightResultIndex]
                                  .itineraries[0].segments[0].numberOfStops
                              }{" "}
                              Stops.{" "}
                              {`${
                                parseDuration(
                                  singleFlightResult[2][flightResultIndex]
                                    .itineraries[0].segments[0].duration
                                ).hours
                              }hr ${
                                parseDuration(
                                  singleFlightResult[2][flightResultIndex]
                                    .itineraries[0].segments[0].duration
                                ).minutes
                              }min`}
                            </p>
                          </div>
                        </TripAirport>
                      </TripDetailTime>
                    </TripDetailBody>
                    <TripDetailBody>
                      <TripDetailClass>
                        <span>
                          <AirlineFlightLogo
                            dictionaries={singleFlightResult[9]}
                            data={singleFlightResult[2][flightResultIndex]}
                            keyWord={
                              singleFlightResult[2][flightResultIndex]
                                .validatingAirlineCodes[0]
                            }
                            detail={true}
                          />
                        </span>
                        <span>
                          {" "}
                          {
                            singleFlightResult[2][flightResultIndex]
                              .travelerPricings[0].fareDetailsBySegment[0].cabin
                          }
                        </span>
                      </TripDetailClass>
                      <TripDetailTime>
                        <TripHour>
                          <span>
                            <div>
                              <h4>
                                {new Date(
                                  singleFlightResult[2][
                                    flightResultIndex
                                  ].itineraries[1].segments[0].departure.at
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h4>
                              <h4>
                                {" "}
                                {new Date(
                                  singleFlightResult[2][
                                    flightResultIndex
                                  ].itineraries[1].segments[0].arrival.at
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h4>
                            </div>
                            <div>
                              <hr />
                              <FlightIcon
                                rotate={"360deg"}
                                iconColor={"#FF6805"}
                              />
                              <hr />
                            </div>
                          </span>
                        </TripHour>
                        <TripAirport>
                          <div>
                            <p>
                              {singleFlightResult[1]}{" "}
                              <b>({singleFlightResult[4]})</b>
                            </p>
                            {/* <p>1h 15m</p> */}
                            <p>
                              {singleFlightResult[0]}{" "}
                              <b>({singleFlightResult[3]})</b>
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
                                singleFlightResult[2][
                                  flightResultIndex
                                ].itineraries[1].segments[0].departure.at
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                            <p>
                              {
                                singleFlightResult[2][flightResultIndex]
                                  .itineraries[1].segments[0].numberOfStops
                              }{" "}
                              Stops.{" "}
                              {`${
                                parseDuration(
                                  singleFlightResult[2][flightResultIndex]
                                    .itineraries[1].segments[0].duration
                                ).hours
                              }hr ${
                                parseDuration(
                                  singleFlightResult[2][flightResultIndex]
                                    .itineraries[1].segments[0].duration
                                ).minutes
                              }min`}
                            </p>
                          </div>
                        </TripAirport>
                      </TripDetailTime>
                    </TripDetailBody>
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
                    <h2>Travel Detail</h2>
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
                    <TripDetailClass>
                      <span>
                        <AirlineFlightLogo
                          dictionaries={singleFlightResult[9]}
                          data={singleFlightResult[2][flightResultIndex]}
                          keyWord={
                            singleFlightResult[2][flightResultIndex]
                              .validatingAirlineCodes[0]
                          }
                          detail={true}
                        />
                      </span>
                      <span>
                        {
                          singleFlightResult[2][flightResultIndex]
                            .travelerPricings[0].fareDetailsBySegment[0].cabin
                        }
                      </span>
                    </TripDetailClass>
                    <TripDetailTime>
                      <CustomizeTripDetail>
                        <h4>(1) {travelDetail?.AdultData[0]?.firstName}</h4>
                        <p>ADULT</p>
                        <span>
                          {travelDetail?.AdultData[0]?.selectedGender}
                        </span>
                        <span>{travelDetail?.AdultData[0]?.email}</span>
                        <EditIcon
                          onClick={() =>
                            navigate(`/trip-info/${flightResultIndex}`)
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
                  navigate(`/overview-payment/${flightResultIndex}`)
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
                    <button onClick={() => setShowTerms(false)}>
                      Continue
                    </button>
                  </span>
                </AddonCard>
              </CustomizeAddonWrapper>
            </CustomizeContent>
          </TermsDetail>
        )}
      </CustomizeWrapper>
    );
  }
}
