import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DateFlight, DNRDetail, DNRDetailAirport, DNRDetailBaggage, DNRDetailFlightImage, DNRDetailTime, DnRHeader, DnRWrapper, FlightCard, FlightCardContent, FLightDetail, FlightDetailButton, FlightDetailClose, FLightDetailContent, FlightDetailDNR, FlightLogo, FlightResultContent, FlightResultHeader, FlightResultMain, FlightResultWrapper, MdFlightStyled, ResultCounter, ResultCounterLeft, ResultCounterRight } from '../FlightResult.style';
import { MdFlight } from 'react-icons/md';
import { FaCircle, FaTimes } from 'react-icons/fa';
import FlightIcon from '../../../../components/flight_icon/FlightIcon'
import Button from '../../../../components/button/Button';
import flightLogo from '../../../../images/aire-peace.png'
// import FormWrapper from '../../../../components/booking_icons/form_wrapper/FormWrapper';
import { FlightType, RadioCheck, RadioItem, RadioItemWrapper } from '../../flight_booking/FlightBooking.style';
import SingleSearchCityForm from '../../flight_booking/single_city/SingleSearchCityForm';
import MulticitySearchForm from '../../flight_booking/multi_city/MulticitySearchForm';
import FormWrapper from '../../../../pages/flight/flight_booking/FlightBooking.style';
import { OneFormWrapper } from './OneWayResult.style';


