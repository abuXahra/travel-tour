

import React, { useState } from 'react'
import { Section, SpaceBetweenContent, TaxiBody, TaxiContentWrapper, TaxiFormSection, TaxiFormSectionContent, TaxiFormSectionTitle, TaxiType, TaxiWrapper } from './Taxi..style';
import HeroSection from '../../components/hero/HeroSection';
import { ContentSubHeader } from '../../components/booking_icons/book_sub_header/BookingHeaderContent.style';
import BookingIcons from '../../components/booking_icons/book_icon/BookingIcons';
import FormWrapper from '../../components/booking_icons/form_wrapper/FormWrapper';
import HotelForm from '../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_form/HotelForm';
import taxiBg from '../../images/cab.png'
import { useNavigate } from 'react-router-dom';
import { BodyContent, RadioCheck, RadioItem, RadioItemWrapper } from '../flight/flight_booking/FlightBooking.style';
import { FaCircle, FaHotel, FaTaxi } from 'react-icons/fa';
import TaxiForm from '../../components/taxi/TaxiForm';
import { MdFlightTakeoff } from 'react-icons/md';
import { RiVisaFill } from 'react-icons/ri';
import { FiPackage } from 'react-icons/fi';
import GeneralHeaders from '../../components/booking_icons/book_sub_header/booking_general_headers/GeneralHeaders';
import Content from '../../components/homepage_content/Content';

