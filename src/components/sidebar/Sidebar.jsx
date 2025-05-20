import React, { useState, useEffect } from "react";
import {
  AirlineItems,
  AirlinePrice,
  AirlineTitle,
  AirlineWrapper,
  DepartureContent,
  DepartureItems,
  IconWrapper,
  ResultSidebar,
  ReturnContent,
  ReturnItems,
  ShowAll,
  SidebarItemHeader,
  SidebarItemWrapper,
  StopContent,
  StopItems,
} from "./Sidebar.style";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";
import { useAuthStore } from "../../store/store";

export default function Sidebar({
  Items,
  flightDepartItem,
  flightReturnItem,
  StopsItems,
  flightSearchResultData,
  dictionaries,
  onFilterChange,
}) {
  const { singleFlightResult } = useAuthStore();
  const [flightData, setFlightData] = useState([]);
  const [checkedAirlineItems, setCheckedAirlineItems] = useState({});
  const [selectedAirlines, setSelectedAirlines] = useState(new Set());
  const [selectedFlightData, setSelectedFlightData] = useState([]);
  const [selectedStops, setSelectedStops] = useState({});

  // depart time
  const [checkedDDepartTime, setCheckedDDepartTime] = useState({});
  const [checkedDArriveTime, setCheckedDDArriveTime] = useState({});
  // Return time
  const [checkedRDepartTime, setCheckedRDepartTime] = useState({});
  const [checkedRArriveTime, setCheckedRArriveTime] = useState({});
  // stops
  const [departStops, setDepartStops] = useState({});
  const [returnStops, setReturnStops] = useState({});

  // boolean
  const [showAll, setShowAll] = useState(false);
  const [showAirline, setShowAirline] = useState(true);
  const [showFlightTime, setShowFlightTime] = useState(false);
  const [showStops, setShowStops] = useState(true);

  const handleShows = (type) => {
    if (type === "show-airline") {
      setShowAirline(!showAirline);
    } else if (type === "show-time") {
      setShowFlightTime(!showFlightTime);
    } else if (type === "show-stops") {
      setShowStops(!showStops);
    }
  };

  const handleCheckboxChange = (index, type) => {
    if (type === "airline") {
      setCheckedAirlineItems((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else if (type === "d-depart-time") {
      setCheckedDDepartTime((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else if (type === "d-arrive-time") {
      setCheckedDDArriveTime((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else if (type === "r-depart-time") {
      setCheckedRDepartTime((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else if (type === "r-arrive-time") {
      setCheckedRArriveTime((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    } else if (type === "depart-stops") {
    } else if (type === "return-stops") {
      setReturnStops((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };
  const handleCheckboxChangeAirlines = (airline) => {
    setSelectedAirlines((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(airline)) {
        newSet.delete(airline);
      } else {
        newSet.add(airline);
      }
      return newSet;
    });
  };
  useEffect(() => {
    // if (flightData.length === 0) {
    //   setFlightData(flightSearchResultData);
    // }
    const filtered = flightSearchResultData?.filter(
      (item) =>
        selectedAirlines.size === 0 ||
        selectedAirlines.has(item.validatingAirlineCodes?.[0])
    );

    if (selectedAirlines.size === 0 && selectedFlightData.length === 0) {
      onFilterChange(singleFlightResult?.[2]); // 🔁 Send filtered data up);
    } else {
      onFilterChange(selectedFlightData.concat(filtered));
    }
  }, [selectedAirlines, onFilterChange, selectedFlightData]);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const uniqueItems = Array.from(
    new Map(
      flightSearchResultData?.map((item) => [
        item.validatingAirlineCodes?.[0],
        item,
      ])
    ).values()
  );

  const itemsToShow = showAll ? uniqueItems : uniqueItems.slice(0, 5);

  // ||
  const getTimeRange = (datetime) => {
    const hour = new Date(datetime).getHours();
    if (hour >= 0 && hour < 6) return "12:00 AM–5:59 AM";
    if (hour >= 12 && hour < 18) return "12:00 PM–5:59 PM";
    return "06:00 PM–11:59 PM";
  };

  const groupByTimeRange = (flights, direction, index) => {
    const groups = {};
    flights?.forEach((offer) => {
      offer?.itineraries.forEach((itinerary, i) => {
        itinerary?.segments?.forEach((segment) => {
          const time = segment[direction]?.at;
          if (!time) return;
          const range = getTimeRange(time);
          if (!groups[range]) groups[range] = [];
          groups[range].push({
            time,
            price: offer.price.grandTotal,
            currency: offer.price.currency,
          });
        });
      });
    });
    return groups;
  };

  const getStopFiltersForMultiCity = (data) => {
    const cityLegs = {}; // { "CDG → FRA": { 0: [], 1: [], many: [] }, ... }

    data?.forEach((offer) => {
      offer?.itineraries.forEach((itinerary, idx) => {
        if (!itinerary.segments.length) return;

        const from = itinerary.segments[0].departure.iataCode;
        const to =
          itinerary.segments[itinerary.segments.length - 1].arrival.iataCode;
        const key = `${from} → ${to}`;

        const stops = itinerary.segments.length - 1;
        if (!cityLegs[key]) {
          cityLegs[key] = { 0: [], 1: [], many: [] };
        }

        if (stops === 0) cityLegs[key][0].push(offer);
        else if (stops === 1) cityLegs[key][1].push(offer);
        else cityLegs[key].many.push(offer);
      });
    });

    // Format results with minimum price per stop group
    const result = {};
    for (const leg in cityLegs) {
      const getMinPrice = (offers) =>
        offers?.length
          ? Math.min(...offers?.map((o) => parseFloat(o.price.grandTotal)))
          : null;

      result[leg] = {
        "None Stop [0]": {
          price: getMinPrice(cityLegs[leg][0]),
          flight: cityLegs[leg][0],
        },
        "Stop [1]": {
          price: getMinPrice(cityLegs[leg][1]),
          flight: cityLegs[leg][1],
        },
        "Stop Any [1+]": {
          price: getMinPrice(cityLegs[leg].many),
          flight: cityLegs[leg].many,
        },
      };
    }

    return result;
  };
  const handleCheckboxChangeStops = (leg, label, flightData) => {
    setSelectedStops((prev) => {
      const currentLeg = prev[leg] || {};
      const isChecked = currentLeg[label];

      const updatedStops = {
        ...prev,
        [leg]: {
          ...currentLeg,
          [label]: !isChecked,
        },
      };

      // Update selectedFlightData
      setSelectedFlightData((prevFlights) => {
        if (!isChecked) {
          // Checkbox checked → add flights
          return [...prevFlights, ...flightData];
        } else {
          // Checkbox unchecked → remove flights
          return prevFlights.filter((flight) => !flightData.includes(flight));
        }
      });

      return updatedStops;
    });
  };

  return (
    <ResultSidebar>
      {/* Stops section */}
      {/* Airline header */}
      <SidebarItemWrapper>
        <SidebarItemHeader onClick={() => handleShows("show-airline")}>
          <span>Airline</span>
          <IconWrapper fontSize="20px">
            {showAirline ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconWrapper>
        </SidebarItemHeader>
      </SidebarItemWrapper>
      {/* Airline body */}
      {showAirline && (
        <SidebarItemWrapper>
          <h5>Available Airlines</h5>
          <hr />
          {itemsToShow.map((data, i) => (
            <AirlineItems key={i}>
              <AirlineTitle>
                <input
                  type="checkbox"
                  checked={selectedAirlines.has(data.validatingAirlineCodes[0])}
                  onChange={() =>
                    handleCheckboxChangeAirlines(data.validatingAirlineCodes[0])
                  }
                />
                <p>{dictionaries.carriers[data.validatingAirlineCodes[0]]}</p>
              </AirlineTitle>
              <AirlinePrice>{`₦${parseInt(
                data.price.total
              ).toLocaleString()}`}</AirlinePrice>
            </AirlineItems>
          ))}

          {Items.length > 5 && (
            <ShowAll onClick={handleShowAll}>
              {showAll ? "Show Less" : "Show All"}
              <IconWrapper>
                {showAll ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </IconWrapper>
            </ShowAll>
          )}
        </SidebarItemWrapper>
      )}

      {/* Departure section */}
      {/* Departure header */}
      {/* <SidebarItemWrapper>
        <SidebarItemHeader onClick={() => handleShows("show-time")}>
          <span>Flight time</span>
          <IconWrapper fontSize="20px">
            {showFlightTime ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconWrapper>
        </SidebarItemHeader>
      </SidebarItemWrapper> */}
      {/* Departure body */}

      <>
        {showFlightTime && (
          <SidebarItemWrapper>
            <h5>Departing Flight</h5>
            <hr />

            {/* Depart time */}
            <h6>Depart from Lagos</h6>
            {Object.entries(
              groupByTimeRange(flightSearchResultData, "departure")
            ).map(([range, items], idx) => (
              <DepartureItems key={idx}>
                <DepartureContent>
                  <input
                    type="checkbox"
                    checked={checkedDDepartTime[idx] || false}
                    onChange={() => handleCheckboxChange(idx, "d-depart-time")}
                  />
                  <FaCloudSun />
                  <p> {range}</p>
                </DepartureContent>
                <AirlinePrice>
                  {" "}
                  {items[0].currency} {Number(items[0].price).toLocaleString()}
                </AirlinePrice>
              </DepartureItems>
            ))}

            {/* Arrive time */}
            <h6>Arrive At Dubai</h6>
            {Object.entries(
              groupByTimeRange(flightSearchResultData, "departure")
            ).map(([range, items], idx) => (
              <DepartureItems key={idx}>
                <DepartureContent>
                  <input
                    type="checkbox"
                    checked={checkedDArriveTime[idx] || false}
                    onChange={() => handleCheckboxChange(idx, "d-arrive-time")}
                  />
                  <FaCloudSun />
                  <p>{range}</p>
                </DepartureContent>
                <AirlinePrice>
                  {" "}
                  {items[0].currency} {Number(items[0].price).toLocaleString()}
                </AirlinePrice>
              </DepartureItems>
            ))}
          </SidebarItemWrapper>
        )}
      </>

      {/* Return section */}
      <>
        {showFlightTime && (
          <SidebarItemWrapper>
            <h5>Return Flight</h5>
            <hr />

            {/* Depart time */}
            <h6>Depart from Dubai</h6>
            {flightReturnItem.map((data, i) => (
              <ReturnItems>
                <ReturnContent>
                  <input
                    type="checkbox"
                    checked={checkedRDepartTime[i] || false}
                    onChange={() => handleCheckboxChange(i, "r-depart-time")}
                  />
                  <FaCloudSun />
                  <p>{data.flightTime}</p>
                </ReturnContent>
                <AirlinePrice>{data.flightFare}</AirlinePrice>
              </ReturnItems>
            ))}

            {/* Arrive time */}
            <h6>Arrive At Lagos</h6>
            {flightReturnItem.map((data, i) => (
              <ReturnItems>
                <ReturnContent>
                  <input
                    type="checkbox"
                    checked={checkedRArriveTime[i] || false}
                    onChange={() => handleCheckboxChange(i, "r-arrive-time")}
                  />
                  <FaCloudSun />
                  <p>{data.flightTime}</p>
                </ReturnContent>
                <AirlinePrice>{data.flightFare}</AirlinePrice>
              </ReturnItems>
            ))}
          </SidebarItemWrapper>
        )}
      </>

      {/* Flight Stops section */}

      {/* Stops header */}
      <SidebarItemWrapper>
        <SidebarItemHeader onClick={() => handleShows("show-stops")}>
          <span>Flight Stops</span>
          <IconWrapper fontSize="20px">
            {showStops ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconWrapper>
        </SidebarItemHeader>
      </SidebarItemWrapper>

      {/* Stops body */}
      <>
        {showStops && (
          <>
            {Object.entries(
              getStopFiltersForMultiCity(flightSearchResultData)
            ).map(([leg, stopGroups], idx) => (
              <SidebarItemWrapper key={idx}>
                <h5>Stops from {leg}</h5>
                <hr />
                {Object.entries(stopGroups).map(([label, price], i) => (
                  <StopItems key={i}>
                    <StopContent>
                      <input
                        type="checkbox"
                        checked={selectedStops[leg]?.[label] || false}
                        onChange={() =>
                          handleCheckboxChangeStops(
                            leg,
                            label,
                            price?.flight || []
                          )
                        }
                      />
                      <p> {label}</p>
                    </StopContent>
                    <AirlinePrice>
                      {price?.price
                        ? `₦${Number(price?.price).toLocaleString()}`
                        : "N/A"}
                    </AirlinePrice>
                  </StopItems>
                ))}
              </SidebarItemWrapper>
            ))}
          </>
        )}
      </>
    </ResultSidebar>
  );
}
