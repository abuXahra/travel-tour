import React, { useState, useEffect } from "react";
import {
  ButtonWrapper,
  FlightDetailWrapper,
  FormContent,
  FormWrapper,
  PromoHeader,
  PromoInput,
  PromoWrapper,
  SideFlightAirport,
  SideFlightSummary,
  TotalFare,
  TotalTrip,
  TripAirport,
  TripDetailBody,
  TripDetailClass,
  TripDetailTile,
  TripDetailTime,
  TripHour,
  TripInfoBody,
  TripInfoContent,
  TripInfoHeader,
  TripInfoHeaderItems,
  TripInfoHeaderSteps,
  TripInfoHeaderTitle,
  TripInfoSideBar,
  TripInfoSideContent,
  TripInfoWrapper,
  TripMinContent,
  TripPassenger,
} from "./OnewayTripinfo.style";
import Button from "../../../../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Timeline from "../../../../../components/timeline/Timeline";
import Input from "../../../../../components/inputs/input/Input";
import SelectInput from "../../../../../components/inputs/selectInput/SelectInput";
import { RadioWrapper } from "../../../../../components/inputs/input_radio/RadioInput.style";
import RadioInput from "../../../../../components/inputs/input_radio/RadioInput";
import { FaArrowDown, FaArrowRight, FaUser } from "react-icons/fa";
import { Countries } from "../../../../../data/object/countries";
import { IoIosArrowDown } from "react-icons/io";
import flightLogo from "../../../../../images/aire-peace.png";
import FlightIcon from "../../../../../components/flight_icon/FlightIcon";
import AirlineFlightLogo from "../../../../../components/Flight/AirlineFlightLogo";
import iataAirports from "../../../../../flightDB/IATA_airports.json";
import { useAuthStore } from "../../../../../store/store";

