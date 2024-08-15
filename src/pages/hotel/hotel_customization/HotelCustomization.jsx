import React, { useState } from 'react';

import Button from '../../../components/button/Button';
import Timeline from '../../../components/timeline/Timeline';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import flightLogo from '../../../images/aire-peace.png';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { FaTruckFieldUn } from 'react-icons/fa6';
import { FlightAddons } from '../../../data/object/flightAddons';
import { IoIosArrowDown } from 'react-icons/io';
import { AddonCardHeader, AddonIcon, CustomizeAddonWrapper, CustomizeBody, CustomizeContent, CustomizeHeader, CustomizeHeaderItems, CustomizeHeaderTitle, CustomizeSideBar, CustomizeSideContent, CustomizeTripDetail, CustomizeWrapper, FlightDetailWrapper, HotelDetailWrapper, PromoHeader, PromoInput, PromoWrapper, SideFlightAirport, SideFlightSummary, TotalTrip, TripAirport, TripDetailBody, TripDetailClass, TripDetailTile, TripDetailWrapper, TripHour, TripMinContent } from './HotelCustomization.style';
import { GuestFormWrapper, GuestInfoContent, GuestInfoSideBar, GuestInfoSideContent, GutestDetailBody, GutestDetailClass, GutestDetailTitle, GutestDetailWrapper, TripDetailTime } from '../gues_info/GuestInfo.style';
import { MdLocalHotel } from 'react-icons/md';
import Input from '../../../components/inputs/input/Input';

export default function HotelCustomization() {
  const navigate = useNavigate();
  const [showtripDepart, setShowtripDepart] = useState(true)
  const [showTravelDetail, setShowTravelDetail] = useState(true)



  return (
    <CustomizeWrapper>
      {/* Header */}
      <CustomizeHeader>
        <CustomizeHeaderItems>
          <CustomizeHeaderTitle>
            <span><Button text={'Back'} onClick={() => navigate('/guest-info')} /></span>
            <h2>Proceed with your booking</h2>
          </CustomizeHeaderTitle>
          {/* Timeline: Trip info steps */}
          <Timeline currentStep={3} />
        </CustomizeHeaderItems>
      </CustomizeHeader>

      {/* Body */}
      <CustomizeBody>
          {/* Sidebar */}

          <GuestInfoSideBar>
                  <GuestInfoSideContent>
                    <h2>My Cart</h2>
                    <h4>Hotel</h4>
                    <SideFlightAirport>
                      <span>
                        <FlightIcon Icon={<MdLocalHotel/>} IconSize={'14px'} rotate={'360deg'} iconColor={'#4a4a4a'}/> 
                      <div>
                          <p><b>Transcorp Hilton</b></p> 
                          <p>2 Classic: 6 night</p>
                        </div> 
                    </span>

                    </SideFlightAirport>

                    <h4>Hotel Fare Summary</h4>
                    <SideFlightSummary>
                    <div>
                      <span>Adult X 2</span>
                      <span></span>
                    </div>
                    <div>
                      <span>1 Room(s) x 1</span>
                      <span>N250,000</span>
                    </div>
                    <div>
                      <span>1 Room(s) x 1</span>
                      <span>N250,000</span>
                    </div>
                    <div>
                      <span><b>Total Fare</b></span>
                      <span>N500,000</span>
                    </div>
                    </SideFlightSummary>
                    <TotalTrip>
                      <div>
                        <span>Trip Total</span>
                        <span>N500,000</span>
                      </div>
                    </TotalTrip>
                  </GuestInfoSideContent>
                  <GuestFormWrapper>
                    <PromoWrapper>
                      <PromoHeader>PROMO CODE</PromoHeader>
                      <PromoInput>
                        <Input title={'PROMO CODE'}/>
                        <div> <Button text={'Apply'}/></div>
                      </PromoInput>
                    </PromoWrapper>
                    </GuestFormWrapper>
              
                </GuestInfoSideBar> 

        {/* Main Content */}
        <TripMinContent>
          {/* User info content */}
          <CustomizeContent>
            {/* User info content */}
     
              
             {/* For Departure */}
              <GutestDetailWrapper>
               {/* title */}
                  <GutestDetailTitle onClick={()=>setShowtripDepart(!showtripDepart)}>
                    <span> <h2>Reservation Summary</h2> </span>
                    <span>
                      
                      <div>
                            <IoIosArrowDown />
                      </div>
                    </span>
                  </GutestDetailTitle>
                      {/* body */}
                    {  showtripDepart &&
                     <GutestDetailBody>
                        <span> <h2>Transcorp Hilton,</h2> <h2>Abuja</h2> </span>
                        <GutestDetailClass>
                          <span>
                            1 Aguiyi Ironsi St, Maitama, Abuja 900001, Federal Capital Territory </span>
                          <span><a href="#">2 Classic</a></span>
                        </GutestDetailClass>
                        <TripDetailTime>
                            <TripHour>
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
                          </TripHour>
                        <TripAirport>
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
                        </TripAirport>
         
                        </TripDetailTime>
                  </GutestDetailBody>}
              </GutestDetailWrapper>           
          </CustomizeContent>

          <CustomizeContent>
          {/* Trip Addons */}
        {/* For flight return */}
        <HotelDetailWrapper>
              {/* Title */}
              <TripDetailTile onClick={() => setShowTravelDetail(!showTravelDetail)}>
                <span><h2>Travel Detail</h2></span>
                <span>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </span>
              </TripDetailTile>
              {/* Body */}
              {showTravelDetail &&
                <TripDetailBody>
                  <TripDetailWrapper>
                    <CustomizeTripDetail>
                    <h4>(1) ISAH ABDULMUMIN ADULT MALE abdulmuminisah79@gmail.com</h4>
                    </CustomizeTripDetail>
                    <span onClick={()=>navigate('/edit-guest-info')}><FaEdit/></span>
                  </TripDetailWrapper>
                  <TripDetailWrapper>
                    <CustomizeTripDetail>
                      <h4>(2) ISAH YUSUF ADULT MALE abdulmuminisah79@gmail.com</h4>
                    </CustomizeTripDetail>
                    <span onClick={()=>navigate('/edit-guest-info')}><FaEdit/></span>  
                  </TripDetailWrapper>
                </TripDetailBody>
              }
            </HotelDetailWrapper>
          </CustomizeContent>

             <div><Button onClick={()=>navigate('/hotel-overview')} text={'Continue to payment'} /></div> 
        </TripMinContent>
      </CustomizeBody>

      
    </CustomizeWrapper>
  );
}
