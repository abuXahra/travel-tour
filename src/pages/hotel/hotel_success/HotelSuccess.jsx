


import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingId, ButtonWrapper, ContactDetail, HotelDetailWrapper, HotelGuestInfoContent, HotelGutestDetailBody, HotelGutestDetailClass, HotelGutestDetailTitle, HotelGutestDetailWrapper, HotelSuccessBody, HotelSuccessContent, HotelSuccessHeader, HotelSuccessWrapper, HotelTripAirport, HotelTripDetailTime, HotelTripHour, HRStyled, MarkIcon, PaymentStatusContent, SuccessWrapper } from './HotelSuccess.style';
import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
import SuccessPassengerDetail from '../../flight/flight_success_page/component/passenger_detail/SucessPassengerDetail';
import Button from '../../../components/button/Button';
import { TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour } from '../../flight/flight_result/trip_info/TripInfo.style';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import { MdHotel, MdLocalHotel } from 'react-icons/md';
import TripFare from '../../flight/flight_success_page/trip_fare/TripFare';
import { GuestInfoContent, GutestDetailBody, GutestDetailClass, GutestDetailTitle, GutestDetailWrapper } from '../gues_info/GuestInfo.style';
import { TripFareWrapper } from '../../flight/flight_success_page/trip_fare/TripFare.style';


// import {

//   HotelSuccessBody,
//   HotelSuccessContent,
//   HotelSuccessHeader,

//   HotelSuccessWrapper,
  
//   SuccessWrapper,
//   MarkIcon,
//   BookingId,
//   PaymentStatusContent,
//   PassengerDetail,
//   PassengerWrapper,
//   PassengerContent,
//   HRStyled,
//   ButtonWrapper,
//   ContactDetail
// } from './HotelSuccess.style';
// import Button from '../../../components/button/Button';
// import Timeline from '../../../components/timeline/Timeline';
// import { useNavigate } from 'react-router-dom';
// import HotelIcon from '../../../components/Hotel_icon/HotelIcon';
// import HotelLogo from '../../../images/aire-peace.png';
// import { FaCheckCircle, FaCircle, FaMarkdown, FaPaypal, FaTimes } from 'react-icons/fa';
// import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
// import { RadioCheck, RadioItem, RadioItemWrapper } from '../Hotel_booking/HotelBooking.style';

// import { HotelDetailWrapper, TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour } from '../Hotel_result/trip_info/TripInfo.style';
// import TripFare from './trip_fare/TripFare';


