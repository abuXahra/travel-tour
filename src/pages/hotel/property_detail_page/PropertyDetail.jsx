
import React, { useRef, useState } from 'react'
import { HotelResultWrapper } from '../hotel_result/HotelResult.style'
import { AvailabilitySubHeading, BottomImage, DetailContent, DetailHeader, DetailHeaderItems, DetailHeaderTitle, DetailResultMain, DetailWrapper, FacilityWrapper, FaqContent, FaqWrapper, HotelDesc, HotelDescWrapper, HotelReserve, HotelSurWrapper, ImageBottom, ImageTop, ImageTopLeft, ImageTopRight, InnerContent, LeftImage, PropertyFeature, PropertyHeaderBody, PropertyHeaders, PropertyImages, PropertyImagesWrapper, PropertyMapWrapper, PropertyOverView, PropertyPrice, RoomAvailabilityContent, RoomAvailabilityWrapper, RoomAvailableAmount, RoomDetail, RoomDetailContent, RoomDetailWrapper, RoomTotalAmount, RuleFaq, RulesContent, RulesItems, RulesWrapper, TravelWrapper } from './PropertyDetail.style'
import Button from '../../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import HotelForm from '../../../components/hotel_components/hotel_form/hotel_form/hotel_form/hotel_form/HotelForm'
import { FaKitchenSet, FaLocationDot, FaPerson, FaPersonWalking, FaTrainSubway } from 'react-icons/fa6'
import image1 from '../../../images/hotels/property_detail_pics/a.jpg'
import image2 from '../../../images/hotels/property_detail_pics/b.jpg'
import image3 from '../../../images/hotels/property_detail_pics/c.jpg'
import image4 from '../../../images/hotels/property_detail_pics/d.jpg'
import image5 from '../../../images/hotels/property_detail_pics/e.jpg'
import image6 from '../../../images/hotels/property_detail_pics/f.jpg'
import image7 from '../../../images/hotels/property_detail_pics/g.jpg'
import { CardWrapper } from './component/ProperFeatureCard.style'
import ProperFeatureCard from './component/ProperFeatureCard'
import { HorizontalSpacing, Section } from '../hotel_booking/HotelBooking.style'
import { MdAccessible, MdBalcony, MdConnectingAirports, MdGrass, MdOutlineGarage, MdOutlineLocalHotel, MdOutlinePets, MdRestaurant } from 'react-icons/md'
import { FaComments, FaMarker, FaServicestack, FaWifi } from 'react-icons/fa'
import { PropertyFeatureList } from '../../../data/object/PropertyFeatureList'
import { LiaBathSolid } from 'react-icons/lia'
import TravelerQtn from '../../../components/hotel_components/travelerQtns/TravelerQtn'
import { TravelerQtn1, TravelerQtn2 } from '../../../data/object/hotelTravelerAsking'
import { FaqList, HotelCFacilitiesWhatsNearbyList, hotelRules, WhatsNearbyList } from '../../../data/object/HotelSuroundigList'
import { IoMdCheckmark } from 'react-icons/io'
import { PiArmchairFill, PiMountainsFill } from 'react-icons/pi'
import { GiCottonFlower } from 'react-icons/gi'
import { SlScreenDesktop } from 'react-icons/sl'
import { TbToolsKitchen3 } from 'react-icons/tb'
import { CiCircleInfo } from 'react-icons/ci'
import HotelFaq from '../../../components/hotel_components/hotel_faq/HotelFaq'

