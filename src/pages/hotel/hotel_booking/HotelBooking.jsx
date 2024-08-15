

import React, { useState } from 'react'
import FormWrapper from '../../../components/booking_icons/form_wrapper/FormWrapper'
import Button from '../../../components/button/Button'
import HeroSection from '../../../components/hero/HeroSection'
import hotel from '../../../images/hotel-bg.png'
import BookingHeaderContent from '../../../components/booking_icons/book_sub_header/BookingHeaderContent'
import { FormWrapperContainer } from '../../../components/booking_icons/form_wrapper/FormWrapper.style'
import { ContentSubHeader } from '../../../components/booking_icons/book_sub_header/BookingHeaderContent.style'
import { HotelBody, HotelCategoryWrapper, HotelContentWrapper, HotelFormSection, HotelList, HotelWrapper, Section, SpaceBetweenContent } from './HotelBooking.style'
import { HotelFormSectionContent, HotelFormSectionTitle } from '../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_form/HotelForm.style'
import heroImage from '../../../images/hotel-bg.png'
import HotelForm from '../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_form/HotelForm'
import HotelCategory from '../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_category/HotelCategory'
import riyad from '../../../images/ryadh.png'
import dubai from '../../../images/dubai.png'
import hot from '../../../images/hotel-bg.png'
import trav from '../../../images/travelunsplash.jpg'
import { useNavigate } from 'react-router-dom'
import HotelCard from '../../../components/hotel_components/hotel_card/HotelCard'
import HotelDestination from '../../../components/hotel_components/Hotel_destication/HotelDestination'
import { hotelList } from '../../../data/object/hotelList'
import { hotelCategories } from '../../../data/object/HotelCategory'
import HotelSlide from '../../../components/hotel_components/hotel_slide_components/hotel_slider/HotelSlide'
import CategorySlide from '../../../components/hotel_components/hotel_slide_components/category_slide/CategorySlide'
import { MdFlightTakeoff, MdOutlineArrowRightAlt } from 'react-icons/md'
import BookingIcons from '../../../components/booking_icons/book_icon/BookingIcons'
import GeneralHeaders from '../../../components/booking_icons/book_sub_header/booking_general_headers/GeneralHeaders'

