import React, { useState } from 'react'
import { FlightFareBody, FlightFareHeader, FlightFareItem, FlightFareWrapper } from './FlightFare.style'

export default function FlightFare() {

  const FlightFareItems = [
    { title: "Cheapest Flight", price: "₦1,001,312" },  
    { title: "Fastest Flight", price: "₦1,001,312" },
    { title: "Recommended Fare", price: "₦1,001,312" },
  ]

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleFareClick = (index) => {
    setSelectedIndex(index);
  }

  return (
    <FlightFareWrapper>
      <FlightFareHeader>
        <h5>Round Trip Flights</h5>
        <span>Reserve Now to secure the best price</span>
      </FlightFareHeader> 
      
      <FlightFareBody>
        {FlightFareItems.map((data, i) => (
          <FlightFareItem
            key={i}
            onClick={() => handleFareClick(i)}
            isSelected={i === selectedIndex}
          >
            <h6>{data.title}</h6>  
            <span>{data.price}</span>
          </FlightFareItem>
        ))}
      </FlightFareBody>
    </FlightFareWrapper>
  )
}
