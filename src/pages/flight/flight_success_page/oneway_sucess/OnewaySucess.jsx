



import React, { useRef, useState } from 'react';
import {

  FlightSuccessBody,
  FlightSuccessContent,
  FlightSuccessHeader,

  FlightSuccessWrapper,
  
  SuccessWrapper,
  MarkIcon,
  BookingId,
  PaymentStatusContent,
  PassengerDetail,
  PassengerWrapper,
  PassengerContent,
  HRStyled,
  ButtonWrapper,
  ContactDetail
} from './OnewaySucess.style';
import Button from '../../../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '../../../../components/flight_icon/FlightIcon';
import flightLogo from '../../../../images/aire-peace.png';
import { FaCheckCircle, FaCircle, FaMarkdown, FaPaypal, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
import { RadioCheck, RadioItem, RadioItemWrapper } from '../../flight_booking/FlightBooking.style';
import SuccessPassengerDetail from '../component/passenger_detail/SucessPassengerDetail';
import { FlightDetailWrapper, TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailTime, TripHour } from '../../flight_result/trip_info/TripInfo.style';
import TripFare from '../trip_fare/TripFare';
import { HotelContentWrapper, Section, SpaceBetweenContent } from '../../../hotel/hotel_booking/HotelBooking.style';
import HotelCard from '../../../../components/hotel_components/hotel_card/HotelCard';
import { hotelList } from '../../../../data/object/hotelList';


export default function OnewaySucess() {
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
    <FlightSuccessWrapper>
      {/* Header */}
      <FlightSuccessHeader>
          <Button text={'Home'} onClick={()=>navigate('/')} /> 
      </FlightSuccessHeader>

      {/* Body */}
        {/* Main Content */}
        <FlightSuccessBody>
        
        <FlightSuccessContent>
           <SuccessWrapper>
           <MarkIcon><IoMdCheckmark /></MarkIcon> 
            <h2>Great Job! your have been successfully booked </h2>
            <p>Your booking has been placed successfully. we will send you a confirmation <br/>email with your booking details</p>
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
        </FlightSuccessContent>


      <FlightSuccessContent id='printable-div'>
        
     {/* Passagner detail */}
      <h3>Passenger Detail</h3>
      <HRStyled /> 
      {/* Adult */}
      <SuccessPassengerDetail
          title={'Adult'}
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
         title={'Child'}
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
          {/* infant */}
      <SuccessPassengerDetail
          title={'Infant'}
          passengerName={'Muiz Yusuf'} 
          passportName={'Muiz Yusuf'}  
          tickets={''} 
          airlinePNR={''} 
          nationality={'Nigeria'}  
          gender={'male'}  
          dob={'08/18/1989'}  
          passportNumber={'jdjd47474994uc'}  
          phoneNumber={'+234 8135701458'}  
          emailAddress={'isahyusuf79@gmail.com'} 
      />

<HRStyled /> 
 
  <h3>Flight Detail</h3>
  {/* First Departure */}
  <FlightDetailWrapper>
               {/* title */}
                  <TripDetailTile>
                    <span> <h2>Abuja</h2> <FlightIcon rotate={'90deg'} iconColor={'#0D3984'}/>  <h2>Lagos</h2> </span>
                    <span>
                      <p>Saturday, July 13</p>
                      <p>0 Stops. 1h 15m</p>
                      <div>
                            {/* <IoIosArrowDown /> */}
                      </div>
                    </span>
                  </TripDetailTile>
                      {/* body */}
                    
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
                  </TripDetailBody>
              </FlightDetailWrapper>


              {/* Trip Total Price */}
              <HRStyled /> 
              <TripFare/>  
              <HRStyled /> 
              <ContactDetail>
                  <span>Hotline: 02013438157, 07009252669</span>
                  <span>Mobile: 02013438157, 07009252669</span>
                  <span>Email: info@manzotravel.com</span>
              </ContactDetail>
      </FlightSuccessContent>
              {/* Print Button */}
              <ButtonWrapper>
                  <Button onClick={handlePrint} text={'Print Booking'} /> 
              </ButtonWrapper>


              {/* Add hotel reservation */}
               {/* List of Hotels */}   
      <FlightSuccessContent>
        <Section>
          <SpaceBetweenContent>
            <h2>Include Hotel Reservation in your Trip</h2> <a href='/hotel-reservation'>Make Reservation</a>
          </SpaceBetweenContent>
            <HotelContentWrapper>
                {
                    hotelList.slice(0, 3)?.map((item, i)=>(
                      <HotelCard 
                        key={i} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        subTitle={item.subTitle}
                        rating={item.rating}
                        reviewCount={item.reviewCount}
                        price={item.price}
                      />         
                    ))
                  } 
           </HotelContentWrapper> 
          </Section>
          </FlightSuccessContent>
     

        </FlightSuccessBody>
</FlightSuccessWrapper>
  );
}

