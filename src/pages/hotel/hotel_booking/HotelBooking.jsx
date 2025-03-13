import React, { useState, useEffect } from "react";
import FormWrapper from "../../../components/booking_icons/form_wrapper/FormWrapper";
import Button from "../../../components/button/Button";
import HeroSection from "../../../components/hero/HeroSection";
import hotel from "../../../images/hotel-bg.png";
import BookingHeaderContent from "../../../components/booking_icons/book_sub_header/BookingHeaderContent";
import { FormWrapperContainer } from "../../../components/booking_icons/form_wrapper/FormWrapper.style";
import { ContentSubHeader } from "../../../components/booking_icons/book_sub_header/BookingHeaderContent.style";
import {
  HotelBody,
  HotelCategoryWrapper,
  HotelContentWrapper,
  HotelFormSection,
  HotelList,
  HotelWrapper,
  Section,
  SpaceBetweenContent,
} from "./HotelBooking.style";
import {
  HotelFormSectionContent,
  HotelFormSectionTitle,
} from "../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_form/HotelForm.style";
import heroImage from "../../../images/hotel-bg.png";
import HotelForm from "../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_form/HotelForm";
import HotelCategory from "../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_category/HotelCategory";
import riyad from "../../../images/ryadh.png";
import dubai from "../../../images/dubai.png";
import hot from "../../../images/hotel-bg.png";
import trav from "../../../images/travelunsplash.jpg";
import { useNavigate } from "react-router-dom";
import HotelCard from "../../../components/hotel_components/hotel_card/HotelCard";
import HotelDestination from "../../../components/hotel_components/Hotel_destication/HotelDestination";
import { hotelList } from "../../../data/object/hotelList";
import { hotelCategories } from "../../../data/object/HotelCategory";
import HotelSlide from "../../../components/hotel_components/hotel_slide_components/hotel_slider/HotelSlide";
import CategorySlide from "../../../components/hotel_components/hotel_slide_components/category_slide/CategorySlide";
import { MdFlightTakeoff, MdOutlineArrowRightAlt } from "react-icons/md";
import BookingIcons from "../../../components/booking_icons/book_icon/BookingIcons";
import GeneralHeaders from "../../../components/booking_icons/book_sub_header/booking_general_headers/GeneralHeaders";
import Content from "../../../components/homepage_content/Content";
import axios from "axios";
import { useAuthStore } from "../../../store/store";
import cityList from "../../../flightDB/airports.json";

