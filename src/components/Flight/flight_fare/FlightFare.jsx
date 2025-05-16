import React, { useEffect, useState } from "react";
import {
  FlightFareBody,
  FlightFareHeader,
  FlightFareItem,
  FlightFareWrapper,
} from "./FlightFare.style";

const parseDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?/);
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  return hours * 60 + minutes;
};
export default function FlightFare({ flightSearchResultData, onFlightSelect }) {
  const [summary, setSummary] = useState({
    cheapest: null,
    fastest: null,
    recommended: null,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [reorderedFlights, setReorderedFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  useEffect(() => {
    if (!flightSearchResultData || flightSearchResultData.length === 0) return;

    let cheapest = null;
    let fastest = null;

    flightSearchResultData.forEach((flight) => {
      const totalPrice = parseFloat(flight.price.total);
      const totalDuration = flight.itineraries.reduce(
        (acc, itin) => acc + parseDuration(itin.duration),
        0
      );

      if (!cheapest || totalPrice < cheapest.price) {
        cheapest = { price: totalPrice, flight };
      }

      if (!fastest || totalDuration < fastest.duration) {
        fastest = { duration: totalDuration, price: totalPrice, flight };
      }
    });

    const recommended = cheapest; // You can customize this logic

    setSummary({
      cheapest,
      fastest,
      recommended,
    });

    // Default selection
    const initialSelectedFlight = [cheapest, fastest, recommended][
      selectedIndex
    ]?.flight;
    setSelectedFlight(initialSelectedFlight);
  }, [flightSearchResultData]);

  const handleFareClick = (index) => {
    setSelectedIndex(index);

    const key = ["cheapest", "fastest", "recommended"][index];
    const flight = summary[key]?.flight;

    setSelectedFlight(flight);

    // Move selected flight to the top
    const reordered = [
      flight,
      ...flightSearchResultData.filter((f) => f !== flight),
    ];
    setReorderedFlights(reordered);

    if (onFlightSelect && flight) {
      onFlightSelect(reordered);
    }
  };

  return (
    <FlightFareWrapper>
      <FlightFareHeader>
        <h5>Round Trip Flights</h5>
        <span>Reserve Now to secure the best price</span>
      </FlightFareHeader>

      <FlightFareBody>
        {["Cheapest Flight", "Fastest Flight", "Recommended Fare"].map(
          (label, i) => {
            const key = label.toLowerCase().includes("cheapest")
              ? "cheapest"
              : label.toLowerCase().includes("fastest")
              ? "fastest"
              : "recommended";

            return (
              <FlightFareItem
                key={i}
                onClick={() => handleFareClick(i)}
                isSelected={i === selectedIndex}
              >
                <h6>{label}</h6>
                <span>
                  {summary[key]?.price
                    ? `₦${summary[key].price.toLocaleString()}`
                    : "Loading..."}
                </span>
              </FlightFareItem>
            );
          }
        )}
      </FlightFareBody>
    </FlightFareWrapper>
  );
}
