
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, FormContent, GuestFormWrapper, GuestInfoBody, GuestInfoContent, GuestInfoHeader, GuestInfoHeaderItems, GuestInfoHeaderTitle, GuestInfoSideBar, GuestInfoSideContent, GuestInfoWrapper, GutestDetailBody, GutestDetailClass, GutestDetailTitle, GutestDetailWrapper, ManzoPoint, PromoHeader, PromoInput, PromoWrapper, SideFlightAirport, SideFlightSummary, TermsCondition, TermsConditionClass, TermsConditionInner, TermsConditionTitle, TermsConditionWrapper, TotalTrip, TripAirport, TripDetailTime, TripHour, TripMinContent, TripPassenger } from './GuestInfo.style';
import Button from '../../../components/button/Button';
import HotelTimeline from '../../../components/timeline/HotelTimeline';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import Input from '../../../components/inputs/input/Input';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLocalHotel } from 'react-icons/md';
import { TripInfoContent } from '../../flight/flight_result/trip_info/TripInfo.style';
import { FaCircle, FaTimes, FaUser } from 'react-icons/fa';
import FormWrapper from '../../../components/booking_icons/form_wrapper/FormWrapper';
import { TbHandLittleFinger } from 'react-icons/tb';
import SelectInput from '../../../components/inputs/selectInput/SelectInput';
import RadioInput from '../../../components/inputs/input_radio/RadioInput';
import { Countries } from '../../../data/object/countries';
import { ErrorMessage, TermsDetail } from '../../flight/flight_overview/FlightOverview.style';
import { RadioCheck, RadioItem, RadioItemWrapper } from '../../flight/flight_booking/FlightBooking.style';
import { AddonCard, CustomizeAddonWrapper, CustomizeContent, TermsDetailHeader } from '../../flight/flight_customization/FlightCustomization.style';



export default function GuestInfo() {

 
    
  // navigation
  const navigate = useNavigate();

  // firstnam variable
  const [selectedTitleValue, setSelectedTitleValue] = useState(''); 
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dob, setDob] = useState('');
  const [selectedCountryValue, setSelectedCountryValue] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
 



// error
const [titleError, setTitleError] = useState(false);
const [firstNameError, setFirstNameError] = useState(false);
const [lastNameError, setLastNameError] = useState(false);
const [middleNameError, setMiddleNameError] = useState(false);
const [dobError, setDobError] = useState(false);
const [countryError, setCountryError] = useState(false);
const [genderError, setGenderError] =useState(false);
const [phoneError, setPhoneError] =useState(false);
const [emailError, setEmailError] = useState(false);




// title selection handler
const userTitle = [
  { title: 'Select Title', value: '' },
  { title: 'Mr.', value: 'Mr.' },
  { title: 'Mrs', value: 'Mrs.' },
];

const handleSelectTitleChange = (event) => {
  setSelectedTitleValue(event.target.value);
  setTitleError(false);
}


  // last name Handler
const lastNameOnchangeHandler = (e)=>{
setLastName(e.target.value);
setLastNameError(false);
}

// First name Handler
const firstNameOnchangeHandler = (e)=>{
  setFirstName(e.target.value);
  setFirstNameError(false);
}


// middle name Handler
const middleNameOnchangeHandler = (e)=>{
setMiddleName(e.target.value);
setMiddleNameError(false);
}

 // dob name Handler
 const dobOnchangeHandler = (e)=>{
  setDob(e.target.value);
  setDobError(false);
}


   // country selection handler
const handleSelectCountryChange = (event) => {
  setSelectedCountryValue(event.target.value);
  setCountryError(false)

}

// Gender handler;       
const handleGenderChange = (value) => {
    setSelectedGender(value);
    setGenderError(false);
  };


  const gender = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];
  

     // phone number Handler
 const phonOnchangeHandler = (e)=>{
  setPhone(e.target.value);
  setPhoneError(false);
}
  // 

 // email  number Handler
 const emailOnchangeHandler = (e)=>{
  setEmail(e.target.value);
  setEmailError(false);
}


