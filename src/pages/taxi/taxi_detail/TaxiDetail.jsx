
import React, { useState } from 'react'
import { ButtonWrapper, FlightDetailWrapper, FormContent, FormWrapper, PromoHeader, PromoInput, PromoWrapper, SideFlightAirport, SideFlightSummary, TotalFare, TotalTrip, TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour, TaxiDetailBody, TaxiDetailContent, TaxiDetailHeader, TaxiDetailHeaderItems, TaxiDetailHeaderSteps, TaxiDetailHeaderTitle, TaxiDetailSideBar, TaxiDetailSideContent, TaxiDetailWrapper, TripMinContent, TripPassenger, TripDetailContainer, TaxiDetailWrapperb, ChargesWrapper } from './TaxiDetail.style'

import flightLogo from '../../../images/aire-peace.png'
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Timeline from '../../../components/timeline/Timeline';
import Input from '../../../components/inputs/input/Input';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCarSide, FaTaxi, FaUser } from 'react-icons/fa';
import SelectInput from '../../../components/inputs/selectInput/SelectInput';
import RadioInput from '../../../components/inputs/input_radio/RadioInput';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import TaxiResultCard from '../../../components/taxi/taxi_result_card/TaxiResultCard';
import sedan from '../../../images/taxi/sedan.jpg'
import { TaxiResultList } from '../../../data/object/TaxiResultList';
import { TripInfoContent } from '../../flight/flight_result/trip_info/TripInfo.style';
import { GuestFormWrapper } from '../../hotel/gues_info/GuestInfo.style';
import { ErrorMessage } from '../../flight/flight_overview/FlightOverview.style';
import TaxiTimeline from '../../../components/timeline/TaxiTimline';
import { MdFlightLand } from 'react-icons/md';

export default function TaxiDetail() {

  
    
  // navigation
  const navigate = useNavigate();

  // firstnam variable
 
  const [airportName, setAirportName] = useState('Nnamdi Azikiwe International Airport');
  const [airportTerminal, setAirportTerminal] = useState(''); 
  const [dropOffName, setDropOffName] = useState('');
  const [selectedTitleValue, setSelectedTitleValue] = useState(''); 
  const [name, setName] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
 

  

// error
const [airportNameErrorError, setAirportNameError] = useState(false);
const [airportTerminalError, setAirportTerminalError] = useState(false); 
const [dropOffNameError, setDropOffNameError] = useState(false);
const [selectedTitleValueError, setSelectedTitleValueError] = useState(false); 
const [nameError, setNameError] = useState(false);
const [selectedGenderError, setSelectedGenderError] = useState(false);
const [emailError, setEmailError] = useState(false);
const [phoneError, setPhoneError] = useState(false);
const [whatsappNumberError, setWhatsappNumberError] = useState(false);





const handleAirportName = (e)=>{
  setAirportName(e.targe.value)
  setAirportNameError(false)
}


 const handleAirportTerminal = (e) =>{
    setAirportTerminal(e.target.value)
 }
 
  const handleDropOffName = (e)=>{
      setDropOffName(e.target.value);
      setDropOffNameError(false)
  };


 
// title selection handler
const userTitle = [
  { title: 'Select Title', value: '' },
  { title: 'Mr.', value: 'Mr.' },
  { title: 'Mrs', value: 'Mrs.' },
];

const handleSelectTitleChange = (event) => {
  setSelectedTitleValue(event.target.value);
  setSelectedTitleValueError(false);
}


const handleName =(e)=>{
  setName(e.target.value);
  setNameError(false);
};






 const gender = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
];
// Gender handler;       
const handleGenderChange = (value) => {
    setSelectedGender(value);
    setSelectedGenderError(false);
  };
  

 // email  number Handler
 const handlEmailChange = (e)=>{
  setEmail(e.target.value);
  setEmailError(false);
}

// phone number Handler
 const handlePhoneChange = (e)=>{
  setPhone(e.target.value);
  setPhoneError(false);
}
  

// Whatsapp Phone
const handleWhatsappPhone = (e)=>{
  setWhatsappNumber()
};



