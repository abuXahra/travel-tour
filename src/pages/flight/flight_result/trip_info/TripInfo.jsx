
import React, { useState } from 'react'
import { ButtonWrapper, FlightDetailWrapper, FormContent, FormWrapper, PromoHeader, PromoInput, PromoWrapper, SideFlightAirport, SideFlightSummary, TotalFare, TotalTrip, TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour, TripInfoBody, TripInfoContent, TripInfoHeader, TripInfoHeaderItems, TripInfoHeaderSteps, TripInfoHeaderTitle, TripInfoSideBar, TripInfoSideContent, TripInfoWrapper, TripMinContent, TripPassenger } from './TripInfo.style'
import Button from '../../../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import Timeline from '../../../../components/timeline/Timeline';
import Input from '../../../../components/inputs/input/Input';
import SelectInput from '../../../../components/inputs/selectInput/SelectInput';
import { RadioWrapper } from '../../../../components/inputs/input_radio/RadioInput.style';
import RadioInput from '../../../../components/inputs/input_radio/RadioInput';
import { FaArrowDown, FaArrowRight, FaUser } from 'react-icons/fa';
import { Countries } from '../../../../data/object/countries';
import { IoIosArrowDown } from 'react-icons/io';
import flightLogo from '../../../../images/aire-peace.png'
import FlightIcon from '../../../../components/flight_icon/FlightIcon';