// Checkbox Validation: Terms and Agreement 
// State for form values
const [isChecked, setIsChecked] = useState(false);
const [isValid, setIsValid] = useState(true);

// Handler for checkbox change
const handleCheckboxChange = (event) => {
  setIsChecked(event.target.checked);
};


// OnSubmit handler
const handledSubmit = (e)=>{

e.preventDefault();

// title validation
  if(!selectedTitleValue){
    setTitleError(true);
  }else
   // last name validation
  if (lastName === "" || null) {
    setLastNameError(true);
  }else

// first name validation
if (firstName === "" || null) {
  setFirstNameError(true);
}else
// dob validation
if (dob === "" || null) {
  setDobError(true);
}else

 // country  validation
 if (selectedCountryValue === "" || null) {
  setCountryError(true);
}else

// Gender  validation
if(selectedGender === "" || null){
  setGenderError(true);
}else

// phone validation
if (phone === "" || null) {
  setPhoneError(true);
}else

// email validation
if (email === "" || null) {
  setEmailError(true);
}else

// Check if checkbox is checked
  if (!isChecked) {
    setIsValid(false);
    return;
  }else if(isChecked){

  // Proceed with form submission or further logic
  setIsValid(true);
  navigate('/hotel-customization')
  // You can also reset form or perform other actions here
  
  }

}

  const [showtripDepart, setShowtripDepart] = useState(false);
 


  // ARE YOU THE TRAVELER CUSTOM RADIO BUTTON VARIABLES
  
  const[showTraveler, setShowTraveler] = useState(false)
// yes
const[yes, setYes] = useState('Yes');
const[yesBrColor, setYesBrColor] = useState('#2563eb');
const[yesCheckColor, setYesCheckColor] = useState('#2563eb');


// no 
const[no, setNo] = useState('No');
const[noBrColor, setNoBrColor] = useState('grey');
const[noCheckColor, setNoCheckColor] = useState('white');


const handleTraveler = (type) =>{
  if(type === yes){
    setShowTraveler(false);
    setYesBrColor('#2563eb');
    setYesCheckColor('#2563eb');
    setNoBrColor('grey')
    setNoCheckColor('white')
  }
  else if(type === no){
    setShowTraveler(true);
    setYesBrColor('grey')
    setYesCheckColor('white')
    setNoBrColor('#2563eb')
    setNoCheckColor('#2563eb')
  }
}

// SHOW TERMS AND CONDITIONS
const [showTerms, setShowTerms] = useState(false)

const handleTerms = () =>{
 setShowTerms(true)
}




// Checkbox: To register for Manzo Points 
const [isChecked2, setIsChecked2] = useState(false);


// Handler for checkbox change
const handleManzopointCheckboxChange = (event) => {
  setIsChecked2(event.target.checked);
};



