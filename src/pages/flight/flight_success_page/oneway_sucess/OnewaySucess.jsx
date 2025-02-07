import React, { useEffect, useRef, useState } from "react";
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
} from "./OnewaySucess.style";
import Button from "../../../../components/button/Button";
import { useNavigate } from "react-router-dom";
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
import HotelCard from "../../../../components/hotel_components/hotel_card/HotelCard";
import AirlineFlightLogo from "../../../../components/Flight/AirlineFlightLogo";
import { hotelList } from "../../../../data/object/hotelList";
import { useAuthStore } from "../../../../store/store";
import axios from "axios";

export default function OnewaySucess() {
  const { oneWayFlightResult, travelDetail, oneWayFlightOrder } =
    useAuthStore();
  const navigate = useNavigate();

  // Click to copy text
  const [bookId, setBookId] = useState("240727041354");

  let FlightOrder;
  let travels;
  let FlightResult;

  if (oneWayFlightOrder) {
    FlightOrder = oneWayFlightOrder?.flightOffers[0];
    travels = travelDetail;
    FlightResult = oneWayFlightResult;
  }
  useEffect(() => {
    console.log(oneWayFlightOrder);

    setBookId(oneWayFlightOrder?.id);
  }, [oneWayFlightOrder]);

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

  const handlePrint = () => {
    const printContent = document.getElementById("printable-div");
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
  };
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

            <PaymentStatusContent>
              <div>
                <span>PAYMENT STATUS:</span>
                <b>N/A</b>
              </div>
              <div>
                <span>BOOKING REFERENCE:</span>
                <b>{oneWayFlightOrder?.associatedRecords[0]?.reference}</b>
              </div>
              <div>
                <span>BOOKING DATE:</span>
                <b>{Date()}</b>
              </div>
            </PaymentStatusContent>
          </SuccessWrapper>
        </FlightSuccessContent>

        <FlightSuccessContent id="printable-div">
          {/* Passagner detail */}
          <h3>Passenger Detail</h3>
          <HRStyled />
          {/* Adult */}
          <SuccessPassengerDetail
            title={"Adult"}
            passengerName={"Isah Yusuf"}
            passportName={"Isah Yusuf"}
            tickets={""}
            airlinePNR={""}
            nationality={"Nigeria"}
            gender={"male"}
            dob={"08/18/1989"}
            passportNumber={"jdjd47474994uc"}
            phoneNumber={"+234 8135701458"}
            emailAddress={"isahyusuf@gmail.com"}
          />
          <HRStyled />

          {/* child */}
          <SuccessPassengerDetail
            title={"Child"}
            passengerName={"Amjad Yusuf"}
            passportName={"Amjad Yusuf"}
            tickets={""}
            airlinePNR={""}
            nationality={"Nigeria"}
            gender={"male"}
            dob={"08/18/1989"}
            passportNumber={"jdjd47474994uc"}
            phoneNumber={"+234 8135701458"}
            emailAddress={"isahyusuf@gmail.com"}
          />

          <HRStyled />
          {/* infant */}
          <SuccessPassengerDetail
            title={"Infant"}
            passengerName={"Muiz Yusuf"}
            passportName={"Muiz Yusuf"}
            tickets={""}
            airlinePNR={""}
            nationality={"Nigeria"}
            gender={"male"}
            dob={"08/18/1989"}
            passportNumber={"jdjd47474994uc"}
            phoneNumber={"+234 8135701458"}
            emailAddress={"isahyusuf79@gmail.com"}
          />

          <HRStyled />

          <h3>Flight Detail</h3>
          {/* First Departure */}
          <FlightDetailWrapper>
            {/* title */}
            <TripDetailTile>
              <span>
                {" "}
                <h2>{FlightResult[0]}</h2>{" "}
                <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />{" "}
                <h2>{FlightResult[1]}</h2>{" "}
              </span>
              <span>
                <p>
                  {" "}
                  {new Date(
                    FlightOrder.itineraries[0].segments[0].departure.at
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>
                  {" "}
                  {
                    FlightOrder.itineraries[0].segments[0].numberOfStops
                  } Stops.{" "}
                  {`${
                    parseDuration(
                      FlightOrder.itineraries[0].segments[0].duration
                    ).hours
                  }hr ${
                    parseDuration(
                      FlightOrder.itineraries[0].segments[0].duration
                    ).minutes
                  }min`}
                </p>
                <div>{/* <IoIosArrowDown /> */}</div>
              </span>
            </TripDetailTile>
            {/* body */}

            <TripDetailBody>
              <TripDetailClass>
                <span>
                  <AirlineFlightLogo
                    keyWord={FlightOrder.validatingAirlineCodes[0]}
                    detail={true}
                  />
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
                          FlightOrder.itineraries[0].segments[0].departure.at
                        ).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </h4>
                      <h4>
                        {" "}
                        {new Date(
                          FlightOrder.itineraries[0].segments[0].arrival.at
                        ).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
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
                      {FlightResult[0]} <b>({FlightResult[3]})</b>
                    </p>
                    <p>{`${
                      parseDuration(
                        FlightOrder.itineraries[0].segments[0].duration
                      ).hours
                    }hr ${
                      parseDuration(
                        FlightOrder.itineraries[0].segments[0].duration
                      ).minutes
                    }min`}</p>
                    <p>
                      {FlightResult[1]} <b>({FlightResult[4]})</b>
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
          <TripFare />
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