const defaultCityList = [
  {
    code: "LOS",
    lat: "6.575",
    lon: "3.3222",
    name: "Lagos Murtala Muhammed Airport",
    city: "Ikeja",
    state: "Lagos",
    country: "Nigeria",
    woeid: "12515073",
    tz: "Africa/Lagos",
    phone: "",
    type: "Airports",
    email: "",
    url: "",
    runway_length: "12795",
    elev: "135",
    icao: "DNMM",
    direct_flights: "42",
    carriers: "37",
  },
  {
    code: "ABV",
    lat: "9.0056",
    lon: "7.2661",
    name: "Abuja International Airport",
    city: "Gwagwa",
    state: "Abuja Capital Territory",
    country: "Nigeria",
    woeid: "12515056",
    tz: "Africa/Lagos",
    phone: "",
    type: "Airports",
    email: "",
    url: "",
    runway_length: "11808",
    elev: "1122",
    icao: "DNAA",
    direct_flights: "9",
    carriers: "12",
  },
];
export default function HotelBooking() {
  const navigate = useNavigate();
  let queryParams;
  const FlightItems2 = [
    {
      title: "Hotel",
      onClickFunc: "#",
      Icon: <MdFlightTakeoff />,
      bgColor: "",
      border: "none",
    },
    {
      title: "Stop-over",
      onClickFunc: "/hotel-reservation",

      bgColor: "none",
      border: "none",
    },
    {
      title: "Car",
      onClickFunc: "/visa",

      bgColor: "none",
      border: "none",
    },
    {
      title: "Holiday",
      onClickFunc: "/visa",

      bgColor: "none",
      border: "none",
    },
    {
      title: "Umrah",
      onClickFunc: "/visa",

      bgColor: "none",
      border: "none",
    },
  ];

  // Hotel form Reservation Variable Declarations:

  // roundTrip is selected by default
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const [takeOff, setTakeOff] = useState("");

  const [showHotelInputs, setShowHotelInputs] = useState(true);

  // Mr Bobai - >
  const { setHotelResult } = useAuthStore();

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

  const [destinationAirportList, setDestinationAirportList] =
    useState(defaultCityList);
  const [destinationLocationCode, setDestinationLocationCode] = useState("");

  const [searchDestinationInputValue, setSearchDestinationInputValue] =
    useState("");
  // console.log(searchDestinationInputValue, destination, takeOff);
  useEffect(() => {
    if (searchDestinationInputValue !== "") {
      const newFilterData = cityList.filter((item) => {
        if (
          (item.name &&
            item.name
              .toLowerCase()
              .includes(searchDestinationInputValue.toLowerCase())) ||
          (item.city &&
            item.city
              .toLowerCase()
              .includes(searchDestinationInputValue.toLowerCase())) ||
          (item.state &&
            item.state
              .toLowerCase()
              .includes(searchDestinationInputValue.toLowerCase())) ||
          (item.country &&
            item.country
              .toLowerCase()
              .includes(searchDestinationInputValue.toLowerCase())) ||
          (item.code &&
            item.code
              .toLowerCase()
              .includes(searchDestinationInputValue.toLowerCase()))
        ) {
          // airports(destinationLocation, 1);
          return item;
        }
      });
      setDestinationAirportList(newFilterData);
    }
  }, [searchDestinationInputValue]);

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

  queryParams = {
    destinationLocationCode,
    checkInDate,
    checkOutDate,
    room,
    adults: adults,
    children: children,
    takeOff,
  };
  const bookHotelsSearch = async () => {
    const res = await axios
      .post("http://localhost:5000/hotelSearch", { hotelSearch: queryParams })
      .catch((err) => {
        console.log(err?.response?.data);
      });

    if (res) {
      console.log(res.data.data);

      navigate("/hotel-result");

      setHotelResult([queryParams, res.data.data]);
    }
  };

  const axiosRequest = async () => {
    try {
      const response = await axios.post(
        "https://booking.kayak.com/mvm/smartyv2/search?f=j&s=airportonly&where=lon&lc_cc=GB&lc=en&sv=5&cv=undefined&c=undefined&searchId=undefined&v=undefined",
        {}, // Empty body since Content-Length is 0
        {
          headers: {
            Host: "booking.kayak.com",
            Cookie:
              "Apache=ZlsEwg-AAABkrkLLuU-a4-bbuMHA; cluster=5; p1.med.token=rIyVn_Ypv_JOce$3IPZlp8; p1.med.sid=R-5ogdEloLezvJf$W6v4zh6-iZZqdAaKzB7U7v9nwupa8Rj_WvrR6GdjB2EFJ3FLZ; kayak=I2t$2T1kwUMJyMxxvmc0; kayak.mc=AbexCt-Vs3p7-asdATBH2vVrxtUCD6PSj3djndXhpbMcUgdQtI_Wn31B9hoD9_WjyTogXQdG2Hci6FDf4Q_teSiWr3Qzvq8eLYiSTomTaFWddiW0cnDhb6PX3f0gA6cdMuPJK20PO_5n_E-kLUgDbyDT3b3W5EAwiew_tFDEytGqicGD5XSZYqnrlwGcGe9s0ctGmQeapz4BdWtcgj85s6TeGl3ZXDKSjCPNz69ZVDdhTxa1CFwynD5As5ijiBGC7A",
            "Content-Length": "0",
            "Sec-Ch-Ua": '"Not-A.Brand";v="99", "Chromium";v="124"',
            "X-Requested-With": "XMLHttpRequest",
            "Sec-Ch-Ua-Mobile": "?0",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.6367.60 Safari/537.36",
            "Sec-Ch-Ua-Platform": '"Windows"',
            Accept: "*/*",
            Origin: "https://booking.kayak.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer:
              "https://booking.kayak.com/?sid=e09acdd9fc4d7917b1646b8e5b2faf20&aid=304142&label=gen173nr-1BCAEoggI46AdIM1gEaKcBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAK5r-O4BsACAdICJGQ5YmNhZWIzLTFlNmEtNGNhYy05ODQwLTVkYTU3MmFhNTRiONgCBeACAQ",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            Priority: "u=1, i",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error with the request:", error);
    }
  };
  const AxiosRequest = async () => {
    try {
      const requestBody = {
        tripDetails: [
          {
            originAirportCode: "LON",
            destinationAirportCode: "LOS",
            departureDate: "2024-10-24 00:00:00.0",
            returnDate: "2024-10-30 00:00:00.0",
            departureCity: "Abuja",
            arrivalCity: "Lagos",
            cabinType: "ECONOMY",
          },
        ],
        flightType: "ROUND",
        numberOfAdult: 1,
        numberOfChildren: 0,
        numberOfInfant: 0,
        uniqueSession: "kluoMsOH30LVFpP",
        directFlight: true,
        refundable: false,
        isDayFlight: true,
        prefferedAirlineCodes: [],
        departureCity: "London",
        arrivalCity: "Lagos",
      };

      const response = await axios.post(
        "https://api.travelbeta.com/v1/api/flight",
        requestBody, // Request body in JSON format
        {
          headers: {
            Host: "api.travelbeta.com",
            "Content-Length": "466", // It will automatically compute content length
            Accept: "application/json",
            "Content-Type": "application/json",
            "Sec-Ch-Ua": '"Not-A.Brand";v="99", "Chromium";v="124"',
            "Sec-Ch-Ua-Mobile": "?0",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.6367.60 Safari/537.36",
            "X-Api-Key": "24c9mti53ykc31z1t5u5", // Your API key
            "Sec-Ch-Ua-Platform": '"Windows"',
            Origin: "https://www.travelbeta.com",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://www.travelbeta.com/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            Priority: "u=1, i",
          },
        }
      );

      console.log(response.data); // Handle the response from the API
    } catch (error) {
      console.error("Error with the request:", error);
    }
  };

  // axiosRequest();
  return (
    <HotelWrapper>
      {/* hero section with form */}
      <HeroSection heroImage={heroImage}>
        {/* flight form section */}
        <HotelFormSection sectionHeight={"auto"}>
          {/* flight form section  title */}
          <HotelFormSectionTitle>
            <h4>Need hotel accommodation?</h4>
            <h3>Begin your reservation here</h3>
          </HotelFormSectionTitle>
        
          {/* flight form section content */}
          <HotelFormSectionContent>
            {/* Flight top level items  such as stopover, manage bookings etc..*/}
            {/* Flight Headers */}
            <GeneralHeaders />

            {/* Hotel Form */}
            <FormWrapper>
              <HotelForm
                handleShowHotelInputs={handleShowHotelInputs}
                takeOff={takeOff}
                handleDestination={handleDestination}
                showDestinationAirports={showDestinationAirports}
                onChangeDestinationHandler={onChangeDestinationHandler}
                destinationAirportList={destinationAirportList}
                setDestinationLocationCode={setDestinationLocationCode}
                searchDestinationInputValue={searchDestinationInputValue}
                setTakeOff={setTakeOff}
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
                handleButtonClick={bookHotelsSearch}
              />
            </FormWrapper>
          </HotelFormSectionContent>
        </HotelFormSection>
      </HeroSection>

      {/* Hotel Body */}
      <HotelBody>
        {/* Hotel Category */}
        <Section>
          <h2>Hotel Categories</h2>
          <HotelSlide />
        </Section>

        {/* contents */}
        <Section>
          <Content />
        </Section>
      </HotelBody>
    </HotelWrapper>
  );
}
