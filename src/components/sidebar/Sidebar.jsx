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
  const [flightData, setFlightData] = useState([]);
  const [checkedAirlineItems, setCheckedAirlineItems] = useState({});
  const [selectedAirlines, setSelectedAirlines] = useState(new Set());
  console.log(checkedAirlineItems);
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
  const [showFlightTime, setShowFlightTime] = useState(true);
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
      setDepartStops((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
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
    if (flightData.length === 0) {
      setFlightData(flightSearchResultData);
    }
    const filtered = flightSearchResultData.filter(
      (item) =>
        selectedAirlines.size === 0 ||
        selectedAirlines.has(item.validatingAirlineCodes?.[0])
    );
    onFilterChange(selectedAirlines.size, filtered); // 🔁 Send filtered data up);
  }, [selectedAirlines, flightSearchResultData, onFilterChange]);
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const uniqueItems = Array.from(
    new Map(
      flightSearchResultData.map((item) => [
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
        console.log("itinerary", i);
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
      <SidebarItemWrapper>
        <SidebarItemHeader onClick={() => handleShows("show-time")}>
          <span>Flight time</span>
          <IconWrapper fontSize="20px">
            {showFlightTime ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </IconWrapper>
        </SidebarItemHeader>
      </SidebarItemWrapper>
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
          <SidebarItemWrapper>
            <h5>Stops from Lagos</h5>
            <hr />
            {StopsItems.map((data, i) => (
              <StopItems>
                <StopContent>
                  <input
                    type="checkbox"
                    checked={departStops[i] || false}
                    onChange={() => handleCheckboxChange(i, "depart-stops")}
                  />
                  <p>{data.title}</p>
                  <p>[{data.count}]</p>
                </StopContent>
                <AirlinePrice>{data.price}</AirlinePrice>
              </StopItems>
            ))}
          </SidebarItemWrapper>
        )}
      </>

      {/* Return stops */}
      <>
        {showStops && (
          <SidebarItemWrapper>
            <h5>Stops from Dubai</h5>
            <hr />
            {StopsItems.map((data, i) => (
              <StopItems>
                <StopContent>
                  <input
                    type="checkbox"
                    checked={returnStops[i] || false}
                    onChange={() => handleCheckboxChange(i, "return-stops")}
                  />
                  <p>{data.title}</p>
                  <p>[{data.count}]</p>
                </StopContent>
                <AirlinePrice>{data.price}</AirlinePrice>
              </StopItems>
            ))}
          </SidebarItemWrapper>
        )}{" "}
      </>
    </ResultSidebar>
  );
}
