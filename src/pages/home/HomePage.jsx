import React, { useRef, useState } from 'react'
import { HomePageBody, HomePageWrapper, HomeTopSection } from './HomePage.style'
import HeroSection from '../../components/hero/HeroSection'
import homeBg from '../../images/travelunsplash.jpg'
import FlightFormComponents from '../../components/Flight/flight_form_compnents/FlightFormComponents'
import Content from '../../components/homepage_content/Content'
import FlightSlide from '../../components/Flight/flight_packages/flight_slider/FlightSlider'
import Button from '../../components/button/Button'
import { FaArrowDown, FaLongArrowAltDown } from 'react-icons/fa'
import VideoBackground from '../../components/video_background/VideoBackground'
import { FlightFormSection, FlightFormSectionContent, FlightFormSectionTitle, FormWrapper } from '../flight/flight_booking/FlightBooking.style'
import BookingHeaderContent from '../../components/booking_icons/book_sub_header/BookingHeaderContent'
import { FormWrapperContainer } from '../../components/booking_icons/form_wrapper/FormWrapper.style'
import SingleSearchCityForm from '../flight/flight_booking/single_city/SingleSearchCityForm'
import ManageBooking from '../flight/flight_booking/manage_booking/ManageBooking'
import FlightCheckin from '../flight/flight_booking/checkin.jsx/FlightCheckin'
import FlightStatus from '../flight/flight_booking/flight_status/FlightStatus'
import StopOver from '../flight/flight_booking/stop_over/StopOver'
import { useAuthStore } from '../../store/store'
import Loader from '../../components/loader/Loader'
import heroImage from "../../images/travelunsplash.jpg";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

