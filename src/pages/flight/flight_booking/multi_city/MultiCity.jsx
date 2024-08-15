import React, { useState } from 'react'
import roundtrip from '../../../../images/svg-icon/flight-return-round-svgrepo-com.svg'
import { ContentMain, ContentSubHeader, DestinationWrapper, FlightDepartWrapper, FlightDepatWrapContent, FlightForm, FlightFormSection, FlightFormSectionContent, FlightFormSectionTitle, FlightInputAndDropDown, FlightInputContainer, FlightInputWrapper, FlightPassengerClass, FlightPassengerContent, FlightPassengerWrapper, FlightType, Flightwrapper, FlightWrapper, Label, LocationDropdownWrapper, PassengerWrapper, RoundTripImg, TakeOffWrapper } from '../../../../pages/flight/flight_booking/FlightBooking.style'
import { MdFlightTakeoff } from "react-icons/md";
import { MdFlightLand } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { LiaCcVisa } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';
import LocationDropdown from '../../../../components/booking_icons/location_dropdow/LocationDropdown';
import PassengerData from '../../../../components/booking_icons/passenger_data/PassengerData';
import Button from '../../../../components/button/Button';
import FlightClass from '../../../../components/booking_icons/flight_class/FlightClass';
import BookingIcons from '../../../../components/booking_icons/BookingIcons';
import { MulitPassengerWrapper, MultiFlightClass, MultiFlightClassDropdown, MultiFlightClassTitle, MultiFlightPassengerClass, MultiFlightPassengerContent, MultiFlightPassengerWrapper, MultiPassengerContainer } from './MultiCity.style';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';




