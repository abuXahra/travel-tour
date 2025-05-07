
import React, { useState } from 'react';
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
  StopItems
} from './Sidebar.style';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import {FaCloudSun} from 'react-icons/fa'

export default function Sidebar({Items, flightDepartItem, flightReturnItem, StopsItems}) {
  

  const [checkedAirlineItems, setCheckedAirlineItems] = useState({});
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
  
  const handleShows = (type) =>{
    if (type === 'show-airline') {
        setShowAirline(!showAirline);
      }else if (type === 'show-time') {
      setShowFlightTime(!showFlightTime);
      }else if (type === 'show-stops') {
        setShowStops(!showStops);
      }
  }


  const handleCheckboxChange = (index, type) => {

    if(type==='airline'){
      setCheckedAirlineItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
    }else if(type === 'd-depart-time'){
      setCheckedDDepartTime((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
    }else if(type === 'd-arrive-time'){
      setCheckedDDArriveTime((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
    }else if(type === 'r-depart-time'){
      setCheckedRDepartTime((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
    }else if(type === 'r-arrive-time'){
      setCheckedRArriveTime((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
    }else if(type === 'depart-stops'){
      setDepartStops((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
    }else if(type === 'return-stops'){
      setReturnStops((prev) => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const itemsToShow = showAll ? Items : Items.slice(0, 5);

  return (
    <ResultSidebar>
              {/* Stops section */}
              {/* Airline header */}
      <SidebarItemWrapper>
        <SidebarItemHeader onClick={()=>handleShows('show-airline')}>
            <span>Airline</span>
            <IconWrapper fontSize='20px'>
              {showAirline ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </IconWrapper>
        </SidebarItemHeader>
      </SidebarItemWrapper>
      {/* Airline body */}
     { 
      showAirline &&
      <SidebarItemWrapper>
      <h5>Available Airlines</h5>
      <hr />
        {itemsToShow.map((data, i) => (
          <AirlineItems key={i}>
            <AirlineTitle>
              <input
                type="checkbox"
                checked={checkedAirlineItems[i] || false}
                onChange={() => handleCheckboxChange(i, 'airline')}
              />
              <p>{data.title}</p>
            </AirlineTitle>
            <AirlinePrice>{data.price}</AirlinePrice>
          </AirlineItems>
        ))}

        {Items.length > 5 && (
          <ShowAll onClick={handleShowAll}>
            {showAll ? 'Show Less' : 'Show All'}
            <IconWrapper>
              {showAll ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </IconWrapper>
          </ShowAll>
        )}
      </SidebarItemWrapper>
    }


  {/* Departure section */}
  {/* Departure header */}
   <SidebarItemWrapper>
        <SidebarItemHeader onClick={()=>handleShows('show-time')}>
            <span>Flight time</span>
            <IconWrapper fontSize='20px'>
              {showFlightTime ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </IconWrapper>
        </SidebarItemHeader>
      </SidebarItemWrapper>
      {/* Departure body */}
  
      <>
      {  showFlightTime && <SidebarItemWrapper>
        <h5>Departing Flight</h5>
        <hr />
         
         {/* Depart time */}
         <h6>Depart from Lagos</h6>
        { flightDepartItem.map((data, i)=>(
          <DepartureItems>
            <DepartureContent>
            <input
                type="checkbox"
                checked={checkedDDepartTime[i] || false}
                onChange={() => handleCheckboxChange(i, 'd-depart-time')}
              />
              <FaCloudSun />
                <p>{data.flightTime}</p>
            </DepartureContent>
            <AirlinePrice>{data.flightFare}</AirlinePrice>
          </DepartureItems>
        )) 
          
          }

           {/* Arrive time */}
          <h6>Arrive At Dubai</h6>
          { flightDepartItem.map((data, i)=>(
          <DepartureItems>
            <DepartureContent>
            <input
                type="checkbox"
                checked={checkedDArriveTime[i] || false}
                onChange={() => handleCheckboxChange(i, 'd-arrive-time')}
              />
              <FaCloudSun />
                <p>{data.flightTime}</p>
            </DepartureContent>
            <AirlinePrice>{data.flightFare}</AirlinePrice>
          </DepartureItems>
        )) 
          }
      </SidebarItemWrapper>}
      </>
      
      {/* Return section */}
      <>{  showFlightTime && 
      <SidebarItemWrapper>
      <h5>Return Flight</h5>
      <hr />
      
         {/* Depart time */}
         <h6>Depart from Dubai</h6>
        { flightReturnItem.map((data, i)=>(
          <ReturnItems>
            <ReturnContent>
            <input
                type="checkbox"
                checked={checkedRDepartTime[i] || false}
                onChange={() => handleCheckboxChange(i, 'r-depart-time')}
              />
              <FaCloudSun />
                <p>{data.flightTime}</p>
            </ReturnContent>
            <AirlinePrice>{data.flightFare}</AirlinePrice>
          </ReturnItems>
        )) 
          }

           {/* Arrive time */}
          <h6>Arrive At Lagos</h6>
          { flightReturnItem.map((data, i)=>(
          <ReturnItems>
            <ReturnContent>
            <input
                type="checkbox"
                checked={checkedRArriveTime[i] || false}
                onChange={() => handleCheckboxChange(i, 'r-arrive-time')}
              />
              <FaCloudSun />
                <p>{data.flightTime}</p>
            </ReturnContent>
            <AirlinePrice>{data.flightFare}</AirlinePrice>
          </ReturnItems>
        )) 
          }
      </SidebarItemWrapper>
      }
      </>
       
       
        {/* Flight Stops section */}
      
      {/* Stops header */}
   <SidebarItemWrapper>
        <SidebarItemHeader onClick={()=>handleShows('show-stops')}>
            <span>Flight Stops</span>
            <IconWrapper fontSize='20px'>
              {showStops ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </IconWrapper>
        </SidebarItemHeader>
      </SidebarItemWrapper>
      
      {/* Stops body */}
      <>
      {showStops &&
      <SidebarItemWrapper>
      <h5>Stops from Lagos</h5>
      <hr />
        {StopsItems.map((data, i)=>(
        <StopItems>
          <StopContent>
          <input
              type="checkbox"
              checked={departStops[i] || false}
              onChange={() => handleCheckboxChange(i, 'depart-stops')}
            />
              <p>{data.title}</p>
              <p>[{data.count}]</p>
          </StopContent>
          <AirlinePrice>{data.price}</AirlinePrice>
      </StopItems>
    ))}
      </SidebarItemWrapper>}
      </>
      
       {/* Return stops */}
       <>{showStops &&
      <SidebarItemWrapper>
      <h5>Stops from Dubai</h5>
      <hr />
        {StopsItems.map((data, i)=>(
        <StopItems>
          <StopContent>
          <input
              type="checkbox"
              checked={returnStops[i] || false}
              onChange={() => handleCheckboxChange(i, 'return-stops')}
            />
              <p>{data.title}</p>
              <p>[{data.count}]</p>
          </StopContent>
          <AirlinePrice>{data.price}</AirlinePrice>
      </StopItems>
    ))}
      </SidebarItemWrapper>
     } </>
    </ResultSidebar>
  );
}
