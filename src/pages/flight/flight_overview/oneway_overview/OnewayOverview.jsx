import React, { useState, useEffect } from "react";
import {
  OverviewContent,
  OverviewHeader,
  OverviewHeaderItems,
  OverviewHeaderTitle,
  OverviewWrapper,
  TripMinContent,
  FlightContainer,
  FlightIconWrapper,
  FlightHeader,
  FlightTimeContainer,
  ContainerWrapper,
  ContainerHeader,
  Containerbody,
  ContainerTime,
  HorizontalLine,
  PDetailWrapper,
  RemoveService,
  RulesAndCondStyled,
  RulesAndCondContent,
  RulesAndCondHeader,
  IconWrapper,
  RulesSubHeader,
  RulesSubBody,
  ActiveIcon,
  PaymentModeWrapper,
  PaymentModeContent,
  AgreeWrapper,
  ButtonWrapper,
  ErrorMessage,
} from "./OnewayOverview.style";
import Button from "../../../../components/button/Button";
import Timeline from "../../../../components/timeline/Timeline";
import { useNavigate, useParams } from "react-router-dom";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";
import flightLogo from "../../../../images/aire-peace.png";
import Loader from "../../../../components/loader/Loader";
import { FaCheckCircle, FaCircle, FaPaypal, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  RadioCheck,
  RadioItem,
  RadioItemWrapper,
} from "../../flight_booking/FlightBooking.style";
import PaymentModes from "../../../../components/payment_mode/PaymentModes";
import { useAuthStore } from "../../../../store/store";
import PayStack from "@paystack/inline-js";
import iataAirports from "../../../../flightDB/IATA_airports.json";
import axios from "axios";

