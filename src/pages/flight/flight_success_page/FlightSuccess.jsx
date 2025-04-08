import React, { useRef, useState, useEffect } from "react";
import {
  FlightSuccessBody,
  FlightSuccessContent,
  FlightSuccessHeader,
  FlightSuccessWrapper,
  SuccessWrapper,
  MarkIcon,
  BookingId,
  PaymentStatusContent,
  PassengerDetail,
  PassengerWrapper,
  PassengerContent,
  HRStyled,
  ButtonWrapper,
  ContactDetail,
} from "./FlightSuccess.style";
import Button from "../../../components/button/Button";
import Timeline from "../../../components/timeline/Timeline";
import { useNavigate, useParams } from "react-router-dom";
import FlightIcon from "../../../components/flight_icon/FlightIcon";
import flightLogo from "../../../images/aire-peace.png";
import {
  FaCheckCircle,
  FaCircle,
  FaMarkdown,
  FaPaypal,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import {
  RadioCheck,
  RadioItem,
  RadioItemWrapper,
} from "../flight_booking/FlightBooking.style";
import SuccessPassengerDetail from "./component/passenger_detail/SucessPassengerDetail";
import {
  FlightDetailWrapper,
  TripAirport,
  TripDetailBody,
  TripDetailClass,
  TripDetailTile,
  TripDetailTime,
  TripHour,
} from "../flight_result/trip_info/TripInfo.style";
import TripFare from "./trip_fare/TripFare";
import {
  HotelContentWrapper,
  Section,
  SpaceBetweenContent,
} from "../../hotel/hotel_booking/HotelBooking.style";
import HotelCard from "../../../components/hotel_components/hotel_card/HotelCard";
import { hotelList } from "../../../data/object/hotelList";
import iataAirports from "../../../flightDB/IATA_airports.json";
import { useAuthStore } from "../../../store/store";

export default function FlightFlightSuccess() {
  const {
    getCreatedIssuanceBooked,
    // , calculateAgeCategory
  } = useAuthStore();
  const navigate = useNavigate();
  const { orderID } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Click to copy text
  const [bookId, setBookId] = useState("240727041354");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(bookId)
      .then(() => {
        alert("Booking ID copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  const filterIataAirport = (iataCode) => {
    const newFilterData = iataAirports.find((item) => {
      return (
        item.IATA && item.IATA.toLowerCase().includes(iataCode.toLowerCase())
      );
    });

    return newFilterData;
  };
  // Cacula for duration
  function parseDuration(duration) {
    if (!duration) return { hours: 0, minutes: 0 };
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

  const calculateAgeCategory = (birthdate) => {
    const birthDate = new Date(birthdate + "T00:00:00"); // Ensures UTC parsing
    const today = new Date();

    if (birthDate > today) return "Invalid birthdate"; // Handles future birthdates

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (age <= 1) return `Infant`;
    if (age <= 12) return `Child`;
    return `Adult`;
  };

  const handlePrint = () => {
    const printContent = document.getElementById("printable-div");
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
  };

  useEffect(() => {
    const fetchIssuance = async () => {
      try {
        const bookingId = "your-booking-id"; // Replace with dynamic ID if needed
        // console.log(orderID);
        const response = await getCreatedIssuanceBooked(orderID);

        if (response?.error) {
          throw new Error(`Error: ${response.error}`);
        }

        const result = response;
        console.log(result);
        setBookId(result?.FlightBooked?.id);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssuance();
  }, [orderID]);

  let getTNum = data?.FlightBooked?.tickets;
  let flight = data?.FlightBooked?.flightOffers[0];
  let bookingDate = new Date(data?.createdAt).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  console.log(flight);

  let DepartName;
  let DepartCode;
  let DepartFullTimeAndDate;
  let CCode;
  let DepartCarrierName;
  let DepartStartTime;
  let DepartEndTime;
  let DepartPeriodOfHours;
  let DepartStops;

  // // Return
  let cCode;
  let ReturnCarrierName;
  let ReturnFullTimeAndDate;
  let ReturnCode;
  let ReturnName;
  let ReturnStartTime;
  let ReturnEndTime;
  let ReturnPeriodOfHours;
  let ReturnStops;

  if (data?.FlightBooked) {
    // Depart
    DepartName = data?.littelFlightInfo?.[0].from;
    DepartCode = data?.littelFlightInfo?.[0].originLocationCode;
    DepartFullTimeAndDate = new Date(
      flight?.itineraries?.[0]?.segments?.[0]?.departure?.at
    ).toLocaleString("en-US", {
      weekday: "long",
      month: "long",

      day: "numeric",
      year: "numeric",
    });
    CCode = flight?.itineraries?.[0]?.segments?.[0]?.operating?.carrierCode
      ? flight?.itineraries?.[0]?.segments?.[0]?.operating?.carrierCode
      : flight?.itineraries?.[0]?.segments?.[0]?.carrierCode;
    DepartCarrierName =
      flight?.itineraries?.[0]?.segments?.[0] &&
      data?.littelFlightInfo?.[0].dictionaries.carriers[CCode];
    DepartStartTime = new Date(
      flight?.itineraries?.[0]?.segments?.[0]?.departure?.at
    ).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    DepartEndTime = new Date(
      flight?.itineraries?.[0]?.segments?.[0]?.arrival.at
    ).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    DepartPeriodOfHours = `${
      parseDuration(flight?.itineraries?.[0]?.segments?.[0]?.duration).hours
    }hr ${
      parseDuration(flight?.itineraries?.[0]?.segments?.[0]?.duration).minutes
    }min`;
    DepartStops = flight?.itineraries?.[0]?.segments?.[0]?.numberOfStops;

    // // Return
    cCode = flight?.itineraries[1]?.segments[0]?.operating?.carrierCode
      ? flight?.itineraries[1]?.segments[0]?.operating?.carrierCode
      : flight?.itineraries[1]?.segments[0]?.carrierCode;
    ReturnCarrierName =
      flight?.itineraries[1]?.segments[0] &&
      data?.littelFlightInfo?.[0].dictionaries.carriers[cCode];
    ReturnFullTimeAndDate = new Date(
      flight?.itineraries[1]?.segments[0]?.departure?.at
    ).toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    ReturnCode = data?.littelFlightInfo?.[0].destinationLocationCode;
    ReturnName = data?.littelFlightInfo?.[0].to;
    ReturnStartTime = new Date(
      flight?.itineraries[1]?.segments[0]?.departure?.at
    ).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    ReturnEndTime = new Date(
      flight.itineraries[1].segments[0].arrival.at
    ).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    ReturnPeriodOfHours = `${
      parseDuration(flight?.itineraries[1]?.segments[0]?.duration).hours
    }hr ${
      parseDuration(flight?.itineraries[1]?.segments[0]?.duration).minutes
    }min`;
    ReturnStops = flight?.itineraries[1]?.segments[0]?.numberOfStops;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <FlightSuccessWrapper>
      {/* Header */}
      <FlightSuccessHeader>
        <Button text={"Home"} onClick={() => navigate("/")} />
      </FlightSuccessHeader>

      {/* Body */}
      {/* Main Content */}
      <FlightSuccessBody>
        <FlightSuccessContent>
          <SuccessWrapper>
            <MarkIcon>
              <IoMdCheckmark />
            </MarkIcon>
            <h2>Great Job! your have been successfully booked </h2>
            <p>
              Your booking has been placed successfully. we will send you a
              confirmation <br />
              email with your booking details
            </p>
            <BookingId>
              <span>
                Booking ID: <b>{bookId}</b>{" "}
              </span>{" "}
              <div onClick={copyToClipboard}>Copy</div>
            </BookingId>
            {/* {data?.FlightBooked?.tickets.map((data, index) => ( */}
            <BookingId>
              <span>
                Order ID: <b>{data?._id}</b>{" "}
              </span>{" "}
              <div onClick={copyToClipboard}>Copy</div>
            </BookingId>
            {/* ))} */}

            <PaymentStatusContent>
              <div>
                <span>PAYMENT STATUS:</span>
                <b>N/A</b>
              </div>
              <div>
                <span>BOOKING REFERENCE:</span>
                <b>{data?.FlightBooked?.associatedRecords?.[0]?.reference}</b>
              </div>
              <div>
                <span>BOOKING DATE:</span>
                <b>{bookingDate}</b>
              </div>
            </PaymentStatusContent>
          </SuccessWrapper>
        </FlightSuccessContent>

        <FlightSuccessContent id="printable-div">
          {/* Passagner detail */}
          <h3>Passenger Detail</h3>
          <HRStyled />
          {/* Adult */}
          {data?.travelers?.map((data, index) => (
            <>
              <SuccessPassengerDetail
                key={index}
                title={`${calculateAgeCategory(data?.dateOfBirth)}`}
                passengerName={`${data?.name?.firstName}`}
                passportName={data?.name?.lastName}
                tickets={getTNum?.[index]?.documentNumber}
                airlinePNR={""}
                nationality={"Nigeria"}
                gender={data?.gender}
                dob={data?.dateOfBirth}
                passportNumber={""}
                phoneNumber={data?.contact?.phones?.[0].number}
                emailAddress={data?.contact?.emailAddress}
              />
              <HRStyled />
            </>
          ))}

          <h3>Flight Detail</h3>

          <FlightDetailWrapper>
            {/* title */}
            <TripDetailTile>
              <span>
                {" "}
                <h2>{DepartName}</h2>{" "}
                <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />{" "}
                <h2>{ReturnName}</h2>{" "}
              </span>
              <span>
                <p>{DepartFullTimeAndDate}</p>
                <p>
                  {DepartStops} Stops. {DepartPeriodOfHours}
                </p>
                <div>{/* <IoIosArrowDown /> */}</div>
              </span>
            </TripDetailTile>
            {/* body */}
            {flight?.itineraries?.[0]?.segments?.map((flightData, Index) => (
              <TripDetailBody>
                <TripDetailClass>
                  <span>
                    <img
                      src={`https://images.wakanow.com/Images/flight-logos/${
                        flightData?.operating?.carrierCode
                          ? flightData?.operating?.carrierCode
                          : flightData?.carrierCode
                      }.gif`}
                      alt=""
                      srcset=""
                    />{" "}
                    <h4>
                      {flightData?.operating
                        ? data?.littelFlightInfo?.[0].dictionaries.carriers[
                            flightData?.operating?.carrierCode
                          ]
                        : data?.littelFlightInfo?.[0].dictionaries.carriers[
                            flightData?.carrierCode
                          ]}
                    </h4>{" "}
                    <p>.</p>{" "}
                  </span>
                  <span>
                    <a href="#">Economy</a>
                  </span>
                </TripDetailClass>
                <TripDetailTime>
                  <TripHour>
                    <span>
                      <div>
                        <h4>
                          {new Date(
                            flightData?.departure?.at
                          ).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </h4>
                        <h4>
                          {new Date(flightData?.arrival?.at).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </h4>
                      </div>
                      <div>
                        <hr />
                        <FlightIcon rotate={"180deg"} iconColor={"#0D3984"} />
                        <hr />
                      </div>
                    </span>
                  </TripHour>
                  <TripAirport>
                    <div>
                      <p>
                        <b>({flightData?.departure?.iataCode}) </b>
                        {` ${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.departure?.iataCode)
                            ?.Location_served
                        }`}
                      </p>
                      <p>1h 15m</p>
                      <p>
                        <b>({flightData?.arrival?.iataCode})</b>
                        {`${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Airport_name
                        },  ${
                          filterIataAirport(flightData?.arrival?.iataCode)
                            ?.Location_served
                        }`}
                      </p>
                    </div>
                    <div>
                      <span>
                        <h4>BAGGAGE:</h4> <p>ADULT</p>
                      </span>
                      <span>
                        <h4>CHECK IN:</h4> <p>20KG</p>{" "}
                      </span>
                    </div>
                  </TripAirport>
                </TripDetailTime>
              </TripDetailBody>
            ))}
          </FlightDetailWrapper>

          {/* for flight Return */}
          {/* Flight Detail section */}
          <FlightDetailWrapper>
            {/* title */}
            <TripDetailTile>
              <span>
                {" "}
                <h2>{ReturnName}</h2>{" "}
                <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />{" "}
                <h2>{DepartName}</h2>{" "}
              </span>
              <span>
                <p>{ReturnFullTimeAndDate}</p>
                <p>
                  {ReturnStops} Stops. {ReturnPeriodOfHours}
                </p>

                <div>{/* <IoIosArrowDown /> */}</div>
              </span>
            </TripDetailTile>
            {/* body */}

            <TripDetailBody>
              <TripDetailClass>
                <span>
                  <img
                    src={`https://images.wakanow.com/Images/flight-logos/${
                      flight?.itineraries?.[1]?.segments?.[0]?.operating
                        ?.carrierCode
                        ? flight?.itineraries?.[1]?.segments?.[0]?.operating
                            ?.carrierCode
                        : flight?.itineraries?.[1]?.segments?.[0]?.carrierCode
                    }.gif`}
                    alt=""
                    srcset=""
                  />{" "}
                  <h4>{ReturnCarrierName}</h4> <p>.</p>{" "}
                </span>
                <span>
                  <a href="#">Economy</a>
                </span>
              </TripDetailClass>
              <TripDetailTime>
                <TripHour>
                  <span>
                    <div>
                      <h4>{ReturnStartTime}</h4>
                      <h4>{ReturnEndTime}</h4>
                    </div>
                    <div>
                      <hr />
                      <FlightIcon rotate={"360deg"} iconColor={"#FF6805"} />
                      <hr />
                    </div>
                  </span>
                </TripHour>
                <TripAirport>
                  <div>
                    <p>
                      <b>({ReturnCode}) </b> {ReturnName}
                    </p>
                    <p>1h 15m</p>
                    <p>
                      <b>({DepartCode})</b> {DepartName}
                    </p>
                  </div>
                  <div>
                    <span>
                      <h4>BAGGAGE:</h4> <p>ADULT</p>
                    </span>
                    <span>
                      <h4>CHECK IN:</h4> <p>20KG</p>{" "}
                    </span>
                  </div>
                </TripAirport>
              </TripDetailTime>
            </TripDetailBody>
          </FlightDetailWrapper>

          {/* Trip Total Price */}
          <HRStyled />
          <TripFare
            price={flight?.price}
            children={data?.littelFlightInfo?.[0]?.children}
            adults={data?.littelFlightInfo?.[0]?.adults}
            infants={data?.littelFlightInfo?.[0]?.infants}
          />
          <HRStyled />
          <ContactDetail>
            <span>Hotline: 02013438157, 07009252669</span>
            <span>Mobile: 02013438157, 07009252669</span>
            <span>Email: info@manzotravel.com</span>
          </ContactDetail>
        </FlightSuccessContent>
        {/* Print Button */}
        <ButtonWrapper>
          <Button onClick={handlePrint} text={"Print Booking"} />
        </ButtonWrapper>

        {/* Add hotel reservation */}
        {/* List of Hotels */}
        <FlightSuccessContent>
          <Section>
            <SpaceBetweenContent>
              <h2>Include Hotel Reservation in your Trip</h2>{" "}
              <a href="/hotel-reservation">Make Reservation</a>
            </SpaceBetweenContent>
            <HotelContentWrapper>
              {hotelList.slice(0, 3)?.map((item, i) => (
                <HotelCard
                  key={i}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  subTitle={item.subTitle}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  price={item.price}
                />
              ))}
            </HotelContentWrapper>
          </Section>
        </FlightSuccessContent>
      </FlightSuccessBody>
    </FlightSuccessWrapper>
  );
}
