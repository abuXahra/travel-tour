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
} from "./TripInfo.style";
import Button from "../../../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Timeline from "../../../../components/timeline/Timeline";
import Input from "../../../../components/inputs/input/Input";
import SelectInput from "../../../../components/inputs/selectInput/SelectInput";
import { RadioWrapper } from "../../../../components/inputs/input_radio/RadioInput.style";
import RadioInput from "../../../../components/inputs/input_radio/RadioInput";
import { FaArrowDown, FaArrowRight, FaUser } from "react-icons/fa";
import { Countries } from "../../../../data/object/countries";
import { IoIosArrowDown } from "react-icons/io";
import flightLogo from "../../../../images/aire-peace.png";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";

import AirlineCodeLookup from "../../../../components/Flight/AirlineCodeLookup";
import AirlineFlightLogo from "../../../../components/Flight/AirlineFlightLogo";
import { useAuthStore } from "../../../../store/store";

export default function TripInfo() {
  const [data, setData] = useState({});
  // navigation
  const navigate = useNavigate();

  const {
    singleFlightResult,
    setTravelDetail,
    flightPriceLookup,
    setSingleFlightResult,
  } = useAuthStore();
  const { flightResultIndex } = useParams();

  useEffect(() => {
    if (!singleFlightResult || singleFlightResult?.length === 0) {
      navigate("/flight-booking");
    }
  }, [singleFlightResult, navigate]);

  useEffect(() => {
    const flightPrice = async () => {
      let flightPrice = await flightPriceLookup(
        singleFlightResult[2][flightResultIndex]
      );

      if (flightPrice) {
        console.log(flightPrice);
        setData(flightPrice.flightOffers[0]);
      }
    };
    flightPrice();
  }, [singleFlightResult]);

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
  const [TravelData, setTravelData] = useState({
    AdultData: [],
    ChildrenData: [],
    InfantData: [],
  });

  // title selection handler
  const userTitle = [
    { title: "Mr.", value: "Mr." },
    { title: "Mrs", value: "Mrs." },
  ];

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
    if (lastName === "" || null) {
      setLastNameError(true);
    }

    // first name validation
    if (firstName === "" || null) {
      setFirstNameError(true);
    }

    // middle name validation
    if (middleName === "" || null) {
      setMiddleNameError(true);
    }

    // dob validation
    if (dob === "" || null) {
      setDobError(true);
    }

    // country  validation
    if (selectedCountryValue === "" || null) {
      setCountryError(true);
    }

    // Gender  validation
    if (selectedGender === "" || null) {
      setGenderError(true);
    }

    // phone validation
    if (phone === "" || null) {
      setPhoneError(true);
    }

    // email validation
    if (email === "" || null) {
      setEmailError(true);
    }
  };

  const [showtripDepart, setShowtripDepart] = useState(false);
  const [showtripReturn, setShowtripReturn] = useState(false);

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
  // let carrierCode = singleFlightResult[9].carriers[keyWord];

  // console.log(queryParams);
  if (!singleFlightResult || singleFlightResult?.length === 0) {
    navigate("/flight-booking");
  } else {
    return (
      <TripInfoWrapper>
        {/* header */}
        <TripInfoHeader>
          <TripInfoHeaderItems>
            <TripInfoHeaderTitle>
              <span>
                <Button
                  text={"Back"}
                  onClick={() => navigate("/flight-result")}
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
                        {singleFlightResult[0]} ({singleFlightResult[3]}) TO{" "}
                        {singleFlightResult[1]} ({singleFlightResult[4]})
                      </b>
                    </p>
                    <p>
                      {" "}
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
                  {/* <span>Adult X 1</span>
              <span></span> */}
                </div>
                <div>
                  <span>Base Fee</span>
                  <span>{money.format(data?.price?.base)}</span>
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
                  <span>{money.format(data?.price?.total)}</span>
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
                    <h2>{singleFlightResult[0]}</h2>{" "}
                    <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />{" "}
                    <h2>{singleFlightResult[1]}</h2>{" "}
                  </span>
                  <span>
                    <p>
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
                        singleFlightResult[2][flightResultIndex].itineraries[0]
                          .segments[0].numberOfStops
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
                    <div>
                      <IoIosArrowDown />
                    </div>
                  </span>
                </TripDetailTile>
                {/* body */}
                {showtripDepart && (
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
                        <a href="#">
                          {
                            singleFlightResult[2][flightResultIndex]
                              .travelerPricings[0].fareDetailsBySegment[0].cabin
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
                          <p>{`${
                            parseDuration(
                              singleFlightResult[2][flightResultIndex]
                                .itineraries[0].segments[0].duration
                            ).hours
                          }hr ${
                            parseDuration(
                              singleFlightResult[2][flightResultIndex]
                                .itineraries[0].segments[0].duration
                            ).minutes
                          }min`}</p>
                          <p>
                            {singleFlightResult[1]}{" "}
                            <b>({singleFlightResult[4]})</b>
                          </p>
                        </div>
                        <div>
                          <span>
                            <h4>CHECK IN:</h4>{" "}
                            <p>
                              {
                                singleFlightResult[2][flightResultIndex]
                                  .travelerPricings[0].travelerType
                              }
                            </p>{" "}
                          </span>
                          <span>
                            <h4>BAGGAGE:</h4> <p>1</p>
                          </span>
                        </div>
                      </TripAirport>
                    </TripDetailTime>
                  </TripDetailBody>
                )}
              </FlightDetailWrapper>

              {/* for flight Return */}
              {/* Flight Detail section */}
              <FlightDetailWrapper>
                {/* title */}
                <TripDetailTile
                  onClick={() => setShowtripReturn(!showtripReturn)}
                >
                  <span>
                    {" "}
                    <h2>{singleFlightResult[1]}</h2>{" "}
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />{" "}
                    <h2>{singleFlightResult[0]}</h2>{" "}
                  </span>
                  <span>
                    <p>
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
                        singleFlightResult[2][flightResultIndex].itineraries[1]
                          .segments[0].numberOfStops
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
                    <div>
                      <IoIosArrowDown />
                    </div>
                  </span>
                </TripDetailTile>
                {/* body */}
                {showtripReturn && (
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
                        <a href="#">
                          {
                            singleFlightResult[2][flightResultIndex]
                              .travelerPricings[0].fareDetailsBySegment[0].cabin
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
                          <p>
                            {" "}
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
                          <p>
                            {singleFlightResult[0]}{" "}
                            <b>({singleFlightResult[3]})</b>
                          </p>
                        </div>
                        <div>
                          <span>
                            <h4>CHECK IN:</h4>{" "}
                            <p>
                              {" "}
                              {
                                singleFlightResult[2][flightResultIndex]
                                  .travelerPricings[0].travelerType
                              }
                            </p>{" "}
                          </span>
                          <span>
                            <h4>BAGGAGE:</h4> <p>1</p>
                          </span>
                        </div>
                      </TripAirport>
                    </TripDetailTime>
                  </TripDetailBody>
                )}
              </FlightDetailWrapper>
            </TripInfoContent>
            {Array.from(
              { length: singleFlightResult?.[6] || 0 },
              (_, index) => (
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
                        onChange={(e) =>
                          dobOnchangeHandler("AdultData", e, index)
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
                        onChange={(e) =>
                          phonOnchangeHandler("AdultData", e, index)
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
              )
            )}

            {Array.from(
              { length: singleFlightResult?.[7] || 0 },
              (_, index) => (
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
              )
            )}
            {Array.from(
              { length: singleFlightResult?.[8] || 0 },
              (_, index) => (
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
                        onChange={(e) =>
                          dobOnchangeHandler("InfantData", e, index)
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
              )
            )}
            <Button
              text={"Continue"}
              onClick={() => {
                setTravelDetail(TravelData);
                navigate(`/flight-customization/${flightResultIndex}`);
              }}
            />
            {/*user trip data  */}
          </TripMinContent>
        </TripInfoBody>
      </TripInfoWrapper>
    );
  }
}
