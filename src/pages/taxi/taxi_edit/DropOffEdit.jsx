
import React, { useEffect, useState } from 'react'
import { ButtonWrapper, FlightDetailWrapper, FormContent, FormWrapper, PromoHeader, PromoInput, PromoWrapper, SideFlightAirport, SideFlightSummary, TotalFare, TotalTrip, TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour, TaxiEditBody, TaxiEditContent, TaxiEditHeader, TaxiEditHeaderItems, TaxiEditHeaderSteps, TaxiEditHeaderTitle, TaxiEditSideBar, TaxiEditSideContent, TaxiEditWrapper, TripMinContent, TripPassenger, TripDetailContainer, TaxiEditWrapperb, ChargesWrapper } from './TaxiEdit.style'

import flightLogo from '../../../images/aire-peace.png'
import { useLocation, useNavigate } from 'react-router-dom';
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
import { MdFlightTakeoff } from 'react-icons/md';

export default function DropOffEdit() {



  // navigation
  const navigate = useNavigate();

  // firstnam variable
 
  const [dropOffName, setDropOffName] = useState('Nnamdi Azikiwe International Airport');
  const [airportTerminal, setAirportTerminal] = useState('Terminal A'); 
  const [pickupName, setPickupName] = useState('Adamawa House, Wuse 2, Abuja');
  const [selectedTitleValue, setSelectedTitleValue] = useState('Mrs'); 
  const [name, setName] = useState('Yusuf Abdulazeez');
  const [selectedGender, setSelectedGender] = useState('Male');
  const [email, setEmail] = useState('yusuf@gmail.com');
  const [phone, setPhone] = useState('+2349055001663');
  const [whatsappNumber, setWhatsappNumber] = useState('+2349055001663');
 

  

// error
const [pickupNameError, setPickupNameError] = useState(false);
const [airportTerminalError, setAirportTerminalError] = useState(false); 
const [dropOffNameError, setDropOffNameError] = useState(false);
const [selectedTitleValueError, setSelectedTitleValueError] = useState(false); 
const [nameError, setNameError] = useState(false);
const [selectedGenderError, setSelectedGenderError] = useState(false);
const [emailError, setEmailError] = useState(false);
const [phoneError, setPhoneError] = useState(false);
const [whatsappNumberError, setWhatsappNumberError] = useState(false);





const handlePickup = (e)=>{
  setPickupName(e.targe.value)
  setPickupNameError(false)
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


  if(pickupName === "" || null){
    setPickupNameError(true);
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
  navigate('/dropoff-customize')
  // You can also reset form or perform other actions here
  
  }

}

  const [showtripDepart, setShowtripDepart] = useState(true);
 

  const location = useLocation();


  useEffect(() => {
    // Smooth scroll to the hash section
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <TaxiEditWrapper>        
        {/* header */}
        <TaxiEditHeader>
        <TaxiEditHeaderItems >
            <TaxiEditHeaderTitle>
                <span><Button text={'Back'} onClick={()=>navigate('/dropoff-customize')}/></span>
                <h2>Proceed with your booking</h2>
            </TaxiEditHeaderTitle>
            
            {/* timeline: Trip info steps */}
            <TaxiTimeline currentStep={2}/>
        </TaxiEditHeaderItems>
        </TaxiEditHeader>
         
          {/* body */}
        <TaxiEditBody>
              {/* Sidebar */}

             <TaxiEditSideBar>
                  <TaxiEditSideContent>
                    <h2>My Cart</h2>
                    <h4>Taxi Booking</h4>
                    <SideFlightAirport>
                      <span>
                        <FlightIcon Icon={<FaTaxi/>} IconSize={'14px'} rotate={'360deg'} iconColor={'#4a4a4a'}/> 
                      <div>
                          <p><b>Pick-up</b></p> 
                          <p>B Close, 3rd Avenue, Gwarimpa, Abuja</p>
                        </div> 
                    </span>

                    <span>
                    <FlightIcon Icon={<MdFlightTakeoff/>} IconSize={'14px'} rotate={'360deg'} iconColor={'#4a4a4a'}/> 
                    <div>
                          <p><b>Drop-off</b></p> 
                          <p>Nnamdi Azikwe International Airport Abuja</p>
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

                    <h4>Booking Fare Summary</h4>
                    
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
                  </TaxiEditSideContent>                   
                </TaxiEditSideBar> 
            


            {/* Main Content */}
            <TripMinContent>
        
            {/* User info content */}
            <TaxiEditContent>
              {/* Flight Detail section */}

              {/* For Departure */}
              <TaxiEditWrapperb>
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
              </TaxiEditWrapperb>
            </TaxiEditContent>

            <TaxiEditContent>
              <h3>Driver and Taxi Detail</h3>
              <p>Driver and Taxi detail will sent after confirmation of the booking</p>            
            </TaxiEditContent>

            <TaxiEditContent>
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
            
            </TaxiEditContent>
              {/*user trip data  */}
              <TripInfoContent id='dropoff-edit-form'>
                  <h2>Passenger Detail</h2>
             
                <GuestFormWrapper onSubmit={handledSubmit}>
             <span>
              {/* Passenger */}
                <FormContent>

                                    
                      {/* Last name */}
                      <Input
                            title={''}
                            label={'Pick-up'}
                            type={'text'}
                            value={pickupName}
                            onChange={handlePickup}
                            error={pickupNameError}
                            requiredSymbol={'*'}
                          />


                        {/* Drop Off Name */}
                        <Input
                            title={''}
                            label={'Drop-off'}
                            type={'text'}
                            value={dropOffName}
                            onChange={handleDropOffName}
                            error={dropOffNameError}
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
                            label={'Phone Number'}
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
        </TaxiEditBody>
    </TaxiEditWrapper>
  )
}
