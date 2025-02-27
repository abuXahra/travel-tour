import React from "react";
import {
  PassengerContent,
  PassengerDetail,
  PassengerWrapper,
} from "./SuccessPassengerDetail";

export default function SuccessPassengerDetail({
  title,
  passengerName,
  passportName,
  tickets,
  airlinePNR,
  nationality,
  gender,
  dob,
  passportNumber,
  phoneNumber,
  emailAddress,
}) {
  return (
    <PassengerDetail>
      <PassengerWrapper>
        <h4>{title}</h4>

        <PassengerContent>
          <div>
            <div>
              <span>Passenger FName LName</span>
              <span>
                <b>{passengerName}</b>
              </span>
            </div>
            <div>
              <span>Passport MName</span>
              <span>
                <b>{passportName}</b>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>Tickets</span>
              <span>
                <b>{tickets}</b>
              </span>
            </div>
            <div>
              <span>Airline PNR</span>
              <span>
                <b>{airlinePNR}</b>
              </span>
            </div>
          </div>
        </PassengerContent>
        <PassengerContent>
          <div>
            <div>
              <span>Nationality</span>
              <span>
                <b>{nationality}</b>
              </span>
            </div>
            <div>
              <span>Gender</span>
              <span>
                <b>{gender}</b>
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>Date of Birth</span>
              <span>
                <b>{dob}</b>
              </span>
            </div>
            <div>
              <span>Passport Number</span>
              <span>
                <b>{passportNumber}</b>
              </span>
            </div>
          </div>
        </PassengerContent>

        <PassengerContent>
          <div>
            <div>
              <span>Phone Number</span>
              <span>
                <b>{phoneNumber}</b>
              </span>
            </div>
            <div>
              <span>Email Address</span>
              <span>
                <b>{emailAddress}</b>
              </span>
            </div>
          </div>
          <div>
            <div>
              {/* <span>Date of Birth</span>
          <span><b>{dob}</b></span> */}
            </div>
            <div>
              {/* <span>Passport Number</span>
          <span><b>{passportNumber}</b></span> */}
            </div>
          </div>
        </PassengerContent>
      </PassengerWrapper>
    </PassengerDetail>
  );
}
