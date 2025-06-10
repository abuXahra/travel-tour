import React, { useRef, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Overlay from "../../overlay/Overlay";
import {
  Arrow,
  ArrowButton,
  CellHeader,
  Container,
  DateBox,
  DateCell,
  DateTable,
  DateText,
  Fare,
  HeaderRow,
  NavButton,
  Price,
  PriceCell,
  Row,
  ScrollableContent,
  ScrollContainer,
  Spacer,
  StickyCol,
  TableContainer,
  TableStyle,
  TableWrapper,
  Wrapper,
} from "./FlexibleCalender.style";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const arriveDates = [
  "29 Jul, Tue",
  "30 Jul, Wed",
  "31 Jul, Thu",
  "01 Aug, Fri",
  "02 Aug, Sat",
  "03 Aug, Sun",
  "04 Aug, Mon",
];

// Helper: generate ±3 day range
const getFlexibleDates = (centerDateStr) => {
  // console.log("jokl", centerDateStr);
  if (centerDateStr === undefined) return [];
  const base = new Date(centerDateStr);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(base);
    d.setDate(d.getDate() + i - 3);
    return d.toISOString().split("T")[0];
  });
};

// Extract price map from JSON-like flight data
const extractPriceMap = (flightData) => {
  const map = {};
  flightData?.forEach((offer) => {
    const itineraries = offer?.itineraries;
    if (itineraries?.length !== 2) return;

    const depDate = itineraries[0].segments[0].departure.at.slice(0, 10);
    const retDate = itineraries[1].segments[0].departure.at.slice(0, 10);
    const price = parseFloat(offer.price.total);
    const key = `${depDate}|${retDate}`;
    map[key] = price;
  });
  return map;
};

export default function FlexibleCalender({
  overlayButtonClick,
  closeOverlayOnClick,
  selectedDepartureDate,
  selectedReturnDate,
  flightData,
}) {
  const departureDates = getFlexibleDates(selectedDepartureDate);
  const returnDates = getFlexibleDates(selectedReturnDate);
  const priceMap = extractPriceMap(flightData);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString(undefined, {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });

  const scrollRef = useRef(null);

  const COLUMN_WIDTH = 120; // px — must match your styled-components

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -COLUMN_WIDTH : COLUMN_WIDTH,
        behavior: "smooth",
      });
    }
  };

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [fare, setFare] = useState("");

  //   handle selected date data
  const handleClick = (flightDeparture, flightArrival, flightFare) => {
    setDeparture(flightDeparture);
    setArrival(flightArrival);
    setFare(flightFare);
    overlayButtonClick();
    console.log(
      "Depart:",
      flightDeparture,
      "Arrive:",
      flightArrival,
      "Price:",
      flightFare
    );
  };

  return (
    <Overlay
      btnDisplay1={"none"}
      btnDisplay2={"none"}
      text1={"Continue"}
      contentWidth={"70%"}
      overlayButtonClick={overlayButtonClick}
      closeOverlayOnClick={closeOverlayOnClick}
    >
      <TableWrapper>
        {/* <h5>Price Matrix</h5> */}
        <NavButton onClick={() => scroll("left")}>
          {<FaLongArrowAltLeft />}
        </NavButton>
        <NavButton onClick={() => scroll("right")}>
          {<FaLongArrowAltRight />}
        </NavButton>

        <TableContainer>
          <StickyCol>
            <table>
              <thead>
                <tr>
                  <th>Flight Dates</th>
                </tr>
              </thead>
              <tbody>
                {departureDates.map((dep, idx) => (
                  <tr key={idx}>
                    <th key={dep} className="border px-2 py-1 bg-gray-100">
                      {formatDate(dep)}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </StickyCol>

          <ScrollableContent ref={scrollRef}>
            <TableStyle>
              <thead>
                <tr>
                  {returnDates?.map((date, idx) => (
                    <th key={idx}>
                      <div
                        key={date}
                        style={{
                          display: "flex",
                          fontSize: "13px",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <span>{formatDate(date)}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {departureDates.map((dep, rowIdx) => (
                  <tr key={rowIdx}>
                    {returnDates.map((ret) => {
                      const key = `${dep}|${ret}`;
                      const price = priceMap[key];
                      return (
                        <td
                        // key={colIdx}
                        // onClick={() =>handleClick(
                        // row.departDate,
                        // arriveDates[colIdx],
                        // price
                        //   )}
                        >
                          {price ? `₦${price.toLocaleString()}` : "-"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </TableStyle>
          </ScrollableContent>
        </TableContainer>
      </TableWrapper>
    </Overlay>
  );
}