export default function Taxi() {
  const navigate = useNavigate();
 

// Taxi form Reservation Variable Declarations:

   // roundTrip is selected by default
 
   const [dropOff, setDropOff] =useState('')
   const [pickup, setPickup] =useState('')
   const [pickupDate, setPickupDate] = useState();
   const [pickupTime, setpickUpTime] = useState();
   const [passenger, setPassenger] = useState(1);
   const [showTaxiInputs, setShowTaxiInputs] = useState(false)
   const[showRadioButton, setShowRadioButton] = useState(false)



   // passange count event handler Event handler

   const handleDroppOff = (e) =>{
    setDropOff(e.target.value)
}


const handlePickup = (e) =>{
  setPickup(e.target.value)
}

   const handlePickupDate = (e)=>{
     setPickupDate(e.target.value)
   }


   const handlePickupTime = (e)=>{
    setpickUpTime(e.target.value)
   }


     // DROPDOWN LOCATION AND DESTINATION AIRPORTS 
   const pickUpAirportList= [
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


 

   const dropLocationList  = [
        {
          airportAddress: 'Gwarimpa District',
          airportName: '3rd Avenue Gwarimpa',
          airportAbbreviation: ''   
      },
        {
            airportAddress: 'Garki International Market',
            airportName: 'Damaturu Crescent, Abuja, Nigeria',
            airportAbbreviation: ''   
        },
        
      ]
   





     const [searchdropoffInputValue, setSearchdropoffInputValue] =useState('')
     const [searchpickupInputValue, setSearchpickupInputValue] =useState('')

     // TakeOff Search airport handler

           //PICKUP AIRPORT Search airport handler
           const  onChangePickupHanlder =(e)=>{
            setSearchpickupInputValue(e.target.value);
    
          }

      const  onChangeDropoffHandler =(e)=>{
        setSearchdropoffInputValue(e.target.value);

      }

     // show/hide takeoff and destination down airport Lists


     const [showPickupLocation,  setShowPickupLocation] = useState(false)
     const [showDropOffLocation,  setShowDropOffLocation] = useState(false)
    
     

 

     const onCloseDroppOffDropdwon = () =>{
        setShowDropOffLocation(false)
      }

      
     const onClosePickupDropdown = () =>{
      setShowPickupLocation(false)
    }

     // show/hide TaxiInputs

     const handleShowPickupTaxiInputs = ()=>{
      setShowPickupLocation(!showPickupLocation)
      setShowRadioButton(true)
      setShowTaxiInputs(true)
   }

     const handleShowDroppoffTaxiInputs = ()=>{
        setShowDropOffLocation(!showDropOffLocation)
        setShowRadioButton(true)
        setShowTaxiInputs(true)
     }




     
 


   const handlePassengerIncrement = (type) => {
    if (type === "passenger" && passenger < 50) {
          setPassenger(passenger + 1);
    }
  };

  const handlePassengerDecrement = (type) => {
    if (type === "passenger" && passenger > 1) {
      setPassenger(passenger - 1);
}
  };



    const [showPassenger, setShowPassenger] = useState(false)



      

// Radio button variables

          
const[taxiType, setTaxiType] = useState('');

           
const [fromAirport, setFromAirport] = useState('Pick-up Airport');
const [faBrColor, setFaBrColor] = useState('#2563eb')
const [faCheckColor, setFaCheckColor] = useState('#2563eb')


const [toAirport, setToAirport] = useState('Drop-Off Airport');
const [toBrColor, setToBrColor] = useState('grey')
const [toCheckColor, setToCheckColor] = useState('white')

const [ showFromAirportForm, setShowFromAirportForm] = useState(true)
const [ showToAirportForm, setShowToAirportForm] = useState(false)

const handleFromAirport = ()=>{
    setTaxiType(fromAirport);
    setShowFromAirportForm(true)
    setShowToAirportForm(false)
    setFaBrColor('#2563eb');
    setFaCheckColor('#2563eb');  
    setToBrColor('grey');
    setToCheckColor('white');           
}

const handleToAirport = ()=>{
    setTaxiType(toAirport);
    setShowFromAirportForm(false)
    setShowToAirportForm(true)
    setToBrColor('#2563eb');
    setToCheckColor('#2563eb');  
    setFaBrColor('grey');
    setFaCheckColor('white'); 
}





  return (
    <TaxiWrapper>
 {/* hero section with form */}
 <HeroSection heroImage={taxiBg}>
        
        {/* Taxi form section */}
        <TaxiFormSection sectionHeight={'auto'}>
          
          {/* Taxi form section  title */}
          <TaxiFormSectionTitle>
              <h4>Need a Ride?</h4>
              <h1>Reserve conveniently with Manzo Taxi...</h1> 
          </TaxiFormSectionTitle>

          {/* Taxi form section content */}
          <TaxiFormSectionContent>
           
           
          {/* Taxi top level items  such as stopover, manage bookings etc..*/}
           {/* Taxi Headers */}
           <GeneralHeaders/>

           {/* Taxi Form */}  
                <FormWrapper>   
                      <TaxiForm
                      // Pick-up
                      pickup={pickup}
                      setPickup={setPickup}   
                      handlePickup={handlePickup}
                      showPickupLocation={showPickupLocation}
                      handleShowPickupTaxiInputs={handleShowPickupTaxiInputs}
                      pickUpAirportList={pickUpAirportList}
                      searchpickupInputValue={ searchpickupInputValue}  
                      onChangePickupHanlder ={onChangePickupHanlder}  
                      onClosePickupDropdown = {onClosePickupDropdown}

                        // Drop Off
                            dropOff={dropOff}
                            setDropOff={setDropOff}   
                            handleDroppOff={handleDroppOff}
                            showDropOffLocation={showDropOffLocation}
                            handleShowDroppoffTaxiInputs={handleShowDroppoffTaxiInputs}
                            dropLocationList={dropLocationList}
                            searchdropoffInputValue={ searchdropoffInputValue}  
                            onChangeDropoffHandler ={onChangeDropoffHandler}  
                            onCloseDroppOffDropdwon = {onCloseDroppOffDropdwon}  
                                                       
                            showTaxiInputs={showTaxiInputs}
                            
                            // pickup date
                            handlePickupDate={handlePickupDate}
                            pickupDate={pickupDate}
                           
                            //  pickup time
                            pickupTime={pickupTime}
                            handlePickupTime={handlePickupTime}

                            // Passenger
                            setShowPassenger={setShowPassenger}
                            showPassenger={showPassenger}
                            passenger={passenger}
                            handlePassengerDecrement={handlePassengerDecrement}                     
                            handlePassengerIncrement={handlePassengerIncrement}  

                            showRadioButton={showRadioButton}
                            handleButtonClick={()=>navigate('/Taxi-result')} 
                            dropOffButtonClick={()=>navigate('/drop-off-result')} 
                            
                          // checkbutton variables
                             fromAirport={fromAirport}
                             faBrColor={faBrColor}
                             faCheckColor={faCheckColor}
                             handleFromAirport={handleFromAirport}
 
                             toAirport={toAirport}
                             toBrColor={toBrColor}
                             toCheckColor={toCheckColor}
                             handleToAirport={handleToAirport}
 
                             showFromAirportForm={showFromAirportForm}
                             showToAirportForm={showToAirportForm} 
                            
                      />
                 </FormWrapper>   
          </TaxiFormSectionContent>
        </TaxiFormSection>
      </HeroSection>

    {/* Taxi Body */}
    <BodyContent>
      <Content/>
    </BodyContent>
  </TaxiWrapper>
  )
}
