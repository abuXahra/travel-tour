


import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingId, ButtonWrapper, ContactDetail, HotelDetailWrapper, HotelGuestInfoContent, HotelGutestDetailBody, HotelGutestDetailClass, HotelGutestDetailTitle, HotelGutestDetailWrapper, TaxiSuccessBody, TaxiSuccessContent, TaxiSuccessHeader, TaxiSuccessWrapper, HotelTripAirport, HotelTripDetailTime, HotelTripHour, HRStyled, MarkIcon, PaymentStatusContent, SuccessWrapper, ContainerHeader, Containerbody } from './TaxiSuccess.style';
import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
import Button from '../../../components/button/Button';
import { TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour } from '../../flight/flight_result/trip_info/TripInfo.style';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import { MdFlightLand, MdFlightTakeoff, MdHotel, MdLocalHotel } from 'react-icons/md';
import TripFare from '../../flight/flight_success_page/trip_fare/TripFare';

import { TripFareWrapper } from '../../flight/flight_success_page/trip_fare/TripFare.style';
import { ContainerTime, ContainerWrapper, FlightContainer, FlightHeader, FlightIconWrapper, FlightTimeContainer } from '../taxi_overview/TaxiOverview.style';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCarSide } from 'react-icons/fa';
import TaxiPassengerDetail from './components/TaxiPassengerDetail';


export default function DropOffSuccess() {
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
    <TaxiSuccessWrapper>
      {/* Header */}
      <TaxiSuccessHeader>
          <Button text={'Home'} onclick={()=>navigate('/')} /> 
      </TaxiSuccessHeader>

      {/* Body */}
        {/* Main Content */}
        <TaxiSuccessBody>
        
        <TaxiSuccessContent>
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
        </TaxiSuccessContent>


      <TaxiSuccessContent id='printable-div'>
        
     {/* Passagner detail */}
      <h3>Passenger Detail</h3>
      <HRStyled /> 
      
      {/* Adult */}
      <TaxiPassengerDetail
          title={''}
          passengerTitle ={'Mr.'}
          passengerName={'Yusuf Abdulazeez'} 
          gender={'Male'}
          phoneNumber={'+2349055001663'} 
          email={'yusuf@gmail.cm'}
          whatsAppNo={'+2349055001663'}
      />

    <HRStyled /> 

        <HRStyled /> 
        <h3>Booking Detail</h3>
        <FlightContainer>
              <FlightIconWrapper>
                <FlightIcon Icon={<FaCarSide />} IconSize={'13px'} rotate={'360deg'} iconColor={'#0D3984'}/> 
                <p>Luxury</p>
              </FlightIconWrapper>
             
         
              <FlightHeader>
                <h2>Nnamdi Azikiwe International Airport</h2>
              </FlightHeader>

              <FlightIconWrapper>
             
             
              <FaLocationDot />
                    <p>Federal Capital Territory</p>
                </FlightIconWrapper>

              <FlightTimeContainer>
               {/* Location */}
                <ContainerWrapper>
                    <ContainerHeader>
                      <b>Location</b>
                    </ContainerHeader>
                    <Containerbody wd={'100%'}>
                      <div>
                          <ContainerTime><b>Pick-up:</b></ContainerTime> 
                          <span><FaLocationDot /> Adamawa House, 1099 First Ave, Wuse, Abuja 900103, Federal Capital Territory</span>
                         
                      </div>
                    </Containerbody>
                    <p></p>
                    <Containerbody wd={'100%'}>
                      <div>
                          <ContainerTime><b>Drop-off:</b></ContainerTime> 
                          <span><MdFlightTakeoff /> Nnamdi Azikiwe International Airport, Federal Capital Territory</span>
                      </div>
                    </Containerbody>
                </ContainerWrapper>


                <ContainerWrapper>
                    <ContainerHeader>
                      <b>Date/Time</b>
                    </ContainerHeader>
                    <Containerbody ws={'100%'}>
                      <div>
                          <ContainerTime><b>Pickup-date:</b></ContainerTime> 
                          <span>5th Aug. 2024. 12:00pm</span>

                          <ContainerTime><b>Pickup-time:</b></ContainerTime> 
                          <span>8:00am</span> 
                      </div>
                    
                    </Containerbody>
                </ContainerWrapper>

               {/* Class/ Baggage */}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Class/Passenger</b>
                    </ContainerHeader>
                    <Containerbody wd={'100%'}>
                    <div>
                          <ContainerTime><b>Class</b></ContainerTime> 
                          <span>Luxury</span>

                          <ContainerTime><b>Passenger</b></ContainerTime> 
                          <span>4 passenger(s)</span>
                    </div>
                    </Containerbody>
                </ContainerWrapper>

            {/* Duration/ Refund*/}
               <ContainerWrapper>
                    <ContainerHeader>
                      <b>Policy</b>
                    </ContainerHeader>
                    <Containerbody wd={'100%'}>

                    <div>
                        <ContainerTime><b>Refund</b></ContainerTime> 
                        <span> Fee is non Refundable after pick up time</span> 

                        <ContainerTime><b>Cancellation</b></ContainerTime> 
                        <span>Free cancellation 48 hours before departure</span>

                            <ContainerTime><b>Cancellation fee</b></ContainerTime> 
                            <span>50% cancellation fee applies for less than 24 hours before pick time</span>
                    </div>
                    </Containerbody>
                </ContainerWrapper>
              </FlightTimeContainer>
            </FlightContainer>
          
        {/* Trip Total Price */}
              <HRStyled /> 
              <TripFareWrapper>
            <h3>Booking Fee</h3>
          <div>
              <h4>Base Fee</h4>
              {/* Base Fee */}
              <div>
                  <span>4 Passenger</span>
                  <span>50,000</span>
              </div>
          </div>

      {/* Addons */}
          <HRStyled lineWidth={'50%'} />
          {/* Total Price */}
          <div>
              <div>
                  <span><h2>Total Price</h2></span>
                  <span><h2>N50,000</h2></span>
              </div>
          </div> 
    </TripFareWrapper>
    
              <HRStyled /> 
              <ContactDetail>
                  <span>Hotline: 02013438157, 07009252669</span>
                  <span>Mobile: 02013438157, 07009252669</span>
                  <span>Email: info@manzotravel.com</span>
              </ContactDetail>
      </TaxiSuccessContent>
              {/* Print Button */}
              <ButtonWrapper>
                  <Button onClick={handlePrint} text={'Print Booking'} /> 
              </ButtonWrapper>
        </TaxiSuccessBody>
</TaxiSuccessWrapper>
  );
}

