
import React, { useRef, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Overlay from '../../overlay/Overlay'
import { Arrow, ArrowButton, CellHeader, Container, DateBox, DateCell, DateTable, DateText, Fare, HeaderRow, Price, PriceCell, Row, ScrollContainer, Spacer, Wrapper } from "./FlexibleCalender.style";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";





const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

export default function FlexibleCalender({overlayButtonClick, closeOverlayOnClick,  selectedDate, flightData}) {

    

      const scrollRef = useRef();

      const scroll = (direction) => {
        const distance = 152; // box width + gap * 4
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: direction * distance, behavior: 'smooth' });
        }
      };

      const [departure, setDeparture] = useState('')
      const [arrival, setArrival] = useState('')
      const [fare, setFare] = useState('')

    //   handle selected date data
    const handleClick = (flightDeparture, flightArrival, flightFare) => {
            setDeparture(flightDeparture)
            setArrival(flightArrival)
            setFare(flightFare)
      };

      console.log(departure, arrival, fare)
  return (
        <Overlay
              btnDisplay2={'none'}
              text1={'Continue'}
              contentWidth={'70%'}
              overlayButtonClick={overlayButtonClick}
              closeOverlayOnClick={closeOverlayOnClick}
              >
                <h3>Flexible Calender</h3>
                <hr />
                
                <Wrapper>
      <ArrowButton left onClick={() => scroll(-1)}>{<FaLongArrowAltLeft />}</ArrowButton>
      
      <ScrollContainer ref={scrollRef}>
        {flightData.map((flight, i) => {
          const isSelected = flight.departureDate === selectedDate;


          return (
            <DateBox key={i} selected={isSelected} onClick={()=>handleClick(flight.departureDate,  flight.arrivalDate, flight.fare)}>
              <div>{formatDate(flight.departureDate)}</div>
              <div><IoIosArrowRoundDown /></div> 
              <div>{formatDate(flight.arrivalDate)} </div>
              <div>{flight.fare}</div>
            </DateBox>
          );
        })}
      </ScrollContainer>
      <ArrowButton onClick={() => scroll(1)}>{<FaLongArrowAltRight />}</ArrowButton>
    </Wrapper>
 </Overlay>
  );
}
