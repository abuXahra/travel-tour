import React, { useState } from 'react';
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
} from './FlightOverview.style';
import Button from '../../../components/button/Button';
import Timeline from '../../../components/timeline/Timeline';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import flightLogo from '../../../images/aire-peace.png';
import { FaCheckCircle, FaCircle, FaPaypal, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { RadioCheck, RadioItem, RadioItemWrapper } from '../flight_booking/FlightBooking.style';
import Overlay from '../../../components/overlay/Overlay';


export default function FlightOverview() {
  const navigate = useNavigate();
  const [showTripSummary, setShowTripSummary] = useState(false);
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsTitle, setTermsTitle] = useState('');
  const [termsBody, setTermsBody] = useState('');


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
  return (
    <OverviewWrapper>
      {/* Header */}
      <OverviewHeader>
        <OverviewHeaderItems>
          <OverviewHeaderTitle>
            <span><Button text={'Back'} onClick={() => navigate('/flight-result')} /></span>
            <h2>Proceed with your booking</h2>
          </OverviewHeaderTitle>
          {/* Timeline: Trip info steps */}
          <Timeline currentStep={4} />
        </OverviewHeaderItems>
      </OverviewHeader>

      {/* Body */}
        {/* Main Content */}
        <TripMinContent>
          {/* User info content */}
          <OverviewContent>
            <h3 style={{marginBottom:"-10px"}}>Trip Summary</h3>
            <HorizontalLine />

            {/* OUTBOUND FLIGHT */}
            <FlightContainer>
              <FlightIconWrapper>
              {/* <FlightIcon rotate={'270deg'} iconColor={'#FF6805'}/>  */}
              <FlightIcon IconSize={'13px'} rotate={'90deg'} iconColor={'#0D3984'}/> 
              <p>Outbound Flight</p>
              </FlightIconWrapper>
             
              <FlightHeader>
                <h2>Lagos</h2>
                <FlightIcon IconSize={'13px'} rotate={'90deg'} iconColor={'black'}/>
                <h2>Abuja</h2>
                <p>Fri, 26 Jul 2024</p>
              </FlightHeader>

              <FlightTimeContainer>
               {/* Departure */}
                <ContainerWrapper>
                    <ContainerHeader>
                      <b>Departure</b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                          <ContainerTime><b>13:09</b> LOS</ContainerTime> 
                          <span>Naamdi Azikiwe International Airport, Lagos, Nigeria</span>
                      </div>
                      <div>
                          <span><FaCheckCircle/></span> 
                          <span>1hr : 30min</span> 
                          <span>0-stop</span>  
                      </div>
                    </Containerbody>
                </ContainerWrapper>

               {/* Arrival */}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Arrival</b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                          <ContainerTime><b>14:50</b> ABV</ContainerTime> 
                          <span>Murtala Muammed International Airport, Abuja, Nigeria</span>
                      </div>
                      <div>
                          <span style={{color: 'red', fontStyle: "italic", fontWeight: "bold", fontSize: '9px' }}>AIR PEACE</span>  
                          <img src={flightLogo} height={20} width={40} alt="" srcset="" /> 
                          <img src={flightLogo} height={20} width={40} alt="" srcset="" /> 
                      </div>
                    </Containerbody>
                </ContainerWrapper>



               {/* Class/ Baggage */}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Class/Checked Baggage Allowance </b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                          <ContainerTime>Economy (F)</ContainerTime> 
                          <span>Adult: 2 piece(s), upto 23kg each</span>
                          <span>Child: 2 piece(s), upto 23kg each</span>
                          <span>Infant: 2 piece(s), upto 23kg</span>
                      </div>
                      <div>
                      </div>
                    </Containerbody>
                </ContainerWrapper>
              </FlightTimeContainer>
            </FlightContainer>
          

           {/* INBOUND FLIGHT */}
           <FlightContainer>
              <FlightIconWrapper>
              {/* <FlightIcon rotate={'270deg'} iconColor={'#FF6805'}/>  */}
              <FlightIcon IconSize={'13px'} rotate={'270deg'} iconColor={'#FF6805'}/> 
              <p>Inbound Flight</p>
              </FlightIconWrapper>
             
              <FlightHeader>
                <h2>Abuja</h2>
                <FlightIcon IconSize={'13px'} rotate={'90deg'} iconColor={'black'}/>
                <h2>Lagos</h2>
                <p>Fri, 26 Jul 2024</p>
              </FlightHeader>

              <FlightTimeContainer>
               {/* Departure */}
                <ContainerWrapper>
                    <ContainerHeader>
                      <b>Departure</b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>

                          <ContainerTime><b>14:50</b> ABV</ContainerTime> 
                          <span>Murtala Muammed International Airport, Abuja Nigeria</span>
                      </div>
                      <div>
                          <span><FaCheckCircle/></span> 
                          <span>1hr : 30min</span> 
                          <span>0-stop</span>  
                      </div>
                    </Containerbody>
                </ContainerWrapper>

               {/* Arrival */}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Arrival</b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                      <ContainerTime><b>13:09</b> LOS</ContainerTime> 
                      <span>Naamdi Azikiwe International Airport, Lagos Nigeria</span>
                      </div>
                      <div>
                          <span style={{color: 'red', fontStyle: "italic", fontWeight: "bold", fontSize: '9px' }}>AIR PEACE</span>  
                          <img src={flightLogo} height={20} width={40} alt="" srcset="" /> 
                          <img src={flightLogo} height={20} width={40} alt="" srcset="" /> 
                      </div>
                    </Containerbody>
                </ContainerWrapper>

               {/* Class/ Baggage */}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Class/Checked Baggage Allowance </b>
                    </ContainerHeader>
                    <Containerbody>
                      <div>
                          <ContainerTime>Economy (F)</ContainerTime> 
                          <span>Adult: 2 piece(s), upto 23kg each</span>
                          <span>Child: 2 piece(s), upto 23kg each</span>
                          <span>Infant: 2 piece(s), upto 23kg</span>
                      </div>
                      <div>
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
                        <div><b>Passenger Name </b></div>
                        <div><b>Passport </b></div>
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
                        <div>
                            <span>Mr. Isah Abdulmumin</span>
                            <span>Najib Abdulmin</span>
                            <span>Amjad Abdulmumin</span>
                        </div>
                        <div>
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>

                  <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Date of Birth </b></div>
                       <div><b>Type </b></div> 
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
         
                        <div>
                            <span>02 March 1972</span>
                            <span>08 April 2023</span>
                            <span>01 March 2013</span>
                        </div>
                        <div>
                            <span>Adult</span>
                            <span>Infant</span>
                            <span>Child</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>
             
            </PDetailWrapper>
            
        {/* Contant Detail */}
            <HorizontalLine />
            <h3>Contact Detail</h3>
            <PDetailWrapper>
            <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Passenger Name </b></div>
                        <div><b>Type </b></div>
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
                        <div>
                            <span>Mr. Isah Abdulmumin</span>

                        </div>
                        <div>
                        <span>Primary Passenger</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>

                  <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Email</b></div>
                        <div><b>Number </b></div>
                      </ContainerHeader>
                      <Containerbody bb={'1px solid #48484810' } pb={'5px'}>
                        <div>
                            <span>abdulmuminisah79@gmail.com</span>
                        </div>
                        <div>
                        <span>+234-9055001663</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>
             
            </PDetailWrapper>


              
        {/* Manzo Travel Services For OutBound */}
       {showOutboundService &&
       <>
       <HorizontalLine />
        <h3>Manzo Travel Services Outbound</h3>
            <FlightHeader>
                <h4>Lagos</h4>
                <FlightIcon IconSize={'13px'} rotate={'90deg'} iconColor={'black'}/>
                <h4>Abuja</h4>
                <p>Fri, 26 Jul 2024</p>
              </FlightHeader>        
             
              <PDetailWrapper>
                {/* Remove service Icon */}
                  <RemoveService onClick={()=>setShowOutboundService(false)}/>     
              <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Passenger</b></div>
                        <div><b>Service </b></div>
                      </ContainerHeader>
                      <Containerbody>
                        <div>
                            <span>Mr. Abdulmumin Isah, +2</span>
                        </div>
                        <div>
                        <span>Airport lounge (Lagos & Abuja only), Abuja</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>

                  <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Lounge Type</b></div>
                        <div><b>Price </b></div>
                      </ContainerHeader>
                      <Containerbody >
                        <div>
                            <span>Transit</span>
                        </div>
                        <div>
                        <span>₦20,000</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>
              </PDetailWrapper>
              </>}


        {/* Manzo Travel Services For InBound */}

         {showInboundService &&   
         <>
           <HorizontalLine />
            <h3>Manzo Travel Services Inbound</h3>
                <FlightHeader>
                    <h4>Abuja</h4>
                    <FlightIcon IconSize={'13px'} rotate={'90deg'} iconColor={'black'}/>
                    <h4>Lagos</h4>
                    <p>Fri, 26 Jul 2024</p>
                  </FlightHeader>        
                
                  <PDetailWrapper>  
                  {/* Remove service Icon */}
                    <RemoveService onClick={()=>setShowInboundService(false)}/> 
                  <ContainerWrapper>
                      <ContainerHeader>
                        <div><b>Passenger</b></div>
                        <div><b>Service </b></div>
                      </ContainerHeader>
                      <Containerbody>
                        <div>
                            <span>Mr. Abdulmumin Isah, +2</span>
                        </div>
                        <div>
                        <span>Manzo Protocol Service (Lagos & Abuja Only), Lagos</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>

                  <ContainerWrapper>
                      <ContainerHeader>
                        <div><b> Point</b></div>
                        <div><b>Price </b></div>
                      </ContainerHeader>
                      <Containerbody >
                        <div>
                            <span>Transit</span>
                        </div>
                        <div>
                        <span>₦20,000</span>
                        </div>
                      </Containerbody>
                  </ContainerWrapper>  
                    </PDetailWrapper> 
                    </>
                    }


                     {/* Purchase Condition */}
               
                     <ContainerWrapper>
                        <RulesAndCondStyled>
                          <RulesAndCondHeader onClick={()=>handleOpenAndClose('purchase condition')}>
                            <span>
                            <h2 style={{color:"black"}}>Purchase Condition</h2>
                            </span>
                            <span>
                              <h2><IconWrapper rotateIcon={rotateIcon}><IoIosArrowDown/></IconWrapper></h2>
                            </span>
                          </RulesAndCondHeader>

                    {  showPurchase &&    <RulesAndCondContent>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis voluptas officia odit dignissimos quae corrupti dolor fugit incidunt dicta tempore cupiditate sapiente esse beatae error reiciendis consectetur, assumenda, dolorem vel ducimus excepturi, architecto eaque ut debitis. Exercitationem, amet, esse expedita minus natus, tempora enim odio facere corporis reprehenderit eius. Voluptates expedita officia temporibus eius! Laudantium nulla provident dolor ullam iste sapiente consequuntur voluptates accusamus quam repudiandae ipsam blanditiis quia non ab laborum voluptate eum facilis, perspiciatis nobis unde doloribus commodi! Ipsum tempora reprehenderit porro magnam voluptate officia totam natus dolor. Unde culpa voluptas quasi illum debitis officia soluta dignissimos.
                          </RulesAndCondContent>
                          }
                        </RulesAndCondStyled>
                  </ContainerWrapper>  


                  {/*  */}
                  <ContainerWrapper>
                        <RulesAndCondStyled>
                          <RulesAndCondHeader bt={'none'} onClick={()=>handleOpenAndClose('fare rule')}>
                            <span>
                            <h2 style={{color:"black"}}>Refund Fare Rules</h2>
                            </span>
                            <span>
                              <h2><IconWrapper rotateIcon={rotateIcon2}><IoIosArrowDown/></IconWrapper></h2>
                            </span>
                          </RulesAndCondHeader>

                    {  showFareRules &&    
                        <RulesAndCondContent>
    
                            <RulesSubHeader > 
                              <div onClick={()=>refundHandler('adult')}>
                                <span><b>Adult</b></span>
                                {showAdultIcon && <ActiveIcon />}
                              </div>
                              <div onClick={()=>refundHandler('child')}>
                                <span><b>Child</b></span>
                                {showChildIcon && <ActiveIcon />}
                              </div>
                              <div onClick={()=>refundHandler('infant')}>
                                <span><b>Infant</b></span>
                                {showInfantIcon && <ActiveIcon />}
                              </div>
                            </RulesSubHeader>
                            
                            <RulesSubBody>
                            {/* Adult Body */}
                        { showAdultBody &&
                            <div>
                                <h4>Adult Refunds Rules</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis voluptas officia odit dignissimos quae corrupti dolor fugit incidunt dicta tempore cupiditate sapiente esse beatae error reiciendis consectetur, assumenda, dolorem vel ducimus excepturi, architecto eaque ut debitis. Exercitationem, amet, esse expedita minus natus, tempora enim odio facere corporis reprehenderit eius. Voluptates expedita officia temporibus eius! Laudantium nulla provident dolor ullam iste sapiente consequuntur voluptates accusamus quam repudiandae ipsam blanditiis quia non ab laborum voluptate eum facilis, perspiciatis nobis unde doloribus commodi! Ipsum tempora reprehenderit porro magnam voluptate officia totam natus dolor. Unde culpa voluptas quasi illum debitis officia soluta dignissimos.</p>
                              </div>}
                             
                                 {/* Child Body */}
                          {showChild &&    <div>
                              <h4>Child Refunds Rules</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis voluptas officia odit dignissimos quae corrupti dolor fugit incidunt dicta tempore cupiditate sapiente esse beatae error reiciendis consectetur, assumenda, dolorem vel ducimus excepturi, architecto eaque ut debitis. Exercitationem, amet, esse expedita minus natus, tempora enim odio facere corporis reprehenderit eius. Voluptates expedita officia temporibus eius! Laudantium nulla provident dolor ullam iste sapiente consequuntur voluptates accusamus quam repudiandae ipsam blanditiis quia non ab laborum voluptate eum facilis, perspiciatis nobis unde doloribus commodi! Ipsum tempora reprehenderit porro magnam voluptate officia totam natus dolor. Unde culpa voluptas quasi illum debitis officia soluta dignissimos.</p>
                              
                                </div>}
                              
                               {/* Infant Body */}
                              {showInfant &&  <div>
                                  <h4>Infant Refunds Rules</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis voluptas officia odit dignissimos quae corrupti dolor fugit incidunt dicta tempore cupiditate sapiente esse beatae error reiciendis consectetur, assumenda, dolorem vel ducimus excepturi, architecto eaque ut debitis. Exercitationem, amet, esse expedita minus natus, tempora enim odio facere corporis reprehenderit eius. Voluptates expedita officia temporibus eius! Laudantium nulla provident dolor ullam iste sapiente consequuntur voluptates accusamus quam repudiandae ipsam blanditiis quia non ab laborum voluptate eum facilis, perspiciatis nobis unde doloribus commodi! Ipsum tempora reprehenderit porro magnam voluptate officia totam natus dolor. Unde culpa voluptas quasi illum debitis officia soluta dignissimos.</p>
                              
                                </div>}
                            </RulesSubBody>
                        </RulesAndCondContent>
                          }
                        </RulesAndCondStyled>
                  </ContainerWrapper>  
        
                               
            {/* Total Price */}
         
            <h3>Total Price</h3>
            <HorizontalLine />
            <PDetailWrapper>
                <ContainerWrapper>
                      <ContainerHeader hBt={'none'}>
                        <span><b>Trip Price</b><br/>(1 Adult + 1 Child + 1 infant)</span>
                        <span><b>N270,000 </b></span>
                      </ContainerHeader>
                      <ContainerHeader hBt={'none'}>
                        <span>Airport lounge (Lagos & Abuja only), Abuja</span>
                        <span> N20,000</span>
                      </ContainerHeader>
                      <ContainerHeader hBt={'none'}>
                        <span> Manzo Protocol Service (Lagos & Abuja Only), Lagos</span>
                        <span>N20,000</span>
                      </ContainerHeader>
                      <ContainerHeader hBt={'none'}>
                        <span> <h2>Payable Amount</h2></span>
                        <span><h2>N310,000</h2></span>
                      </ContainerHeader>
                  </ContainerWrapper>
            </PDetailWrapper>               
            </OverviewContent>

     {/* Mode of Payment */}
            <OverviewContent>         
                <h3>Choose your payment mode</h3>
                <PDetailWrapper>
                    <PaymentModeWrapper>
                     
                       {/* PayStack */}
                        <PaymentModeContent>
                          <span>
                            <p>{paystack}</p>
                          </span>
                          <span>
                            <RadioItemWrapper onClick={()=>handlePaymentMode(paystack)}>
                              <RadioItem brColor={paystackBrColor}>
                                <RadioCheck checkColor={paystackCheckColor}>
                                  <FaCircle />
                                </RadioCheck>
                              </RadioItem>
                          </RadioItemWrapper>  
                          </span>
                        </PaymentModeContent>

                        {/* Barter (Flutter Wave) */}
                        <PaymentModeContent>
                          <span>
                            <p>{barter}</p>
                          </span>
                          <span>
                            <RadioItemWrapper onClick={()=>handlePaymentMode(barter)}>
                              <RadioItem brColor={barterBrColor}>
                                <RadioCheck checkColor={barterCheckColor}>
                                  <FaCircle />
                                </RadioCheck>
                              </RadioItem>
                          </RadioItemWrapper>  
                          </span>
                        </PaymentModeContent>

                        {/* Paypal */}
                        <PaymentModeContent>
                          <span>
                            <p>{paypal}</p>
                          </span>
                          <span>
                            <RadioItemWrapper onClick={()=>handlePaymentMode(paypal)}>
                              <RadioItem brColor={paypalBrColor}>
                                <RadioCheck checkColor={paypalCheckColor}>
                                  <FaCircle />
                                </RadioCheck>
                              </RadioItem>
                          </RadioItemWrapper>  
                          </span>
                        </PaymentModeContent>

                        {/* Pay Small */}
                        <PaymentModeContent>
                          <span>
                            <p>{paySmall}</p>
                          </span>
                          <span>
                            <RadioItemWrapper onClick={()=>handlePaymentMode(paySmall)}>
                              <RadioItem brColor={paySmallBrColor}>
                                <RadioCheck checkColor={paySmallCheckColor}>
                                  <FaCircle />
                                </RadioCheck>
                              </RadioItem>
                          </RadioItemWrapper>  
                          </span>
                        </PaymentModeContent>

                    </PaymentModeWrapper>
                </PDetailWrapper>  
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
                  <p>I have read and accept the <span>terms and conditions</span> as stated above and <a href='#'>General of conditions of carriage </a> applicable to my flight.</p>
                </AgreeWrapper>
                
                  {!isValid && (
                    <ErrorMessage>You must agree to the terms and conditions.</ErrorMessage>
                  )}

                {/* Total Payable amount */}
                <ButtonWrapper>
                    <span>Payable Amount: <b>N31,000.00</b></span>
                  <Button text={'Continue to payment'} /> 
                </ButtonWrapper> 
                </form>
            </OverviewContent>
        </TripMinContent>

</OverviewWrapper>
  );
}

