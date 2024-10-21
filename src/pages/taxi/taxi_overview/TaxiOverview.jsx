
import React, { useRef, useState } from 'react';
import {

  OverviewContent,
  OverviewHeader,
  OverviewHeaderItems,
  OverviewHeaderTitle,

  OverviewWrapper,

  TripMinContent,

  FlightContainer,
  FlightIconWrapper,

  FlightHeader,
  FlightTimeContainer,

  ContainerWrapper,
  ContainerHeader,
  Containerbody,
  ContainerTime,
  HorizontalLine,
  PDetailWrapper,
  RemoveService,

  RulesAndCondStyled,
  RulesAndCondContent,
  RulesAndCondHeader,
  IconWrapper,
  RulesSubHeader,
  RulesSubBody,
  ActiveIcon,
  PaymentModeWrapper,
  PaymentModeContent,
  AgreeWrapper,
  ButtonWrapper,
  ErrorMessage
} from './TaxiOverview.style';
import Button from '../../../components/button/Button';
import Timeline from '../../../components/timeline/Timeline';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import flightLogo from '../../../images/aire-peace.png';
import { FaCarSide, FaCheckCircle, FaCircle, FaPaypal, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { RadioCheck, RadioItem, RadioItemWrapper } from '../../flight/flight_booking/FlightBooking.style';
import { FaLocationDot } from 'react-icons/fa6';
import { MdFlightLand, MdLocalHotel } from 'react-icons/md';
import TaxiTimeline from '../../../components/timeline/TaxiTimline';
import PaymentModes from '../../../components/payment_mode/PaymentModes';
import Overlay from '../../../components/overlay/Overlay';



export default function TaxiOverview() {
  const navigate = useNavigate();
  const [showTripSummary, setShowTripSummary] = useState(false);
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsTitle, setTermsTitle] = useState('');
  const [termsBody, setTermsBody] = useState('');
  const [confirmPayPopup, setConfirmPayPopup] = useState(false);


  // Terms and Condition click handler
  const handleTermClick = ({ title, terms }) => {
    setShowTerms(true);
    setTermsTitle(title);
    setTermsBody(terms);
  };


  // Remove manzo outbout services
  const [showOutboundService, setShowOutboundService] =useState(true);

 // Remove manzo outbout services
 const [showInboundService, setShowInboundService] =useState(true);


  // show puchase condition
  const [rotateIcon, setRotateIcon] = useState('360deg')
  const [rotateIcon2, setRotateIcon2] = useState('360deg')
  const [showPurchase, setShowPurchase] =useState(false);
  const [showFareRules, setShowFareRules] =useState(false);

  // show/hide dropdown handler
  const handleOpenAndClose = (type) =>{
    if(type === "purchase condition"){
      setRotateIcon(!rotateIcon)
      setShowPurchase(!showPurchase)
    }else if(type === "fare rule"){
      setRotateIcon2(!rotateIcon2)
        setShowFareRules(!showFareRules)
      }
    }
  
// show/hide refund rules
const [showAdultBody, setShowAdultBody] = useState(true);
const [showChild, setShowChild] = useState(false);
const [showInfant, setShowInfant] = useState(false);
const [showAdultIcon, setShowAdultIcon] = useState(true)
const [showChildIcon, setShowChildIcon] = useState(false)
const [showInfantIcon, setShowInfantIcon] = useState(false)

// show/hide refund rules
const refundHandler = (type) =>{
  if(type === 'adult'){
    setShowAdultBody(true);
    setShowAdultIcon(true)
    setShowChild(false)
    setShowChildIcon(false);
    setShowInfant(false)
    setShowInfantIcon(false)
  }else if(type === 'child'){
    setShowAdultBody(false);
    setShowAdultIcon(false)
    setShowChild(true)
    setShowChildIcon(true);
    setShowInfant(false)
    setShowInfantIcon(false)
  }else if(type === 'infant'){
    setShowAdultBody(false);
    setShowAdultIcon(false)
    setShowChild(false)
    setShowChildIcon(false);
    setShowInfant(true)
    setShowInfantIcon(true)
  }
}




//=============== Payment Modes =================

// Paystack
const[paystack, setPaystack] = useState('Paystack');
const[paystackBrColor, setPaystackBrColor] = useState('#2563eb');
const[paystackCheckColor, setPaystackCheckColor] = useState('#2563eb');


// Barter (Flutter wave)
const[barter, setBarter] = useState('Barter');
const[barterBrColor, setBarterBrColor] = useState('grey');
const[barterCheckColor, setBarterCheckColor] = useState('white');


// Paypal
const[paypal, setPaypal] = useState('Paypal');
const[paypalBrColor, setPaypalBrColor] = useState('grey');
const[paypalCheckColor, setPaypalCheckColor] = useState('white')



// Pay Small
const[paySmall, setPaySmall] = useState('Pay Small');
const[paySmallBrColor, setPaySmallBrColor] = useState('grey');
const[paySmallCheckColor, setPaySmallCheckColor] = useState('white')



const[paymentMode, setPaymentMode] = useState(paystack);


const handlePaymentMode = (type) =>{
  if(type === paystack){
    setPaymentMode(paystack);
    setPaystackBrColor('#2563eb');
    setPaystackCheckColor('#2563eb');
    setBarterBrColor('grey')
    setBarterCheckColor('white')
    setPaypalBrColor('grey')
    setPaypalCheckColor('white')
    setPaySmallBrColor('grey')
    setPaySmallCheckColor('white')
  }
  else if(type === barter){
    setPaymentMode(barter);
    setPaystackBrColor('grey')
    setPaystackCheckColor('white')
    setBarterBrColor('#2563eb')
    setBarterCheckColor('#2563eb')
    setPaypalBrColor('grey')
    setPaypalCheckColor('white')
    setPaySmallBrColor('grey')
    setPaySmallCheckColor('white')
  }
  else if(type === paypal){
    setPaymentMode(paypal);
    setPaystackBrColor('grey')
    setPaystackCheckColor('white')
    setBarterBrColor('grey')
    setBarterCheckColor('white')
    setPaypalBrColor('#2563eb')
    setPaypalCheckColor('#2563eb')
    setPaySmallBrColor('grey')
    setPaySmallCheckColor('white')
  } else if(type === paySmall){
    setPaymentMode(paySmall);
    setPaystackBrColor('grey')
    setPaystackCheckColor('white')
    setBarterBrColor('grey')
    setBarterCheckColor('white')
    setPaypalBrColor('grey')
    setPaypalCheckColor('white')
    setPaySmallBrColor('#2563eb')
    setPaySmallCheckColor('#2563eb')
  }
}


// Checkbox Validation: Terms and Agreement 
// State for form values
const [isChecked, setIsChecked] = useState(false);
const [isValid, setIsValid] = useState(true);

// Handler for checkbox change
const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
};

