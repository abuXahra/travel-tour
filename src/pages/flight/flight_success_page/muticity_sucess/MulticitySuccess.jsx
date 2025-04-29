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
} from "./MulticitySuccess.style";
import Button from "../../../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import FlightIcon from "../../../../components/flight_icon/FlightIcon";
import flightLogo from "../../../../images/aire-peace.png";
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
} from "../../flight_booking/FlightBooking.style";
import SuccessPassengerDetail from "../component/passenger_detail/SucessPassengerDetail";
import {
  FlightDetailWrapper,
  TripAirport,
  TripDetailBody,
  TripDetailClass,
  TripDetailTile,
  TripDetailTime,
  TripHour,
} from "../../flight_result/trip_info/TripInfo.style";
import TripFare from "../trip_fare/TripFare";
import {
  HotelContentWrapper,
  Section,
  SpaceBetweenContent,
} from "../../../hotel/hotel_booking/HotelBooking.style";
import iataAirports from "../../../../flightDB/IATA_airports.json";
import HotelCard from "../../../../components/hotel_components/hotel_card/HotelCard";
import { hotelList } from "../../../../data/object/hotelList";
import { useAuthStore } from "../../../../store/store";

export default function MulticitySuccess() {
  const navigate = useNavigate();

  const { getCreatedIssuanceBooked } = useAuthStore();
  const { orderID } = useParams();

  // Click to copy text
  const [bookId, setBookId] = useState("240727041354");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const handlePrint = () => {
    const printContent = document.getElementById("printable-div");
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
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

  useEffect(() => {
    const fetchIssuance = async () => {
      try {
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
  let fInfo = data?.littelFlightInfo?.[0];
  let hrMin = `${parseDuration(data?.segments?.[0]?.duration).hours}hr ${
    parseDuration(data?.segments?.[0]?.duration).minutes
  }min`;

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
            <BookingId>
              <span>
                Order ID: <b>{data?._id}</b>{" "}
              </span>{" "}
              <div onClick={copyToClipboard}>Copy</div>
            </BookingId>

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
                <b>
                  {new Date(data?.createdAt).toLocaleString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </b>
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
          {/* First Departure */}
          {data?.FlightBooked?.flightOffers?.[0]?.itineraries?.map(
            (data, index) => (
              <FlightDetailWrapper>
                {/* title */}
                <TripDetailTile>
                  <span>
                    {" "}
                    <h2>{fInfo?.flightSearch?.[index]?.from}</h2>{" "}
                    <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />{" "}
                    <h2>{fInfo?.flightSearch?.[index]?.to}</h2>{" "}
                  </span>
                  <span>
                    <p>
                      {" "}
                      {new Date(
                        data?.segments?.[0]?.departure?.at
                      ).toLocaleString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>
                      {data?.segments[0]?.numberOfStops} Stops. {hrMin}
                    </p>
                    <div>{/* <IoIosArrowDown /> */}</div>
                  </span>
                </TripDetailTile>
                {/* body */}
                {data?.segments?.map((flightData, Index) => (
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
                          {" "}
                          {flightData?.operating
                            ? data?.littelFlightInfo?.[0].dictionaries.carriers[
                                flightData?.operating?.carrierCode
                              ]
                            : data?.littelFlightInfo?.[0].dictionaries.carriers[
                                flightData?.carrierCode
                              ]}
                        </h4>{" "}
                        <p>73G</p>{" "}
                      </span>
                      <span>
                        <a href="#">
                          {
                            data?.FlightBooked?.flightOffers?.[0]
                              ?.travelerPricings[0].fareDetailsBySegment[0]
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
                                flightData?.departure?.at
                              ).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </h4>
                            <h4>
                              {new Date(
                                flightData?.arrival?.at
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
            )
          )}

          {/* Trip Total Price */}
          <HRStyled />
          <TripFare
            price={data?.FlightBooked?.flightOffers?.[0]?.price}
            children={fInfo?.dictionaries?.children}
            adults={fInfo?.dictionaries?.adults}
            infants={fInfo?.dictionaries?.infants}
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
