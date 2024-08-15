

import React from 'react'
import { ContentInner, ContentWrapper, PackageBody, PackageContent, PackageImage, PackageSection } from './Content.style'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import packImage1 from '../../images/hotels/proxy-image1.jpg'
import packImage2 from '../../images/hotels/proxy-image2.jpg'
import packImage3 from '../../images/hotels/proxy-image3.jpg'
import packImage4 from '../../images/hotels/proxy-image4.jpg'
import { useNavigate } from 'react-router-dom'
import { HotelContentWrapper, SpaceBetweenContent } from '../../pages/hotel/hotel_booking/HotelBooking.style'
import HotelCard from '../hotel_components/hotel_card/HotelCard'
import { hotelList } from '../../data/object/hotelList'
import FlightPackage from '../Flight/flight_packages/FlightPackage'
import FlightSlide from '../Flight/flight_packages/flight_slider/FlightSlider'
import { FlightPackageList } from '../../data/object/flight_packagaes/FlightPackages'

export default function Content() {


  const navigate = useNavigate();

  const PackageSectionList = [
    {
      title: 'An unforgettable holiday in Dubai',
      imgUrl: packImage1,
      calToAction: 'Book now',
      link: '/holiday-in-dubai'
    },
    {
      title: 'Your perfect holiday await',
      imgUrl: packImage2,
      calToAction: 'Book a package',
      link: '/packages'
    },
    {
      title: 'Elevate your experience',
      imgUrl: packImage3,
      calToAction: 'Purchase Addons',
      link: '/holiday-in-dubai'
    },
    {
      title: 'Travel Requirements',
      imgUrl: packImage4,
      calToAction: 'Find out more',
      link: '/travel-requirements'
    },
  ]


  const flightLists = FlightPackageList.slice(0, 2);

  return (
    <ContentWrapper>
       


        {/* Flight Dealings Packages */}
        <ContentInner>
          <h3>Find great fare</h3>
          <p>Wants to fly? choose from the package below and fly with Manzoair</p>            
            <FlightSlide/>

            <PackageSection>
        {flightLists.map((item, i)=>(
                <FlightPackage
                    key={i}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    flightClass={item.flightClass}
                    flightPrice={item.flightPrice}
                    departDate={item.departDate}
                    returnDate={item.returnDate}
                    exploreUrl={item.exploreUrl}
                    onClick={()=>navigate(item.flightUrl)}
                  />
              ))}
          </PackageSection>
          </ContentInner>
    

       
        {/* Manzo Packages */}
        <ContentInner>
          <h3>Let's plan your next trip</h3>
          <p>Thinking of traveling somewhere soon? Here are some options to help you get begin.</p>            
              <PackageSection>
                {       
                PackageSectionList.map((item, i)=>(
                    <PackageContent onClick={()=>navigate(`/${item.link}`)}>
                        <PackageImage bgImage={item.imgUrl}>
                        </PackageImage >
                        <PackageBody>
                            <b><p>{item.title}</p></b>
                            <hr />
                            <span>
                              {item.calToAction}
                              <FaChevronRight/>
                            </span>
                        </PackageBody>
                      </PackageContent>
                ))

              }
              </PackageSection>
            </ContentInner>


        {/* Hotel Deals */}
        <ContentInner>
            <h3>Accommodation visitors love</h3>
            <SpaceBetweenContent>
                <p>Make your stay memorable with our hotel reservations</p> <a href='/'>Explore </a>
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
            </ContentInner>
            
            


    </ContentWrapper>
  )
}
