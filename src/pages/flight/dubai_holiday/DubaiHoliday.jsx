
import React, { useState } from 'react'
import { MdFlightLand, MdFlightTakeoff, MdHotel } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { LiaCcVisa } from 'react-icons/lia'
import roundtrip from '../../../images/svg-icon/flight-return-round-svgrepo-com.svg'
import { ButtonWrapper, DaysButton, DaysButtonWrapper, PStyled, DubaiHolidayDaysWrapper, DubaiHolidayRoom, HolidayDetail, StarHotelWrapper } from './DubaiHoliday.style'
import { FaCircle } from 'react-icons/fa'
import { BodyContent, DestinationWrapper, FlightDepartWrapper, FlightDepatWrapContent, FlightForm, FlightFormSection, FlightFormSectionContent, FlightFormSectionTitle, FlightInputAndDropDown, FlightInputContainer, FlightInputWrapper, FlightPassengerClass, FlightPassengerContent, FlightPassengerWrapper, FlightType, Label, PassengerWrapper, RadioCheck, RadioItem, RadioItemWrapper, RoundTripImg, TakeOffWrapper } from '../flight_booking/FlightBooking.style'
import LocationDropdown from '../../../components/booking_icons/location_dropdow/LocationDropdown'
import PassengerData from '../../../components/booking_icons/passenger_data/PassengerData'
import FlightClass from '../../../components/booking_icons/flight_class/FlightClass'
import Button from '../../../components/button/Button'
import Content from '../../../components/homepage_content/Content'
import HeroSection from '../../../components/hero/HeroSection'
import BookingHeaderContent from '../../../components/booking_icons/book_sub_header/BookingHeaderContent'
import { FormWrapperContainer } from '../../../components/booking_icons/form_wrapper/FormWrapper.style'
import FormWrapper from '../../../components/booking_icons/form_wrapper/FormWrapper'
import heroImage from '../../../images/Dubai.jpg'
import HotelStars from './component/HotelStars'
import { DubaiStarHotelLists } from '../../../data/object/DubaiStarHotel'



