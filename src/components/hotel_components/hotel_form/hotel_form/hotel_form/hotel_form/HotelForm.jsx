import React, { useState } from "react";
import {
  HotelInputAndDropDown,
  HotelInputContainer,
  HotelInputWrapper,
  Label,
  PassengerWrapper,
} from "./HotelForm.style";
import {
  FlightDepartWrapper,
  FlightDepatWrapContent,
  FlightPassengerClass,
  FlightPassengerContent,
  FlightPassengerWrapper,
  FormWrapper,
  TakeOffWrapper,
} from "../../../../../../pages/flight/flight_booking/FlightBooking.style";
import Button from "../../../../../button/Button";
import { HotelRoom } from "../../../../../../pages/hotel/hotel_booking/HotelBooking.style";
import PassengerData from "../../../../../booking_icons/passenger_data/PassengerData";
import LocationDropdown from "../../../../../booking_icons/location_dropdow/LocationDropdown";
import {
  MdFlightLand,
  MdFlightTakeoff,
  MdHotel,
  MdLocalHotel,
} from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function HotelForm({
  rounderBorder,
  handleShowHotelInputs,
  takeOff,
  handleDestination,
  showDestinationAirports,
  onChangeDestinationHandler,
  destinationAirportList,
  setDestinationLocationCode,
  searchDestinationInputValue,
  setTakeOff,
  onCloseDestinationDropdwon,
  showHotelInputs,
  handleCheckInDate,
  checkInDate,
  handleCheckOutDate,
  checkOutDate,
  setShowPassenger,
  showPassenger,
  adults,
  children,
  room,
  handleDecrement,
  handleIncrement,
  handleButtonClick,
  btnText,
  pd,
}) {
  return (
    <div>
      <div>
        <FormWrapper rounderBorder={rounderBorder} pd={pd}>
          {/* <!-- Depature and destination container --> */}

          <FlightDepartWrapper>
            <FlightDepatWrapContent>
              <HotelInputContainer>
                {/* takeoff input */}
                <HotelInputAndDropDown>
                  <HotelInputWrapper>
                    <div onClick={handleShowHotelInputs}>
                      <input
                        type="text"
                        placeholder="Where to?"
                        value={takeOff}
                        onChange={handleDestination}
                      />
                    </div>

                    <span>
                      <FaTimes />
                    </span>
                  </HotelInputWrapper>

                  {/* Hotel Destination Airport Dropdown*/}
                  {showDestinationAirports && (
                    <TakeOffWrapper>
                      <LocationDropdown
                        title="Popular destinations nearby"
                        onChange={onChangeDestinationHandler}
                        items={destinationAirportList}
                        setCityCode={setDestinationLocationCode}
                        searchInputValue={searchDestinationInputValue}
                        setAirportSelected={setTakeOff}
                        onCloseDropdwon={onCloseDestinationDropdwon}
                        Icon={<FaLocationDot />}
                      />
                    </TakeOffWrapper>
                  )}
                </HotelInputAndDropDown>
              </HotelInputContainer>
            </FlightDepatWrapContent>

            <FlightDepatWrapContent>
              <Label for="depart">Check In</Label>
              <input
                type="date"
                id="depart"
                onChange={handleCheckInDate}
                value={checkInDate}
              />
            </FlightDepatWrapContent>

            <FlightDepatWrapContent>
              <Label for="depart">Check Out</Label>
              <input
                type="date"
                id="return"
                onChange={handleCheckOutDate}
                value={checkOutDate}
              />
            </FlightDepatWrapContent>

            <FlightDepatWrapContent>
              <FlightPassengerWrapper>
                <FlightPassengerClass
                  onClick={() => setShowPassenger(!showPassenger)}
                >
                  <span>Passenger and Room</span>
                  <div>
                    <strong>
                      <span id="passengerValue">Adults {adults}</span> Child{" "}
                      {children} Room {room}{" "}
                    </strong>
                  </div>
                </FlightPassengerClass>
                {/* Passengers */}{" "}
                {showPassenger && (
                  <FlightPassengerContent>
                    <PassengerWrapper>
                      <HotelRoom>
                        <h3>Room 1</h3>

                        {/* NUMBER OF ROOM */}
                        <PassengerData
                          title={"Room"}
                          Subtitle={"Up to 4 Rooms"}
                          value={room}
                          reduceFunc={() => handleDecrement("room")}
                          addFunc={() => handleIncrement("room")}
                        />

                        {/* PASSENGERS */}
                        <PassengerData
                          title={"Adults"}
                          Subtitle={"12y and up"}
                          value={adults}
                          reduceFunc={() => handleDecrement("adults")}
                          addFunc={() => handleIncrement("adults")}
                        />

                        {/* <!-- number of children --> */}
                        <PassengerData
                          title={"Children"}
                          Subtitle={"Ages (2y-11y)"}
                          value={children}
                          reduceFunc={() => handleDecrement("children")}
                          addFunc={() => handleIncrement("children")}
                        />
                      </HotelRoom>

                      {/* Continue Button */}
                      <div>
                        <Button
                          text={"Continue"}
                          onClick={() => setShowPassenger(false)}
                        />
                      </div>
                    </PassengerWrapper>
                  </FlightPassengerContent>
                )}
              </FlightPassengerWrapper>
            </FlightDepatWrapContent>
            <div
              style={{
                backgroundColor: "#FF6805",
                display: "flex",
                height: "auto",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <Button
                onClick={handleButtonClick}
                text={btnText ? btnText : "Search"}
              />
            </div>
          </FlightDepartWrapper>
        </FormWrapper>
      </div>
    </div>
  );
}
