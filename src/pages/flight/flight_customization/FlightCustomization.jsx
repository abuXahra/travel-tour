import React, { useState } from 'react';
import {
  AddonCard,
  AddonCardButton,
  AddonCardHeader,
  AddonIcon,
  CustomizeAddonWrapper,
  CustomizeBody,
  CustomizeContent,
  CustomizeHeader,
  CustomizeHeaderItems,
  CustomizeHeaderTitle,
  CustomizeSideBar,
  CustomizeSideContent,
  CustomizeWrapper,
  FlightDetailWrapper,
  SideFlightAirport,
  SideFlightSummary,
  TotalTrip,
  TripAirport,
  TripDetailBody,
  TripDetailClass,
  TripDetailTile,
  TripDetailTime,
  TripHour,
  TripMinContent,
  TermsDetail,
  TermsDetailHeader,
  TermStyled,
  CustomizeTripDetail
} from './FlightCustomization.style';
import Button from '../../../components/button/Button';
import Timeline from '../../../components/timeline/Timeline';
import { useNavigate } from 'react-router-dom';
import FlightIcon from '../../../components/flight_icon/FlightIcon';
import flightLogo from '../../../images/aire-peace.png';
import { FaTimes } from 'react-icons/fa';
import { FaTruckFieldUn } from 'react-icons/fa6';
import { FlightAddons } from '../../../data/object/flightAddons';
import { IoIosArrowDown } from 'react-icons/io';

