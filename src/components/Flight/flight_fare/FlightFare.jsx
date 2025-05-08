import React, { useState } from 'react'
import { FlightFareBody, FlightFareHeader, FlightFareItem, FlightFareWrapper } from './FlightFare.style'

export default function FlightFare() {

  const FlightFareItems = [
    {
      title: "Cheapest Flight",
      price: "₦1,001,312"
    },  
      {
      title: "Fastest Flight",
      price: "₦1,001,312"
    },
          {
      title: "Recommended Fare",
      price: "₦1,001,312"
    },
  ]

  const [bgColor, setBgColor] = useState("");
  const [bdBottom, setBdBottom] = useState("");

  const handleFarClick = (id) => {
    if (id === 0) {
      setBgColor("#0d398413");
      setBdBottom("2px solid #0D3984");
    }else if (id === 1) {
      setBgColor("#0d398413");
      setBdBottom("2px solid #0D3984");
    } if (id === 2) {
      setBgColor("#0d398413");
      setBdBottom("2px solid #0D3984");
    }else{
      setBgColor("");
      setBdBottom("");
    }
  }
  // #0d398413
  // 2px solid #0D3984
  return (
    <FlightFareWrapper>
        {/* Header */}
       <FlightFareHeader>
            <h5>{`Round Trip`} Flights</h5>
            <span>Reserve Now secure the best price</span>
       </FlightFareHeader> 
       {/* Body */}
       <FlightFareBody>
      { FlightFareItems.map((data , i)=>(
         <FlightFareItem 
            bgColor={bgColor} 
            bdBottom={bdBottom} 
            onClick={()=>handleFarClick(i)}>
                <h6>{data.title}</h6>  
                <span>{data.price}</span>
            </FlightFareItem>
      ))  }
       </FlightFareBody>
    </FlightFareWrapper>
  )
}
