import React, { useState } from 'react'
import { TaxiPassenger, TaxiRoom, TaxiType } from '../../pages/taxi/Taxi..style'
import { FlightDepartWrapper, FlightDepatWrapContent, FlightPassengerClass, FlightPassengerContent, FlightPassengerWrapper, FormWrapper, TakeOffWrapper } from '../../pages/flight/flight_booking/FlightBooking.style'
import { RadioCheck, RadioItem, RadioItemWrapper } from '../booking_icons/flight_radio_header/FlightRadioHeader.style'
import { FaCircle } from 'react-icons/fa'
import { Label, PassengerWrapper, TaxiInputAndDropDown, TaxiInputContainer, TaxiInputWrapper } from './TaxiForm.style'
import { MdFlightLand, MdFlightTakeoff, MdLocalHotel, MdLocalTaxi } from 'react-icons/md'
import LocationDropdown from '../booking_icons/location_dropdow/LocationDropdown'
import PassengerData from '../booking_icons/passenger_data/PassengerData'
import Button from '../button/Button'
import { FaLocationDot } from 'react-icons/fa6'



export default function TaxiForm({

// Pickp Up
pickup,
setPickup,
handlePickup,
showPickupLocation,
handleShowPickupTaxiInputs,
pickUpAirportList,
searchpickupInputValue,
onChangePickupHanlder,
onClosePickupDropdown,


//  Drop Off
  dropOff,
  setDropOff,
  handleDroppOff,
  dropLocationList,
  showDropOffLocation,
  searchdropoffInputValue,
  onChangeDropoffHandler,
  onCloseDroppOffDropdwon, 
  handleShowDroppoffTaxiInputs,   
  showTaxiInputs,

  // pickup date
  handlePickupDate,
  pickupDate,

  // pickup time
  pickupTime,
  handlePickupTime,

  // Passenger
  setShowPassenger,
  showPassenger,
  passenger,
  handlePassengerDecrement,                     
  handlePassengerIncrement,

  showRadioButton,
  handleButtonClick,
  dropOffButtonClick,               

  btnText,
  pd,
  rounderBorder,

  // checkbutton variables
  fromAirport,
  faBrColor,
  faCheckColor,
  handleFromAirport,

  toAirport,
  toBrColor,
  toCheckColor,
  handleToAirport,

  showFromAirportForm,
  showToAirportForm

}) {





  return (
     <FormWrapper rounderBorder={rounderBorder} pd={pd}>
       {
       showRadioButton &&
       <TaxiType id="flight-type-id" class="flight-type-wrapper">
          <RadioItemWrapper  onClick={handleFromAirport}>
            <RadioItem brColor={faBrColor}>
              <RadioCheck checkColor={faCheckColor}>
                <FaCircle />
              </RadioCheck>
            </RadioItem>
            <label>{fromAirport}</label>
          </RadioItemWrapper>
   

          <RadioItemWrapper onClick={handleToAirport}>
            <RadioItem brColor={toBrColor}>
              <RadioCheck checkColor={toCheckColor}>
                <FaCircle />
              </RadioCheck>
            </RadioItem>
            <label>{toAirport}</label>
          </RadioItemWrapper>
        </TaxiType>}


  {/*========================== FROM AIRPORT TAXI FORM ================================*/}       
      {
         showFromAirportForm &&
        <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}> 
        <TaxiInputContainer>
          {/* Taxip Pickup Input */}
          <TaxiInputAndDropDown>
               <TaxiInputWrapper  onClick={handleShowPickupTaxiInputs}>
                <input type="text" placeholder="Pick-up Airport" value={pickup} onChange={handlePickup} />
               <span><MdFlightLand/></span>                  
              </TaxiInputWrapper>
    
                 {/* Taxi Destination Airport Dropdown*/}
                 { showPickupLocation && 
                <TakeOffWrapper>
                    <LocationDropdown
                      onChange={onChangePickupHanlder}
                      items={pickUpAirportList} 
                      searchInputValue={searchpickupInputValue}  
                      setAirportSelected={setPickup}
                      onCloseDropdwon={onClosePickupDropdown}
                      Icon={<MdFlightLand/>}
                    />
                  </TakeOffWrapper>}
          </TaxiInputAndDropDown>



        <TaxiInputAndDropDown>
               <TaxiInputWrapper  onClick={handleShowDroppoffTaxiInputs}>
                <input type="text" placeholder="Drop-off Location " value={dropOff} onChange={handleDroppOff} />
               <span><FaLocationDot/></span>                  
              </TaxiInputWrapper>
    
                 {/* Taxi Destination Airport Dropdown*/}
                 { showDropOffLocation && 
                <TakeOffWrapper>
                    <LocationDropdown
                      onChange={onChangeDropoffHandler}
                      items={dropLocationList} 
                      searchInputValue={searchdropoffInputValue}  
                      setAirportSelected={setDropOff}
                      onCloseDropdwon={onCloseDroppOffDropdwon}
                      Icon={<FaLocationDot/>}
                    />
                  </TakeOffWrapper>}
          </TaxiInputAndDropDown>
          </TaxiInputContainer>
                
  {/* <!-- Depature and destination container --> */}
  {showTaxiInputs &&
             
             <FlightDepartWrapper>
                    <FlightDepatWrapContent>
                              <Label for="depart">Pickup Date</Label>
                              <input type="date" id="depart" onChange={handlePickupDate} value={pickupDate} />
                      </FlightDepatWrapContent>
    
                       


                      <FlightDepatWrapContent>
                          <Label for="depart">Pickup Time</Label>
                          <input type="time" id="time" onChange={handlePickupTime} value={pickupTime}/>
                      </FlightDepatWrapContent>
    
                   
                      <FlightDepatWrapContent>
                        <FlightPassengerWrapper>
                            <FlightPassengerClass onClick={()=>setShowPassenger(!showPassenger)}>
                              <span>Passenger</span>
                              <div>
                                  <strong><span id="passengerValue">Passenger {passenger}</span></strong>
                              </div>
                              </FlightPassengerClass>
    
                        {/* Passengers */}   { 
                          showPassenger &&  
                              <FlightPassengerContent>
                        
                              <PassengerWrapper> 
                                 
                               <TaxiPassenger>
                                    <h3>Passenger</h3>

                                  {/* NUMBER OF ROOM */}
                                    <PassengerData
                                    title={'Passenger'}
                                    Subtitle={'Up to 50 Passengers'} 
                                    value={passenger} 
                                    reduceFunc={()=>handlePassengerDecrement('passenger')} 
                                    addFunc={ ()=>handlePassengerIncrement('passenger')} 
                                    />
                                </TaxiPassenger>
                                  
    
                                {/* Continue Button */}
                                <div><Button text={'Continue'} onClick={()=>setShowPassenger(false)}/></div>
                              </PassengerWrapper>
                          </FlightPassengerContent>
                      
                        }
                                 
      
                       </FlightPassengerWrapper>
                       
                      </FlightDepatWrapContent>
                      <div style={{backgroundColor: '#FF6805', display: 'flex', height: "auto", justifyContent: 'center', alignItems:"center", borderRadius:"10px"}}>
                      <Button onClick={handleButtonClick} text={btnText? btnText : 'Search'}/>
                      </div>

                    
                </FlightDepartWrapper>}
          </form>


/* ====================================== TO AIRPORT TAXI FORM ======================================================= */}
         {
         showToAirportForm &&
         <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}> 
        <TaxiInputContainer>
          {/* Taxip Pickup Input <MdLocalTaxi/>*/}

          <TaxiInputAndDropDown>
               <TaxiInputWrapper  onClick={handleShowPickupTaxiInputs}>
                <input type="text" placeholder="Pick-up Location" value={pickup} onChange={handlePickup} />
               <span><FaLocationDot/></span>                  
              </TaxiInputWrapper>
    
                 {/* Taxi Destination Airport Dropdown*/}
                 { showPickupLocation && 
                <TakeOffWrapper>
                    <LocationDropdown
                      onChange={onChangePickupHanlder}
                      items={dropLocationList} 
                      searchInputValue={searchpickupInputValue}  
                      setAirportSelected={setPickup}
                      onCloseDropdwon={onClosePickupDropdown}
                      Icon={<FaLocationDot/>}
                    />
                  </TakeOffWrapper>}
          </TaxiInputAndDropDown>



        <TaxiInputAndDropDown>
               <TaxiInputWrapper  onClick={handleShowDroppoffTaxiInputs}>
                <input type="text" placeholder="Drop-off Airport " value={dropOff} onChange={handleDroppOff} />
               <span><MdFlightTakeoff/></span>                  
              </TaxiInputWrapper>
    
                 {/* Taxi Destination Airport Dropdown*/}
                 { showDropOffLocation && 
                <TakeOffWrapper>
                    <LocationDropdown
                      onChange={onChangeDropoffHandler}
                      items={pickUpAirportList} 
                      searchInputValue={searchdropoffInputValue}  
                      setAirportSelected={setDropOff}
                      onCloseDropdwon={onCloseDroppOffDropdwon}
                      Icon={<MdFlightTakeoff/>}
                    />
                  </TakeOffWrapper>}
          </TaxiInputAndDropDown>
          </TaxiInputContainer>
                
  {/* <!-- Depature and destination container --> */}
  {showTaxiInputs &&
             
             <FlightDepartWrapper>
                    <FlightDepatWrapContent>
                              <Label for="depart">Pickup Date</Label>
                              <input type="date" id="depart" onChange={handlePickupDate} value={pickupDate} />
                      </FlightDepatWrapContent>
    
                       


                      <FlightDepatWrapContent>
                          <Label for="depart">Pickup Time</Label>
                          <input type="time" id="time" onChange={handlePickupTime} value={pickupTime}/>
                      </FlightDepatWrapContent>
    
                   
                      <FlightDepatWrapContent>
                        <FlightPassengerWrapper>
                            <FlightPassengerClass onClick={()=>setShowPassenger(!showPassenger)}>
                              <span>Passenger</span>
                              <div>
                                  <strong><span id="passengerValue">Passenger {passenger}</span></strong>
                              </div>
                              </FlightPassengerClass>
    
                        {/* Passengers */}   { 
                          showPassenger &&  
                              <FlightPassengerContent>
                        
                              <PassengerWrapper> 
                                 
                               <TaxiPassenger>
                                    <h3>Passenger</h3>

                                  {/* NUMBER OF ROOM */}
                                    <PassengerData
                                    title={'Passenger'}
                                    Subtitle={'Up to 50 Passengers'} 
                                    value={passenger} 
                                    reduceFunc={()=>handlePassengerDecrement('passenger')} 
                                    addFunc={ ()=>handlePassengerIncrement('passenger')} 
                                    />
                                </TaxiPassenger>
                                  
    
                                {/* Continue Button */}
                                <div><Button text={'Continue'} onClick={()=>setShowPassenger(false)}/></div>
                              </PassengerWrapper>
                          </FlightPassengerContent>
                      
                        }
                                 
      
                       </FlightPassengerWrapper>
                       
                      </FlightDepatWrapContent>
                      <div style={{backgroundColor: '#FF6805', display: 'flex', height: "auto", justifyContent: 'center', alignItems:"center", borderRadius:"10px"}}>
                      <Button onClick={dropOffButtonClick} text={btnText? btnText : 'Search'}/>
                      </div>                    
                </FlightDepartWrapper>}
          </form>}
          </FormWrapper>
  )
}




      