export default function FlightCustomization() {
  const navigate = useNavigate();
  const [showTripSummary, setShowTripSummary] = useState(false);
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsTitle, setTermsTitle] = useState('');
  const [termsBody, setTermsBody] = useState('');

  // Terms and Condition click handler
  const handleTermClick = ({ title, terms }) => {
    setShowTerms(true);
    setTermsTitle(title);
    setTermsBody(terms);
  };

  return (
    <CustomizeWrapper>
      {/* Header */}
      <CustomizeHeader>
        <CustomizeHeaderItems>
          <CustomizeHeaderTitle>
            <span><Button text={'Back'} onClick={() => navigate('/flight-result')} /></span>
            <h2>Proceed with your booking</h2>
          </CustomizeHeaderTitle>
          {/* Timeline: Trip info steps */}
          <Timeline currentStep={3} />
        </CustomizeHeaderItems>
      </CustomizeHeader>

      {/* Body */}
      <CustomizeBody>
        {/* Sidebar */}
        <CustomizeSideBar>
          <CustomizeSideContent>
            <h2>My Cart</h2>
            <h4>Flight</h4>
            <SideFlightAirport>
              <span>
                <FlightIcon IconSize={'14px'} rotate={'45deg'} iconColor={'#4a4a4a'} />
                <div>
                  <p><b>Abuja (ABV) TO LAGOS (LOS)</b></p>
                  <p>Economy Round Trip</p>
                </div>
              </span>
              <span>
                <FlightIcon IconSize={'14px'} rotate={'45deg'} iconColor={'#4a4a4a'} />
                <div>
                  <p><b>LAGOS (LOS) TO Abuja (ABV)</b></p>
                  <p>Economy Round Trip</p>
                </div>
              </span>
            </SideFlightAirport>
            <h4>Flight Fare Summary</h4>
            <SideFlightSummary>
              <div>
                <span>Adult X 1</span>
                <span></span>
              </div>
              <div>
                <span>Base Fee</span>
                <span>N317,000</span>
              </div>
              <div>
                <span>Discount</span>
                <span>0</span>
              </div>
              <div>
                <span>Service Charge</span>
                <span>0</span>
              </div>
              <div>
                <span><b>Total Fare</b></span>
                <span>N317,000</span>
              </div>
            </SideFlightSummary>
            <TotalTrip>
              <div>
                <span>Trip Total</span>
                <span>N317,000</span>
              </div>
            </TotalTrip>
          </CustomizeSideContent>
        </CustomizeSideBar>

        {/* Main Content */}
        <TripMinContent>
          {/* User info content */}
          <CustomizeContent>
            {/* Flight Detail section */}
            <FlightDetailWrapper>
              {/* Title */}
              <TripDetailTile onClick={() => setShowTripSummary(!showTripSummary)}>
                <span><h2>Trip Summary</h2></span>
                <span>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </span>
              </TripDetailTile>
              {/* Body */}
              {showTripSummary &&
                <div>
                  <TripDetailBody mb={'20px'}>
                    <TripDetailClass>
                      <span><img src={flightLogo} alt="" /> <h4>Air Peace</h4> <p>73G</p></span>
                      <span>Economy</span>
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
                            <FlightIcon rotate={'180deg'} iconColor={'#0D3984'} />
                            <hr />
                          </div>
                        </span>
                      </TripHour>
                      <TripAirport>
                        <div>
                          <p><b>Abuja</b>.ABV, Nnamdi Azikwe International Ai...</p>
                          <p><b>Lagos</b>.BOS, Murtala Muhammed International...</p>
                        </div>
                        <div>
                          <span><h4>BAGGAGE:</h4> <p>ADULT</p></span>
                          <span><h4>CHECK IN:</h4> <p>20KG</p></span>
                        </div>
                        <div style={{ fontSize: "12px" }}>
                          <p>Saturday, July 13</p>
                          <p>0 Stops. 1h 15m</p>
                        </div>
                      </TripAirport>
                    </TripDetailTime>
                  </TripDetailBody>
                  <TripDetailBody>
                    <TripDetailClass>
                      <span><img src={flightLogo} alt="" /> <h4>Air Peace</h4> <p>73G</p></span>
                      <span>Economy</span>
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
                            <FlightIcon rotate={'360deg'} iconColor={'#FF6805'} />
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
                          <span><h4>CHECK IN:</h4> <p>20KG</p></span>
                        </div>
                        <div style={{ fontSize: "12px" }}>
                          <p>Saturday, July 13</p>
                          <p>0 Stops. 1h 15m</p>
                        </div>
                      </TripAirport>
                    </TripDetailTime>
                  </TripDetailBody>
                </div>
              }
            </FlightDetailWrapper>

            {/* For flight return */}
            <FlightDetailWrapper>
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
                  <TripDetailClass>
                    <span><img src={flightLogo} alt="" /> <h4>Air Peace</h4> <p>73G</p></span>
                    <span>Economy</span>
                  </TripDetailClass>
                  <TripDetailTime>
                    <CustomizeTripDetail>
                      <h4>(1) ISAH ABDULMUMIN</h4>
                      <p>ADULT</p>
                      <span>MALE</span>
                      <span>abdulmuminisah79@gmail.com</span>
                    </CustomizeTripDetail>
                  </TripDetailTime>
                </TripDetailBody>
              }
            </FlightDetailWrapper>
          </CustomizeContent>

          {/* Trip Addons */}
          <CustomizeContent>
            <h2>Manzo Travel Addons Services</h2>
            <p>Include manzo addon services in your trip</p>
          </CustomizeContent>

          {FlightAddons.map((addon, i) => (
            <CustomizeContent key={i}>
              <CustomizeAddonWrapper>
                <AddonCard>
                  <AddonCardHeader>
                    <AddonIcon><FaTruckFieldUn /></AddonIcon>
                    <span>
                      <h2>{addon.title}</h2>
                      <p>{addon.description}</p>
                      <TermStyled onClick={() => handleTermClick({ title: addon.title, terms: addon.terms })}>
                        <p>Terms and Conditions</p> <IoIosArrowDown />
                      </TermStyled>
                    </span>
                  </AddonCardHeader>
                  <AddonCardButton>
                    <h3>{addon.price}</h3>
                    <p>{addon.numberOfPerson}</p>
                    <Button text={'ADD ADDON'} />
                  </AddonCardButton>
                </AddonCard>
              </CustomizeAddonWrapper>
            </CustomizeContent>
          ))}
             <div><Button onClick={()=>navigate('/overview-payment')} text={'Continue to payment'} /></div> 
        </TripMinContent>
      </CustomizeBody>

      {showTerms &&
        <TermsDetail>
          <CustomizeContent wd={'50%'}>
            <CustomizeAddonWrapper>
              <AddonCard flexDir="column">
                <TermsDetailHeader>
                  <h2>{termsTitle}</h2>
                  <span onClick={() => setShowTerms(false)}><FaTimes /></span>
                </TermsDetailHeader>
                <p>{termsBody}</p>
                <span>
                  <button onClick={() => setShowTerms(false)}>Continue</button>
                </span>
              </AddonCard>
            </CustomizeAddonWrapper>
          </CustomizeContent>
        </TermsDetail>
      }
    </CustomizeWrapper>
  );
}
