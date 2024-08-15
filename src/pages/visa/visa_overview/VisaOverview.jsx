
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
 
  AgreeWrapper,
  ButtonWrapper,
  ErrorMessage,
  EditHeader
} from './VisaOverview.style';
import Button from '../../../components/button/Button';
import Timeline from '../../../components/timeline/Timeline';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import flightLogo from '../../../images/aire-peace.png';
import { FaCarSide, FaCheckCircle, FaCircle, FaEdit, FaPaypal, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { RadioCheck, RadioItem, RadioItemWrapper } from '../../flight/flight_booking/FlightBooking.style';
import { FaLocationDot } from 'react-icons/fa6';
import { MdFlightLand, MdLocalHotel } from 'react-icons/md';
import TaxiTimeline from '../../../components/timeline/TaxiTimline';
import PaymentModes from '../../../components/payment_mode/PaymentModes';
import { HRStyled } from '../Visa.style';
import { UserVisaDataContent, UserVisaDataWrapper, VisaDataImg } from '../../../components/visa/UserVisaData.style';
import passport from '../../../images/pasport.jpg'

export default function VisaOverview() {
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);
  const [termsTitle, setTermsTitle] = useState('');
  const [termsBody, setTermsBody] = useState('');

  // Terms and Condition click handler
  const handleTermClick = ({ title, terms }) => {
    setShowTerms(true);
    setTermsTitle(title);
    setTermsBody(terms);
  };


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
}else if(isChecked){

  // Proceed with form submission or further logic
  setIsValid(true);
  navigate('/visa-success')
  // You can also reset form or perform other actions here
};

}


  return (
    <OverviewWrapper>
      {/* Header */}
      <OverviewHeader>
        <OverviewHeaderItems>
          <OverviewHeaderTitle>
            <span><Button Icon={<FaEdit/>} text={'Edit Data'} onClick={() => navigate('/edit-visa')} /></span>
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
        

      {/* Visa application detail */}
      <EditHeader><h3>Saudi Visa Application Detail</h3> <span onClick={()=>{navigate('/edit-visa')}}>Edit <FaEdit/></span></EditHeader>

      <HRStyled /> 

      <UserVisaDataWrapper>
        <UserVisaDataContent>
            <VisaDataImg>
                <img src={passport} alt="" srcset="" /> 
                <div>
                    <div>
                        <span>Name: </span> <span>{'Isah Abdulmumin'}</span> 
                    </div>
                    <div>
                        <span>  Nationality: </span> <span>{'Nigeria'}</span>
                    </div>
                    <div>
                        <span>  Date of Birth: </span> <span>{'6th Aug 1989'}</span>
                    </div>
                    <div>
                        <span>  Visa Type: </span> <span>{'Student Visa'}</span>
                    </div>                    
                    <div>
                        <span>  Entry Type: </span> <span>{'entryType'}</span>
                    </div>
                    <div>
                        <span>  Visa Number </span> <span>{'eieiei39395757'}</span>
                    </div>                    
                    <div>
                        <span>  Issue Date </span> <span>{'5th Oct 2019'}</span>
                    </div>
                    <div>
                        <span>  Expiry Date </span> <span>{'5th Oct 2025'}</span>
                    </div>
            
                    <div>
                        <span>  Passport Number </span> <span>{'P13FGHSDLL454J'}</span>
                    </div>
                    
                    <div>
                        <span>  Place Issued </span> <span>{'Niger'}</span>
                    </div>
                                   
                    <div>
                        <span>  Duration: </span> <span>{'6 Years'}</span>
                    </div>
                </div>
            </VisaDataImg>
        </UserVisaDataContent>
    </UserVisaDataWrapper>
           


                               
            {/* Total Price */}
         
            <h3>Visa Application Fee</h3>
            <HorizontalLine />
            <PDetailWrapper>
                <ContainerWrapper>
                      <ContainerHeader hBt={'none'}>
                        <span>Applicant  </span>
                        <span>N250,000</span>
                      </ContainerHeader>
                    
                      <ContainerHeader hBt={'none'}>
                        <span><h2>Payable Amount</h2></span>
                        <span><h2>N250,000</h2></span>
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
                  <Button text={'Continue to payment'}/> 
                </ButtonWrapper> 
                </form>
            </OverviewContent>
        </TripMinContent>
</OverviewWrapper>
  );
}