export default function PropertyDetail() {

    const navigate = useNavigate();
    
    const today = new Date().toISOString().split('T')[0];
    
// Hotel form Reservation Variable Declarations:

   // roundTrip is selected by default
   const [destination, setDestination] = useState('');
   const [checkInDate, setCheckInDate] = useState(today);
   const [checkOutDate, setCheckOutDate] = useState(today);
   const [adults, setAdults] = useState(2);
   const [children, setChildren] = useState(3);
   const [room, setRoom] = useState(4);
  const [hotelCity, setHotelCity] = useState('Abuja, Nigeria');
  
  // hotel search input
   const [showHotelInputs, setShowHotelInputs] = useState(false)

  //  Show hotel availabilty inputs
   const [showAvailaBilityInputs, setShowAvailaBilityInputs] = useState(true)


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


//   Property Detail headers:
const propertyHead = [
    {
        title: 'Overview',
        link: '#'
    },
    {
        title: 'Info & prices',
        link: '#'
    },
    {
        title: 'Facitities',
        link: '#'
    },
    {
        title: 'House rules',
        link: '#'
    },
]




const [oneRoomAmount, setOneRoomAmount ] = useState(218399)
const [twoRoomAmount, setTwoRoomAmount ] = useState(518399)
const [totalReservation, setTotalReservation] = useState(oneRoomAmount)

//  HANDLE RESERVATIONS
const handleRoomReservation = (Type) => {
  if(Type === 'one room'){
    setTotalReservation(oneRoomAmount)
  }else if (Type === 'two room') {
    setTotalReservation(twoRoomAmount)
  } else if(Type === "reserve this"){
    navigate('/guest-info')
  }
}


// show FAQ
const [rotateIcon, setRotateIcon] = useState('360deg')
const [rotateIcon2, setRotateIcon2] = useState('360deg')
const [showPurchase, setShowPurchase] =useState(false);
const [showFareRules, setShowFareRules] =useState(false);

// show/hide dropdown handler
const handleOpenAndClose = (type) =>{
  if(type === "purchase condition"){
    setRotateIcon(!rotateIcon)
    setShowPurchase(!showPurchase)
  }else if(type === "fare rule"){
    setRotateIcon2(!rotateIcon2)
      setShowFareRules(!showFareRules)
    }
  }

  // CLICK AND SCROLL TO AVAILABILITY SECTION
  const availabilitySectionRef = useRef(null);
  
  const scrollToAvailabilitySection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <DetailWrapper>
                    {/* Header */}
            <DetailHeader>
                <DetailHeaderItems>
                <DetailHeaderTitle>
                    <h2>Transcorp Hilton</h2>
                    <span>
                       <div><FaLocationDot/></div> 
                        <p>1 Aguiyi Ironsi St, Maitama, Abuja 900001, Federal Capital Territory</p>
                    </span>
                </DetailHeaderTitle>
                {/* Timeline: Trip info steps */}
                <span><Button text={'Reserve this property'} onClick={()=>scrollToAvailabilitySection(availabilitySectionRef)}  /></span>
                </DetailHeaderItems>
        
        {/* Hotel Editing form */}
        
                                    <HotelForm
                                    btnText={'Search'}
                                    rounderBorder={'0px'}
                                    handleShowHotelInputs={handleShowHotelInputs}
                                    takeOff ={hotelCity} 
                                    handleDestination={handleDestination}
                                    showDestinationAirports={showDestinationAirports}
                                    onChangeDestinationHandler={onChangeDestinationHandler}
                                    destinationAirportList={destinationAirportList}
                                    searchDestinationInputValue={searchDestinationInputValue}
                                    setTakeOff={setHotelCity}
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
                                    handleButtonClick={()=>{}}                    
                            />
        </DetailHeader> 
     
     {/* Detail Body */}
            <DetailResultMain>
           

                    {/* Property Headers */}
                    <DetailContent>
                    <PropertyHeaders>
                        {
                            propertyHead.map((item, i)=>(
                                <a href={item.link}>{item.title}</a>
                            ))
                        }
                    </PropertyHeaders>                
                
                {/* Overview Contients */}
                    <PropertyHeaderBody>
                        <PropertyImagesWrapper>
                            <PropertyImages onClick={()=>{alert('poperty pictures')}}>
                                <ImageTop>
                                    <ImageTopLeft >
                                        <LeftImage propertyImg={image2}></LeftImage>
                                        <LeftImage propertyImg={image3}></LeftImage>
                                    </ImageTopLeft>
                                    <ImageTopRight propertyImg={image1}></ImageTopRight>
                                </ImageTop>
                                <ImageBottom>
                                    <BottomImage propertyImg={image4}></BottomImage>
                                    <BottomImage propertyImg={image5}></BottomImage>
                                    <BottomImage propertyImg={image6}></BottomImage>
                                    <BottomImage propertyImg={image7}>
                                        <div>
                                            <b>+29 photos</b>
                                        </div>
                                    </BottomImage>
                                </ImageBottom>
                            </PropertyImages>

                            <PropertyMapWrapper>
                                {/* <PropertyOnMap>
                                </PropertyOnMap> */}
                            </PropertyMapWrapper>
                        </PropertyImagesWrapper>

                    {/* Property features */}
                    <Section>
                      <h2>Property Features</h2>
                        <PropertyFeature>
                          {
                            PropertyFeatureList.map((item, i)=>(
                              <ProperFeatureCard key={i} title={item.title} Icon={item.icon}/>  
                            ))
                          }
                        </PropertyFeature>
                    </Section>


                   {/* Room Details*/}
                    <Section>
                      <RoomDetail>
                        <h4>2 rooms for 2 adults, 1 child</h4>
                        <RoomDetailWrapper>
                          <RoomDetailContent>
                             <div>
                                <div>
                                      <b>1 x Double Room </b>
                                     <span>Price for: 1 person</span> 
                                     <span>Beds: 2 double beds, 9 large double beds</span>
                                      <span>Free cancellation befor 10:00 on 29 July</span>
                                      <span>No prepayment needed - pay at the property</span>
                                      <span>Breakfast Included</span>
                                  </div>
                                  <div>
                                      <h3>NGN 518,399</h3>
                                      Includes taxes and charges
                                  </div>
                              </div> 
                              
                             <div>
                                <div>
                                      <b>1 x Double Room </b>
                                     <span>Price for: 2 persons</span> 
                                     <span>Beds: 2 double beds, 9 large double beds</span>
                                      <span>Free cancellation befor 10:00 on 29 July</span>
                                      <span>No prepayment needed - pay at the property</span>
                                      <span>Breakfast Included</span>
                                  </div>
                                  <div>
                                      <h3>NGN 575,998</h3>
                                      Includes taxes and charges
                                  </div>
                              </div> 
                              
                          </RoomDetailContent>
                  
        
                          <RoomTotalAmount>
                                <span>6 night, 2 adults, 1 child</span>
                                <h3>NGN 575,998</h3>
                                Includes taxes and charges
                          </RoomTotalAmount>
                        </RoomDetailWrapper>

                      </RoomDetail>
                    </Section>


                 {/* Hotel Description*/}
                 <Section>
                      
                    <HotelDescWrapper>
                      <HotelDesc>
                      <p> Situated in Abuja, 5.8 km from IBB Golf Club, The Hague features accommodation with a garden, free private parking, a restaurant and a bar. With free WiFi, this 1-star hotel offers room service and a 24-hour front desk. The property is non-smoking and is set 14 km from Magic Land Abuja.</p>

                       <p>At the hotel the rooms have air conditioning, a desk, a flat-screen TV, a private bathroom, bed linen, towels and a terrace with a mountain view. All rooms will provide guests with a wardrobe and a kettle.</p>

                        <p>Guests at The Hague can enjoy an à la carte breakfast.</p>

                        <p>The nearest airport is Nnamdi Azikiwe International Airport, 35 km from the accommodation.</p>
                      </HotelDesc>
                      <HotelReserve>
                          <div>
                            <h3>Property Highlights</h3>
                            <div>
                                <h4>Rooms with:</h4>
                                <span><MdBalcony /> Balcony</span>
                                <span><FaWifi /> Wifi</span>
                                <span><LiaBathSolid /> Private bathroom</span>
                            </div>
                            <Button text={'Reserve this property for 2 Adults, 1 Child (for 275000)'} onClick={()=>scrollToAvailabilitySection(availabilitySectionRef)} />
                          </div>
                      </HotelReserve>
                    </HotelDescWrapper>
                 </Section>
                    </PropertyHeaderBody>
                </DetailContent>

                {/* Info & price section */}
                <DetailContent ref={availabilitySectionRef}>
                  <PropertyHeaderBody>
                  <Section>

                    {/* Search Availability form */}
                      <h2>Search Property Availability</h2>
                               <HotelForm
                                    pd={'0px'}
                                    btnText={'View Availability'}
                                    rounderBorder={'0px'}
                                    handleShowHotelInputs={handleShowHotelInputs}
                                    takeOff ={hotelCity} 
                                    handleDestination={handleDestination}
                                    showDestinationAirports={showDestinationAirports}
                                    onChangeDestinationHandler={onChangeDestinationHandler}
                                    destinationAirportList={destinationAirportList}
                                    searchDestinationInputValue={searchDestinationInputValue}
                                    setTakeOff={setHotelCity}
                                    onCloseDestinationDropdwon={onCloseDestinationDropdwon}
                                    showHotelInputs={showAvailaBilityInputs}
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
                                    handleButtonClick={()=>{}}                    
                            />

                    
                   </Section>

             {/* All available rooms*/}
               <Section>
                  {/* Search Availability form */}
                  <h3>All available rooms</h3>
                      <RoomDetail shdw={'none'}>
                        <RoomAvailabilityWrapper>
                          <RoomAvailabilityContent>                              
                             <div>
                                <div>
                                    <div>
                                    <AvailabilitySubHeading>Room Type</AvailabilitySubHeading>
                                       <InnerContent>
                                          <b>1 x Double Room </b>
                                        
                                          <span>Beds: 2 double beds, 9 large double beds</span>
                                          <span>Free cancellation befor 10:00 on 29 July</span>
                                          <span>No prepayment needed - pay at the property</span>
                                          <span>Breakfast Included</span>
                                        </InnerContent>
                                    </div>
                                    <div>
                                    <AvailabilitySubHeading>No. of Guest</AvailabilitySubHeading>
                                    <InnerContent>
                                      <span>2 persons</span> 
                                    </InnerContent>
                                    </div>
                                  </div>
                                  <div>
                                  <AvailabilitySubHeading bgColor={'#0D3984'}>Price for 6 nights</AvailabilitySubHeading>
                                  <PropertyPrice> 
                                    <InnerContent>
                                       <h3>NGN 575,998</h3>
                                      Includes taxes and charges
                                    </InnerContent>
                                      <span><Button  bgColor={'transparent'} textColor={'black'} btnBorder={'1px solid #FF6805'} text={'Reserve this'}  onClick={()=>handleRoomReservation('one room')}  /></span>
                                  </PropertyPrice>
                                  </div>
                              </div> 
                              <div>
                                <div>
                                    <div>
                                    <InnerContent>
                                      <b>1 x Double Room </b>
                                      
                                        <span>Beds: 2 double beds, 9 large double beds</span>
                                        <span>Free cancellation befor 10:00 on 29 July</span>
                                        <span>No prepayment needed - pay at the property</span>
                                        <span>Breakfast Included</span>
                                    </InnerContent>
                                    </div>
                                    <div>
                                    <InnerContent>
                                        <span>1 person</span> 
                                    </InnerContent>
                                    </div>
   
                                  </div>
                                  <div>
                                  <PropertyPrice> 
                                  <InnerContent>
                                      <h3>NGN 518,399</h3>
                                      Includes taxes and charges
                                  </InnerContent>
                                  <span><Button textColor={'black'}  bgColor={'transparent'} btnBorder={'1px solid #FF6805'} text={'Reserve this'} onClick={()=>handleRoomReservation('two room') } /></span>
                                  </PropertyPrice> 
                                  </div>
                              </div> 

                              
                          </RoomAvailabilityContent>
                  
        
                          <RoomAvailableAmount>
                          <AvailabilitySubHeading >Reservation Summary</AvailabilitySubHeading>
                            <PropertyPrice>
                              <InnerContent>
                                    <span>6 night, 2 adults, 1 child</span>
                                    <h3>NGN {totalReservation}</h3>
                                    Includes taxes and charges
                                    
                              </InnerContent>
                              <span>
                                <Button text={'I will make this Reservation'} onClick={()=>handleRoomReservation('reserve this')} /></span>
                            </PropertyPrice>
                          </RoomAvailableAmount>
                        </RoomAvailabilityWrapper>

                      </RoomDetail>
                    </Section>
          
                

     {/* Travellers are asking available rooms*/}
     <Section>
            <h3>Travelers are asking</h3>
            <TravelWrapper>
                  <div>
                    { TravelerQtn1.map((item, i)=>(
                        <TravelerQtn key={i} text={item.qtn} bb={i === TravelerQtn1.length-1? 'none':'1px solid #8080803e'}/>
                    )) 
                  }
                  </div>
                  <div>
                  { TravelerQtn2.map((item, i)=>(
                        <TravelerQtn key={i} text={item.qtn} bb={i === TravelerQtn1.length-1? 'none':'1px solid #8080803e'}/>
                    )) 
                  } 
                    </div>
                    <div>
                      <span>
                          <h3>Still have question</h3>
                          <span><Button textColor={'black'}  bgColor={'transparent'} btnBorder={'1px solid #FF6805'} text={'Ask a Question'} onClick={()=>{}} /></span>
                          <p>We have instance response to question</p>
                      </span>
                    </div>
            </TravelWrapper>
     </Section>

     
      {/* Hotel Surroundings*/}
     <Section>
        <h3>Hotel Surroundings</h3>

        <HotelSurWrapper>
            {/* First Column */}
            <div>
                  <div>
                    <div>
                        <span><FaPersonWalking/> </span> 
                        <h4>What's nearby</h4> 
                    </div>
          {          
                  WhatsNearbyList.map((item, i)=>(
                    <span key={i}>
                        <p>{item.title}</p>
                        <p>{item.distance}</p>
                    </span>
            ))    
          }
                </div>
            </div>
            
            {/*Second column  */}
            <div>
                  <div>
                    <div>
                     <span><MdRestaurant /></span>  
                      <h4>Restaurant & Cafe</h4> 
                    </div>
                                  <span >
                                   <p>Restaurant 355 Steakhouse & Lounge</p>
                                      <p>50 m</p>
                                  </span>                   
                                  <span >
                                      <p>Restaurant Pizza Galleria</p>
                                      <p>300 m</p>
                                  </span>                    
                                  <span >
                                      <p>Restaurant A Bar Called Paper</p>
                                      <p>300 m</p>
                                  </span>
                          </div>
                          <div>
                                <div>
                                 <span> <FaTrainSubway/> </span><h4>Public Transport</h4> 
                                </div>
                                  <span >
                                      <p>RestaurantMeal Time Restaurant</p>
                                      <p>150 m</p>
                                  </span>                   
                                  <span >
                                      <p>RestaurantRoof Top Cafe</p>
                                      <p>200 m</p>
                                  </span>                    
                                  <span >
                                      <p>RestaurantA Bar Called Paper</p>
                                      <p>300 m</p>
                                  </span>
                              </div>
                          </div>

                          {/* Third Column */}
                      <div>
                          <div>
                                <div>
                                  <span> <MdConnectingAirports /></span>  <h4>Restaurant & Cafe</h4> 
                                </div>
                                          <span >
                                          <p>Restaurant 355 Steakhouse & Lounge</p>
                                              <p>50 m</p>
                                          </span>                   
                                          <span >
                                              <p>Restaurant Pizza Galleria</p>
                                              <p>300 m</p>
                                          </span>                    
                                  </div>
                          </div>

        </HotelSurWrapper>
     </Section>

         </PropertyHeaderBody>
      </DetailContent>

      {/* Facilities section */}
      <DetailContent>
        <div>
        <h3>Facilities of the Transcorp Hilton</h3>
        <span style={{color: 'grey', fontSize : '12px'}}>Great facilities! Review score, 10</span>
        </div>
        
        <h4>Most Popular Facility</h4>
                        <PropertyFeature>
                          {
                            PropertyFeatureList.map((item, i)=>(
                              <ProperFeatureCard border={'none'} key={i} title={item.title} Icon={item.icon}/>  
                            ))
                          }
                        </PropertyFeature>
          <FacilityWrapper>
            {/* column 1 */}
          <div>
                {/* Bathroom facilities */}
                  <div>
                    <div>
                        <span><LiaBathSolid /> </span> 
                        <h4>Bathroom</h4> 
                    </div>
                      {          
                              HotelCFacilitiesWhatsNearbyList.map((item, i)=>(
                                <span key={i}>
                                    <p><IoMdCheckmark /></p>
                                    <p>{item}</p>
                                </span>
                        ))    
                      }
                 </div>

                 {/* Bedroom Facilities */}
                 <div>
                    <div>
                        <span><MdOutlineLocalHotel/> </span> 
                        <h4>Bathroom</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Linen</p></span>
                      <span><p><IoMdCheckmark /></p><p>Wardrobe or closest</p></span>
                 </div>
                  {/* View Facilities */}
                  <div>
                    <div>
                        <span><PiMountainsFill /> </span> 
                        <h4>View</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Mountain View</p></span>
                      <span><p><IoMdCheckmark /></p><p>View</p></span>
                 </div>    
                {/* Outdoor Facilities */}
               <div>
                    <div>
                        <span><GiCottonFlower/> </span> 
                        <h4>Outdoor</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Balcony</p></span>
                      <span><p><IoMdCheckmark /></p><p>Terrace</p></span>
                      <span><p><IoMdCheckmark /></p><p>Garden</p></span>
                 </div>
            </div>
           {/* column 2 */}
            <div>
               {/* Kitchen Facilities */}
               <div>
                    <div>
                        <span><FaKitchenSet/> </span> 
                        <h4>Kitchen</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Dining Table</p></span>
                      <span><p><IoMdCheckmark /></p><p>Electric Kettle</p></span>
                      <span><p><IoMdCheckmark /></p><p>Microwave</p></span>
                 </div>
                 {/* Pet Facilities */}
                <div>
                    <div>
                        <span><MdOutlinePets /> </span> 
                        <h4>Pet</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Pets are allowed on request. No extra charges</p></span>
                 </div>
                {/* Living Area Facilities */}
                <div>
                    <div>
                        <span><PiArmchairFill /> </span> 
                        <h4>Living Area</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Dining area</p></span>
                      <span><p><IoMdCheckmark /></p><p>Desk</p></span>
                 </div>
                 {/* Media & Technology Facilities */}
                <div>
                    <div>
                        <span><SlScreenDesktop /> </span> 
                        <h4>Media & Technology</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Flat Screen</p></span>
                 </div>
                
                 {/* Food & Drink Facilities */}
                 <div>
                    <div>
                        <span><TbToolsKitchen3 /> </span> 
                        <h4>Food & Drink</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Bar</p></span>
                      <span><p><IoMdCheckmark /></p><p>Tea/Coffe Maker</p></span>
                 </div>
                 {/* Media & Technology Facilities */}
                 <div>
                    <div>
                        <span><FaWifi /> </span> 
                        <h4>Internet</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>WiFi is available in all areas and is free of charge.</p></span>
                
                 </div>    
                 {/* Parking Facilities */}
                 <div>
                    <div>
                        <span><MdOutlineGarage /> </span> 
                        <h4>Parking</h4> 
                    </div>
                      <span><p><IoMdCheckmark /></p><p>Free private parking is possible on site (reservation is not needed)</p></span>
                 </div>
            </div>

            {/*Column 3  */}
            <div>
              {/* Services Facilities */}
                  <div>
                      <div>
                        <span><FaServicestack /> </span> 
                        <h4>Services</h4> 
                      </div>
                      <span><p><IoMdCheckmark /></p><p>Wake-up services</p></span>
                      <span><p><IoMdCheckmark /></p><p>Airport shuttle</p></span>
                      <span><p><IoMdCheckmark /></p><p>24 hour front desk</p></span>
                      <span><p><IoMdCheckmark /></p><p>Room service</p></span>
                 </div>

                  {/* General Facilities */}
                  <div>
                      <div>
                        <span><CiCircleInfo /> </span> 
                        <h4>General</h4> 
                      </div>
                      <span><p><IoMdCheckmark /></p><p>Air condition</p></span>
                      <span><p><IoMdCheckmark /></p><p>Non-smoking throughout</p></span>
                      <span><p><IoMdCheckmark /></p><p>Heating</p></span>
                      <span><p><IoMdCheckmark /></p><p>Family rooms</p></span>
                      <span><p><IoMdCheckmark /></p><p>Non-smoking rooms</p></span>
                 </div>
                    
                    {/* Accessibility Facilities */}
                    <div>
                      <div>
                        <span><MdAccessible /> </span> 
                        <h4>Accessibility</h4> 
                      </div>
                      <span><p><IoMdCheckmark /></p><p>Entire unit located on ground floor</p></span>
                    </div>
                  {/* Wellness Facilities */}
                    <div>
                      <div>
                        <span><MdGrass /> </span> 
                        <h4>Wellness</h4> 
                      </div>
                      <span><p><IoMdCheckmark /></p><p>Hot tub/Jacuzzi</p></span>
                      <span><p><IoMdCheckmark /></p><p>spa and wellness centre</p></span>
                    </div>

                {/* Languages spoken Facilities */}
                    <div>
                      <div>
                        <span><FaComments /> </span> 
                        <h4>Languages spoken</h4> 
                      </div>
                      <span><p><IoMdCheckmark /></p><p>English</p></span>
                    </div>
            </div>
          </FacilityWrapper>
      </DetailContent>


      {/*HOTEL RULES SECTION */}
        <DetailContent>
          <RuleFaq>
          <RulesWrapper>
              <div>
                <h3>Hotel Rules</h3>
                <span style={{color: 'grey', fontSize : '12px'}}>The Transcorp Hilton takes spacial requests-add in the next step!</span>
            </div>
            <RulesItems>
                {
                hotelRules.map((item, i)=>(
                  <RulesContent key={i} bb={i === hotelRules.length-1 ? 'none': '1px solid #8080803e'} >
                      <span><b>{item.title}</b></span>
                      <span>{item.value}</span>
                      <span></span>
                  </RulesContent>
                ))
                }
            </RulesItems>
          </RulesWrapper>
          <FaqWrapper>
            <div>
                <h3>FAQs about The Transcop Hilton</h3>
                <span style={{color: 'grey', fontSize : '12px'}}>The Transcorp Hilton takes spacial requests-add in the next step!</span>

                <FaqContent>
                  {FaqList.map((item, i)=>(
                          <HotelFaq 
                            key={i} 
                            title={item.title} 
                            body={item.body} 
                            bb={i ===  FaqList.length - 1? 'none': '1px solid #8080803e'}/>
                  ))
                    }
                      
                </FaqContent>
            </div>
            <span><Button text={'Check Availability'}  onClick={()=>scrollToAvailabilitySection(availabilitySectionRef)}  /></span>
          </FaqWrapper>
          </RuleFaq>
        
        </DetailContent>
  </DetailResultMain>
    </DetailWrapper>
  )
}