export default function OnewayTripinfo() {
  const [data, setData] = useState({});

  // user defined variable for stopover   ===============================================================
  const [flightStopOver, setFlightStopOver] = useState(1);

  // navigation
  const navigate = useNavigate();

  const { oneWayFlightResult, setTravelDetail, flightPriceLookup } =
    useAuthStore();
  const { oneWayFlightResultIndex } = useParams();

  useEffect(() => {
    if (!oneWayFlightResult || oneWayFlightResult?.length === 0) {
      navigate("/flight-booking");
    }
  }, [oneWayFlightResult, navigate]);
  useEffect(() => {
    const flightPrice = async () => {
      let flightPrice = await flightPriceLookup(
        oneWayFlightResult[2][oneWayFlightResultIndex]
      );

      if (flightPrice) {
        console.log(flightPrice);
        setData(flightPrice.flightOffers[0]);
      }
    };
    flightPrice();
  }, [oneWayFlightResult]);

  let queryParams;

  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });

  // firstnam variable
  const [selectedTitleValue, setSelectedTitleValue] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [dob, setDob] = useState("");
  const [selectedCountryValue, setSelectedCountryValue] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // error
  const [titleError, setTitleError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [middleNameError, setMiddleNameError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // title selection handler
  const userTitle = [
    { title: "Select Title", value: "" },
    { title: "Mr.", value: "Mr." },
    { title: "Mrs", value: "Mrs." },
  ];

  const [TravelData, setTravelData] = useState({
    AdultData: [],
    ChildrenData: [],
    InfantData: [],
  });

  const filterIataAirport = (iataCode) => {
    const newFilterData = iataAirports.find((item) => {
      return (
        (item.Airport_name &&
          item.Airport_name.toLowerCase().includes(iataCode.toLowerCase())) ||
        (item.Location_served &&
          item.Location_served.toLowerCase().includes(
            iataCode.toLowerCase()
          )) ||
        (item.IATA && item.IATA.toLowerCase().includes(iataCode.toLowerCase()))
      );
    });

    return newFilterData;
  };

  const handleSelectTitleChange = (data, event, index) => {
    const newTitle = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        title: newTitle,
      };

      return updatedData;
    });
    if (TravelData?.AdultData?.[index]?.title) {
      setSelectedTitleValue(newTitle);
    }
    if (TravelData?.ChildrenData?.[index]?.title) {
      setSelectedTitleValue(newTitle);
    }
    if (TravelData?.InfantData?.[index]?.title) {
      setSelectedTitleValue(newTitle);
    }
    setTitleError(false);
  };

  // last name Handler
  const lastNameOnchangeHandler = (data, event, index) => {
    const newData = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        lastName: newData,
      };

      return updatedData;
    });

    setLastName(newData);
    setLastNameError(false);
  };

  // First name Handler
  const firstNameOnchangeHandler = (data, event, index) => {
    const newData = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        firstName: newData,
      };

      return updatedData;
    });
    setFirstName(newData);
    setFirstNameError(false);
  };

  // middle name Handler
  const middleNameOnchangeHandler = (data, event, index) => {
    const newData = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        middleName: newData,
      };

      return updatedData;
    });
    setMiddleName(newData);
    setMiddleNameError(false);
  };

  // dob name Handler
  const dobOnchangeHandler = (data, event, index) => {
    const newData = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        dob: newData,
      };

      return updatedData;
    });
    setDob(newData);
    setDobError(false);
  };

  // country selection handler
  const handleSelectCountryChange = (data, event, index) => {
    const newData = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        selectedCountryValue: newData,
      };

      return updatedData;
    });
    if (TravelData?.AdultData?.[index]?.selectedCountryValue) {
      setSelectedCountryValue(newData);
    }
    if (TravelData?.ChildrenData?.[index]?.selectedCountryValue) {
      setSelectedCountryValue(newData);
    }
    if (TravelData?.InfantData?.[index]?.selectedCountryValue) {
      setSelectedCountryValue(newData);
    }
    setCountryError(false);
  };

  // Gender handler;
  const handleGenderChange = (data, event, index, type) => {
    const newData = event;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        [type]: newData,
      };

      return updatedData;
    });
    if (TravelData?.AdultData?.[index]?.gender) {
      setSelectedGender(newData);
    }
    if (TravelData?.ChildrenData?.[index]?.gender) {
      setSelectedGender(newData);
    }
    if (TravelData?.InfantData?.[index]?.gender) {
      setSelectedGender(newData);
    }
    setGenderError(false);
  };

  const gender = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  // phone number Handler
  const phonOnchangeHandler = (data, event, index) => {
    const newData = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        phone: newData,
      };

      return updatedData;
    });

    setPhone(newData);
    setPhoneError(false);
  };
  //

  // email  number Handler
  const emailOnchangeHandler = (data, event, index) => {
    const newData = event.target.value;

    setTravelData((prevState) => {
      // Create a copy of the existing AdultData array
      let updatedData = { ...prevState };

      if (!updatedData[data]) {
        updatedData[data] = [];
      }

      // Ensure the object at 'index' exists before modifying it
      if (!updatedData[data][index]) {
        updatedData[data][index] = {};
      }

      // Update last name
      updatedData[data][index] = {
        ...updatedData[data][index],
        email: newData,
      };

      return updatedData;
    });

    setEmail(newData);
    setEmailError(false);
  };

  // OnSubmit handler
  const handledSubmit = (e) => {
    e.preventDefault();

    // title validation
    if (!selectedTitleValue) {
      setTitleError(true);
    }

    // last name validation
    else if (lastName === "" || null) {
      setLastNameError(true);
    }

    // first name validation
    else if (firstName === "" || null) {
      setFirstNameError(true);
    }

    // dob validation
    else if (dob === "" || null) {
      setDobError(true);
    }

    // country  validation
    else if (selectedCountryValue === "" || null) {
      setCountryError(true);
    }

    // Gender  validation
    else if (selectedGender === "" || null) {
      setGenderError(true);
    }

    // phone validation
    else if (phone === "" || null) {
      setPhoneError(true);
    }

    // email validation
    else if (email === "" || null) {
      setEmailError(true);
    } else {
      navigate("/oneway-customization");
    }
  };

  const [showtripDepart, setShowtripDepart] = useState(true);

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
  queryParams = {
    selectedTitleValue,
    lastName,
    firstName,
    middleName,
    dob,
    selectedCountryValue,
    selectedGender,
    phone,
    email,
  };
  console.log(TravelData);
  return (
    <TripInfoWrapper>
      {/* header */}
      <TripInfoHeader>
        <TripInfoHeaderItems>
          <TripInfoHeaderTitle>
            <span>
              <Button
                text={"Back"}
                onClick={() => navigate("/oneway-result")}
              />
            </span>
            <h2>Proceed with your booking</h2>
          </TripInfoHeaderTitle>

          {/* timeline: Trip info steps */}
          <Timeline currentStep={2} />
        </TripInfoHeaderItems>
      </TripInfoHeader>

      {/* body */}
      <TripInfoBody>
        {/* Sidebar */}

        <TripInfoSideBar>
          <TripInfoSideContent>
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
                <span> {money.format(data?.price?.base)}</span>
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
                <span> {money.format(data?.price?.total)}</span>
              </div>
            </SideFlightSummary>
            <TotalTrip>
              <div>
                <span>Trip Total</span>
                <span> {money.format(data?.price?.total)}</span>
              </div>
            </TotalTrip>
          </TripInfoSideContent>
          <FormWrapper>
            <PromoWrapper>
              <PromoHeader>PROMO CODE</PromoHeader>
              <PromoInput>
                <Input title={"PROMO CODE"} />
                <div>
                  {" "}
                  <Button text={"Apply"} />
                </div>
              </PromoInput>
            </PromoWrapper>
          </FormWrapper>
        </TripInfoSideBar>

        {/* Main Content */}
        <TripMinContent>
          {/* User info content */}
          <TripInfoContent>
            {/* Flight Detail section */}

            {/* For Departure */}
            <FlightDetailWrapper>
              {/* title */}
              <TripDetailTile
                onClick={() => setShowtripDepart(!showtripDepart)}
              >
                <span>
                  {" "}
                  <h5>{oneWayFlightResult[0]}</h5>{" "}
                  <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />{" "}
                  <h5>{oneWayFlightResult[1]}</h5>{" "}
                </span>
                <span>
                  <p>
                    {new Date(
                      oneWayFlightResult[2][
                        oneWayFlightResultIndex
                      ].itineraries[0].segments[0].departure.at
                    ).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    {
                      oneWayFlightResult[2][oneWayFlightResultIndex]
                        .itineraries[0].segments[0].numberOfStops
                    }{" "}
                    Stops.{" "}
                    {`${
                      parseDuration(
                        oneWayFlightResult[2][oneWayFlightResultIndex]
                          .itineraries[0].segments[0].duration
                      ).hours
                    }hr ${
                      parseDuration(
                        oneWayFlightResult[2][oneWayFlightResultIndex]
                          .itineraries[0].segments[0].duration
                      ).minutes
                    }min`}
                  </p>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </span>
              </TripDetailTile>
              {/* body */}
              {showtripDepart && (
                <>
                  {oneWayFlightResult[2][
                    oneWayFlightResultIndex
                  ].itineraries[0].segments?.map((flightData, Index) => (
                    <TripDetailBody>
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
                          <a href="#">
                            {
                              oneWayFlightResult[2][oneWayFlightResultIndex]
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
                                  flightData?.arrival?.at
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
                            <p>{`${
                              parseDuration(flightData?.duration).hours
                            }hr ${
                              parseDuration(flightData?.duration).minutes
                            }min`}</p>
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
                              <h5>BAGGAGE:</h5> <p>ADULT</p>
                            </span>
                            <span>
                              <h5>CHECK IN:</h5> <p>20KG</p>{" "}
                            </span>
                          </div>
                        </TripAirport>
                      </TripDetailTime>
                    </TripDetailBody>
                  ))}
                </>
              )}
            </FlightDetailWrapper>
          </TripInfoContent>

          {/*user trip data  */}

          {/* Form */}
          {Array.from({ length: oneWayFlightResult?.[6] || 0 }, (_, index) => (
            <TripInfoContent key={index}>
              <h2>Travel Detail</h2>

              {/* Passenger */}
              <TripPassenger>
                <div>
                  <span>
                    <FaUser />
                  </span>
                  <h3>Adult, {index + 1} (40yrs+)</h3>
                </div>
                <div>
                  <p>0/1 added</p>
                </div>
              </TripPassenger>

              {/* Form */}
              <FormWrapper onSubmit={handledSubmit}>
                <FormContent>
                  {/* Title  */}

                  <SelectInput
                    label={"Title"}
                    options={userTitle}
                    title={"Title"}
                    error={titleError}
                    onChange={(e) =>
                      handleSelectTitleChange("AdultData", e, index)
                    }
                  />

                  {/* Last name */}
                  <Input
                    title={"Last Name"}
                    label={"Last Name"}
                    type={"text"}
                    value={TravelData?.AdultData?.[index]?.lastName}
                    onChange={(e) =>
                      lastNameOnchangeHandler("AdultData", e, index)
                    }
                    error={lastNameError}
                    requiredSymbol={"*"}
                  />

                  {/* First name */}
                  <Input
                    type={"text"}
                    title={"First Name"}
                    label={"First Name"}
                    value={TravelData?.AdultData?.[index]?.firstName}
                    onChange={(e) =>
                      firstNameOnchangeHandler("AdultData", e, index)
                    }
                    error={firstNameError}
                    requiredSymbol={"*"}
                  />
                </FormContent>

                <FormContent>
                  {/* Middle name */}
                  <Input
                    type={"text"}
                    title={"Middle Name"}
                    label={"Middle Name"}
                    value={TravelData?.AdultData?.[index]?.middleName}
                    onChange={(e) =>
                      middleNameOnchangeHandler("AdultData", e, index)
                    }
                    error={middleNameError}
                    requiredSymbol={"*"}
                  />

                  {/* DOB */}
                  <Input
                    title={"Date of Birth"}
                    label={"Date of Birth"}
                    type={"date"}
                    value={TravelData?.AdultData?.[index]?.dob}
                    onChange={(e) => dobOnchangeHandler("AdultData", e, index)}
                    error={dobError}
                    requiredSymbol={"*"}
                  />

                  {/* Country  */}
                  <SelectInput
                    options={Countries}
                    title={"Nationality"}
                    error={countryError}
                    onChange={(e) =>
                      handleSelectCountryChange("AdultData", e, index)
                    }
                  />
                </FormContent>

                <FormContent>
                  {/* Gender */}
                  <RadioInput
                    options={gender}
                    defaultValue={selectedGender}
                    onChange={(e) =>
                      handleGenderChange("AdultData", e, index, "gender")
                    }
                    error={genderError}
                  />

                  {/* Phone Number */}
                  <Input
                    title={"Phone Number "}
                    label={"Phone Number "}
                    type={"text"}
                    value={TravelData?.AdultData?.[index]?.phone || ""}
                    onChange={(e) => phonOnchangeHandler("AdultData", e, index)}
                    error={phoneError}
                    requiredSymbol={"*"}
                    maxLength={12}
                  />

                  {/* email address */}
                  <Input
                    title={"Email Address"}
                    label={"Email Address"}
                    type={"email"}
                    value={TravelData?.AdultData?.[index]?.email || ""}
                    onChange={(e) =>
                      emailOnchangeHandler("AdultData", e, index)
                    }
                    error={emailError}
                    requiredSymbol={"*"}
                  />
                </FormContent>

                {/* Continue Button */}
                <ButtonWrapper>
                  <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <p>
                      By proceeding you agree have read and accept our{" "}
                      <a href="#">Terms and Conditions</a>
                    </p>
                  </div>
                </ButtonWrapper>
              </FormWrapper>
            </TripInfoContent>
          ))}

          {Array.from({ length: oneWayFlightResult?.[7] || 0 }, (_, index) => (
            <TripInfoContent key={index}>
              <h2>Travel Detail</h2>

              {/* Passenger */}
              <TripPassenger>
                <div>
                  <span>
                    <FaUser />
                  </span>
                  <h3>Children, {index + 1} (12yrs+)</h3>
                </div>
                <div>
                  <p>0/1 added</p>
                </div>
              </TripPassenger>

              {/* Form */}
              <FormWrapper onSubmit={handledSubmit}>
                <FormContent>
                  {/* Title  */}

                  <SelectInput
                    label={"Title"}
                    options={userTitle}
                    title={"Title"}
                    error={titleError}
                    onChange={(e) =>
                      handleSelectTitleChange("ChildrenData", e, index)
                    }
                  />

                  {/* Last name */}
                  <Input
                    title={"Last Name"}
                    label={"Last Name"}
                    type={"text"}
                    value={TravelData?.ChildrenData?.[index]?.lastName}
                    onChange={(e) =>
                      lastNameOnchangeHandler("ChildrenData", e, index)
                    }
                    error={lastNameError}
                    requiredSymbol={"*"}
                  />

                  {/* First name */}
                  <Input
                    type={"text"}
                    title={"First Name"}
                    label={"First Name"}
                    value={TravelData?.ChildrenData?.[index]?.firstName}
                    onChange={(e) =>
                      firstNameOnchangeHandler("ChildrenData", e, index)
                    }
                    error={firstNameError}
                    requiredSymbol={"*"}
                  />
                </FormContent>

                <FormContent>
                  {/* Middle name */}
                  <Input
                    type={"text"}
                    title={"Middle Name"}
                    label={"Middle Name"}
                    value={TravelData?.ChildrenData?.[index]?.middleName}
                    onChange={(e) =>
                      middleNameOnchangeHandler("ChildrenData", e, index)
                    }
                    error={middleNameError}
                    requiredSymbol={"*"}
                  />

                  {/* DOB */}
                  <Input
                    title={"Date of Birth"}
                    label={"Date of Birth"}
                    type={"date"}
                    value={TravelData?.ChildrenData?.[index]?.dob}
                    onChange={(e) =>
                      dobOnchangeHandler("ChildrenData", e, index)
                    }
                    error={dobError}
                    requiredSymbol={"*"}
                  />

                  {/* Country  */}
                  <SelectInput
                    options={Countries}
                    title={"Nationality"}
                    error={countryError}
                    onChange={(e) =>
                      handleSelectCountryChange("ChildrenData", e, index)
                    }
                  />
                </FormContent>

                <FormContent>
                  {/* Gender */}
                  <RadioInput
                    options={gender}
                    defaultValue={selectedGender}
                    onChange={(e) =>
                      handleGenderChange("ChildrenData", e, index, "gender")
                    }
                    error={genderError}
                  />

                  {/* Phone Number */}
                  <Input
                    title={"Phone Number "}
                    label={"Phone Number "}
                    type={"text"}
                    value={TravelData?.ChildrenData?.[index]?.phone}
                    onChange={(e) =>
                      phonOnchangeHandler("ChildrenData", e, index)
                    }
                    error={phoneError}
                    requiredSymbol={"*"}
                    maxLength={12}
                  />

                  {/* email address */}
                  <Input
                    title={"Email Address"}
                    label={"Email Address"}
                    type={"email"}
                    value={TravelData?.ChildrenData?.[index]?.email}
                    onChange={(e) =>
                      emailOnchangeHandler("ChildrenData", e, index)
                    }
                    error={emailError}
                    requiredSymbol={"*"}
                  />
                </FormContent>

                {/* Continue Button */}
                <ButtonWrapper>
                  <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <p>
                      By proceeding you agree have read and accept our{" "}
                      <a href="#">Terms and Conditions</a>
                    </p>
                  </div>
                  {/* <Button
                        text={"Continue"}
                        onClick={() => {
                          setTravelDetail(queryParams);
                          navigate(
                            `/flight-customization/${flightResultIndex}`
                          );
                        }}
                      /> */}
                </ButtonWrapper>
              </FormWrapper>
            </TripInfoContent>
          ))}
          {Array.from({ length: oneWayFlightResult?.[8] || 0 }, (_, index) => (
            <TripInfoContent key={index}>
              <h2>Travel Detail</h2>

              {/* Passenger */}
              <TripPassenger>
                <div>
                  <span>
                    <FaUser />
                  </span>
                  <h3>Infants, {index + 1} (2yrs+)</h3>
                </div>
                <div>
                  <p>0/1 added</p>
                </div>
              </TripPassenger>

              {/* Form */}
              <FormWrapper onSubmit={handledSubmit}>
                <FormContent>
                  {/* Title  */}

                  <SelectInput
                    label={"Title"}
                    options={userTitle}
                    title={"Title"}
                    error={titleError}
                    onChange={(e) =>
                      handleSelectTitleChange("InfantData", e, index)
                    }
                  />

                  {/* Last name */}
                  <Input
                    title={"Last Name"}
                    label={"Last Name"}
                    type={"text"}
                    value={TravelData?.InfantData?.[index]?.lastName}
                    onChange={(e) =>
                      lastNameOnchangeHandler("InfantData", e, index)
                    }
                    error={lastNameError}
                    requiredSymbol={"*"}
                  />

                  {/* First name */}
                  <Input
                    type={"text"}
                    title={"First Name"}
                    label={"First Name"}
                    value={TravelData?.InfantData?.[index]?.firstName}
                    onChange={(e) =>
                      firstNameOnchangeHandler("InfantData", e, index)
                    }
                    error={firstNameError}
                    requiredSymbol={"*"}
                  />
                </FormContent>

                <FormContent>
                  {/* Middle name */}
                  <Input
                    type={"text"}
                    title={"Middle Name"}
                    label={"Middle Name"}
                    value={TravelData?.InfantData?.[index]?.middleName}
                    onChange={(e) =>
                      middleNameOnchangeHandler("InfantData", e, index)
                    }
                    error={middleNameError}
                    requiredSymbol={"*"}
                  />

                  {/* DOB */}
                  <Input
                    title={"Date of Birth"}
                    label={"Date of Birth"}
                    type={"date"}
                    value={TravelData?.InfantData?.[index]?.dob}
                    onChange={(e) => dobOnchangeHandler("InfantData", e, index)}
                    error={dobError}
                    requiredSymbol={"*"}
                  />

                  {/* Country  */}
                  <SelectInput
                    options={Countries}
                    title={"Nationality"}
                    error={countryError}
                    onChange={(e) =>
                      handleSelectCountryChange("InfantData", e, index)
                    }
                  />
                </FormContent>

                <FormContent>
                  {/* Gender */}
                  <RadioInput
                    options={gender}
                    defaultValue={selectedGender}
                    onChange={(e) =>
                      handleGenderChange("InfantData", e, index, "gender")
                    }
                    error={genderError}
                  />

                  {/* Phone Number */}
                  <Input
                    title={"Phone Number "}
                    label={"Phone Number "}
                    type={"text"}
                    value={TravelData?.InfantData?.[index]?.phone}
                    onChange={(e) =>
                      phonOnchangeHandler("InfantData", e, index)
                    }
                    error={phoneError}
                    requiredSymbol={"*"}
                    maxLength={12}
                  />

                  {/* email address */}
                  <Input
                    title={"Email Address"}
                    label={"Email Address"}
                    type={"email"}
                    value={TravelData?.InfantData?.[index]?.email}
                    onChange={(e) =>
                      emailOnchangeHandler("InfantData", e, index)
                    }
                    error={emailError}
                    requiredSymbol={"*"}
                  />
                </FormContent>

                {/* Continue Button */}
                <ButtonWrapper>
                  <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <p>
                      By proceeding you agree have read and accept our{" "}
                      <a href="#">Terms and Conditions</a>
                    </p>
                  </div>
                  {/* <Button
                        text={"Continue"}
                        onClick={() => {
                          setTravelDetail(queryParams);
                          navigate(
                            `/flight-customization/${flightResultIndex}`
                          );
                        }}
                      /> */}
                </ButtonWrapper>
              </FormWrapper>
            </TripInfoContent>
          ))}

          <div>
            <Button
              text={"Continue"}
              onClick={() => {
                setTravelDetail(TravelData);
                navigate(`/oneway-customization/${oneWayFlightResultIndex}`);
              }}
            />
          </div>
        </TripMinContent>
      </TripInfoBody>
    </TripInfoWrapper>
  );
}
