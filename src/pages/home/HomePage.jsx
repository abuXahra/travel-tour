import React from 'react'
import { HomePageBody, HomePageWrapper, HomeTopSection } from './HomePage.style'
import HeroSection from '../../components/hero/HeroSection'
import homeBg from '../../images/travelunsplash.jpg'
import FlightFormComponents from '../../components/Flight/flight_form_compnents/FlightFormComponents'
import Content from '../../components/homepage_content/Content'
import FlightSlide from '../../components/Flight/flight_packages/flight_slider/FlightSlider'

export default function HomePage() {
  return (
    <HomePageWrapper>
      {/* TOP SECTION */}
      <HeroSection heroImage={homeBg}>
        <HomeTopSection>
            <h4>Best travel agency</h4>
            <h1>Journey conveniently with Manzo Travel</h1> 
        </HomeTopSection>
      </HeroSection>

    {/* BODY */}
      <HomePageBody>
        <Content/>
      </HomePageBody>
      
    </HomePageWrapper>
  )
}
