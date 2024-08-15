import React, { useState } from 'react'
import { FlightForm } from '../FlightBooking.style'
import { ManageBookingWapper } from './ManageBooking.style'
import Input from '../../../../components/inputs/input/Input'
import Button from '../../../../components/button/Button';
import FlightInput from '../../../../components/booking_icons/FlightInput';

export default function ManageBooking() {

    const [bookingReference, setBookingReference] = useState('');
    const [lastName, setLastName] = useState('');
    const [bfError, setBfError] = useState(false);
    const [lnError, setLnError] = useState(false);

    // Booking Reference onchange handler
   const bookinReferenceHandler = (e)=>{
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

const [show, setShow] = useState(false);




  return (<>
   <form onSubmit={handleSubmit}>
<FlightForm formGap={'10px'} >
 
    {show &&<headerStyled>Manage Bookings</headerStyled>}
        <ManageBookingWapper>

            <div onClick={()=>setShow(true)}>
            <FlightInput
                                title={'Booking Reference'}
                                value={bookingReference} 
                                onChange={bookinReferenceHandler}
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
    
            {show &&         
                <Button onClick={handleSubmit} text={'Retrieve Booking'}/>
           }
        </ManageBookingWapper>
    
    </FlightForm>
    </form>
  </>

  )
}
