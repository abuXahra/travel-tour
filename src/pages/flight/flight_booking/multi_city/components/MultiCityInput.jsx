import React, { useState } from 'react';
import styled from 'styled-components';
import LocationDropdown from './LocationDropdown';
import { MdFlightLand, MdFlightTakeoff } from 'react-icons/md';
import { DestinationWrapper, FlightDepartWrapper, FlightDepatWrapContent, FlightInputAndDropDown, FlightInputContainer, FlightInputWrapper, Label, RoundTripImg, TakeOffWrapper } from '../../FlightBooking.style';
import roundtrip from '../../../../../images/svg-icon/flight-return-round-svgrepo-com.svg';
import { DeleteDestination, InputWrapper, MulticCityContent, MultiFlightClass, MultiFlightClassDropdown, MultiFlightClassTitle } from './MultiCityInput.style';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';


const MultiCityInput = ({ index, city, onCityChange, onRemove, setShowFlightButton }) => {
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showFlightInputs, setshowFlightInputs] = useState(false)
  const [showClass, setShowClass] = useState(false);

  const handleInputChange = (key, value) => {
    onCityChange(index, key, value);
  };

  const toggleFromDropdown = () => {
    setShowFromDropdown(!showFromDropdown);
    setShowToDropdown(false); // Close 'To' dropdown if open
    setshowFlightInputs(true)
    setShowFlightButton(true);
  };

  const toggleToDropdown = () => {
    setShowToDropdown(!showToDropdown);
    setShowFromDropdown(false); // Close 'From' dropdown if open
    setshowFlightInputs(true);
    setShowFlightButton(true)
  };

  const handleFromSelect = (value) => {
    handleInputChange('from', value);
    setShowFromDropdown(false);
  };

  const handleToSelect = (value) => {
    handleInputChange('to', value);
    setShowToDropdown(false);
  };

  const handleDepartureDateChange = (e) => {
    handleInputChange('departureDate', e.target.value);
  };

  const handleReturnDateChange = (e) => {
    handleInputChange('returnDate', e.target.value);
  };



  const takeOffAportList = [
    {
        airportAddress: 'Abuja, Nigeria',
        airportName: 'Nnamdi Azikwe Internatinal Airport',
        airportAbbreviation: 'ABV'   
    },
    {
        airportAddress: 'Lagos, Nigeria',
        airportName: 'Murtala Muhammad Internatinal Airport',
        airportAbbreviation: 'LOS'   
    },
    
  ]


  const destinationAriporList = [
    {
      airportAddress: 'Lagos, Nigeria',
      airportName: 'Murtala Muhammad Internatinal Airport',
      airportAbbreviation: 'LOS'   
  },
    {
        airportAddress: 'Abuja, Nigeria',
        airportName: 'Nnamdi Azikwe Internatinal Airport',
        airportAbbreviation: 'ABV'   
    },
    
  ]


  
 

  const [classSelect, setClassSelect] = useState('Guest');
  
  const handSelect = (e)=>{
    setClassSelect(e)
    handleInputChange('tripClass', classSelect)
  }

  const classItems = [
     {
       title:"Guest",
       value: "Guest"
     },
     {
       title:"Business",
       value: "Business"
     },
     {
       title:"First Class",
       value: "First Class"
     },
  ]



  

  return (
    <InputWrapper>
    <FlightInputContainer>
      {/* takeoff input */}
    <FlightInputAndDropDown>
      <FlightInputWrapper onClick={toggleFromDropdown}>                             
            <input
            type="text"
            placeholder="From"
            value={city.from}
            onChange={(e) => handleInputChange('from', e.target.value)}
          />  
          <span><MdFlightTakeoff/></span> 
      </FlightInputWrapper>

      {/*  Takeoff Airport Dropdown*/}
      {showFromDropdown && (
       <TakeOffWrapper>
          <LocationDropdown
              onChange={(e) => handleFromSelect(e.target.value)}
              items={takeOffAportList}  //{/* Pass items for 'From' location dropdown */}
              searchInputValue={''}  //{/* Manage search input state */}
              setAirportSelected={(airport) => handleFromSelect(airport)}
              onCloseDropdown={() => setShowFromDropdown(false)}
              Icon={MdFlightTakeoff}  //{/* Example icon */}
            />
        </TakeOffWrapper>
      )}
 </FlightInputAndDropDown>
 <RoundTripImg><img src={roundtrip}  alt='trip icon'/></RoundTripImg> 
     
   {/*Destination input  */}
    <FlightInputAndDropDown>
          <FlightInputWrapper onClick={toggleToDropdown}>                             
                <input
                type="text"
                placeholder="To"
                value={city.to}
                onChange={(e) => handleInputChange('to', e.target.value)}
              />
              <span><MdFlightLand/></span>
          </FlightInputWrapper>

                      {
                              index > 0 && 
                                      <DeleteDestination >
                                        <FaTimes onClick={()=>onRemove(index)}/>
                                      </DeleteDestination>  
                            }
 
      
      {/* dropdown */}     
          {showToDropdown && (
          <DestinationWrapper>
            <LocationDropdown
              onChange={(e) => handleToSelect(e.target.value)}
              items={destinationAriporList}  //{/* Pass items for 'To' location dropdown */}
              searchInputValue={''} // {/* Manage search input state */}
              setAirportSelected={(airport) => handleToSelect(airport)}
              onCloseDropdown={() => setShowToDropdown(false)}
              Icon={MdFlightLand}  //{/* Example icon */}
            />
          </DestinationWrapper>
          )}
      </FlightInputAndDropDown>
  </FlightInputContainer>

 {/* <!-- Depature and destination container --> */}
 { showFlightInputs &&
 <FlightDepartWrapper inputGap={'70px'}>
  <FlightDepatWrapContent>
  <Label for="depart">Departure</Label>
      <input
        type="date"
        placeholder="Departure Date"
        value={city.departureDate}
        onChange={handleDepartureDateChange}
      />
      </FlightDepatWrapContent>

      {/* <FlightDepatWrapContent>
        <Label for="depart">Returning</Label>
        <input
        type="date"
        placeholder="Return Date"
        value={city.returnDate}
        onChange={handleReturnDateChange}
      />
    </FlightDepatWrapContent> */}


    <FlightDepatWrapContent>
      <MultiFlightClass onClick={()=>{setShowClass(!showClass)}}>
         <MultiFlightClassTitle>
            <span>Class</span>
            <span>{classSelect} <IoMdArrowDropdown/></span>
            </MultiFlightClassTitle>
            
            {/* Class drop down */}
            {     
              showClass &&   
              <MultiFlightClassDropdown>
                  {
                    classItems.map((item, i)=>(
                    <span key={i} onClick={()=>handSelect(item.title)}>
                    <IoMdArrowDropright />{item.title}
                    </span>                                    
                    ))
                  }
              </MultiFlightClassDropdown>
            }
          </MultiFlightClass>     
          </FlightDepatWrapContent>
  </FlightDepartWrapper>
}
    </InputWrapper>
  );
};

export default MultiCityInput;