export default function HotelBooking() {
  const navigate = useNavigate();
  
  const FlightItems2 = [
    {
      title: 'Hotel',
      onClickFunc: '#',
      Icon: <MdFlightTakeoff/>,
      bgColor: '',
      border: 'none'
    },
    {
      title: 'Stop-over',
      onClickFunc: '/hotel-reservation',
 
      bgColor: 'none',
      border: 'none'
    },
    {
      title: 'Car',
      onClickFunc: '/visa',

      bgColor: 'none',
      border: "none"
    },
    {
      title: 'Holiday',
      onClickFunc: '/visa',
   
      bgColor: 'none',
      border: "none"
    },
    {
      title: 'Umrah',
      onClickFunc: '/visa',

      bgColor: 'none',
      border: "none"
    }
  ]


// Hotel form Reservation Variable Declarations:

   // roundTrip is selected by default
   const [destination, setDestination] = useState('');
   const [checkInDate, setCheckInDate] = useState();
   const [checkOutDate, setCheckOutDate] = useState();
   const [adults, setAdults] = useState(1);
   const [children, setChildren] = useState(0);
   const [room, setRoom] = useState(1);
  const [takeOff, setTakeOff] = useState('');
  
   const [showHotelInputs, setShowHotelInputs] = useState(false)




   // passange count event handler Event handler

   const handleDestination = (e) =>{
       setDestination(e.target.value)
   }

   const handleCheckInDate = (e)=>{
     setCheckInDate(e.target.value)
   }


   const handleCheckOutDate = (e)=>{
    setCheckOutDate(e.target.value)
   }

  

   const handleIncrement = (type) => {
     if (type === 'adults' && adults < 6) {
         totalPassengers <= 8 &&  setAdults(adults + 1);
     } else if (type === 'children' && children < 5) {
       totalPassengers <= 8 && setChildren(children + 1);
     } else if (type === 'room' && room < 4){
         setRoom(room + 1);
     }
   };
 
   const handleDecrement = (type) => {
     if (type === 'adults' && adults > 1) {
       setAdults(adults - 1);
     } else if (type === 'children' && children > 0) {
       setChildren(children - 1);
     } else if (type === 'room' && room > 1){
       setRoom(room - 1);
   }
   };

   const totalPassengers = adults + children;





     const [showPassenger, setShowPassenger] = useState(false)

     // DROPDOWN LOCATION AND DESTINATION AIRPORTS 



   const destinationAirportList= [
     {
       airportAddress: 'Lagos, Nigeria',
       airportName: 'Murtala Muhammad Internatinal Airport',
       airportAbbreviation: 'LOS'   
   },
     {
         airportAddress: 'Abuja, Nigeria',
         airportName: 'Nnamdi Azikwe Internatinal Airport',
         airportAbbreviation: 'ABV'   
     },
     
   ]



     const [searchDestinationInputValue, setSearchDestinationInputValue] = useState(''); 


     // TakeOff Search airport handler

           // destionaton Search airport handler
       const onChangeDestinationHandler = (e)=>{
             setSearchDestinationInputValue(e.target.value);
           }



     // show/hide takeoff and destination down airport Lists

     const [showDestinationAirports, setShowDestinationAirports] = useState(false)

  
     
     const onCloseDestinationDropdwon = () =>{
       setShowDestinationAirports(false)
     }


     // show/hide flightInputs
    
     const handleShowHotelInputs = ()=>{
        setShowDestinationAirports(!showDestinationAirports)
        setShowHotelInputs(true)
     }









  return (
    <HotelWrapper>
 {/* hero section with form */}
 <HeroSection heroImage={heroImage}>
        
        {/* flight form section */}
        <HotelFormSection sectionHeight={'auto'}>
          
          {/* flight form section  title */}
          <HotelFormSectionTitle>
              <h4>Need hotel accommodation?</h4>
              <h1>Begin your reservation here and enjoy your stay</h1> 
          </HotelFormSectionTitle>

          {/* flight form section content */}
          <HotelFormSectionContent>
           
           
          {/* Flight top level items  such as stopover, manage bookings etc..*/}
           {/* Flight Headers */}
           <GeneralHeaders/>


           {/* Hotel Form */}  
                  <FormWrapper>    
                      <HotelForm
                            handleShowHotelInputs={handleShowHotelInputs}
                            takeOff ={takeOff} 
                            handleDestination={handleDestination}
                            showDestinationAirports={showDestinationAirports}
                            onChangeDestinationHandler={onChangeDestinationHandler}
                            destinationAirportList={destinationAirportList}
                            searchDestinationInputValue={searchDestinationInputValue}
                            setTakeOff={setTakeOff}
                            onCloseDestinationDropdwon={onCloseDestinationDropdwon}
                            showHotelInputs={showHotelInputs}
                            handleCheckInDate={handleCheckInDate}
                            checkInDate={checkInDate}
                            handleCheckOutDate={handleCheckOutDate}
                            checkOutDate={checkOutDate}
                            setShowPassenger={setShowPassenger}
                            showPassenger={showPassenger}
                            adults={adults}
                            children={children}
                            room={room}
                            handleDecrement={handleDecrement}                     
                            handleIncrement={handleIncrement}  
                            handleButtonClick={()=>navigate('/hotel-result')}                    
                      />
                 </FormWrapper>   
          </HotelFormSectionContent>
        </HotelFormSection>
      </HeroSection>

    {/* Hotel Body */}
    <HotelBody>
      
{/* Hotel Category */}
      <Section>
        <h2>Hotel Categories</h2>
            <HotelSlide/>
      </Section>
   



        {/* List of Hotels */}   
        <Section>
          <SpaceBetweenContent>
            <h2>Accommodation Visitors Love</h2> <a href='/'>Explore </a>
          </SpaceBetweenContent>
            <HotelContentWrapper>
                {
                    hotelList.map((item, i)=>(
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

     



        {/* Destination Hotel */}   
        <Section>
        <h2>Popular Destination Hotels</h2>       
           <HotelContentWrapper>
            <HotelDestination imgUrl={riyad} title={'Riyad'}/>
            <HotelDestination imgUrl={trav} title={'dubai'}/>
           </HotelContentWrapper>
           
           <HotelContentWrapper>
              <HotelDestination imgUrl={riyad} title={'Riyad'} bgHeight={'300px'}/>
              <HotelDestination imgUrl={trav} title={'dubai'} bgHeight={'300px'}/>
              <HotelDestination imgUrl={trav} title={'dubai'} bgHeight={'300px'}/>
           </HotelContentWrapper>
          </Section> 
      </HotelBody>
  </HotelWrapper>
  )
}
