import React, { useState } from "react";
import myObject from "../../../data/json/myObject.json";
import {
  DateFlight,
  DNRDetail,
  DNRDetailAirport,
  DNRDetailBaggage,
  DNRDetailFlightImage,
  DNRDetailTime,
  DnRHeader,
  DnRWrapper,
  FlightCard,
  FlightCardContent,
  FLightDetail,
  FlightDetailButton,
  FlightDetailClose,
  FLightDetailContent,
  FlightDetailDNR,
  FlightDetialButton,
  FlightLogo,
  FlightResultContent,
  FlightResultHeader,
  FlightResultMain,
  FlightResultSideBar,
  FlightResultWrapper,
  MdFlightStyled,
  ResultCounter,
  ResultCounterLeft,
  ResultCounterRight,
  ResultSidebar,
  ResultSideBar,
} from "./FlightResult.style";
import { MdFlight, MdFlightTakeoff, MdHotel } from "react-icons/md";
import flightLogo from "../../../images/aire-peace.png";
import { FaCircle, FaTimes } from "react-icons/fa";
import Button from "../../../components/button/Button";
import FlightIcon from "../../../components/flight_icon/FlightIcon";
import FlightResultForDepartandReturn from "../../../components/Flight/FlightResultForDepartandReturn";
import { useNavigate } from "react-router-dom";
import { FlightType, FormWrapper, RadioCheck, RadioItem, RadioItemWrapper } from "../flight_booking/FlightBooking.style";
import SingleSearchCityForm from "../flight_booking/single_city/SingleSearchCityForm";
import MulticitySearchForm from "../flight_booking/multi_city/MulticitySearchForm";
import { LiaCcVisa } from "react-icons/lia";

export default function FlightResult() {
  // const flightData = JSON.parse(myObject);

  const navigate = useNavigate();

  // Show View Detail Variable
  const [showViewDetailCard, setShowViewDetailCard] = useState(false);

  //show view detail handler
  const showViewDetail = () => {
    setShowViewDetailCard(true);
  };

  //hide view detail handler
  const closeViewDetail = () => {
    setShowViewDetailCard(false);
  };

  // continue Booking Handler
  const continueBooking = () => {
    navigate("/trip-info");
    setShowViewDetailCard(false);
  };


  // FlightItems
  const FlightItems = [
    {
      title: 'Flight',
      link: '#',
      Icon: <MdFlightTakeoff/>,
      bgColor: '',
      border: ''
    },
    {
      title: 'Hotel',
      link: '/hotel-reservation',
      Icon: <MdHotel/>,
      bgColor: 'none',
      border: 'none'
    },
    {
      title: 'Visa',
      link: '/visa',
      Icon: <LiaCcVisa/>,
      bgColor: 'none',
      border: "none"
    }
  ]

  const [showFlightInputs, setshowFlightInputs] = useState(false)

const [showReturnDate, setShowReturnDte] = useState(true);

      // ===========Show/Hide Single City and Multi City Search Form
      const [tripType, setTripType] = useState('One Way');

      const [roundTrip, setRroundTrip] = useState('Round Trip');
      const [oneWay, setOneWay] = useState('One Way');
      const [multiCity, setMultiCity] = useState('Multi City');
    

      const [showSingleForm, setShowSingleForm] = useState(true);
      const [showMultiCityForm, setShowMultiCityForm] = useState(false);
// ===========Show/Hide Single City and Multi City Search Form


const [rtBrColor, setRtBrColor] = useState('#2563eb')
const [rtCheckColor, setRtCheckColor] = useState('#2563eb')

const [owBrColor, setOwBrColor] = useState('grey')
const [owCheckColor, setOwCheckColor] = useState('white')

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
        <p>
          Select your departure flight from <span>Abuja</span> to{" "}
          <span>Lagos</span>
        </p>
      </FlightResultHeader>


{/* Flight Modification form */}
      {/* <FlightModification> */}
            <FormWrapper>    
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
         
            </FormWrapper>
      {/* </FlightModification> */}

    
      {/* flight result section */}
      <FlightResultContent>

{/* Sidebar */}
   <ResultSidebar>adadadadadad</ResultSidebar>

        {/* Flight Result Main Content */}
        <FlightResultMain>
          {/* Counter Summary */}
          <ResultCounter>
            <ResultCounterLeft>
              <h3>{myObject.length} results</h3>
              <p>Fares displayed are for all passengers.</p>
            </ResultCounterLeft>

            <ResultCounterRight>
              <span onClick={() => {}}>See more dates</span>
              <span onClick={() => {}}>NGN - NG Nairas (₦)</span>
              <span onClick={() => {}}>Sort and Filter</span>
            </ResultCounterRight>
          </ResultCounter>

          {/* Flight Result Card  1*/}
          <FlightResultForDepartandReturn flightSearchResultData={myObject} />
        </FlightResultMain>
      </FlightResultContent>

      {/* FLIGHT DETAIL SECTION */}
      {showViewDetailCard && (
        <FLightDetail>
          {/* close icon */}
          <FlightDetailClose>
            <FaTimes onClick={closeViewDetail} />
          </FlightDetailClose>

          {/* flight detail content */}
          <FLightDetailContent>
            {/* flight departure */}
            <FlightDetailDNR>
              <span>
                <div>
                  <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
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
                    <FlightIcon rotate={"90deg"} iconColor={"#0D3984"} />
                    0-Stop
                  </span>
                  <span>
                    <h3>00:05</h3>
                    Abuja
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
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

            {/* flight return */}
            <FlightDetailDNR>
              <span>
                <div>
                  <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                  <h3>Flight From Lagos - Abuja</h3>
                </div>
                <b>Inbound</b>
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
                    <FlightIcon rotate={"270deg"} iconColor={"#FF6805"} />
                    0-Stop
                  </span>
                  <span>
                    <h3>00:05</h3>
                    Abuja
                  </span>
                </DNRDetailTime>

                <DNRDetailAirport>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
                  <div>Abuja, Nnamdi Azikwe International Airport (ABV)</div>
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
            <Button text={"Continue Booking"} onClick={continueBooking} />
          </FlightDetailButton>
        </FLightDetail>
      )}
    </FlightResultWrapper>
  );
}