export default function OneWayResult() {

// const flightData = JSON.parse(myObject);

const navigate = useNavigate();

// Show View Detail Variable
const [showViewDetailCard, setShowViewDetailCard] = useState(false)
  
//show view detail handler
const showViewDetail = () =>{
  setShowViewDetailCard(true);
}

//hide view detail handler
const closeViewDetail = () =>{
  setShowViewDetailCard(false);
}

// continue Booking Handler
const continueBooking = () =>{
  navigate('/trip-info');
  setShowViewDetailCard(false);
}



const [showFlightInputs, setshowFlightInputs] = useState(false)

const [showReturnDate, setShowReturnDte] = useState(false);

      // ===========Show/Hide Single City and Multi City Search Form
      const [tripType, setTripType] = useState('One Way');

      const [roundTrip, setRroundTrip] = useState('Round Trip');
      const [oneWay, setOneWay] = useState('One Way');
      const [multiCity, setMultiCity] = useState('Multi City');
    

      const [showSingleForm, setShowSingleForm] = useState(true);
      const [showMultiCityForm, setShowMultiCityForm] = useState(false);


        // ===========Show/Hide Single City and Multi City Search Form


        const [rtBrColor, setRtBrColor] = useState('grey')
        const [rtCheckColor, setRtCheckColor] = useState('white')

        const [owBrColor, setOwBrColor] = useState('#2563eb')
        const [owCheckColor, setOwCheckColor] = useState('#2563eb')

        const [mcBrColor, setMcBrColor] = useState('grey')
        const [mcCheckColor, setMcCheckColor] = useState('white')

      

        const handleRoundTrip = ()=>{
            setTripType(roundTrip);
            setShowReturnDte(true);
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
          setShowReturnDte(false);
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
    <FlightResultWrapper>

      {/* flight header section */}
      <FlightResultHeader>
        <DateFlight>Mon, 9 Sep 2024</DateFlight>
        <p>Select your departure flight
        from <span>Abuja</span> to <span>Lagos</span></p>
      </FlightResultHeader>


          {/* Flight top level items  such as stopover, manage bookings etc..*/}
           {/* Flight Headers */}


{/* Flight Modification form */}
      {/* <FlightModification> */}
      <OneFormWrapper>    
                         
                
                {/*======= Flight Search Form =============================== */}

                {/*============================ Single City Search Form =============================== */}
             
               
           <SingleSearchCityForm
            
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
    
                />
                


    </OneFormWrapper>
      {/* </FlightModification> */}
      
      {/* flight result section */}
      <FlightResultContent>

      

        {/* Flight Result Main Content */}
        <FlightResultMain>
         
          {/* Counter Summary */}
            <ResultCounter>
                <ResultCounterLeft>
                    <h3>6 results</h3>
                    <p>Fares displayed are for all passengers.</p> 
                  </ResultCounterLeft>

                <ResultCounterRight>
                  <span onClick={()=>{}}>See more dates</span>
                  <span onClick={()=>{}}>USD - US Dollar ($)</span>
                  <span onClick={()=>{}}>Sort and Filter</span>
                </ResultCounterRight>
            </ResultCounter>


       {/* Flight Result Card  1*/}
       <FlightCard>
         {/* flight logo */}
          <FlightLogo>
            <span><img src={flightLogo} alt="" srcset="" /><h3>Air Peace</h3></span>
            <div onClick={showViewDetail}>View Flight Detail</div>
          </FlightLogo>

          {/* Depart and Return Wrapper */}
          <FlightCardContent>
              <DnRWrapper>  
                <DnRHeader><h5>Depart</h5> <p>15:45</p> <p>Arik Air</p></DnRHeader>
                <div>
                  <span>
                  <h3>19:45</h3>    
                      Abuja
                  </span>
                  <span>
                      1-Stop
                      <MdFlightStyled rotateIcon={'90deg'} IconColor={'#0D3984'}><MdFlight/></MdFlightStyled>                 
                      1hr 30min
                  </span>
                  <span>
                  <h3>19:45</h3> 
                      Lagos
                  </span>
                </div>
              </DnRWrapper>

            </FlightCardContent>

            <FlightLogo>
                <b style={{color: 'black', fontSize: "14px"}}>Price: 375,000</b>
                <span style={{color: 'green', fontSize: "12px"}}>(Penalties upon Refunds)</span>
          </FlightLogo>
        </FlightCard>


        </FlightResultMain>
      </FlightResultContent>

     
     {/* FLIGHT DETAIL SECTION */}
      {showViewDetailCard &&
      <FLightDetail>
        {/* close icon */}
          <FlightDetailClose>
            <FaTimes onClick={closeViewDetail}/>
          </FlightDetailClose>

          {/* flight detail content */}
          <FLightDetailContent>
            {/* flight departure */}
            <FlightDetailDNR>  
                <span>
                  <div>
                    <FlightIcon rotate={'90deg'} iconColor={'#0D3984'}/> 
                    <h3>Flight From Abuja - Lagos</h3>
                  </div>
                  <b>Outbound</b>
                </span>
                <DNRDetail>
                 
                 <DNRDetailFlightImage>
                     <img src={flightLogo} alt="" srcset="" />
                 </DNRDetailFlightImage>

                  <DNRDetailTime>
                    <span>
                        <h3>19:45</h3>    
                        Lagos
                    </span>
                    <span>
                        1hr 30min
                          <FlightIcon rotate={'90deg'} iconColor={'#0D3984'}/>           
                        0-Stop
                    </span>
                    <span>
                        <h3>00:05</h3> 
                        Abuja
                    </span>
                  </DNRDetailTime>
    
                  <DNRDetailAirport>
                      <div>
                         Abuja, Nnamdi Azikwe International Airport (ABV)
                      </div>
                      <div>
                         Abuja, Nnamdi Azikwe International Airport (ABV)
                      </div>
                  </DNRDetailAirport>
                  <DNRDetailBaggage>
                    <span>
                        <h3>Airline</h3>    
                        Air Peace - 727 - Class W
                    </span>
                    <span>
                        <h3>Baggage</h3> 
                        100kg
                    </span>
                  </DNRDetailBaggage>
                </DNRDetail>
            </FlightDetailDNR>

        </FLightDetailContent>

        <FlightDetailButton>
          <Button text={'Continue Booking'} onClick={continueBooking}/>
        </FlightDetailButton>
      </FLightDetail>}

    </FlightResultWrapper>
  )
}


