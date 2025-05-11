
import React, { useRef, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import Overlay from '../../overlay/Overlay'
import { Arrow, ArrowButton, CellHeader, Container, DateBox, DateCell, DateTable, DateText, Fare, HeaderRow, NavButton, Price, PriceCell, Row, ScrollableContent, ScrollContainer, Spacer, StickyCol, TableContainer, TableStyle, TableWrapper, Wrapper } from "./FlexibleCalender.style";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";




const arriveDates = ["29 Jul, Tue", "30 Jul, Wed", "31 Jul, Thu", "01 Aug, Fri", "02 Aug, Sat", "03 Aug, Sun", "04 Aug, Mon"]



export default function FlexibleCalender({overlayButtonClick, closeOverlayOnClick}) {

    

      const flightDateData = [
              {
                departDate: "17 Jun, Tue",	
                prices: ["₦1,915,115", "₦1,939,674", "₦1,915,115", "₦1,939,67", "₦2,026,920", "₦1,958,735", "₦1,826,088"]
              },
              {
                departDate: "17 Jun, Tue",
                prices: ["₦1,915,115", "₦1,939,674",	"₦1,915,115",	"₦1,939,674",	"₦2,026,920",	"₦1,958,735",	"₦1,826,088"]
              },
              {
                departDate: "18 Jun, Wed",
                prices: ["₦1,827,869",	"₦2,003,182",	"₦1,827,869",	"₦2,003,182",	"₦1,924,987",	"₦2,003,182",	"₦1,738,841"]
              },
                  
                            {
                departDate: "19 Jun, Thu",
                prices: ["₦1,827,869", "₦1,939,674",	"₦1,827,869",	"₦1,939,674",	"₦2,026,920", "₦1,958,735",	"₦1,738,841"]
              },
                            {
                departDate: "20 Jun, Fri",
                prices: ["₦1,827,869",	"₦2,003,182",	"₦1,827,869",	"₦2,003,182",	"₦1,924,987",	"₦2,003,182",	"₦1,738,841"]
              },
                            {
                departDate: "21 Jun, Sat",
                prices: ["₦1,827,869",	"₦2,003,182",	"₦1,827,869",	"₦2,003,182",	"₦1,924,987",	"₦2,003,182",	"₦1,738,841"]
              },
              {
                departDate: "22 Jun, Sun",
                prices: ["₦1,827,869",	"₦2,003,182",	"₦1,827,869",	"₦2,003,182",	"₦1,924,987",	"₦2,003,182",	"₦1,738,841"]
              },
              {
                departDate: "23 Jun, Mon",
                prices: ["₦1,827,869",	"₦2,003,182",	"₦1,827,869",	"₦2,003,182",	"₦1,924,987",	"₦2,003,182",	"₦1,738,841"]
              }
            ]
      
      
           
      
     const scrollRef = useRef(null)
     
     const COLUMN_WIDTH = 120; // px — must match your styled-components
     
     const scroll = (direction) => {
       if (scrollRef.current) {
         scrollRef.current.scrollBy({
           left: direction === 'left' ? -COLUMN_WIDTH : COLUMN_WIDTH,
           behavior: 'smooth'
         });
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
            overlayButtonClick();
            console.log('Depart:', flightDeparture, 'Arrive:', flightArrival, 'Price:', flightFare);
      };

  return (
        <Overlay
              btnDisplay1={'none'}
              btnDisplay2={'none'}
              text1={'Continue'}
              contentWidth={'70%'}
              overlayButtonClick={overlayButtonClick}
              closeOverlayOnClick={closeOverlayOnClick}
              >
                      
<TableWrapper>
      {/* <h5>Price Matrix</h5> */}
      <NavButton onClick={() => scroll('left')}>{<FaLongArrowAltLeft />}</NavButton>
      <NavButton onClick={() => scroll('right')}>{<FaLongArrowAltRight />}</NavButton>

      <TableContainer>
        <StickyCol>
          <table>
          <thead>
            <tr><th>Flight Dates</th></tr>
            </thead>
            <tbody>
            {flightDateData.map((row, idx) => (
                <tr key={idx}>
                    <td>{row.departDate}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </StickyCol>

        <ScrollableContent ref={scrollRef}>
          <TableStyle>
                <thead>
                  <tr>
                      {arriveDates.map((data, idx) => (
                      <th key={idx}>
                        <div style={{display:"flex", fontSize: "13px", flexDirection: "column", justifyContent: "center", alignItems:"center",}}>
                          <span>{data}</span>
                          </div>  
                      </th>
                      ))}
                    </tr>
                </thead>
                <tbody>
                       {flightDateData.map((row, rowIdx) => (
                                  <tr key={rowIdx}>
                                  {row.prices.map((price, colIdx) => (
                                  <td
                                      key={colIdx}
                                      onClick={() =>handleClick(
                                      row.departDate,
                                      arriveDates[colIdx],
                                      price
                                    )}
                                  >
                                  {price}
                                  </td>
                                  ))}
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
