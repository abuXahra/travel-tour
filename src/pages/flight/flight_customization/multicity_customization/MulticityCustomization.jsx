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
} from "./MulticityCustomization.style";

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
import { useAuthStore } from "../../../../store/store";
import axios from "axios";

export default function MulticityCustomization() {
  const navigate = useNavigate();

  const { multiCityFlightResult, travelDetail } = useAuthStore();
  const { multiCityFlightResultIndex } = useParams();
  let queryParams;
  let location = multiCityFlightResult[0];
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

  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });
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
        const res = await axios.post("http://localhost:5000/pricelookup", {
          flight: multiCityFlightResult[1][multiCityFlightResultIndex],
        });
        if (res) {
          console.log(res?.data?.data);
          setFResult(res?.data?.data?.flightOffers[0]);
        }
      } catch (err) {
        console.log(err?.response?.data);
      }
    };

    bookflights();
  }, [multiCityFlightResult, multiCityFlightResultIndex]);

  useEffect(() => {
    if (!multiCityFlightResult[1] || multiCityFlightResult[1]?.length === 0) {
      navigate("/flight-booking");
    }
  }, [multiCityFlightResult, navigate]);

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
              {multiCityFlightResult[1][
                multiCityFlightResultIndex
              ].itineraries.map((data, index) => (
                <span>
                  <FlightIcon
                    IconSize={"14px"}
                    rotate={"45deg"}
                    iconColor={"#4a4a4a"}
                  />
                  <div>
                    <p>
                      <b>
                        {location[index]?.from} (
                        {location[index].originLocationCode}){" "}
                        <strong>TO</strong> {location[index]?.to} (
                        {location[index].destinationLocationCode})
                      </b>
                    </p>
                    <p>
                      {
                        multiCityFlightResult[1][multiCityFlightResultIndex]
                          .travelerPricings[0].fareDetailsBySegment[0].cabin
                      }{" "}
                      Round Trip
                    </p>
                  </div>
                </span>
              ))}
            </SideFlightAirport>
            <h4>Flight Fare Summary</h4>
            <SideFlightSummary>
              <div>
                <span>Adult X 1</span>
                <span></span>
              </div>
              <div>
                <span>Base Fee</span>
                <span> {money.format(FResult?.price?.base)}</span>
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
                <span> {money.format(FResult?.price?.total)}</span>
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
                  {multiCityFlightResult[1][
                    multiCityFlightResultIndex
                  ].itineraries.map((data, index) => (
                    <TripDetailBody mb={"20px"}>
                      <TripDetailClass>
                        <span>
                          <AirlineFlightLogo
                            keyWord={
                              multiCityFlightResult[1][
                                multiCityFlightResultIndex
                              ].validatingAirlineCodes[0]
                            }
                            detail={true}
                          />
                        </span>
                        <span>
                          {" "}
                          {
                            multiCityFlightResult[1][multiCityFlightResultIndex]
                              .travelerPricings[0].fareDetailsBySegment[0].cabin
                          }
                        </span>
                      </TripDetailClass>
                      <TripDetailTime>
                        <TripHour>
                          <span>
                            <div>
                              <h4>
                                {" "}
                                {new Date(
                                  data.segments[0].departure.at
                                ).toLocaleTimeString("en-US", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </h4>
                              <h4>
                                {" "}
                                {new Date(
                                  data.segments[0].arrival.at
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
                              <b>({location[index].originLocationCode})</b>
                              {location[index]?.from}
                            </p>
                            <p>{`${
                              parseDuration(data.segments[0].duration).hours
                            }hr ${
                              parseDuration(data.segments[0].duration).minutes
                            }min`}</p>
                            <p>
                              <b>
                                {" "}
                                ({location[index].destinationLocationCode})
                              </b>
                              {location[index]?.to}
                            </p>
                          </div>
                          <div>
                            <span>
                              <h4>BAGGAGE:</h4>{" "}
                              <p>
                                {" "}
                                {
                                  multiCityFlightResult[1][
                                    multiCityFlightResultIndex
                                  ].travelerPricings[0].travelerType
                                }
                              </p>
                            </span>
                            <span>
                              <h4>CHECK IN:</h4> <p>20KG</p>
                            </span>
                          </div>
                          <div style={{ fontSize: "12px" }}>
                            <p>
                              {new Date(
                                data.segments[0].departure.at
                              ).toLocaleDateString("en-US", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                            <p>
                              {" "}
                              {data.segments[0].numberOfStops} Stops.{" "}
                              {`${
                                parseDuration(data.segments[0].duration).hours
                              }hr ${
                                parseDuration(data.segments[0].duration).minutes
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
                      <img src={flightLogo} alt="" /> <h4>Air Peace</h4>{" "}
                      <p>73G</p>
                    </span>
                    <span>Economy</span>
                  </TripDetailClass>
                  <TripDetailTime>
                    <CustomizeTripDetail>
                      <h4>(1) {travelDetail?.firstName}</h4>
                      <p>ADULT</p>
                      <span>{travelDetail?.selectedGender}</span>
                      <span>{travelDetail?.email}</span>
                      <EditIcon onClick={() => navigate("/multicity-edit")}>
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
              onClick={() => navigate("/multicity-Overview")}
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
