import React, { useState, useEffect } from "react";
import {
  EarnPointCard,
  HotelResultContent,
  HotelResultHeader,
  HotelResultMain,
  HotelResultWrapper,
  ResultCounter,
  ResultCounterLeft,
  ResultCounterRight,
  ResultSidebar,
  SideBarContent,
} from "./HotelResult.style";
import { DateFlight } from "../../flight/flight_result/FlightResult.style";
import HotelForm from "../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_form/HotelForm";
import PropertyOnMap from "../../../components/hotel_components/map/PropertyOnMap";
import HotelResultCard from "../../../components/hotel_components/hotel_result_card/HotelResultCard";
import { useNavigate } from "react-router-dom";
import { HotelResultList } from "../../../data/object/HotelResults";
import hotelPicture from "../../../images/hotel-bg.png";
import SidebarItems from "../../../components/hotel_components/sidebar_items/SidebarItems";
import {
  certification,
  DistanceFromLocation,
  facilities,
  FunThings,
  PopularFilters,
  PropertyAccessibility,
  propertyBand,
  PropertyRating,
  PropertyType,
  ReviewScore,
} from "../../../data/object/hotel_sidebar_list/HotelSideBarList";
import { useAuthStore } from "../../../store/store";

export default function HotelResult() {
  const { hotelResult } = useAuthStore();
  const today = new Date().toISOString().split("T")[0];

  // Hotel form Reservation Variable Declarations:

  const navigate = useNavigate();

  // roundTrip is selected by default
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(today);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(3);
  const [room, setRoom] = useState(4);
  const [hotelCity, setHotelCity] = useState("Abuja, Nigeria");

  const [showHotelInputs, setShowHotelInputs] = useState(false);

  useEffect(() => {
    if (!hotelResult || hotelResult?.length === 0) {
      navigate("/flight-booking");
    }
  }, [hotelResult, navigate]);

  // passange count event handler Event handler

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };

  const handleCheckInDate = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDate = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleIncrement = (type) => {
    if (type === "adults" && adults < 6) {
      totalPassengers <= 8 && setAdults(adults + 1);
    } else if (type === "children" && children < 5) {
      totalPassengers <= 8 && setChildren(children + 1);
    } else if (type === "room" && room < 4) {
      setRoom(room + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    } else if (type === "room" && room > 1) {
      setRoom(room - 1);
    }
  };

  const totalPassengers = adults + children;

  const [showPassenger, setShowPassenger] = useState(false);

  // DROPDOWN LOCATION AND DESTINATION AIRPORTS

  const destinationAirportList = [
    {
      airportAddress: "Lagos, Nigeria",
      airportName: "Murtala Muhammad Internatinal Airport",
      airportAbbreviation: "LOS",
    },
    {
      airportAddress: "Abuja, Nigeria",
      airportName: "Nnamdi Azikwe Internatinal Airport",
      airportAbbreviation: "ABV",
    },
  ];

  const [searchDestinationInputValue, setSearchDestinationInputValue] =
    useState("");

  // TakeOff Search airport handler

  // destionaton Search airport handler
  const onChangeDestinationHandler = (e) => {
    setSearchDestinationInputValue(e.target.value);
  };

  // show/hide takeoff and destination down airport Lists

  const [showDestinationAirports, setShowDestinationAirports] = useState(false);

  const onCloseDestinationDropdwon = () => {
    setShowDestinationAirports(false);
  };

  // show/hide flightInputs

  const handleShowHotelInputs = () => {
    setShowDestinationAirports(!showDestinationAirports);
    setShowHotelInputs(true);
  };

  const [star, setStar] = useState("");

  const [values, setValues] = useState([]);
  return (
    <HotelResultWrapper>
      <HotelResultHeader>
        <p>
          {hotelResult[1]?.length} properties found in <span>Abuja</span>
        </p>
      </HotelResultHeader>

      {/* Hotel Editing form */}
      <HotelForm
        rounderBorder={"0px"}
        handleShowHotelInputs={handleShowHotelInputs}
        takeOff={hotelCity}
        handleDestination={handleDestination}
        showDestinationAirports={showDestinationAirports}
        onChangeDestinationHandler={onChangeDestinationHandler}
        destinationAirportList={destinationAirportList}
        searchDestinationInputValue={searchDestinationInputValue}
        setTakeOff={setHotelCity}
        onCloseDestinationDropdwon={onCloseDestinationDropdwon}
        showHotelInputs={showHotelInputs}
        handleCheckInDate={handleCheckInDate}
        checkInDate={checkInDate}
        handleCheckOutDate={handleCheckOutDate}
        checkOutDate={checkOutDate}
        setShowPassenger={setShowPassenger}
        showPassenger={showPassenger}
        adults={adults}
        children={children}
        room={room}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleButtonClick={() => {}}
      />

      <HotelResultContent>
        {/* SideBar */}
        <ResultSidebar>
          {/* show on map */}
          {/* <ResultCounterRight>
              <span><PropertyOnMap/></span>
            </ResultCounterRight> */}

          {/* Property Rating */}
          <SideBarContent>
            <h3>Popular filter for this area</h3>
            {PopularFilters.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Facilities */}
          <SideBarContent>
            <h3>Facilities</h3>
            {facilities.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Recreation and Fun */}
          <SideBarContent>
            <h3>Recreation and Fun</h3>
            {FunThings.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Disance from location */}
          <SideBarContent>
            <h3>Distance From {"Abuja"}</h3>
            {DistanceFromLocation.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Certification */}
          <SideBarContent>
            <h3>Certification</h3>
            {certification.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Property Brand */}
          <SideBarContent>
            <h3>Property Brand</h3>
            {propertyBand.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Property Type */}
          <SideBarContent>
            <h3>Property Type</h3>
            {PropertyType.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Review Score */}
          <SideBarContent>
            <h3>Review Score</h3>
            {ReviewScore.map((item, i) => (
              <SidebarItems
                key={i}
                value={item.title}
                counter={item.counter}
                setValue={setValues}
              />
            ))}
          </SideBarContent>

          {/* Property Rating */}
          <SideBarContent>
            <h3>Property Rating</h3>
            {PropertyRating.map((item, i) => (
              <SidebarItems
                value={item.title}
                counter={item.counter}
                setStar={setStar}
                star={star}
              />
            ))}
          </SideBarContent>

          {/* Accessibility */}
          <SideBarContent>
            <h3>Accessibility</h3>
            {PropertyAccessibility.map((item, i) => (
              <SidebarItems
                value={item.title}
                counter={item.counter}
                setStar={setStar}
                counterColor={"#353535"}
              />
            ))}
          </SideBarContent>
        </ResultSidebar>

        {/* Main Content */}
        <HotelResultMain>
          {/* Counter Summary */}
          <ResultCounter>
            <EarnPointCard bg={hotelPicture}>
              <div>
                <h3>Earn 1 Manzo Points per N5,000 spent</h3>
                <span>
                  You need to provide Manzo Travel membership number during or
                  after booking.
                </span>
                <a href="">See promotion details</a>
              </div>
            </EarnPointCard>

            <ResultCounterLeft>
              <h3>Abuja:</h3>
              <p> {hotelResult[1]?.length} Properties Found.</p>
            </ResultCounterLeft>
          </ResultCounter>

          {/* HOTEL RESULTS */}
          {HotelResultList.map((item, i) => (
            <HotelResultCard
              data={hotelResult}
              picture={item.picture}
              title={item.title}
              location={item.location}
              googleMapLink={item.googleMapLink}
              distance={item.distance}
              locationLink={item.locationLink}
              recommended={item.recommended}
              type={item.type}
              property={item.property}
              bedrooms={item.bedrooms}
              livingRooms={item.livingRooms}
              bathrooms={item.bathrooms}
              kitchen={item.kitchen}
              dimension={item.dimension}
              bedding={item.bedding}
              cancellation={item.cancellation}
              grade={item.grade}
              reviewCount={item.reviewCount}
              checkingDate={item.checkInDate}
              checkoutDate={item.checkOutDate}
              rating={item.rating}
              nights={item.nights}
              adults={item.adults}
              child={item.child}
              price={item.price}
              handleButtonClick={() => navigate("/property-detail")}
            />
          ))}
        </HotelResultMain>
      </HotelResultContent>
    </HotelResultWrapper>
  );
}

// Step 1: Obtain Your API Key
// Create a Google Cloud Project:

// Go to the Google Cloud Console.
// Create a new project or select an existing project.
// Enable the Google Maps JavaScript API:

// Go to the API Library.
// Search for "Google Maps JavaScript API" and enable it for your project.
// Create API Credentials:

// Go to the Credentials page.
// Click "Create Credentials" and choose "API key".
// Copy the API key provided.
