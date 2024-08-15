
  import React, { useState } from 'react'

import Input from '../../../../components/inputs/input/Input'
import Button from '../../../../components/button/Button';
import { ManageBookingWapper } from '../manage_booking/ManageBooking.style';
import { FlightForm } from '../FlightBooking.style';
import FlightInput from '../../../../components/booking_icons/FlightInput';

export default function FlightCheckin() {

    const [bookingReference, setBookingReference] = useState('');
    const [lastName, setLastName] = useState('');
    const [bfError, setBfError] = useState(false);
    const [lnError, setLnError] = useState(false);
    const [show, setShow] = useState(false);


    // Booking Reference onchange handler
   const bookingReferenceHandler = (e)=>{
    setBookingReference(e.target.value)
    setBfError(false)
   }


       // Name onchange handler
       const lastNameHandler = (e)=>{
        setLastName(e.target.value)
        setLnError(false)
       }



//  submit handler
const handleSubmit = (e)=>{
    e.preventDefault();
    if(bookingReference === null || bookingReference === ""){
        setBfError(true);
    }else if(lastName === null || lastName===""){
      setLnError(true);
    }

  
}




  return (<div>
    <form onSubmit={handleSubmit}>
<FlightForm >
 { show &&  <headerStyled>Flight Check-In</headerStyled>}
        <ManageBookingWapper>

            <div onClick={()=>setShow(true)}>
            <FlightInput
              title={'Booking Reference'}
              value={bookingReference} 
              onChange={bookingReferenceHandler}
              type={'text'}
              label={''}
              error={bfError}
              />
            </div>
            <div onClick={()=>setShow(true)}>
          
                             <FlightInput
                                title={'Last Name'}
                                value={lastName} 
                                onChange={lastNameHandler}
                                type={'text'}
                                label={''}
                                error={lnError}
                            />
            </div>
              
        {show &&   <Button text={'Retrieve Booking'}/>}
     
        </ManageBookingWapper>
    </FlightForm>
    </form>
  </div>
  )
}