export default function TripInfo() {

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
 

    // OnSubmit handler
    const handledSubmit = (e)=>{

      e.preventDefault();

      // title validation
        if(!selectedTitleValue){
          setTitleError(true);
        }

         // last name validation
        if (lastName === "" || null) {
          setLastNameError(true);
        }

      // first name validation
      if (firstName === "" || null) {
        setFirstNameError(true);
      }

       // middle name validation
       if (middleName === "" || null) {
        setMiddleNameError(true);
      }
      
      // dob validation
      if (dob === "" || null) {
        setDobError(true);
      }
       
      
       // country  validation
       if (selectedCountryValue === "" || null) {
        setCountryError(true);
      }

    // Gender  validation
      if(selectedGender === "" || null){
        setGenderError(true);
      }


      // phone validation
      if (phone === "" || null) {
        setPhoneError(true);
      }

      // email validation
      if (email === "" || null) {
        setEmailError(true);
      }
      
    }


  const [showtripDepart, setShowtripDepart] = useState(false);
  const [showtripReturn, setShowtripReturn] = useState(false);

  return (
    <TripInfoWrapper>
        
        {/* header */}
        <TripInfoHeader>
        <TripInfoHeaderItems >
            <TripInfoHeaderTitle>
                <span><Button text={'Back'} onClick={()=>navigate('/flight-result')}/></span>
                <h2>Proceed with your booking</h2>
            </TripInfoHeaderTitle>
            
            {/* timeline: Trip info steps */}
            <Timeline currentStep={2}/>
        </TripInfoHeaderItems>
        </TripInfoHeader>
         
          {/* body */}
        <TripInfoBody>
              {/* Sidebar */}

             <TripInfoSideBar>
                  <TripInfoSideContent>
                    <h2>My Cart</h2>
                    <h4>Flight</h4>
                    <SideFlightAirport>
                      <span>
                        <FlightIcon IconSize={'14px'} rotate={'45deg'} iconColor={'#4a4a4a'}/> 
                      <div>
                          <p><b>Abuja (ABV) TO LAGOS (LOS)</b></p> 
                          <p>Economy Round Trip</p>
                        </div> 
                    </span>

                    <span>
                    <FlightIcon IconSize={'14px'} rotate={'45deg'} iconColor={'#4a4a4a'}/> 
                    <div>
                          <p><b> LAGOS (LOS) TO Abuja (ABV)</b></p> 
                          <p>Economy Round Trip</p>
                        </div>
                    </span>
                    </SideFlightAirport>

                    <h4>Flight Fare Summary</h4>
                    <SideFlightSummary>
                    <div>
                      <span>Adult X 1</span>
                      <span></span>
                    </div>
                    <div>
                      <span>Base Fee</span>
                      <span>N317,000</span>
                    </div>
                    <div>
                      <span>Discount</span>
                      <span>0</span>
                    </div>
                    <div>
                      <span>Service Charge</span>
                      <span>0</span>
                    </div>
                    <div>
                      <span><b>Total Fare</b></span>
                      <span>N317,000</span>
                    </div>
                    </SideFlightSummary>
                    <TotalTrip>
                      <div>
                        <span>Trip Total</span>
                        <span>N317,000</span>
                      </div>
                    </TotalTrip>
                  </TripInfoSideContent>
                  <FormWrapper>
                    <PromoWrapper>
                      <PromoHeader>PROMO CODE</PromoHeader>
                      <PromoInput>
                        <Input title={'PROMO CODE'}/>
                        <div> <Button text={'Apply'}/></div>
                      </PromoInput>
                    </PromoWrapper>
                    </FormWrapper>
              
                </TripInfoSideBar> 
            


            {/* Main Content */}
            <TripMinContent>
        
            {/* User info content */}
            <TripInfoContent>
              
              {/* Flight Detail section */}

              {/* For Departure */}
              <FlightDetailWrapper>
               {/* title */}
                  <TripDetailTile onClick={()=>setShowtripDepart(!showtripDepart)}>
                    <span> <h2>ABUJA</h2> <FlightIcon rotate={'90deg'} iconColor={'#0D3984'}/>  <h2>Lagos</h2> </span>
                    <span>
                      <p>Saturday, July 13</p>
                      <p>0 Stops. 1h 15m</p>
                      <div>
                            <IoIosArrowDown />
                      </div>
                    </span>
                  </TripDetailTile>
                      {/* body */}
                    {  showtripDepart &&
                     <TripDetailBody>
                        <TripDetailClass>
                          <span><img src={flightLogo} alt="" srcset="" /> <h4>Air Peace</h4> <p>73G</p> </span>
                          <span><a href="#">Economy</a></span>
                        </TripDetailClass>
                        <TripDetailTime>
                            <TripHour>
                              <span>
                                <div>  
                                  <h4>20:05</h4>
                                  <h4>20:05</h4>
                                </div>
                                <div>
                                  <hr />
                                    <FlightIcon rotate={'180deg'} iconColor={'#0D3984'}/> 
                                  <hr />
                                </div> 
                              </span>
                          </TripHour>
                        <TripAirport>
                          <div>
                               <p><b>Abuja</b>.ABV, Nnamdi Azikwe International Ai...</p> 
                               <p>1h 15m</p>
                               <p><b>Lagos</b>.BOS, Murtala Muhammed International...</p> 
                          </div>
                          <div>
                            <span><h4>BAGGAGE:</h4> <p>ADULT</p></span>
                            <span><h4>CHECK IN:</h4> <p>20KG</p> </span>
                          </div>
                        </TripAirport>
         
                        </TripDetailTime>
                  </TripDetailBody>}
              </FlightDetailWrapper>


              {/* for flight Return */}
               {/* Flight Detail section */}
               <FlightDetailWrapper>
               {/* title */}
                  <TripDetailTile onClick={()=>setShowtripReturn(!showtripReturn)}>
                    <span> <h2>ABUJA</h2> <FlightIcon rotate={'270deg'} iconColor={'#FF6805'}/>  <h2>LAGOS</h2> </span>
                    <span>
                      <p>Saturday, July 13</p>
                      <p>0 Stops. 1h 15m</p>
                      <div>
                            <IoIosArrowDown />
                      </div>
                    </span>
                  </TripDetailTile>
                      {/* body */}
                    {  showtripReturn &&
                     <TripDetailBody>
                        <TripDetailClass>
                          <span><img src={flightLogo} alt="" srcset="" /> <h4>Air Peace</h4> <p>73G</p> </span>
                          <span><a href="#">Economy</a></span>
                        </TripDetailClass>
                        <TripDetailTime>
                            <TripHour>
                              <span>
                                <div>  
                                  <h4>20:05</h4>
                                  <h4>20:05</h4>
                                </div>
                                <div>
                                  <hr />
                                    <FlightIcon rotate={'360deg'} iconColor={'#FF6805'}/> 
                                  <hr />
                                </div> 
                              </span>
                          </TripHour>
                        <TripAirport>
                          <div>
                               <p><b>Abuja</b>.ABV, Nnamdi Azikwe International Ai...</p> 
                               <p>1h 15m</p>
                               <p><b>Lagos</b>.BOS, Murtala Muhammed International...</p> 
                          </div>
                          <div>
                            <span><h4>BAGGAGE:</h4> <p>ADULT</p></span>
                            <span><h4>CHECK IN:</h4> <p>20KG</p> </span>
                          </div>
                        </TripAirport>
         
                        </TripDetailTime>
                  </TripDetailBody>}
              </FlightDetailWrapper>
            </TripInfoContent>

              {/*user trip data  */}
                <TripInfoContent>
                  <h2>Travel Detail</h2>

              {/* Passenger */}
                <TripPassenger>
                  <div>
                      <span><FaUser/></span>
                      <h3>Adult (40yrs+)</h3> 
                  </div>
                    <div>
                      <p>0/1 added</p>
                    </div>
                </TripPassenger>

                {/* Form */}
                <FormWrapper onSubmit={handledSubmit}>
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

                    {/* Continue Button */}
                  <ButtonWrapper>
                    <div>
                      <input type="checkbox" name="terms" id="terms" />
                      <p>By proceeding you agree have read and accept our <a href='#'>Terms and Conditions</a></p>
                    </div>
                    <Button onClick={()=>navigate('/flight-customization')} text={"Continue"} />
                    </ButtonWrapper>  
                </FormWrapper>
                </TripInfoContent>
            </TripMinContent>
        </TripInfoBody>
    </TripInfoWrapper>
  )
}