// OnSubmit handler
const handledSubmit = (e)=>{

e.preventDefault();


  if(airportName === "" || null){
    setAirportNameError(true);
  }else
 
  if (dropOffName === "" || null) {
    setDropOffNameError(true);
  }else


if (!selectedTitleValue) {
  setSelectedTitleValueError(true);
}else

 
 if (name === "" || null) {
  setNameError(true);
}else


if(selectedGender === "" || null){
  setSelectedGenderError(true);
}else

if (email === "" || null) {
  setEmailError(true);
}

if (phone === "" || null) {
  setPhoneError(true);
}else{
  navigate('/taxi-customization')
  // You can also reset form or perform other actions here
  
  }

}

  const [showtripDepart, setShowtripDepart] = useState(true);
 






  return (
    <TaxiDetailWrapper>        
        {/* header */}
        <TaxiDetailHeader>
        <TaxiDetailHeaderItems >
            <TaxiDetailHeaderTitle>
                <span><Button text={'Back'} onClick={()=>navigate('/taxi-result')}/></span>
                <h2>Proceed with your booking</h2>
            </TaxiDetailHeaderTitle>
            
            {/* timeline: Trip info steps */}
            <TaxiTimeline currentStep={2}/>
        </TaxiDetailHeaderItems>
        </TaxiDetailHeader>
         
          {/* body */}
        <TaxiDetailBody>
              {/* Sidebar */}

             <TaxiDetailSideBar>
                  <TaxiDetailSideContent>
                    <h2>My Cart</h2>
                    <h4>Taxi Booking</h4>
                    <SideFlightAirport>
                      <span>
                        <FlightIcon Icon={<MdFlightLand/>} IconSize={'14px'} rotate={'360deg'} iconColor={'#4a4a4a'}/> 
                      <div>
                          <p><b>Pick-up</b></p> 
                          <p>Abuja, Nnamdi Azikwe International Airport</p>
                        </div> 
                    </span>

                    <span>
                    <FlightIcon Icon={<FaTaxi/>} IconSize={'14px'} rotate={'360deg'} iconColor={'#4a4a4a'}/> 
                    <div>
                          <p><b>Drop-off</b></p> 
                          <p>Area 3, Garki, Abuja </p>
                        </div>
                    </span>
                    </SideFlightAirport>


                    <SideFlightSummary>
                    <div>
                      <span>Pickup Date:</span>
                      <span>07 Aug. 2024</span>
                    </div>
                    <div>
                      <span>Pickup Time:</span>
                      <span>08:00am</span>
                    </div>

                    <h4>Flight Fare Summary</h4>
                    
                    <div>
                      <span>Base Fee</span>
                      <span>N56,000</span>
                    </div>
                    <div>
                      <span>Discount</span>
                      <span>0</span>
                    </div>
                
                    <div>
                      <span><b>Total Fare</b></span>
                      <span>N56,000</span>
                    </div>
                    </SideFlightSummary>
                    <TotalTrip>
                      <div>
                        <span>Trip Total</span>
                        <span>N56,000</span>
                      </div>
                    </TotalTrip>
                  </TaxiDetailSideContent>                   
                </TaxiDetailSideBar> 
            


            {/* Main Content */}
            <TripMinContent>
        
            {/* User info content */}
            <TaxiDetailContent>
              {/* Flight Detail section */}

              {/* For Departure */}
              <TaxiDetailWrapperb>
               {/* title */}
                  <TripDetailTile onClick={()=>setShowtripDepart(!showtripDepart)}>
                    <span> <h2>ABUJA</h2> <FlightIcon Icon={<FaCarSide/>} rotate={'360'} iconColor={'#0D3984'}/>  <h2>Garki</h2> </span>
                    <span>
                      <p>5th, Aug 2024</p>
                      <p>08:00am</p>
                      <div>
                            <IoIosArrowDown />
                      </div>
                    </span>
                  </TripDetailTile>
                      {/* body */}
                    {  showtripDepart &&
                     <TripDetailBody>
                       
                        <TripDetailContainer>
                        <TaxiResultCard
                                    picture={sedan}
                                    title={TaxiResultList[0].title}
                                    recommended={TaxiResultList[0].recommended}
                                    taxiPolicies={TaxiResultList[0].taxiPolicies}
                                    refunds={TaxiResultList[0].refunds}
                                    cancellation={TaxiResultList[0].cancellation}
                                    cancellationFee={TaxiResultList[0].cancellationFee}
                                    pickupDate={TaxiResultList[0].pickupDate}
                                    pickupTime={TaxiResultList[0].pickupTime}
                                    NoOfPassenger={TaxiResultList[0].NoOfPassenger}
                                    AirCondition={TaxiResultList[0].AirCondition}
                                    grade={TaxiResultList[0].grade}
                                    reviewCounter={TaxiResultList[0].reviewCounter}
                                    rating={TaxiResultList[0].rating}
                                    price={TaxiResultList[0].price}
                                    taxes={TaxiResultList[0].taxes}
                                    taxiLink={()=>navigate(TaxiResultList[0].taxiLink)}
                                    displayButton={'none'}
                        />
                        </TripDetailContainer>
                  </TripDetailBody>}
              </TaxiDetailWrapperb>
            </TaxiDetailContent>

            <TaxiDetailContent>
              <h3>Driver and Taxi Detail</h3>
              <p>Driver and Taxi detail will sent after confirmation of the booking</p>            
            </TaxiDetailContent>

            <TaxiDetailContent>
            <h3>Booking Charges</h3>
              <ChargesWrapper>
                <div>
                    <h4>Charges</h4> 
                              
                      <ul>
                        <li>Driver Allowance</li>
                        <li>Toll Charges</li>
                        <li>Only one pickup and Drop Allowance</li>
                      </ul>
                </div>
                <div>
                    <h4>Extra Charges</h4> 
                       
                      <ul>
                        <li>Waiting Charges</li>
                        <li>Additional fees for locations beyond the specified address</li>
                      </ul>
                </div>
              </ChargesWrapper>
            
            </TaxiDetailContent>
              {/*user trip data  */}
              <TripInfoContent>
                  <h2>Passenger Detail</h2>
             
                <GuestFormWrapper onSubmit={handledSubmit}>
             <span>
              {/* Passenger */}
                <FormContent>

                                    
                      {/* Last name */}
                      <Input
                            title={''}
                            label={'Airport Name'}
                            type={'text'}
                            value={'Nnamdi Azikiwe International Airport'}
                            onChange={handleAirportName}
                            error={airportNameErrorError}
                            requiredSymbol={'*'}
                          />


                      {/* Airport Terminal */}
                      <Input
                            title={''}
                            label={'Airport Terminal'}
                            type={'text'}
                            value={airportTerminal}
                            onChange={handleAirportTerminal}
                            error={airportTerminalError}
                          />

                      
                      {/* Drop Off Name */}
                        <Input
                            title={''}
                            label={'Drop Off Name'}
                            type={'text'}
                            value={dropOffName}
                            onChange={handleDropOffName}
                            error={dropOffNameError}
                            requiredSymbol={'*'}
                          />

                    </FormContent>

                    <FormContent>                    
                    
                      {/* Title  */}
                      <SelectInput 
                        label={"Title*"}
                          options={userTitle} 
                          title={'Title'} 
                          error={selectedTitleValueError} 
                          onChange={handleSelectTitleChange}
                      />
                          {/* First name */}
                          <Input
                            type={'text'}
                            title={''}
                            label={'Name'}
                            value={name}
                            onChange={handleName}
                            error={nameError}
                            requiredSymbol={'*'}
                          />


        {/* Gender */}
        <RadioInput
                        options={gender}
                        defaultValue={selectedGender}
                        onChange={handleGenderChange}
                        error={selectedGenderError}
                      />
                    </FormContent>

                    <FormContent>
              

                    {/* email address */}
                    <Input
                            title={''}
                            label={'Email Address'}
                            type={'email'}
                            value={email}
                            onChange={handlEmailChange}
                            error={emailError}   
                            requiredSymbol={'*'}                       
                          />

                    {/* Phone Number */}
                        <Input
                            title={''}
                            label={'Phone Number* '}
                            type={'text'}
                            value={phone}
                            onChange={handlePhoneChange}
                            error={phoneError}
                            maxLength={12}
                            requiredSymbol={'*'}
                          />                
                    
                    {/* Whatsap phone  */}
                      <Input
                            title={''}
                            label={'Whatsapp Number '}
                            type={'text'}
                            value={whatsappNumber}
                            onChange={handleWhatsappPhone}
                            error={whatsappNumberError}
                            maxLength={12}
                          />
                    </FormContent>        
                    </span>

    
                 {/* Continue Button */}
                  <ButtonWrapper>
                    <Button text={"Continue"} />
                    </ButtonWrapper>  
                </GuestFormWrapper>
                </TripInfoContent>
            </TripMinContent>
        </TaxiDetailBody>
    </TaxiDetailWrapper>
  )
}