// SHOW/HIDE IMPORTANT INFO
const [showInfo, setShowInfo] = useState(false);

  return (
    <GuestInfoWrapper>
        
        {/* header */}
        <GuestInfoHeader>
        <GuestInfoHeaderItems >
            <GuestInfoHeaderTitle>
                <span><Button text={'Back'} onClick={()=>navigate('/hotel-result')}/></span>
                <h2>Proceed with your booking</h2>
            </GuestInfoHeaderTitle>
            
            {/* timeline: Trip info steps */}
            
            <HotelTimeline currentStep={2}/>
        </GuestInfoHeaderItems>
        </GuestInfoHeader>
         
          {/* body */}
        <GuestInfoBody>
              {/* Sidebar */}

             <GuestInfoSideBar>
                  <GuestInfoSideContent>
                    <h2>My Cart</h2>
                    <h4>Hotel</h4>
                    <SideFlightAirport>
                      <span>
                        <FlightIcon Icon={<MdLocalHotel/>} IconSize={'14px'} rotate={'360deg'} iconColor={'#4a4a4a'}/> 
                      <div>
                          <p><b>Transcorp Hilton</b></p> 
                          <p>2 Classic: 6 night</p>
                        </div> 
                    </span>

                    </SideFlightAirport>

                    <h4>Hotel Fare Summary</h4>
                    <SideFlightSummary>
                    <div>
                      <span>Adult X 2</span>
                      <span></span>
                    </div>
                    <div>
                      <span>1 Room(s) x 1</span>
                      <span>N250,000</span>
                    </div>
                    <div>
                      <span>1 Room(s) x 1</span>
                      <span>N250,000</span>
                    </div>
                    <div>
                      <span><b>Total Fare</b></span>
                      <span>N500,000</span>
                    </div>
                    </SideFlightSummary>
                    <TotalTrip>
                      <div>
                        <span>Trip Total</span>
                        <span>N500,000</span>
                      </div>
                    </TotalTrip>
                  </GuestInfoSideContent>
                  <GuestFormWrapper>
                    <PromoWrapper>
                      <PromoHeader>PROMO CODE</PromoHeader>
                      <PromoInput>
                        <Input title={'PROMO CODE'}/>
                        <div> <Button text={'Apply'}/></div>
                      </PromoInput>
                    </PromoWrapper>
                    </GuestFormWrapper>
              
                </GuestInfoSideBar> 
            


            {/* Main Content */}
            <TripMinContent>
        
            {/* User info content */}
            <GuestInfoContent>
              
              {/* Flight Detail section */}

              {/* For Departure */}
              <GutestDetailWrapper>
               {/* title */}
                  <GutestDetailTitle onClick={()=>setShowtripDepart(!showtripDepart)}>
                    <span> <h2>Transcorp Hilton,</h2> <h2>Abuja</h2> </span>
                    <span>
                      <p>Saturday, July 13</p>
                      <div>
                            <IoIosArrowDown />
                      </div>
                    </span>
                  </GutestDetailTitle>
                      {/* body */}
                    {  showtripDepart &&
                     <GutestDetailBody>
                        <GutestDetailClass>
                          <span>
                            1 Aguiyi Ironsi St, Maitama, Abuja 900001, Federal Capital Territory </span>
                          <span><a href="#">2 Classic</a></span>
                        </GutestDetailClass>
                        <TripDetailTime>
                            <TripHour>
                              <span>
                                <div>  
                                  <h5>6 Nights</h5>
                                  <h5>2 Adults</h5>
                                  <h5>2 Room</h5>
                                </div>
                                <div>
                                  <hr />
                                    <FlightIcon Icon={<MdLocalHotel/>} rotate={'360deg'} iconColor={'#0D3984'}/> 
                                  <hr />
                                </div> 
                              </span>
                          </TripHour>
                        <TripAirport>
                          <div>
                               <p><b>2 Classic(s)</b></p> 
                               <p><ul>
                                    <li>Room Only</li>
                                    <li>Breakfast not Included</li>
                                    <li>Non Refundable | No refund upon cancellation | <a href="#">view concellation plicy</a></li>
                                    </ul>
                                </p>
                               <p></p> 
                          </div>
                          <div>
                            <span><h5>CHECK IN:</h5> <span>Mon 5 Aug 2024 12:AM</span></span>
                            <span><h5>CHECK OUT:</h5> <span> Mon 11 Aug 2024 12:AM</span></span>
                          </div>
                        </TripAirport>
         
                        </TripDetailTime>
                  </GutestDetailBody>}
              </GutestDetailWrapper>
            </GuestInfoContent>

              {/*user trip data  */}
              <TripInfoContent>
                  <h2>Travel Detail</h2>
             
                <GuestFormWrapper onSubmit={handledSubmit}>
             <span>
              {/* Passenger */}
                <TripPassenger>
                  <div>
                      <span><FaUser/></span>
                      <h3>Adult 1</h3> 
                  </div>
                    <div>
                      <p>1/2 added</p>
                    </div>
                </TripPassenger>
                <FormContent>
                      {/* Title  */}
                      <SelectInput 
                        label={"Title"}
                          options={userTitle} 
                          title={'Title'} 
                          error={titleError} 
                          onChange={handleSelectTitleChange}
                      />
                      
                      {/* Last name */}
                        <Input
                            title={'Last Name'}
                            label={'Last Name'}
                            type={'text'}
                            value={lastName}
                            onChange={lastNameOnchangeHandler}
                            error={lastNameError}
                            requiredSymbol={'*'}
                          />

                          {/* First name */}
                          <Input
                            type={'text'}
                            title={'First Name'}
                            label={'First Name'}
                            value={firstName}
                            onChange={firstNameOnchangeHandler}
                            error={firstNameError}
                            requiredSymbol={'*'}
                          />
                    </FormContent>

                    <FormContent>                    
                      {/* Middle name */}
                      <Input
                            type={'text'}
                            title={'Middle Name'}
                            label={'Middle Name'}
                            value={middleName}
                            onChange={middleNameOnchangeHandler}
                            error={middleNameError}
                            requiredSymbol={''}
                          />

                    
                          {/* DOB */}
                          <Input
                            title={'Date of Birth'}
                            label={'Date of Birth'}
                            type={'date'}
                            value={dob}
                            onChange={dobOnchangeHandler}
                            error={dobError}
                            requiredSymbol={'*'}
                          />

                          {/* Country  */}
                          <SelectInput 
                          options={Countries} 
                          title={'Nationality'} 
                          error={countryError} 
                          onChange={handleSelectCountryChange}
                      />

                    </FormContent>

                    <FormContent>
                      {/* Gender */}
                      <RadioInput
                        options={gender}
                        defaultValue={selectedGender}
                        onChange={handleGenderChange}
                        error={genderError}
                      />


                    {/* Phone Number */}
                    <Input
                            title={'Phone Number '}
                            label={'Phone Number '}
                            type={'text'}
                            value={phone}
                            onChange={phonOnchangeHandler}
                            error={phoneError}
                            requiredSymbol={'*'}
                            maxLength={12}
                          />  

                    
                          {/* email address */}
                          <Input
                            title={'Email Address'}
                            label={'Email Address'}
                            type={'email'}
                            value={email}
                            onChange={emailOnchangeHandler}
                            error={emailError}
                            requiredSymbol={'*'}
                          
                          />      
                    </FormContent>
                    </span>

                    <span>
              {/* Passenger 2 */}
                <TripPassenger>
                  <div>
                      <span><FaUser/></span>
                      <h3>Adult 2</h3> 
                  </div>
                    <div>
                      <p>2/2 added</p>
                    </div>
                </TripPassenger>
                <FormContent>
                      {/* Title  */}
                      <SelectInput 
                        label={"Title"}
                          options={userTitle} 
                          title={'Title'} 
                          error={titleError} 
                          onChange={handleSelectTitleChange}
                      />
                      
                      {/* Last name */}
                        <Input
                            title={'Last Name'}
                            label={'Last Name'}
                            type={'text'}
                            value={lastName}
                            onChange={lastNameOnchangeHandler}
                            error={lastNameError}
                            requiredSymbol={'*'}
                          />

                          {/* First name */}
                          <Input
                            type={'text'}
                            title={'First Name'}
                            label={'First Name'}
                            value={firstName}
                            onChange={firstNameOnchangeHandler}
                            error={firstNameError}
                            requiredSymbol={'*'}
                          />
                    </FormContent>

                    <FormContent>                    
                      {/* Middle name */}
                      <Input
                            type={'text'}
                            title={'Middle Name'}
                            label={'Middle Name'}
                            value={middleName}
                            onChange={middleNameOnchangeHandler}
                            error={middleNameError}
                            requiredSymbol={'*'}
                          />

                    
                          {/* DOB */}
                          <Input
                            title={'Date of Birth'}
                            label={'Date of Birth'}
                            type={'date'}
                            value={dob}
                            onChange={dobOnchangeHandler}
                            error={dobError}
                            requiredSymbol={'*'}
                          />

                          {/* Country  */}
                          <SelectInput 
                          options={Countries} 
                          title={'Nationality'} 
                          error={countryError} 
                          onChange={handleSelectCountryChange}
                      />

                    </FormContent>

                    <FormContent>
                      {/* Gender */}
                      <RadioInput
                        options={gender}
                        defaultValue={selectedGender}
                        onChange={handleGenderChange}
                        error={genderError}
                      />


                    {/* Phone Number */}
                    <Input
                            title={'Phone Number '}
                            label={'Phone Number '}
                            type={'text'}
                            value={phone}
                            onChange={phonOnchangeHandler}
                            error={phoneError}
                            requiredSymbol={'*'}
                            maxLength={12}
                          />  

                    
                          {/* email address */}
                          <Input
                            title={'Email Address'}
                            label={'Email Address'}
                            type={'email'}
                            value={email}
                            onChange={emailOnchangeHandler}
                            error={emailError}
                            requiredSymbol={'*'}
                          
                          />      
                    </FormContent>
                    </span>

              {/* ARE YOU THE TRAVELLER? */}
                    <span>
                    <TripPassenger spaceBtn={'flex-start'} gp={'10px'} alItem={'center'}>
                      <h3>Are you the traveler?</h3>                
                      <div>
                          <RadioItemWrapper onClick={()=>handleTraveler(yes)}>
                              <RadioItem brColor={yesBrColor}>
                                <RadioCheck checkColor={yesCheckColor}>
                                  <FaCircle/>
                                </RadioCheck>
                              </RadioItem>
                          </RadioItemWrapper>   Yes 

                          <RadioItemWrapper onClick={()=>handleTraveler(no)}>
                              <RadioItem brColor={noBrColor}>
                                <RadioCheck checkColor={noCheckColor}>
                                  <FaCircle />
                                </RadioCheck>
                              </RadioItem>
                          </RadioItemWrapper> No
                         </div>
                   
                </TripPassenger>
                    
                    {showTraveler && <FormContent>
          
                      
                        {/* Full name */}
                          <Input
                            type={'text'}
                            title={'Full Name'}
                            label={'Full Name'}
                            value={firstName}
                            onChange={firstNameOnchangeHandler}
                            error={firstNameError}
                            requiredSymbol={'*'}
                          />

                      {/* Phone Number */}
                        <Input
                            title={'Phone Number '}
                            label={'Phone Number '}
                            type={'text'}
                            value={phone}
                            onChange={phonOnchangeHandler}
                            error={phoneError}
                            requiredSymbol={'*'}
                            maxLength={12}
                          />  

                                   
                          {/* email address */}
                          <Input
                            title={'Email Address'}
                            label={'Email Address'}
                            type={'email'}
                            value={email}
                            onChange={emailOnchangeHandler}
                            error={emailError}
                            requiredSymbol={'*'}
                          
                          />   
                    </FormContent>}
                    </span>

                    <ManzoPoint>
                        <input
                              type="checkbox"
                              id="terms"
                              checked={isChecked2}
                              onChange={()=>handleManzopointCheckboxChange}
                            />
                          <p>Click here to register for manzo points</p>                            
                    </ManzoPoint>




            {/* TERMS AND CONDITION */}
              <TermsConditionWrapper>
               {/* title */}
                  <TermsConditionTitle onClick={()=>setShowInfo(!showInfo)}>
                    <h3>Important Information</h3> 
                    <IoIosArrowDown />
                  </TermsConditionTitle>
                      {/* body */}
                    {  showInfo &&
              
                      
                        <TermsConditionInner >                           
                                <b>Reservation Terms and Cancellation Policy</b> 
                                <p>
                                25% Manzo Travel rate will be chargeable for guaranteed reservations' cancellation(s) not effected 10 days prior to check in date. 50% for Cancellation(s) within 5 days, 75% for cancellation(s) within 48hours prior to check in date, and 100% for cancellation(s) less than 24hours before check in
                                Hotel Policies
                                </p> 
          
                                <span>
                                  <b>CHECK-IN INSTRUCTION</b> 
                                    Special Checkin Instructions
                                </span>
                                
                                <span>
                                  <b>CANCELLATION POLICY</b>
                                  Cancellation Policy 
                                </span>
                          </TermsConditionInner >
         
                       }
              </TermsConditionWrapper>

                      


                     {/* Continue Button */}
                  <ButtonWrapper clm={'column'}>
                    <div>
                        <span>
                              <input
                              type="checkbox"
                              id="terms"
                              checked={isChecked}
                              onChange={handleCheckboxChange}
                            />
                          <p>By proceeding you agree have to  read and accept our <a onClick={handleTerms}>Terms and Conditions</a></p>
                          </span> 
                            {!isValid && (
                              <ErrorMessage>You must agree to the terms and conditions.</ErrorMessage>
                            )}
                    </div>
                    <Button text={"Continue"} />
                    </ButtonWrapper>  
                </GuestFormWrapper>
                </TripInfoContent>
            </TripMinContent>
        </GuestInfoBody>
        
        {showTerms &&
        <TermsDetail alignItems="start">
          <CustomizeContent wd={'80%'}>
            <CustomizeAddonWrapper>
              <AddonCard flexDir="column">
                <TermsDetailHeader>
                  <h2>  Terms and Conditions</h2>
                  <span onClick={() => setShowTerms(false)}><FaTimes /></span>
                </TermsDetailHeader>
               
                                    
                      <p>25% Manzo Travel rate will be chargeable for guaranteed reservations' cancellation(s) not effected 10 days prior to check in date. 50% for Cancellation(s) within 5 days, 75% for cancellation(s) within 48hours prior to check in date, and 100% for cancellation(s) less than 24hours before check in
                      Important Notice</p>

                      <h3>TERMS AND CONDITIONS</h3>

                      <h4>Manzo Travel HOTEL RESERVATION SERVICES</h4>

                      

                      <h4>SCOPE OF SERVICES:</h4>

                  <p>Manzo Travel & Tour Limited provides an online platform which is used to book/reserve different types of lodging and temporary accommodation, including but not limited to hotels, serviced apartments, etc. (collectively, the “Accommodation(s)”). The request to make reservations with such Accommodations, including making payment for the reservations of Accommodations in advance with a credit card, debit card, e-wallet, or such other payment method to facilitate the processing of such payment falls under the scope of the secrvices (“Payment Instrument”).</p>

                      

                  <p>By making a booking through Manzo Travel & Tour, it is deemed that an offer to book a reservation at the price listed for such reservation and other third party related terms and conditions for the services shall become a binding contract formed in Nigeria when accepted by the Accommodation and consequently Manzo Travel & Tour.</p>

                      

                  <p>A proof of the confirmed Accommodation booking would be generated and sent via an e-mail confirmation (with a voucher), which represents that the reservation has been confirmed by the Accommodation. However, Manzo Travel & Tour reserves the right to reject or cancel any bookings where there is a reasonable suspicion of fraud, card payment theft, false information, misrepresentation, frustration, force majeure etc. without further recourse or notice to the customer who made the booking.</p>
                      

                     <h4>THIRD PARTY RELATED INFORMATION:</h4> 

                     <p>Manzo Travel & Tour shall not be liable for the information disclosed about the Accommodations, thus, the information provided to it by the suppliers or providers (including but not limited to the Accommodations, their representatives, distributors, destination management companies (DMCs), channel managers, partners, etc.).</p>

                      <p>Although Manzo Travel & Tour shall use commercially reasonable skill and care in performing its’ services, Manzo Travel & Tour will not verify if, and cannot guarantee that, all information is accurate, complete, correct or up to date, nor can Manzo Travel & Tour be held responsible or liable for any errors (including manifest and typographical errors), interruptions (whether due to any (temporary and/or partial) breakdown, repair, upgrade or maintenance of the Site or otherwise), inaccurate, misleading or untrue information or non-delivery of information.</p>

                      <p>All customers must note that each Accommodation remains responsible at all times for the accuracy, completeness and correctness of the Accommodation information displayed.</p>

                      

                      <p>It is important to emphasize here that Manzo Travel & Tour is one of the many channels, via which Accommodations make their inventory available for reservation to prospective customers. When a search result indicates that a particular Accommodation has no more rooms available, that means the room type is not available for reservation through Manzo Travel & Tour.</p>

                      

                      <p>Accommodation recommendations on our website are not given by Manzo Travel & Tour, Manzo Travel & Tour does not verify them and therefore cannot give assurance in respect of the Accommodations. We will only offer suggestions based on criteria provided by you, but choices made by you are entirely and solely your decision and any disappointments which may augur cannot and will not amount to a liability which Manzo Travel will become liable for.</p>

                      <p><b>ACCOMMODATION RATE:</b> The basic rate payable for a confirmed Accommodation reservation shall be in such amount, inclusive of taxes plus Manzo Travel & Tour administrative charges, calculated per night, for the duration of stay as may be provided or published on our website. All Customers must note that they might be expected to pay additional taxes/fees asides the total cost which was paid directly to the Accommodation. (Dubai: Dubai Tourism Dirhams, Paris: City Tax, Orlando: City Tax etc.)</p>

                      <p><b>CHECK-IN AND CHECK-OUT POLICY</b>: The standard check-in time acceptable in the industry is 2pm of the arrival date and check-out time shall be 12 noon of the departure date. In an event of early check-in or late check-out, a penalty charge of 50% of the applicable room rate may apply. Where late check-out extends up to 6 pm or thereafter, a full night charge shall apply. All customers must note that this shall be subject to an overriding policy of the third party accommodation provider.</p>

                      <p><b>CANCELLATION POLICY:</b> By booking through Manzo Travel & Tour, you accept both the cancellation and no-show policies of the Accommodations and ours. Manzo Travel & Tour will make full refund of the amount paid but not yet transferred to the Accommodation provider. Refund of monies already paid to the Accommodation provider will attract a cancellation/no-show charge fees plus Manzo Travel & Tour administrative charges. Where a direct payment is made to the Accommodations, Manzo Travel & Tour will not be accountable for or entitled to reimburse these types of payments and also payments made preceding arrival at the Accommodations. Any of such refunds that come through us are only so on request by the Accommodation provider and are not in any way our obligation.</p>

                    <p><b>REFUND POLICY:</b> Refund of payment already paid to the selected hotel is subject to the established cancellation/no show charge/policy of the Accommodations. Payment not remitted to the Accommodations prior to cancellation request or within the acceptable cancellation timeframe attracts 100% refund.</p>

                    <p><b>DISCLAIMER OF WARRANTIES</b>: Manzo Travel & Tour shall have no responsibility for any liability which may arise from the booking service, either to the accommodation provider, customer or any government agency with respect to the services contemplated thereof.</p>

                    <p><b>LIMITATIONS OF LIABILITY AND INDEMINTY:</b> Manzo Travel & Tour’s total liability with respect to the performance of services shall not exceed and shall be limited to the amount received in each transaction. Manzo Travel & Tour shall not be liable for any indirect or consequential damages/claims which may arise while performing the services except where it can be directly traceable to Manzo Travel & Tour’s negligence.</p>

                      <p><b>DEFAULT:</b> In the event that there is any default or failure to comply with any of the terms of service set forth herein with, Manzo Travel & Tour shall have the right of severance until such default is made good.</p>

                      <p><b>GOVERNING LAW:</b> These terms shall be governed and construed in accordance with the laws of Nigeria.</p>
              
                <span>
                  <button onClick={() => setShowTerms(false)}>Continue</button>
                </span>
              </AddonCard>
            </CustomizeAddonWrapper>
          </CustomizeContent>
        </TermsDetail>
      }
    </GuestInfoWrapper>
  )
}