// Form submit handler
const handleSubmit = (event) => {
  event.preventDefault();
  
  // Check if checkbox is checked
  if (!isChecked) {
    setIsValid(false);
    return;
  }

  // Proceed with form submission or further logic
  setIsValid(true);
  navigate('/flight-success')
  // You can also reset form or perform other actions here
};


  // CLICK AND SCROLL TO General Reservation conditions
  const reservationRef = useRef(null);
  
  const handleReservationRef = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }



  return (
    <OverviewWrapper>
      {/* Header */}
      <OverviewHeader>
        <OverviewHeaderItems>
          <OverviewHeaderTitle>
            <span><Button text={'Back'} onClick={() => navigate('/taxi-customization')} /></span>
            <h2>Proceed with your booking</h2>
          </OverviewHeaderTitle>
          {/* Timeline: Trip info steps */}
          <TaxiTimeline currentStep={4} />
        </OverviewHeaderItems>
      </OverviewHeader>

      {/* Body */}
        {/* Main Content */}
        <TripMinContent>
          {/* User info content */}
          <OverviewContent>
            <h3 style={{marginBottom:"-10px"}}>Booking Summary</h3>
            <HorizontalLine />

            {/* OUTBOUND FLIGHT */}
            <FlightContainer>
              <FlightIconWrapper>
              <FlightIcon Icon={<FaCarSide />} IconSize={'13px'} rotate={'360deg'} iconColor={'#0D3984'}/> 
              <p>Luxury</p>
              </FlightIconWrapper>
             
                {/* hotel name */}
              <FlightHeader>
                <h2>Adamawa House</h2>
              </FlightHeader>
              <FlightIconWrapper>
             
             {/* hotel address */}
              <FaLocationDot />
                    <p>1099 First Ave, Wuse, Abuja 900103, Federal Capital Territory</p>
                </FlightIconWrapper>

              <FlightTimeContainer>
               {/* Location */}
                <ContainerWrapper>
                    <ContainerHeader>
                      <b>Location</b>
                    </ContainerHeader>
                    <Containerbody wd={'100%'}>
                      <div>
                          <ContainerTime><b>Pick-up:</b></ContainerTime> 
                          <span><MdFlightLand /> Nnamdi Azikiwe International Airport, Federal Capital Territory</span>
                      </div>
                    </Containerbody>
                    <p></p>
                    <Containerbody wd={'100%'}>
                      <div>
                          <ContainerTime><b>Drop-off:</b></ContainerTime> 
                          <span><FaLocationDot /> Adamawa House, 1099 First Ave, Wuse, Abuja 900103, Federal Capital Territory</span>
                      </div>
                    </Containerbody>
                </ContainerWrapper>


                <ContainerWrapper>
                    <ContainerHeader>
                      <b>Date/Time</b>
                    </ContainerHeader>
                    <Containerbody ws={'100%'}>
                      <div>
                          <ContainerTime><b>Pickup-date:</b></ContainerTime> 
                          <span>5th Aug. 2024. 12:00pm</span>

                          <ContainerTime><b>Pickup-time:</b></ContainerTime> 
                          <span>8:00am</span> 
                      </div>
                    
                    </Containerbody>
                </ContainerWrapper>

               {/* Class/ Baggage */}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Class/Passenger</b>
                    </ContainerHeader>
                    <Containerbody wd={'100%'}>
                      <div>
                          <ContainerTime><b>Class</b></ContainerTime> 
                          <span>Luxury</span>

                          <ContainerTime><b>Passenger</b></ContainerTime> 
                          <span>4 passenger(s)</span>

                     </div>
                    </Containerbody>
                </ContainerWrapper>

            {/* Duration/ Refund*/}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Policy</b>
                    </ContainerHeader>
                    <Containerbody wd={'100%'}>

                    <div>
                        <ContainerTime><b>Refund</b></ContainerTime> 
                        <span> Fee is non Refundable after pick up time</span> 

                        <ContainerTime><b>Cancellation</b></ContainerTime> 
                        <span>Free cancellation 48 hours before departure</span>

                            <ContainerTime><b>Cancellation fee</b></ContainerTime> 
                            <span>50% cancellation fee applies for less than 24 hours before pick time</span>
                    </div>
                    </Containerbody>
                </ContainerWrapper>
              </FlightTimeContainer>
            </FlightContainer>
          

           
            {/* Passengers Detail */}
            <h3>Passenger Detail</h3>
            <PDetailWrapper>
              <ContainerWrapper>
              <ContainerHeader>
                        <div><b>Title </b></div>
                        <div><b>Name </b></div>
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
                        <div>
                            <span>Mr. </span>
                           
                        </div>
                        <div>
                            <span>Isah Abdulmumin</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>
                  <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Passport </b></div>
                        <div><b>Gender</b></div>
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
                        <div>
                            <span>-</span>
                           
                        </div>
                        <div>
                            <span>Male</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>             
            </PDetailWrapper>
            
        {/* Contant Detail */}
            <HorizontalLine />
            <h3>Contact Detail</h3>
            <div>
            <PDetailWrapper>
            <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Passenger Name </b></div>
                        <div><b>Email</b></div>
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
                        <div>
                            <span>Mr. Isah Abdulmumin</span>
                        </div>
                        <div>
                        <span>abdulmuminisah79@gmail.com</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>

                  <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Phone No.</b></div>
                        <div><b>Whatsapp Phone No.</b></div>
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
                        <div>
                            <span>+2349055001663</span>
                        </div>
                        <div>
                            <span>+2349055001663</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>
             
            </PDetailWrapper>
            
            </div>
               
                               
            {/* Total Price */}
         
            <h3>Total Price</h3>
            <HorizontalLine />
            <PDetailWrapper>
                <ContainerWrapper>
                      <ContainerHeader hBt={'none'}>
                        <span>4 Passenger(s)  </span>
                        <span>N50,000</span>
                      </ContainerHeader>
                    
                      <ContainerHeader hBt={'none'}>
                        <span><h2>Payable Amount</h2></span>
                        <span><h2>N50,000</h2></span>
                      </ContainerHeader>
                  </ContainerWrapper>
            </PDetailWrapper>               
            </OverviewContent>

     {/* Mode of Payment */}
            <OverviewContent>         
                <h3>Choose your payment mode</h3>
              {/* Payment Mode Components */}
                <PaymentModes
                        paystack={paystack}
                        paystackBrColor={paystackBrColor}
                        paystackCheckColor={paystackCheckColor}

                        barter={barter}
                        barterBrColor={barterBrColor}
                        barterCheckColor={barterCheckColor}

                        paypal={paypal}
                        paypalBrColor={paypalBrColor}
                        paypalCheckColor={paypalCheckColor}

                        paySmall={paySmall}
                        paySmallBrColor={paySmallBrColor}
                        paySmallCheckColor={paySmallCheckColor}

                        handlePaymentMode={handlePaymentMode}
                /> 
                <form onSubmit={handleSubmit}>
                {/* Agreement */}
                <AgreeWrapper>
                  <input
                    type="checkbox"
                    id="terms"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span>*</span>
                  <p>I have read and accept the <span>terms and conditions</span> of Manzo Taxi Booking.</p>
                </AgreeWrapper>
                
                  {!isValid && (
                    <ErrorMessage>You must agree to the terms and conditions.</ErrorMessage>
                  )}

                {/* Total Payable amount */}
                <ButtonWrapper>
                    <span>Payable Amount: <b>N31,000.00</b></span>
                  <Button text={'Continue to payment'} onClick={()=>navigate('/taxi-success')}/>  
                    <Button text={'Cofirm pay'} onClick={()=>setConfirmPayPopup(true)}/> 
                </ButtonWrapper> 
                </form>
            </OverviewContent>
        </TripMinContent>

      
      
      {/* Overlay: Popup to confirm payments */}
     {  
      confirmPayPopup &&
      <Overlay
           contentHight={""}
              contentWidth   ={""}
              overlayButtonClick={()=>navigate('/taxi-success')}
              closeOverlayOnClick={()=> setConfirmPayPopup(false)}
              text1={'Continue'}
              text2={'No'}
          >
          <div style={{display: "flex", gap:"10px", width:"100%", alignItems: "center", justifyContent:"center"}}>
            <span>I Have make the payment</span>
          </div>
           
        </Overlay>
      }

</OverviewWrapper>
  );
}