export default function DubaiHoliday() {

    const navigate = useNavigate();
          
          // roundTrip is selected by default
          const [kickOff, setKickOff] = useState();
          const [destination, setDestination] = useState();
          const [departDate, setDepartDate] = useState();
          const [returnDate, setreturnDate] = useState();
          const [flightClass, setFlightClass] = useState('Guest');
          const [adults, setAdults] = useState(1);
          const [children, setChildren] = useState(0);
          const [infants, setInfants] = useState(0);
          const [room, setRoom] = useState(1);
          const [showReturnDate, setShowReturnDate] = useState(true);



          const [showFlightInputs, setshowFlightInputs] = useState(false)
      
    
          const [showReturn, setShowReturn] = useState(true);
          const [showDubaiHolidays, setShowDubaiHolidays] = useState(false)
    
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
    
         
    
    
    
          const handleIncrement = (type) => {
            if (type === 'adults' && adults < 9) {
                totalPassengers <= 8 &&  setAdults(adults + 1);
            } else if (type === 'children' && children < 4) {
              totalPassengers <= 8 && setChildren(children + 1);
            } else if (type === 'infants' && infants < 2) {
              totalPassengers <= 8 && setInfants(infants + 1);
            }if (type === 'room' && room < 4){
                setRoom(room + 1);
            }
          };
        
          const handleDecrement = (type) => {
            if (type === 'adults' && adults > 1) {
              setAdults(adults - 1);
            } else if (type === 'children' && children > 0) {
              setChildren(children - 1);
            } else if (type === 'infants' && infants > 0) {
              setInfants(infants - 1);
            }
            if (type === 'room' && room > 1){
              setRoom(room - 1);
          }
          };
    
          const totalPassengers = adults + children + infants;
    
    
    
        
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
    
            // show/hide takeoff and destination down airport Lists
            const [showTakeOffAirports, setShowTakeOffAirports] = useState(false)
            const [showDestinationAirports, setShowDestinationAirports] = useState(false)
    
            const onCloseTakOffDropdwon = () =>{
              setShowTakeOffAirports(false)
            }
    
            
            const onCloseDestinationDropdwon = () =>{
              setShowDestinationAirports(false)
            }
    
    
            // show/hide flightInputs
           
            const handleShowFlightInputsA = ()=>{
              setShowTakeOffAirports(!showTakeOffAirports)
              setshowFlightInputs(true)
              setShowDubaiHolidays(true)
            }
    
            const handleShowFlightInputsB = ()=>{
              setShowDestinationAirports(!showDestinationAirports)
              setshowFlightInputs(true)
              setShowDubaiHolidays(true)
            }
    

            // FOR STOP OVER ROUND AND ONEWAY TRIP
            const [DubaiHolidayTripType, setDubaiHolidayTripType] = useState();

            const [DubaiHolidayRoundTrip, setDubaiHolidayRoundTrip] = useState('Return');
            const [DubaiHolidayOneWay, setDubaiHolidayOneWay] = useState('One Way');


        const [rtBrColor, setRtBrColor] = useState('#2563eb')
        const [rtCheckColor, setRtCheckColor] = useState('#2563eb')

        const [owBrColor, setOwBrColor] = useState('grey')
        const [owCheckColor, setOwCheckColor] = useState('white')



            const handleDubaiHolidayRoundTrip = ()=>{
                setDubaiHolidayRoundTrip(DubaiHolidayRoundTrip);
                setShowReturnDate(true);
                setShowReturn(true)
                setRtBrColor('#2563eb');
                setRtCheckColor('#2563eb');
                setOwBrColor('grey');
                setOwCheckColor('white');
                
            }
    
            const handleDubaiHolidayOneWay = ()=>{
              setDubaiHolidayOneWay(DubaiHolidayOneWay);
              setShowReturnDate(false);
              setShowReturn(false)
              setRtBrColor('grey');
              setRtCheckColor('white');
              setOwBrColor('#2563eb');
              setOwCheckColor('#2563eb');
          }
            
          
    
        
    // FOR DEPARTURE AND RETURN STOP OVER

            const[DubaiHolidayTrip, setDubaiHolidayTrip] = useState();

            const [DubaiHolidayDeparture, setDubaiHolidayDeparture] = useState('Departure');
            const [DubaiHolidayRreturn, setDubaiHolidayReturn] = useState('Return');

            const [sdBrColor, setSdBrColor] = useState('#2563eb')
            const [sdCheckColor, setSdCheckColor] = useState('#2563eb')
    
            const [srBrColor, setSrBrColor] = useState('grey')
            const [srCheckColor, setSrCheckColor] = useState('white')

            const handleDubaiHolidayDeparture = ()=>{
                setDubaiHolidayTrip(DubaiHolidayDeparture);
                setSdBrColor('#2563eb');
                setSdCheckColor('#2563eb');  
                setSrBrColor('grey')
                setSrCheckColor('white')
                alert(DubaiHolidayTrip)              
            }
    
            const handleDubaiHolidayReturn = ()=>{
                setDubaiHolidayTrip(DubaiHolidayRreturn);
                setSrBrColor('#2563eb');
                setSrCheckColor('#2563eb');  
                setSdBrColor('grey')
                setSdCheckColor('white')
                alert(DubaiHolidayTrip)  
          }


        //   FOR THE NUMBER OF STAYING DAYS DURING STOP OVER

        const [numberOfDays, setNumberOfDays] = useState(1);

        const reduceFunc = ()=>{
            if(numberOfDays > 1){
                setNumberOfDays(numberOfDays - 1);
            }
        }

        const addFunc = ()=>{
            if(numberOfDays < 4){
                setNumberOfDays(numberOfDays+1);
            }
        }
   
      return (
      <>

        {/* hero section with form */}
      <HeroSection heroImage={heroImage}>
        
        {/* flight form section */}
        <FlightFormSection sectionHeight={'auto'}>
          
          {/* flight form section  title */}
          <FlightFormSectionTitle>
              <h4>spend your holiday in Dubai</h4>
              <h1>Have memorable Holiday experiences in Dubai</h1> 
          </FlightFormSectionTitle>

          {/* flight form section content */}
          <FlightFormSectionContent>
                      
          {/* Flight top level items  such as stopover, manage bookings etc..*/}
          
           {/* Flight Headers */}
           <BookingHeaderContent/>


      <FormWrapperContainer>    
                <FormWrapper bgColor={'white'} tLeftRadius="10px" tRightRadius={'10px'}>    
                <FlightForm>
        
        {/* from and to INput */}

       { showDubaiHolidays &&
        
        <FlightType id="flight-type-id" class="flight-type-wrapper">
          
          <RadioItemWrapper onClick={handleDubaiHolidayRoundTrip}>
            <RadioItem brColor={rtBrColor}>
              <RadioCheck checkColor={rtCheckColor}>
                <FaCircle />
              </RadioCheck>
            </RadioItem>
            <label>{DubaiHolidayRoundTrip}</label>
          </RadioItemWrapper>
   

          <RadioItemWrapper onClick={handleDubaiHolidayOneWay}>
            <RadioItem brColor={owBrColor}>
              <RadioCheck checkColor={owCheckColor}>
                <FaCircle />
              </RadioCheck>
            </RadioItem>
            <label>{DubaiHolidayOneWay}</label>
          </RadioItemWrapper>
        </FlightType>}
        
       {showDubaiHolidays && <PStyled>Explore Manzo Travels & Tours during your journey with amazing Dubai Holiday packages starting from USD 14 pp at 4-star and 5-star hotels.</PStyled>}
        
        <FlightInputContainer>
          
          {/* takeoff input */}
          <FlightInputAndDropDown>
               <FlightInputWrapper  onClick={handleShowFlightInputsA}>
                <input type="text" placeholder="From" value={takeOffAirport} onChange={handleKickOff} />
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
             {showDubaiHolidays && showFlightInputs &&
             
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
                        <FlightPassengerWrapper>
                            <FlightPassengerClass onClick={()=>setShowPassenger(!showPassenger)}>
                              <span>Passenger and Class</span>
                              <div>
                                  <strong><span id="passengerValue">{totalPassengers}</span> Passenger/{room} Rooms and  <span id="classValue">{flightClass}</span> </strong>
                              </div>
                              </FlightPassengerClass>
    
                        {/* Passengers */}   { 
                          showPassenger &&  
                              <FlightPassengerContent>
                        
                              <PassengerWrapper> 
                                 
                               <DubaiHolidayRoom>
                                <h3>Room 1</h3>

                               {/* NUMBER OF ROOM */}
                                <PassengerData
                                title={'Room'}
                                Subtitle={'Up to 4 Rooms'} 
                                value={room} 
                                reduceFunc={()=>handleDecrement('room')} 
                                addFunc={ ()=>handleIncrement('room')} 
                                />

                                {/* PASSENGERS */}
                                <PassengerData
                                title={'Adults'}
                                Subtitle={'12y and up'} 
                                value={adults} 
                                reduceFunc={()=>handleDecrement('adults')} 
                                addFunc={ ()=>handleIncrement('adults')} 
                                />

                                {/* <!-- number of children --> */}
                                <PassengerData
                                title={'Children'}
                                Subtitle={'Ages (2y-11y)'} 
                                value={children} 
                                reduceFunc={()=>handleDecrement('children')} 
                                addFunc={()=>handleIncrement('children')}
                                />

                                {/* <!-- number of Infants --> */}
                                <PassengerData
                                title={'Infants'}
                                Subtitle={'Below 2y'} 
                                value={infants} 
                                reduceFunc={()=>handleDecrement('infants')} 
                                addFunc={()=>handleIncrement('infants')} 
                                />
                                 </DubaiHolidayRoom>
                                  <hr />
                                  <h3>Class</h3>
                                  <FlightClass
                                    name="flightClass"
                                    value="Guest"
                                    isChecked={flightClass === 'Guest'}
                                    onChange={handleFlightClassChange}                                         
                                    />
                                    
                                    <FlightClass
                                    name="flightClass"
                                    value="Business"
                                    isChecked={flightClass === 'Business'}
                                    onChange={handleFlightClassChange}                                         
                                    />
    
                                  <FlightClass
                                    name="flightClass"
                                    value="First Class"
                                    isChecked={flightClass === 'First Class'}
                                    onChange={handleFlightClassChange}                                         
                                    />
                              
    
                                {/* Continue Button */}
                                <div><Button text={'Continue'} onClick={()=>setShowPassenger(false)}/></div>
                              </PassengerWrapper>
                          </FlightPassengerContent>
                        }
                       </FlightPassengerWrapper>
                      </FlightDepatWrapContent>
                </FlightDepartWrapper>}

                 {/* Stop Over days */}
                {showDubaiHolidays && <DubaiHolidayDaysWrapper>
                    <div>

                   <PStyled>When would you like to add a stop during your journey?</PStyled>
                    <FlightType>
                            <RadioItemWrapper onClick={handleDubaiHolidayDeparture}>
                                <RadioItem brColor={sdBrColor}>
                                <RadioCheck checkColor={sdCheckColor}>
                                    <FaCircle />
                                </RadioCheck>
                                </RadioItem>
                                <label>{DubaiHolidayDeparture}</label>
                            </RadioItemWrapper>
                    

          { showReturn &&    <RadioItemWrapper onClick={handleDubaiHolidayReturn}>
                                <RadioItem brColor={srBrColor}>
                                <RadioCheck checkColor={srCheckColor}>
                                    <FaCircle />
                                </RadioCheck>
                                </RadioItem>
                                <label>{DubaiHolidayRreturn}</label>
                            </RadioItemWrapper>}
                            </FlightType>
                            </div>
                                {/* <div>
                                    
                                </div> */}
                                <div>
                            <PStyled>How many days would you like to stay?</PStyled>
                            <DaysButtonWrapper>
                                    <DaysButton>
                                        <div onClick={reduceFunc}>-</div>
                                        <span>{numberOfDays}</span>
                                        <div onClick={addFunc}>+</div>
                                    </DaysButton>
                            </DaysButtonWrapper>

                            </div>
                   </DubaiHolidayDaysWrapper>}

           { showDubaiHolidays &&       
                    <ButtonWrapper>
                      <Button onClick={()=>navigate('/flight-result')} text={'Search Flight'} />
                    </ButtonWrapper>}
                </FlightForm>
                 </FormWrapper>
              </FormWrapperContainer>   
          </FlightFormSectionContent>
        </FlightFormSection>
      </HeroSection>

{/* =============================Body Content==================== */}

      
         
         {/* Body Content  */}
         <BodyContent> 
      
              <HolidayDetail>
                <h2>The world's best value stop-over</h2>  
                    
                    <p>Turn one holiday into two with incredible stopover packages to Dubai, the perfect destination for a taste of local culture, desert adventures, world-class shopping, fine dining, and much more.</p>
                    <p>Make the most of your holiday with these amazing packages by Discover Dubai, including up to four nights in a hotel, tours, and memorable experiences.</p>
                    <p>Choose from 4 or 5-star hotels in the package types below to create the perfect stopover itinerary.</p>
                    
                    {/* <span>Checkout Terms and Conditions</span> */}
                </HolidayDetail>       
                

                <StarHotelWrapper>
                    {      DubaiStarHotelLists.map((item, i)=>(
                      <HotelStars
                                  key={i}
                                  rwRvs ={i % 2 === 0? 'row-reverse': ''}
                                  hotelClass={item.hotelClass}
                                  hotelDescr ={item.hotelDescr}
                                  hotelPrice ={item.hotelPrice}
                                  hotelImgUrl ={item.hotelImgUrl}
                              />
                    ))   }
                </StarHotelWrapper>
   
        </BodyContent>
      </>
      )
    }
    