export default function HomePage() {
  // Error Message if the depart and destination location is the same
  const locationError = (toastMessage) => toast.error('Change destination location')
   
  
  
  // CLICK AND SCROLL TO General Reservation conditions
  //  const bodyRef = useRef(null);
  
  //  const handleBodyRef = (sectionRef) => {
  //    if (sectionRef.current) {
  //      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //    }
  //  }



    const { loader } = useAuthStore();
   
     // Show/Hide Form
     const [showSingleMultCity, setShowSingleMultCity] = useState(true);
     const [showManageBooking, setShowManageBooking] = useState(false);
     const [showCheckIn, setShowCheckIn] = useState(false);
     const [showFlightStatus, setShowFlightStatus] = useState(false);
     const [showStopOver, setShowStopOver] = useState(false);
   
     // Flight Form Header Variables:
     const [flightBtBorder, setFlightBtBorder] = useState("");
   
     const [manageBtBorder, setManageBtBorder] = useState("none");
   
     const [checkInBtBorder, setCheckInBtBorder] = useState("none");
   
     const [flightStatusBtBorder, setFlightStatusBtBorder] = useState("none");
   
     const [stopOverBtBorder, setStopOverBtBorder] = useState("none");
   
     // Flight Header Func to wich between the header and its content
   
     const handleClick = (type) => {
       if (type === "flight") {
         setFlightBtBorder("");
         setManageBtBorder("none");
         setCheckInBtBorder("none");
         setFlightStatusBtBorder("none");
         setStopOverBtBorder("none");
   
         setShowSingleMultCity(true);
         setShowManageBooking(false);
         setShowCheckIn(false);
         setShowFlightStatus(false);
         setShowStopOver(false);
       } else if (type === "manage booking") {
         setFlightBtBorder("none");
         setManageBtBorder("");
         setCheckInBtBorder("none");
         setFlightStatusBtBorder("none");
         setStopOverBtBorder("none");
   
         setShowSingleMultCity(false);
         setShowManageBooking(true);
         setShowCheckIn(false);
         setShowFlightStatus(false);
         setShowStopOver(false);
       } else if (type === "check in") {
         setFlightBtBorder("none");
         setManageBtBorder("none");
         setCheckInBtBorder("");
         setFlightStatusBtBorder("none");
         setStopOverBtBorder("none");
   
         setShowSingleMultCity(false);
         setShowManageBooking(false);
         setShowCheckIn(true);
         setShowFlightStatus(false);
         setShowStopOver(false);
       } else if (type === "flight status") {
         setFlightBtBorder("none");
         setManageBtBorder("none");
         setCheckInBtBorder("none");
         setFlightStatusBtBorder("");
         setStopOverBtBorder("none");
   
         setShowSingleMultCity(false);
         setShowManageBooking(false);
         setShowCheckIn(false);
         setShowFlightStatus(true);
         setShowStopOver(false);
       } else if (type === "stop over") {
         setFlightBtBorder("none");
         setManageBtBorder("none");
         setCheckInBtBorder("none");
         setFlightStatusBtBorder("none");
         setStopOverBtBorder("");
   
         setShowSingleMultCity(false);
         setShowManageBooking(false);
         setShowCheckIn(false);
         setShowFlightStatus(false);
         setShowStopOver(true);
       }
     };
   
     // =====================Select Forms: one way, round trip, multicity=========================//
   
     // ===========Show/Hide Single City and Multi City Search Form
     const [showReturnDate, setShowReturnDate] = useState(true);
     const [showOnewayDate, setShowOnewayDate] = useState(false);
       
     const [tripType, setTripType] = useState();
   
     const [roundTrip, setRroundTrip] = useState("Round Trip");
     const [oneWay, setOneWay] = useState("One Way");
     const [multiCity, setMultiCity] = useState("Multi City");
   
     const [showSingleForm, setShowSingleForm] = useState(true);
     const [showMultiCityForm, setShowMultiCityForm] = useState(false);
   
     const [rtBrColor, setRtBrColor] = useState("#2563eb");
     const [rtCheckColor, setRtCheckColor] = useState("#2563eb");
   
     const [owBrColor, setOwBrColor] = useState("grey");
     const [owCheckColor, setOwCheckColor] = useState("white");
   
     const [mcBrColor, setMcBrColor] = useState("grey");
     const [mcCheckColor, setMcCheckColor] = useState("white");
   
     const handleRoundTrip = () => {
       setTripType(roundTrip);
       setShowReturnDate(true);
       setShowOnewayDate(false);
       setShowMultiCityForm(false);
       setShowSingleForm(true);
       setRtBrColor("#2563eb");
       setRtCheckColor("#2563eb");
       setOwBrColor("grey");
       setOwCheckColor("white");
       setMcBrColor("grey");
       setMcCheckColor("white");
     };
   
     const handleOneWay = () => {
       setTripType(oneWay);
       setShowReturnDate(false);
       setShowOnewayDate(true);
       setShowReturnDate(false);
       setShowSingleForm(true);
       setShowMultiCityForm(false);
       setRtBrColor("grey");
       setRtCheckColor("white");
       setOwBrColor("#2563eb");
       setOwCheckColor("#2563eb");
       setMcBrColor("grey");
       setMcCheckColor("white");
     };
   
     const handleMulticity = () => {
       setTripType(multiCity);
       setShowSingleForm(false);
       setShowMultiCityForm(true);
       setRtBrColor("grey");
       setRtCheckColor("white");
       setMcBrColor("#2563eb");
       setMcCheckColor("#2563eb");
       setOwBrColor("grey");
       setOwCheckColor("white");
     };
   




 
  return (
    <HomePageWrapper>
           {loader && <Loader text={"Retrieving Flights, Please Wait..."} />}


 {/* hero section with form */}
      <HeroSection heroImage={heroImage}>
        {/* flight form section */}
        <FlightFormSection sectionHeight={"auto"}>
          {/* flight form section  title */}
          <FlightFormSectionTitle>
            <h4>Book your flight?</h4>
            <h1>Let's take you round the world...</h1>
          </FlightFormSectionTitle>

          {/* flight form section content */}
          <FlightFormSectionContent>
            {/* Flight top level items  such as stopover, manage bookings etc..*/}
            {/* Flight Headers */}
            <BookingHeaderContent
              flightOnClickFunc={() => handleClick("flight")}
              flightBtBorder={flightBtBorder}
              manageOnClickFunc={() => handleClick("manage booking")}
              manageBtBorder={manageBtBorder}
              checkInOnClickFunc={() => handleClick("check in")}
              checkInBtBorder={checkInBtBorder}
              flightStatusOnClickFunc={() => handleClick("flight status")}
              flightStatusBtBorder={flightStatusBtBorder}
              stopOverOnClickFunc={() => handleClick("stop over")}
              stopOverBtBorder={stopOverBtBorder}
              showItems={true}
            />
            <FormWrapperContainer>
              <FormWrapper>
                {/*================ Single City & Multi City Search Form ============== */}

                {showSingleMultCity && (
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
                    showOnewayDate={showOnewayDate}
                    locationError={locationError}
                  />
                )}

                {/*============================ Manage Booking Form =============================== */}
                {showManageBooking && <ManageBooking />}

                {/*============================ Checking In Form =============================== */}
                {showCheckIn && <FlightCheckin />}

                {/*============================ Flight StatusForm =============================== */}
                {showFlightStatus && <FlightStatus />}

                {/*============================ Stop over Search Form =============================== */}
                {showStopOver && <StopOver />}
              </FormWrapper>
            </FormWrapperContainer>
          </FlightFormSectionContent>
        </FlightFormSection>
      </HeroSection>


    {/* BODY */}
      <HomePageBody>
        <Content />
      </HomePageBody>
       {/* ===================Toast Message ================= */}
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
    </HomePageWrapper>
  )
}



{/* <HomePageBody ref={bodyRef}>
<Content />
</HomePageBody> */}

// {/* TOP SECTION */}
// <HeroSection heroImage={homeBg}>
// <HomeTopSection>
//     <h4>The Best travel & Tour agency in the world</h4>
//     <h1>Journey conveniently with Manzo Travel</h1>
//     <Button onClick={()=>handleBodyRef(bodyRef)} text={'Learn more'} rightIcon={<FaLongArrowAltDown />} bgColor={'transparent'} btnBorder={'2px solid white'}/> 
// </HomeTopSection>
// </HeroSection>