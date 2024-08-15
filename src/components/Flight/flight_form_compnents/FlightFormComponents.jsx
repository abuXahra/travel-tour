

import React, { useState } from 'react'
import { FlightFormSectionContent, FormWrapper } from '../../../pages/flight/flight_booking/FlightBooking.style'
import BookingHeaderContent from '../../booking_icons/book_sub_header/BookingHeaderContent'
import { FormWrapperContainer } from '../../booking_icons/form_wrapper/FormWrapper.style'
import SingleSearchCityForm from '../../../pages/flight/flight_booking/single_city/SingleSearchCityForm'
import ManageBooking from '../../../pages/flight/flight_booking/manage_booking/ManageBooking'
import FlightCheckin from '../../../pages/flight/flight_booking/checkin.jsx/FlightCheckin'
import FlightStatus from '../../../pages/flight/flight_booking/flight_status/FlightStatus'
import StopOver from '../../../pages/flight/flight_booking/stop_over/StopOver'

export default function FlightFormComponents() {
    
// Show/Hide Form
const [showSingleMultCity, setShowSingleMultCity] = useState(true);
const [showManageBooking, setShowManageBooking] = useState(false);
const [showCheckIn, setShowCheckIn] = useState(false)
const [showFlightStatus, setShowFlightStatus] = useState(false)
const [showStopOver, setShowStopOver] = useState(false)




  // Flight Form Header Variables:
  const [flightBtBorder, setFlightBtBorder] = useState('');
 
  const [manageBtBorder, setManageBtBorder] = useState('none')

  const [checkInBtBorder, setCheckInBtBorder] = useState('none')

  const [flightStatusBtBorder, setFlightStatusBtBorder] = useState('none')
  
  const [stopOverBtBorder, setStopOverBtBorder] = useState('none')

  // Flight Header Func to wich between the header and its content
  
const handleClick = (type)=>{
  if(type === 'flight'){

    setFlightBtBorder('')
    setManageBtBorder('none')
    setCheckInBtBorder('none')
    setFlightStatusBtBorder('none')
    setStopOverBtBorder('none')
    
    setShowSingleMultCity(true)
    setShowManageBooking(false)
    setShowCheckIn(false)
    setShowFlightStatus(false)
    setShowStopOver(false)

  }else if(type==='manage booking'){

    setFlightBtBorder('none')
    setManageBtBorder('')
    setCheckInBtBorder('none')
    setFlightStatusBtBorder('none')
    setStopOverBtBorder('none')
   
    setShowSingleMultCity(false)
    setShowManageBooking(true)
    setShowCheckIn(false)
    setShowFlightStatus(false)
    setShowStopOver(false)

  }else if(type==='check in'){

    setFlightBtBorder('none')
    setManageBtBorder('none')
    setCheckInBtBorder('')
    setFlightStatusBtBorder('none')
    setStopOverBtBorder('none')
    
    setShowSingleMultCity(false)
    setShowManageBooking(false)
    setShowCheckIn(true)
    setShowFlightStatus(false)
    setShowStopOver(false)


  }else if(type ==='flight status'){
   
    setFlightBtBorder('none')
    setManageBtBorder('none')
    setCheckInBtBorder('none')
    setFlightStatusBtBorder('')
    setStopOverBtBorder('none')
    
    setShowSingleMultCity(false)
    setShowManageBooking(false)
    setShowCheckIn(false)
    setShowFlightStatus(true)
    setShowStopOver(false)

  }else if(type ==='stop over'){

    setFlightBtBorder('none')
    setManageBtBorder('none')
    setCheckInBtBorder('none')
    setFlightStatusBtBorder('none')
    setStopOverBtBorder('')
    
    setShowSingleMultCity(false)
    setShowManageBooking(false)
    setShowCheckIn(false)
    setShowFlightStatus(false)
    setShowStopOver(true)
  }
}



// =====================Select Forms: one way, round trip, multicity=========================//


        
             // ===========Show/Hide Single City and Multi City Search Form
             const  [showReturnDate, setShowReturnDate] = useState(true);
             const [tripType, setTripType] = useState();

             const [roundTrip, setRroundTrip] = useState('Round Trip');
             const [oneWay, setOneWay] = useState('One Way');
             const [multiCity, setMultiCity] = useState('Multi City');
           
     
             const [showSingleForm, setShowSingleForm] = useState(true);
             const [showMultiCityForm, setShowMultiCityForm] = useState(false);
     
             const [rtBrColor, setRtBrColor] = useState('#2563eb')
             const [rtCheckColor, setRtCheckColor] = useState('#2563eb')
     
             const [owBrColor, setOwBrColor] = useState('grey')
             const [owCheckColor, setOwCheckColor] = useState('white')
     
             const [mcBrColor, setMcBrColor] = useState('grey')
             const [mcCheckColor, setMcCheckColor] = useState('white')
     
           
     
             const handleRoundTrip = ()=>{
                 setTripType(roundTrip);
                 setShowReturnDate(true);
                 setShowMultiCityForm(false)
                 setShowSingleForm(true)
                 setRtBrColor('#2563eb');
                 setRtCheckColor('#2563eb');
                 setOwBrColor('grey');
                 setOwCheckColor('white');
                 setMcBrColor('grey');
                 setMcCheckColor('white');
                 
             }
     
             const handleOneWay = ()=>{
               setTripType(oneWay);
               setShowReturnDate(false);
               setShowSingleForm(true)
               setShowMultiCityForm(false)
               setRtBrColor('grey');
               setRtCheckColor('white');
               setOwBrColor('#2563eb');
               setOwCheckColor('#2563eb');
               setMcBrColor('grey');
               setMcCheckColor('white');
           }
     
           const handleMulticity = ()=>{
             setTripType(multiCity);
             setShowSingleForm(false)
             setShowMultiCityForm(true)
             setRtBrColor('grey');
             setRtCheckColor('white');
             setMcBrColor('#2563eb');
             setMcCheckColor('#2563eb');
             setOwBrColor('grey');
             setOwCheckColor('white');
         }
  return (
  
         <FlightFormSectionContent>
           
           
           {/* Flight top level items  such as stopover, manage bookings etc..*/}
            {/* Flight Headers */}
            <BookingHeaderContent
                 flightOnClickFunc={()=>handleClick('flight')}
                 flightBtBorder ={flightBtBorder}
                 manageOnClickFunc ={()=>handleClick('manage booking')} 
                 manageBtBorder ={manageBtBorder}
                 checkInOnClickFunc ={()=>handleClick('check in')}
                 checkInBtBorder={checkInBtBorder}
                 flightStatusOnClickFunc={()=>handleClick('flight status')}
                 flightStatusBtBorder ={flightStatusBtBorder}
                 stopOverOnClickFunc ={()=>handleClick('stop over')} 
                 stopOverBtBorder ={stopOverBtBorder}
            />
       <FormWrapperContainer>    
       <FormWrapper>    
           {/*================ Single City & Multi City Search Form ============== */}
 
             {showSingleMultCity && <SingleSearchCityForm
             
             handleRoundTrip={handleRoundTrip}
             rtBrColor={rtBrColor}
             rtCheckColor={rtCheckColor}
             roundTrip={roundTrip}
             handleOneWay={handleOneWay}
             owBrColor={owBrColor}
             owCheckColor={owCheckColor}
             oneWay={oneWay}
             handleMulticity={handleMulticity}
             mcBrColor={mcBrColor}
             mcCheckColor={mcCheckColor}
             multiCity={multiCity}  
             showSingleForm={showSingleForm}
             showMultiCityForm={showMultiCityForm}
             showReturnDate={showReturnDate}
 
             />}
 
 {/*============================ Manage Booking Form =============================== */}
         { showManageBooking && <ManageBooking/> }
 
       
       {/*============================ Checking In Form =============================== */}
       { showCheckIn && <FlightCheckin/> }
 
 
     {/*============================ Flight StatusForm =============================== */}
             {showFlightStatus && <FlightStatus/> }
 
 
 
           {/*============================ Stop over Search Form =============================== */}
               { showStopOver && <StopOver />}
 
                  </FormWrapper>
               </FormWrapperContainer>   
           </FlightFormSectionContent>
  )
}