export default function OnewayOverview() {
  // user defined variable for stopover   ===============================================================
  const [flightStopOver, setFlightStopOver] = useState(1);

  const popup = new PayStack();
  const navigate = useNavigate();
  const {
    oneWayFlightResult,
    travelDetail,
    setOneWayFlightOrder,
    flightPriceLookup,
    flightCreateOrders,
    FData,
  } = useAuthStore();
  const [showTripSummary, setShowTripSummary] = useState(false);
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsTitle, setTermsTitle] = useState("");
  const [termsBody, setTermsBody] = useState("");
  // const [FResult, setFResult] = useState("");
  // const [showIframe, setShowIframe] = useState(false);
  // const [authorizationUrl, setAuthorizationUrl] = useState("");
  // const [transactionReference, setTransactionReference] = useState("");
  // const [mainFlight, setMainFlight] = useState("");
  const [bottonLoading, setBottonLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const { oneWayFlightResultIndex } = useParams();

  let Price;

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
  useEffect(() => {
    if (!FData) {
      navigate("/flight-booking");
    }
  }, [FData, navigate]);
  function parseDuration(duration) {
    const regex = /PT(\d+H)?(\d+M)?/;
    const matches = duration?.match(regex);

    let hours = 0;
    let minutes = 0;

    if (matches?.[1]) {
      hours = parseInt(matches?.[1]?.replace("H", ""));
    }
    if (matches?.[2]) {
      minutes = parseInt(matches?.[2]?.replace("M", ""));
    }

    return { hours, minutes };
  }

  // Remove manzo outbout services

  // show puchase condition
  const [rotateIcon, setRotateIcon] = useState("360deg");
  const [rotateIcon2, setRotateIcon2] = useState("360deg");
  const [showPurchase, setShowPurchase] = useState(false);
  const [showFareRules, setShowFareRules] = useState(false);

  // show/hide dropdown handler
  const handleOpenAndClose = (type) => {
    if (type === "purchase condition") {
      setRotateIcon(!rotateIcon);
      setShowPurchase(!showPurchase);
    } else if (type === "fare rule") {
      setRotateIcon2(!rotateIcon2);
      setShowFareRules(!showFareRules);
    }
  };

  // show/hide refund rules
  const [showAdultBody, setShowAdultBody] = useState(true);
  const [showChild, setShowChild] = useState(false);
  const [showInfant, setShowInfant] = useState(false);
  const [showAdultIcon, setShowAdultIcon] = useState(true);
  const [showChildIcon, setShowChildIcon] = useState(false);
  const [showInfantIcon, setShowInfantIcon] = useState(false);

  // show/hide refund rules
  const refundHandler = (type) => {
    if (type === "adult") {
      setShowAdultBody(true);
      setShowAdultIcon(true);
      setShowChild(false);
      setShowChildIcon(false);
      setShowInfant(false);
      setShowInfantIcon(false);
    } else if (type === "child") {
      setShowAdultBody(false);
      setShowAdultIcon(false);
      setShowChild(true);
      setShowChildIcon(true);
      setShowInfant(false);
      setShowInfantIcon(false);
    } else if (type === "infant") {
      setShowAdultBody(false);
      setShowAdultIcon(false);
      setShowChild(false);
      setShowChildIcon(false);
      setShowInfant(true);
      setShowInfantIcon(true);
    }
  };

  //=============== Payment Modes =================

  // Paystack
  const [paystack, setPaystack] = useState("Paystack");
  const [paystackBrColor, setPaystackBrColor] = useState("#2563eb");
  const [paystackCheckColor, setPaystackCheckColor] = useState("#2563eb");

  // Barter (Flutter wave)
  const [barter, setBarter] = useState("Barter");
  const [barterBrColor, setBarterBrColor] = useState("grey");
  const [barterCheckColor, setBarterCheckColor] = useState("white");

  // Paypal
  const [paypal, setPaypal] = useState("Paypal");
  const [paypalBrColor, setPaypalBrColor] = useState("grey");
  const [paypalCheckColor, setPaypalCheckColor] = useState("white");

  // Pay Small
  const [paySmall, setPaySmall] = useState("Pay Small");
  const [paySmallBrColor, setPaySmallBrColor] = useState("grey");
  const [paySmallCheckColor, setPaySmallCheckColor] = useState("white");

  const [paymentMode, setPaymentMode] = useState(paystack);

  const handlePaymentMode = (type) => {
    if (type === paystack) {
      setPaymentMode(paystack);
      setPaystackBrColor("#2563eb");
      setPaystackCheckColor("#2563eb");
      setBarterBrColor("grey");
      setBarterCheckColor("white");
      setPaypalBrColor("grey");
      setPaypalCheckColor("white");
      setPaySmallBrColor("grey");
      setPaySmallCheckColor("white");
    } else if (type === barter) {
      setPaymentMode(barter);
      setPaystackBrColor("grey");
      setPaystackCheckColor("white");
      setBarterBrColor("#2563eb");
      setBarterCheckColor("#2563eb");
      setPaypalBrColor("grey");
      setPaypalCheckColor("white");
      setPaySmallBrColor("grey");
      setPaySmallCheckColor("white");
    } else if (type === paypal) {
      setPaymentMode(paypal);
      setPaystackBrColor("grey");
      setPaystackCheckColor("white");
      setBarterBrColor("grey");
      setBarterCheckColor("white");
      setPaypalBrColor("#2563eb");
      setPaypalCheckColor("#2563eb");
      setPaySmallBrColor("grey");
      setPaySmallCheckColor("white");
    } else if (type === paySmall) {
      setPaymentMode(paySmall);
      setPaystackBrColor("grey");
      setPaystackCheckColor("white");
      setBarterBrColor("grey");
      setBarterCheckColor("white");
      setPaypalBrColor("grey");
      setPaypalCheckColor("white");
      setPaySmallBrColor("#2563eb");
      setPaySmallCheckColor("#2563eb");
    }
  };

  // Checkbox Validation: Terms and Agreement
  // State for form values
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const filterIataAirport = (iataCode) => {
    const newFilterData = iataAirports.find((item) => {
      return (
        item.IATA && item.IATA.toLowerCase().includes(iataCode.toLowerCase())
      );
    });

    return newFilterData;
  };

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  let data = oneWayFlightResult?.[2]?.[oneWayFlightResultIndex];
  console.log(data);
  // Depart
  let DepartName = oneWayFlightResult?.[0];
  let DepartCode = oneWayFlightResult?.[3];
  let DepartFullTimeAndDate = new Date(
    data?.itineraries?.[0]?.segments?.[0]?.departure?.at
  ).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  let DepartCarrierName =
    data?.itineraries?.[0]?.segments?.[0]?.operating &&
    oneWayFlightResult?.[9]?.carriers[
      data?.itineraries?.[0]?.segments?.[0]?.operating?.carrierCode
    ];
  let DepartStartTime = new Date(
    data?.itineraries?.[0]?.segments?.[0]?.departure?.at
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let DepartEndTime = new Date(
    data?.itineraries?.[0]?.segments?.[0]?.arrival.at
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let DepartPeriodOfHours = `${
    parseDuration(data?.itineraries?.[0]?.segments?.[0]?.duration).hours
  }hr ${
    parseDuration(data?.itineraries?.[0]?.segments?.[0]?.duration).minutes
  }min`;
  let DepartStops = data?.itineraries?.[0]?.segments?.[0]?.numberOfStops;

  let ReturnCode = oneWayFlightResult?.[4];
  let ReturnName = oneWayFlightResult?.[1];
  let FPriceBase = money.format(data?.price?.base);
  let FPriceTotal = money.format(data?.price?.total);
  // Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setBottonLoading(true);
    let priceChecked;
    // Check if checkbox is checked
    if (!isChecked) {
      setBottonLoading(false);
      setIsValid(false);
      return;
    }

    const resPriceLookup = await flightPriceLookup(data);

    if (resPriceLookup) {
      Price = resPriceLookup.data?.flightOffers[0]?.price?.total;
      priceChecked = resPriceLookup?.data?.flightOffers[0];
    } else {
      setBottonLoading(false);
    }

    if (priceChecked) {
      popup.newTransaction({
        key: process.env.REACT_APP_PAYSTACK_KEY,
        // key: "pk_test_4d7c8fea9dc4783cdc375f4d268de759e8537ab5",
        email: travelDetail?.AdultData?.[0]?.email,
        amount: Number(parseInt(Price) + "00"),
        onSuccess: async (transaction) => {
          setLoader(true);
          let res = await flightCreateOrders(
            priceChecked,
            travelDetail,
            transaction.reference,
            [
              {
                returnDate: oneWayFlightResult?.[5].returnDate,
                departureDate: oneWayFlightResult?.[5].departureDate,
                destinationLocationCode: oneWayFlightResult?.[4],
                from: oneWayFlightResult?.[0],
                id: 1,
                originLocationCode: oneWayFlightResult?.[3],
                to: oneWayFlightResult?.[1],
                adults: oneWayFlightResult?.[6],
                children: oneWayFlightResult?.[7],
                infants: oneWayFlightResult?.[8],
                dictionaries: oneWayFlightResult?.[9],
              },
            ]
          );
          if (res) {
            console.log(res);
            // setOneWayFlightOrder(res);
            navigate(`/oneway-success/${res?._id}`);
          } else {
            setBottonLoading(false);
          }
        },
        onLoad: (response) => {
          console.log("onLoad: ", response);
        },
        onCancel: () => {
          console.log("onCancel");
        },
        onError: (error) => {
          console.log("Error: ", error.message);
        },
      });
    }
  };

  return (
    <OverviewWrapper>
      {loader && <Loader text={"Issuing ticket and reserving, please wait"} />}

      {/* Header */}
      <OverviewHeader>
        <OverviewHeaderItems>
          <OverviewHeaderTitle>
            <span>
              <Button
                text={"Back"}
                onClick={() =>
                  navigate(`/oneway-customization/${oneWayFlightResultIndex}`)
                }
              />
            </span>
            <h5>Proceed with your booking</h5>
          </OverviewHeaderTitle>
          {/* Timeline: Trip info steps */}
          <Timeline currentStep={4} />
        </OverviewHeaderItems>
      </OverviewHeader>

      {/* Body */}
      {/* Main Content */}
      <TripMinContent>
        {/* User info content */}
        <OverviewContent>
          <h3 style={{ marginBottom: "-10px" }}>Trip Summary</h3>
          <HorizontalLine />

          {/* OUTBOUND FLIGHT */}
          <FlightContainer>
            <FlightIconWrapper>
              {/* <FlightIcon rotate={'270deg'} iconColor={'#FF6805'}/>  */}
              <FlightIcon
                IconSize={"13px"}
                rotate={"90deg"}
                iconColor={"#0D3984"}
              />
              <p>Outbound Flight</p>
            </FlightIconWrapper>

            {data?.itineraries?.[0]?.segments?.map((flightData, Index) => (
              <>
                <FlightHeader>
                  <h5>{`${
                    filterIataAirport(flightData?.departure?.iataCode)
                      ?.Airport_name
                  },  ${
                    filterIataAirport(flightData?.departure?.iataCode)
                      ?.Location_served
                  }`}</h5>
                  <FlightIcon
                    IconSize={"13px"}
                    rotate={"90deg"}
                    iconColor={"black"}
                  />
                  <h5>
                    {" "}
                    {`${
                      filterIataAirport(flightData?.arrival?.iataCode)
                        ?.Airport_name
                    },  ${
                      filterIataAirport(flightData?.arrival?.iataCode)
                        ?.Location_served
                    }`}
                  </h5>
                  <p>
                    {new Date(flightData?.departure?.at).toLocaleString(
                      "en-US",
                      {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </FlightHeader>

                <FlightTimeContainer>
                  {/* Departure */}
                  <ContainerWrapper>
                    <ContainerHeader>
                      <b>Departure</b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                        <ContainerTime>
                          <b>
                            {new Date(
                              flightData?.departure?.at
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </b>{" "}
                          {flightData?.departure?.iataCode}
                        </ContainerTime>
                        <span>{`${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Location_served
                        }`}</span>
                      </div>
                      <div>
                        <span>
                          <FaCheckCircle />
                        </span>
                        <span>{`${
                          parseDuration(flightData?.duration).hours
                        }hr ${
                          parseDuration(flightData?.duration).minutes
                        }min`}</span>
                        <span>{flightData?.numberOfStops}-stop</span>
                      </div>
                    </Containerbody>
                  </ContainerWrapper>

                  {/* Arrival */}
                  <ContainerWrapper>
                    <ContainerHeader>
                      <b>Arrival</b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                        <ContainerTime>
                          <b>
                            {new Date(
                              flightData?.arrival?.at
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </b>{" "}
                          {flightData?.arrival?.iataCode}
                        </ContainerTime>
                        <span>{`${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Location_served
                        }`}</span>
                      </div>
                      <div>
                        <span
                          style={{
                            color: "red",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            fontSize: "9px",
                          }}
                        >
                          {flightData?.operating &&
                            oneWayFlightResult?.[9]?.carriers[
                              flightData?.operating?.carrierCode
                            ]}
                          - {flightData?.number}
                        </span>
                        <img
                          src={`https://images.wakanow.com/Images/flight-logos/${
                            flightData?.operating?.carrierCode
                              ? flightData?.operating?.carrierCode
                              : oneWayFlightResult?.[2]?.[
                                  oneWayFlightResultIndex
                                ].validatingAirlineCodes[0]
                          }.gif`}
                          height={20}
                          width={40}
                          alt=""
                          srcset=""
                        />

                        {/* <img
                                     src={flightLogo}
                                     height={20}
                                     width={40}
                                     alt=""
                                     srcset=""
                                   /> */}
                      </div>
                    </Containerbody>
                  </ContainerWrapper>

                  {/* Class/ Baggage */}
                  <ContainerWrapper>
                    <ContainerHeader>
                      <b>Class/Checked Baggage Allowance </b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                        <ContainerTime>
                          {" "}
                          {
                            data?.travelerPricings[0]?.fareDetailsBySegment[
                              Index
                            ]?.cabin
                          }{" "}
                          (
                          {
                            data?.travelerPricings[0]?.fareDetailsBySegment[
                              Index
                            ]?.class
                          }
                          )
                        </ContainerTime>
                        <span>
                          Adult: {oneWayFlightResult?.[6]}
                          {/* piece(s), upto 23kg
                          each */}
                        </span>
                        <span>
                          Child: {oneWayFlightResult?.[7]}
                          {/* piece(s), upto 23kg
                          each */}
                        </span>
                        <span>
                          Infant: {oneWayFlightResult?.[8]}
                          {/* piece(s), upto 23kg */}
                        </span>
                      </div>
                      <div></div>
                    </Containerbody>
                  </ContainerWrapper>
                </FlightTimeContainer>
              </>
            ))}
          </FlightContainer>

          {/* Passengers Detail */}
          <h3>Passenger Detail</h3>
          <PDetailWrapper>
            <ContainerWrapper>
              <ContainerHeader>
                <div>
                  <b>Passenger Name </b>
                </div>
                <div>
                  <b>Passport </b>
                </div>
              </ContainerHeader>
              <Containerbody bb={"1px solid #48484810"} pb={"5px"}>
                <div>
                  {travelDetail?.AdultData?.map((data, index) => (
                    <span key={index}>
                      {data.title} {data.firstName} {data.middleName}{" "}
                      {data.lastName}
                    </span>
                  ))}
                  {travelDetail?.ChildrenData?.map((data, index) => (
                    <span key={index}>
                      {data.title} {data.firstName} {data.middleName}{" "}
                      {data.lastName}
                    </span>
                  ))}
                  {travelDetail?.InfantData?.map((data, index) => (
                    <span key={index}>
                      {data.title} {data.firstName} {data.middleName}{" "}
                      {data.lastName}
                    </span>
                  ))}
                </div>
                <div>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                </div>
                {/* selectedTitleValue,
            lastName,
            firstName,
            middleName,
            dob,
            selectedCountryValue,
            selectedGender,
            phone,
            email, */}
              </Containerbody>
            </ContainerWrapper>

            <ContainerWrapper>
              <ContainerHeader>
                <div>
                  <b>Date of Birth </b>
                </div>
                <div>
                  <b>Type </b>
                </div>
              </ContainerHeader>
              <Containerbody bb={"1px solid #48484810"} pb={"5px"}>
                <div>
                  {travelDetail?.AdultData?.map((data, index) => (
                    <span key={index}>{data.dob}</span>
                  ))}
                  {travelDetail?.ChildrenData?.map((data, index) => (
                    <span key={index}>{data.dob}</span>
                  ))}
                  {travelDetail?.InfantData?.map((data, index) => (
                    <span key={index}>{data.dob}</span>
                  ))}
                </div>
                <div>
                  {travelDetail?.AdultData?.map((data, index) => (
                    <span key={index}>Adult</span>
                  ))}
                  {travelDetail?.ChildrenData?.map((data, index) => (
                    <span key={index}>Infant</span>
                  ))}
                  {travelDetail?.InfantData?.map((data, index) => (
                    <span key={index}>Child</span>
                  ))}
                </div>
              </Containerbody>
            </ContainerWrapper>
          </PDetailWrapper>

          {/* Contant Detail */}
          <HorizontalLine />
          <h3>Contact Detail</h3>
          <PDetailWrapper>
            <ContainerWrapper>
              <ContainerHeader>
                <div>
                  <b>Passenger Name </b>
                </div>
                <div>
                  <b>Type </b>
                </div>
              </ContainerHeader>
              <Containerbody bb={"1px solid #48484810"} pb={"5px"}>
                <div>
                  {travelDetail?.AdultData?.map((data, index) => (
                    <span key={index}>
                      {data.title} {data.firstName} {data.middleName}{" "}
                      {data.lastName}
                    </span>
                  ))}
                  {travelDetail?.ChildrenData?.map((data, index) => (
                    <span key={index}>
                      {data.title} {data.firstName} {data.middleName}{" "}
                      {data.lastName}
                    </span>
                  ))}
                  {travelDetail?.InfantData?.map((data, index) => (
                    <span key={index}>
                      {data.title} {data.firstName} {data.middleName}{" "}
                      {data.lastName}
                    </span>
                  ))}
                </div>
                <div>
                  <span>Primary Passenger</span>
                </div>
              </Containerbody>
            </ContainerWrapper>

            <ContainerWrapper>
              <ContainerHeader>
                <div>
                  <b>Email</b>
                </div>
                <div>
                  <b>Number </b>
                </div>
              </ContainerHeader>
              <Containerbody bb={"1px solid #48484810"} pb={"5px"}>
                <div>
                  {travelDetail?.AdultData?.map((data, index) => (
                    <span key={index}>{data.email}</span>
                  ))}
                  {travelDetail?.ChildrenData?.map((data, index) => (
                    <span key={index}>{data.email}</span>
                  ))}
                  {travelDetail?.InfantData?.map((data, index) => (
                    <span key={index}>{data.email}</span>
                  ))}
                </div>
                <div>
                  {travelDetail?.AdultData?.map((data, index) => (
                    <span key={index}>{data.phone}</span>
                  ))}
                  {travelDetail?.ChildrenData?.map((data, index) => (
                    <span key={index}>{data.phone}</span>
                  ))}
                  {travelDetail?.InfantData?.map((data, index) => (
                    <span key={index}>{data.phone}</span>
                  ))}
                </div>
              </Containerbody>
            </ContainerWrapper>
          </PDetailWrapper>

          {/* Manzo Travel Services For OutBound */}

          {/* Purchase Condition */}

          <ContainerWrapper>
            <RulesAndCondStyled>
              <RulesAndCondHeader
                onClick={() => handleOpenAndClose("purchase condition")}
              >
                <span>
                  <h2 style={{ color: "black" }}>Purchase Condition</h2>
                </span>
                <span>
                  <h2>
                    <IconWrapper rotateIcon={rotateIcon}>
                      <IoIosArrowDown />
                    </IconWrapper>
                  </h2>
                </span>
              </RulesAndCondHeader>

              {showPurchase && (
                <RulesAndCondContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quis voluptas officia odit dignissimos quae corrupti dolor
                  fugit incidunt dicta tempore cupiditate sapiente esse beatae
                  error reiciendis consectetur, assumenda, dolorem vel ducimus
                  excepturi, architecto eaque ut debitis. Exercitationem, amet,
                  esse expedita minus natus, tempora enim odio facere corporis
                  reprehenderit eius. Voluptates expedita officia temporibus
                  eius! Laudantium nulla provident dolor ullam iste sapiente
                  consequuntur voluptates accusamus quam repudiandae ipsam
                  blanditiis quia non ab laborum voluptate eum facilis,
                  perspiciatis nobis unde doloribus commodi! Ipsum tempora
                  reprehenderit porro magnam voluptate officia totam natus
                  dolor. Unde culpa voluptas quasi illum debitis officia soluta
                  dignissimos.
                </RulesAndCondContent>
              )}
            </RulesAndCondStyled>
          </ContainerWrapper>

          {/*  */}
          <ContainerWrapper>
            <RulesAndCondStyled>
              <RulesAndCondHeader
                bt={"none"}
                onClick={() => handleOpenAndClose("fare rule")}
              >
                <span>
                  <h2 style={{ color: "black" }}>Refund Fare Rules</h2>
                </span>
                <span>
                  <h2>
                    <IconWrapper rotateIcon={rotateIcon2}>
                      <IoIosArrowDown />
                    </IconWrapper>
                  </h2>
                </span>
              </RulesAndCondHeader>

              {showFareRules && (
                <RulesAndCondContent>
                  <RulesSubHeader>
                    <div onClick={() => refundHandler("adult")}>
                      <span>
                        <b>Adult</b>
                      </span>
                      {showAdultIcon && <ActiveIcon />}
                    </div>
                    <div onClick={() => refundHandler("child")}>
                      <span>
                        <b>Child</b>
                      </span>
                      {showChildIcon && <ActiveIcon />}
                    </div>
                    <div onClick={() => refundHandler("infant")}>
                      <span>
                        <b>Infant</b>
                      </span>
                      {showInfantIcon && <ActiveIcon />}
                    </div>
                  </RulesSubHeader>

                  <RulesSubBody>
                    {/* Adult Body */}
                    {showAdultBody && (
                      <div>
                        <h4>Adult Refunds Rules</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque quis voluptas officia odit dignissimos
                          quae corrupti dolor fugit incidunt dicta tempore
                          cupiditate sapiente esse beatae error reiciendis
                          consectetur, assumenda, dolorem vel ducimus excepturi,
                          architecto eaque ut debitis. Exercitationem, amet,
                          esse expedita minus natus, tempora enim odio facere
                          corporis reprehenderit eius. Voluptates expedita
                          officia temporibus eius! Laudantium nulla provident
                          dolor ullam iste sapiente consequuntur voluptates
                          accusamus quam repudiandae ipsam blanditiis quia non
                          ab laborum voluptate eum facilis, perspiciatis nobis
                          unde doloribus commodi! Ipsum tempora reprehenderit
                          porro magnam voluptate officia totam natus dolor. Unde
                          culpa voluptas quasi illum debitis officia soluta
                          dignissimos.
                        </p>
                      </div>
                    )}

                    {/* Child Body */}
                    {showChild && (
                      <div>
                        <h4>Child Refunds Rules</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque quis voluptas officia odit dignissimos
                          quae corrupti dolor fugit incidunt dicta tempore
                          cupiditate sapiente esse beatae error reiciendis
                          consectetur, assumenda, dolorem vel ducimus excepturi,
                          architecto eaque ut debitis. Exercitationem, amet,
                          esse expedita minus natus, tempora enim odio facere
                          corporis reprehenderit eius. Voluptates expedita
                          officia temporibus eius! Laudantium nulla provident
                          dolor ullam iste sapiente consequuntur voluptates
                          accusamus quam repudiandae ipsam blanditiis quia non
                          ab laborum voluptate eum facilis, perspiciatis nobis
                          unde doloribus commodi! Ipsum tempora reprehenderit
                          porro magnam voluptate officia totam natus dolor. Unde
                          culpa voluptas quasi illum debitis officia soluta
                          dignissimos.
                        </p>
                      </div>
                    )}

                    {/* Infant Body */}
                    {showInfant && (
                      <div>
                        <h4>Infant Refunds Rules</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque quis voluptas officia odit dignissimos
                          quae corrupti dolor fugit incidunt dicta tempore
                          cupiditate sapiente esse beatae error reiciendis
                          consectetur, assumenda, dolorem vel ducimus excepturi,
                          architecto eaque ut debitis. Exercitationem, amet,
                          esse expedita minus natus, tempora enim odio facere
                          corporis reprehenderit eius. Voluptates expedita
                          officia temporibus eius! Laudantium nulla provident
                          dolor ullam iste sapiente consequuntur voluptates
                          accusamus quam repudiandae ipsam blanditiis quia non
                          ab laborum voluptate eum facilis, perspiciatis nobis
                          unde doloribus commodi! Ipsum tempora reprehenderit
                          porro magnam voluptate officia totam natus dolor. Unde
                          culpa voluptas quasi illum debitis officia soluta
                          dignissimos.
                        </p>
                      </div>
                    )}
                  </RulesSubBody>
                </RulesAndCondContent>
              )}
            </RulesAndCondStyled>
          </ContainerWrapper>

          {/* Total Price */}

          <h3>Total Price</h3>
          <HorizontalLine />
          <PDetailWrapper>
            <ContainerWrapper>
              <ContainerHeader hBt={"none"}>
                <span>
                  <b>Trip Price</b>
                  <br />
                  {`(${oneWayFlightResult?.[6]} Adult + ${oneWayFlightResult?.[7]} Child
                          + ${oneWayFlightResult?.[8]} infant )`}
                </span>
                <span>{/* <b>N270,000 </b> */}</span>
              </ContainerHeader>
              <ContainerHeader hBt={"none"}>
                <span>
                  Airport lounge ({DepartName} & {ReturnName} only),{" "}
                  {ReturnName}
                </span>
                <span> {FPriceBase}</span>
              </ContainerHeader>
              <ContainerHeader hBt={"none"}>
                <span>
                  {" "}
                  Manzo Protocol Service ({ReturnName} & {DepartName} Only),{" "}
                  {DepartName}
                </span>
                <span>{FPriceBase}</span>
              </ContainerHeader>
              <ContainerHeader hBt={"none"}>
                <span>
                  {" "}
                  <h2>Payable Amount</h2>
                </span>
                <span>
                  <h2>{FPriceTotal}</h2>
                </span>
              </ContainerHeader>
            </ContainerWrapper>
          </PDetailWrapper>
        </OverviewContent>

        {/* Mode of Payment */}
        <OverviewContent>
          <h3>Choose your payment mode</h3>
          <form onSubmit={handleSubmit}>
            <PaymentModes
              paystack={paystack}
              paystackBrColor={paystackBrColor}
              paystackCheckColor={paystackCheckColor}
              barter={barter}
              barterBrColor={barterBrColor}
              barterCheckColor={barterCheckColor}
              paypal={paypal}
              paypalBrColor={paypalBrColor}
              paypalCheckColor={paypalCheckColor}
              paySmall={paySmall}
              paySmallBrColor={paySmallBrColor}
              paySmallCheckColor={paySmallCheckColor}
              handlePaymentMode={handlePaymentMode}
            />
            {/* Agreement */}
            <AgreeWrapper>
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span>*</span>
              <p>
                I have read and accept the <span>terms and conditions</span> as
                stated above and{" "}
                <a href="#">General of conditions of carriage </a> applicable to
                my flight.
              </p>
            </AgreeWrapper>

            {!isValid && (
              <ErrorMessage>
                You must agree to the terms and conditions.
              </ErrorMessage>
            )}

            {/* Total Payable amount */}
            <ButtonWrapper>
              <span>
                Payable Amount:{" "}
                <b>
                  {money.format(
                    oneWayFlightResult?.[2]?.[oneWayFlightResultIndex].price
                      .total
                  )}
                </b>
              </span>
              <Button
                loading={bottonLoading}
                text={"Continue to payment"}
                // onClick={() => console.log(paymentMode)}
              />
            </ButtonWrapper>
          </form>
        </OverviewContent>
      </TripMinContent>
    </OverviewWrapper>
  );
}
