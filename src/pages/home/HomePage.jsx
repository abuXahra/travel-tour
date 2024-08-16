import React, { useRef } from 'react'
import { HomePageBody, HomePageWrapper, HomeTopSection } from './HomePage.style'
import HeroSection from '../../components/hero/HeroSection'
import homeBg from '../../images/travelunsplash.jpg'
import FlightFormComponents from '../../components/Flight/flight_form_compnents/FlightFormComponents'
import Content from '../../components/homepage_content/Content'
import FlightSlide from '../../components/Flight/flight_packages/flight_slider/FlightSlider'
import Button from '../../components/button/Button'
import { FaArrowDown, FaLongArrowAltDown } from 'react-icons/fa'
import VideoBackground from '../../components/video_background/VideoBackground'

export default function HomePage() {

   // CLICK AND SCROLL TO General Reservation conditions
   const bodyRef = useRef(null);
  
   const handleBodyRef = (sectionRef) => {
     if (sectionRef.current) {
       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
     }
   }
 
  return (
    <HomePageWrapper>
      {/* TOP SECTION */}
      <HeroSection heroImage={homeBg}>
        <HomeTopSection>
            <h4>The Best travel & Tour agency in the world</h4>
            <h1>Journey conveniently with Manzo Travel</h1>
            <Button onClick={()=>handleBodyRef(bodyRef)} text={'Learn more'} rightIcon={<FaLongArrowAltDown />} bgColor={'transparent'} btnBorder={'2px solid white'}/> 
        </HomeTopSection>
      </HeroSection>

    {/* BODY */}
      <HomePageBody>
        <Content ref={bodyRef}/>
      </HomePageBody>
      
    </HomePageWrapper>
  )
}