export default function MultiCity() {

  const navigate = useNavigate();
    
  
        const [tripType, setTripType] = useState('roundTrip'); // roundTrip is selected by default
        const [kickOff, setKickOff] = useState();
        const [destination, setDestination] = useState();
        const [departDate, setDepartDate] = useState();
        const [returnDate, setreturnDate] = useState();
        const [passengerCount, setPassengerCount ] =useState(1);
        const [childrenCount, setChildrenCount ] =useState(0);
        const [infantCount, setInfantCount ] =useState(0);
        const [flightClass, setFlightClass] = useState('Guest');
        
        const [showReturnDate, setShowReturnDte] = useState(true);
      
        // Flight Type onchange
        const handleTripTypeChange = (event) => {
          setTripType(event.target.value);
          if (tripType === 'oneWay') {
            setShowReturnDte(true);
          }else{
            setShowReturnDte(false);
          }
  
                  console.log(tripType)
        };
  
  
        const [overallCount, setOverallCount] = useState(passengerCount)
  
        // passange count event handler Event handler
        const handleKickOff = (e)=>{
          setKickOff(e.target.value);
        }
  
        const handleDestination = (e) =>{
            setDestination(e.target.value)
        }
  
        const handleDepartureDate = (e)=>{
          setDepartDate(e.target.value)
        }
  
  
        const handleReturnDate = (e)=>{
          setreturnDate(e.target.value)
        }
  
        const handlePassengerReduce = (e) => {
          e.preventDefault();
          if (passengerCount > 1) {
            setPassengerCount(prevCount => prevCount - 1);
            setOverallCount(prevCount => prevCount - passengerCount)
          }
        };
      
        const handlePassengerAdd = (e) => {
          e.preventDefault();
          if(passengerCount < 9)
          setPassengerCount(prevCount => prevCount + 1);
          setOverallCount(prevCount => prevCount + passengerCount)
        };
      
        const handleChildrenReduce = (e) => {
          e.preventDefault();
          if (childrenCount > 0) {
             setChildrenCount(prevCount => prevCount - 1);
             setOverallCount(prevCount => prevCount - childrenCount)
          }
        };
      
        const handleChildrenAdd = (e) => {
          e.preventDefault();
            if(childrenCount < 4){
         setChildrenCount(prevCount => prevCount + 1);
         setOverallCount(prevCount => prevCount + childrenCount)
        }
      };
      
        const handleInfantReduce = (e) => {
          e.preventDefault();
          if (infantCount > 0) {
            setInfantCount(prevCount => prevCount - 1);
            setOverallCount(prevCount => prevCount - infantCount)
          }
        };
      
        const handleInfantAdd = (e) => {
          e.preventDefault();
          if (infantCount<2) {
                setInfantCount(prevCount => prevCount + 1);
                setOverallCount(prevCount => prevCount + infantCount)
          }
      
        };
      
          // Handler for flight class selection
          const handleFlightClassChange = (event) => {
            setFlightClass(event.target.value);
          };
  
  
          const [showPassenger, setShowPassenger] = useState(false)
  
          // DROPDOWN LOCATION AND DESTINATION AIRPORTS 
  
          
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
  
  
  
          const [searchTakeOffInputValue, setSearchTakeOffInputValue] = useState(''); 
          const [searchDestinationInputValue, setSearchDestinationInputValue] = useState(''); 
  
  
          // TakeOff Search airport handler
          const onChangeTakeOffHandler = (e)=>{
            setSearchTakeOffInputValue(e.target.value);
          }
  
  
                // destionaton Search airport handler
            const onChangeDestinationHandler = (e)=>{
                  setSearchDestinationInputValue(e.target.value);
                }
  
          const [takeOffAirport, setTakeOffAirport] = useState('')
          const [destinationAirport, setDestinationAirport] = useState('')
  
          // show/hide takeoff and destinatio down airport Lists
          const [showTakeOffAirports, setShowTakeOffAirports] = useState(false)
          const [showDestinationAirports, setShowDestinationAirports] = useState(false)
  
          const onCloseTakOffDropdwon = () =>{
            setShowTakeOffAirports(false)
          }
  
          
          const onCloseDestinationDropdwon = () =>{
            setShowDestinationAirports(false)
          }
  
  
          // show/hide flightInputs
          const [showFlightInputs, setshowFlightInputs] = useState(false)
          const handleShowFlightInputsA = ()=>{
            setShowTakeOffAirports(!showTakeOffAirports)
            setshowFlightInputs(true)
          }
  
          const handleShowFlightInputsB = ()=>{
            setShowDestinationAirports(!showDestinationAirports)
            setshowFlightInputs(true)
          }
  

         const [showClass, setShowClass] = useState(false);

    return (
      <FlightWrapper>

          <FlightFormSection sectionHeight = {'auto'} fontColor= {"black"}>
            
            {/* flight form section  title */}
            <FlightFormSectionTitle>
                <h4>Book your flight?</h4>
                <h1>Select Multi-city</h1> 
            </FlightFormSectionTitle>
  
            {/* flight form section content */}
            <FlightFormSectionContent>
  
                <ContentMain tLeftRadius="10px">
                   <FlightForm>
  
              {/* Flight Type Radio button*/}
               
                <FlightType>
                       <FlightDepatWrapContent>
                                  <MultiFlightPassengerWrapper>

                                      <MultiPassengerContainer>
                                          <MultiFlightPassengerClass onClick={()=>setShowPassenger(!showPassenger)}>
                                                <span>{overallCount} passenger and {flightClass}</span> <span><IoMdArrowDropdown/></span>
                                            </MultiFlightPassengerClass>
      
                                      {/* Passengers */}   { 
                                        showPassenger &&  
                                          
                                            <MultiFlightPassengerContent>
                                      
                                            <MulitPassengerWrapper> 
                                            <h3>Passengers</h3>
                                              {/* <!-- number of adults --> */}
                                              <PassengerData
                                                  title={'Adults'}
                                                  Subtitle={'12y and up'} 
                                                  value={passengerCount} 
                                                  reduceFunc={handlePassengerReduce} 
                                                  addFunc={handlePassengerAdd} 
                                            />
      
                                              {/* <!-- number of children --> */}
                                              <PassengerData
                                                  title={'Children'}
                                                  Subtitle={'Ages (2y-11y)'} 
                                                  value={childrenCount} 
                                                  reduceFunc={handleChildrenReduce} 
                                                  addFunc={handleChildrenAdd
                                                  }
                                            />
                                            
                                              {/* <!-- number of Infants --> */}
                                              <PassengerData
                                                  title={'Infants'}
                                                  Subtitle={'Below 2y'} 
                                                  value={infantCount} 
                                                  reduceFunc={handleInfantReduce} 
                                                  addFunc={handleInfantAdd} 
                                            />                                                                                  
      
                                              {/* Continue Button */}
                                              <div><Button text={'Continue'} onClick={()=>setShowPassenger(false)}/></div>
                                            </MulitPassengerWrapper>
                                        </MultiFlightPassengerContent>
                                       }
                                  </MultiPassengerContainer>
                                  <div>
                                <Button onClick={()=>{}} text={'Add another destination'} />
                              </div>
                                 </MultiFlightPassengerWrapper>
                                </FlightDepatWrapContent>
                 </FlightType>
  
                  {/* from and to INput */}
                  <FlightInputContainer class="flight-wrapper">
                    {/* takeoff input */}
                    <FlightInputAndDropDown>
                         <FlightInputWrapper  onClick={handleShowFlightInputsA}>
                          <input id="from-input" type="text" placeholder="From" value={takeOffAirport} onChange={handleKickOff} />
                         <span><MdFlightTakeoff/></span>                  
                        </FlightInputWrapper>
  
                           {/*  Takeoff Airport Dropdown*/}
                           {   
                         showTakeOffAirports && 
                          <TakeOffWrapper>
                              <LocationDropdown
                                onChange={onChangeTakeOffHandler}
                                items={takeOffAportList} 
                                searchInputValue={searchTakeOffInputValue}  
                                setAirportSelected={setTakeOffAirport}
                                onCloseDropdwon={onCloseTakOffDropdwon }
                                Icon={<MdFlightTakeoff/>}
                              />
                            </TakeOffWrapper>}
                    </FlightInputAndDropDown>
     
                          <RoundTripImg><img src={roundtrip}  alt='trip icon'/></RoundTripImg>   
  
                           {/*Destination input  */}
                        <FlightInputAndDropDown>                      
                              <FlightInputWrapper onClick={handleShowFlightInputsB}>
                              <input type="text" placeholder="To" value={destinationAirport} onChange={handleDestination} />
                              <span><MdFlightLand/></span>
                          </FlightInputWrapper>
  
                                    {/* dropdown */}
                          {                
                           showDestinationAirports && 
                          <DestinationWrapper>
                                <LocationDropdown
                                    onChange={onChangeDestinationHandler}
                                    items={destinationAriporList} 
                                    searchInputValue={searchDestinationInputValue}  
                                    setAirportSelected={setDestinationAirport}
                                    onCloseDropdwon={onCloseDestinationDropdwon}
                                    Icon={<MdFlightLand/>}
                                />
                            </DestinationWrapper>}
                        </FlightInputAndDropDown>
  
                    </FlightInputContainer>
  
  
  
                    {/* <!-- Depature and destination container --> */}
                       { showFlightInputs &&
                        <>
                       <FlightDepartWrapper>
                              <FlightDepatWrapContent>
                                        <Label for="depart">Departing</Label>
                                        <input type="date" id="depart" onChange={handleDepartureDate} value={departDate} />
                                </FlightDepatWrapContent>
  
                                 {showReturnDate &&
                                <FlightDepatWrapContent>
                                    <Label for="depart">Returning</Label>
                                    <input type="date" id="return" onChange={handleReturnDate} value={returnDate}/>
                                </FlightDepatWrapContent>}

                                
                              <FlightDepatWrapContent>
                                    <MultiFlightClass onClick={()=>{setShowClass(!showClass)}}>
                                      <MultiFlightClassTitle>
                                        <span>Class</span>
                                        <span>Economy <IoMdArrowDropdown/></span>
                                      </MultiFlightClassTitle>
                                       
                                       {/* Class drop down */}
                                  {     
                                showClass &&   
                                <MultiFlightClassDropdown>
                                          <span><IoMdArrowDropright />Guest</span>
                                          <span><IoMdArrowDropright />Business</span>
                                          <span><IoMdArrowDropright />First Class</span>
                                     </MultiFlightClassDropdown>
                                        }
                                   </MultiFlightClass>     
                              </FlightDepatWrapContent>
                       
                          </FlightDepartWrapper>
                            <div>
                                 <Button onClick={()=>navigate('/flight-result')} text={'Search Flight'} />
                               </div>
                             </>  
                          }
                        

                        
                   </FlightForm>
                </ContentMain>
                               
            </FlightFormSectionContent>
  
          </FlightFormSection>

      </FlightWrapper>
  )}