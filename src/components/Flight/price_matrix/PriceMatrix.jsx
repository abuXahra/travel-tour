import React, { useRef } from 'react'
import {
  TableWrapper,
  TableContainer,
  StickyCol,
  ScrollableContent,
  TableStyle,
  NavButton
} from './PriceMatrix.style'

import airfrance from '../../../images/logos/airfrance.gif'
import egyptair from '../../../images/logos/egypt_air.gif'
import emirate from '../../../images/logos/emirate_air.gif'
import royal from '../../../images/logos/royal_air.gif'
import BA from '../../../images/logos/BA.gif'
import ET from '../../../images/logos/ET.gif'
import QR from '../../../images/logos/QR.gif'
import TK from '../../../images/logos/TK.gif'
import VS from '../../../images/logos/VS.gif'
import MA from '../../../images/logos/multiple-airline.svg'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const headers = [
    {
        title: "Air France",
        logo: airfrance
    }, 
    {
        title: "Egypt Air",
        logo: egyptair
    }, 
    {
        title: "Emirate",
        logo: emirate
    }, 
    {
        title: "Royal air mac",
        logo: royal
    }, 
    {
        title: "British Air",
        logo: BA
    }, 
    {
        title: "Ethiopian Airline",
        logo: ET
    }, 
    {
        title: "Qatar Airways",
        logo: QR
    }, 
    {
        title: "Turkish Airline",
        logo: TK
    },
    {
        title: "Virgin Atlantic",
        logo: VS
    },
    {
        title: "Multiple",
        logo: MA
    }, 
    
]

export default function PriceMatrix() {

    const flightData = [
        {
          type: "Non stop",
          prices: ["₦2,001,312", "₦5,001,312", "₦1,001,312", "₦9,001,312", "₦2,001,312", "₦5,001,312", "₦1,001,312", "₦9,001,312", "₦1,001,312", "₦1,001,312"]
        },
        {
          type: "Stop 1",
          prices: ["₦2,001,312", "₦5,001,312", "₦1,001,312", "₦9,001,312", "₦2,001,312", "₦5,001,312", "₦1,001,312", "₦9,001,312", "₦1,001,312", "₦1,001,312"]
        },
        {
          type: "Stops 1+",
          prices: ["₦2,001,312", "₦5,001,312", "₦1,001,312", "₦9,001,312", "₦2,001,312", "₦5,001,312", "₦1,001,312", "₦9,001,312", "₦1,001,312", "₦1,001,312"]
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


  return (
    <TableWrapper>
      {/* <h5>Price Matrix</h5> */}
      <NavButton onClick={() => scroll('left')}>{<FaLongArrowAltLeft />}</NavButton>
      <NavButton onClick={() => scroll('right')}>{<FaLongArrowAltRight />}</NavButton>

      <TableContainer>
        <StickyCol>
          <table>
          <thead>
            <tr><th>FLIGHTS</th></tr>
            </thead>
            <tbody>
            {flightData.map((row, idx) => (
                <tr key={idx}>
                    <td>{row.type}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </StickyCol>

        <ScrollableContent ref={scrollRef}>
          <TableStyle>
          <thead>
            <tr>
                {headers.map((data, idx) => (
                <th key={idx}>
                  <div style={{display:"flex", fontSize: "10px", flexDirection: "column", justifyContent: "center", alignItems:"center",}}>
                    <img src={data.logo} alt="" />
                    <span>{data.title}</span>
                    </div>  
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {flightData.map((row, rowIdx) => (
                <tr key={rowIdx}>
                {row.prices.map((price, colIdx) => (
                <td
                    key={colIdx}
                    onClick={() => console.log(`Clicked price: ${price}`)}
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
  )
}
