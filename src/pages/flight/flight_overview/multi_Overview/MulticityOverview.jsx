import React, { useState } from "react";
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
} from "./MulticityOverview.style";
import Button from "../../../../components/button/Button";
import Timeline from "../../../../components/timeline/Timeline";
import { useNavigate, useParams } from "react-router-dom";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";
import flightLogo from "../../../../images/aire-peace.png";
import { useAuthStore } from "../../../../store/store";
import PayStack from "@paystack/inline-js";
import { FaCheckCircle, FaCircle, FaPaypal, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  RadioCheck,
  RadioItem,
  RadioItemWrapper,
} from "../../flight_booking/FlightBooking.style";
import PaymentModes from "../../../../components/payment_mode/PaymentModes";

export default function MulticityOverview() {
  const navigate = useNavigate();
  const { flightResultIndex } = useParams();
  const {
    multiCityFlightResult,
    travelDetail,
    flightPriceLookup,
    flightCreateOrders,
  } = useAuthStore();
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

  // Remove manzo outbout services
  const [showOutboundService, setShowOutboundService] = useState(false);

  // Remove manzo outbout services
  const [showInboundService, setShowInboundService] = useState(false);

  // show puchase condition
  const [rotateIcon, setRotateIcon] = useState("360deg");
  const [rotateIcon2, setRotateIcon2] = useState("360deg");
  const [showPurchase, setShowPurchase] = useState(false);
  const [showFareRules, setShowFareRules] = useState(false);
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
  console.log("herer ========>", multiCityFlightResult);
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

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if checkbox is checked
    if (!isChecked) {
      setIsValid(false);
      return;
    }

    // Proceed with form submission or further logic
    setIsValid(true);
    navigate("/multicity-success");
    // You can also reset form or perform other actions here
  };

  let FPriceBase = money.format(
    multiCityFlightResult[1][flightResultIndex]?.price?.base
  );
  let FPriceTotal = money.format(
    multiCityFlightResult[1][flightResultIndex]?.price?.total
  );

  return (
    <OverviewWrapper>
      {/* Header */}
      <OverviewHeader>
        <OverviewHeaderItems>
          <OverviewHeaderTitle>
            <span>
              <Button
                text={"Back"}
                onClick={() => navigate("/flight-result")}
              />
            </span>
            <h2>Proceed with your booking</h2>
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
          {multiCityFlightResult[1][flightResultIndex].itineraries.map(
            (data, index) => (
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

                <FlightHeader>
                  <h2>{multiCityFlightResult?.[0][index]?.from}</h2>
                  <FlightIcon
                    IconSize={"13px"}
                    rotate={"90deg"}
                    iconColor={"black"}
                  />
                  <h2>{multiCityFlightResult?.[0][index]?.to}</h2>
                  <p>
                    {new Date(
                      data?.segments?.[0]?.departure?.at
                    ).toLocaleString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
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
                              data?.segments?.[0]?.departure?.at
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </b>{" "}
                          (
                          {
                            multiCityFlightResult?.[0][index]
                              ?.originLocationCode
                          }
                          )
                        </ContainerTime>
                        <span>{multiCityFlightResult?.[0][index]?.from}</span>
                      </div>
                      <div>
                        <span>
                          <FaCheckCircle />
                        </span>
                        <span>{`${
                          parseDuration(data?.segments?.[0]?.duration).hours
                        }hr ${
                          parseDuration(data?.segments?.[0]?.duration).minutes
                        }min`}</span>
                        <span>{data?.segments[0]?.numberOfStops}-stop</span>
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
                              data?.segments?.[0]?.arrival.at
                            ).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </b>{" "}
                          (
                          {
                            multiCityFlightResult?.[0][index]
                              ?.destinationLocationCode
                          }
                          )
                        </ContainerTime>
                        <span>{multiCityFlightResult?.[0][index]?.to}</span>
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
                          {data?.segments[0]?.operating &&
                            multiCityFlightResult?.[2]?.dictionaries?.carriers[
                              data?.segments[0]?.operating?.carrierCode
                            ]}
                        </span>
                        <img
                          src={`https://images.wakanow.com/Images/flight-logos/${
                            data?.segments?.[0]?.operating?.carrierCode
                              ? data?.segments?.[0]?.operating?.carrierCode
                              : data?.segments?.[0]?.operating?.carrierCode
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
                        <ContainerTime>Economy (F)</ContainerTime>
                        <span>
                          Adult: {multiCityFlightResult?.[2].adults} piece(s),
                          upto 23kg each
                        </span>
                        <span>
                          Child: {multiCityFlightResult?.[2].children} piece(s),
                          upto 23kg each
                        </span>
                        <span>
                          Infant: {multiCityFlightResult?.[2].infants} piece(s),
                          upto 23kg
                        </span>
                      </div>
                      <div></div>
                    </Containerbody>
                  </ContainerWrapper>
                </FlightTimeContainer>
              </FlightContainer>
            )
          )}

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
          {showOutboundService && (
            <>
              <HorizontalLine />
              <h3>Manzo Travel Services Outbound</h3>
              <FlightHeader>
                <h4>Lagos</h4>
                <FlightIcon
                  IconSize={"13px"}
                  rotate={"90deg"}
                  iconColor={"black"}
                />
                <h4>Abuja</h4>
                <p>Fri, 26 Jul 2024</p>
              </FlightHeader>

              <PDetailWrapper>
                {/* Remove service Icon */}
                <RemoveService onClick={() => setShowOutboundService(false)} />
                <ContainerWrapper>
                  <ContainerHeader>
                    <div>
                      <b>Passenger</b>
                    </div>
                    <div>
                      <b>Service </b>
                    </div>
                  </ContainerHeader>
                  <Containerbody>
                    <div>
                      <span>Mr. Abdulmumin Isah, +2</span>
                    </div>
                    <div>
                      <span>Airport lounge (Lagos & Abuja only), Abuja</span>
                    </div>
                  </Containerbody>
                </ContainerWrapper>

                <ContainerWrapper>
                  <ContainerHeader>
                    <div>
                      <b>Lounge Type</b>
                    </div>
                    <div>
                      <b>Price </b>
                    </div>
                  </ContainerHeader>
                  <Containerbody>
                    <div>
                      <span>Transit</span>
                    </div>
                    <div>
                      <span>₦20,000</span>
                    </div>
                  </Containerbody>
                </ContainerWrapper>
              </PDetailWrapper>
            </>
          )}

          {/* Manzo Travel Services For InBound */}

          {showInboundService && (
            <>
              <HorizontalLine />
              <h3>Manzo Travel Services Inbound</h3>
              <FlightHeader>
                <h4>Abuja</h4>
                <FlightIcon
                  IconSize={"13px"}
                  rotate={"90deg"}
                  iconColor={"black"}
                />
                <h4>Lagos</h4>
                <p>Fri, 26 Jul 2024</p>
              </FlightHeader>

              <PDetailWrapper>
                {/* Remove service Icon */}
                <RemoveService onClick={() => setShowInboundService(false)} />
                <ContainerWrapper>
                  <ContainerHeader>
                    <div>
                      <b>Passenger</b>
                    </div>
                    <div>
                      <b>Service </b>
                    </div>
                  </ContainerHeader>
                  <Containerbody>
                    <div>
                      <span>Mr. Abdulmumin Isah, +2</span>
                    </div>
                    <div>
                      <span>
                        Manzo Protocol Service (Lagos & Abuja Only), Lagos
                      </span>
                    </div>
                  </Containerbody>
                </ContainerWrapper>

                <ContainerWrapper>
                  <ContainerHeader>
                    <div>
                      <b> Point</b>
                    </div>
                    <div>
                      <b>Price </b>
                    </div>
                  </ContainerHeader>
                  <Containerbody>
                    <div>
                      <span>Transit</span>
                    </div>
                    <div>
                      <span>₦20,000</span>
                    </div>
                  </Containerbody>
                </ContainerWrapper>
              </PDetailWrapper>
            </>
          )}

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
                  <br />({multiCityFlightResult?.[2].adults} Adult +{" "}
                  {multiCityFlightResult?.[2].children} Child +{" "}
                  {multiCityFlightResult?.[2].infants} infant)
                </span>
                <span>{/* <b>N270,000 </b> */}</span>
              </ContainerHeader>
              <ContainerHeader hBt={"none"}>
                <span>Airport lounge </span>
                <span> {FPriceBase}</span>
              </ContainerHeader>
              <ContainerHeader hBt={"none"}>
                <span> Manzo Protocol </span>
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
                Payable Amount: <b>{FPriceTotal}</b>
              </span>
              <Button text={"Continue to payment"} />
            </ButtonWrapper>
          </form>
        </OverviewContent>
      </TripMinContent>
    </OverviewWrapper>
  );
}
