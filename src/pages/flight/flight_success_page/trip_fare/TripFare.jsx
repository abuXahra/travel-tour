import React from "react";
import { HRStyled } from "../FlightSuccess.style";
import { TripFareWrapper } from "./TripFare.style";

export default function TripFare({ price, children, adults, infants }) {
  const money = new Intl.NumberFormat("en-us", {
    currency: "NGN",
    style: "currency",
  });

  return (
    <TripFareWrapper>
      <h3>Flight Fee</h3>
      <div>
        <h4>Base Fee</h4>
        {/* Base Fee */}
        <div>
          <span>Adult({adults})</span>
          <span>{money.format(price?.base)}</span>
        </div>
        <div>
          <span>Children({children})</span>
          <span></span>
        </div>
        <div>
          <span>Infant({infants})</span>
          <span></span>
        </div>
      </div>

      {/* Addons */}
      {/* <div>
        <h5>Manzo Essential Addons</h5>
        <div>
            <span>Airport lounge (Lagos & Abuja only), Abuja</span>
            <span>money.format(price?.base)</span>
        </div>
        <div>
            <span>Manzo Protocol Service (Lagos & Abuja Only), Lagos</span>
            <span>money.format(price?.base)</span>
        </div>
     </div> */}
      <HRStyled lineWidth={"50%"} />
      {/* Total Price */}
      <div>
        <div>
          <span>
            <h2>Total Price</h2>
          </span>
          <span>
            <h2>{money.format(price?.total)}</h2>
          </span>
        </div>
      </div>
    </TripFareWrapper>
  );
}
