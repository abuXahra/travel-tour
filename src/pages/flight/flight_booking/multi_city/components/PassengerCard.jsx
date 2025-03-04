import React, { useState } from "react";
import {
  MulitPassengerWrapper,
  MultiFlightPassengerClass,
  MultiFlightPassengerContent,
  MultiFlightPassengerWrapper,
  MultiPassengerContainer,
  PassengerContent,
  PassengerWrapper,
} from "./MultiCityInput.style";
import Button from "../../../../../components/button/Button";
import { IoMdArrowDropdown } from "react-icons/io";
import PassengerData from "../../../../../components/booking_icons/passenger_data/PassengerData";

export default function PassengerCard({
  totalPassenger,
  adultCount,
  handleAdultReduce,
  handleAdultAdd,
  childrenCount,
  handleChildrenReduce,
  handleChildrenAdd,
  infantCount,
  handleInfantReduce,
  // classSelectV,
  // classSelectF,
  handleInfantAdd,
  containerContent,
  pWidth,
}) {
  const [showPassenger, setShowPassenger] = useState(false);
  return (
    <>
      {/* Flight Type Radio button*/}
      <PassengerWrapper>
        <PassengerContent>
          <MultiFlightPassengerWrapper>
            <MultiPassengerContainer pWidth={pWidth}>
              <MultiFlightPassengerClass
                onClick={() => setShowPassenger(!showPassenger)}
              >
                <span>
                  {totalPassenger}{" "}
                  {totalPassenger === 1 ? "Passenger" : "Passengers"}
                </span>{" "}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </MultiFlightPassengerClass>
              {/* Passengers */}{" "}
              {showPassenger && (
                <MultiFlightPassengerContent>
                  <MulitPassengerWrapper>
                    <h3>Passengers</h3>
                    {/* <!-- number of adults --> */}
                    <PassengerData
                      title={"Adults"}
                      Subtitle={"12y and up"}
                      value={adultCount}
                      reduceFunc={handleAdultReduce}
                      addFunc={handleAdultAdd}
                    />

                    {/* <!-- number of children --> */}
                    <PassengerData
                      title={"Children"}
                      Subtitle={"Ages (2y-11y)"}
                      value={childrenCount}
                      reduceFunc={handleChildrenReduce}
                      addFunc={handleChildrenAdd}
                    />

                    {/* <!-- number of Infants --> */}
                    <PassengerData
                      title={"Infants"}
                      Subtitle={"Below 2y"}
                      value={infantCount}
                      reduceFunc={handleInfantReduce}
                      addFunc={handleInfantAdd}
                    />

                    {/* Continue Button */}
                    <div>
                      <Button
                        text={"Continue"}
                        onClick={() => setShowPassenger(false)}
                      />
                    </div>
                  </MulitPassengerWrapper>
                </MultiFlightPassengerContent>
              )}
            </MultiPassengerContainer>
            <div>{containerContent}</div>
          </MultiFlightPassengerWrapper>
        </PassengerContent>
      </PassengerWrapper>
    </>
  );
}
