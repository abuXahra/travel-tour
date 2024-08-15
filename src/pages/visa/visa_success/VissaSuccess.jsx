import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  BookingId, ButtonWrapper, ContactDetail, MarkIcon, PaymentStatusContent, SuccessWrapper, VissaGuestInfoContent, VissaGutestDetailBody, VissaGutestDetailClass, VissaGutestDetailTitle, VissaGutestDetailWrapper, VissaSuccessBody, VissaSuccessContent, VissaSuccessHeader, VissaSuccessWrapper, VissaTripAirport, VissaTripDetailTime, VissaTripHour } from "./VissaSuccess.style";
import Button from "../../../components/button/Button";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import { HRStyled } from "../Visa.style";
import SuccessPassengerDetail from "../../flight/flight_success_page/component/passenger_detail/SucessPassengerDetail";
import FlightIcon from "../../../components/flight_icon/FlightIcon";
import { FaCcVisa } from "react-icons/fa6";
import { TripFareWrapper } from "../../flight/flight_success_page/trip_fare/TripFare.style";
import UserVisaData from "../../../components/visa/UserVisaData";
import { UserVisaDataContent, UserVisaDataWrapper, VisaDataImg } from "../../../components/visa/UserVisaData.style";
import passport from '../../../images/pasport.jpg'







export default function VissaSuccess() {
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
    <VissaSuccessWrapper>
      {/* Header */}
      <VissaSuccessHeader>
        <Button onClick={()=>navigate('/')} text={'Home'}  /> 
      </VissaSuccessHeader>

      {/* Body */}
        {/* Main Content */}
        <VissaSuccessBody>
        
        <VissaSuccessContent>
           <SuccessWrapper>
           <MarkIcon><IoMdCheckmark /></MarkIcon> 
            <h2>Great Job! your Saud Visa Application was successful </h2>
            <p>Your Visa Application has been placed successfully. we will send you a confirmation <br/>email with your application details</p>
           <BookingId><span>Application ID: <b>{bookId}</b> </span> <div onClick={copyToClipboard}>Copy</div></BookingId> 
            
            <PaymentStatusContent>
              <div>
                  <span>PAYMENT STATUS:</span>
                  <b>N/A</b>
              </div>
              <div>
                  <span>APPLICATION REFERENCE:</span>
                  <b>240727041354</b>
              </div>
              <div>
                  <span>APPLICATION DATE:</span>
                  <b>JULY 27, 2024</b>
              </div>
            </PaymentStatusContent>
        </SuccessWrapper>
        </VissaSuccessContent>


      <VissaSuccessContent id='printable-div'>
        
     {/* Passagner detail */}
      <h3>Saudi Visa Application Detail</h3>
      <HRStyled /> 

      <UserVisaDataWrapper>
        <UserVisaDataContent>
            <VisaDataImg>
                <img src={passport} alt="" srcset="" /> 
                <div>
                    <div>
                        <span>Name: </span> <span>{'Isah Abdulmumin'}</span> 
                    </div>
                    <div>
                        <span>  Nationality: </span> <span>{'Nigeria'}</span>
                    </div>
                    <div>
                        <span>  Date of Birth: </span> <span>{'6th Aug 1989'}</span>
                    </div>
                    <div>
                        <span>  Visa Type: </span> <span>{'Student Visa'}</span>
                    </div>                    
                    <div>
                        <span>  Entry Type: </span> <span>{'entryType'}</span>
                    </div>
                    <div>
                        <span>  Visa Number </span> <span>{'eieiei39395757'}</span>
                    </div>                    
                    <div>
                        <span>  Issue Date </span> <span>{'5th Oct 2019'}</span>
                    </div>
                    <div>
                        <span>  Expiry Date </span> <span>{'5th Oct 2025'}</span>
                    </div>
            
                    <div>
                        <span>  Passport Number </span> <span>{'P13FGHSDLL454J'}</span>
                    </div>
                    
                    <div>
                        <span>  Place Issued </span> <span>{'Niger'}</span>
                    </div>
                                   
                    <div>
                        <span>  Duration: </span> <span>{'6 Years'}</span>
                    </div>

                    <div>
                        <span>  Applicatin No: </span> <span>{'4857fdod'}</span>
                    </div>

                    <div>
                        <span>  Visa No: </span> <span>{'56THGJ'}</span>
                    </div>
                </div>
            </VisaDataImg>
        </UserVisaDataContent>

    </UserVisaDataWrapper>
           
                                            
       

              {/* Trip Total Price */}
              <TripFareWrapper>
            <h3>Saudi Visa Application Fee</h3>
          <div>
              <h4>Base Fee</h4>
              {/* Base Fee */}
              <div>
                  <span>Applicant (1)</span>
                  <span>350,000</span>
              </div>
          </div>

      {/* Addons */}
          <HRStyled lineWidth={'50%'} />
          {/* Total Price */}
          <div>
              <div>
                  <span><h2>Total Price</h2></span>
                  <span><h2>N350,000.00</h2></span>
              </div>
          </div> 
    </TripFareWrapper>
    
              <HRStyled /> 
              <ContactDetail>
                  <span>Hotline: 02013438157, 07009252669</span>
                  <span>Mobile: 02013438157, 07009252669</span>
                  <span>Email: info@manzotravel.com</span>
              </ContactDetail>
      </VissaSuccessContent>
              {/* Print Button */}
              <ButtonWrapper>
                  <Button onClick={handlePrint} text={'Print Booking'} /> 
              </ButtonWrapper>
          
        </VissaSuccessBody>
</VissaSuccessWrapper>
  );
}

