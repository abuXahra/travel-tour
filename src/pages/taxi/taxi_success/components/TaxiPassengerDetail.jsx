import React from 'react'
import { PassengerContent, PassengerDetail, PassengerWrapper } from './TaxiPassengerDetail.style'



export default function TaxiPassengerDetail({
  title,
  passengerTitle, 
  passengerName, 
  gender,  
  phoneNumber, 
  email,
  whatsAppNo
}) {
  return (
  <PassengerDetail>
          
          <PassengerWrapper>
            <h3>{title}</h3>
            
           <PassengerContent>
              <div>
                <div>
                  <span>Passenger Title</span>
                  <span><b>{passengerTitle}</b></span>
                </div>
                <div>
                  <span>Passenger Name</span>
                  <span><b>{passengerName}</b></span>
                </div>
              </div>
              <div>
                <div>
                  <span>Gender</span>
                  <span><b>{gender}</b></span>
                </div>
              </div>
     </PassengerContent>       
     <PassengerContent>
        <div>
          <div>
              <span>Email</span>
              <span><b>{email}</b></span>
          </div>
          <div>
            <span>Phone No.</span>
            <span><b>{phoneNumber}</b></span>
          </div>
        </div>
      <div>
        <div>
          <span>Whatsapp No.</span>
          <span><b>{whatsAppNo}</b></span>
        </div>
    </div>
     </PassengerContent>  
    </PassengerWrapper>
  </PassengerDetail>  
  )
}



