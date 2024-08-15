import React from 'react'
import { HRStyled } from '../FlightSuccess.style'
import { TripFareWrapper } from './TripFare.style'

export default function TripFare() {
  return (
    <TripFareWrapper>
       <h3>Flight Fee</h3>
     <div>
        <h4>Base Fee</h4>
        {/* Base Fee */}
        <div>
            <span>Adult(1)</span>
            <span>270,000</span>
        </div>
        <div>
            <span>Children(1)</span>
            <span></span>
        </div>
        <div>
            <span>Infant(1)</span>
            <span></span>
        </div>
     </div>

{/* Addons */}
     <div>
        <h5>Manzo Essential Addons</h5>
        <div>
            <span>Airport lounge (Lagos & Abuja only), Abuja</span>
            <span>N20,000</span>
        </div>
        <div>
            <span>Manzo Protocol Service (Lagos & Abuja Only), Lagos</span>
            <span>N20,000</span>
        </div>
     </div>
     <HRStyled lineWidth={'50%'} />
     {/* Total Price */}
     <div>
        <div>
            <span><h2>Total Price</h2></span>
            <span><h2>N310,000</h2></span>
        </div>
     </div> 
    </TripFareWrapper>
  )
}
