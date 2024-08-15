
import React, { useState } from 'react'
import { ButtonWrapper, FlightDetailWrapper, FormContent, FormWrapper, PromoHeader, PromoInput, PromoWrapper, SideFlightAirport, SideFlightSummary, TotalFare, TotalTrip, TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour, TaxiCustomizationBody, TaxiCustomizationContent, TaxiCustomizationHeader, TaxiCustomizationHeaderItems, TaxiCustomizationHeaderSteps, TaxiCustomizationHeaderTitle, TaxiCustomizationSideBar, TaxiCustomizationSideContent, TaxiCustomizationWrapper, TripMinContent, TripPassenger, TripDetailContainer, TaxiCustomizationWrapperb, ChargesWrapper } from './TaxiCustomization.stye'

import flightLogo from '../../../images/aire-peace.png'
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button/Button';
import Timeline from '../../../components/timeline/Timeline';
import Input from '../../../components/inputs/input/Input';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCarSide, FaEdit, FaTaxi, FaUser } from 'react-icons/fa';
import SelectInput from '../../../components/inputs/selectInput/SelectInput';
import RadioInput from '../../../components/inputs/input_radio/RadioInput';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import TaxiResultCard from '../../../components/taxi/taxi_result_card/TaxiResultCard';
import sedan from '../../../images/taxi/sedan.jpg'
import { TaxiResultList } from '../../../data/object/TaxiResultList';
import { TripInfoContent } from '../../flight/flight_result/trip_info/TripInfo.style';
import { GuestFormWrapper } from '../../hotel/gues_info/GuestInfo.style';
import { ErrorMessage } from '../../flight/flight_overview/FlightOverview.style';
import { TripDetailWrapper } from '../../hotel/hotel_customization/HotelCustomization.style';
import { CustomizeTripDetail } from '../../flight/flight_customization/FlightCustomization.style';
import TaxiTimeline from '../../../components/timeline/TaxiTimline';
import { FaLocationDot } from 'react-icons/fa6';
import { MdFlightLand } from 'react-icons/md';

export default function TaxiCustomization() {

  
    
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

  const [showtripDepart, setShowtripDepart] = useState(true)
  const [showBookingDetail, setShowBookingDetail] = useState(true)
 






  return (
    <TaxiCustomizationWrapper>        
        {/* header */}
        <TaxiCustomizationHeader>
        <TaxiCustomizationHeaderItems >
            <TaxiCustomizationHeaderTitle>
                <span><Button text={'Back'} onClick={()=>navigate('/taxi-detail')}/></span>
                <h2>Proceed with your booking</h2>
            </TaxiCustomizationHeaderTitle>
            
            {/* timeline: Trip info steps */}
            <TaxiTimeline currentStep={3}/>
        </TaxiCustomizationHeaderItems>
        </TaxiCustomizationHeader>
         
          {/* body */}
        <TaxiCustomizationBody>
              {/* Sidebar */}

             <TaxiCustomizationSideBar>
                  <TaxiCustomizationSideContent>
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
                    <FlightIcon Icon={<FaLocationDot/>} IconSize={'14px'} rotate={'360deg'} iconColor={'#4a4a4a'}/> 
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
                  </TaxiCustomizationSideContent>                   
                </TaxiCustomizationSideBar> 
            


            {/* Main Content */}
            <TripMinContent>
        
            {/* User info content */}
            <TaxiCustomizationContent>
              {/* Flight Detail section */}

              {/* For Departure */}
              <TaxiCustomizationWrapperb>
               {/* title */}
                  <TripDetailTile onClick={()=>setShowtripDepart(!showtripDepart)}>
                  <span> <h2>Airport, Abuja</h2> <FlightIcon Icon={<FaCarSide/>} rotate={'360'} iconColor={'#0D3984'}/>  <h2>Garki</h2> </span>
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
              </TaxiCustomizationWrapperb>

              
              <TaxiCustomizationWrapperb>
              {/* Title */}
              <TripDetailTile onClick={() => setShowBookingDetail(!showBookingDetail)}>
                <span><h2>Passenger Detail</h2></span>
                <span>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </span>
              </TripDetailTile>
              {/* Body */}
              {showBookingDetail &&
                <TripDetailBody>
                  <TripDetailWrapper>
                    <CustomizeTripDetail>
                    <h4>(1) ISAH ABDULMUMIN ADULT MALE abdulmuminisah79@gmail.com</h4>
                    </CustomizeTripDetail>
                    <span onClick={()=>navigate('/edit-taxi-info/#edit-form')}><FaEdit/></span>
                  </TripDetailWrapper>
                  <TripDetailWrapper>
                    <CustomizeTripDetail>
                      <h4>(2) ISAH YUSUF ADULT MALE abdulmuminisah79@gmail.com</h4>
                    </CustomizeTripDetail>
                    <span onClick={()=>navigate('/edit-taxi-info/#edit-form')}><FaEdit/></span>  
                  </TripDetailWrapper>
                </TripDetailBody>
              }

              </TaxiCustomizationWrapperb>
                        <ButtonWrapper>
                    <Button text={"Continue"} onClick={()=>navigate('/taxi-overview')}/>
                </ButtonWrapper>   
                </TaxiCustomizationContent>
            </TripMinContent>
        </TaxiCustomizationBody>
    </TaxiCustomizationWrapper>
  )
}