export default function HotelSuccess() {
  const navigate = useNavigate();
 


  // Click to copy text
const [bookId, setBookId] = useState('240727041354');

const copyToClipboard = () => {
  navigator.clipboard.writeText(bookId)
    .then(() => {
      alert('Booking ID copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
};


const handlePrint = () => {
  const printContent = document.getElementById('printable-div');
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent.innerHTML;
  window.print();
  document.body.innerHTML = originalContent;
};


  return (
    <HotelSuccessWrapper>
      {/* Header */}
      <HotelSuccessHeader>
          <Button text={'Home'} onclick={()=>navigate('/')} /> 
      </HotelSuccessHeader>

      {/* Body */}
        {/* Main Content */}
        <HotelSuccessBody>
        
        <HotelSuccessContent>
           <SuccessWrapper>
           <MarkIcon><IoMdCheckmark /></MarkIcon> 
            <h2>Great Job! your have been successfully booked </h2>
            <p>Your reservation has been placed successfully. we will send you a confirmation <br/>email with your booking details</p>
           <BookingId><span>Booking ID: <b>{bookId}</b> </span> <div onClick={copyToClipboard}>Copy</div></BookingId> 
            
            <PaymentStatusContent>
              <div>
                  <span>PAYMENT STATUS:</span>
                  <b>N/A</b>
              </div>
              <div>
                  <span>BOOKING REFERENCE:</span>
                  <b>240727041354</b>
              </div>
              <div>
                  <span>BOOKING DATE:</span>
                  <b>JULY 27, 2024</b>
              </div>
            </PaymentStatusContent>
        </SuccessWrapper>
        </HotelSuccessContent>


      <HotelSuccessContent id='printable-div'>
        
     {/* Passagner detail */}
      <h3>Guest Detail</h3>
      <HRStyled /> 
      {/* Adult */}
      <SuccessPassengerDetail
          title={'Guest 1 (Adult)'}
          passengerName={'Isah Yusuf'} 
          passportName={'Isah Yusuf'}  
          tickets={''} 
          airlinePNR={''} 
          nationality={'Nigeria'}  
          gender={'male'}  
          dob={'08/18/1989'}  
          passportNumber={'jdjd47474994uc'}  
          phoneNumber={'+234 8135701458'}  
          emailAddress={'isahyusuf@gmail.com'} 
      />
        <HRStyled /> 

              {/* child */}
      <SuccessPassengerDetail
         title={'Guest 2 (Adult)'}
          passengerName={'Amjad Yusuf'} 
          passportName={'Amjad Yusuf'}  
          tickets={''} 
          airlinePNR={''} 
          nationality={'Nigeria'}  
          gender={'male'}  
          dob={'08/18/1989'}  
          passportNumber={'jdjd47474994uc'}  
          phoneNumber={'+234 8135701458'}  
          emailAddress={'isahyusuf@gmail.com'} 
      />

<HRStyled /> 
 
  <h3>Hotel Detail</h3>

{/* User info content */}

            {/* User info content */}
     
              
              {/* User info content */}
            <HotelGuestInfoContent>
              
              {/* Flight Detail section */}

              {/* For Departure */}
              <HotelGutestDetailWrapper>
               {/* title */}
                  <HotelGutestDetailTitle>
                    <span> <h2>Transcorp Hilton,</h2> <h2>Abuja</h2> </span>
                    <span>
                      <p>Saturday, July 13</p>
                      <div>
                            <IoIosArrowDown />
                      </div>
                    </span>
                  </HotelGutestDetailTitle>
                      {/* body */}
                  
                     <HotelGutestDetailBody>
                        <HotelGutestDetailClass>
                          <span>
                            1 Aguiyi Ironsi St, Maitama, Abuja 900001, Federal Capital Territory </span>
                          <span><a href="#">2 Classic</a></span>
                        </HotelGutestDetailClass>
                        <HotelTripDetailTime>
                            <HotelTripHour>
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
                          </HotelTripHour>
                        <HotelTripAirport>
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
                        </HotelTripAirport>
         
                        </HotelTripDetailTime>
                  </HotelGutestDetailBody>
              </HotelGutestDetailWrapper>
            </HotelGuestInfoContent>                      
       

              {/* Trip Total Price */}
              <HRStyled /> 
              <TripFareWrapper>
            <h3>Reservation Fee</h3>
          <div>
              <h4>Base Fee</h4>
              {/* Base Fee */}
              <div>
                  <span>Guest 1 (Adult)</span>
                  <span>250,000</span>
              </div>
              <div>
                  <span>Guest 2 (Adult)</span>
                  <span></span>
              </div>
          </div>

      {/* Addons */}
          <HRStyled lineWidth={'50%'} />
          {/* Total Price */}
          <div>
              <div>
                  <span><h2>Total Price</h2></span>
                  <span><h2>N500,000</h2></span>
              </div>
          </div> 
    </TripFareWrapper>
    
              <HRStyled /> 
              <ContactDetail>
                  <span>Hotline: 02013438157, 07009252669</span>
                  <span>Mobile: 02013438157, 07009252669</span>
                  <span>Email: info@manzotravel.com</span>
              </ContactDetail>
      </HotelSuccessContent>
              {/* Print Button */}
              <ButtonWrapper>
                  <Button onClick={handlePrint} text={'Print Booking'} /> 
              </ButtonWrapper>

              <HotelSuccessContent>
              <h3>Include Flight Booking</h3>
               </HotelSuccessContent>
          
        </HotelSuccessBody>
</HotelSuccessWrapper>
  );
}

